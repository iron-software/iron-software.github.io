# Plan: Archetype-N enhancement as a post-DocFX build step in `iron-software.github.io`

## Context

`update-apidocs.py` and `update-apidocs.mjs` (repo root of `iron-software.github.io`) orchestrate DocFX/JavaDoc API-doc generation: enumerate products from `iron-products.json`, skip already-cached versions, download the package, run DocFX, post-process the HTML (GUID-marker stripping, canonical-link tags), then archive to `object-reference/{code}/{version}/`.

Separately, the **Archetype-N** capability injects task-led SEO overviews (prose + 3 meta variants + `TechArticle`/`FAQPage` JSON-LD) into docfx class-reference pages, below the class summary and above the member tables, delimited by `<!-- archetype-N:start … -->` / `<!-- archetype-N:end -->` sentinels. It was rolled out across 9 products / 575 pages using a *hybrid generate+polish* pipeline whose tooling currently lives in the sibling `ore-foundry` repo and depends on Claude Code / LLM subagents to author prose.

**Goal:** make Archetype-N enhancement a **default post-DocFX activity** owned entirely by `iron-software.github.io`, with **no dependency on ore-foundry or Claude Code**. Both the Python and Node.js entry points must produce equivalent results, each self-contained within its own runtime. The build itself calls an LLM API (Claude default, OpenAI fallback) to run the full generate+polish loop autonomously. A `--no-enhancement` flag disables it. Per-page generation results are cached under `scaffolds/tools/archetype-n/_generated_/{product}/{FQN}.md` to reuse prior work and cut token cost.

### Locked decisions (from clarification)
- **Provider:** auto-detect — `CLAUDE_API_KEY` → Anthropic Messages API; else `OPENAI_API_KEY` → OpenAI chat/completions; else skip enhancement with a warning. Override via `ARCHETYPE_N_PROVIDER` / `--provider` and `--model`.
- **Cache reuse:** by FQN presence. If `_generated_/{product}/{FQN}.md` exists, reuse it verbatim; `--force` regenerates.
- **Cache seeding:** one-time import of the 9 products' existing `object-reference/{product}/_archetype-n-samples/{slug}-overview.md` into FQN-keyed cache entries marked `status=POLISHED_PRESERVED` (never auto-regenerated).
- **Tooling location:** vendored into `scaffolds/tools/archetype-n/`.
- **Node parity:** the injector/validator and generation loop are **reimplemented natively in JS** (the `.mjs` path uses no Python; the `.py` path uses no Node).

## Scope

- **In scope:** .NET (nuget/docfx) products only — the injector is docfx-HTML-specific. Enhancement hooks into the `build_dotnet_apidoc` path after canonical tags, before archive.
- **Out of scope:** JavaDoc (`ironpdfjava`) and pip/npm/docker products (different/no HTML); the ore-foundry offline batch workflow; multi-product clustering/fan-out (the build runs page-by-page, the cache provides the efficiency the fan-out used to).

---

## Architecture

```
update-apidocs.{py,mjs}
  └─ build_dotnet_apidoc(product, version)
       1. DocFX generate            (existing)
       2. strip_guid_markers        (existing)
       3. apply_canonical_tags      (existing)
       4. enhance(api_dir, params)  ← NEW (skipped if --no-enhancement)
       5. archive to object-reference/{code}/{version}/   (existing)

enhance(api_dir, params):
  for each *.html class page in api_dir (skip index/toc/namespace pages):
    fqn        = page filename stem
    treatment  = derive_treatment_from_html(page)        # full | mid | lite
    cache_md   = _generated_/{code}/{fqn}.md
    if cache_md exists and not --force:
        sample = cache_md                                 # reuse (incl. POLISHED_PRESERVED)
    else:
        sample = generate_overview(page, params, treatment)  # LLM + validate loop
        write cache_md ; update _manifest.json
    inject(sample, page, params)                          # validate (dry-run) then splice
```

The **enhancement source** when run from the build is therefore: reuse cached/authored samples when present, otherwise author fresh prose via the LLM. This is the autonomous equivalent of the rollout's generate+polish.

---

## Components to build

All new tooling lives under `scaffolds/tools/archetype-n/`, split into a Python implementation and a JS implementation that share the language-agnostic config and reference assets.

### Shared assets (language-agnostic)
- `scaffolds/tools/archetype-n/spec/archetype-N-spec.md` — copy of `ore-foundry/skills/content-improvement/references/archetype-N-api-class-overview-v1_2.md` (v1.2.4). The authoring contract.
- `scaffolds/tools/archetype-n/spec/polish-brief.md` — copy of `ore-foundry/scripts/archetype-n/_polish_brief.md`, with the absolute ore-foundry paths rewritten to the vendored locations.
- `scaffolds/tools/archetype-n/spec/reference-samples/` — the 7 ironqr reference samples named in the brief (qrreader, qrwriter, qrcode, iqrinput, qrencoding, ironqrexception, ironqrfileexception), used as few-shot exemplars in the prompt.
- `scaffolds/tools/archetype-n/products.json` (NEW) — per-`code` enhancement params not derivable from `iron-products.json`:
  ```json
  {
    "ironbarcode": { "brand": "IronBarcode", "assembly": "IronBarCode.dll", "doc_root": "" },
    "ironxl":      { "brand": "IronXL",      "assembly": "IronXL.dll",      "doc_root": "" }
  }
  ```
  `base_url` and `product_url` are derived from the `iron-products.json` entry: `base_url = https://{domain}{path}/object-reference/api/`, `product_url = https://{domain}{path}/`. `brand` resolves the casing split (e.g. brand `IronBarcode` vs namespace/assembly `IronBarCode`). `doc_root` is an optional local path to that product's how-to/examples/tutorials markdown for funnel-link discovery + on-disk verification; empty = degraded mode (links generated from site URL patterns, validated for format/count but not disk existence).

### Python implementation (`scaffolds/tools/archetype-n/*.py`)
- `inject_archetype_n.py` — **vendored verbatim** from ore-foundry (stdlib-only; the validator + idempotent splicer). Reused unchanged; it already supports `--base-url`, `--product`, `--product-url`, `--treatment`, `--dry-run`, and auto-derivation. Import its functions in-process from `enhance.py` rather than shelling out.
- `llm_client.py` (NEW) — provider-agnostic client. Loads `.env` (tiny KEY=VALUE parser, no dependency), auto-detects provider per the locked rule, calls Anthropic `POST /v1/messages` or OpenAI `POST /v1/chat/completions` via `urllib.request` (matching the existing `ore-foundry/scripts/openai-strategic.py` pattern), returns `{text, usage}`.
- `generate_overview.py` (NEW) — for one page: extract docfx facts (declaration, namespace, base type, declared members, summary) reusing the injector's existing parse helpers; assemble the system prompt from `spec/` + `products.json` params + few-shot reference samples + the page facts + treatment sizing; call `llm_client`; write the sample `.md`; validate with the injector's validator in `--dry-run`; on failure, re-prompt with the gate messages; loop up to `MAX_VALIDATION_RETRIES` (default 3). On exhaustion, return `None` (page left as docfx default; manifest status `FAILED`).
- `enhance.py` (NEW) — the orchestrator the build calls (the pseudo-code above): page iteration, treatment routing, cache check/reuse, generate, inject (write mode), `_manifest.json` upkeep. Page filter: only type pages (skip `index.html`, `toc.html`, namespace landing pages — same filter `build_datasets.py` uses).
- `seed_cache.py` (NEW, one-time) — migrate each `object-reference/{code}/_archetype-n-samples/{slug}-overview.md` to `_generated_/{code}/{FQN}.md`. Resolve slug→FQN by matching the sample's `Target page:` URL / the api/ HTML filenames. Mark `status=POLISHED_PRESERVED`.

### JS implementation (`scaffolds/tools/archetype-n/*.mjs`)
Native ports with identical behavior and CLI surface:
- `inject_archetype_n.mjs` — **the largest task**: port the ~1400-line validator + splicer (regex gates P2/P3/P11–P21, per-variant constraints, sentinel splice, JSON-LD build, treatment auto-derivation). Verified for byte-parity against the Python output (see Verification).
- `llm-client.mjs`, `generate-overview.mjs`, `enhance.mjs`, `seed-cache.mjs` — mirror the Python modules using `node:fs`, `node:path`, native `fetch`, and a small `.env` parser.

### Cache layout
```
scaffolds/tools/archetype-n/_generated_/
  ironpdf/
    _manifest.json
    IronPdf.PdfDocument.md
    IronPdf.CompressionMode.md
    ...
  ironbarcode/
    _manifest.json
    ...
```
`_manifest.json` schema (matches the `api-overview-seo/generated/_manifest.json` reference): one entry per page —
`{ "fqn", "treatment", "sub_variant", "status": "GENERATED|POLISHED_PRESERVED|FAILED", "file" }`.
Cache `.md` files follow the exact sample format already on disk (leading HTML comment → `## Injected overview (Markdown)` → `---` → `## Recommended metadata` (v1/v2/v3 title+description) → `---` → `## Structured data` (TechArticle blockquote + FAQPage JSON for full/mid)). The cache is committed (durable reuse across CI runs), consistent with the already-committed `_archetype-n-samples/`.

---

## Files modified

- `update-apidocs.py` — add CLI parsing (currently none): `--no-enhancement`, `--force`, `--provider`, `--model`, and optional `--product`/`--code` and `--version` filters for targeted runs. Call `enhance.enhance(...)` inside `build_dotnet_apidoc` after `apply_canonical_tags`, before the archive copy. Honor `ARCHETYPE_N_*` env. Skip + warn (don't fail the build) when enhancement is on but no API key is found.
- `update-apidocs.mjs` — same flags + same hook in `buildDotnetApidoc`, using the JS modules.
- `.gitignore` — **add `.env`** (currently absent — a committed key would leak). Keep `_generated_/` committed.
- `.env-example` — add a commented `ARCHETYPE_N_PROVIDER=claude` line (keys already present).
- `README.md` — document the enhancement step, the flags/env, the provider rule, and the cache.
- `package.json` — no new runtime deps (native `fetch` on Node ≥18); optionally add an `enhance` script.

Reused existing code: the injector's HTML-fact parsers and `derive_treatment_from_html` (avoid re-deriving member counts); `apply_canonical_tags`/`strip_guid_markers` stay untouched; `iron-products.json` is the product/param source (unmodified).

---

## Verification

1. **Injector regression (Python):** run vendored `inject_archetype_n.py` `--dry-run` on a committed sample+page pair (e.g. ironbarcode `AdaptiveThresholdFilter`); confirm exit 0 and that a write-mode run reproduces the already-committed injected block (idempotent, no double sentinels).
2. **JS↔Python parity:** golden-corpus test — run both injectors `--dry-run` across ~30 existing injected pages spanning full/mid/lite/interface/enum/exception; assert identical validator verdicts, and identical spliced HTML bytes in write mode against a temp copy. This is the gate that the JS port is faithful.
3. **Seeding:** run `seed_cache.py`; confirm each `_archetype-n-samples/*-overview.md` maps to a correctly-named `_generated_/{code}/{FQN}.md` with `status=POLISHED_PRESERVED`, and that `enhance` reuses (never regenerates) those.
4. **LLM generate path (small, real key):** on `ironprint` (6 pages), `--force` one page; confirm the LLM-authored sample passes the validator within the retry budget, injects cleanly, and the manifest updates. Repeat once with `ANTHROPIC` unset / `OPENAI_API_KEY` set to exercise the fallback.
5. **End-to-end:** run `update-apidocs.py --code ironprint` (and the `.mjs` equivalent) against a fresh build; confirm enhancement runs after canonical tags, the archived `object-reference/ironprint/{version}/api/` pages carry the injected blocks, and a second run reuses the cache (no LLM calls).
6. **Flag + safety:** `--no-enhancement` skips entirely; with both API keys unset, the build warns and completes the normal (un-enhanced) docs.
7. Copy this plan to `iron-software.github.io/docs/` once approved.

---

## Risks / trade-offs

- **JS port fidelity** is the biggest risk: ~1400 lines of regex validators must match Python exactly. Mitigation: the golden-corpus parity test (Verification #2) run on every change; treat any divergence as a blocker.
- **Funnel-link disk verification** needs each product's how-to/examples markdown, which lives in the website content repos, not here. Without a configured `doc_root`, links are produced from known site URL patterns and validated for format/count but not on-disk existence — a quality degradation vs. the rollout, not a correctness break. `doc_root` in `products.json` restores full verification where the content repo is checked out alongside.
- **LLM cost/nondeterminism:** bounded by reuse-by-FQN caching (steady-state runs make zero LLM calls) and the capped retry loop; `--force` is the only path that re-spends tokens.
- **Reuse-by-FQN can go stale** if a class's surface changes across versions but the FQN is unchanged — accepted per the locked decision; `--force` (or deleting the cache entry) is the remedy.
- **Secret hygiene:** `.env` must be gitignored before any key is written locally (included above).
