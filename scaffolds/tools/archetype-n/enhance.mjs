/** Archetype-N post-DocFX enhancement orchestrator (JS port of enhance.py).
 * Importable: update-apidocs.mjs calls enhance(apiDir, code, ...).
 * Standalone: node enhance.mjs --code ironprint --api-dir <dir> [--force] ...
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

import * as facts from "./facts.mjs";
import * as injectorApi from "./injector-api.mjs";
import * as gen from "./generate-overview.mjs";
import * as llm from "./llm-client.mjs";
import { readTextNorm, writeTextEol } from "./inject_archetype_n.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = dirname(dirname(dirname(HERE)));  // scaffolds/tools/archetype-n -> repo root
const CACHE_ROOT = join(HERE, "_generated_");
const PRODUCTS_JSON = join(HERE, "products.json");
const IRON_PRODUCTS = join(REPO_ROOT, "iron-products.json");

const CANONICAL_PRODUCT_NAMES = {
  ironpdf: "IronPDF", ironprint: "IronPrint", ironxl: "IronXL", ironocr: "IronOCR",
  ironbarcode: "IronBarcode", ironqr: "IronQR", ironword: "IronWord", ironppt: "IronPPT",
  ironzip: "IronZip", ironwebscraper: "IronWebScraper", irondrawing: "IronDrawing",
};

export function resolveParams(code) {
  const libs = JSON.parse(readFileSync(IRON_PRODUCTS, "utf-8")).libraries || [];
  const entry = libs.find((p) => p.code === code);
  if (!entry) throw new Error(`product code '${code}' not found in ${IRON_PRODUCTS}`);
  const path = entry.path || "";
  const baseUrl = `https://${entry.domain}${path}/object-reference/api/`;
  const productUrl = `https://${entry.domain}${path}/`;
  let pj = {};
  if (existsSync(PRODUCTS_JSON)) pj = (JSON.parse(readFileSync(PRODUCTS_JSON, "utf-8")).products) || {};
  const pp = pj[code] || {};
  const brand = pp.brand || CANONICAL_PRODUCT_NAMES[code] || entry.name || code;
  const assembly = pp.assembly || `${brand}.dll`;
  const docRoot = pp.doc_root || "";
  return { code, base_url: baseUrl, product_url: productUrl, brand, assembly, doc_root: docRoot };
}

function loadManifest(cacheDir) {
  const mf = join(cacheDir, "_manifest.json");
  if (!existsSync(mf)) return {};
  const data = JSON.parse(readFileSync(mf, "utf-8"));
  const rows = Array.isArray(data) ? data : (data.entries || []);
  const out = {};
  for (const r of rows) out[r.fqn] = r;
  return out;
}
function writeManifest(cacheDir, manifest) {
  const rows = Object.keys(manifest).sort().map((k) => manifest[k]);
  writeFileSync(join(cacheDir, "_manifest.json"), JSON.stringify(rows, null, 2));
}

export async function enhance(apiDir, code, { force = false, provider = null, model = null, variant = "v3", maxRetries = 3, only = null, limit = null, log = console.log } = {}) {
  if (!existsSync(apiDir) || !statSync(apiDir).isDirectory()) throw new Error(`api dir not found: ${apiDir}`);
  const params = resolveParams(code);
  const cacheDir = join(CACHE_ROOT, code);
  mkdirSync(cacheDir, { recursive: true });
  const manifest = loadManifest(cacheDir);

  const summary = { code, pages: 0, injected: 0, generated: 0, reused: 0, preserved: 0, failed: 0, skipped: 0, no_provider: false };
  const onlySet = only ? new Set(only) : null;
  let noProvider = false;

  const pages = readdirSync(apiDir).filter((n) => n.endsWith(".html")).sort();
  log(`[archetype-n] ${code}: scanning ${pages.length} html files in ${apiDir}`);
  for (const name of pages) {
    const page = join(apiDir, name);
    const stem = name.replace(/\.html$/, "");
    const htmlText = readTextNorm(page);
    if (!facts.isTypePage(stem, htmlText)) continue;
    const fqn = stem;
    if (onlySet && !onlySet.has(fqn)) continue;
    if (limit !== null && summary.pages >= limit) break;
    summary.pages++;

    const cacheMd = join(cacheDir, `${fqn}.md`);
    const entry = manifest[fqn];
    const preserved = !!(entry && entry.status === "POLISHED_PRESERVED" && existsSync(cacheMd));
    const reuse = preserved || (existsSync(cacheMd) && !force);

    const [routedT, routedSv] = injectorApi.routeTreatment(htmlText);
    let treatment, subVariant, status;

    if (reuse) {
      treatment = (entry && entry.treatment) || routedT;
      subVariant = (entry && entry.sub_variant) || routedSv;
      status = (entry && entry.status) || "GENERATED";
      if (preserved) summary.preserved++; else summary.reused++;
    } else {
      treatment = routedT; subVariant = routedSv;
      if (noProvider) { summary.skipped++; log(`    [skip] ${fqn}: no API key and no cached sample`); continue; }
      let sampleMd;
      let providerFailed = false;
      try {
        sampleMd = await gen.generate(page, {
          brand: params.brand, assembly: params.assembly, baseUrl: params.base_url,
          product: params.brand, productUrl: params.product_url, treatment, subVariant,
          apiDir, docRoot: params.doc_root, provider, model, variant, maxRetries, log,
        });
      } catch (e) {
        if (!(e instanceof llm.NoProviderError)) throw e;
        providerFailed = true;
        noProvider = true; summary.no_provider = true;
        log(`[archetype-n] no LLM provider (${e.message}); generation disabled, cached pages will still inject`);
      }
      if (providerFailed) {
        if (!existsSync(cacheMd)) { summary.skipped++; continue; }
        treatment = (entry && entry.treatment) || routedT;
        subVariant = (entry && entry.sub_variant) || routedSv;
        status = (entry && entry.status) || "GENERATED";
        summary.reused++;
      } else if (sampleMd === null) {
        summary.failed++;
        manifest[fqn] = { fqn, treatment, sub_variant: subVariant, status: "FAILED", file: `${fqn}.md` };
        if (!existsSync(cacheMd)) continue;
        log(`    [fallback] ${fqn}: keeping existing cached sample`);
        treatment = (entry && entry.treatment) || routedT;
        subVariant = (entry && entry.sub_variant) || routedSv;
        status = (entry && entry.status) || "GENERATED";
      } else {
        writeTextEol(cacheMd, sampleMd);
        status = "GENERATED"; summary.generated++;
      }
    }

    try {
      injectorApi.injectPage(cacheMd, page, {
        baseUrl: params.base_url, product: params.brand, productUrl: params.product_url,
        treatment, subVariant, variant,
      });
      summary.injected++;
      manifest[fqn] = { fqn, treatment, sub_variant: subVariant, status, file: `${fqn}.md` };
    } catch (e) {
      summary.failed++;
      log(`    [inject-error] ${fqn}: ${e.message}`);
    }
  }

  writeManifest(cacheDir, manifest);
  log(`[archetype-n] ${code}: injected=${summary.injected} generated=${summary.generated} reused=${summary.reused} preserved=${summary.preserved} failed=${summary.failed} skipped=${summary.skipped}`);
  return summary;
}

function defaultApiDir(code, version) {
  const base = join(REPO_ROOT, "object-reference", code);
  if (version) return join(base, version, "api");
  const versions = readdirSync(base).filter((d) => {
    try { return statSync(join(base, d)).isDirectory() && existsSync(join(base, d, "api")); } catch { return false; }
  }).sort();
  if (!versions.length) throw new Error(`no versioned api/ dir under ${base}`);
  return join(base, versions[versions.length - 1], "api");
}

function parseArgs(argv) {
  const a = { code: null, api_dir: null, version: null, force: false, provider: null, model: null, variant: "v3", max_retries: 3, only: null, limit: null };
  for (let i = 0; i < argv.length; i++) {
    switch (argv[i]) {
      case "--code": a.code = argv[++i]; break;
      case "--api-dir": a.api_dir = argv[++i]; break;
      case "--version": a.version = argv[++i]; break;
      case "--force": a.force = true; break;
      case "--provider": a.provider = argv[++i]; break;
      case "--model": a.model = argv[++i]; break;
      case "--variant": a.variant = argv[++i]; break;
      case "--max-retries": a.max_retries = parseInt(argv[++i], 10); break;
      case "--only": a.only = argv[++i]; break;
      case "--limit": a.limit = parseInt(argv[++i], 10); break;
    }
  }
  return a;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.code) { console.error("usage: enhance.mjs --code <code> [--api-dir DIR] [--version V] [--force] ..."); process.exit(2); }
  const apiDir = args.api_dir || defaultApiDir(args.code, args.version);
  const only = args.only ? args.only.split(",").map((s) => s.trim()) : null;
  await enhance(apiDir, args.code, { force: args.force, provider: args.provider, model: args.model, variant: args.variant, maxRetries: args.max_retries, only, limit: args.limit });
}

const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/"));
if (isMain) main();
