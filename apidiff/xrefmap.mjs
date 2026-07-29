/**
 * xrefmap.mjs — parser for DocFX `xrefmap.yml` (Node port of xrefmap.py).
 *
 * The archive's xrefmaps are a uniform, flat list of six-key blocks. Verified across the whole
 * archive, oldest (`irondrawing/2022.9.8843`) to newest: no anchors, no nesting, no `isSpec`, and no
 * `specification` blocks. A line parser is therefore sufficient, and is markedly faster than a YAML
 * library on the 2.3 MB ironpdf map.
 *
 * Only two YAML subtleties actually occur and both are handled: the `- uid:` list-item marker, and
 * quoted scalars (DocFX quotes `name: "True"` / `"False"` so they are not read as booleans).
 */

import { readFileSync } from "node:fs";

/** The six keys every entry carries. Anything else is ignored so an added key cannot break parsing. */
export const ENTRY_KEYS = new Set(["uid", "name", "href", "commentId", "fullName", "nameWithType"]);

/**
 * DocFX emits spurious `<GUID>` markers on some vendored/unresolvable types, and mints a *fresh*
 * GUID on every build — so the same member reads as a different uid in every release and shows up as
 * a removal plus an addition forever (745 uids in ironpdf 2026.6.1, 663 in ironword, 2 in ironxl).
 *
 * Stripping the marker is exactly what update-apidocs' stripGuidMarkers() already does to the
 * generated file names, so a stripped uid also matches the page actually on disk
 * (`Org.BouncyCastle.Asn1.<GUID>Asn1Encodable` -> `Org.BouncyCastle.Asn1.Asn1Encodable.html`).
 * Both the raw and URL-encoded forms occur: uids carry `<…>`, hrefs carry `%3C…%3E`.
 */
const GUID_MARKER_RE =
  /(?:<|%3[Cc])[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(?:>|%3[Ee])/g;

/** Remove DocFX's per-build `<GUID>` markers so identifiers compare across versions. */
export function stripGuidMarkers(value) {
  return value.replace(GUID_MARKER_RE, "");
}

/**
 * Unwrap a YAML scalar, stripping matched surrounding quotes and DocFX GUID markers.
 *
 * DocFX emits `name: "True"` for members whose name would otherwise parse as a boolean; without this
 * the quotes survive into the uid comparison and every such member reads as changed.
 */
function scalar(raw) {
  let value = raw.trim();
  if (value.length >= 2 && value[0] === value[value.length - 1] && (value[0] === '"' || value[0] === "'")) {
    const inner = value.slice(1, -1);
    value = value[0] === '"' ? inner.replaceAll('\\"', '"').replaceAll("\\\\", "\\") : inner.replaceAll("''", "'");
  }
  return stripGuidMarkers(value);
}

/**
 * Read an xrefmap into `{ [uid]: { ...keys } }`.
 *
 * @param {string} path Path to a version's `xrefmap.yml`.
 */
export function parseXrefmap(path) {
  const entries = Object.create(null);
  let current = null;

  for (const line of readFileSync(path, "utf-8").split("\n")) {
    let stripped = line.trim();
    // Skip the YamlMime marker, the `sorted:`/`references:` headers, and blank lines.
    if (!stripped || stripped.startsWith("#")) continue;

    if (stripped.startsWith("- ")) {
      // A new list item always begins with `- uid: <value>`.
      if (current !== null && "uid" in current) entries[current.uid] = current;
      current = {};
      stripped = stripped.slice(2).trim();
    }
    if (current === null) continue;

    const separator = stripped.indexOf(":");
    if (separator < 0) continue;
    const key = stripped.slice(0, separator);
    if (!ENTRY_KEYS.has(key)) continue;
    current[key] = scalar(stripped.slice(separator + 1));
  }

  if (current !== null && "uid" in current) entries[current.uid] = current;
  return entries;
}

/**
 * An entry's kind from its `commentId` prefix: `N` namespace, `T` type, `M` method/constructor,
 * `P` property, `F` field, `E` event. Returns `""` when there is no usable commentId.
 */
export function kindOf(entry) {
  const commentId = entry.commentId ?? "";
  return commentId.length > 1 && commentId[1] === ":" ? commentId[0] : "";
}

/**
 * The type page an entry is documented on, derived from its `href`.
 *
 * `href` is always `api/<PageStem>.html` with an optional `#anchor`. Deriving the owning type from
 * the page — rather than splitting the uid on dots — is what keeps nested types, generics, and
 * explicit interface implementations attributed correctly. Returns `""` for an unexpected shape.
 */
export function pageStem(entry) {
  const href = entry.href ?? "";
  if (!href) return "";
  let path = href.split("#", 1)[0];
  if (path.startsWith("api/")) path = path.slice(4);
  return path.endsWith(".html") ? path.slice(0, -5) : "";
}
