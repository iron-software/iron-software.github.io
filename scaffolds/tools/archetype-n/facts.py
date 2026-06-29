"""Extract the per-page facts the generator needs, straight from a docfx HTML
page. Ported from build_datasets.py so the github.io repo is self-contained
(no ore-foundry dependency). Every fact is derived from the page declaration,
so no prioritization pipeline is required.
"""
from __future__ import annotations

import html
import re

# Namespaces that are vendored/internal infrastructure, not product surface.
BLOCK_NS = re.compile(r"\.Internal\b|Interop|grpc|Pdfium|BouncyCastle|GrpcLayer", re.I)
# Each docfx member (and the type declaration) renders one lang-csharp span.
_DECL_RE = re.compile(r'class="lang-csharp hljs">([^<]+)</code>')
_TYPEDECL_RE = re.compile(
    r"public\s+(?:sealed\s+|abstract\s+|static\s+|partial\s+)*"
    r"(class|interface|enum|struct|delegate)\s+([A-Za-z0-9_]+)(?:&lt;[^&]*&gt;|<[^>]*>)?"
    r"(?:\s*:\s*([^<\n{]+))?"
)
_SUMMARY_RE = re.compile(r'<div class="markdown level0 summary"[^>]*>(.*?)</div>', re.DOTALL)


def _clean(x: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", x))).strip()


def is_type_page(stem: str, html_text: str) -> bool:
    """True when the page is an in-scope type reference page (has a declaration
    and is not an index/toc/namespace/blocked-namespace page)."""
    if stem in ("index", "toc"):
        return False
    if BLOCK_NS.search(stem):
        return False
    return bool(_DECL_RE.search(html_text))


def extract_facts(html_text: str, stem: str, base_url: str) -> "dict | None":
    """Return a facts dict for one docfx type page, or None if not in scope.

    Keys: url, fqn, namespace, class_name, base_type, type_kind,
          is_enum_pattern, is_exception, member_count, members (decl strings,
          capped), summary, declaration.
    """
    if not is_type_page(stem, html_text):
        return None
    decls = [html.unescape(x).strip() for x in _DECL_RE.findall(html_text)]
    if not decls:
        return None
    first = decls[0]
    m = _TYPEDECL_RE.search(first.replace("<", "&lt;").replace(">", "&gt;")) or _TYPEDECL_RE.search(first)
    if not m:
        return None
    kind = m.group(1)
    bases = [b.strip().split(".")[-1] for b in (m.group(3) or "").split(",") if b.strip()]
    base_type = bases[0] if bases else "Object"
    class_name = stem.split(".")[-1]
    namespace = stem[: -(len(class_name) + 1)] if "." in stem else ""
    members = decls[1:]
    is_enum = kind == "enum" or "Enum" in bases
    is_exc = any(b == "Exception" or b.endswith("Exception") for b in bases)
    type_kind = kind
    if kind in ("class", "struct") and "Enum" in bases:
        type_kind = "enum"  # type-safe enum rendered as sealed class : Enum
    summ = _SUMMARY_RE.findall(html_text)
    fqn = f"{namespace}.{class_name}" if namespace else class_name
    return {
        "url": base_url.rstrip("/") + "/" + stem + ".html",
        "fqn": fqn,
        "namespace": namespace,
        "class_name": class_name,
        "base_type": base_type,
        "type_kind": type_kind,
        "is_enum_pattern": is_enum,
        "is_exception": is_exc,
        "member_count": len(members),
        "members": members[:60],
        "summary": _clean(summ[0])[:600] if summ else "",
        "declaration": _clean(first),
    }
