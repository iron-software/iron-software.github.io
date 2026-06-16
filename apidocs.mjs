/**
 * apidocs.mjs — shared product version-management utilities (Node port of apidocs.py).
 *
 * Dependency-free: uses Node's built-in fetch (Node 18+) for every registry, and parses
 * maven-metadata.xml with a small regex (the document shape is fixed and simple). Function names
 * and return shapes mirror the Python module so the two ports stay interchangeable.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const CWD = dirname(fileURLToPath(import.meta.url));

/** Network timeout (ms) for registry/metadata requests — keeps a flaky endpoint from hanging. */
export const HTTP_TIMEOUT = 30_000;

// API endpoints per package manager (NuGet, NPM, PyPi + Maven Central).
const NUGET_ENDPOINT_FORMAT = (pkg) => `https://api-v2v3search-0.nuget.org/query?q=packageid:${pkg}`;
const NPM_ENDPOINT_FORMAT = (pkg) => `https://registry.npmjs.org/${pkg}`;
const PYPI_ENDPOINT_FORMAT = (pkg) => `https://pypi.org/pypi/${pkg}/json`;
// Maven Central object storage; versions come from maven-metadata.xml, release dates from each .pom.
const MAVEN_REPOSITORY_BASE = "https://repo1.maven.org/maven2";

/** Fully-qualified path to iron-products.json. */
export const PRODUCTS_CATALOG = join(CWD, "iron-products.json");
/** Root of the object-reference cache where generated docs are stored. */
export const APIDOCS_STORAGE_PATH = join(CWD, "object-reference");

/** Build the storage path for a product's versioned API documentation. */
export function getApidocPath(info, versionString) {
  return join(APIDOCS_STORAGE_PATH, info.code, versionString);
}

/** Whether a product's documentation for a version already exists in the cache. */
export function apidocAlreadyExists(info, versionString) {
  return existsSync(getApidocPath(info, versionString));
}

/** fetch() with an AbortController-backed timeout. */
async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), HTTP_TIMEOUT);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/** Run `worker` over `items` with at most `limit` in flight; returns results in input order. */
async function mapWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  async function run() {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
  return results;
}

/**
 * Return the maven artifact's published versions, newest first. Each entry is
 * `{ v, timestamp, lastModified }`, preserving the `v` key the rest of the tooling reads.
 *
 * The historic Maven solrsearch endpoint served stale data, so the version list comes from
 * maven-metadata.xml and each release date from the Last-Modified header of its .pom.
 */
export async function getMavenPackageVersions(groupId, artifactId) {
  const groupPath = groupId.replaceAll(".", "/");
  const artifactBaseUrl = `${MAVEN_REPOSITORY_BASE}/${groupPath}/${artifactId}`;

  // 1. Fetch maven-metadata.xml and extract the version list from the <versions> block.
  const metadataResponse = await fetchWithTimeout(`${artifactBaseUrl}/maven-metadata.xml`);
  if (!metadataResponse.ok) throw new Error(`maven-metadata.xml: HTTP ${metadataResponse.status}`);
  const metadataXml = await metadataResponse.text();
  const versionsBlock = metadataXml.match(/<versions>([\s\S]*?)<\/versions>/)?.[1] ?? "";
  const versionStrings = [...versionsBlock.matchAll(/<version>([^<]+)<\/version>/g)].map((m) => m[1].trim());

  // 2. For each version, HEAD its .pom and read Last-Modified as the release date (concurrently).
  const resolved = await mapWithConcurrency(versionStrings, 12, async (versionString) => {
    const pomUrl = `${artifactBaseUrl}/${versionString}/${artifactId}-${versionString}.pom`;
    try {
      const head = await fetchWithTimeout(pomUrl, { method: "HEAD", redirect: "follow" });
      if (!head.ok) return null;
      const lastModified = head.headers.get("last-modified");
      const timestamp = lastModified ? Date.parse(lastModified) / 1000 : 0;
      return { v: versionString, timestamp, lastModified };
    } catch {
      return null;
    }
  });

  // 3. Newest first, so callers that take [0] as the latest version stay correct.
  return resolved.filter(Boolean).sort((a, b) => b.timestamp - a.timestamp);
}

/** PyPI releases map: `{ <version>: [<dist>, ...] }`. */
export async function getPipPackageVersions(packageName) {
  const response = await fetchWithTimeout(PYPI_ENDPOINT_FORMAT(packageName));
  return (await response.json()).releases;
}

/** npm versions map: `{ <version>: <versionObject> }`. */
export async function getNpmPackageVersions(packageName) {
  const response = await fetchWithTimeout(NPM_ENDPOINT_FORMAT(packageName));
  return (await response.json()).versions;
}

/** NuGet versions: array of `{ version, ... }`, oldest→newest. */
export async function getNugetPackageVersions(packageName) {
  const response = await fetchWithTimeout(NUGET_ENDPOINT_FORMAT(packageName));
  return (await response.json()).data[0].versions;
}

/**
 * Resolve a product's catalog entry, its available versions, and its latest version. Mirrors the
 * Python `query_product_info` exactly, including the per-package-type latest-version selection.
 */
export async function queryProductInfo(productCode, productName = null) {
  const products = JSON.parse(readFileSync(PRODUCTS_CATALOG, "utf-8"));
  const selectedProduct = products.libraries.find(
    (p) => p.code === productCode || (productName !== null && p.name === productName),
  ) ?? null;

  let availableVersions = null;
  let latestVersion = null;

  if (selectedProduct !== null) {
    const type = selectedProduct.packageType;
    if (type === "nuget") availableVersions = await getNugetPackageVersions(selectedProduct.packageName);
    else if (type === "maven") availableVersions = await getMavenPackageVersions(selectedProduct.groupId, selectedProduct.artifactId);
    else if (type === "pip") availableVersions = await getPipPackageVersions(selectedProduct.packageName);
    else if (type === "npm") availableVersions = await getNpmPackageVersions(selectedProduct.packageName);

    if (availableVersions && (Array.isArray(availableVersions) ? availableVersions.length : Object.keys(availableVersions).length) > 0) {
      if (type === "pip" || type === "npm") {
        const versionKeys = Object.keys(availableVersions);
        latestVersion = availableVersions[versionKeys[versionKeys.length - 1]];
        if (type === "pip") latestVersion = latestVersion[0];
        if (!("version" in latestVersion)) latestVersion.version = versionKeys[versionKeys.length - 1];
        availableVersions = versionKeys.map((version) => {
          let packageVersion = availableVersions[version];
          if (type === "pip") {
            packageVersion = packageVersion[0];
            packageVersion.version = version;
          }
          return packageVersion;
        });
      } else if (type === "maven") {
        latestVersion = availableVersions[0];
      } else {
        latestVersion = availableVersions[availableVersions.length - 1];
      }
    }
  }

  return { product: selectedProduct, available_versions: availableVersions, latest_version: latestVersion };
}

/** The resolved version string for a product (latest, or scanning the available list). */
export function getProductVersion(productData, version = "", getLatestVersion = true) {
  let resolved = "N/A";
  if (getLatestVersion) {
    resolved = productData.product.packageType === "maven"
      ? productData.latest_version.v
      : productData.latest_version.version;
  } else if (version !== "") {
    for (const product of productData.available_versions) {
      resolved = productData.product.packageType === "maven" ? product.v : product.version;
    }
  }
  return resolved;
}

/** Whether the given version exists in the catalog AND its docs are already built. */
export function checkIfProductAndVersionExists(productData, productVersion) {
  for (const product of productData.available_versions) {
    const version = productData.product.packageType === "maven" ? product.v : product.version;
    if (version === productVersion) {
      return apidocAlreadyExists(productData.product, productVersion);
    }
  }
  return false;
}
