"""Author one Archetype-N overview sample with an LLM, then self-validate it
against the vendored injector until it passes (or the retry budget is spent).

This is the autonomous, in-build equivalent of the rollout's generate+polish
fan-out: the system prompt carries the spec rules + tier sizing, the user prompt
carries the page facts + a matching reference sample, and each candidate is run
through injector_api.validate(); HARD findings are fed back for the next attempt.
"""
from __future__ import annotations

import os
import re
import tempfile
from pathlib import Path

import facts as facts_mod
import injector_api
import llm_client

HERE = Path(__file__).resolve().parent
REF_DIR = HERE / "spec" / "reference-samples"

# Matching reference sample (few-shot) per (treatment, sub_variant). Delegate has
# no committed sample; reuse the exception shape and rely on the sizing rules.
_REF_FOR = {
    ("full", "class"): "qrreader-overview.md",
    ("full", "interface"): "qrreader-overview.md",
    ("mid", "class"): "qrcode-overview.md",
    ("mid", "interface"): "iqrinput-overview.md",
    ("lite", "enum"): "qrencoding-overview.md",
    ("lite", "exception"): "ironqrexception-overview.md",
    ("lite", "delegate"): "ironqrexception-overview.md",
}

# Prompt text is externalized to spec/prompts.md (single source of truth shared with
# generate-overview.mjs). Blocks are delimited by <!-- prompt:NAME --> / <!-- /prompt -->;
# templates use [[token]] placeholders.
PROMPTS_FILE = HERE / "spec" / "prompts.md"
_PROMPT_BLOCK_RE = re.compile(r"<!--\s*prompt:([\w.]+)\s*-->\n?(.*?)\n?<!--\s*/prompt\s*-->", re.DOTALL)
_PROMPTS_CACHE: "dict[str, str] | None" = None


def _load_prompts() -> dict:
    """Parse spec/prompts.md into {block_name: trimmed_body}. Cached after first load."""
    global _PROMPTS_CACHE
    if _PROMPTS_CACHE is None:
        text = PROMPTS_FILE.read_text(encoding="utf-8")
        _PROMPTS_CACHE = {m.group(1): m.group(2).strip() for m in _PROMPT_BLOCK_RE.finditer(text)}
        for required in ("system", "user_template", "tier_sizing.full"):
            if required not in _PROMPTS_CACHE:
                raise ValueError(f"prompts.md is missing the '{required}' block")
    return _PROMPTS_CACHE


def build_system_prompt() -> str:
    return _load_prompts()["system"]


def _discover_funnel_slugs(doc_root: str) -> list[str]:
    """List how-to/examples/tutorials slugs from a local doc markdown root.
    Empty list when doc_root is unset/missing (degraded mode)."""
    if not doc_root:
        return []
    root = Path(doc_root)
    if not root.is_dir():
        return []
    slugs: list[str] = []
    for kind in ("how-to", "examples", "tutorials"):
        d = root / kind
        if not d.is_dir():
            continue
        for child in sorted(d.iterdir()):
            if child.is_dir():
                slugs.append(f"{kind}/{child.name}")
            elif child.suffix == ".md" and child.stem != "index":
                slugs.append(f"{kind}/{child.stem}")
    return slugs[:80]


def build_user_prompt(f: dict, *, brand: str, assembly: str, product_url: str,
                      treatment: str, sub_variant: str, reference_md: str,
                      funnel_slugs: list[str], feedback: str | None) -> str:
    P = _load_prompts()
    sizing = P[f"tier_sizing.{treatment}"]
    if treatment == "lite":
        lite_rule = P.get(f"lite_rules.{sub_variant}", P["lite_rules.exception"])
        lite_line = "\n" + (P["lite_line"].replace("[[sub_variant]]", sub_variant)
                            .replace("[[lite_rule]]", lite_rule))
        sizing = sizing + lite_line
    members = "\n".join(f"  - {m}" for m in f["members"]) or "  (none declared)"
    if funnel_slugs:
        funnel = (P["funnel.with_slugs"].replace("[[product_url]]", product_url)
                  .replace("[[slugs]]", "\n  ".join(funnel_slugs)))
    else:
        funnel = P["funnel.no_slugs"].replace("[[product_url]]", product_url)
    feedback_text = ""
    if feedback:
        feedback_text = "\n\n" + P["feedback"].replace("[[findings]]", feedback)

    subs = {
        "[[brand]]": brand, "[[assembly]]": assembly, "[[product_url]]": product_url,
        "[[treatment]]": treatment, "[[sub_variant]]": sub_variant, "[[tier_sizing]]": sizing,
        "[[fqn]]": f["fqn"], "[[class_name]]": f["class_name"], "[[namespace]]": f["namespace"],
        "[[base_type]]": f["base_type"], "[[type_kind]]": f["type_kind"],
        "[[member_count]]": str(f["member_count"]), "[[summary]]": f["summary"] or "(none)",
        "[[members]]": members, "[[funnel]]": funnel, "[[reference]]": reference_md.strip(),
        "[[feedback]]": feedback_text,
    }
    out = P["user_template"]
    for token, value in subs.items():
        out = out.replace(token, value)
    return out


_FENCE_WRAP_RE = re.compile(r"\A\s*```[a-zA-Z]*\s*\n(.*)\n```\s*\Z", re.DOTALL)


def _strip_outer_fence(text: str) -> str:
    """If the model wrapped the whole sample in a code fence, unwrap it."""
    m = _FENCE_WRAP_RE.match(text)
    return m.group(1) if m else text.strip()


def _format_feedback(hard: list[dict]) -> str:
    lines = []
    for fnd in hard:
        rule = fnd.get("rule", fnd.get("pattern", "?"))
        detail = fnd.get("detail") or fnd.get("context") or ""
        lines.append(f"  - [{rule}] {detail}")
    return "\n".join(lines)


def generate(target_path: Path, *, brand: str, assembly: str, base_url: str,
             product: str, product_url: str, treatment: str, sub_variant: str,
             api_dir: Path, doc_root: str = "", provider: str | None = None,
             model: str | None = None, variant: str = "v3",
             max_retries: int = 3, log=print) -> "str | None":
    """Author + validate one sample. Returns the validated Markdown string, or
    None if generation/validation failed after the retry budget."""
    html_text = target_path.read_text(encoding="utf-8")
    f = facts_mod.extract_facts(html_text, target_path.stem, base_url)
    if f is None:
        log(f"    [skip] {target_path.name}: not an in-scope type page")
        return None

    ref_name = _REF_FOR.get((treatment, sub_variant), "qrreader-overview.md")
    reference_md = (REF_DIR / ref_name).read_text(encoding="utf-8")
    funnel_slugs = _discover_funnel_slugs(doc_root)
    system = build_system_prompt()

    feedback: str | None = None
    last_err = ""
    with tempfile.TemporaryDirectory() as td:
        tmp = Path(td) / f"{f['fqn']}.md"
        for attempt in range(1, max_retries + 1):
            user = build_user_prompt(
                f, brand=brand, assembly=assembly, product_url=product_url,
                treatment=treatment, sub_variant=sub_variant,
                reference_md=reference_md, funnel_slugs=funnel_slugs, feedback=feedback)
            try:
                resp = llm_client.generate(system, user, provider=provider,
                                           model=model, max_tokens=4000)
            except llm_client.NoProviderError:
                raise
            except llm_client.LLMError as e:
                last_err = f"LLM error: {e}"
                log(f"    [attempt {attempt}] {last_err}")
                continue
            sample_md = _strip_outer_fence(resp["text"])
            tmp.write_text(sample_md, encoding="utf-8")
            result = injector_api.validate(
                tmp, target_path, base_url=base_url,
                treatment=treatment, sub_variant=sub_variant, api_dir=api_dir)
            if result["ok"]:
                log(f"    [ok] {f['fqn']} ({treatment}/{sub_variant}, "
                    f"{result['prose_words']} words, attempt {attempt})")
                return sample_md
            feedback = _format_feedback(result["hard"])
            last_err = f"{len(result['hard'])} HARD finding(s)"
            log(f"    [attempt {attempt}] {f['fqn']}: {last_err}")
    log(f"    [FAILED] {f['fqn']}: {last_err} after {max_retries} attempts")
    return None
