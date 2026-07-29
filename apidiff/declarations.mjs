/**
 * declarations.mjs — extract C# declarations from a DocFX type page (Node port of declarations.py).
 *
 * Every declaration is anchored to the `data-uid` on its heading, which DocFX writes byte-identical
 * to the xrefmap `uid`, so no href/anchor demangling is needed. The type's own declaration hangs off
 * its `<h1 data-uid>`. This layout is unchanged from the oldest archived pages (2022) to the newest.
 *
 * Anchoring is a correctness requirement, not a style preference: Archetype-N injects *code samples*
 * into these same pages, so a flat scan for `lang-csharp` blocks — the approach in
 * scaffolds/tools/archetype-n/facts.mjs — reports `using IronZip;` as a member.
 */

import { stripGuidMarkers } from "./xrefmap.mjs";

/** Archetype-N injects prose and runnable samples between these sentinels; removed before parsing. */
const ARCHETYPE_BLOCK = /<!--\s*archetype-N:start[\s\S]*?<!--\s*archetype-N:end\s*-->/gi;

/** A heading carrying a uid. The `<a data-uid="...*">` overload anchors are not headings. */
const HEADING_WITH_UID = /<h[1-6][^>]*\sdata-uid="([^"]+)"[^>]*>/gi;

/** One rendered declaration. DocFX emits `lang-csharp hljs`; the suffix is allowed to vary. */
const CSHARP_BLOCK = /<code class="lang-csharp[^"]*">([\s\S]*?)<\/code>/gi;

const TAG = /<[^>]+>/g;

/**
 * The "Implements" block a type page carries above its Syntax heading, e.g.
 *
 *     <h5>Implements</h5>
 *         <div><span class="xref">System.Collections.Generic.IEnumerable</span>&lt;…Cell…&gt;</div>
 *         <div><span class="xref">System.Collections.IEnumerable</span></div>
 *
 * This is the authoritative record of the interfaces a type implements, and it is *stable across
 * DocFX versions* — unlike the declaration line, which stopped inlining interfaces between the
 * 2026.6 and 2026.7 builds while this section stayed byte-identical.
 */
const IMPLEMENTS_SECTION = /<h5>\s*Implements\s*<\/h5>([\s\S]*?)(?=<h[1-6])/i;
const IMPLEMENTS_ENTRY = /<div>([\s\S]*?)<\/div>/g;

/** A dotted, fully-qualified name; reduced to its last segment to match the declaration's form. */
const QUALIFIED_NAME = /[A-Za-z_][A-Za-z0-9_]*(?:\.[A-Za-z_][A-Za-z0-9_]*)+/g;

/**
 * Strip namespaces from every qualified name in a type expression, so
 * `IronSoftware.Abstractions.IParent<IronSoftware.Abstractions.Word.IWordDocumentObjectCollection>`
 * becomes `IParent<IWordDocumentObjectCollection>`.
 */
export function simplifyTypeName(text) {
  return text.replace(QUALIFIED_NAME, (match) => match.slice(match.lastIndexOf(".") + 1));
}

/** Minimal HTML entity decoding — the set DocFX actually emits inside declarations. */
const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", "#39": "'", nbsp: " " };

function unescapeHtml(text) {
  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, name) => {
    if (Object.prototype.hasOwnProperty.call(ENTITIES, name)) return ENTITIES[name];
    if (name.startsWith("#x") || name.startsWith("#X")) return String.fromCodePoint(parseInt(name.slice(2), 16));
    if (name.startsWith("#")) return String.fromCodePoint(parseInt(name.slice(1), 10));
    return match;
  });
}

/**
 * Turn a raw declaration code block into a single comparable line.
 *
 * GUID markers are stripped here too, so a declaration mentioning a marked type stays comparable
 * across builds — and matches the uid, which xrefmap.mjs strips the same way.
 */
export function normalizeDeclaration(raw) {
  return stripGuidMarkers(unescapeHtml(raw.replace(TAG, "")).replace(/\s+/g, " ").trim());
}

/**
 * Map every `data-uid` on a DocFX type page to its C# declaration.
 *
 * Includes the type's own uid (from its `<h1>`). Uids with no declaration between their heading and
 * the next are omitted rather than recorded as empty.
 *
 * @param {string} pageHtml Full text of an `api/<Type>.html` page.
 * @returns {Object<string,string>} `{ [uid]: declaration }`
 */
export function parseTypePage(pageHtml) {
  const cleaned = pageHtml.replace(ARCHETYPE_BLOCK, "");

  // Overload-group uids end in `*` and describe a set of overloads, not a signature.
  const anchors = [];
  for (const match of cleaned.matchAll(HEADING_WITH_UID)) {
    if (!match[1].endsWith("*")) anchors.push([match.index, stripGuidMarkers(match[1])]);
  }
  if (anchors.length === 0) return {};

  const blocks = [...cleaned.matchAll(CSHARP_BLOCK)].map((match) => [match.index, match[1]]);
  if (blocks.length === 0) return {};

  const declarations = Object.create(null);
  for (let index = 0; index < anchors.length; index++) {
    const [position, uid] = anchors[index];
    // A declaration belongs to the nearest preceding heading, so bound the search at the next one.
    const nextPosition = index + 1 < anchors.length ? anchors[index + 1][0] : cleaned.length;
    for (const [blockPosition, blockText] of blocks) {
      if (blockPosition < position) continue;
      if (blockPosition >= nextPosition) break;
      // The first block in a section is the Declaration; later ones are Examples.
      const declaration = normalizeDeclaration(blockText);
      if (declaration) declarations[uid] = declaration;
      break;
    }
  }
  return declarations;
}

/** Return the interfaces listed in a type page's Implements section, simple-named and sorted. */
export function parseImplements(pageHtml) {
  const section = IMPLEMENTS_SECTION.exec(pageHtml);
  if (!section) return [];
  const interfaces = new Set();
  for (const entry of section[1].matchAll(IMPLEMENTS_ENTRY)) {
    const name = normalizeDeclaration(entry[1]);
    if (name) interfaces.add(simplifyTypeName(name));
  }
  return [...interfaces].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}
