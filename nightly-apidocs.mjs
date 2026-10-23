#!/usr/bin/env node
/**
 * nightly-apidocs.mjs — build the API docs for newly published releases and diff each one
 * against the release before it. Run nightly by .github/workflows/nightly-apidocs.yml; it can
 * also be run by hand on Linux/WSL (DocFX needs mono there, see README).
 *
 *   node nightly-apidocs.mjs                    # every product
 *   node nightly-apidocs.mjs --code ironpdf     # one product
 *   node nightly-apidocs.mjs --dry-run          # list what would be built, build nothing
 *   node nightly-apidocs.mjs --summary out.md   # also write a Markdown summary (the PR body)
 *
 * FORWARD-ONLY: only versions newer than a product's newest archived version are built.
 * Older versions missing from the archive are left alone on purpose; `update-apidocs.mjs`
 * (which builds every missing version) is the tool for a backfill. Without this rule, a
 * version that can never build would be retried every night. A product with nothing
 * archived yet is skipped too: its first build is a manual job.
 *
 * Each build and diff runs the existing CLIs (`update-apidocs.mjs`, `diff-apidocs.mjs`) as
 * child processes, so this file adds no build logic of its own. `update-apidocs.mjs` reports
 * a failed build in its log but still exits 0, so success is judged here by the version
 * directory it leaves behind.
 *
 * Exit codes: 0 everything found was built (or nothing was new), 1 at least one build or
 * diff failed. Builds that succeeded are kept either way.
 */

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";

import {
  PRODUCTS_CATALOG, getApidocPath, listArchivedVersions, compareVersions,
  getNugetPackageVersions, getMavenPackageVersions,
} from "./apidocs.mjs";
import { StatusLogger } from "./statuslogger.mjs";

const CWD = dirname(fileURLToPath(import.meta.url));

/** Published versions of a product, as plain version strings. */
async function publishedVersions(product) {
  if (product.packageType === "nuget") {
    return (await getNugetPackageVersions(product.packageName)).map((entry) => entry.version);
  }
  if (product.packageType === "maven") {
    return (await getMavenPackageVersions(product.groupId, product.artifactId)).map((entry) => entry.v);
  }
  return [];
}

/** Versions newer than the newest archived one, oldest first. Prereleases are never built. */
function newVersions(published, archived) {
  const newest = archived.at(-1);
  return published
    .filter((version) => !version.includes("-"))
    .filter((version) => compareVersions(version, newest) > 0)
    .sort(compareVersions);
}

/** A build counts only if it left a non-empty version directory (and, for DocFX, its xrefmap). */
function buildSucceeded(product, version) {
  const path = getApidocPath(product, version);
  if (!existsSync(path) || readdirSync(path).length === 0) return false;
  return product.packageType !== "nuget" || existsSync(join(path, "xrefmap.yml"));
}

function run(script, args) {
  execFileSync(process.execPath, [join(CWD, script), ...args], { cwd: CWD, stdio: "inherit" });
}

/** Diff `from` → `to` with diff-apidocs.mjs and return its summary counts. DocFX products only. */
function diffRelease(product, from, to) {
  run("diff-apidocs.mjs", ["-p", product.code, "--from", from, "--to", to, "--json", "--markdown", "--quiet"]);
  const artifact = join(CWD, "docs", "api-diffs", product.code, `${from}..${to}.json`);
  return JSON.parse(readFileSync(artifact, "utf-8")).summary;
}

function renderSummary(results) {
  const lines = ["## Nightly API documentation", ""];
  if (results.length === 0) {
    lines.push("No new releases.");
    return `${lines.join("\n")}\n`;
  }
  lines.push("| Product | Version | Previous | Build | Breaking | Additive | Cosmetic |");
  lines.push("| --- | --- | --- | --- | --- | --- | --- |");
  for (const r of results) {
    const counts = r.diff ? [r.diff.breaking, r.diff.additive, r.diff.cosmetic] : ["–", "–", "–"];
    lines.push(`| ${r.name} | ${r.version} | ${r.previous} | ${r.status} | ${counts.join(" | ")} |`);
  }
  lines.push("", "Diffs: `docs/api-diffs/<code>/<previous>..<version>.md`. JavaDoc products are not diffed.");
  return `${lines.join("\n")}\n`;
}

async function main() {
  const { values } = parseArgs({
    options: {
      code: { type: "string" },
      "dry-run": { type: "boolean", default: false },
      summary: { type: "string" },
    },
  });

  StatusLogger.title("Nightly API documentation");
  const catalog = JSON.parse(readFileSync(PRODUCTS_CATALOG, "utf-8"));
  const results = [];
  let failed = false;

  for (const product of catalog.libraries) {
    if (values.code && product.code !== values.code) continue;
    if (!["nuget", "maven"].includes(product.packageType)) continue;

    const archived = listArchivedVersions(product.code);
    if (archived.length === 0) {
      StatusLogger.notice(`${product.name}: nothing archived yet; the first build is manual. Skipping.`);
      continue;
    }

    let published;
    try {
      published = await publishedVersions(product);
    } catch (error) {
      StatusLogger.error(`${product.name}: could not read the registry: ${error}`);
      failed = true;
      continue;
    }

    let previous = archived.at(-1);
    const pending = newVersions(published, archived);
    StatusLogger.info(`${product.name}: newest archived ${previous}, ${pending.length} new release(s).`);
    for (const version of pending) {
      const result = { name: product.name, version, previous, status: "planned", diff: null };
      results.push(result);
      if (values["dry-run"]) continue;

      StatusLogger.progress(`${product.name} ${version}: building...`);
      try {
        run("update-apidocs.mjs", ["--code", product.code, "--version", version]);
      } catch (error) {
        StatusLogger.error(`${product.name} ${version}: update-apidocs exited with an error: ${error.message}`);
      }
      if (!buildSucceeded(product, version)) {
        result.status = "FAILED";
        failed = true;
        continue;
      }
      result.status = "built";

      if (product.packageType === "nuget") {
        try {
          result.diff = diffRelease(product, previous, version);
        } catch (error) {
          StatusLogger.error(`${product.name} ${previous} -> ${version}: diff failed: ${error.message}`);
          result.status = "built, diff FAILED";
          failed = true;
        }
      }
      previous = version;
    }
  }

  const summary = renderSummary(results);
  console.log(summary);
  if (values.summary) writeFileSync(values.summary, summary);
  process.exitCode = failed ? 1 : 0;
}

main();
