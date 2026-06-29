# iron-software.github.io — Object-Reference Documentation Archive & Generation Authority

This repository is the **generation authority and archive** for Iron Software's product API ("object-reference") documentation.

It does two things:

1. **Hosts** the generated documentation as a static site. GitHub Pages serves every committed build at `https://iron-software.github.io/object-reference/<code>/<version>/…`. Downstream sites (ironsoftware.com, ironpdf.com) and build pipelines (devops.ironsoftware) fetch from here rather than regenerating.
2. **Generates** that documentation from each product's published package (DocFX for .NET, JavaDoc for IronPDF-for-Java) and caches each build under `object-reference/`.

> Only `object-reference/` is published to the web. This README, the tooling, the scaffolds, and
> the internal docs are excluded from the GitHub Pages build (see `_config.yml`).

## Layout

| Path | Purpose |
| --- | --- |
| `object-reference/<code>/<version>/` | The published, committed documentation builds (the archive). |
| `iron-products.json` | Product catalog — package type, package name / Maven coordinates, domain, and URL path per product. |
| `scaffolds/` | DocFX templates, `docfx.<code>.json` configs, homepages, and the `tools/` toolchain (DocFX, JDK — Git LFS). |
| `docs/` | Internal operator notes (e.g. the Windows/DocFX limitation). |
| `*.py` / `*.mjs` | The tooling, in two interchangeable ports (see below). |

## Tooling

The tooling exists in two equivalent versions:

- Python — the original management set, utilized on the staging server and in the `devops.ironsoftware` Build-Chain pipeline
- Node.js — ported from Python, built for use in the modern Node.js / Astro website repository (<https://github.com/iron-software/astro/>)

Both versions read from the same `iron-products.json` and write to the same `object-reference/` cache.

| Task | Python | Node.js |
| --- | --- | --- |
| Inspect a product's version / build status | `check-apidocs.py` | `check-apidocs.mjs` |
| Generate any missing documentation | `update-apidocs.py` | `update-apidocs.mjs` |
| Shared version/path helpers | `apidocs.py` | `apidocs.mjs` |
| Colorized status output | `statuslogger.py` | `statuslogger.mjs` |

### `check-apidocs` — inspect a product

Reports a product's latest (or specified) version and, optionally, whether its docs are built.

```bash
# Python
python check-apidocs.py -p ironpdf -V -a
# Node
node check-apidocs.mjs -p ironpdf -V -a
```

| Flag | Meaning |
| --- | --- |
| `-p, --product-code` | Product code (e.g. `ironpdf`, `ironpdfjava`, `ironocr`). |
| `-n, --product-name` | Product display name (alternative to the code). |
| `-v, --version` | A specific version. |
| `-V, --latest-version` | Resolve the latest published version. |
| `-a, --docs-exists` | Also report whether the docs are built and their archive path. |

Version data is sourced live per package type: NuGet/​PyPI/Maven/​npm registries.

### `update-apidocs` — generate missing documentation

Walks the catalog and builds any version not already in `object-reference/`.

.NET products are built with DocFX from their NuGet package; IronPDF-for-Java from its published JavaDoc jar. Each .NET build is post-processed (GUID-marker stripping, canonical-link tags, and **Archetype-N SEO overview injection** — see below) and cached.

```bash
# Python
python update-apidocs.py
# Node (run `npm install` once for the adm-zip dependency used to unpack the nupkg)
npm install
node update-apidocs.mjs
```

| Flag | Meaning |
| --- | --- |
| `--no-enhancement` | Skip the Archetype-N overview injection that otherwise runs after DocFX. |
| `--enhance-force` | Regenerate cached overviews (`POLISHED_PRESERVED` entries are still preserved). |
| `--provider claude\|openai` | Force the LLM provider (default: auto-detect by API key). |
| `--model <id>` | Override the LLM model. |
| `--code <code>` | Only build/enhance this product. |
| `--version <v>` | Only build/enhance this version. |

> [!IMPORTANT]
> **Generation must run on Linux or WSL (native filesystem), not native Windows.** DocFX emits
> file names containing `<…>` GUID markers, which are illegal in Windows file names and abort the
> build at write time — see [`docs/windows-docfx-guid-limitation.md`](docs/windows-docfx-guid-limitation.md).
> Windows operators who want to generate locally can do so via WSL:
> [`docs/running-generation-in-wsl.md`](docs/running-generation-in-wsl.md).
> The version-inspection tooling (`check-apidocs`) runs fine on any platform.

### Archetype-N API-overview enhancement

After DocFX generates a .NET product's `…/object-reference/api/` pages, `update-apidocs` injects a short, task-led SEO overview into each class-reference page (prose + three meta-title/description variants + `TechArticle`/`FAQPage` JSON-LD), placed below the class summary and above the member tables, wrapped in `<!-- archetype-N:start … -->` / `<!-- archetype-N:end -->` sentinels (idempotent). This is on by default; pass `--no-enhancement` to skip it.

The capability is self-contained under `scaffolds/tools/archetype-n/` — no dependency on Claude Code or the ore-foundry plugin. It exists as two equivalent ports (Python for `update-apidocs.py`, native JS for `update-apidocs.mjs`) whose injector/validator output is byte-identical. The LLM prompts are externalized to `scaffolds/tools/archetype-n/spec/prompts.md` (a single source of truth both ports load), so they are edited in one place.

How a page is enhanced:

1. **Route** the page to a treatment from its DocFX declaration — `full` (rich classes/interfaces), `mid` (thin types), or `lite` (enums/exceptions/delegates).
2. **Reuse** the cached overview at `scaffolds/tools/archetype-n/_generated_/<code>/<FQN>.md` if present (token-free); otherwise **author** one with an LLM and **self-validate** it against the injector's HARD gates, retrying with the gate feedback until it passes.
3. **Inject** the validated overview into the page.

The per-product cache (committed, with a `_manifest.json`) makes steady-state rebuilds make zero LLM calls. `--enhance-force` regenerates entries except human-authored ones marked `POLISHED_PRESERVED`. Seed the cache from existing authored samples with `python scaffolds/tools/archetype-n/seed_cache.py --all`. Each tool can also be run standalone (`enhance.py`/`enhance.mjs`, `seed_cache.py`/`seed-cache.mjs`, `inject_archetype_n.py`/`inject_archetype_n.mjs`).

**API keys:** generation reads `CLAUDE_API_KEY` (preferred) or `OPENAI_API_KEY` from the environment or a `.env` file at the repo root (gitignored; see `.env-example`). With no key set, the build still injects every cached page and only warns about pages it could not author.

## Dependencies

- **Python**: `requests`, `colorama` (`pip install requests colorama`).
- **Node.js**: `adm-zip` (`npm install`) — only needed by `update-apidocs.mjs` for nupkg extraction; `check-apidocs.mjs` and `apidocs.mjs` are dependency-free.
- **Generation only**: the DocFX + JDK toolchain under `scaffolds/tools/` (Git LFS), plus `mono` on Linux to run DocFX.
- **Archetype-N enhancement**: stdlib-only (Python) / native (Node `>=18`, global `fetch`); no extra packages. An LLM API key is only needed to author pages not already in the cache.
