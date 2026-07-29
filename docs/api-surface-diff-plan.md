# API Surface Diff (`diff-apidocs`)

## Context

This repo holds **469 built .NET version directories** across 11 products under
`object-reference/<code>/<version>/`, but until now there was no way to answer *"what changed in the
public API between version X and Y?"* — support, docs, and release-notes work all did it by eye.

Everything needed to answer it offline is already committed. `diff-apidocs` turns that latent data
into a signature-level diff with breaking-change classification.

## Source evaluation

Three candidate sources were evaluated against the archive before any code was written:

| Source | Offline | What it actually provides |
| --- | --- | --- |
| `xrefmap.yml` | yes — all 469 dirs | `uid`, `commentId` kind (`N:`/`T:`/`M:`/`P:`/`F:`/`E:`), **parameter** types. No return types, modifiers, or base types |
| `api/*.html` `lang-csharp` blocks | yes — same coverage | **modifiers, return types, base types + interfaces, default parameter values, accessors** |
| `{PackageName}.xml` inside the nupkg | no — network per version | doc **prose** only; its `<member name="M:...">` keys are the same identity as `commentId` |

The `.xml` route is **strictly weaker than both committed sources** for signature diffing — it adds
prose, not signatures — and would have made the tool network-dependent. It is not used.

The tool therefore combines the first two: xrefmap for identity, HTML declarations for signatures.

## The join key

DocFX writes `data-uid` on each member heading, byte-identical to the xrefmap `uid`:

```html
<h4 id="IronZip_IronZipArchive_Contains_System_String_"
    data-uid="IronZip.IronZipArchive.Contains(System.String)">Contains(String)</h4>
<h5 class="decalaration">Declaration</h5>          <!-- DocFX's own typo -->
<div class="codewrapper">
  <pre><code class="lang-csharp hljs">public bool Contains(string EntryName)</code></pre>
</div>
```

No href or anchor demangling is needed. The type's own declaration hangs off its `<h1 data-uid>`.
This layout was verified unchanged from the oldest archived pages (`irondrawing/2022.9.8843`) to the
newest.

> [!IMPORTANT]
> **Anchoring to `data-uid` is a correctness requirement, not a style preference.** Archetype-N
> injects runnable *code samples* into these same pages, so a flat scan for `lang-csharp` blocks —
> the approach in `scaffolds/tools/archetype-n/facts.py` — reports `using IronZip;` as a member.
> `apidiff/declarations.py` additionally strips `<!-- archetype-N:start … -->` … `<!-- archetype-N:end -->`
> regions before parsing. A regression check for this is listed under Verification.

## Locked decisions

| Decision | Choice |
| --- | --- |
| Sources | Hybrid — xrefmap identity + HTML declarations |
| Output | CLI text, JSON, and Markdown |
| Semantics | Classify BREAKING / ADDITIVE / COSMETIC |
| Version pairs | Arbitrary `--from`/`--to`; default newest vs previous |
| Java (`ironpdfjava`) | Out of scope; exits with a clear message |
| Ports | Python and Node, per the repo's dual-port rule |
| Location | Repo root, peer to `check-apidocs`; modules under `apidiff/` |
| Filtering | Internal namespaces + public surface by default; `--namespace`/`--exclude` globs |
| Artifacts | `docs/api-diffs/<code>/<from>..<to>.{json,md}` |
| Missing version | Error listing nearest archived versions; no network, no build |
| Python deps | Stdlib only (plus `colorama` via `StatusLogger`) |
| Exit codes | 0 success, 1 tool error, 2 breaking with `--fail-on-breaking` |

**No cache layer.** Measured page counts are ironpdf 341, ironocr 124, ironxl 75, ironzip 13; a full
two-version ironpdf diff runs in **0.95 s**. A cache would have been unjustified complexity.

## Architecture

```
diff-apidocs.py / diff-apidocs.mjs     CLI entry points
apidiff/
  archive        product + version-pair resolution, nearest-match errors   (archive.py/.mjs)
  xrefmap        stdlib line parser for xrefmap.yml                        (xrefmap.py/.mjs)
  declarations   data-uid-anchored HTML declaration extraction             (declarations.py/.mjs)
  surface        assembles the two layers into a Surface                   (surface.py/.mjs)
  csharp         small C# declaration reader                               (csharp.py/.mjs)
  classify       diff + BREAKING/ADDITIVE/COSMETIC rules                   (classify.py/.mjs)
  filters        BLOCK_NS, visibility, glob filters                        (filters.py/.mjs)
  model          shared records                                            (model.py/.mjs)
  render_text / render_json / render_markdown                              (+ .mjs ports)
```

Version discovery lives in the shared helpers so both tools use one implementation:
`apidocs.list_archived_versions()` / `listArchivedVersions()` and `version_sort_key()` /
`versionSortKey()`. Directory existence is the entire version index — there is no manifest — and the
sort handles both numbering eras (`2021.9.3650`, `2019.3.2.1`, `2026.6.1`) plus the
`_archetype-n-samples` sibling directory that is not a version.

### Classification

Because a uid encodes parameter *types*, a parameter-type change or a new overload always surfaces as
a removal plus an addition, never a modification (the report notes the pairing). A `changed` delta is
therefore specifically about return type, modifiers, accessors, parameter names, parameter defaults,
and base types — precisely the things only the HTML declarations reveal.

`classify.MODIFIER_RULES` is an explicit table over every modifier that occurs in the archive, so
common changes are *explained* rather than falling through to a generic verdict. Notable rulings:

- `readonly` added → breaking (assignment no longer permitted)
- `const` added *or* removed → breaking (a const is inlined into the consumer's assembly)
- `static` added *or* removed → breaking (call syntax changes either way)
- field ↔ property conversion → breaking (same uid, but they compile differently)
- parameter *rename* → cosmetic (only breaks named-argument callers)
- `override`, `async`, `new`, `partial`, `extern`, `unsafe`, `volatile` → cosmetic

Anything unexplained falls back to breaking with the raw before/after shown. Across all 11 products
diffed oldest-to-newest, that fallback fires **zero** times.

## Verification

There is no test framework or CI in this repo, so verification is the documented golden-corpus
procedure below. All of it was run and passed.

**Correctness**

1. `ironzip 2026.5.2 → 2026.6.2` — 13 pages, verified by hand: 9 types, 109 members, declarations
   attached, no changes (a genuine no-op patch release).
2. **Archetype-N leak guard** — assert no member of `IronZip.IronZipArchive` has a declaration
   containing `using ` or `var `. This is the bug a flat `lang-csharp` scan would ship.
3. **Cross-era** — `irondrawing 2022.9.8843 → 2026.4.1` parses the oldest archived template.
4. **Scale** — `ironpdf` newest-vs-previous: 341 pages/version in 0.95 s.
5. **Classification coverage** — diff all 11 products oldest-to-newest and assert zero
   `declaration changed` fallbacks.
6. **Filter completeness** — `--namespace G` and `--exclude G` summaries must sum to the unfiltered
   summary (verified on ironpdf/`IronPdf.Rendering.*`: 22+152=174 breaking, 4+578=582 additive).

**Negative paths**

7. Unknown product, missing version (nearest-match message), `-p ironpdfjava`, no product given, and
   `--from == --to` all exit 1. `--fail-on-breaking` exits 2 with breaking changes and 0 without.

**Parity gate (blocking, per the dual-port rule)**

8. `63/63` checks passed: 7 products × 3 version spans × 3 flag combinations, comparing exit code,
   normalised stdout, and **byte-identical JSON**.

**Real-world run — the 2026 release chains**

9. 74 diffs were generated across all 11 products (every consecutive 2026 pair plus a cumulative
   year diff each) and committed under `docs/api-diffs/`. Two results independently validate the
   classifier:
   - **IronQR nets to zero cumulatively** despite non-zero steps: `IQrInput`/`QrImageInput` lost
     `IDisposable` in 2026.1.1 and had it restored in 2026.1.2 — a real accidental breaking change
     that shipped and was hotfixed. A sum-of-steps tool would wrongly report 2 breaking for the year.
   - **IronWord's 218 breaking changes in 2026.1.4** decompose into a genuine refactor: 13 members
     changed `bool` → `Nullable<bool>`, 10 lost their `set` accessor, 9 dropped `IDocumentElement`,
     concentrated in `IronWord.Models`.

> [!NOTE]
> stdout is compared after whitespace normalisation because `statuslogger.py` and `statuslogger.mjs`
> already differ in spacing — `print(f"{Fore.RED}", message, …)` inserts spaces around the message,
> while the Node template literal does not. That is a **pre-existing** divergence affecting every tool
> in the repo, not something this tool introduced, and was left alone rather than changing output the
> devops pipeline may already parse. JSON, which this tool fully controls, is byte-identical.

## Where each fact is read from, and why

The declaration line is **not** a single source of truth. Two facts have a better source, and using
the declaration for them produces large volumes of false breaking changes.

### Interfaces come from the Implements section, not the declaration

Between the 2026.6 and 2026.7 builds DocFX **stopped inlining interfaces in the declaration line**:

```
2026.6.2  Implements: System.IDisposable
          decl:       public class IronZipArchive : IronBaseArchive, IDisposable
2026.7.2  Implements: System.IDisposable          <- unchanged
          decl:       public class IronZipArchive : IronBaseArchive
```

Nothing about the API changed. The `Implements` section is byte-identical across the two builds for
every affected type; only the rendering of the syntax string changed. Read from the declaration, this
reported **183 breaking changes across 11 products**; read from `Implements`, it reports **21** — and
those 21 are IronWord's genuinely removed types, corroborated independently against the raw archive.

So `apidiff/declarations.parse_implements` reads the `Implements` block, `_implements_reasons`
compares it, and `_base_reasons` compares only the base *class* from the declaration.

**Interface pages have no Implements section** (verified: `IronQr.IQrInput` in both builds), and
neither do a few classes such as `IronSoftware.Deployment.SmartDeploymentBase`. For those there is no
authoritative source, so an interface-shaped base-list difference is reported as **cosmetic** with an
explicit "unverifiable" note rather than counted as breaking. That is a deliberate trade: it can
under-report a real interface removal on an interface type, which is preferable to re-reporting a
rendering change as ~160 breaking changes. The alternative — trusting the declaration — was measured
and is far worse.

> [!NOTE]
> The `.xml` documentation file shipped inside each nupkg cannot help here and is not used. DocFX
> takes metadata from the **assembly** (`"files": ["bin/IronZip/lib/netstandard2.0/IronZip.dll"]` in
> `scaffolds/docfx.ironzip.json`); the `.xml` supplies only doc-comment prose and has no
> representation of base types or interfaces at all.

## Build-nondeterminism artifacts

Two things in the generated docs change on **every build** without the API changing. Both would
otherwise produce permanent false-positive breaking changes in every diff, so both are normalised.

### DocFX `<GUID>` markers — normalised in the tool

DocFX emits `<8e7c…-…>` markers on some vendored/unresolvable types and mints a **fresh GUID each
build**. Counts in the newest archived builds: **ironpdf 745 uids, ironword 663, ironocr 68,
ironxl 2**. IronXL's two are `NPOI.SS.UserModel.<GUID>ConditionType` operators on
`IronXL.Formatting.ConditionType`, which is not in `BLOCK_NS` — so IronXL reported a phantom
`2 breaking, 2 additive` in *every* release before this was handled.

`apidiff/xrefmap` strips the marker from every parsed scalar and `apidiff/declarations` strips it
from `data-uid` values and declarations, so both sides of the join normalise identically. The regex
matches the canonical one in `update-apidocs` (`GUID_MARKER_RE`) plus the URL-encoded `%3C…%3E` form
that appears in hrefs.

Stripping — rather than substituting a placeholder — is deliberate: it is what
`strip_guid_markers()` already does to the generated file names, so a stripped uid also matches the
page actually on disk (`Org.BouncyCastle.Asn1.<GUID>Asn1Encodable` →
`Org.BouncyCastle.Asn1.Asn1Encodable.html`). Those types now resolve their declarations instead of
falling back to identity-only.

### Obfuscated `Iron.Pdf.Extensions` types — excluded at three levels

That namespace contains **only** obfuscator-generated types, renamed randomly every build:

| 2025.12.2 | 2026.1.3 | 2026.2.1 | 2026.3.1 | 2026.4.1 | 2026.5.2 | 2026.6.1 | 2026.7.2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `auxkyk` `auxkyl` | `kjmakb` `kjmakc` | `mhdavw` `mhdavx` | `qkluyp` `qkluyq` | `iuvaho` `iuvahp` | `tgolzr` `tgolzs` | `bnubqp` `bnubqq` | `qdygyt` `qdygyu` |

IronPDF is the only affected product. `scaffolds/filterConfig.yml` gained
`uidRegex: ^Iron\.Pdf\.Extensions.*$` so builds that pick that change up stop publishing them
(idiomatic there — it already excludes `^IronPdfEngine.Proto$` and similar). That does not help the
archive: every already-built version still contains them, and a build that predates or misses the
config change will contain them too. The tool therefore treats the noise as permanent and suppresses
it in three distinct places, because the obfuscated name reaches the diff by three different routes:

1. **As a type.** `BLOCK_NS` in `apidiff/filters` matches `Iron\.Pdf\.Extensions\b`. Deliberately
   unanchored — the anchored form only matched at position 0 and so missed routes 2 and 3. The
   literal dots keep it from colliding with the legitimate `IronPdf.Extensions` namespace (no dot
   between `Iron` and `Pdf`), which is retained along with `IronPdf.Extensions.ConversionExtensions`.
2. **As a parameter type.** A member uid embeds fully-qualified parameter types, e.g.
   `LicensingException.#ctor(Iron.Pdf.Extensions.qdygyt)`, so `SurfaceFilter.allows_member` applies
   `BLOCK_NS` to the whole uid rather than only the owning type. This also correctly drops members
   whose parameters come from any other blocked namespace — they are not usable public surface,
   since the parameter type itself is undocumented.
3. **As a base type.** `IronSoftware.Deployment.BaseVersionFactory` *implements* an obfuscated
   interface, and DocFX renders base types by **simple name** (`qdygyu`), so no namespace pattern can
   recognise it there. `Surface.blocked_type_names` therefore records the simple names of every
   filtered-out type, and the classifier ignores base-list entries naming one.

Route 3 needs a subtlety: `compare_declarations` checks for blocked-name-only differences *before*
running the rules, not after. Filtering them out of the reasons list afterwards would leave the list
empty, which trips the generic "declaration changed" fallback — turning a suppressed artifact back
into a reported breaking change.

## Known limitations

- **Only DocFX (.NET) products.** `ironpdfjava` is JavaDoc with no xrefmap; the adapter seam exists
  (`SUPPORTED_PACKAGE_TYPES` in `apidiff/archive`) but no JavaDoc reader is implemented. Its
  `member-search-index.js` and `element-list` would be the equivalent identity source.
- **Private Use Area uids.** Three uids in `ironpdf 2023.11.7` carry DocFX's PUA markers for
  unresolvable type parameters (U+E000, U+E396, U+E397). They render as invisible characters. The
  Python entry point forces UTF-8 on stdout/stderr so a legacy cp1252 Windows console cannot abort
  the run with `UnicodeEncodeError`.
- **Not a C# parser.** `apidiff/csharp` reads only what the classifier compares and tolerates the
  rest, falling back to raw string comparison.
- **Interface changes on interface types are not verifiable.** Interface pages carry no Implements
  section, so a change there is reported as cosmetic rather than breaking. See the section above.
- **Set iteration order must never reach a result.** `_without_blocked` removes names longest-first;
  iterating the set unsorted made output depend on `PYTHONHASHSEED`, so the same diff produced
  different counts on consecutive runs. Any future set-driven text rewriting needs the same care.
- **`--all-visibility` is currently a no-op** on the archive, because DocFX's `filterConfig.yml`
  already restricts generated output to the public surface. It is kept as a safety net.
