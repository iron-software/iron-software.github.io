"""In-process wrapper over the vendored inject_archetype_n.py.

Exposes the injector's validate + splice steps as callable functions (the
vendored module's own main() only offers a CLI that sys.exit()s). Both
generate_overview.py (dry-run retry loop) and enhance.py (final write) use this
so the validator sequence is byte-identical to the standalone injector.
"""
from __future__ import annotations

from pathlib import Path

import inject_archetype_n as inj


def _register_ns_root(target_path: Path) -> None:
    root = target_path.stem.split(".")[0]
    if root and root[0].isupper():
        inj._KNOWN_NAMESPACE_ROOTS.add(root)


def route_treatment(target_html: str) -> tuple[str, str]:
    """(treatment, sub_variant) from the docfx declaration, matching the
    injector's own auto-derivation. ('full','class') when undetectable."""
    derived = inj.derive_treatment_from_html(target_html)
    return derived if derived else ("full", "class")


def validate(sample_path: Path, target_path: Path, *, base_url: str,
             treatment: str, sub_variant: str, api_dir: Path) -> dict:
    """Run the full validator sequence (constraints + forbidden + v1.2 + v1.2.1
    + v1.2.3). Returns {ok, hard, warn, prose_words}. Never writes."""
    inj.API_DIR = Path(api_dir)
    inj.CONFIRMED_TYPES_PATH = None
    _register_ns_root(target_path)

    page_url = base_url.rstrip("/") + "/" + target_path.name
    try:
        parsed = inj.parse_sample(sample_path)
    except Exception as e:  # malformed sample (missing section, stray backtick, bad JSON)
        return {"ok": False,
                "hard": [{"severity": "HARD", "rule": "parse-error", "detail": str(e)}],
                "warn": [], "prose_words": 0}

    target_html = target_path.read_text(encoding="utf-8")
    findings: list[dict] = []
    findings += inj.validate_constraints(parsed, treatment, sub_variant)

    prose = inj.CODE_FENCE_RE.sub("", parsed["overview_md"])
    findings += inj.forbidden_scan(prose, "overview prose")
    findings += inj.forbidden_scan(parsed["abstract"], "TechArticle abstract")
    for i, faq in enumerate(parsed["faq"]):
        findings += inj.forbidden_scan(faq.get("question", ""), f"FAQ[{i}].question")
        findings += inj.forbidden_scan(faq.get("answer", ""), f"FAQ[{i}].answer")

    findings += inj.v12_validators(parsed, page_url, target_html)
    findings += inj.v121_validators(parsed, treatment, sub_variant)
    findings += inj.v123_validators(parsed, treatment, sub_variant)

    hard = [f for f in findings if f.get("severity") == "HARD"]
    warn = [f for f in findings if f.get("severity") != "HARD"]
    return {
        "ok": not hard,
        "hard": hard,
        "warn": warn,
        "prose_words": inj._count_prose_words(parsed["overview_md"]),
    }


def inject_page(sample_path: Path, target_path: Path, *, base_url: str,
                product: str, product_url: str, treatment: str,
                sub_variant: str, variant: str = "v3") -> dict:
    """Build the overview HTML + JSON-LD and splice into the target page in
    place (idempotent). Assumes the sample already passed validate(). Returns
    the injector's stats dict plus byte delta."""
    inj.API_DIR = target_path.resolve().parent
    inj.CONFIRMED_TYPES_PATH = None
    _register_ns_root(target_path)

    parsed = inj.parse_sample(sample_path)
    idx = {"v1": 0, "v2": 1, "v3": 2}[variant]
    class_name = target_path.stem.split(".")[-1]
    page_url = base_url.rstrip("/") + "/" + target_path.name

    title = parsed["titles"][idx]
    description = parsed["descriptions"][idx]
    overview_html, code_blocks = inj.md_overview_to_html(parsed["overview_md"])
    jsonld = inj.build_jsonld(class_name, page_url, title, description,
                             parsed["abstract"], parsed["faq"], code_blocks,
                             sub_variant, product, product_url)

    original = target_path.read_text(encoding="utf-8")
    spliced, stats = inj.inject(
        original, class_name, page_url, overview_html,
        title, description, parsed["titles"], parsed["descriptions"], jsonld,
        treatment, sub_variant, strip_class_blocks=True,
    )
    target_path.write_text(spliced, encoding="utf-8")
    stats["bytes_delta"] = len(spliced) - len(original)
    stats["code_blocks"] = len(code_blocks)
    stats["faq"] = len(parsed["faq"])
    return stats
