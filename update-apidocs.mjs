#!/usr/bin/env node
/**
 * update-apidocs.mjs — generate missing object-reference documentation (Node port of
 * update-apidocs.py). Builds .NET docs with DocFX and IronPDF-for-Java docs from the published
 * JavaDoc jar, runs the post-generation tasks (GUID-marker stripping + canonical tags), and caches
 * each build under `object-reference/<code>/<version>/`.\
 */

import {
  readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, cpSync, renameSync, readdirSync,
} from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
import {
  PRODUCTS_CATALOG, getApidocPath, apidocAlreadyExists,
  getNugetPackageVersions, getMavenPackageVersions,
} from "./apidocs.mjs";
import { StatusLogger } from "./statuslogger.mjs";

const CWD = dirname(fileURLToPath(import.meta.url));
const DOCS_BUILDING_DIR = join(CWD, "scaffolds");
const DOCFX_EXECUTABLE_PATH = join(CWD, "scaffolds", "tools", "docfx", "tools", "docfx.exe");
const JAVA_PATH = join(CWD, "scaffolds", "tools", "jdk");
const ARCHETYPE_N_DIR = join(CWD, "scaffolds", "tools", "archetype-n");

// Archetype-N enhancement runs after DocFX generation by default; --no-enhancement disables it.
let ENHANCE_ENABLED = true;
let ENHANCE_OPTS = { force: false, provider: null, model: null };

// A bare DocFX GUID marker (`<8e7c…-…>`) as it appears in a file name (global: a name may repeat it).
const GUID_MARKER_RE = /<[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}>/g;
// The same marker inside an href value — raw or HTML/URL-encoded angle brackets.
const GUID_MARKER_IN_HREF_RE = /(?:<|&lt;|%3C)[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(?:>|&gt;|%3E)/g;
// An href="…" / href='…' attribute (value contains neither quote character).
const HREF_ATTR_RE = /(\bhref=)(["'])([^"']*)\2/g;
// An existing rel="canonical" link (any attribute order) — keeps the canonical pass idempotent.
const CANONICAL_LINK_RE = /<link\b[^>]*\brel=["']canonical["']/i;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function isWindowsOs() {
  return process.platform === "win32";
}

/** Yield every .html/.htm file path under `directory`. */
function* iterHtmlFiles(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const full = join(directory, entry.name);
    if (entry.isDirectory()) yield* iterHtmlFiles(full);
    else if (/\.html?$/i.test(entry.name)) yield full;
  }
}

/**
 * Remove DocFX's spurious `<GUID>` markers from file names and href values (item 4). Renames
 * bottom-up so a parent rename never invalidates a child path. Idempotent. Returns the rename count.
 */
export function stripGuidMarkers(directory) {
  let renamed = 0;
  const renamePass = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) renamePass(full); // recurse first (deepest names rename first)
      const cleaned = entry.name.replace(GUID_MARKER_RE, "");
      if (cleaned !== entry.name) {
        renameSync(full, join(dir, cleaned));
        renamed++;
      }
    }
  };
  renamePass(directory);

  for (const htmlPath of iterHtmlFiles(directory)) {
    const content = readFileSync(htmlPath, "utf-8");
    const cleaned = content.replace(
      HREF_ATTR_RE,
      (_match, attr, quote, value) => `${attr}${quote}${value.replace(GUID_MARKER_IN_HREF_RE, "")}${quote}`,
    );
    if (cleaned !== content) writeFileSync(htmlPath, cleaned);
  }
  return renamed;
}

/**
 * Idempotently ensure every HTML page under `directory` carries a `<link rel="canonical">` (item 6).
 * Pages that already declare one are left untouched. Returns the count of pages updated.
 */
export function applyCanonicalTags(directory, canonicalBaseUrl) {
  const base = canonicalBaseUrl.replace(/\/+$/, "") + "/";
  let updated = 0;
  for (const htmlPath of iterHtmlFiles(directory)) {
    let content = readFileSync(htmlPath, "utf-8");
    if (CANONICAL_LINK_RE.test(content)) continue; // already canonicalized
    const relativeUrl = relative(directory, htmlPath).split(sep).join("/");
    const tag = `<link rel="canonical" href="${base}${relativeUrl}">`;
    content = /<\/head>/i.test(content)
      ? content.replace(/<\/head>/i, `${tag}\n</head>`)
      : `${tag}\n${content}`;
    writeFileSync(htmlPath, content);
    updated++;
  }
  return updated;
}

/** The product's canonical URL prefix from its docfx.<code>.json, or the legacy fallback shape. */
export function getDocfxCanonicalPrefix(info) {
  const configPath = join(DOCS_BUILDING_DIR, `docfx.${info.code}.json`);
  try {
    const config = JSON.parse(readFileSync(configPath, "utf-8"));
    const prefix = config?.build?.globalMetadata?.canonicalUrlPrefix;
    if (prefix) return prefix;
  } catch {
    // fall through to the default below
  }
  return `https://${info.domain}${info.path}/object-reference/`;
}

function getJarExecutablePath() {
  return isWindowsOs()
    ? join(JAVA_PATH, "windows", "bin", "jar.exe")
    : join(JAVA_PATH, "linux", "bin", "jar");
}

/** Download a URL to a file. Returns true on success, false on a non-OK response or network error. */
async function downloadFile(url, destinationPath) {
  try {
    const response = await fetch(url, { redirect: "follow" });
    if (!response.ok) return false;
    writeFileSync(destinationPath, Buffer.from(await response.arrayBuffer()));
    return true;
  } catch {
    return false;
  }
}

async function buildJavaApidoc(info, versionString) {
  StatusLogger.title(`Building ${info.name} JavaDoc — v${versionString}`);
  process.chdir(DOCS_BUILDING_DIR);

  const jarFilename = `ironpdf-${versionString}-javadoc-java11-javadoc.jar`;
  const jarAlternateFilename = `ironpdf-${versionString}-javadoc.jar`;
  const releaseBase = `https://github.com/iron-software/IronPDF-for-Java/releases/download/${versionString}`;
  const downloadPath = join(DOCS_BUILDING_DIR, "output", info.domain, "java");
  const destinationPath = getApidocPath(info, versionString);
  // The JavaDoc tree root is served at the `…/object-reference/api/` URL segment.
  const javaCanonicalBase = `https://${info.domain}${info.path}/object-reference/api/`;

  try {
    if (existsSync(downloadPath)) rmSync(downloadPath, { recursive: true, force: true });
  } catch {
    StatusLogger.warning("Download directory is locked; retrying in 60s...");
    await sleep(60_000);
    if (existsSync(downloadPath)) rmSync(downloadPath, { recursive: true, force: true });
  }

  mkdirSync(downloadPath, { recursive: true });
  const jarFilePath = join(downloadPath, jarFilename);
  StatusLogger.progress(`Downloading JavaDoc jar from GitHub releases (${versionString})...`);
  if (!(await downloadFile(`${releaseBase}/${jarFilename}`, jarFilePath))) {
    StatusLogger.notice("Primary jar name not found; trying the alternate name...");
    if (!(await downloadFile(`${releaseBase}/${jarAlternateFilename}`, jarFilePath))) {
      StatusLogger.error(`No JavaDoc jar published for ${info.name} v${versionString}; skipping.`);
      return;
    }
  }

  StatusLogger.progress("Extracting JavaDoc jar...");
  execFileSync(getJarExecutablePath(), ["xf", jarFilename], { cwd: downloadPath, stdio: "inherit" });

  StatusLogger.progress("Applying canonical link tags...");
  const canonicalCount = applyCanonicalTags(downloadPath, javaCanonicalBase);
  StatusLogger.info(`Added canonical tags to ${canonicalCount} JavaDoc page(s).`);

  StatusLogger.progress(`Archiving to ${destinationPath}...`);
  if (existsSync(destinationPath)) rmSync(destinationPath, { recursive: true, force: true });
  mkdirSync(destinationPath, { recursive: true });
  cpSync(downloadPath, destinationPath, { recursive: true });

  StatusLogger.success(`Built ${info.name} JavaDoc v${versionString}.`);
}

/**
 * Archetype-N post-DocFX enhancement: inject SEO overviews into the freshly-built
 * `…/object-reference/api/` pages before archiving. Reuses a per-product cache
 * (token-free) and authors missing pages via an LLM (Claude default, OpenAI fallback).
 * .NET/DocFX only — never aborts the build.
 */
async function runEnhancement(info, buildOutputDir) {
  const apiDir = join(DOCS_BUILDING_DIR, buildOutputDir, "api");
  if (!existsSync(apiDir)) {
    StatusLogger.notice("No api/ directory found; skipping Archetype-N enhancement.");
    return;
  }
  try {
    const mod = await import(pathToFileURL(join(ARCHETYPE_N_DIR, "enhance.mjs")).href);
    StatusLogger.progress("Archetype-N: enhancing API reference pages...");
    const summary = await mod.enhance(apiDir, info.code, {
      force: ENHANCE_OPTS.force, provider: ENHANCE_OPTS.provider,
      model: ENHANCE_OPTS.model, log: (m) => StatusLogger.info(m),
    });
    if (summary.no_provider && summary.generated === 0 && summary.skipped) {
      StatusLogger.warning(
        "Archetype-N: no LLM API key set, only cached pages were injected. " +
        "Set CLAUDE_API_KEY or OPENAI_API_KEY to author missing pages.");
    }
    StatusLogger.info(
      `Archetype-N: injected ${summary.injected} page(s) ` +
      `(generated ${summary.generated}, reused ${summary.reused}, ` +
      `preserved ${summary.preserved}, failed ${summary.failed}, skipped ${summary.skipped}).`);
  } catch (error) {
    StatusLogger.warning(`Archetype-N enhancement skipped: ${error}`);
  }
}

async function buildDotnetApidoc(info, versionString) {
  StatusLogger.title(`Building ${info.name} .NET API docs — v${versionString}`);

  const homepageIndex = `homepages/${info.code}/index.md`;
  const homepageToc = `homepages/${info.code}/toc.yml`;
  const homepageVersion = `homepages/${info.code}/version.json`;
  const docfxConfigFile = `docfx.${info.code}.json`;
  const binaryDir = `bin/${info.packageName}`;
  const nupkgUrl = `https://www.nuget.org/api/v2/package/${info.packageName}/${versionString}`;
  const nupkgPath = `bin/${info.packageName}/${info.packageName}.nupkg`;
  const nuspecFile = `${binaryDir}/${info.packageName}.nuspec`;
  const buildOutputDir = `output/${info.domain}${info.path}/object-reference/`;
  const apidocsStorageDir = getApidocPath(info, versionString);
  const apidocsTemplateHeader = `- name: ${info.name} .NET API - v${versionString}\n`;

  process.chdir(DOCS_BUILDING_DIR);

  // Cleanup + stage the homepage index/toc.
  rmSync("api", { recursive: true, force: true });
  mkdirSync("api", { recursive: true });
  cpSync(homepageIndex, "api/index.md");
  cpSync(homepageToc, "toc.yml");

  rmSync(buildOutputDir, { recursive: true, force: true });
  rmSync(binaryDir, { recursive: true, force: true });
  mkdirSync(binaryDir, { recursive: true });
  mkdirSync(buildOutputDir, { recursive: true });

  // Fetch + unpack the NuGet package.
  StatusLogger.progress(`Fetching NuGet package ${info.packageName} ${versionString}...`);
  if (!(await downloadFile(nupkgUrl, nupkgPath))) {
    StatusLogger.error(`Could not download ${info.packageName} ${versionString} from NuGet; skipping.`);
    return;
  }
  const { default: AdmZip } = await import("adm-zip");
  new AdmZip(nupkgPath).extractAllTo(binaryDir, true);
  rmSync(nupkgPath, { force: true });

  // Extract the resolved version from the nuspec and record it.
  const nuspecContents = readFileSync(nuspecFile, "utf-8");
  const currentVersion = nuspecContents.match(/<version>(.+)<\/version>/)?.[1] ?? versionString;
  writeFileSync(homepageVersion, `{"_version":"${currentVersion}"}`);

  // Replace the first line of toc.yml with the versioned API header.
  const tocContent = readFileSync("toc.yml", "utf-8");
  writeFileSync("toc.yml", apidocsTemplateHeader + tocContent.split("\n").slice(1).join("\n"));

  const docfxCommand = isWindowsOs()
    ? [DOCFX_EXECUTABLE_PATH, docfxConfigFile]
    : ["mono", DOCFX_EXECUTABLE_PATH, docfxConfigFile];

  try {
    StatusLogger.progress(`Running DocFX (${docfxConfigFile})...`);
    execFileSync(docfxCommand[0], docfxCommand.slice(1), { stdio: "inherit" });

    // Post-generation tasks — run before archiving so the cached copy is already clean.
    StatusLogger.progress("Stripping DocFX GUID markers from file names and hrefs...");
    const renamed = stripGuidMarkers(buildOutputDir);
    StatusLogger.info(`Removed GUID markers from ${renamed} path(s).`);

    StatusLogger.progress("Applying canonical link tags...");
    const canonicalCount = applyCanonicalTags(buildOutputDir, getDocfxCanonicalPrefix(info));
    StatusLogger.info(`Backfilled canonical tags on ${canonicalCount} page(s) (DocFX's template emits the rest).`);

    // Post-generation: Archetype-N SEO overview injection (default on; --no-enhancement disables).
    if (ENHANCE_ENABLED) await runEnhancement(info, buildOutputDir);

    StatusLogger.progress(`Archiving to ${apidocsStorageDir}...`);
    mkdirSync(apidocsStorageDir, { recursive: true });
    cpSync(buildOutputDir, apidocsStorageDir, { recursive: true });
    StatusLogger.success(`Built ${info.name} .NET API v${versionString}.`);
  } catch {
    StatusLogger.error(`DocFX build failed for ${info.packageName} v${versionString}.`);
  } finally {
    await sleep(20_000);
  }
}

function parseArgs(argv) {
  const a = { no_enhancement: false, enhance_force: false, provider: null, model: null, code: null, version: null };
  for (let i = 0; i < argv.length; i++) {
    switch (argv[i]) {
      case "--no-enhancement": a.no_enhancement = true; break;
      case "--enhance-force": a.enhance_force = true; break;
      case "--provider": a.provider = argv[++i]; break;
      case "--model": a.model = argv[++i]; break;
      case "--code": a.code = argv[++i]; break;
      case "--version": a.version = argv[++i]; break;
    }
  }
  return a;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  ENHANCE_ENABLED = !args.no_enhancement;
  ENHANCE_OPTS = { force: args.enhance_force, provider: args.provider, model: args.model };

  StatusLogger.title("Iron Software API Documentation Generator");
  const products = JSON.parse(readFileSync(PRODUCTS_CATALOG, "utf-8"));

  for (const product of products.libraries) {
    if (args.code && product.code !== args.code) continue;
    const packageType = product.packageType;
    StatusLogger.progress(`Checking ${product.name} (${packageType})...`);
    // Isolate each product so one failed registry query / build never aborts the whole run.
    try {
      if (packageType === "nuget") {
        const versions = await getNugetPackageVersions(product.packageName);
        for (const packageVersion of versions) {
          if (args.version && packageVersion.version !== args.version) continue;
          if (!apidocAlreadyExists(product, packageVersion.version)) {
            await buildDotnetApidoc(product, packageVersion.version);
          }
        }
      } else if (packageType === "maven") {
        const versions = await getMavenPackageVersions(product.groupId, product.artifactId);
        for (const packageVersion of versions) {
          if (args.version && packageVersion.v !== args.version) continue;
          if (!apidocAlreadyExists(product, packageVersion.v)) {
            await buildJavaApidoc(product, packageVersion.v);
          }
        }
      } else {
        // pip / npm / docker docs come from separate tooling — nothing to generate here.
        StatusLogger.notice(`${packageType} docs are generated by separate tooling; skipping ${product.name}.`);
      }
    } catch (error) {
      StatusLogger.error(`Failed processing ${product.name}: ${error}`);
    }
  }

  StatusLogger.success("API documentation generation complete.");
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
