#!/usr/bin/env node
/**
 * Inject an Archetype-N overview block + meta + JSON-LD into a docfx HTML page.
 *
 * Native JS port of inject_archetype_n.py. Behavior, validator sequence, exit
 * codes, and spliced output are byte-identical to the Python injector (verified
 * by the golden-corpus parity test). Stdlib-only (node:fs / node:path).
 *
 * Usage:
 *   node inject_archetype_n.mjs SAMPLE.md TARGET.html [--base-url URL] [--treatment full|mid|lite] [--dry-run] ...
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { basename, dirname, resolve } from "node:path";
import { EOL } from "node:os";

// Mirror Python's pathlib read_text()/write_text(): read with universal-newline
// normalization (CRLF/CR -> LF) and write with the OS line separator, so the
// JS injector's bytes match the Python injector's on the same platform.
export function readTextNorm(p) {
  return readFileSync(p, "utf-8").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
}
export function writeTextEol(p, data) {
  writeFileSync(p, EOL === "\n" ? data : data.replace(/\n/g, EOL));
}

// ---------------------------------------------------------------------------
// Module globals (set by main()/callers; read by validators)
// ---------------------------------------------------------------------------
export let API_DIR = null;                 // string path
export let CONFIRMED_TYPES_PATH = null;    // string path
export function setApiDir(p) { API_DIR = p; }
export function setConfirmedTypes(p) { CONFIRMED_TYPES_PATH = p; }

export const KNOWN_NAMESPACE_ROOTS = new Set(["IronPdf", "IronSoftware", "System", "Microsoft", "Anthropic"]);
const SHARED_NS_ROOTS = new Set(["IronSoftware", "System", "Microsoft", "Anthropic", "Org"]);

export const VARIANT_CONSTRAINTS = {
  "full|class":     { prose: [250, 500], code: [1, 2], links: [3, 5], faq: [2, 4] },
  "full|interface": { prose: [250, 500], code: [0, 1], links: [3, 5], faq: [2, 4] },
  "mid|class":      { prose: [150, 250], code: [0, 1], links: [2, 3], faq: [1, 2] },
  "mid|interface":  { prose: [150, 250], code: [0, 1], links: [2, 3], faq: [1, 2] },
  "lite|enum":      { prose: [40, 90],  code: [0, 1], links: [0, 2], faq: ["exact", 0] },
  "lite|exception": { prose: [40, 80],  code: ["exact", 0], links: [0, 1], faq: ["exact", 0] },
  "lite|delegate":  { prose: [30, 60],  code: ["exact", 0], links: [0, 1], faq: ["exact", 0] },
};

const CANONICAL_PRODUCT_NAMES = {
  ironpdf: "IronPDF", ironprint: "IronPrint", ironxl: "IronXL", ironocr: "IronOCR",
  ironbarcode: "IronBarcode", ironqr: "IronQR", ironword: "IronWord", ironppt: "IronPPT",
  ironzip: "IronZip", ironwebscraper: "IronWebScraper", irondrawing: "IronDrawing",
  ironpdf_ns: "IronPDF",
};

// ---------------------------------------------------------------------------
// Regexes (mirroring the Python module)
// ---------------------------------------------------------------------------
const DECL_RE = /public\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+)*(class|interface|enum|struct|delegate)\s+[A-Za-z0-9_]+(?:&lt;[^&]*&gt;|<[^>]*>)?(?:\s*:\s*([^<\n{]+))?/;
const MID_MEMBER_MAX = 6;
const MID_STRUCT_MEMBER_MAX = 12;

const EM_DASH_RE = /[—―]/g;
const FIRST_PERSON_RE = /\b(?:we|our|ours|us|i'm|i've|i'll|i'd|me|my|mine|myself)\b/gi;
const FIRST_PERSON_I_RE = /(?<![A-Za-z])I(?:'m|'ve|'ll|'d|\b)/g;
const NOT_BUT_RE = /\bnot\s+(?:\S+\s+){0,8}?but\b/gi;

const INLINE_CODE_RE = /`([^`\n]+)`/g;
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
const CODE_FENCE_RE = /```(\w*)\n([\s\S]*?)\n```/g;
const INTERNAL_LINK_RE = /\[[^\]]+\]\(https?:\/\/[a-z0-9.-]*iron[a-z0-9]*\.com\//gi;

const GENERIC_IDENTIFIERS = new Set([
  "Add", "Remove", "RemoveAt", "Clear", "Count", "Insert", "IndexOf",
  "Contains", "ToString", "Equals", "GetHashCode", "GetType", "MemberwiseClone",
  "Length", "Capacity", "Item", "Index", "Items",
  "Value", "Values", "Key", "Keys", "Name", "Type", "Id", "Tag",
  "Enabled", "Visible", "Hidden", "ReadOnly", "IsValid", "IsEmpty",
  "Width", "Height", "X", "Y", "Top", "Bottom", "Left", "Right",
  "Color", "Size", "Text", "Title", "Body", "Content",
  "Get", "Set", "Open", "Close", "Read", "Write", "Save", "Load",
  "Start", "Stop", "Begin", "End", "Reset", "Update", "Init",
  "True", "False", "Null", "None", "All", "Default",
  "ToList", "ToArray", "First", "Last", "Single", "Where", "Select",
  "Min", "Max", "Sum", "Average", "Any",
  "Push", "Pop", "Peek", "Dequeue", "Enqueue", "ForEach", "Skip", "Take",
]);

const MISLEADING_NAME_TOKENS = ["ThreadLocal", "Persistent", "Shared", "Singleton", "Pool", "Cache"];

const TEMPLATE_SYNTAX_RES = [
  [/<<\s*[A-Za-z_]/g, "mail-merge <<fieldName>>"],
  [/<%[=#]?/g, "ASP <%= %> tag"],
  [/<#[A-Za-z_]/g, ".NET <#var#> directive"],
  [/\{\{\s*[A-Za-z_]/g, "Mustache/Handlebars {{ }} (also caught by JSON)"],
];

const BCL_TYPES = new Set([
  "Task", "Stream", "FileStream", "MemoryStream", "Exception", "Object",
  "Enum", "Action", "Func", "Predicate", "Tuple", "ValueTuple", "Nullable",
  "List", "IList", "ICollection", "IEnumerable", "IReadOnlyCollection",
  "IReadOnlyList", "Dictionary", "IDictionary", "HashSet", "Queue", "Stack",
  "Bitmap", "Image", "Color", "Font", "Rectangle", "RectangleF", "Point",
  "PointF", "Size", "SizeF", "Graphics", "Encoding", "StringBuilder",
  "TimeSpan", "DateTime", "DateTimeOffset", "Guid", "Uri",
  "ObservableCollection", "INotifyPropertyChanged", "IDisposable", "IComparable",
  "AnyBitmap", "IPdfFontObject", "PrintDocument",
]);

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------
function reEscape(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function findall(re, text) {
  // mimic Python re.findall: returns array of (group1 if one group, or tuple, or whole match)
  const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
  const out = [];
  let m;
  while ((m = g.exec(text)) !== null) {
    if (m.length === 1) out.push(m[0]);
    else if (m.length === 2) out.push(m[1]);
    else out.push(m.slice(1));
    if (m.index === g.lastIndex) g.lastIndex++;
  }
  return out;
}

function countMatches(reSource, flags, text) {
  const g = new RegExp(reSource, flags.includes("g") ? flags : flags + "g");
  let n = 0;
  while (g.exec(text) !== null) n++;
  return n;
}

function htmlEscape(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function excerpt(text, start, end, radius = 50) {
  const a = Math.max(0, start - radius);
  const b = Math.min(text.length, end + radius);
  return (a > 0 ? "…" : "") + text.slice(a, b).replace(/\n/g, " ") + (b < text.length ? "…" : "");
}

// ---------------------------------------------------------------------------
// Treatment derivation
// ---------------------------------------------------------------------------
function countDeclaredMembers(htmlText) {
  return Math.max(0, countMatches('class="lang-csharp hljs">', "g", htmlText) - 1);
}

export function deriveTreatmentFromHtml(html) {
  const m = DECL_RE.exec(html);
  if (!m) return null;
  const kind = m[1];
  const bases = (m[2] || "").split(",").map((b) => b.trim().split(".").pop()).filter(Boolean);
  if (kind === "interface") {
    const members = countDeclaredMembers(html);
    return [members <= MID_MEMBER_MAX ? "mid" : "full", "interface"];
  }
  if (kind === "delegate" || bases.some((b) => b === "Delegate" || b === "MulticastDelegate")) return ["lite", "delegate"];
  if (kind === "enum" || bases.includes("Enum")) return ["lite", "enum"];
  if (bases.some((b) => b === "Exception" || b.endsWith("Exception"))) return ["lite", "exception"];
  const isStruct = kind === "struct" || bases.includes("ValueType");
  const members = countDeclaredMembers(html);
  const ceiling = isStruct ? MID_STRUCT_MEMBER_MAX : MID_MEMBER_MAX;
  return [members <= ceiling ? "mid" : "full", "class"];
}

function loadConfirmedTypes() {
  if (!CONFIRMED_TYPES_PATH || !existsSync(CONFIRMED_TYPES_PATH)) return {};
  const data = JSON.parse(readFileSync(CONFIRMED_TYPES_PATH, "utf-8"));
  const out = {};
  for (const r of data.rows || []) out[r.url] = r;
  return out;
}

function deriveTreatment(pageUrl, confirmed) {
  const row = confirmed[pageUrl];
  if (!row) return ["full", "class"];
  if (row.is_exception) return ["lite", "exception"];
  if (row.type_kind === "delegate") return ["lite", "delegate"];
  if (row.is_enum_pattern || row.type_kind === "enum") return ["lite", "enum"];
  if (row.type_kind === "interface") return ["full", "interface"];
  return ["full", "class"];
}

// ---------------------------------------------------------------------------
// Sample-MD parser
// ---------------------------------------------------------------------------
function splitTopSections(md) {
  md = md.replace(/^<!--[\s\S]*?-->\s*/, "");
  const blocks = md.split(/^---[ \t]*$/m);
  const sections = {};
  for (const block of blocks) {
    const m = block.match(/^\s*##\s+([^\n]+)\n([\s\S]*)/);
    if (m) sections[m[1].trim()] = m[2].trim();
  }
  return sections;
}

function extractOverview(sections) {
  for (const [key, body] of Object.entries(sections)) {
    if (key.includes("Injected overview")) return body.trim();
  }
  throw new Error("Could not find 'Injected overview' section");
}

function extractMetaVariants(body, label) {
  const pat = new RegExp("\\*\\*" + reEscape(label) + "[^\\*]*\\*\\*\\s*\\n((?:-[^\\n]+\\n?)+)");
  const m = body.match(pat);
  if (!m) throw new Error(`Could not find '${label}' block`);
  const variants = [];
  for (const line of m[1].split("\n")) {
    const lm = line.trim().match(/^-\s*v\d+\s*\([^)]+\):\s*`(.+)`\s*$/);
    if (lm) {
      const val = lm[1].replace(/^[\s`]+|[\s`]+$/g, "");
      if (val.includes("`")) throw new Error(`stray backtick inside '${label}' variant after cleanup: ${JSON.stringify(val)}`);
      variants.push(val);
    }
  }
  if (variants.length === 0) throw new Error(`No variants parsed under '${label}'`);
  return variants;
}

function extractBlockquote(body, label) {
  const pat = new RegExp("\\*\\*" + reEscape(label) + "\\*\\*[^\\n]*\\n+((?:>[^\\n]*(?:\\n|$))+)");
  const m = body.match(pat);
  if (!m) throw new Error(`Could not find blockquote for '${label}'`);
  const lines = m[1].split("\n").map((ln) => ln.replace(/^>\s?/, ""));
  return lines.map((s) => s.trim()).filter((s) => s).join(" ");
}

function extractJsonBlock(body, label) {
  const pat = new RegExp("\\*\\*" + reEscape(label) + "\\*\\*[^\\n]*\\n+```json\\s*\\n([\\s\\S]*?)\\n```");
  const m = body.match(pat);
  if (!m) throw new Error(`Could not find JSON block for '${label}'`);
  return JSON.parse(m[1]);
}

export function parseSample(mdText) {
  const sections = splitTopSections(mdText);
  const overview = extractOverview(sections);
  const metaSection = sections["Recommended metadata"] || "";
  const schemaSection = sections["Structured data"] || "";
  const titles = extractMetaVariants(metaSection, "Meta-title");
  const descs = extractMetaVariants(metaSection, "Meta-description");
  const abstract = extractBlockquote(schemaSection, "TechArticle abstract");
  let faq = [];
  try { faq = extractJsonBlock(schemaSection, "FAQPage entries"); } catch { faq = []; }
  return { overview_md: overview, titles, descriptions: descs, abstract, faq };
}

// ---------------------------------------------------------------------------
// Phase 5: forbidden-pattern scan
// ---------------------------------------------------------------------------
function scanWith(re, text, severity, pattern, label, findings) {
  const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
  let m;
  while ((m = g.exec(text)) !== null) {
    findings.push({ severity, pattern, char: m[0], context: excerpt(text, m.index, m.index + m[0].length), where: label });
    if (m.index === g.lastIndex) g.lastIndex++;
  }
}

export function forbiddenScan(text, contextLabel) {
  const findings = [];
  scanWith(EM_DASH_RE, text, "HARD", "em-dash", contextLabel, findings);
  scanWith(FIRST_PERSON_RE, text, "WARN", "first-person", contextLabel, findings);
  scanWith(FIRST_PERSON_I_RE, text, "WARN", "first-person-I", contextLabel, findings);
  scanWith(NOT_BUT_RE, text, "WARN", "not-X-but-Y", contextLabel, findings);
  return findings;
}

// ---------------------------------------------------------------------------
// Phase 5.5: v1.2 P-adjustment validators
// ---------------------------------------------------------------------------
function genericArityFromUrl(targetUrl) {
  const m = targetUrl.match(/\.([A-Za-z_][A-Za-z0-9_]*?)(-?(\d+))\.html$/);
  if (m && m[3]) return parseInt(m[3], 10);
  return null;
}
function namespaceFromUrl(targetUrl) {
  const m = targetUrl.match(/\/api\/(.+)\.([^./]+)\.html$/);
  return m ? m[1] : null;
}
function classNameFromUrl(targetUrl, stripArity = true) {
  let name = basename(targetUrl).replace(/\.html$/, "").split(".").pop();
  if (stripArity) name = name.replace(/-?\d+$/, "");
  return name;
}

function extractDeclaredMembers(targetHtml) {
  const names = new Set();
  const g = /<h4[^>]+id="([^"]+)"[^>]*>\s*([^<\s]+)/g;
  let m;
  while ((m = g.exec(targetHtml)) !== null) {
    const token = m[2].split("(")[0].split("[")[0];
    const name = token.split(".").pop();
    if (name && /^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) names.add(name);
  }
  return names;
}

function backtickedIdentifiers(text) {
  const out = [];
  const g = /`([A-Za-z_][A-Za-z0-9_.<>]*?)(\(\))?`/g;
  let m;
  while ((m = g.exec(text)) !== null) {
    const ident = m[1];
    if (["int", "long", "short", "byte", "bool", "string", "char", "float", "double",
      "decimal", "object", "void", "true", "false", "null", "var", "new", "this", "base", "T"].includes(ident)) continue;
    if ((ident.match(/\./g) || []).length > 3) continue;
    out.push([ident, m.index]);
  }
  return out;
}

function hasExplicitContractSemantics(prose) {
  const cues = [
    /\bone\s+(?:per|persistent)\b/i, /\bsingle\s+(?:thread|instance|process)\b/i,
    /\bprocess[\s-]?(?:wide|level)\b/i, /\bnot\s+per[\s-]?thread\b/i,
    /\bone\s+shared\b/i, /\bshared\s+across\b/i, /\bsingleton\b/i,
  ];
  return cues.some((c) => c.test(prose));
}

function checkTemplateSyntaxEscaping(text, contextLabel) {
  const findings = [];
  for (const [pat, label] of TEMPLATE_SYNTAX_RES) {
    const g = new RegExp(pat.source, "g");
    let m;
    while ((m = g.exec(text)) !== null) {
      const headStart = Math.max(0, m.index - 60);
      const context = text.slice(headStart, m.index).toLowerCase();
      if (context.includes("<code>") && !context.includes("</code>")) continue;
      findings.push({ severity: "HARD", rule: "template-syntax-unescaped", pattern: label, where: contextLabel, context: excerpt(text, m.index, m.index + m[0].length) });
      if (m.index === g.lastIndex) g.lastIndex++;
    }
  }
  return findings;
}

function checkGenericArity(parsed, targetUrl, targetHtml = "") {
  const arity = genericArityFromUrl(targetUrl);
  if (!arity) return [];
  const bare = classNameFromUrl(targetUrl, true);
  const hasDash = new RegExp("-" + arity + "\\.html$").test(targetUrl);
  if (!hasDash && targetHtml) {
    const declGeneric = new RegExp("class[^<\\n]*?\\b" + reEscape(bare) + "\\d*\\s*(?:&lt;|<)\\s*[A-Za-z]").test(targetHtml);
    if (!declGeneric) return [];
  }
  const suffixedRaw = `${bare}-${arity}`;
  const suffixedNoDash = `${bare}${arity}`;
  const findings = [];
  const body = parsed.overview_md + " " + parsed.abstract;
  const contextCues = /slug|URL|docfx|encodes|encoded|encoding|filename|data-uid|reference page|\.html|\.cshtml|arity|suffix/i;
  for (const variant of [suffixedRaw, suffixedNoDash]) {
    const g = new RegExp(reEscape(variant), "g");
    let m;
    while ((m = g.exec(body)) !== null) {
      const head = Math.max(0, m.index - 60);
      const tail = Math.min(body.length, m.index + m[0].length + 12);
      if (contextCues.test(body.slice(head, tail))) continue;
      findings.push({ severity: "HARD", rule: "generic-arity-suffix", detail: `prose names class as '${variant}' without slug/URL context; should be '${bare}<T>' or '${bare}'`, context: excerpt(body, m.index, m.index + m[0].length) });
      break;
    }
  }
  const reconstructed = new RegExp("\\b" + reEscape(bare) + "\\s*&lt;|\\b" + reEscape(bare) + "\\s*<\\s*[A-Z]|generic|`<T>`").test(body);
  if (!reconstructed) findings.push({ severity: "WARN", rule: "generic-arity-not-reconstructed", detail: `class '${bare}' has generic arity ${arity} but prose does not name <T> form` });
  return findings;
}

function checkNamespaceFromUrl(parsed, targetUrl) {
  const urlNs = namespaceFromUrl(targetUrl);
  if (!urlNs) return [];
  const body = parsed.overview_md + " " + parsed.abstract;
  const assertionPatterns = [
    /(?:in|part of|lives in|belongs to)\s+the\s+`?([A-Z][A-Za-z0-9_.]+)`?\s+namespace/gi,
    /namespace\s*:\s*`?([A-Z][A-Za-z0-9_.]+)`?/gi,
  ];
  const findings = [];
  for (const pat of assertionPatterns) {
    let m;
    while ((m = pat.exec(body)) !== null) {
      let asserted = m[1].replace(/^[.`]+|[.`]+$/g, "");
      const bare = classNameFromUrl(targetUrl, true);
      if (asserted.endsWith("." + bare)) asserted = asserted.slice(0, -("." + bare).length);
      if (asserted === urlNs || urlNs.startsWith(asserted + ".") || asserted.startsWith(urlNs + ".")) continue;
      if (!(asserted.startsWith("IronPdf") || asserted.startsWith("IronSoftware"))) continue;
      findings.push({ severity: "HARD", rule: "namespace-mismatch", detail: `prose asserts namespace '${asserted}'; URL encodes '${urlNs}'` });
    }
  }
  return findings;
}

function checkApiCasing(parsed, targetHtml) {
  const findings = [];
  const declared = extractDeclaredMembers(targetHtml);
  if (declared.size === 0) return findings;
  const declaredLower = {};
  for (const n of declared) declaredLower[n.toLowerCase()] = n;
  for (const [, block] of matchCodeFences(parsed.overview_md)) {
    const g = /\.([A-Za-z_][A-Za-z0-9_]*)\s*[(=;,.\[)]/g;
    let m;
    while ((m = g.exec(block)) !== null) {
      const ident = m[1];
      if (GENERIC_IDENTIFIERS.has(ident)) continue;
      const lc = ident.toLowerCase();
      if (lc in declaredLower && declaredLower[lc] !== ident) {
        findings.push({ severity: "HARD", rule: "api-casing-mismatch", detail: `code uses '${ident}'; declared on target as '${declaredLower[lc]}'` });
      }
    }
  }
  return findings;
}

function matchCodeFences(md) {
  // returns array of [lang, body] like Python CODE_FENCE_RE.findall
  const g = new RegExp(CODE_FENCE_RE.source, "g");
  const out = [];
  let m;
  while ((m = g.exec(md)) !== null) out.push([m[1], m[2]]);
  return out;
}

function checkMisleadingClassName(parsed, targetUrl) {
  const className = classNameFromUrl(targetUrl, true);
  const triggered = MISLEADING_NAME_TOKENS.filter((t) => className.includes(t));
  if (triggered.length === 0) return [];
  if (hasExplicitContractSemantics(parsed.overview_md)) return [];
  return [{ severity: "WARN", rule: "misleading-class-name", detail: `class name contains ${JSON.stringify(triggered)}; prose lacks an explicit-contract-semantics sentence` }];
}

function checkBriefSpeculationMarkers(parsed) {
  const findings = [];
  const body = parsed.overview_md + " " + parsed.abstract;
  for (const pat of [/#\s*UNVERIFIED/gi, /\bTODO\b/gi, /\bFIXME\b/gi, /\bSPECULATION\b/gi]) {
    let m;
    while ((m = pat.exec(body)) !== null) {
      findings.push({ severity: "WARN", rule: "unverified-marker", detail: `unverified marker '${m[0]}' present in sample`, context: excerpt(body, m.index, m.index + m[0].length) });
    }
  }
  return findings;
}

function looksLikeNamespaceRef(ident) {
  if (KNOWN_NAMESPACE_ROOTS.has(ident)) return true;
  if (ident.includes(".") && KNOWN_NAMESPACE_ROOTS.has(ident.split(".")[0])) {
    return ident.split(".").every((seg) => seg && seg[0] === seg[0].toUpperCase() && seg[0] !== seg[0].toLowerCase());
  }
  return false;
}

let _apiDirFiles = null;
let _apiDirCached = null;
function apiDirFiles() {
  if (_apiDirCached !== API_DIR) {
    _apiDirCached = API_DIR;
    try { _apiDirFiles = API_DIR ? readdirSync(API_DIR) : []; } catch { _apiDirFiles = []; }
  }
  return _apiDirFiles;
}
function globExists(predicate) { return apiDirFiles().some(predicate); }

function checkMemberRoundtrip(parsed, targetHtml) {
  const findings = [];
  const declared = extractDeclaredMembers(targetHtml);
  if (declared.size === 0) return findings;
  let haystack = parsed.overview_md + " " + parsed.abstract;
  for (const faq of parsed.faq || []) haystack += " " + (faq.question || "") + " " + (faq.answer || "");
  const seen = new Set();
  for (const [ident] of backtickedIdentifiers(haystack)) {
    if (looksLikeNamespaceRef(ident)) continue;
    let leaf = ident.split(".").pop();
    leaf = leaf.replace(/<[^>]+>/g, "");
    if (!leaf || GENERIC_IDENTIFIERS.has(leaf)) continue;
    if (BCL_TYPES.has(leaf)) continue;
    if (seen.has(leaf)) continue;
    seen.add(leaf);
    if (globExists((f) => f.endsWith(`.${leaf}.html`))) continue;
    const dash1 = new RegExp("\\." + reEscape(leaf) + "-.\\.html$");
    const nodash1 = new RegExp("\\." + reEscape(leaf) + ".\\.html$");
    if (globExists((f) => dash1.test(f)) || globExists((f) => nodash1.test(f))) continue;
    if (declared.has(leaf)) continue;
    if (!/^[A-Z][a-z]/.test(leaf) && !/^[A-Z][a-z]+[A-Z]/.test(leaf)) continue;
    findings.push({ severity: "WARN", rule: "member-roundtrip", detail: `identifier '${leaf}' referenced in sample but not declared on target page or in api/` });
  }
  return findings;
}

export function v12Validators(parsed, targetUrl, targetHtml) {
  let findings = [];
  findings = findings.concat(checkGenericArity(parsed, targetUrl, targetHtml));
  findings = findings.concat(checkNamespaceFromUrl(parsed, targetUrl));
  findings = findings.concat(checkApiCasing(parsed, targetHtml));
  findings = findings.concat(checkMisleadingClassName(parsed, targetUrl));
  findings = findings.concat(checkBriefSpeculationMarkers(parsed));
  findings = findings.concat(checkMemberRoundtrip(parsed, targetHtml));
  findings = findings.concat(checkTemplateSyntaxEscaping(parsed.abstract, "TechArticle abstract"));
  (parsed.faq || []).forEach((faq, i) => {
    findings = findings.concat(checkTemplateSyntaxEscaping(faq.question || "", `FAQ[${i}].question`));
    findings = findings.concat(checkTemplateSyntaxEscaping(faq.answer || "", `FAQ[${i}].answer`));
  });
  return findings;
}

// ---------------------------------------------------------------------------
// Phase 5.6: v1.2.1 CTO-reframe validators
// ---------------------------------------------------------------------------
const STRUCTURAL_OPENER_RES = [
  [/(?:\bis\b|belongs?|lives?|resides?|sits?|declared|defined|located)\s+(?:in|part of|to)?\s*the\s+`?[A-Z][A-Za-z0-9_.]*`?\s+namespace/i, "names the namespace"],
  [/\b(?:derives?|inherits?|descends?)\s+from\b/i, "names the base type ('derives/inherits from')"],
  [/\bextends\s+(?:the\s+)?`?I?[A-Z]/, "names the base/parent type ('extends')"],
  [/\bimplements\s+(?:the\s+)?`?I?[A-Z]/, "names implemented interfaces ('implements')"],
  [/\bis\s+an?\s+(?:sealed\s+|abstract\s+|static\s+|public\s+|generic\s+)*(?:class|interface|struct|type|enum(?:eration)?|delegate|exception|base\s+class)\b/i, "declares the type kind ('is a class/interface/...')"],
  [/\bis\s+the\s+`?[A-Z][A-Za-z0-9_.]*`?\s+(?:class|interface|struct|type|enum(?:eration)?|delegate|exception)\b/i, "declares the type kind ('is the X class')"],
  [/^The\s+`?[A-Z][A-Za-z0-9_]*`?\s+(?:class|interface|struct|type|enum(?:eration)?|delegate|exception)\b/i, "opens with 'The X class/interface...'"],
];

function firstSentence(text) {
  text = text.trim();
  const m = text.match(/[.!?](?:\s|$)/);
  return m ? text.slice(0, m.index + 1) : text;
}

function stripCodeFences(md) {
  return md.replace(new RegExp(CODE_FENCE_RE.source, "g"), "");
}

function checkStructuralOpener(parsed) {
  const findings = [];
  const prose = stripCodeFences(parsed.overview_md).trim();
  const targets = [
    [firstSentence(prose), "prose lead"],
    [firstSentence(parsed.abstract.trim()), "TechArticle abstract"],
  ];
  for (const [text, where] of targets) {
    for (const [pat, label] of STRUCTURAL_OPENER_RES) {
      if (pat.test(text)) {
        findings.push({ severity: "HARD", rule: "structural-opener", detail: `first sentence of ${where} ${label}; the lead must state the developer task, not what the type is (§7 / P17)`, context: text.slice(0, 160) });
        break;
      }
    }
  }
  return findings;
}

const STRUCT_FAQ_Q_RE = /where\s+(?:does|is|do|can)\b.*\b(?:live|located|find|found|belong|defined|reside)|which\s+namespace|what\s+namespace/i;
const NAMESPACE_RE = /\bnamespace\b/i;

function checkStructuralOrientationFaq(parsed) {
  for (const faq of parsed.faq || []) {
    const q = faq.question || "";
    const a = faq.answer || "";
    if (NAMESPACE_RE.test(a) && (STRUCT_FAQ_Q_RE.test(q) || NAMESPACE_RE.test(q))) return [];
  }
  return [{ severity: "HARD", rule: "structural-orientation-faq", detail: "no structural-orientation FAQ entry found — N-Full requires a 'Where does {Class} live in the IronPDF API?' entry naming the namespace (§4.5)" }];
}

export function v121Validators(parsed, treatment) {
  if (treatment !== "full" && treatment !== "mid") return [];
  return checkStructuralOpener(parsed).concat(checkStructuralOrientationFaq(parsed));
}

// ---------------------------------------------------------------------------
// v1.2.3 editorial-pass (P21 code brevity)
// ---------------------------------------------------------------------------
const CODE_FENCE_CS_RE = /```(?:csharp|cs|c#)\s*\n([\s\S]*?)\n```/gi;
const SCENARIO_RE = /^\s*\/\/\s*\d+\s*\./gm;

function checkCodeBrevity(parsed) {
  const findings = [];
  const g = new RegExp(CODE_FENCE_CS_RE.source, "gi");
  let cm;
  while ((cm = g.exec(parsed.overview_md || "")) !== null) {
    const code = cm[1];
    const loc = code.split("\n").filter((ln) => ln.trim()).length;
    const scenarios = (code.match(new RegExp(SCENARIO_RE.source, "gm")) || []).length;
    if (scenarios >= 2) findings.push({ severity: "HARD", rule: "code-brevity-multiscenario", detail: `code example has ${scenarios} numbered scenarios; an N-Full example must show ONE focused scenario so it reads on hover (P21)` });
    if (loc > 24) findings.push({ severity: "HARD", rule: "code-brevity-loc", detail: `code example is ${loc} non-empty lines; the ceiling is 24 for a single hover-friendly example (P21)` });
    else if (loc > 14) findings.push({ severity: "SOFT", rule: "code-brevity-loc", detail: `code example is ${loc} non-empty lines; aim for <=12 and prefer declaration-form using so the example reads at a glance (P21)` });
  }
  return findings;
}

export function v123Validators(parsed, treatment) {
  if (treatment !== "full" && treatment !== "mid") return [];
  return checkCodeBrevity(parsed);
}

// ---------------------------------------------------------------------------
// Per-variant constraint validation
// ---------------------------------------------------------------------------
function countProseWords(md) {
  let prose = md.replace(new RegExp(CODE_FENCE_RE.source, "g"), "");
  prose = prose.replace(new RegExp(INLINE_CODE_RE.source, "g"), (_m, g1) => g1);
  const tokens = prose.match(/[A-Za-z0-9'/-]+/g) || [];
  return tokens.length;
}
function countCodeBlocks(md) { return findall(CODE_FENCE_RE, md).length; }
function countInternalLinks(md) { return findall(INTERNAL_LINK_RE, md).length; }

function checkRange(value, spec, label) {
  if (spec[0] === "exact") return value !== spec[1] ? `${label}: ${value} (required exact ${spec[1]})` : null;
  const [lo, hi] = spec;
  if (value < lo || value > hi) return `${label}: ${value} (required ${lo}-${hi})`;
  return null;
}

export function validateConstraints(parsed, treatment, subVariant) {
  const key = `${treatment}|${subVariant}`;
  const spec = VARIANT_CONSTRAINTS[key];
  if (!spec) return [{ severity: "HARD", rule: "unknown-variant", detail: `no constraint table for ${treatment}/${subVariant}` }];
  const findings = [];
  const md = parsed.overview_md;
  const nWords = countProseWords(md);
  const nCode = countCodeBlocks(md);
  const nLinks = countInternalLinks(md);
  const nFaq = parsed.faq.length;
  for (const [value, gateSpec, label] of [[nWords, spec.prose, "prose-words"], [nCode, spec.code, "code-blocks"], [nFaq, spec.faq, "faq-entries"]]) {
    const err = checkRange(value, gateSpec, label);
    if (err) findings.push({ severity: "HARD", rule: label, detail: err });
  }
  const errLinks = checkRange(nLinks, spec.links, "internal-links");
  if (errLinks) findings.push({ severity: "WARN", rule: "internal-links", detail: errLinks });
  if (/^#\s/m.test(md)) findings.push({ severity: "HARD", rule: "h1-count", detail: "overview MD contains an H1 (# heading)" });
  return findings;
}

// ---------------------------------------------------------------------------
// Markdown -> HTML for the overview block
// ---------------------------------------------------------------------------
function convertInlines(text) {
  const out = [];
  let i = 0;
  while (i < text.length) {
    INLINE_CODE_RE.lastIndex = i;
    LINK_RE.lastIndex = i;
    const mCode = matchAt(INLINE_CODE_RE, text, i);
    const mLink = matchAt(LINK_RE, text, i);
    let next = null;
    for (const m of [mCode, mLink]) if (m && (next === null || m.index < next.index)) next = m;
    if (next === null) { out.push(htmlEscape(text.slice(i))); break; }
    out.push(htmlEscape(text.slice(i, next.index)));
    if (next === mCode) out.push(`<code>${htmlEscape(mCode[1])}</code>`);
    else {
      const label = convertInlines(mLink[1]);
      out.push(`<a href="${htmlEscape(mLink[2])}">${label}</a>`);
    }
    i = next.index + next[0].length;
  }
  return out.join("");
}
function matchAt(re, text, from) {
  const g = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
  g.lastIndex = from;
  const m = g.exec(text);
  return m;
}

function proseToHtml(prose) {
  const paras = prose.split(/\n\s*\n/);
  const out = [];
  for (let p of paras) {
    p = p.trim();
    if (!p) continue;
    p = p.replace(/\s*\n\s*/g, " ");
    out.push(`<p>${convertInlines(p)}</p>`);
  }
  return out.join("\n");
}

export function mdOverviewToHtml(md) {
  const parts = [];
  const codeBlocks = [];
  let pos = 0;
  const g = new RegExp(CODE_FENCE_RE.source, "g");
  let m;
  while ((m = g.exec(md)) !== null) {
    const prose = md.slice(pos, m.index).trim();
    if (prose) parts.push(proseToHtml(prose));
    const lang = m[1] || "csharp";
    const code = m[2];
    codeBlocks.push(code);
    parts.push(`<div class="codewrapper"><pre><code class="lang-${htmlEscape(lang)} hljs">${htmlEscape(code)}</code></pre></div>`);
    pos = m.index + m[0].length;
  }
  const trailing = md.slice(pos).trim();
  if (trailing) parts.push(proseToHtml(trailing));
  return [parts.join("\n"), codeBlocks];
}

// ---------------------------------------------------------------------------
// JSON-LD builder
// ---------------------------------------------------------------------------
export function buildJsonld(className, pageUrl, title, description, abstract, faq, codeBlocks, subVariant, productName = "IronPDF", productUrl = "https://ironpdf.com/") {
  const nameLabel = { class: "class", interface: "interface", enum: "enumeration", exception: "exception", delegate: "delegate" }[subVariant] || "class";
  const article = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    name: `${className} ${nameLabel} | ${productName} C# API`,
    url: pageUrl,
    abstract,
    description,
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", name: productName, url: productUrl },
  };
  if (codeBlocks.length) {
    article.hasPart = codeBlocks.map((code) => ({ "@type": "SoftwareSourceCode", programmingLanguage: "C#", codeSampleType: "code snippet", text: code.trim() }));
  }
  const docs = [article];
  if (faq && faq.length) {
    docs.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((q) => ({ "@type": "Question", name: q.question || "", acceptedAnswer: { "@type": "Answer", text: q.answer || "" } })),
    });
  }
  return JSON.stringify(docs.length > 1 ? docs : docs[0], null, 2);
}

// ---------------------------------------------------------------------------
// Product identity
// ---------------------------------------------------------------------------
function deriveProductName(targetPath, baseUrl, explicit) {
  if (explicit) return explicit;
  const parts = resolve(targetPath).split(/[\\/]/).map((p) => p.toLowerCase());
  const i = parts.indexOf("object-reference");
  if (i >= 0 && i + 1 < parts.length) {
    const slug = parts[i + 1];
    if (slug in CANONICAL_PRODUCT_NAMES) return CANONICAL_PRODUCT_NAMES[slug];
  }
  const m = baseUrl.match(/https?:\/\/(?:www\.)?(iron[a-z0-9]+)\.com/i);
  if (m) {
    const slug = m[1].toLowerCase();
    if (slug in CANONICAL_PRODUCT_NAMES) return CANONICAL_PRODUCT_NAMES[slug];
  }
  const stem = basename(targetPath).replace(/\.html$/, "");
  const root = stem.split(".")[0];
  if (root && !SHARED_NS_ROOTS.has(root)) return CANONICAL_PRODUCT_NAMES[root.toLowerCase()] || root;
  return "IronPDF";
}
function deriveProductUrl(baseUrl, explicit) {
  if (explicit) return explicit.replace(/\/+$/, "") + "/";
  const m = baseUrl.match(/^(https?:\/\/[^/]+)\/?/);
  return m ? m[1] + "/" : "https://ironpdf.com/";
}

// ---------------------------------------------------------------------------
// HTML splicing
// ---------------------------------------------------------------------------
const SENTINEL_START_RE = /<!--\s*archetype-N:start[^>]*-->[\s\S]*?<!--\s*archetype-N:end\s*-->\s*/g;
const SYNTAX_CODEWRAPPER_END_RE = /(<h5 id="[^"]*_syntax"[^>]*>[^<]*<\/h5>\s*<div class="codewrapper">\s*<pre><code[^>]*>[^<]*<\/code><\/pre>\s*<\/div>)/;
const CLASS_REMARKS_H5_RE = /<h5 id="[^"]*_remarks"[^>]*>[\s\S]*?<\/h5>\s*/;
const CLASS_REMARKS_DIV_RE = /<div class="markdown level0 remarks"[^>]*>[\s\S]*?<\/div>\s*/;
const CLASS_EXAMPLES_H5_RE = /<h5 id="[^"]*_examples"[^>]*>[\s\S]*?<\/h5>\s*/;
const CLASS_EXAMPLES_PRE_RE = /<pre><code[^>]*>[\s\S]*?<\/code><\/pre>\s*/;
const LDJSON_RE = /\s*<script type="application\/ld\+json" data-archetype-n="1"[^>]*>[\s\S]*?<\/script>\s*/g;
const ALT_META_BLOCK_RE = /\s*<!-- archetype-N alt meta variants -->[\s\S]*?<!-- \/archetype-N alt meta variants -->\s*/g;
const MEMBER_H3_RE = /(<h3 id="(?:constructors|fields|properties|methods)")/;
const INHERITED_FALLBACK_RE = /(<div class="inheritance">\s*<h3>Inherited members<\/h3>)/;
const ARTICLE_CLOSE_RE = /(<\/article>)/;
const TITLE_RE = /<title>[\s\S]*?<\/title>/;
const META_TITLE_RE = /<meta name="title" content="[\s\S]*?">/;
const META_DESC_RE = /<meta name="description" content="[\s\S]*?">/;
const HEAD_END_RE = /<\/head>/;

function replaceFirst(text, re, replacement) {
  const m = text.match(re);
  if (!m) return text;
  return text.slice(0, m.index) + replacement + text.slice(m.index + m[0].length);
}

function stripClassLevelBlocks(html) {
  const counts = { remarks_h5: 0, remarks_div: 0, examples_h5: 0, examples_pre: 0 };
  const syntaxM = html.match(SYNTAX_CODEWRAPPER_END_RE);
  const memberM = html.match(MEMBER_H3_RE);
  if (!syntaxM || !memberM) return [html, counts];
  const regionStart = syntaxM.index + syntaxM[0].length;
  const regionEnd = memberM.index;
  if (regionEnd <= regionStart) return [html, counts];
  const head = html.slice(0, regionStart);
  let region = html.slice(regionStart, regionEnd);
  const tail = html.slice(regionEnd);

  let m = region.match(CLASS_REMARKS_H5_RE);
  if (m) { region = region.slice(0, m.index) + region.slice(m.index + m[0].length); counts.remarks_h5 = 1; }
  if (counts.remarks_h5) {
    m = region.match(CLASS_REMARKS_DIV_RE);
    if (m) { region = region.slice(0, m.index) + region.slice(m.index + m[0].length); counts.remarks_div = 1; }
  }
  m = region.match(CLASS_EXAMPLES_H5_RE);
  if (m) { region = region.slice(0, m.index) + region.slice(m.index + m[0].length); counts.examples_h5 = 1; }
  if (counts.examples_h5) {
    m = region.match(CLASS_EXAMPLES_PRE_RE);
    if (m) { region = region.slice(0, m.index) + region.slice(m.index + m[0].length); counts.examples_pre = 1; }
  }
  return [head + region + tail, counts];
}

export function inject(targetHtml, className, pageUrl, overviewHtml, title, description, altTitles, altDescriptions, jsonld, treatment, subVariant, stripClassBlocks = true) {
  let out = targetHtml;
  const stats = {};
  out = out.replace(SENTINEL_START_RE, "");
  out = out.replace(LDJSON_RE, "\n  ");
  out = out.replace(ALT_META_BLOCK_RE, "\n  ");

  if (stripClassBlocks) {
    const [o, c] = stripClassLevelBlocks(out);
    out = o; stats.stripped = c;
  } else {
    stats.stripped = { remarks_h5: 0, remarks_div: 0, examples_h5: 0, examples_pre: 0 };
  }

  const newTitleTag = `<title>${htmlEscape(title)}</title>`;
  if (TITLE_RE.test(out)) out = replaceFirst(out, TITLE_RE, newTitleTag);
  const newMetaTitle = `<meta name="title" content="${htmlEscape(title)}">`;
  if (META_TITLE_RE.test(out)) out = replaceFirst(out, META_TITLE_RE, newMetaTitle);

  const newMetaDesc = `<meta name="description" content="${htmlEscape(description)}">`;
  if (META_DESC_RE.test(out)) out = replaceFirst(out, META_DESC_RE, newMetaDesc);
  else out = replaceFirst(out, META_TITLE_RE, (out.match(META_TITLE_RE)?.[0] || "") + "\n    " + newMetaDesc);

  const altBlock =
    "<!-- archetype-N alt meta variants -->\n" +
    "    <!--\n" +
    "      v1 (algorithm) title:       " + altTitles[0] + "\n" +
    "      v2 (human)     title:       " + altTitles[1] + "\n" +
    "      v1 (algorithm) description: " + altDescriptions[0] + "\n" +
    "      v2 (human)     description: " + altDescriptions[1] + "\n" +
    "    -->\n" +
    "    <!-- /archetype-N alt meta variants -->";
  out = replaceFirst(out, TITLE_RE, altBlock + "\n    " + (out.match(TITLE_RE)?.[0] || ""));

  const ldjsonBlock =
    `<script type="application/ld+json" data-archetype-n="1" data-treatment="${treatment}" data-sub-variant="${subVariant}">\n` +
    jsonld + "\n    </script>";
  out = replaceFirst(out, HEAD_END_RE, "    " + ldjsonBlock + "\n  </head>");

  const sentinelOpen = `<!-- archetype-N:start ${className} treatment=${treatment} sub_variant=${subVariant} -->`;
  const sentinelClose = "<!-- archetype-N:end -->";
  const overviewBlock =
    `  ${sentinelOpen}\n` +
    `  <div class="archetype-n-overview" data-treatment="${treatment}" data-sub-variant="${subVariant}">\n` +
    `${overviewHtml}\n` +
    `  </div>\n` +
    `  ${sentinelClose}\n` +
    `  `;
  let mm = out.match(MEMBER_H3_RE);
  if (!mm) { mm = out.match(INHERITED_FALLBACK_RE); if (mm) stats.fallback_anchor = "inherited_h3"; }
  if (!mm) { mm = out.match(ARTICLE_CLOSE_RE); if (mm) stats.fallback_anchor = "article_close"; }
  if (!mm) throw new Error(`Could not find any insertion anchor in ${className} page`);
  out = out.slice(0, mm.index) + overviewBlock + out.slice(mm.index);

  return [out, stats];
}

// Exposed for callers (enhance.mjs) that mirror Python helpers.
export function countProseWordsPublic(md) { return countProseWords(md); }
export function stripCodeFencesPublic(md) { return stripCodeFences(md); }

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const args = { variant: "v3", treatment: null, sub_variant: null, base_url: "https://ironpdf.com/object-reference/api/", product: null, product_url: null, api_dir: null, confirmed_types: null, dry_run: false, keep_class_blocks: false, skip_phase5: false, skip_constraints: false, skip_v12: false, skip_v123: false, skip_v121: false, _pos: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    switch (a) {
      case "--variant": args.variant = argv[++i]; break;
      case "--treatment": args.treatment = argv[++i]; break;
      case "--sub-variant": args.sub_variant = argv[++i]; break;
      case "--base-url": args.base_url = argv[++i]; break;
      case "--product": args.product = argv[++i]; break;
      case "--product-url": args.product_url = argv[++i]; break;
      case "--api-dir": args.api_dir = argv[++i]; break;
      case "--confirmed-types": args.confirmed_types = argv[++i]; break;
      case "--keep-class-blocks": args.keep_class_blocks = true; break;
      case "--skip-phase5": args.skip_phase5 = true; break;
      case "--skip-constraints": args.skip_constraints = true; break;
      case "--skip-v12-checks": args.skip_v12 = true; break;
      case "--skip-v123-checks": args.skip_v123 = true; break;
      case "--skip-v121-checks": args.skip_v121 = true; break;
      case "--dry-run": args.dry_run = true; break;
      default: args._pos.push(a);
    }
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const [sample, target] = args._pos;
  if (!sample || !target) { console.error("usage: inject_archetype_n.mjs SAMPLE.md TARGET.html [opts]"); process.exit(1); }
  if (!existsSync(sample)) { console.error(`Sample not found: ${sample}`); process.exit(1); }
  if (!existsSync(target)) { console.error(`Target not found: ${target}`); process.exit(1); }

  API_DIR = args.api_dir || dirname(resolve(target));
  CONFIRMED_TYPES_PATH = args.confirmed_types || null;

  const parsed = parseSample(readTextNorm(sample));
  const idx = { v1: 0, v2: 1, v3: 2 }[args.variant];
  const stem = basename(target).replace(/\.html$/, "");
  const className = stem.split(".").pop();
  const pageUrl = args.base_url.replace(/\/+$/, "") + "/" + basename(target);

  const productName = deriveProductName(target, args.base_url, args.product);
  const productUrl = deriveProductUrl(args.base_url, args.product_url);
  const nsRoot = stem.split(".")[0];
  if (nsRoot && nsRoot[0] === nsRoot[0].toUpperCase() && nsRoot[0] !== nsRoot[0].toLowerCase()) KNOWN_NAMESPACE_ROOTS.add(nsRoot);

  const targetHtmlText = readTextNorm(target);
  const confirmed = loadConfirmedTypes();
  let autoTreatment, autoSub;
  if (pageUrl in confirmed) [autoTreatment, autoSub] = deriveTreatment(pageUrl, confirmed);
  else { const d = deriveTreatmentFromHtml(targetHtmlText); [autoTreatment, autoSub] = d || ["full", "class"]; }
  const treatment = args.treatment || autoTreatment;
  const subVariant = args.sub_variant || autoSub;

  const title = parsed.titles[idx];
  const description = parsed.descriptions[idx];

  // Constraints (exit 3)
  const constraintFindings = validateConstraints(parsed, treatment, subVariant);
  if (constraintFindings.length) {
    console.log(`Variant constraints (${treatment}/${subVariant}):`);
    for (const f of constraintFindings) console.log(`  [${f.severity}] ${f.rule.padEnd(15)} ${f.detail}`);
  }
  const hardConstraints = constraintFindings.filter((f) => f.severity === "HARD");
  if (hardConstraints.length && !args.skip_constraints) { console.log(`\nHARD constraint gate failed: ${hardConstraints.length} rule(s).`); process.exit(3); }

  // Forbidden (exit 2)
  const overviewProse = stripCodeFences(parsed.overview_md);
  let findings = forbiddenScan(overviewProse, "overview prose");
  findings = findings.concat(forbiddenScan(parsed.abstract, "TechArticle abstract"));
  parsed.faq.forEach((faq, i) => {
    findings = findings.concat(forbiddenScan(faq.question || "", `FAQ[${i}].question`));
    findings = findings.concat(forbiddenScan(faq.answer || "", `FAQ[${i}].answer`));
  });
  const hard = findings.filter((f) => f.severity === "HARD");
  if (findings.length) { console.log("Forbidden-pattern scan findings:"); for (const f of findings) console.log(`  [${f.severity}] ${String(f.pattern).padEnd(15)} in ${f.where}: ...${f.context}...`); }
  if (hard.length && !args.skip_phase5) { console.log(`\nHARD gate failed: ${hard.length} forbidden pattern(s).`); process.exit(2); }

  // v1.2 (exit 4)
  const v12 = v12Validators(parsed, pageUrl, targetHtmlText);
  const v12hard = v12.filter((f) => f.severity === "HARD");
  if (v12.length) { console.log("v1.2 P-adjustment findings:"); for (const f of v12) console.log(`  [${f.severity}] ${String(f.rule).padEnd(24)} ${f.context || f.detail || ""}`); }
  if (v12hard.length && !args.skip_v12) { console.log(`\nHARD v1.2 gate failed: ${v12hard.length} violation(s).`); process.exit(4); }

  // v1.2.1 (exit 5)
  const v121 = v121Validators(parsed, treatment);
  const v121hard = v121.filter((f) => f.severity === "HARD");
  if (v121.length) { console.log("v1.2.1 reframe findings:"); for (const f of v121) console.log(`  [${f.severity}] ${String(f.rule).padEnd(26)} ${f.detail || ""}`); }
  if (v121hard.length && !args.skip_v121) { console.log(`\nHARD v1.2.1 gate failed: ${v121hard.length} reframe violation(s).`); process.exit(5); }

  // v1.2.3 (exit 6)
  const v123 = v123Validators(parsed, treatment);
  const v123hard = v123.filter((f) => f.severity === "HARD");
  if (v123.length) { console.log("v1.2.3 editorial-pass findings:"); for (const f of v123) console.log(`  [${f.severity}] ${String(f.rule).padEnd(26)} ${f.detail || ""}`); }
  if (v123hard.length && !args.skip_v123) { console.log(`\nHARD v1.2.3 gate failed: ${v123hard.length} code-brevity violation(s).`); process.exit(6); }

  const [overviewHtml, codeBlocks] = mdOverviewToHtml(parsed.overview_md);
  const jsonld = buildJsonld(className, pageUrl, title, description, parsed.abstract, parsed.faq, codeBlocks, subVariant, productName, productUrl);

  const original = readTextNorm(target);
  const [spliced, stats] = inject(original, className, pageUrl, overviewHtml, title, description, parsed.titles, parsed.descriptions, jsonld, treatment, subVariant, !args.keep_class_blocks);

  console.log(`Sample:      ${sample}`);
  console.log(`Target:      ${target}`);
  console.log(`Class:       ${className}`);
  console.log(`Product:     ${productName} (${productUrl})`);
  console.log(`Treatment:   ${treatment}/${subVariant}`);
  console.log(`Meta variant:${args.variant}`);
  console.log(`Title:       ${title}`);
  console.log(`Description: ${description}`);
  console.log(`Code blocks: ${codeBlocks.length}`);
  console.log(`FAQ:         ${parsed.faq.length} entries`);
  console.log(`Prose words: ${countProseWords(parsed.overview_md)}`);
  console.log(`Stripped:    ${JSON.stringify(stats.stripped)}`);
  console.log(`Diff:        ${(spliced.length - original.length >= 0 ? "+" : "") + (spliced.length - original.length)} bytes`);
  if (args.dry_run) console.log("\n(--dry-run: not writing)");
  else { writeTextEol(target, spliced); console.log("\nWrote target."); }
}

const isMain = import.meta.url === `file://${process.argv[1]}` || import.meta.url.endsWith(process.argv[1]?.replace(/\\/g, "/"));
if (isMain) main();
