"""Parser for DocFX ``xrefmap.yml`` — the member-identity layer of a diff.

The archive's xrefmaps are a uniform, flat list of six-key blocks. Verified across the whole
archive, oldest (``irondrawing/2022.9.8843``) to newest: no anchors, no nesting, no ``isSpec``, and
no ``specification`` blocks. A line parser is therefore sufficient, and is markedly faster than a
YAML library on the 2.3 MB ironpdf map.

Only two YAML subtleties actually occur and both are handled: the ``- uid:`` list-item marker, and
quoted scalars (DocFX quotes ``name: "True"`` / ``"False"`` so they are not read as booleans).
"""

import re

# The six keys every entry carries. Anything else is ignored so an added key cannot break parsing.
ENTRY_KEYS = ("uid", "name", "href", "commentId", "fullName", "nameWithType")

# DocFX emits spurious `<GUID>` markers on some vendored/unresolvable types, and mints a *fresh* GUID
# on every build — so the same member reads as a different uid in every release and shows up as a
# removal plus an addition forever (745 uids in ironpdf 2026.6.1, 663 in ironword, 2 in ironxl).
#
# Stripping the marker is exactly what update-apidocs' strip_guid_markers() already does to the
# generated file names, so a stripped uid also matches the page actually on disk
# (`Org.BouncyCastle.Asn1.<GUID>Asn1Encodable` -> `Org.BouncyCastle.Asn1.Asn1Encodable.html`).
# Both the raw and URL-encoded forms occur: uids carry `<…>`, hrefs carry `%3C…%3E`.
GUID_MARKER_RE = re.compile(
    r"(?:<|%3[Cc])[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}(?:>|%3[Ee])"
)


def strip_guid_markers(value: str) -> str:
    """Remove DocFX's per-build ``<GUID>`` markers so identifiers compare across versions."""
    return GUID_MARKER_RE.sub("", value)


def _scalar(raw: str) -> str:
    """Unwrap a YAML scalar, stripping matched surrounding quotes and DocFX GUID markers.

    DocFX emits ``name: "True"`` for members whose name would otherwise parse as a boolean; without
    this the quotes survive into the uid comparison and every such member reads as changed.
    """
    value = raw.strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in ('"', "'"):
        inner = value[1:-1]
        value = inner.replace('\\"', '"').replace("\\\\", "\\") if value[0] == '"' else inner.replace("''", "'")
    return strip_guid_markers(value)


def parse_xrefmap(path: str) -> dict:
    """Read an xrefmap into ``{uid: {key: value}}``.

    Args:
        path (str): Path to a version's ``xrefmap.yml``.

    Returns:
        dict: One entry per uid, each holding the six xrefmap keys present for it.
    """
    entries = {}
    current = None

    with open(path, "r", encoding="utf-8") as handle:
        for line in handle:
            stripped = line.strip()
            # Skip the YamlMime marker, the `sorted:`/`references:` headers, and blank lines.
            if not stripped or stripped.startswith("#"):
                continue

            if stripped.startswith("- "):
                # A new list item always begins with `- uid: <value>`.
                if current is not None and "uid" in current:
                    entries[current["uid"]] = current
                current = {}
                stripped = stripped[2:].strip()

            if current is None:
                continue

            key, separator, value = stripped.partition(":")
            if not separator or key not in ENTRY_KEYS:
                continue
            current[key] = _scalar(value)

    if current is not None and "uid" in current:
        entries[current["uid"]] = current

    return entries


def kind_of(entry: dict) -> str:
    """Return an entry's kind from its ``commentId`` prefix.

    ``N`` namespace, ``T`` type, ``M`` method/constructor, ``P`` property, ``F`` field, ``E`` event.
    Returns ``""`` when the entry has no usable commentId.
    """
    comment_id = entry.get("commentId", "")
    return comment_id[0] if len(comment_id) > 1 and comment_id[1] == ":" else ""


def page_stem(entry: dict) -> str:
    """Return the type page an entry is documented on, derived from its ``href``.

    ``href`` is always ``api/<PageStem>.html`` with an optional ``#anchor``. Deriving the owning type
    from the page — rather than splitting the uid on dots — is what keeps nested types, generics, and
    explicit interface implementations attributed correctly.

    Returns ``""`` when the href is missing or not the expected shape.
    """
    href = entry.get("href", "")
    if not href:
        return ""
    path = href.split("#", 1)[0]
    if path.startswith("api/"):
        path = path[4:]
    return path[:-5] if path.endswith(".html") else ""
