/** Per-page docfx fact extraction (JS port of facts.py). */
const BLOCK_NS = /\.Internal\b|Interop|grpc|Pdfium|BouncyCastle|GrpcLayer/i;
const DECL_RE = /class="lang-csharp hljs">([^<]+)<\/code>/g;
const TYPEDECL_RE = /public\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+)*(class|interface|enum|struct|delegate)\s+([A-Za-z0-9_]+)(?:&lt;[^&]*&gt;|<[^>]*>)?(?:\s*:\s*([^<\n{]+))?/;
const SUMMARY_RE = /<div class="markdown level0 summary"[^>]*>([\s\S]*?)<\/div>/g;

function unescapeHtml(s) {
  return s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
}
function clean(x) { return unescapeHtml(x.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim(); }

export function isTypePage(stem, htmlText) {
  if (stem === "index" || stem === "toc") return false;
  if (BLOCK_NS.test(stem)) return false;
  return new RegExp(DECL_RE.source).test(htmlText);
}

export function extractFacts(htmlText, stem, baseUrl) {
  if (!isTypePage(stem, htmlText)) return null;
  const decls = [];
  const g = new RegExp(DECL_RE.source, "g");
  let m;
  while ((m = g.exec(htmlText)) !== null) decls.push(unescapeHtml(m[1]).trim());
  if (!decls.length) return null;
  const first = decls[0];
  const tm = TYPEDECL_RE.exec(first.replace(/</g, "&lt;").replace(/>/g, "&gt;")) || TYPEDECL_RE.exec(first);
  if (!tm) return null;
  const kind = tm[1];
  const bases = (tm[3] || "").split(",").map((b) => b.trim().split(".").pop()).filter(Boolean);
  const baseType = bases.length ? bases[0] : "Object";
  const className = stem.split(".").pop();
  const namespace = stem.includes(".") ? stem.slice(0, -(className.length + 1)) : "";
  const members = decls.slice(1);
  const isEnum = kind === "enum" || bases.includes("Enum");
  const isExc = bases.some((b) => b === "Exception" || b.endsWith("Exception"));
  let typeKind = kind;
  if ((kind === "class" || kind === "struct") && bases.includes("Enum")) typeKind = "enum";
  const summ = [];
  const sg = new RegExp(SUMMARY_RE.source, "g");
  let sm;
  while ((sm = sg.exec(htmlText)) !== null) summ.push(sm[1]);
  const fqn = namespace ? `${namespace}.${className}` : className;
  return {
    url: baseUrl.replace(/\/+$/, "") + "/" + stem + ".html",
    fqn, namespace, class_name: className, base_type: baseType, type_kind: typeKind,
    is_enum_pattern: isEnum, is_exception: isExc, member_count: members.length,
    members: members.slice(0, 60), summary: summ.length ? clean(summ[0]).slice(0, 600) : "",
    declaration: clean(first),
  };
}
