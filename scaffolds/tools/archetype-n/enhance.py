"""Archetype-N post-DocFX enhancement orchestrator.

Given a freshly-built docfx api/ directory and a product code, iterate the type
pages, route each to full/mid/lite, reuse a cached overview when present
(reuse-by-FQN) or author one with the LLM, then splice it into the page. Keeps a
per-product generation cache + _manifest.json under
scaffolds/tools/archetype-n/_generated_/{code}/ for token-free re-runs.

Importable: update-apidocs.py calls enhance(api_dir, code, ...) in-process.
Standalone: python enhance.py --code ironprint --api-dir <dir> [--force] ...
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

import facts as facts_mod
import generate_overview
import injector_api
import inject_archetype_n as inj
import llm_client

HERE = Path(__file__).resolve().parent
REPO_ROOT = HERE.parents[2]            # scaffolds/tools/archetype-n -> repo root
CACHE_ROOT = HERE / "_generated_"
PRODUCTS_JSON = HERE / "products.json"
IRON_PRODUCTS = REPO_ROOT / "iron-products.json"


# ---------------------------------------------------------------------------
# Product parameter resolution
# ---------------------------------------------------------------------------

def resolve_params(code: str) -> dict:
    """Resolve per-product params: base_url, product_url, brand, assembly, doc_root.
    base_url/product_url from iron-products.json (domain+path); brand/assembly/
    doc_root from products.json (with sane fallbacks)."""
    libs = json.loads(IRON_PRODUCTS.read_text(encoding="utf-8")).get("libraries", [])
    entry = next((p for p in libs if p.get("code") == code), None)
    if entry is None:
        raise ValueError(f"product code '{code}' not found in {IRON_PRODUCTS}")
    domain = entry["domain"]
    path = entry.get("path", "")
    base_url = f"https://{domain}{path}/object-reference/api/"
    product_url = f"https://{domain}{path}/"

    pj = {}
    if PRODUCTS_JSON.is_file():
        pj = json.loads(PRODUCTS_JSON.read_text(encoding="utf-8")).get("products", {})
    pp = pj.get(code, {})
    brand = pp.get("brand") or inj.CANONICAL_PRODUCT_NAMES.get(code, entry.get("name", code))
    assembly = pp.get("assembly") or f"{brand}.dll"
    doc_root = pp.get("doc_root", "")
    return {"code": code, "base_url": base_url, "product_url": product_url,
            "brand": brand, "assembly": assembly, "doc_root": doc_root}


# ---------------------------------------------------------------------------
# Manifest
# ---------------------------------------------------------------------------

def _load_manifest(cache_dir: Path) -> dict:
    mf = cache_dir / "_manifest.json"
    if not mf.is_file():
        return {}
    data = json.loads(mf.read_text(encoding="utf-8"))
    rows = data.get("entries", data) if isinstance(data, dict) else data
    if isinstance(rows, list):
        return {r["fqn"]: r for r in rows}
    return rows


def _write_manifest(cache_dir: Path, manifest: dict) -> None:
    rows = [manifest[k] for k in sorted(manifest)]
    (cache_dir / "_manifest.json").write_text(
        json.dumps(rows, indent=2, ensure_ascii=False), encoding="utf-8")


# ---------------------------------------------------------------------------
# Enhancement
# ---------------------------------------------------------------------------

def enhance(api_dir, code: str, *, force: bool = False,
            provider: "str | None" = None, model: "str | None" = None,
            variant: str = "v3", max_retries: int = 3,
            only: "list[str] | None" = None, limit: "int | None" = None,
            log=print) -> dict:
    """Enhance every in-scope type page in api_dir for product `code`.

    Returns a summary dict of counts. Never raises on a single-page failure; a
    missing API key disables generation but cached pages still inject.
    """
    api_dir = Path(api_dir)
    if not api_dir.is_dir():
        raise ValueError(f"api dir not found: {api_dir}")
    params = resolve_params(code)
    cache_dir = CACHE_ROOT / code
    cache_dir.mkdir(parents=True, exist_ok=True)
    manifest = _load_manifest(cache_dir)

    summary = {"code": code, "pages": 0, "injected": 0, "generated": 0,
               "reused": 0, "preserved": 0, "failed": 0, "skipped": 0,
               "no_provider": False}
    only_set = set(only) if only else None
    no_provider = False

    pages = sorted(api_dir.glob("*.html"))
    log(f"[archetype-n] {code}: scanning {len(pages)} html files in {api_dir}")
    for page in pages:
        stem = page.stem
        html_text = page.read_text(encoding="utf-8")
        if not facts_mod.is_type_page(stem, html_text):
            continue
        fqn = stem
        if only_set is not None and fqn not in only_set:
            continue
        if limit is not None and summary["pages"] >= limit:
            break
        summary["pages"] += 1

        cache_md = cache_dir / f"{fqn}.md"
        entry = manifest.get(fqn)
        preserved = bool(entry and entry.get("status") == "POLISHED_PRESERVED" and cache_md.is_file())
        reuse = preserved or (cache_md.is_file() and not force)

        routed_t, routed_sv = injector_api.route_treatment(html_text)

        if reuse:
            treatment = (entry or {}).get("treatment") or routed_t
            sub_variant = (entry or {}).get("sub_variant") or routed_sv
            status = (entry or {}).get("status") or "GENERATED"
            if preserved:
                summary["preserved"] += 1
            else:
                summary["reused"] += 1
        else:
            treatment, sub_variant = routed_t, routed_sv
            if no_provider:
                summary["skipped"] += 1
                log(f"    [skip] {fqn}: no API key and no cached sample")
                continue
            try:
                sample_md = generate_overview.generate(
                    page, brand=params["brand"], assembly=params["assembly"],
                    base_url=params["base_url"], product=params["brand"],
                    product_url=params["product_url"], treatment=treatment,
                    sub_variant=sub_variant, api_dir=api_dir,
                    doc_root=params["doc_root"], provider=provider, model=model,
                    variant=variant, max_retries=max_retries, log=log)
            except llm_client.NoProviderError as e:
                no_provider = True
                summary["no_provider"] = True
                log(f"[archetype-n] no LLM provider ({e}); generation disabled, "
                    "cached pages will still inject")
                if cache_md.is_file():
                    treatment = (entry or {}).get("treatment") or routed_t
                    sub_variant = (entry or {}).get("sub_variant") or routed_sv
                    status = (entry or {}).get("status") or "GENERATED"
                    summary["reused"] += 1
                else:
                    summary["skipped"] += 1
                    continue
            else:
                if sample_md is None:
                    summary["failed"] += 1
                    manifest[fqn] = {"fqn": fqn, "treatment": treatment,
                                     "sub_variant": sub_variant, "status": "FAILED",
                                     "file": f"{fqn}.md"}
                    if cache_md.is_file():
                        # generation failed but a prior cache exists -> reuse it
                        log(f"    [fallback] {fqn}: keeping existing cached sample")
                        treatment = (entry or {}).get("treatment") or routed_t
                        sub_variant = (entry or {}).get("sub_variant") or routed_sv
                        status = (entry or {}).get("status") or "GENERATED"
                    else:
                        continue
                else:
                    cache_md.write_text(sample_md, encoding="utf-8")
                    status = "GENERATED"
                    summary["generated"] += 1

        # Inject (validate already passed for fresh; reused samples were valid when written).
        try:
            inj_stats = injector_api.inject_page(
                cache_md, page, base_url=params["base_url"], product=params["brand"],
                product_url=params["product_url"], treatment=treatment,
                sub_variant=sub_variant, variant=variant)
            summary["injected"] += 1
            manifest[fqn] = {"fqn": fqn, "treatment": treatment,
                             "sub_variant": sub_variant, "status": status,
                             "file": f"{fqn}.md"}
        except Exception as e:  # splice anchor missing etc. -> log, do not abort
            summary["failed"] += 1
            log(f"    [inject-error] {fqn}: {e}")

    _write_manifest(cache_dir, manifest)
    log(f"[archetype-n] {code}: injected={summary['injected']} "
        f"generated={summary['generated']} reused={summary['reused']} "
        f"preserved={summary['preserved']} failed={summary['failed']} "
        f"skipped={summary['skipped']}")
    return summary


def _default_api_dir(code: str, version: "str | None") -> Path:
    """Locate object-reference/{code}/{version}/api (latest version if unset)."""
    base = REPO_ROOT / "object-reference" / code
    if version:
        return base / version / "api"
    versions = [d for d in base.iterdir() if d.is_dir() and (d / "api").is_dir()]
    if not versions:
        raise ValueError(f"no versioned api/ dir under {base}")
    latest = sorted(versions, key=lambda d: d.name)[-1]
    return latest / "api"


def main() -> None:
    ap = argparse.ArgumentParser(description="Archetype-N post-DocFX enhancement")
    ap.add_argument("--code", required=True, help="product code (e.g. ironprint)")
    ap.add_argument("--api-dir", default=None, help="docfx api/ dir (default: latest under object-reference/{code})")
    ap.add_argument("--version", default=None, help="version subdir to use when --api-dir is omitted")
    ap.add_argument("--force", action="store_true", help="regenerate cached samples (POLISHED_PRESERVED still preserved)")
    ap.add_argument("--provider", default=None, choices=("claude", "openai"))
    ap.add_argument("--model", default=None)
    ap.add_argument("--variant", default="v3", choices=("v1", "v2", "v3"))
    ap.add_argument("--max-retries", type=int, default=3)
    ap.add_argument("--only", default=None, help="comma-separated FQNs to limit to")
    ap.add_argument("--limit", type=int, default=None, help="cap number of pages (testing)")
    args = ap.parse_args()

    api_dir = Path(args.api_dir) if args.api_dir else _default_api_dir(args.code, args.version)
    only = [s.strip() for s in args.only.split(",")] if args.only else None
    enhance(api_dir, args.code, force=args.force, provider=args.provider,
            model=args.model, variant=args.variant, max_retries=args.max_retries,
            only=only, limit=args.limit)


if __name__ == "__main__":
    main()
