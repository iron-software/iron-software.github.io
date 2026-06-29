"""One-time seeding: import the committed human-authored Archetype-N samples
(object-reference/{code}/_archetype-n-samples/{slug}-overview.md) into the
FQN-keyed generation cache (_generated_/{code}/{FQN}.md), marked
POLISHED_PRESERVED so the in-build generator reuses and never overwrites them.

FQN is read from each sample's `Target page:` URL comment; treatment from its
leading `N-Full/N-Mid/N-Lite` comment; sub_variant from the live docfx page.
Re-runnable: existing POLISHED_PRESERVED entries are refreshed in place.

Usage:
  python seed_cache.py --all
  python seed_cache.py --code ironprint
"""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import injector_api

HERE = Path(__file__).resolve().parent
REPO_ROOT = HERE.parents[2]
CACHE_ROOT = HERE / "_generated_"
OBJ_REF = REPO_ROOT / "object-reference"

_TARGET_RE = re.compile(r"Target(?:\s+page)?:\s*\S*?/api/([^/\s]+)\.html", re.IGNORECASE)
_TIER_RE = re.compile(r"N-(Full|Mid|Lite)", re.IGNORECASE)
_TIER_MAP = {"full": "full", "mid": "mid", "lite": "lite"}
_SUBVAR_WORDS = ("interface", "enum", "exception", "delegate", "class", "struct")


def _find_page(code: str, fqn: str) -> "Path | None":
    """Newest versioned api/ page for an FQN under object-reference/{code}."""
    base = OBJ_REF / code
    if not base.is_dir():
        return None
    hits = sorted(base.glob(f"*/api/{fqn}.html"))
    return hits[-1] if hits else None


def _fqn_from_sample(text: str, slug: str, code: str) -> "str | None":
    m = _TARGET_RE.search(text)
    if m:
        return m.group(1)
    base = OBJ_REF / code
    # FQN-named sample files (later products): the slug IS the FQN if a page exists.
    if "." in slug and sorted(base.glob(f"*/api/{slug}.html")):
        return slug
    # slug-named files: match slug to a page class-name (case-insensitive)
    for page in sorted(base.glob("*/api/*.html")):
        cls = page.stem.split(".")[-1]
        if cls.lower() == slug.lower():
            return page.stem
    return None


def _treatment_from_comment(text: str) -> "str | None":
    m = _TIER_RE.search(text)
    return _TIER_MAP.get(m.group(1).lower()) if m else None


def _subvariant_from_comment(text: str) -> "str | None":
    head = text[:400].lower()
    for w in _SUBVAR_WORDS:
        if w in head:
            return "class" if w == "struct" else w
    return None


def _slug_from_name(name: str) -> str:
    """Sample slug from a filename, tolerant of both naming conventions:
    `license-overview.md` -> `license`; `IronPdf.PdfDocument.md` -> `IronPdf.PdfDocument`."""
    base = name[:-3] if name.endswith(".md") else name
    if base.endswith("-overview"):
        base = base[: -len("-overview")]
    return base


def seed_product(code: str, *, validate: bool = True, samples_dir: "Path | None" = None,
                 glob_pat: str = "*-overview.md", log=print) -> dict:
    samples_dir = Path(samples_dir) if samples_dir else (OBJ_REF / code / "_archetype-n-samples")
    summary = {"code": code, "seeded": 0, "unresolved": 0, "validated_ok": 0,
               "validated_warn": 0}
    if not samples_dir.is_dir():
        log(f"[seed] {code}: no samples dir ({samples_dir}), skipping")
        return summary
    cache_dir = CACHE_ROOT / code
    cache_dir.mkdir(parents=True, exist_ok=True)
    mf = cache_dir / "_manifest.json"
    manifest: dict = {}
    if mf.is_file():
        data = json.loads(mf.read_text(encoding="utf-8"))
        rows = data if isinstance(data, list) else data.get("entries", [])
        manifest = {r["fqn"]: r for r in rows} if isinstance(rows, list) else rows

    for sample in sorted(samples_dir.glob(glob_pat)):
        if sample.name.startswith("_"):
            continue  # skip _manifest.json-style siblings
        slug = _slug_from_name(sample.name)
        text = sample.read_text(encoding="utf-8")
        fqn = _fqn_from_sample(text, slug, code)
        if not fqn:
            summary["unresolved"] += 1
            log(f"    [unresolved] {sample.name}: could not resolve FQN")
            continue
        page = _find_page(code, fqn)
        routed_t, routed_sv = (None, None)
        if page is not None:
            routed_t, routed_sv = injector_api.route_treatment(
                page.read_text(encoding="utf-8"))
        treatment = _treatment_from_comment(text) or routed_t or "full"
        sub_variant = routed_sv or _subvariant_from_comment(text) or "class"

        cache_md = cache_dir / f"{fqn}.md"
        cache_md.write_text(text, encoding="utf-8")
        manifest[fqn] = {"fqn": fqn, "treatment": treatment,
                         "sub_variant": sub_variant, "status": "POLISHED_PRESERVED",
                         "file": f"{fqn}.md"}
        summary["seeded"] += 1

        if validate and page is not None:
            base_url = _base_url_for(code)
            res = injector_api.validate(cache_md, page, base_url=base_url,
                                        treatment=treatment, sub_variant=sub_variant,
                                        api_dir=page.parent)
            if res["ok"]:
                summary["validated_ok"] += 1
            else:
                summary["validated_warn"] += 1
                rules = ", ".join(f.get("rule", "?") for f in res["hard"])
                log(f"    [validate-FAIL] {fqn} ({treatment}/{sub_variant}): {rules}")

    rows = [manifest[k] for k in sorted(manifest)]
    mf.write_text(json.dumps(rows, indent=2, ensure_ascii=False), encoding="utf-8")
    log(f"[seed] {code}: seeded={summary['seeded']} unresolved={summary['unresolved']} "
        f"validated_ok={summary['validated_ok']} validated_fail={summary['validated_warn']}")
    return summary


def _base_url_for(code: str) -> str:
    libs = json.loads((REPO_ROOT / "iron-products.json").read_text(encoding="utf-8"))["libraries"]
    e = next((p for p in libs if p.get("code") == code), None)
    if not e:
        return "https://ironsoftware.com/object-reference/api/"
    return f"https://{e['domain']}{e.get('path','')}/object-reference/api/"


def main() -> None:
    ap = argparse.ArgumentParser(description="Seed Archetype-N cache from authored samples")
    ap.add_argument("--code", default=None, help="single product code")
    ap.add_argument("--all", action="store_true", help="all products with a samples dir")
    ap.add_argument("--samples-dir", default=None,
                    help="override the samples source dir (e.g. ironpdf's api-overview-seo/generated)")
    ap.add_argument("--glob", default="*-overview.md",
                    help="sample filename glob (use *.md for FQN-named generated dirs)")
    ap.add_argument("--no-validate", action="store_true")
    args = ap.parse_args()

    codes: list[str] = []
    if args.all:
        codes = sorted(d.name for d in OBJ_REF.iterdir()
                       if (d / "_archetype-n-samples").is_dir())
    elif args.code:
        codes = [args.code]
    else:
        ap.error("pass --code <code> or --all")

    totals = {"seeded": 0, "unresolved": 0, "validated_ok": 0, "validated_warn": 0}
    for code in codes:
        s = seed_product(code, validate=not args.no_validate,
                         samples_dir=args.samples_dir, glob_pat=args.glob)
        for k in totals:
            totals[k] += s[k]
    print(f"\nTOTAL: seeded={totals['seeded']} unresolved={totals['unresolved']} "
          f"validated_ok={totals['validated_ok']} validated_fail={totals['validated_warn']}")


if __name__ == "__main__":
    main()
