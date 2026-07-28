"""Extract C# declarations from a generated DocFX type page — the signature layer of a diff.

Every declaration is anchored to the ``data-uid`` on its heading, which DocFX writes byte-identical
to the xrefmap ``uid``:

    <h4 id="IronZip_IronZipArchive_Contains_System_String_"
        data-uid="IronZip.IronZipArchive.Contains(System.String)">Contains(String)</h4>
    <h5 class="decalaration">Declaration</h5>
    <div class="codewrapper">
      <pre><code class="lang-csharp hljs">public bool Contains(string EntryName)</code></pre>
    </div>

so no href/anchor demangling is needed. The type's own declaration hangs off its ``<h1 data-uid>``.
This layout is unchanged from the oldest archived pages (2022) to the newest.

Anchoring is a correctness requirement, not a style preference: Archetype-N injects *code samples*
into these same pages, so a flat scan for ``lang-csharp`` blocks — the approach in
``scaffolds/tools/archetype-n/facts.py`` — reports ``using IronZip;`` as a member.
"""

import html
import re

from .xrefmap import strip_guid_markers

# Archetype-N injects prose and runnable samples between these sentinels. Removed before parsing so
# an injected sample can never be mistaken for a declaration.
ARCHETYPE_BLOCK = re.compile(r"<!--\s*archetype-N:start.*?<!--\s*archetype-N:end\s*-->", re.DOTALL | re.I)

# A heading carrying a uid. The `<a data-uid="...*"></a>` overload-group anchors are not headings and
# so are not matched here; the trailing-`*` guard below is a second line of defence.
HEADING_WITH_UID = re.compile(r"<h[1-6][^>]*\sdata-uid=\"([^\"]+)\"[^>]*>", re.I)

# One rendered declaration. DocFX emits `lang-csharp hljs`; the suffix is allowed to vary.
CSHARP_BLOCK = re.compile(r"<code class=\"lang-csharp[^\"]*\">(.*?)</code>", re.DOTALL | re.I)

# Inline markup can appear inside a declaration block (cross-reference links on type names).
TAG = re.compile(r"<[^>]+>")


def normalize_declaration(raw: str) -> str:
    """Turn a raw declaration code block into a single comparable line.

    GUID markers are stripped here too, so a declaration mentioning a marked type stays comparable
    across builds — and matches the uid, which xrefmap.py strips the same way.
    """
    return strip_guid_markers(re.sub(r"\s+", " ", html.unescape(TAG.sub("", raw))).strip())


def parse_type_page(page_html: str) -> dict:
    """Map every ``data-uid`` on a DocFX type page to its C# declaration.

    Args:
        page_html (str): Full text of an ``api/<Type>.html`` page.

    Returns:
        dict: ``{uid: declaration}``. Includes the type's own uid (from its ``<h1>``). Uids with no
        declaration between their heading and the next are omitted rather than recorded as empty.
    """
    cleaned = ARCHETYPE_BLOCK.sub("", page_html)

    # Overload-group uids end in `*` and describe a set of overloads, not a signature.
    anchors = [
        (match.start(), strip_guid_markers(match.group(1)))
        for match in HEADING_WITH_UID.finditer(cleaned)
        if not match.group(1).endswith("*")
    ]
    if not anchors:
        return {}

    blocks = [(match.start(), match.group(1)) for match in CSHARP_BLOCK.finditer(cleaned)]
    if not blocks:
        return {}

    declarations = {}
    for index, (position, uid) in enumerate(anchors):
        # A declaration belongs to the nearest preceding heading, so bound the search at the next one.
        next_position = anchors[index + 1][0] if index + 1 < len(anchors) else len(cleaned)
        for block_position, block_text in blocks:
            if block_position < position:
                continue
            if block_position >= next_position:
                break
            # The first block in a section is the Declaration; later ones are Examples.
            declaration = normalize_declaration(block_text)
            if declaration:
                declarations[uid] = declaration
            break

    return declarations
