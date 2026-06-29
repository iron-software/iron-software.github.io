"""Inject an Archetype N overview block + meta + JSON-LD into a docfx HTML page.

Reads a sample markdown file (the kind in api-overview-seo/generative-task/) and:
  - Parses the "Injected overview (Markdown)" section, the 3 meta-title and
    meta-description variants, the TechArticle abstract, and the FAQPage entries.
  - Builds an HTML version of the overview and a JSON-LD <script> block
    (TechArticle + SoftwareSourceCode per code block + FAQPage).
  - Splices into the target docfx HTML:
      * <title> replaced
      * <meta name="title"> replaced
      * <meta name="description"> inserted (or replaced if present)
      * sentinel-wrapped overview block inserted between the type's Syntax block
        and the first member section (<h3 id="constructors|fields|properties|methods">)
      * <script type="application/ld+json"> block inserted before </head>
        (or replaced if a prior archetype-N script is present)
  - Idempotent: sentinel comments delimit our additions; reruns replace, not append.

Usage:
  python inject_archetype_n.py SAMPLE.md TARGET.html [--variant v3] [--dry-run]
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

sys.stdout.reconfigure(encoding="utf-8")

# ---------------------------------------------------------------------------
# Treatment derivation (auto from an optional type-confirmation dataset)
# ---------------------------------------------------------------------------
#
# REPO-AGNOSTIC: this script ships inside the OreFoundry plugin and operates on
# docfx HTML files in ANY repository (the product website repo, or a versioned
# snapshot in iron-software.github.io). It computes no repo-relative paths.
# The two location inputs are resolved in main() from CLI args:
#   --api-dir         the directory of sibling API reference HTML pages (used by
#                     the cross-class round-trip verifier, P2). Defaults to the
#                     target file's own directory, which is correct for docfx.
#   --confirmed-types optional type-confirmation dataset for auto-deriving the
#                     full/lite treatment. When absent, treatment falls back to
#                     --treatment/--sub-variant or the safe default.
# Both globals start as None and are set by main(); the validators read them.

CONFIRMED_TYPES_PATH: "Path | None" = None

# Per-variant constraint table from spec §4 / §5 / §12.
# code/link/faq use (min, max) or ("exact", n).
VARIANT_CONSTRAINTS = {
    ("full", "class"):     {"prose": (250, 500), "code": (1, 2), "links": (3, 5), "faq": (2, 4)},
    ("full", "interface"): {"prose": (250, 500), "code": (0, 1), "links": (3, 5), "faq": (2, 4)},
    # N-Mid (v1.2.4): thin-but-not-lite types — static classes, value-type structs,
    # and small classes/interfaces that draft naturally under the N-Full floor.
    # Keeps the task-led opener, structural-orientation FAQ, and code brevity; relaxes
    # the prose floor, link/FAQ counts, and (for interfaces) inherited-member triage.
    ("mid", "class"):      {"prose": (150, 250), "code": (0, 1), "links": (2, 3), "faq": (1, 2)},
    ("mid", "interface"):  {"prose": (150, 250), "code": (0, 1), "links": (2, 3), "faq": (1, 2)},
    ("lite", "enum"):      {"prose": (40, 90),   "code": (0, 1), "links": (0, 2), "faq": ("exact", 0)},
    ("lite", "exception"): {"prose": (40, 80),   "code": ("exact", 0), "links": (0, 1), "faq": ("exact", 0)},
    ("lite", "delegate"):  {"prose": (30, 60),   "code": ("exact", 0), "links": (0, 1), "faq": ("exact", 0)},
}


def load_confirmed_types() -> dict[str, dict]:
    """Read the optional type-confirmation dataset, keyed by URL. Returns {} when
    no dataset was supplied (treatment then comes from --treatment/--sub-variant)."""
    if CONFIRMED_TYPES_PATH is None or not CONFIRMED_TYPES_PATH.is_file():
        return {}
    data = json.loads(CONFIRMED_TYPES_PATH.read_text(encoding="utf-8"))
    return {r["url"]: r for r in data.get("rows", [])}


def derive_treatment(page_url: str, confirmed: dict[str, dict]) -> tuple[str, str]:
    """Return (treatment, sub_variant) for a given target URL.

    Treatment rule from spec §2.2:
        lite if is_enum_pattern OR is_exception OR type_kind == 'delegate'
        full otherwise (sub_variant becomes 'class' or 'interface')
    """
    row = confirmed.get(page_url)
    if row is None:
        return "full", "class"  # safe default for unknown URLs

    if row.get("is_exception"):
        return "lite", "exception"
    if row.get("type_kind") == "delegate":
        return "lite", "delegate"
    if row.get("is_enum_pattern") or row.get("type_kind") == "enum":
        return "lite", "enum"
    if row.get("type_kind") == "interface":
        return "full", "interface"
    return "full", "class"


# docfx renders the type's declaration in a Syntax code block, e.g.
#   public sealed class PdfPaperSize : Enum
#   public interface IFormField : IFormFieldObject, ...
#   public class IronPdfNativeException : Exception
#   public sealed class StringDelegate : MulticastDelegate
# The declaration is the authoritative treatment signal when no type-confirmation
# dataset is supplied (e.g. operating on an iron-software.github.io snapshot).
_DECL_RE = re.compile(
    r"public\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+)*"
    r"(class|interface|enum|struct|delegate)\s+[A-Za-z0-9_]+(?:&lt;[^&]*&gt;|<[^>]*>)?"
    r"(?:\s*:\s*([^<\n{]+))?"
)


def _count_declared_members(html_text: str) -> int:
    """Approximate the declared-member count from the docfx Syntax code spans:
    every member renders its own `lang-csharp` span; the first span is the type
    declaration. Used only as the N-Mid routing signal (a heuristic default that
    --treatment overrides), so a small over-count (stray example code) is safe —
    it nudges a borderline page toward N-Full, never silently toward N-Mid."""
    return max(0, len(re.findall(r'class="lang-csharp hljs">', html_text)) - 1)


# N-Mid auto-routing thresholds (v1.2.4). Member count is the primary signal so
# rich static classes (Printer 13 members, BarcodeReader 25) stay N-Full while
# License-shaped helpers and tiny interfaces drop to N-Mid. Value-type structs
# get a higher ceiling because their members are often overload-inflated.
_MID_MEMBER_MAX = 6
_MID_STRUCT_MEMBER_MAX = 12


def derive_treatment_from_html(html: str) -> "tuple[str, str] | None":
    """Derive (treatment, sub_variant) from the docfx declaration. Semantic, per
    spec §2.2: a type-safe enum declared `sealed class X : Enum` is lite/enum;
    a delegate docfx-rendered as `class X : MulticastDelegate` is lite/delegate.
    Full-eligible types route to N-Mid (v1.2.4) when thin by member count."""
    m = _DECL_RE.search(html)
    if not m:
        return None
    kind = m.group(1)
    bases = [b.strip().split(".")[-1] for b in (m.group(2) or "").split(",") if b.strip()]
    if kind == "interface":
        members = _count_declared_members(html)
        return ("mid" if members <= _MID_MEMBER_MAX else "full"), "interface"
    if kind == "delegate" or any(b in ("Delegate", "MulticastDelegate") for b in bases):
        return "lite", "delegate"
    if kind == "enum" or "Enum" in bases:
        return "lite", "enum"
    if any(b == "Exception" or b.endswith("Exception") for b in bases):
        return "lite", "exception"
    # class or struct (docfx renders a struct as `sealed class X : ValueType`)
    is_struct = (kind == "struct") or ("ValueType" in bases)
    members = _count_declared_members(html)
    ceiling = _MID_STRUCT_MEMBER_MAX if is_struct else _MID_MEMBER_MAX
    return ("mid" if members <= ceiling else "full"), "class"

# ---------------------------------------------------------------------------
# Sample-MD parser
# ---------------------------------------------------------------------------

def _split_top_sections(md: str) -> dict[str, str]:
    """Return a dict keyed by H2 heading text → section body (between `---` rulers)."""
    # Strip the leading HTML comment if present
    md = re.sub(r"\A<!--.*?-->\s*", "", md, count=1, flags=re.DOTALL)
    # Split on lines that are exactly `---`
    blocks = re.split(r"(?m)^---\s*$", md)
    sections: dict[str, str] = {}
    for block in blocks:
        m = re.match(r"\s*##\s+([^\n]+)\n(.*)", block, re.DOTALL)
        if m:
            sections[m.group(1).strip()] = m.group(2).strip()
    return sections


def _extract_overview(sections: dict[str, str]) -> str:
    """Find the overview body (Markdown). Tolerant of slight header drift."""
    for key, body in sections.items():
        if "Injected overview" in key:
            return body.strip()
    raise ValueError("Could not find 'Injected overview' section")


def _extract_meta_variants(body: str, label: str) -> list[str]:
    """Extract the three list items under a bold label like `**Meta-title (≤ 60 chars)**`.

    Variants are list items shaped: - v1 (algorithm): `...`
    Returns a list of the variant strings (without backticks).
    """
    # Find the bold label, then collect bullet lines until the next blank-then-non-bullet
    pat = re.compile(rf"\*\*{re.escape(label)}[^\*]*\*\*\s*\n((?:-[^\n]+\n?)+)")
    m = pat.search(body)
    if not m:
        raise ValueError(f"Could not find '{label}' block")
    variants = []
    for line in m.group(1).splitlines():
        # `- v1 (algorithm): \`some text\``
        lm = re.match(r"-\s*v\d+\s*\([^)]+\):\s*`(.+)`\s*$", line.strip())
        if lm:
            # Some sources wrap variants in DOUBLE-backtick code spans
            # (`` `text` ``); the greedy capture above then keeps stray inner
            # backticks/whitespace. Strip any whitespace+backtick run from both
            # ends so the meta value is clean plain text.
            val = re.sub(r"^[\s`]+|[\s`]+$", "", lm.group(1))
            if "`" in val:
                raise ValueError(
                    f"stray backtick inside '{label}' variant after cleanup: {val!r}"
                )
            variants.append(val)
    if not variants:
        raise ValueError(f"No variants parsed under '{label}'")
    return variants


def _extract_blockquote(body: str, label: str) -> str:
    """Pull the blockquote body under a bold label like `**TechArticle abstract**`."""
    # The final blockquote line may have no trailing newline (e.g. N-Lite
    # samples, where the abstract is the last section and the body is stripped),
    # so accept either a newline or end-of-string after each `>` line.
    pat = re.compile(
        rf"\*\*{re.escape(label)}\*\*[^\n]*\n+((?:>[^\n]*(?:\n|\Z))+)",
        re.MULTILINE,
    )
    m = pat.search(body)
    if not m:
        raise ValueError(f"Could not find blockquote for '{label}'")
    lines = [re.sub(r"^>\s?", "", ln) for ln in m.group(1).splitlines()]
    return " ".join(s.strip() for s in lines if s.strip())


def _extract_json_block(body: str, label: str) -> list[dict]:
    """Find a fenced ```json``` block under a labeled section."""
    pat = re.compile(rf"\*\*{re.escape(label)}\*\*[^\n]*\n+```json\s*\n(.*?)\n```", re.DOTALL)
    m = pat.search(body)
    if not m:
        raise ValueError(f"Could not find JSON block for '{label}'")
    return json.loads(m.group(1))


# ---------------------------------------------------------------------------
# Phase 5: forbidden-pattern scan (spec §7 + §12 HARD gate)
# ---------------------------------------------------------------------------

# Per spec §7, em dashes are forbidden. The U+2014 EM DASH and U+2015 HORIZONTAL
# BAR both render as a long horizontal stroke and read as em dashes. U+2013 EN
# DASH is allowed (it's used for numeric ranges like "120–160 chars").
EM_DASH_RE = re.compile(r"[—―]")

# First-person pronouns (word-boundary, case-insensitive).
# "I" alone is rare in technical reference; check it but be tolerant of
# proper-noun contexts is awkward, so we match standalone tokens.
FIRST_PERSON_RE = re.compile(
    r"\b(?:we|our|ours|us|i'm|i've|i'll|i'd|me|my|mine|myself)\b",
    re.IGNORECASE,
)
# Pronoun "I" gets its own word-boundary check because it's case-sensitive
# (lowercase "i" is unlikely; "I " or "I'" or "I." is the cue).
FIRST_PERSON_I_RE = re.compile(r"(?<![A-Za-z])I(?:'m|'ve|'ll|'d|\b)")

# "not X but Y" construction — a common AI-prose tic. Detect "not <up to 8 words> but ".
NOT_BUT_RE = re.compile(r"\bnot\s+(?:\S+\s+){0,8}?but\b", re.IGNORECASE)


def forbidden_scan(text: str, context_label: str) -> list[dict]:
    """Run the spec §12 forbidden-pattern scan against text. Returns findings."""
    findings: list[dict] = []
    for m in EM_DASH_RE.finditer(text):
        findings.append({
            "severity": "HARD",
            "pattern": "em-dash",
            "char": m.group(0),
            "context": _excerpt(text, m.start(), m.end()),
            "where": context_label,
        })
    for m in FIRST_PERSON_RE.finditer(text):
        findings.append({
            "severity": "WARN",
            "pattern": "first-person",
            "char": m.group(0),
            "context": _excerpt(text, m.start(), m.end()),
            "where": context_label,
        })
    for m in FIRST_PERSON_I_RE.finditer(text):
        findings.append({
            "severity": "WARN",
            "pattern": "first-person-I",
            "char": m.group(0),
            "context": _excerpt(text, m.start(), m.end()),
            "where": context_label,
        })
    for m in NOT_BUT_RE.finditer(text):
        findings.append({
            "severity": "WARN",
            "pattern": "not-X-but-Y",
            "char": m.group(0),
            "context": _excerpt(text, m.start(), m.end()),
            "where": context_label,
        })
    return findings


def _excerpt(text: str, start: int, end: int, radius: int = 50) -> str:
    a = max(0, start - radius)
    b = min(len(text), end + radius)
    return ("…" if a > 0 else "") + text[a:b].replace("\n", " ") + ("…" if b < len(text) else "")


# ---------------------------------------------------------------------------
# Phase 5.5: spec v1.2 P-adjustment validators
# ---------------------------------------------------------------------------
#
# Implements P2 (round-trip member-name verifier), P3 (mail-merge HTML
# encoding), P11 (generic-arity URL decoding), P12 (namespace-from-URL),
# P13 (misleading class-name semantic-clarity check), P14 (API casing
# preservation), P15 (parallel-hierarchy disambiguation), P16 (unverified-
# brief marker).
#
# Spec §6 rules 5–9 + §7 mail-merge rule + §6.5 S→P mapping.

# Directory of sibling API reference HTML pages, used by the cross-class
# round-trip verifier (P2). Set in main() from --api-dir (default: the target
# file's own directory). None until then.
API_DIR: "Path | None" = None

# Identifiers that look like a member name but are too generic to verify
# (would produce too many false positives).
_GENERIC_IDENTIFIERS = {
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
    "Add", "Push", "Pop", "Peek", "Dequeue", "Enqueue",
    "ForEach", "Skip", "Take",
}

# Misleading class-name tokens (P13).
_MISLEADING_NAME_TOKENS = (
    "ThreadLocal", "Persistent", "Shared", "Singleton",
    "Pool", "Cache",
)

# Mail-merge / template-syntax patterns that break the HTML detector if
# emitted into JSON-LD strings unescaped (P3). Each must be inside <code>...</code>
# OR HTML-encoded (&lt;&lt;...&gt;&gt;).
_TEMPLATE_SYNTAX_RES = (
    (re.compile(r"<<\s*[A-Za-z_]"),   "mail-merge <<fieldName>>"),
    (re.compile(r"<%[=#]?"),          "ASP <%= %> tag"),
    (re.compile(r"<#[A-Za-z_]"),      ".NET <#var#> directive"),
    (re.compile(r"\{\{\s*[A-Za-z_]"), "Mustache/Handlebars {{ }} (also caught by JSON)"),
)


def _generic_arity_from_url(target_url: str) -> int | None:
    """Decode generic-arity suffix from docfx URL.

    Returns the arity N if the URL has a `-N` or trailing-digit suffix on the
    class name (e.g. ChromeClient-1.html → 1, VirtualPaperLayoutManager1.html → 1).
    Returns None otherwise.
    """
    m = re.search(r"\.([A-Za-z_][A-Za-z0-9_]*?)(-?(\d+))\.html$", target_url)
    if m and m.group(3):
        return int(m.group(3))
    return None


def _namespace_from_url(target_url: str) -> str | None:
    """Extract the namespace (everything before the class name) from a docfx URL."""
    m = re.search(r"/api/(.+)\.([^./]+)\.html$", target_url)
    if not m:
        return None
    return m.group(1)


def _class_name_from_url(target_url: str, strip_arity: bool = True) -> str:
    """Extract the bare class name from a docfx URL, optionally stripping
    a docfx generic-arity suffix."""
    name = Path(target_url).stem.split(".")[-1]
    if strip_arity:
        name = re.sub(r"-?\d+$", "", name)
    return name


def _extract_declared_members(target_html: str) -> set[str]:
    """Return the set of member NAMES declared on a docfx page.

    Pulls from the h3 'fields'/'properties'/'methods'/'events'/'constructors'
    section anchors. Each member is rendered as `<h4 id="member-anchor">Name`
    on docfx pages. Constructor name == class name; we treat constructors as
    declared as well so prose mentioning the class-name as a callable is fine.
    """
    names: set[str] = set()
    # docfx renders each member as <h4 id="..."> Name (full name path) ...
    for m in re.finditer(r'<h4[^>]+id="([^"]+)"[^>]*>\s*([^<\s]+)', target_html):
        token = m.group(2).split("(")[0].split("[")[0]
        # docfx names like 'Foo.Bar.Baz' — keep just the last segment
        name = token.split(".")[-1]
        if name and re.match(r"^[A-Za-z_][A-Za-z0-9_]*$", name):
            names.add(name)
    return names


def _backticked_identifiers(text: str) -> list[tuple[str, int]]:
    """Return (identifier, position) pairs for backticked tokens that look like
    C# identifiers (class names, member names, method names). Drops generic
    tokens and obvious non-identifier content (URLs, types, primitives).
    """
    out: list[tuple[str, int]] = []
    for m in re.finditer(r"`([A-Za-z_][A-Za-z0-9_.<>]*?)(\(\))?`", text):
        ident = m.group(1)
        # Skip primitives, common types, generic English-word backticks
        if ident in {"int", "long", "short", "byte", "bool", "string", "char",
                     "float", "double", "decimal", "object", "void", "true",
                     "false", "null", "var", "new", "this", "base", "T"}:
            continue
        # Skip qualified type references that span > 4 dots (likely namespace path)
        if ident.count(".") > 3:
            continue
        out.append((ident, m.start()))
    return out


def _has_explicit_contract_semantics(prose: str) -> bool:
    """For P13: detect whether the prose includes an explicit-semantics phrase
    when the class name suggests opposite semantics."""
    cues = (
        r"\bone\s+(?:per|persistent)\b",
        r"\bsingle\s+(?:thread|instance|process)\b",
        r"\bprocess[\s-]?(?:wide|level)\b",
        r"\bnot\s+per[\s-]?thread\b",
        r"\bone\s+shared\b",
        r"\bshared\s+across\b",
        r"\bsingleton\b",
    )
    return any(re.search(c, prose, re.IGNORECASE) for c in cues)


def _check_template_syntax_escaping(text: str, context_label: str) -> list[dict]:
    """P3: flag mail-merge / template syntax not wrapped in <code>...</code>
    or entity-encoded. Scans FAQ/abstract content."""
    findings: list[dict] = []
    for pat, label in _TEMPLATE_SYNTAX_RES:
        for m in pat.finditer(text):
            # Look back to see if we're already inside <code>...</code>
            # (within ~60 chars before the hit). If yes, OK.
            head_start = max(0, m.start() - 60)
            context = text[head_start:m.start()]
            if "<code>" in context.lower() and "</code>" not in context.lower():
                continue
            # Also OK if the chars are already entity-encoded (e.g. &lt;&lt;).
            # The regex would not match those at all, so we know they're raw.
            findings.append({
                "severity": "HARD",
                "rule": "template-syntax-unescaped",
                "pattern": label,
                "where": context_label,
                "context": _excerpt(text, m.start(), m.end()),
            })
    return findings


def _check_generic_arity(parsed: dict, target_url: str, target_html: str = "") -> list[dict]:
    """P11: if URL encodes a generic class (Foo-1.html or Foo1.html), the
    prose must reconstruct the <T> form. Reject prose that names the class
    using the raw suffix as a bare class-name reference.

    Allowed contexts: prose that explicitly documents the slug (e.g. "the URL
    slug `Foo-1`") or URL strings (`Foo-1.html`). Disallowed: bare backticked
    use as the class name (`Foo-1` standing alone).

    A BARE trailing digit (no hyphen, e.g. LibTesseract5.html) is only treated
    as a generic-arity suffix when the page's docfx declaration is actually
    generic — otherwise the digit is part of the type name (LibTesseract5,
    Tesseract5, …) and naming the class verbatim is correct, not a violation.
    """
    arity = _generic_arity_from_url(target_url)
    if not arity:
        return []
    bare = _class_name_from_url(target_url, strip_arity=True)
    has_dash = bool(re.search(rf"-{arity}\.html$", target_url))
    if not has_dash and target_html:
        # Confirm the declaration is genuinely generic; docfx renders a generic
        # type's syntax block with the name immediately followed by `<` (HTML
        # escaped as &lt;). If not present, the trailing digit is part of the name.
        decl_generic = re.search(
            rf"class[^<\n]*?\b{re.escape(bare)}\d*\s*(?:&lt;|<)\s*[A-Za-z]",
            target_html)
        if not decl_generic:
            return []
    suffixed_raw = f"{bare}-{arity}"
    suffixed_no_dash = f"{bare}{arity}"
    findings: list[dict] = []
    body = parsed["overview_md"] + " " + parsed["abstract"]
    # Acceptable-context cues — if any of these appear within 60 chars of the
    # suffixed mention, treat it as documented context, not a bare reference.
    context_cues = re.compile(
        r"slug|URL|docfx|encodes|encoded|encoding|filename|data-uid|"
        r"reference page|\.html|\.cshtml|arity|suffix",
        re.IGNORECASE,
    )
    for variant in (suffixed_raw, suffixed_no_dash):
        for m in re.finditer(re.escape(variant), body):
            head = max(0, m.start() - 60)
            tail = min(len(body), m.end() + 12)
            window = body[head:tail]
            if context_cues.search(window):
                continue
            findings.append({
                "severity": "HARD",
                "rule": "generic-arity-suffix",
                "detail": f"prose names class as '{variant}' without slug/URL context; should be '{bare}<T>' or '{bare}'",
                "context": _excerpt(body, m.start(), m.end()),
            })
            # Only flag the first un-contextualized hit per variant.
            break
    # Confirm prose mentions <T> generic form somewhere — WARN if absent.
    if not re.search(rf"\b{re.escape(bare)}\s*&lt;|\b{re.escape(bare)}\s*<\s*[A-Z]|generic|`<T>`", body):
        findings.append({
            "severity": "WARN",
            "rule": "generic-arity-not-reconstructed",
            "detail": f"class '{bare}' has generic arity {arity} but prose does not name <T> form",
        })
    return findings


def _check_namespace_from_url(parsed: dict, target_url: str) -> list[dict]:
    """P12: when the prose asserts THIS class's namespace, that namespace must
    match the URL path. We only flag explicit assertions ('in the X namespace',
    'part of the X namespace', 'lives in the X namespace'), NOT cross-library
    type references like `IronSoftware.Drawing.Rectangle` used as a parameter
    type in an example.
    """
    url_ns = _namespace_from_url(target_url)
    if not url_ns:
        return []
    body = parsed["overview_md"] + " " + parsed["abstract"]

    # Only consider phrases that explicitly assert THIS class's namespace.
    assertion_patterns = [
        re.compile(r"(?:in|part of|lives in|belongs to)\s+the\s+`?([A-Z][A-Za-z0-9_.]+)`?\s+namespace", re.IGNORECASE),
        re.compile(r"namespace\s*:\s*`?([A-Z][A-Za-z0-9_.]+)`?", re.IGNORECASE),
    ]
    findings: list[dict] = []
    for pat in assertion_patterns:
        for m in pat.finditer(body):
            asserted = m.group(1).strip(".`")
            # Strip a trailing class-name segment if the assertion accidentally
            # includes it (e.g. "lives in the IronPdf.PdfDocument namespace").
            bare = _class_name_from_url(target_url, strip_arity=True)
            if asserted.endswith("." + bare):
                asserted = asserted[: -len("." + bare)]
            # Match if the asserted namespace is the URL ns or a proper prefix
            # of it (e.g. asserting `IronPdf` is fine for `IronPdf.Annotations`).
            if asserted == url_ns or url_ns.startswith(asserted + ".") or asserted.startswith(url_ns + "."):
                continue
            # Only flag if both look like real Iron* namespaces (cross-library
            # references to System.*, BCL, etc. are ignored).
            if not (asserted.startswith("IronPdf") or asserted.startswith("IronSoftware")):
                continue
            findings.append({
                "severity": "HARD",
                "rule": "namespace-mismatch",
                "detail": f"prose asserts namespace '{asserted}'; URL encodes '{url_ns}'",
            })
    return findings


def _check_api_casing(parsed: dict, target_html: str) -> list[dict]:
    """P14: identifiers in the sample's code blocks must match the casing of
    the declared members on the target page. Silent re-casing breaks user code."""
    findings: list[dict] = []
    declared = _extract_declared_members(target_html)
    if not declared:
        return findings
    declared_lower = {n.lower(): n for n in declared}

    # Scan code blocks only (casing is most consequential where users copy code).
    # CODE_FENCE_RE has two groups (lang, body) so findall returns tuples.
    for lang, block in CODE_FENCE_RE.findall(parsed["overview_md"]):
        # Pull identifiers that follow `instance.` or static `Class.` accesses.
        for m in re.finditer(r"\.([A-Za-z_][A-Za-z0-9_]*)\s*[(=;,.\[)]", block):
            ident = m.group(1)
            if ident in _GENERIC_IDENTIFIERS:
                continue
            lc = ident.lower()
            if lc in declared_lower and declared_lower[lc] != ident:
                findings.append({
                    "severity": "HARD",
                    "rule": "api-casing-mismatch",
                    "detail": f"code uses '{ident}'; declared on target as '{declared_lower[lc]}'",
                })
    return findings


def _check_misleading_class_name(parsed: dict, target_url: str) -> list[dict]:
    """P13: when class name contains a misleading token (ThreadLocal,
    Persistent, etc.), prose must include explicit-contract-semantics."""
    class_name = _class_name_from_url(target_url, strip_arity=True)
    triggered = [t for t in _MISLEADING_NAME_TOKENS if t in class_name]
    if not triggered:
        return []
    body = parsed["overview_md"]
    if _has_explicit_contract_semantics(body):
        return []
    return [{
        "severity": "WARN",
        "rule": "misleading-class-name",
        "detail": f"class name contains {triggered}; prose lacks an explicit-contract-semantics sentence",
    }]


def _check_brief_speculation_markers(parsed: dict) -> list[dict]:
    """P16: scan for # UNVERIFIED / TODO / SPECULATION markers in the
    sample. Their presence indicates the brief author flagged an
    unverified claim; emit a WARN so the verifier surfaces it."""
    findings: list[dict] = []
    body = parsed["overview_md"] + " " + parsed["abstract"]
    for pat in (r"#\s*UNVERIFIED", r"\bTODO\b", r"\bFIXME\b", r"\bSPECULATION\b"):
        for m in re.finditer(pat, body, re.IGNORECASE):
            findings.append({
                "severity": "WARN",
                "rule": "unverified-marker",
                "detail": f"unverified marker '{m.group(0)}' present in sample",
                "context": _excerpt(body, m.start(), m.end()),
            })
    return findings


_KNOWN_NAMESPACE_ROOTS = {"IronPdf", "IronSoftware", "System", "Microsoft", "Anthropic"}
# Common BCL types that appear in IronPDF samples but live outside object-reference/api/.
_BCL_TYPES = {
    "Task", "Stream", "FileStream", "MemoryStream", "Exception", "Object",
    "Enum", "Action", "Func", "Predicate", "Tuple", "ValueTuple",
    "Nullable",
    "List", "IList", "ICollection", "IEnumerable", "IReadOnlyCollection",
    "IReadOnlyList", "Dictionary", "IDictionary", "HashSet", "Queue", "Stack",
    "Bitmap", "Image", "Color", "Font", "Rectangle", "RectangleF", "Point",
    "PointF", "Size", "SizeF", "Graphics", "Encoding", "StringBuilder",
    "TimeSpan", "DateTime", "DateTimeOffset", "Guid", "Uri",
    "ObservableCollection", "INotifyPropertyChanged", "IDisposable", "IComparable",
    "AnyBitmap", "IPdfFontObject", "PrintDocument",  # close-Iron neighbours
}


def _looks_like_namespace_ref(ident: str) -> bool:
    """Return True if ident is purely a namespace reference (e.g. `IronPdf`,
    `IronSoftware.Forms`)."""
    if ident in _KNOWN_NAMESPACE_ROOTS:
        return True
    if "." in ident and ident.split(".")[0] in _KNOWN_NAMESPACE_ROOTS:
        # If EVERY segment starts with capital and there are no parens, it's
        # likely a namespace or fully-qualified class reference.
        return all(seg and seg[0].isupper() for seg in ident.split("."))
    return False


def _check_member_roundtrip(parsed: dict, target_html: str) -> list[dict]:
    """P2 (the highest-leverage adjustment per spec §17.5): every member name
    referenced in backticks in the SAMPLE must either be:
      - declared on the target docfx page, OR
      - a generic identifier (Add/Remove/Count/Value/...), OR
      - a class name reference (CamelCase token resolved on disk), OR
      - a namespace reference (IronPdf, IronSoftware, ...), OR
      - a BCL type (Task, Bitmap, IDisposable, ...).

    Tokens that look like member names but are not declared on the target page
    are flagged WARN — they may be members of a paired class (the agent's prose
    can name siblings), but in many cases they're invented or mis-named.
    """
    findings: list[dict] = []
    declared = _extract_declared_members(target_html)
    if not declared:
        return findings
    # Build the candidate set: backticked tokens in prose + abstract + FAQ.
    haystack = parsed["overview_md"] + " " + parsed["abstract"]
    for faq in parsed.get("faq", []):
        haystack += " " + faq.get("question", "") + " " + faq.get("answer", "")
    seen: set[str] = set()
    for ident, _pos in _backticked_identifiers(haystack):
        # Namespace / fully-qualified type reference — never a member check.
        if _looks_like_namespace_ref(ident):
            continue
        # Strip qualifier prefix `Foo.Bar` → `Bar` (we check the last segment).
        leaf = ident.split(".")[-1]
        # Strip arity markers like `<T>` if present
        leaf = re.sub(r"<[^>]+>", "", leaf)
        if not leaf or leaf in _GENERIC_IDENTIFIERS:
            continue
        # BCL or near-IronPDF stdlib type → not declared in api/ but valid.
        if leaf in _BCL_TYPES:
            continue
        if leaf in seen:
            continue
        seen.add(leaf)
        # Quick filter: is there a docfx HTML named after this leaf? If yes,
        # treat as class-name reference (not a missing-member case).
        if any(API_DIR.glob(f"*.{leaf}.html")):
            continue
        # Also check for generic-arity HTML files (e.g. ChromeClient → ChromeClient-1.html)
        if any(API_DIR.glob(f"*.{leaf}-?.html")) or any(API_DIR.glob(f"*.{leaf}?.html")):
            continue
        # Is the leaf declared on the target page?
        if leaf in declared:
            continue
        # Heuristic: member-name shapes typically have a capital first AND at
        # least one lowercase letter — i.e. CamelCase or PascalCase. Pure
        # uppercase tokens are likely constants we don't need to verify.
        if not re.match(r"^[A-Z][a-z]", leaf) and not re.match(r"^[A-Z][a-z]+[A-Z]", leaf):
            continue
        findings.append({
            "severity": "WARN",
            "rule": "member-roundtrip",
            "detail": f"identifier '{leaf}' referenced in sample but not declared on target page or in api/",
        })
    return findings


def v12_validators(parsed: dict, target_url: str, target_html: str) -> list[dict]:
    """Run all v1.2 P-adjustment validators. Returns combined findings list."""
    findings: list[dict] = []
    findings += _check_generic_arity(parsed, target_url, target_html)
    findings += _check_namespace_from_url(parsed, target_url)
    findings += _check_api_casing(parsed, target_html)
    findings += _check_misleading_class_name(parsed, target_url)
    findings += _check_brief_speculation_markers(parsed)
    findings += _check_member_roundtrip(parsed, target_html)
    # Mail-merge / template syntax in FAQ + abstract (NOT in code blocks of prose).
    findings += _check_template_syntax_escaping(parsed["abstract"], "TechArticle abstract")
    for i, faq in enumerate(parsed.get("faq", [])):
        findings += _check_template_syntax_escaping(faq.get("question", ""), f"FAQ[{i}].question")
        findings += _check_template_syntax_escaping(faq.get("answer", ""),   f"FAQ[{i}].answer")
    return findings


# ---------------------------------------------------------------------------
# Phase 5.6: spec v1.2.1 CTO-reframe validators (P17 + structural-orientation FAQ)
# ---------------------------------------------------------------------------
#
# v1.2.1 (§4.2 / §4.5 / §7 / §12): N-Full blocks must be task-led, not
# API-structural. Two HARD gates, N-Full only:
#   P17  no structural opener — the first sentence of the prose lead AND of the
#        TechArticle abstract must name what the developer accomplishes, not
#        what the type IS (namespace / base type / type-kind).
#   §4.5 structural-orientation FAQ — every N-Full page carries the
#        "Where does {Class} live in the IronPDF API?" entry naming the
#        namespace (and assembly / base type), so structural facts stay
#        addressable without opening the prose.

# Structural-opener shapes, matched against the FIRST SENTENCE only. Each is
# tuned to flag API-structural framing while passing the task-led leads in the
# v1.2.1 reference samples ("Use X when...", "X is the object you hold...",
# "X is what you receive when...").
_STRUCTURAL_OPENER_RES = (
    (re.compile(r"(?:\bis\b|belongs?|lives?|resides?|sits?|declared|defined|located)\s+"
                r"(?:in|part of|to)?\s*the\s+`?[A-Z][A-Za-z0-9_.]*`?\s+namespace", re.IGNORECASE),
     "names the namespace"),
    (re.compile(r"\b(?:derives?|inherits?|descends?)\s+from\b", re.IGNORECASE),
     "names the base type ('derives/inherits from')"),
    (re.compile(r"\bextends\s+(?:the\s+)?`?I?[A-Z]"),
     "names the base/parent type ('extends')"),
    (re.compile(r"\bimplements\s+(?:the\s+)?`?I?[A-Z]"),
     "names implemented interfaces ('implements')"),
    (re.compile(r"\bis\s+an?\s+(?:sealed\s+|abstract\s+|static\s+|public\s+|generic\s+)*"
                r"(?:class|interface|struct|type|enum(?:eration)?|delegate|exception|base\s+class)\b",
                re.IGNORECASE),
     "declares the type kind ('is a class/interface/...')"),
    (re.compile(r"\bis\s+the\s+`?[A-Z][A-Za-z0-9_.]*`?\s+"
                r"(?:class|interface|struct|type|enum(?:eration)?|delegate|exception)\b", re.IGNORECASE),
     "declares the type kind ('is the X class')"),
    (re.compile(r"^The\s+`?[A-Z][A-Za-z0-9_]*`?\s+"
                r"(?:class|interface|struct|type|enum(?:eration)?|delegate|exception)\b", re.IGNORECASE),
     "opens with 'The X class/interface...'"),
)


def _first_sentence(text: str) -> str:
    """Return the first sentence of text. Splits on a sentence terminator
    followed by whitespace or end-of-string; a period inside inline code or a
    decimal (no following space) does not split."""
    text = text.strip()
    m = re.search(r"[.!?](?:\s|$)", text)
    return text[: m.start() + 1] if m else text


def _check_structural_opener(parsed: dict) -> list[dict]:
    """P17 (§7; HARD on N-Full): the first sentence of the prose lead and of the
    TechArticle abstract must be task-led, not API-structural."""
    findings: list[dict] = []
    prose = CODE_FENCE_RE.sub("", parsed["overview_md"]).strip()
    targets = (
        (_first_sentence(prose), "prose lead"),
        (_first_sentence(parsed["abstract"].strip()), "TechArticle abstract"),
    )
    for text, where in targets:
        for pat, label in _STRUCTURAL_OPENER_RES:
            if pat.search(text):
                findings.append({
                    "severity": "HARD",
                    "rule": "structural-opener",
                    "detail": f"first sentence of {where} {label}; the lead must state the "
                              f"developer task, not what the type is (§7 / P17)",
                    "context": text[:160],
                })
                break  # one finding per location is enough
    return findings


# Structural-orientation FAQ: question asks where the class lives / which
# namespace, answer names a namespace.
_STRUCT_FAQ_Q_RE = re.compile(
    r"where\s+(?:does|is|do|can)\b.*\b(?:live|located|find|found|belong|defined|reside)|"
    r"which\s+namespace|what\s+namespace",
    re.IGNORECASE,
)
_NAMESPACE_RE = re.compile(r"\bnamespace\b", re.IGNORECASE)


def _check_structural_orientation_faq(parsed: dict) -> list[dict]:
    """§4.5 (HARD on N-Full): every N-Full page must carry one FAQ entry that
    answers where the class lives, naming the namespace."""
    for faq in parsed.get("faq", []):
        q = faq.get("question", "")
        a = faq.get("answer", "")
        if _NAMESPACE_RE.search(a) and (_STRUCT_FAQ_Q_RE.search(q) or _NAMESPACE_RE.search(q)):
            return []
    return [{
        "severity": "HARD",
        "rule": "structural-orientation-faq",
        "detail": "no structural-orientation FAQ entry found — N-Full requires a "
                  "'Where does {Class} live in the IronPDF API?' entry naming the namespace (§4.5)",
    }]


def v121_validators(parsed: dict, treatment: str, sub_variant: str) -> list[dict]:
    """Run the v1.2.1 CTO-reframe validators. N-Full and N-Mid; lite is unaffected."""
    if treatment not in ("full", "mid"):
        return []
    findings: list[dict] = []
    findings += _check_structural_opener(parsed)
    findings += _check_structural_orientation_faq(parsed)
    return findings


# ---------------------------------------------------------------------------
# v1.2.3 editorial-pass validators (P21 code brevity)
# ---------------------------------------------------------------------------

_CODE_FENCE_RE = re.compile(r"```(?:csharp|cs|c#)\s*\n(.*?)\n```", re.DOTALL | re.IGNORECASE)
_SCENARIO_RE = re.compile(r"^\s*//\s*\d+\s*\.", re.MULTILINE)


def _check_code_brevity(parsed: dict) -> list[dict]:
    """P21 (v1.2.3; N-Full): the code example must read at a glance for a
    developer hovering the type. HARD on multi-scenario blocks (the `// 1.`,
    `// 2.` pattern the content editor flagged) and on over-long examples;
    SOFT nudge above the comfortable single-scenario length."""
    findings: list[dict] = []
    for cm in _CODE_FENCE_RE.finditer(parsed.get("overview_md", "")):
        code = cm.group(1)
        loc = len([ln for ln in code.splitlines() if ln.strip()])
        scenarios = len(_SCENARIO_RE.findall(code))
        if scenarios >= 2:
            findings.append({
                "severity": "HARD", "rule": "code-brevity-multiscenario",
                "detail": f"code example has {scenarios} numbered scenarios; an N-Full "
                          "example must show ONE focused scenario so it reads on hover (P21)",
            })
        if loc > 24:
            findings.append({
                "severity": "HARD", "rule": "code-brevity-loc",
                "detail": f"code example is {loc} non-empty lines; the ceiling is 24 for a "
                          "single hover-friendly example (P21)",
            })
        elif loc > 14:
            findings.append({
                "severity": "SOFT", "rule": "code-brevity-loc",
                "detail": f"code example is {loc} non-empty lines; aim for <=12 and prefer "
                          "declaration-form `using` so the example reads at a glance (P21)",
            })
    return findings


def v123_validators(parsed: dict, treatment: str, sub_variant: str) -> list[dict]:
    """Run the v1.2.3 editorial-pass validators. N-Full and N-Mid."""
    if treatment not in ("full", "mid"):
        return []
    return _check_code_brevity(parsed)


def parse_sample(md_path: Path) -> dict:
    md = md_path.read_text(encoding="utf-8")
    sections = _split_top_sections(md)
    overview = _extract_overview(sections)

    meta_section = sections.get("Recommended metadata", "")
    schema_section = sections.get("Structured data", "")

    titles = _extract_meta_variants(meta_section, "Meta-title")
    descs  = _extract_meta_variants(meta_section, "Meta-description")
    abstract = _extract_blockquote(schema_section, "TechArticle abstract")
    # FAQ is OPTIONAL — lite variants omit it. Tolerate missing section.
    try:
        faq = _extract_json_block(schema_section, "FAQPage entries")
    except ValueError:
        faq = []

    return {
        "overview_md": overview,
        "titles": titles,
        "descriptions": descs,
        "abstract": abstract,
        "faq": faq,
    }


# ---------------------------------------------------------------------------
# Per-variant constraint validation (spec §12 HARD gates)
# ---------------------------------------------------------------------------

# Internal funnel links point to any Iron-family domain (ironpdf.com,
# ironprint.com, ironsoftware.com, ...) so the count is product-agnostic.
INTERNAL_LINK_RE = re.compile(r"\[[^\]]+\]\(https?://[a-z0-9.-]*iron[a-z0-9]*\.com/", re.IGNORECASE)


def _count_prose_words(md: str) -> int:
    """Count prose words.

    Spec §3: 'Word budgets exclude code'. Per the canonical reading we strip
    fenced (```code```) blocks but KEEP the contents of inline `backtick` spans
    — those are identifiers written as part of the prose ('the `HtmlFragment`
    property') and read as words to the reader.
    """
    prose = CODE_FENCE_RE.sub("", md)
    # Strip only the backticks of inline code, not the contents
    prose = INLINE_CODE_RE.sub(lambda m: m.group(1), prose)
    # Tokenize on whitespace; drop punctuation-only tokens
    tokens = re.findall(r"[A-Za-z0-9'/-]+", prose)
    return len(tokens)


def _count_code_blocks(md: str) -> int:
    return len(CODE_FENCE_RE.findall(md))


def _count_internal_links(md: str) -> int:
    return len(INTERNAL_LINK_RE.findall(md))


def _check_range(value: int, spec: tuple, label: str) -> str | None:
    """Return an error message string if out of range, else None."""
    if spec[0] == "exact":
        if value != spec[1]:
            return f"{label}: {value} (required exact {spec[1]})"
        return None
    lo, hi = spec
    if value < lo or value > hi:
        return f"{label}: {value} (required {lo}-{hi})"
    return None


def validate_constraints(parsed: dict, treatment: str, sub_variant: str) -> list[dict]:
    """Run spec §12 hard gates per variant. Returns list of findings."""
    key = (treatment, sub_variant)
    spec = VARIANT_CONSTRAINTS.get(key)
    if spec is None:
        return [{"severity": "HARD", "rule": "unknown-variant",
                 "detail": f"no constraint table for {treatment}/{sub_variant}"}]

    findings: list[dict] = []
    md = parsed["overview_md"]
    n_words = _count_prose_words(md)
    n_code  = _count_code_blocks(md)
    n_links = _count_internal_links(md)
    n_faq   = len(parsed["faq"])

    for value, gate_spec, label in (
        (n_words, spec["prose"], "prose-words"),
        (n_code,  spec["code"],  "code-blocks"),
        (n_faq,   spec["faq"],   "faq-entries"),
    ):
        err = _check_range(value, gate_spec, label)
        if err:
            findings.append({"severity": "HARD", "rule": label, "detail": err})

    # Internal-link count is SOFT (warn) per spec §12.
    err = _check_range(n_links, spec["links"], "internal-links")
    if err:
        findings.append({"severity": "WARN", "rule": "internal-links", "detail": err})

    # Block must contain zero <h1> elements (idempotency: re-run shouldn't add one).
    if re.search(r"^#\s", md, re.MULTILINE):
        findings.append({"severity": "HARD", "rule": "h1-count",
                         "detail": "overview MD contains an H1 (# heading)"})

    return findings


# ---------------------------------------------------------------------------
# Markdown → HTML for the overview block
# ---------------------------------------------------------------------------

INLINE_CODE_RE = re.compile(r"`([^`\n]+)`")
LINK_RE        = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")
CODE_FENCE_RE  = re.compile(r"```(\w*)\n(.*?)\n```", re.DOTALL)


def _html_escape(s: str) -> str:
    return (s.replace("&", "&amp;")
             .replace("<", "&lt;")
             .replace(">", "&gt;")
             .replace('"', "&quot;"))


def _convert_inlines(text: str) -> str:
    """Convert inline `code` and [text](url) to HTML, with HTML-escape."""
    # Tokenize: walk through and replace inline-code first (so their contents
    # are escaped but not processed as links), then links, then text.
    out = []
    i = 0
    while i < len(text):
        m_code = INLINE_CODE_RE.search(text, i)
        m_link = LINK_RE.search(text, i)
        # pick the earliest match
        next_match = None
        for m in (m_code, m_link):
            if m and (next_match is None or m.start() < next_match.start()):
                next_match = m
        if next_match is None:
            out.append(_html_escape(text[i:]))
            break
        # text before the match
        out.append(_html_escape(text[i:next_match.start()]))
        if next_match is m_code:
            out.append(f"<code>{_html_escape(m_code.group(1))}</code>")
        else:
            label = _convert_inlines(m_link.group(1))  # nested inlines in link text
            url = m_link.group(2)
            out.append(f'<a href="{_html_escape(url)}">{label}</a>')
        i = next_match.end()
    return "".join(out)


def md_overview_to_html(md: str) -> tuple[str, list[str]]:
    """Return (html_body, code_blocks) — html for prose, code_blocks list as raw strings."""
    parts: list[str] = []
    code_blocks: list[str] = []

    # Walk the markdown, splitting on code fences
    pos = 0
    for m in CODE_FENCE_RE.finditer(md):
        prose = md[pos:m.start()].strip()
        if prose:
            parts.append(_prose_to_html(prose))
        lang = m.group(1) or "csharp"
        code = m.group(2)
        code_blocks.append(code)
        parts.append(
            f'<div class="codewrapper"><pre><code class="lang-{_html_escape(lang)} hljs">'
            f"{_html_escape(code)}</code></pre></div>"
        )
        pos = m.end()
    trailing = md[pos:].strip()
    if trailing:
        parts.append(_prose_to_html(trailing))
    return "\n".join(parts), code_blocks


def _prose_to_html(prose: str) -> str:
    """Split into paragraphs and convert inlines."""
    paras = re.split(r"\n\s*\n", prose)
    out = []
    for p in paras:
        p = p.strip()
        if not p:
            continue
        # Collapse internal newlines to single spaces
        p = re.sub(r"\s*\n\s*", " ", p)
        out.append(f"<p>{_convert_inlines(p)}</p>")
    return "\n".join(out)


# ---------------------------------------------------------------------------
# JSON-LD builder
# ---------------------------------------------------------------------------

def build_jsonld(class_name: str, page_url: str, title: str, description: str,
                 abstract: str, faq: list[dict], code_blocks: list[str],
                 sub_variant: str,
                 product_name: str = "IronPDF",
                 product_url: str = "https://ironpdf.com/") -> str:
    """Build a JSON-LD document. TechArticle always; SSC if code; FAQPage if faq.

    product_name / product_url parameterize the structured data for the product
    the page belongs to (IronPDF, IronPrint, ...) instead of hard-coding IronPDF;
    defaults preserve the original IronPDF behavior.

    sub_variant labels the article's name (Class / Interface / Enumeration /
    Exception / Delegate) instead of hard-coding 'class'.
    """
    name_label = {
        "class": "class", "interface": "interface",
        "enum": "enumeration", "exception": "exception", "delegate": "delegate",
    }.get(sub_variant, "class")
    article = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": title,
        "name": f"{class_name} {name_label} | {product_name} C# API",
        "url": page_url,
        "abstract": abstract,
        "description": description,
        "inLanguage": "en-US",
        "isPartOf": {
            "@type": "WebSite",
            "name": product_name,
            "url": product_url,
        },
    }
    if code_blocks:
        article["hasPart"] = [
            {
                "@type": "SoftwareSourceCode",
                "programmingLanguage": "C#",
                "codeSampleType": "code snippet",
                "text": code.strip(),
            }
            for code in code_blocks
        ]
    docs: list[dict] = [article]
    if faq:
        docs.append({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": q.get("question", ""),
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": q.get("answer", ""),
                    },
                }
                for q in faq
            ],
        })
    return json.dumps(docs if len(docs) > 1 else docs[0], indent=2, ensure_ascii=False)


# ---------------------------------------------------------------------------
# Product identity (repo/product-agnostic structured data)
# ---------------------------------------------------------------------------

# Canonical display casing keyed by the lower-cased product slug (the
# object-reference/<slug>/ directory name) AND by the namespace root as docfx
# casts it in filenames. Lets a page in any product's api/ dir self-identify.
CANONICAL_PRODUCT_NAMES = {
    "ironpdf": "IronPDF",        "ironprint": "IronPrint",
    "ironxl": "IronXL",          "ironocr": "IronOCR",
    "ironbarcode": "IronBarcode", "ironqr": "IronQR",
    "ironword": "IronWord",      "ironppt": "IronPPT",
    "ironzip": "IronZip",        "ironwebscraper": "IronWebScraper",
    "irondrawing": "IronDrawing",
    # namespace-root spellings as they appear in docfx filenames
    "ironpdf_ns": "IronPDF",
}
# Namespace roots that are shared infrastructure, not a product identity.
_SHARED_NS_ROOTS = {"IronSoftware", "System", "Microsoft", "Anthropic", "Org"}


def _derive_product_name(target_path: Path, base_url: str, explicit: str | None) -> str:
    """Resolve the product display name. Precedence: explicit flag >
    object-reference/<slug>/ path segment > iron<x>.com base-url host >
    filename namespace root > 'IronPDF' (preserves legacy default)."""
    if explicit:
        return explicit
    parts = [p.lower() for p in target_path.resolve().parts]
    if "object-reference" in parts:
        i = parts.index("object-reference")
        if i + 1 < len(parts):
            slug = parts[i + 1]
            if slug in CANONICAL_PRODUCT_NAMES:
                return CANONICAL_PRODUCT_NAMES[slug]
    m = re.search(r"https?://(?:www\.)?(iron[a-z0-9]+)\.com", base_url, re.IGNORECASE)
    if m:
        slug = m.group(1).lower()
        if slug in CANONICAL_PRODUCT_NAMES:
            return CANONICAL_PRODUCT_NAMES[slug]
    root = target_path.stem.split(".")[0]
    if root and root not in _SHARED_NS_ROOTS:
        return CANONICAL_PRODUCT_NAMES.get(root.lower(), root)
    return "IronPDF"


def _derive_product_url(base_url: str, explicit: str | None) -> str:
    """isPartOf website URL: explicit flag > scheme://host/ of base-url."""
    if explicit:
        return explicit.rstrip("/") + "/"
    m = re.match(r"(https?://[^/]+)/?", base_url)
    return (m.group(1) + "/") if m else "https://ironpdf.com/"


# ---------------------------------------------------------------------------
# HTML splicing
# ---------------------------------------------------------------------------

SENTINEL_START_RE = re.compile(r"<!--\s*archetype-N:start[^>]*-->.*?<!--\s*archetype-N:end\s*-->\s*",
                               re.DOTALL)
# Class-level Remarks: <h5 id="..._remarks"...>...</h5> + <div class="markdown level0 remarks">...</div>
# (we identify the class-level pair by its position between the Syntax block and the
# first member-h3 — see strip_class_level_blocks below)
SYNTAX_CODEWRAPPER_END_RE = re.compile(
    r'(<h5 id="[^"]*_syntax"[^>]*>[^<]*</h5>\s*<div class="codewrapper">\s*<pre><code[^>]*>[^<]*</code></pre>\s*</div>)'
)
CLASS_REMARKS_H5_RE = re.compile(r'<h5 id="[^"]*_remarks"[^>]*>.*?</h5>\s*', re.DOTALL)
CLASS_REMARKS_DIV_RE = re.compile(r'<div class="markdown level0 remarks"[^>]*>.*?</div>\s*', re.DOTALL)
CLASS_EXAMPLES_H5_RE = re.compile(r'<h5 id="[^"]*_examples"[^>]*>.*?</h5>\s*', re.DOTALL)
# The Examples body is a bare <pre><code>...</code></pre> (no wrapper div, unlike Remarks)
CLASS_EXAMPLES_PRE_RE = re.compile(r'<pre><code[^>]*>.*?</code></pre>\s*', re.DOTALL)
LDJSON_RE = re.compile(
    # Match the script tag regardless of any extra attributes that came after
    # data-archetype-n="1" (data-treatment, data-sub-variant, …). Earlier
    # versions wrote the tag without those, so we have to tolerate both shapes
    # to stay idempotent across format upgrades.
    r'\s*<script type="application/ld\+json" data-archetype-n="1"[^>]*>.*?</script>\s*',
    re.DOTALL,
)
ALT_META_BLOCK_RE = re.compile(
    r'\s*<!-- archetype-N alt meta variants -->.*?<!-- /archetype-N alt meta variants -->\s*',
    re.DOTALL,
)
MEMBER_H3_RE = re.compile(
    r'(<h3 id="(?:constructors|fields|properties|methods)")'
)
# Fallback insertion anchors for pages whose docfx output has no member h3:
#  - Interfaces with all-inherited members render <h3>Inherited members</h3> (no id)
#  - Truly empty pages have nothing between syntax and </article>
INHERITED_FALLBACK_RE = re.compile(r'(<div class="inheritance">\s*<h3>Inherited members</h3>)')
ARTICLE_CLOSE_RE = re.compile(r'(</article>)')
TITLE_RE = re.compile(r"<title>.*?</title>", re.DOTALL)
META_TITLE_RE = re.compile(r'<meta name="title" content=".*?">', re.DOTALL)
META_DESC_RE = re.compile(r'<meta name="description" content=".*?">', re.DOTALL)
HEAD_END_RE = re.compile(r"</head>")


def strip_class_level_blocks(html: str) -> tuple[str, dict]:
    """Remove class-level Remarks and Examples blocks that sit between the Syntax
    codewrapper and the first member <h3>. Returns (modified_html, counts).

    Only one of each is expected per page at the class level. Per-member Remarks
    (anchored at id="..._<MemberName>_remarks") sit AFTER the first member-h3
    and are untouched.
    """
    counts = {"remarks_h5": 0, "remarks_div": 0, "examples_h5": 0, "examples_pre": 0}

    # Find the region: from end of Syntax codewrapper to start of first member-h3
    syntax_m = SYNTAX_CODEWRAPPER_END_RE.search(html)
    member_m = MEMBER_H3_RE.search(html)
    if not syntax_m or not member_m:
        return html, counts
    region_start = syntax_m.end()
    region_end = member_m.start()
    if region_end <= region_start:
        return html, counts

    head = html[:region_start]
    region = html[region_start:region_end]
    tail = html[region_end:]

    # Strip in order: h5+div for remarks, h5+pre for examples. The H5 header is
    # always immediately followed by its body (with optional whitespace).
    new_region, n1 = CLASS_REMARKS_H5_RE.subn("", region, count=1)
    counts["remarks_h5"] = n1
    if n1:
        new_region, n2 = CLASS_REMARKS_DIV_RE.subn("", new_region, count=1)
        counts["remarks_div"] = n2

    new_region, n3 = CLASS_EXAMPLES_H5_RE.subn("", new_region, count=1)
    counts["examples_h5"] = n3
    if n3:
        new_region, n4 = CLASS_EXAMPLES_PRE_RE.subn("", new_region, count=1)
        counts["examples_pre"] = n4

    return head + new_region + tail, counts


def inject(target_html: str, class_name: str, page_url: str,
           overview_html: str, title: str, description: str,
           alt_titles: list[str], alt_descriptions: list[str],
           jsonld: str, treatment: str, sub_variant: str,
           strip_class_blocks: bool = True) -> tuple[str, dict]:
    """Apply all the edits, idempotently. Returns (html, stats)."""
    out = target_html
    stats: dict = {}

    # 1. Remove any prior injections (idempotency)
    out = SENTINEL_START_RE.sub("", out)
    out = LDJSON_RE.sub("\n  ", out)
    out = ALT_META_BLOCK_RE.sub("\n  ", out)

    # 1b. Strip class-level Remarks / Examples (between Syntax and first member-h3)
    if strip_class_blocks:
        out, strip_counts = strip_class_level_blocks(out)
        stats["stripped"] = strip_counts
    else:
        stats["stripped"] = {"remarks_h5": 0, "remarks_div": 0, "examples_h5": 0, "examples_pre": 0}

    # 2. <title>
    new_title_tag = f"<title>{_html_escape(title)}</title>"
    if TITLE_RE.search(out):
        out = TITLE_RE.sub(lambda m, t=new_title_tag: t, out, count=1)
    # 3. <meta name="title">
    new_meta_title = f'<meta name="title" content="{_html_escape(title)}">'
    if META_TITLE_RE.search(out):
        out = META_TITLE_RE.sub(lambda m, t=new_meta_title: t, out, count=1)

    # 4. <meta name="description"> — add if missing, replace if present
    new_meta_desc = f'<meta name="description" content="{_html_escape(description)}">'
    if META_DESC_RE.search(out):
        out = META_DESC_RE.sub(lambda m, t=new_meta_desc: t, out, count=1)
    else:
        # Insert after the meta name="title"
        out = META_TITLE_RE.sub(
            lambda m: m.group(0) + "\n    " + new_meta_desc, out, count=1
        )

    # 5. Alternate meta variants comment block (recorded above the active tags)
    alt_block = (
        "<!-- archetype-N alt meta variants -->\n"
        "    <!--\n"
        "      v1 (algorithm) title:       " + alt_titles[0] + "\n"
        "      v2 (human)     title:       " + alt_titles[1] + "\n"
        "      v1 (algorithm) description: " + alt_descriptions[0] + "\n"
        "      v2 (human)     description: " + alt_descriptions[1] + "\n"
        "    -->\n"
        "    <!-- /archetype-N alt meta variants -->"
    )
    # Insert ABOVE the <title>
    out = TITLE_RE.sub(lambda m: alt_block + "\n    " + m.group(0), out, count=1)

    # 6. JSON-LD before </head>
    ldjson_block = (
        f'<script type="application/ld+json" data-archetype-n="1" '
        f'data-treatment="{treatment}" data-sub-variant="{sub_variant}">\n'
        + jsonld
        + "\n    </script>"
    )
    # Use a lambda — a string replacement would have re.sub re-interpret backslash
    # escapes inside the JSON (e.g. \n inside a code string would become a newline,
    # breaking the JSON). The lambda return value is used verbatim.
    head_replacement = "    " + ldjson_block + "\n  </head>"
    out = HEAD_END_RE.sub(lambda m, r=head_replacement: r, out, count=1)

    # 7. Overview body block between the syntax codewrapper and the first member <h3>
    sentinel_open = f"<!-- archetype-N:start {class_name} treatment={treatment} sub_variant={sub_variant} -->"
    sentinel_close = "<!-- archetype-N:end -->"
    overview_block = (
        f"  {sentinel_open}\n"
        f'  <div class="archetype-n-overview" data-treatment="{treatment}" data-sub-variant="{sub_variant}">\n'
        f"{overview_html}\n"
        f"  </div>\n"
        f"  {sentinel_close}\n"
        f"  "
    )
    mm = MEMBER_H3_RE.search(out)
    if not mm:
        # Interfaces with all-inherited members: <h3>Inherited members</h3> (no id)
        mm = INHERITED_FALLBACK_RE.search(out)
        if mm:
            stats["fallback_anchor"] = "inherited_h3"
    if not mm:
        # Truly empty page — insert right before </article>
        mm = ARTICLE_CLOSE_RE.search(out)
        if mm:
            stats["fallback_anchor"] = "article_close"
    if not mm:
        raise RuntimeError(f"Could not find any insertion anchor in {class_name} page")
    out = out[: mm.start()] + overview_block + out[mm.start():]

    return out, stats


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("sample", help="path to sample MD file")
    ap.add_argument("target", help="path to target HTML file")
    ap.add_argument("--variant", default="v3", choices=("v1", "v2", "v3"),
                    help="which meta-title/description variant to inject as active")
    ap.add_argument("--treatment", choices=("full", "mid", "lite"), default=None,
                    help="override auto-derived treatment (full|lite)")
    ap.add_argument("--sub-variant", choices=("class", "interface", "enum", "exception", "delegate"),
                    default=None, help="override auto-derived sub-variant")
    ap.add_argument("--keep-class-blocks", action="store_true",
                    help="keep the class-level Remarks/Examples docfx blocks (default strips them)")
    ap.add_argument("--skip-phase5", action="store_true",
                    help="bypass the Phase 5 forbidden-pattern HARD gate (em dash + first-person + not-X-but-Y)")
    ap.add_argument("--skip-constraints", action="store_true",
                    help="bypass the per-variant constraint HARD gates (word/code/faq counts)")
    ap.add_argument("--skip-v12-checks", action="store_true",
                    help="bypass the v1.2 P-adjustment validators (round-trip / casing / "
                         "namespace / generic-arity / template-syntax)")
    ap.add_argument("--skip-v123-checks", action="store_true",
                    help="skip the v1.2.3 editorial-pass HARD gates (P21 code brevity)")
    ap.add_argument("--skip-v121-checks", action="store_true",
                    help="bypass the v1.2.1 CTO-reframe validators (structural opener + "
                         "structural-orientation FAQ; N-Full only)")
    # Repo-agnostic location inputs (the plugin runs this against any repo).
    ap.add_argument("--api-dir", default=None,
                    help="directory of sibling API reference HTML pages, used by the "
                         "cross-class round-trip verifier (default: the target file's directory)")
    ap.add_argument("--confirmed-types", default=None,
                    help="optional type-confirmation JSON for auto-deriving full/lite treatment; "
                         "omit and use --treatment/--sub-variant when unavailable")
    ap.add_argument("--base-url", default="https://ironpdf.com/object-reference/api/",
                    help="URL prefix the target filename is appended to for the page URL "
                         "(e.g. https://ironsoftware.com/csharp/pdf/object-reference/api/)")
    ap.add_argument("--product", default=None,
                    help="product display name for JSON-LD (e.g. IronPrint); "
                         "auto-derived from the object-reference/<slug>/ path or base-url host if omitted")
    ap.add_argument("--product-url", default=None,
                    help="product website URL for JSON-LD isPartOf (e.g. https://ironsoftware.com/csharp/print/); "
                         "defaults to the scheme://host of --base-url")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    sample_p = Path(args.sample)
    target_p = Path(args.target)
    if not sample_p.is_file():
        sys.exit(f"Sample not found: {sample_p}")
    if not target_p.is_file():
        sys.exit(f"Target not found: {target_p}")

    # Resolve the repo-agnostic globals the validators read.
    global API_DIR, CONFIRMED_TYPES_PATH
    API_DIR = Path(args.api_dir) if args.api_dir else target_p.resolve().parent
    CONFIRMED_TYPES_PATH = Path(args.confirmed_types) if args.confirmed_types else None

    parsed = parse_sample(sample_p)
    idx = {"v1": 0, "v2": 1, "v3": 2}[args.variant]

    # Derive class name from filename
    class_name = target_p.stem.split(".")[-1]
    # If interface (starts with I + capital), keep as is
    page_url = args.base_url.rstrip("/") + "/" + target_p.name

    # Product identity for structured data (parameterized, not IronPDF-hardcoded).
    product_name = _derive_product_name(target_p, args.base_url, args.product)
    product_url  = _derive_product_url(args.base_url, args.product_url)
    # The page's own namespace root is a valid namespace reference for the
    # round-trip verifier (e.g. `IronPrint` on an IronPrint page).
    _ns_root = target_p.stem.split(".")[0]
    if _ns_root and _ns_root[0].isupper():
        _KNOWN_NAMESPACE_ROOTS.add(_ns_root)

    # Treatment + sub-variant: CLI override > confirmed-types dataset > docfx
    # declaration (self-sufficient fallback) > safe default.
    confirmed = load_confirmed_types()
    if page_url in confirmed:
        auto_treatment, auto_sub = derive_treatment(page_url, confirmed)
    else:
        html_derived = derive_treatment_from_html(target_p.read_text(encoding="utf-8"))
        auto_treatment, auto_sub = html_derived if html_derived else ("full", "class")
    treatment   = args.treatment   or auto_treatment
    sub_variant = args.sub_variant or auto_sub

    title = parsed["titles"][idx]
    description = parsed["descriptions"][idx]
    alt_titles = parsed["titles"]
    alt_descriptions = parsed["descriptions"]

    # Per-variant constraint validation (HARD/SOFT per spec §12)
    constraint_findings = validate_constraints(parsed, treatment, sub_variant)
    if constraint_findings:
        print(f"Variant constraints ({treatment}/{sub_variant}):")
        for f in constraint_findings:
            print(f"  [{f['severity']}] {f['rule']:15s} {f['detail']}")
    hard_constraints = [f for f in constraint_findings if f["severity"] == "HARD"]
    if hard_constraints and not args.skip_constraints:
        print(f"\nHARD constraint gate failed: {len(hard_constraints)} rule(s). "
              "Fix the sample or rerun with --skip-constraints.")
        sys.exit(3)

    # Phase 5 forbidden-pattern scan — runs against the prose only.
    # Code blocks (inside ``` fences) are excluded because identifiers like
    # `i--` or `<<X>>` could otherwise produce false positives. We strip the
    # fenced blocks then scan the remainder.
    overview_prose = CODE_FENCE_RE.sub("", parsed["overview_md"])
    findings = forbidden_scan(overview_prose, "overview prose")
    findings += forbidden_scan(parsed["abstract"], "TechArticle abstract")
    for i, faq in enumerate(parsed["faq"]):
        findings += forbidden_scan(faq.get("question", ""), f"FAQ[{i}].question")
        findings += forbidden_scan(faq.get("answer", ""),   f"FAQ[{i}].answer")

    hard = [f for f in findings if f["severity"] == "HARD"]
    warn = [f for f in findings if f["severity"] == "WARN"]

    if findings:
        print("Forbidden-pattern scan findings:")
        for f in findings:
            print(f"  [{f['severity']}] {f['pattern']:15s} in {f['where']}: ...{f['context']}...")
    if hard and not args.skip_phase5:
        print(f"\nHARD gate failed: {len(hard)} forbidden pattern(s). "
              "Fix the source MD or rerun with --skip-phase5.")
        sys.exit(2)

    # Phase 5.5 — v1.2 P-adjustment validators (spec §6 rules 5-9 + §7 mail-merge)
    target_html_text = target_p.read_text(encoding="utf-8")
    v12_findings = v12_validators(parsed, page_url, target_html_text)
    v12_hard = [f for f in v12_findings if f["severity"] == "HARD"]
    v12_warn = [f for f in v12_findings if f["severity"] == "WARN"]
    if v12_findings:
        print("v1.2 P-adjustment findings:")
        for f in v12_findings:
            extra = f.get("context", f.get("detail", ""))
            print(f"  [{f['severity']}] {f['rule']:24s} {extra}")
    if v12_hard and not args.skip_v12_checks:
        print(f"\nHARD v1.2 gate failed: {len(v12_hard)} P-adjustment violation(s). "
              "Fix the source MD or rerun with --skip-v12-checks.")
        sys.exit(4)

    # Phase 5.6 — v1.2.1 CTO-reframe validators (P17 structural-opener +
    # structural-orientation FAQ; N-Full only, spec §4.2 / §4.5 / §7 / §12).
    v121_findings = v121_validators(parsed, treatment, sub_variant)
    v121_hard = [f for f in v121_findings if f["severity"] == "HARD"]
    if v121_findings:
        print("v1.2.1 reframe findings:")
        for f in v121_findings:
            print(f"  [{f['severity']}] {f['rule']:26s} {f.get('detail', '')}")
    if v121_hard and not args.skip_v121_checks:
        print(f"\nHARD v1.2.1 gate failed: {len(v121_hard)} reframe violation(s). "
              "Fix the source MD or rerun with --skip-v121-checks.")
        sys.exit(5)

    # Phase 5.7 — v1.2.3 editorial-pass validators (P21 code brevity; N-Full).
    v123_findings = v123_validators(parsed, treatment, sub_variant)
    v123_hard = [f for f in v123_findings if f["severity"] == "HARD"]
    if v123_findings:
        print("v1.2.3 editorial-pass findings:")
        for f in v123_findings:
            print(f"  [{f['severity']}] {f['rule']:26s} {f.get('detail', '')}")
    if v123_hard and not args.skip_v123_checks:
        print(f"\nHARD v1.2.3 gate failed: {len(v123_hard)} code-brevity violation(s). "
              "Fix the source MD or rerun with --skip-v123-checks.")
        sys.exit(6)

    overview_html, code_blocks = md_overview_to_html(parsed["overview_md"])
    jsonld = build_jsonld(class_name, page_url, title, description,
                          parsed["abstract"], parsed["faq"], code_blocks,
                          sub_variant, product_name, product_url)

    original = target_p.read_text(encoding="utf-8")
    spliced, stats = inject(
        original, class_name, page_url, overview_html,
        title, description, alt_titles, alt_descriptions, jsonld,
        treatment, sub_variant,
        strip_class_blocks=not args.keep_class_blocks,
    )

    print(f"Sample:      {sample_p}")
    print(f"Target:      {target_p}")
    print(f"Class:       {class_name}")
    print(f"Product:     {product_name} ({product_url})")
    print(f"Treatment:   {treatment}/{sub_variant}")
    print(f"Meta variant:{args.variant}")
    print(f"Title:       {title}")
    print(f"Description: {description}")
    print(f"Code blocks: {len(code_blocks)}")
    print(f"FAQ:         {len(parsed['faq'])} entries")
    print(f"Prose words: {_count_prose_words(parsed['overview_md'])}")
    print(f"Stripped:    {stats['stripped']}")
    print(f"Diff:        {len(spliced) - len(original):+d} bytes")
    if args.dry_run:
        print("\n(--dry-run: not writing)")
    else:
        target_p.write_text(spliced, encoding="utf-8")
        print("\nWrote target.")


if __name__ == "__main__":
    main()
