#!/usr/bin/env node
/**
 * diff-apidocs.mjs — diff the public API surface between two archived product versions
 * (Node port of diff-apidocs.py; output format matches it exactly).
 *
 * Reads only the committed object-reference archive; nothing is downloaded and no build is
 * triggered. Identity comes from each version's xrefmap.yml, signatures from its DocFX api/*.html
 * pages.
 *
 *   node diff-apidocs.mjs -p ironzip
 *   node diff-apidocs.mjs -p ironzip --from 2026.5.2 --to 2026.6.2
 *   node diff-apidocs.mjs -p ironpdf --namespace 'IronPdf.Rendering.*' --markdown
 *   node diff-apidocs.mjs -p ironzip --json --fail-on-breaking
 *
 * Exit codes: 0 success, 1 tool error (unknown product, missing version), 2 breaking changes found
 * with --fail-on-breaking.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, resolve } from "node:path";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";

import { listArchivedVersions } from "./apidocs.mjs";
import { StatusLogger } from "./statuslogger.mjs";
import {
  ArchiveError, loadProduct, requireSupported, resolveVersions, versionDirectory,
} from "./apidiff/archive.mjs";
import { bySeverity, diffSurfaces } from "./apidiff/classify.mjs";
import { SurfaceFilter } from "./apidiff/filters.mjs";
import { BREAKING } from "./apidiff/model.mjs";
import { render as renderJson } from "./apidiff/render-json.mjs";
import { render as renderMarkdown } from "./apidiff/render-markdown.mjs";
import { render as renderText } from "./apidiff/render-text.mjs";
import { buildSurface } from "./apidiff/surface.mjs";

const CWD = dirname(fileURLToPath(import.meta.url));

/**
 * Committed diff artifacts live under docs/, which _config.yml already excludes from the Jekyll
 * build, so they stay private to the repo.
 */
const ARTIFACT_ROOT = join(CWD, "docs", "api-diffs");

const EXIT_OK = 0;
const EXIT_ERROR = 1;
const EXIT_BREAKING = 2;

const USAGE = `usage: diff-apidocs [-h] [-p PRODUCT_CODE] [-n PRODUCT_NAME] [--from VERSION] [--to VERSION]
                    [--namespace GLOB] [--exclude GLOB] [--include-internal] [--all-visibility]
                    [--json [PATH]] [--markdown [PATH]] [--quiet] [--no-warnings]
                    [--fail-on-breaking] [--list-versions]

Diff the public API surface between two archived versions of an Iron Software product.

  -p, --product-code    Product short code, e.g. ironzip
  -n, --product-name    Product display name, e.g. IronZIP
      --from            Older version (default: previous archived)
      --to              Newer version (default: newest archived)
      --namespace       Only report types matching this glob; repeatable
      --exclude         Skip types matching this glob; repeatable
      --include-internal  Include vendored/internal namespaces (excluded by default)
      --all-visibility  Include non-public declarations (public/protected only by default)
      --json [PATH]     Write JSON; defaults to docs/api-diffs/<code>/<from>..<to>.json
      --markdown [PATH] Write Markdown; defaults alongside the JSON artifact
      --quiet           Suppress the terminal report
      --no-warnings     Suppress parser warnings
      --fail-on-breaking  Exit 2 when breaking changes are found
      --list-versions   List the product's archived versions and exit`;

const OPTIONS = {
  help: { type: "boolean", short: "h", default: false },
  "product-code": { type: "string", short: "p" },
  "product-name": { type: "string", short: "n" },
  from: { type: "string" },
  to: { type: "string" },
  namespace: { type: "string", multiple: true, default: [] },
  exclude: { type: "string", multiple: true, default: [] },
  "include-internal": { type: "boolean", default: false },
  "all-visibility": { type: "boolean", default: false },
  // parseArgs has no optional-value form, so these are strings defaulting to "" when bare.
  json: { type: "string" },
  markdown: { type: "string" },
  quiet: { type: "boolean", default: false },
  "no-warnings": { type: "boolean", default: false },
  "fail-on-breaking": { type: "boolean", default: false },
  "list-versions": { type: "boolean", default: false },
};

/**
 * Allow `--json` and `--markdown` to be passed with no value, matching argparse's `nargs="?"`.
 * A bare flag becomes "" (use the default artifact path); anything else is taken as a path.
 */
function normalizeOptionalValueFlags(argv) {
  const normalized = [];
  for (let index = 0; index < argv.length; index++) {
    const argument = argv[index];
    if (argument === "--json" || argument === "--markdown") {
      const next = argv[index + 1];
      if (next === undefined || next.startsWith("-")) {
        normalized.push(`${argument}=`);
        continue;
      }
    }
    normalized.push(argument);
  }
  return normalized;
}

function artifactPath(supplied, productCode, versionFrom, versionTo, extension) {
  if (supplied) return isAbsolute(supplied) ? supplied : resolve(supplied);
  return join(ARTIFACT_ROOT, productCode, `${versionFrom}..${versionTo}.${extension}`);
}

function write(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf-8");
  StatusLogger.progress(`Wrote ${path}`);
}

export function main(argv) {
  let values;
  try {
    ({ values } = parseArgs({ args: normalizeOptionalValueFlags(argv), options: OPTIONS, allowPositionals: false }));
  } catch (error) {
    StatusLogger.error(error.message);
    console.log(USAGE);
    return EXIT_ERROR;
  }

  if (values.help) {
    console.log(USAGE);
    return EXIT_OK;
  }

  let product;
  let versionFrom;
  let versionTo;
  let directoryFrom;
  let directoryTo;
  try {
    product = loadProduct(values["product-code"] ?? null, values["product-name"] ?? null);
    requireSupported(product);

    if (values["list-versions"]) {
      const versions = listArchivedVersions(product.code);
      StatusLogger.title(`${product.name} (${product.code}) — ${versions.length} archived versions`);
      for (const version of versions) StatusLogger.message(`  ${version}`);
      return EXIT_OK;
    }

    [versionFrom, versionTo] = resolveVersions(product, values.from ?? null, values.to ?? null);
    directoryFrom = versionDirectory(product, versionFrom);
    directoryTo = versionDirectory(product, versionTo);
  } catch (error) {
    if (!(error instanceof ArchiveError)) throw error;
    StatusLogger.error(error.message);
    return EXIT_ERROR;
  }

  const surfaceFilter = new SurfaceFilter({
    includeInternal: values["include-internal"],
    namespaces: values.namespace,
    excludes: values.exclude,
    publicOnly: !values["all-visibility"],
  });

  const surfaceFrom = buildSurface(directoryFrom, product.code, versionFrom, surfaceFilter);
  const surfaceTo = buildSurface(directoryTo, product.code, versionTo, surfaceFilter);
  const result = diffSurfaces(surfaceFrom, surfaceTo, product.name);

  if (!values.quiet) renderText(result, !values["no-warnings"]);

  if (values.json !== undefined) {
    write(artifactPath(values.json, product.code, versionFrom, versionTo, "json"), renderJson(result));
  }
  if (values.markdown !== undefined) {
    write(artifactPath(values.markdown, product.code, versionFrom, versionTo, "md"), renderMarkdown(result));
  }

  if (values["fail-on-breaking"] && bySeverity(result, BREAKING).length) return EXIT_BREAKING;
  return EXIT_OK;
}

process.exitCode = main(process.argv.slice(2));
