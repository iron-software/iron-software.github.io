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
 * `Iron.Pdf.Extensions` holds only obfuscator-generated types whose names change on every build
 * (auxkyk/auxkyl in ironpdf 2025.12.2, kjmakb/kjmakc in 2026.1.3, bnubqp/bnubqq in 2026.6.1,
 * qdygyt/qdygyu in 2026.7.2), which would otherwise report changes in every IronPDF diff forever.
 * scaffolds/filterConfig.yml excludes them at generation time, but only for builds that pick that
 * change up — every already-archived IronPDF version still contains them, so this stays regardless.
 *
 * Deliberately unanchored: member uids embed fully-qualified parameter types, so the namespace has to
 * match mid-string too (see SurfaceFilter.allowsMember). The literal dots keep it from colliding with
 * the legitimate `IronPdf.Extensions` namespace, which has no dot between Iron and Pdf.
 */
// `Interop` carries a word boundary that facts.mjs's copy lacks. Without it the alternative also
// matches `System.Runtime.InteropServices`, which is a legitimate BCL namespace — harmless when only
// type uids were tested, but once member uids are tested it wrongly drops every member taking a
// HandleRef (134 of ironocr 2026.7.2's 1522 members). `Interop\b` still matches a real `….Interop.…`
// namespace, since the following dot is a word boundary.
export const BLOCK_NS = /\.Internal\b|Interop\b|grpc|Pdfium|BouncyCastle|GrpcLayer|Iron\.Pdf\.Extensions\b/i;

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

  /**
   * Whether a member belongs in the reported surface.
   *
   * A member uid embeds the fully-qualified types of its parameters, e.g.
   * `LicensingException.#ctor(Iron.Pdf.Extensions.bnubqp)`. Applying BLOCK_NS to the whole uid — not
   * just the owning type — therefore also drops members whose *parameters* come from a blocked
   * namespace. Those are not usable public surface (the parameter type is undocumented), and when
   * the parameter is an obfuscated type the uid changes on every build, which would otherwise report
   * the member as removed-and-added in every single release.
   */
  allowsMember(uid, name) {
    if (COMPILER_GENERATED_MEMBERS.includes(name) || uid.endsWith(`.${COMPILER_GENERATED_MEMBERS[0]}`)) return false;
    if (!this.includeInternal && BLOCK_NS.test(uid)) return false;
    return true;
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
