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

.NET products are built with DocFX from their NuGet package; IronPDF-for-Java from its published JavaDoc jar. Each build is post-processed (GUID-marker stripping, canonical-link tags) and cached.

```bash
# Python
python update-apidocs.py
# Node (run `npm install` once for the adm-zip dependency used to unpack the nupkg)
npm install
node update-apidocs.mjs
```

> [!IMPORTANT]
> **Generation must run on Linux or WSL (native filesystem), not native Windows.** DocFX emits
> file names containing `<…>` GUID markers, which are illegal in Windows file names and abort the
> build at write time — see [`docs/windows-docfx-guid-limitation.md`](docs/windows-docfx-guid-limitation.md).
> Windows operators who want to generate locally can do so via WSL:
> [`docs/running-generation-in-wsl.md`](docs/running-generation-in-wsl.md).
> The version-inspection tooling (`check-apidocs`) runs fine on any platform.

## Dependencies

- **Python**: `requests`, `colorama` (`pip install requests colorama`).
- **Node.js**: `adm-zip` (`npm install`) — only needed by `update-apidocs.mjs` for nupkg extraction; `check-apidocs.mjs` and `apidocs.mjs` are dependency-free.
- **Generation only**: the DocFX + JDK toolchain under `scaffolds/tools/` (Git LFS), plus `mono` on Linux to run DocFX.
