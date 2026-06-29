/** Seed the cache from committed authored samples (JS port of seed_cache.py). */
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

import * as injectorApi from "./injector-api.mjs";
import { readTextNorm, writeTextEol } from "./inject_archetype_n.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = dirname(dirname(dirname(HERE)));
const CACHE_ROOT = join(HERE, "_generated_");
const OBJ_REF = join(REPO_ROOT, "object-reference");

const TARGET_RE = /Target(?:\s+page)?:\s*\S*?\/api\/([^/\s]+)\.html/i;
const TIER_RE = /N-(Full|Mid|Lite)/i;
const TIER_MAP = { full: "full", mid: "mid", lite: "lite" };
const SUBVAR_WORDS = ["interface", "enum", "exception", "delegate", "class", "struct"];

function listVersionedPages(code, fqn) {
  const base = join(OBJ_REF, code);
  if (!existsSync(base)) return [];
  const hits = [];
  for (const v of readdirSync(base)) {
    const p = join(base, v, "api", `${fqn}.html`);
    if (existsSync(p)) hits.push(p);
  }
  return hits.sort();
}

function findPage(code, fqn) { const h = listVersionedPages(code, fqn); return h.length ? h[h.length - 1] : null; }

function fqnFromSample(text, slug, code) {
  const m = text.match(TARGET_RE);
  if (m) return m[1];
  const base = join(OBJ_REF, code);
  if (slug.includes(".")) {
    for (const v of existsSync(base) ? readdirSync(base) : []) {
      if (existsSync(join(base, v, "api", `${slug}.html`))) return slug;
    }
  }
  for (const v of existsSync(base) ? readdirSync(base) : []) {
    const apiDir = join(base, v, "api");
    if (!existsSync(apiDir)) continue;
    for (const f of readdirSync(apiDir)) {
      if (!f.endsWith(".html")) continue;
      const cls = f.replace(/\.html$/, "").split(".").pop();
      if (cls.toLowerCase() === slug.toLowerCase()) return f.replace(/\.html$/, "");
    }
  }
  return null;
}

function treatmentFromComment(text) { const m = text.match(TIER_RE); return m ? TIER_MAP[m[1].toLowerCase()] : null; }
function subVariantFromComment(text) {
  const head = text.slice(0, 400).toLowerCase();
  for (const w of SUBVAR_WORDS) if (head.includes(w)) return w === "struct" ? "class" : w;
  return null;
}

function baseUrlFor(code) {
  const libs = JSON.parse(readFileSync(join(REPO_ROOT, "iron-products.json"), "utf-8")).libraries;
  const e = libs.find((p) => p.code === code);
  if (!e) return "https://ironsoftware.com/object-reference/api/";
  return `https://${e.domain}${e.path || ""}/object-reference/api/`;
}

export function seedProduct(code, { validate = true, log = console.log } = {}) {
  const samplesDir = join(OBJ_REF, code, "_archetype-n-samples");
  const summary = { code, seeded: 0, unresolved: 0, validated_ok: 0, validated_warn: 0 };
  if (!existsSync(samplesDir)) { log(`[seed] ${code}: no _archetype-n-samples dir, skipping`); return summary; }
  const cacheDir = join(CACHE_ROOT, code);
  mkdirSync(cacheDir, { recursive: true });
  const mf = join(cacheDir, "_manifest.json");
  let manifest = {};
  if (existsSync(mf)) { const data = JSON.parse(readFileSync(mf, "utf-8")); const rows = Array.isArray(data) ? data : (data.entries || []); for (const r of rows) manifest[r.fqn] = r; }

  const samples = readdirSync(samplesDir).filter((n) => n.endsWith("-overview.md")).sort();
  for (const name of samples) {
    const slug = name.slice(0, -"-overview.md".length);
    const text = readTextNorm(join(samplesDir, name));
    const fqn = fqnFromSample(text, slug, code);
    if (!fqn) { summary.unresolved++; log(`    [unresolved] ${name}: could not resolve FQN`); continue; }
    const page = findPage(code, fqn);
    let routedT = null, routedSv = null;
    if (page) [routedT, routedSv] = injectorApi.routeTreatment(readTextNorm(page));
    const treatment = treatmentFromComment(text) || routedT || "full";
    const subVariant = routedSv || subVariantFromComment(text) || "class";

    const cacheMd = join(cacheDir, `${fqn}.md`);
    writeTextEol(cacheMd, text);
    manifest[fqn] = { fqn, treatment, sub_variant: subVariant, status: "POLISHED_PRESERVED", file: `${fqn}.md` };
    summary.seeded++;

    if (validate && page) {
      const res = injectorApi.validate(cacheMd, page, { baseUrl: baseUrlFor(code), treatment, subVariant, apiDir: dirname(page) });
      if (res.ok) summary.validated_ok++;
      else { summary.validated_warn++; log(`    [validate-FAIL] ${fqn} (${treatment}/${subVariant}): ${res.hard.map((f) => f.rule || f.pattern).join(", ")}`); }
    }
  }
  const rows = Object.keys(manifest).sort().map((k) => manifest[k]);
  writeFileSync(mf, JSON.stringify(rows, null, 2));
  log(`[seed] ${code}: seeded=${summary.seeded} unresolved=${summary.unresolved} validated_ok=${summary.validated_ok} validated_fail=${summary.validated_warn}`);
  return summary;
}

function main() {
  const argv = process.argv.slice(2);
  let code = null, all = false, noValidate = false;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--code") code = argv[++i];
    else if (argv[i] === "--all") all = true;
    else if (argv[i] === "--no-validate") noValidate = true;
  }
  let codes = [];
  if (all) codes = readdirSync(OBJ_REF).filter((d) => { try { return existsSync(join(OBJ_REF, d, "_archetype-n-samples")); } catch { return false; } }).sort();
  else if (code) codes = [code];
  else { console.error("pass --code <code> or --all"); process.exit(2); }
  const totals = { seeded: 0, unresolved: 0, validated_ok: 0, validated_warn: 0 };
  for (const c of codes) { const s = seedProduct(c, { validate: !noValidate }); for (const k of Object.keys(totals)) totals[k] += s[k]; }
  console.log(`\nTOTAL: seeded=${totals.seeded} unresolved=${totals.unresolved} validated_ok=${totals.validated_ok} validated_fail=${totals.validated_warn}`);
}

const isMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/"));
if (isMain) main();
