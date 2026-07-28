/**
 * filters.mjs — noise control for the reported surface (Node port of filters.py).
 *
 * Three independent filters, all applied while a Surface is being built so filtered types never cost
 * an HTML read: vendored/internal namespaces, compiler-generated members, and operator globs.
 */

/**
 * Namespaces that are vendored or internal infrastructure rather than product surface. The first six
 * alternatives are kept in sync with BLOCK_NS in scaffolds/tools/archetype-n/facts.mjs.
 *
 * `Iron.Pdf.Extensions` is a backstop for the existing archive: it holds only obfuscator-generated
 * types whose names change on every build (auxkyk/auxkyl in ironpdf 2025.12.2, kjmakb/kjmakc in
 * 2026.1.3, bnubqp/bnubqq in 2026.6.1), which would otherwise report 2 breaking + 2 additive changes
 * in every IronPDF diff forever. scaffolds/filterConfig.yml now excludes them at generation time, but
 * that only affects future builds — all 73 already-archived IronPDF versions still contain them.
 */
export const BLOCK_NS = /\.Internal\b|Interop|grpc|Pdfium|BouncyCastle|GrpcLayer|^Iron\.Pdf\.Extensions\b/i;

/**
 * Compiler-generated members DocFX still emits. `value__` is the backing field every enum gets; it
 * appears in the xrefmap (12 entries in irondrawing/2022.9.8843 alone) but is not API surface.
 */
export const COMPILER_GENERATED_MEMBERS = ["value__"];

/** Declarations a consumer can bind against. */
const PUBLIC_PREFIXES = new Set(["public", "protected"]);

/**
 * Translate a shell-style glob to an anchored RegExp, matching Python's fnmatch.fnmatchcase for the
 * `*`, `?`, and `[...]` forms the CLI accepts.
 */
function globToRegExp(pattern) {
  let source = "";
  for (let index = 0; index < pattern.length; index++) {
    const character = pattern[index];
    if (character === "*") source += ".*";
    else if (character === "?") source += ".";
    else if (character === "[") {
      const close = pattern.indexOf("]", index + 1);
      if (close < 0) {
        source += "\\[";
      } else {
        let body = pattern.slice(index + 1, close);
        if (body.startsWith("!")) body = "^" + body.slice(1);
        source += `[${body}]`;
        index = close;
      }
    } else source += character.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  return new RegExp(`^${source}$`);
}

/** Decides which types and members appear in a Surface. */
export class SurfaceFilter {
  constructor({ includeInternal = false, namespaces = [], excludes = [], publicOnly = true } = {}) {
    this.includeInternal = includeInternal;
    this.namespaces = namespaces.map(globToRegExp);
    this.excludes = excludes.map(globToRegExp);
    this.publicOnly = publicOnly;
  }

  /** Whether a type belongs in the reported surface, based on its uid alone. */
  allowsType(typeUid) {
    if (!this.includeInternal && BLOCK_NS.test(typeUid)) return false;
    // --namespace is an allow-list: when any pattern is given, the uid must match one of them.
    if (this.namespaces.length && !this.namespaces.some((pattern) => pattern.test(typeUid))) return false;
    if (this.excludes.some((pattern) => pattern.test(typeUid))) return false;
    return true;
  }

  /** Whether a member belongs in the reported surface. */
  allowsMember(uid, name) {
    return !(COMPILER_GENERATED_MEMBERS.includes(name) || uid.endsWith(`.${COMPILER_GENERATED_MEMBERS[0]}`));
  }

  /**
   * Whether a declaration is part of the bindable surface. An empty declaration means the HTML page
   * did not yield one; those are kept, because the xrefmap only ever lists what DocFX documented.
   */
  allowsDeclaration(declaration) {
    if (!this.publicOnly || !declaration) return true;
    return PUBLIC_PREFIXES.has(declaration.split(" ", 1)[0]);
  }
}
