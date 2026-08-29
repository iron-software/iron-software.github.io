/**
 * archive.mjs — resolve a product and a pair of archived versions, entirely offline
 * (Node port of archive.py).
 *
 * Directory existence under `object-reference/<code>/` is the whole version index — there is no
 * manifest — so every lookup here is a filesystem read. Nothing contacts a package registry, which
 * is what lets the tool run on a machine with no network and no credentials.
 */

import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

import { PRODUCTS_CATALOG, getApidocPath, listArchivedVersions, compareVersions, versionSortKey } from "../apidocs.mjs";

/** Only DocFX-generated (.NET) products carry the xrefmap.yml + api/*.html pair this tool reads. */
export const SUPPORTED_PACKAGE_TYPES = new Set(["nuget"]);

/** A resolution failure with a message already written for the operator. */
export class ArchiveError extends Error {}

function loadCatalog() {
  return JSON.parse(readFileSync(PRODUCTS_CATALOG, "utf-8"));
}

/** Return a product's catalog entry from iron-products.json. */
export function loadProduct(productCode = null, productName = null) {
  if (!productCode && !productName) {
    throw new ArchiveError("Please specify product code or product name (-p, --product-code | -n, --product-name)");
  }
  const catalog = loadCatalog();
  for (const product of catalog.libraries) {
    if ((productCode && product.code === productCode) || (productName && product.name === productName)) return product;
  }
  const known = catalog.libraries.map((product) => product.code).sort().join(", ");
  throw new ArchiveError(`Specified product does not exist. Known product codes: ${known}`);
}

/** Product codes this tool can diff, in catalog order. */
export function supportedProductCodes() {
  return loadCatalog().libraries
    .filter((product) => SUPPORTED_PACKAGE_TYPES.has(product.packageType) && listArchivedVersions(product.code).length)
    .map((product) => product.code);
}

/** Reject products whose docs are not DocFX output (JavaDoc, pip, npm). */
export function requireSupported(product) {
  const packageType = product.packageType;
  if (!SUPPORTED_PACKAGE_TYPES.has(packageType)) {
    throw new ArchiveError(
      `${product.code} is a ${packageType === "maven" ? "JavaDoc" : packageType} product `
      + `(packageType: ${packageType}).\n`
      + `Signature diffing is not yet supported. Supported: ${supportedProductCodes().join(", ")}`,
    );
  }
}

/** Distance stand-in for a component that cannot be compared numerically, so it always ranks last. */
const INCOMPARABLE = 10 ** 9;

/**
 * Archived versions closest to the requested one, nearest first.
 *
 * Candidates are ranked first by *how deep* the first differing component is — sharing a major
 * version matters more than a small difference in it, so 2026.5.9 suggests 2026.5.2 ahead of
 * 2025.1.1 — and only then by the size of that difference.
 */
function nearest(version, available, limit = 5) {
  const target = versionSortKey(version);

  const distance = (candidate) => {
    const key = versionSortKey(candidate);
    const shared = Math.min(target.length, key.length);
    for (let index = 0; index < shared; index++) {
      const [leftKind, leftValue, leftText] = target[index];
      const [rightKind, rightValue, rightText] = key[index];
      if (leftKind !== rightKind || leftValue !== rightValue || leftText !== rightText) {
        const magnitude = leftKind === 0 && rightKind === 0 ? Math.abs(leftValue - rightValue) : INCOMPARABLE;
        // Negated so a difference appearing later (a longer shared prefix) sorts first.
        return [-index, magnitude, candidate];
      }
    }
    return [-target.length, 0, candidate];
  };

  return [...available]
    .map((candidate) => [distance(candidate), candidate])
    .sort(([a], [b]) => a[0] - b[0] || a[1] - b[1] || (a[2] < b[2] ? -1 : a[2] > b[2] ? 1 : 0))
    .slice(0, limit)
    .map(([, candidate]) => candidate);
}

/** Throw unless the version has a built directory in the archive. */
export function requireVersion(product, version, available) {
  if (available.includes(version)) return;
  const suggestions = available.length ? nearest(version, available).join(", ") : "(none archived)";
  throw new ArchiveError(
    `${product.code} ${version} is not in the archive.\n`
    + `Nearest archived: ${suggestions}\n`
    + "Run update-apidocs to build it.",
  );
}

/**
 * Resolve the pair of versions to diff. With neither given, the two newest archived versions are
 * used; with only one, the other end is the newest archived version.
 *
 * @returns {[string, string, string[]]} `[versionFrom, versionTo, available]`, oldest end first.
 */
export function resolveVersions(product, versionFrom = null, versionTo = null) {
  const available = listArchivedVersions(product.code);
  if (!available.length) {
    throw new ArchiveError(`No archived versions found for ${product.code} under object-reference/.`);
  }

  if (!versionFrom && !versionTo) {
    if (available.length < 2) {
      throw new ArchiveError(
        `${product.code} has only one archived version (${available[0]}); nothing to diff against.`,
      );
    }
    return [available[available.length - 2], available[available.length - 1], available];
  }

  if (versionFrom && !versionTo) versionTo = available[available.length - 1];
  else if (versionTo && !versionFrom) versionFrom = available[available.length - 1];

  requireVersion(product, versionFrom, available);
  requireVersion(product, versionTo, available);

  if (versionFrom === versionTo) {
    throw new ArchiveError(`--from and --to are both ${versionFrom}; nothing to diff.`);
  }

  // Report oldest to newest regardless of the order the operator supplied them.
  if (compareVersions(versionFrom, versionTo) > 0) [versionFrom, versionTo] = [versionTo, versionFrom];
  return [versionFrom, versionTo, available];
}

/** Path to one archived version directory. */
export function versionDirectory(product, version) {
  const path = getApidocPath(product, version);
  const xrefmap = join(path, "xrefmap.yml");
  if (!existsSync(xrefmap) || !statSync(xrefmap).isFile()) {
    throw new ArchiveError(`${product.code} ${version} has no xrefmap.yml at ${path}; the build may be incomplete.`);
  }
  return path;
}
