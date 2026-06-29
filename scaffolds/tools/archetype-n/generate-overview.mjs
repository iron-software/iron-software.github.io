/** Author + self-validate one Archetype-N sample (JS port of generate_overview.py). */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdtempSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

import * as facts from "./facts.mjs";
import * as injectorApi from "./injector-api.mjs";
import * as llm from "./llm-client.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const REF_DIR = join(HERE, "spec", "reference-samples");

const REF_FOR = {
  "full|class": "qrreader-overview.md",
  "full|interface": "qrreader-overview.md",
  "mid|class": "qrcode-overview.md",
  "mid|interface": "iqrinput-overview.md",
  "lite|enum": "qrencoding-overview.md",
  "lite|exception": "ironqrexception-overview.md",
  "lite|delegate": "ironqrexception-overview.md",
};

// Prompt text is externalized to spec/prompts.md (single source of truth shared with
// generate_overview.py). Blocks are delimited by <!-- prompt:NAME --> / <!-- /prompt -->;
// templates use [[token]] placeholders.
const PROMPTS_FILE = join(HERE, "spec", "prompts.md");
const _PROMPT_BLOCK_RE = /<!--\s*prompt:([\w.]+)\s*-->\n?([\s\S]*?)\n?<!--\s*\/prompt\s*-->/g;
let _promptsCache = null;

function loadPrompts() {
  if (!_promptsCache) {
    const text = readFileSync(PROMPTS_FILE, "utf-8");
    _promptsCache = {};
    const re = new RegExp(_PROMPT_BLOCK_RE.source, "g");
    let m;
    while ((m = re.exec(text)) !== null) _promptsCache[m[1]] = m[2].trim();
    for (const req of ["system", "user_template", "tier_sizing.full"]) {
      if (!(req in _promptsCache)) throw new Error(`prompts.md is missing the '${req}' block`);
    }
  }
  return _promptsCache;
}

// Literal replace-all (split/join avoids regex/`$` interpretation in inserted values).
function subst(str, token, value) { return str.split(token).join(value); }

export function buildSystemPrompt() { return loadPrompts().system; }

function discoverFunnelSlugs(docRoot) {
  if (!docRoot) return [];
  let entries;
  try { entries = statSync(docRoot).isDirectory(); } catch { return []; }
  if (!entries) return [];
  const slugs = [];
  for (const kind of ["how-to", "examples", "tutorials"]) {
    const d = join(docRoot, kind);
    let children;
    try { children = readdirSync(d, { withFileTypes: true }); } catch { continue; }
    for (const c of children.sort((a, b) => a.name.localeCompare(b.name))) {
      if (c.isDirectory()) slugs.push(`${kind}/${c.name}`);
      else if (c.name.endsWith(".md") && c.name !== "index.md") slugs.push(`${kind}/${c.name.replace(/\.md$/, "")}`);
    }
  }
  return slugs.slice(0, 80);
}

export function buildUserPrompt(f, { brand, assembly, productUrl, treatment, subVariant, referenceMd, funnelSlugs, feedback }) {
  const P = loadPrompts();
  let sizing = P[`tier_sizing.${treatment}`];
  if (treatment === "lite") {
    const liteRule = P[`lite_rules.${subVariant}`] || P["lite_rules.exception"];
    const liteLine = "\n" + subst(subst(P.lite_line, "[[sub_variant]]", subVariant), "[[lite_rule]]", liteRule);
    sizing = sizing + liteLine;
  }
  const members = f.members.map((m) => `  - ${m}`).join("\n") || "  (none declared)";
  const funnel = funnelSlugs.length
    ? subst(subst(P["funnel.with_slugs"], "[[product_url]]", productUrl), "[[slugs]]", funnelSlugs.join("\n  "))
    : subst(P["funnel.no_slugs"], "[[product_url]]", productUrl);
  const feedbackText = feedback ? "\n\n" + subst(P.feedback, "[[findings]]", feedback) : "";

  const subs = {
    "[[brand]]": brand, "[[assembly]]": assembly, "[[product_url]]": productUrl,
    "[[treatment]]": treatment, "[[sub_variant]]": subVariant, "[[tier_sizing]]": sizing,
    "[[fqn]]": f.fqn, "[[class_name]]": f.class_name, "[[namespace]]": f.namespace,
    "[[base_type]]": f.base_type, "[[type_kind]]": f.type_kind,
    "[[member_count]]": String(f.member_count), "[[summary]]": f.summary || "(none)",
    "[[members]]": members, "[[funnel]]": funnel, "[[reference]]": referenceMd.trim(),
    "[[feedback]]": feedbackText,
  };
  let out = P.user_template;
  for (const [token, value] of Object.entries(subs)) out = subst(out, token, value);
  return out;
}

const FENCE_WRAP_RE = /^\s*```[a-zA-Z]*\s*\n([\s\S]*)\n```\s*$/;
function stripOuterFence(text) { const m = text.match(FENCE_WRAP_RE); return m ? m[1] : text.trim(); }

function formatFeedback(hard) {
  return hard.map((f) => `  - [${f.rule || f.pattern || "?"}] ${f.detail || f.context || ""}`).join("\n");
}

export async function generate(targetPath, { brand, assembly, baseUrl, product, productUrl, treatment, subVariant, apiDir, docRoot = "", provider = null, model = null, variant = "v3", maxRetries = 3, log = console.log }) {
  const htmlText = readTextNorm(targetPath);
  const f = facts.extractFacts(htmlText, basenameNoHtml(targetPath), baseUrl);
  if (!f) { log(`    [skip] ${pathBase(targetPath)}: not an in-scope type page`); return null; }

  const refName = REF_FOR[`${treatment}|${subVariant}`] || "qrreader-overview.md";
  const referenceMd = readFileSync(join(REF_DIR, refName), "utf-8");
  const funnelSlugs = discoverFunnelSlugs(docRoot);
  const system = buildSystemPrompt();

  let feedback = null;
  let lastErr = "";
  const td = mkdtempSync(join(tmpdir(), "archn-"));
  const tmp = join(td, `${f.fqn}.md`);
  try {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      const user = buildUserPrompt(f, { brand, assembly, productUrl, treatment, subVariant, referenceMd, funnelSlugs, feedback });
      let resp;
      try { resp = await llm.generate(system, user, { provider, model, maxTokens: 4000 }); }
      catch (e) {
        if (e instanceof llm.NoProviderError) throw e;
        lastErr = `LLM error: ${e.message}`; log(`    [attempt ${attempt}] ${lastErr}`); continue;
      }
      const sampleMd = stripOuterFence(resp.text);
      writeFileSync(tmp, sampleMd, "utf-8");
      const result = injectorApi.validate(tmp, targetPath, { baseUrl, treatment, subVariant, apiDir });
      if (result.ok) { log(`    [ok] ${f.fqn} (${treatment}/${subVariant}, ${result.prose_words} words, attempt ${attempt})`); return sampleMd; }
      feedback = formatFeedback(result.hard);
      lastErr = `${result.hard.length} HARD finding(s)`;
      log(`    [attempt ${attempt}] ${f.fqn}: ${lastErr}`);
    }
  } finally {
    rmSync(td, { recursive: true, force: true });
  }
  log(`    [FAILED] ${f.fqn}: ${lastErr} after ${maxRetries} attempts`);
  return null;
}

// small path helpers (avoid importing node:path twice with different names)
import { basename } from "node:path";
import { readTextNorm } from "./inject_archetype_n.mjs";
function basenameNoHtml(p) { return basename(p).replace(/\.html$/, ""); }
function pathBase(p) { return basename(p); }
