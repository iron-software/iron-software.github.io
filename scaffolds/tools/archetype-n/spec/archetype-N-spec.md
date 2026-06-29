# Archetype N: API Class Overview

**Version:** 1.2.4
**Status:** Implementation-validated on IronPDF (197/197 in-scope pages treated); CTO-reframe + opener-variety + content-editor de-repetition pass folded in. **N-Mid tier added (v1.2.4) and validated on the IronPrint cross-product pilot.**
**Type:** Fragment archetype (injected block, not a standalone article)
**Pipeline:** CElevator / AuthORE archetype, executed through the OreFoundry batch system
**Relationship to existing specs:** Standalone addendum to `tutorial-archetype-templates.md` (Archetypes A–M). Reuses OreFoundry v1.2 batch processing, the OreFoundry v1.3 claim-verifier, FeLynx linking, the Syndicator forbidden-pattern list, and Step 16 metadata generation from `article-improvement-prompt-v2.1`. Does **not** inherit the tutorial shared conventions (quickstart, TOC, CTA blocks) — see Injection Contract.

**Changelog**
- **v1.2.4 (2026-06-22):** **N-Mid tier + cross-product generalization**, surfaced by the IronPrint pilot (first non-IronPDF product, spec Phase 9). (1) Adds the **N-Mid** treatment (§4A) for thin-but-not-lite types — static classes, value-type structs, and small classes/interfaces that draft naturally under the N-Full 250-word floor. A prevalence scan found these are ~44% of N-Full pages across the 9 remaining products (ironqr 77%, ironbarcode/ironocr/ironwebscraper ~55%, ironppt/ironword interface-heavy), so padding them to 250 would mass-produce the space-filling P19 exists to catch. N-Mid: prose 150–250, code 0–1, links 2–3, FAQ 1–2; keeps the P17 task-led opener, the §4.5 structural-orientation FAQ, and P21 code brevity; relaxes interface inherited-member triage to optional. Routing (§2.2): a full-eligible type auto-routes to N-Mid when member count ≤ 6 (≤ 12 for value-type structs); `--treatment` overrides per page. (2) **Generalized the injector off IronPDF**: JSON-LD product name/url parameterized (`--product`/`--product-url`, auto-derived from the `object-reference/<slug>/` path), internal-link regex matches any `iron*.com`/`ironsoftware.com` host, page namespace root added to known roots, `Nullable` added to BCL types. (3) **Fixed an N-Lite parse bug** that would have crashed every N-Lite page for every product: `_extract_blockquote` required a trailing newline after the final `>` line, but the TechArticle abstract is the last (stripped) section in every N-Lite sample. Per-product inputs: `--base-url` from the page's own `<link rel="canonical">`; for non-IronPDF products that is `https://ironsoftware.com/csharp/{product}/object-reference/api/`.
- **v1.2.3 (2026-06-17):** Content-editor de-repetition pass. The head content writer reviewed the live corpus and flagged "major repetition and space-filling" plus over-long code examples (PdfDocument in particular). The corpus scan (`analyze_ai_patterns.py`, new) confirmed: em dashes already at 0; the repetition concentrated in (a) the closing-funnel sentence ("{X} how-to covers the {Y} workflow end to end" on ~80 pages), (b) verbatim boilerplate reuse across generated exception lites (the namespace/base clause 7×, the `Message`/`InnerException` hint 15×, the troubleshooting funnel 8×), (c) the identical structural-orientation FAQ question on 127/129 N-Full pages, and (d) per-page restatement of the lead. Adds §7 **P19** (no intra-page restatement), **P20** (closing-funnel variety, corpus cap), **P21** (code-example brevity — one focused scenario, ≤ 12 lines target / 24 HARD ceiling, declaration-form `using`). §12 promotes the multi-scenario code block to a HARD gate (exit code 6, `--skip-v123-checks`) and adds P19/P20 soft entries. §4.5 structural FAQ question now rotates across a four-phrasing pool (every member passes the existing validator). Tooling: `inject_archetype_n.py` `_extract_meta_variants` now strips stray backticks (fixes 14 meta descriptions that shipped wrapped in `` ` `…` ` `` from double-backtick source spans) and gained the P21 brevity validator; `generate_samples.py` rotates the exception-lite boilerplate and the structural-FAQ phrasing by a stable hash of the class name. The 126 live handcrafts were de-repeated and their multi-scenario code trimmed; all 197 pages re-injected and re-scanned.
- **v1.2.2 (2026-06-04):** Opener-variety pass. After the v1.2.1 reframe ~80% of N-Full leads opened with the same "Use `X`…" frame — task-led but templated. Adds the §7 **P18 opener-variety** rule (six approved frames; imperative capped at ~25%; abstract differs from its own lead; sibling families must not share a frame) and §17.6 documenting the templating trap. The 126 live handcraft leads were redistributed across the six frames (imperative-lead share 80% → 5%); `generate_samples.py` now rotates the generated baseline opener by a stable hash of the class name. The injector's HARD gate is unchanged (P18 is a corpus-level SOFT rule, not a per-page block).
- **v1.2.1 (2026-06-03):** CTO-feedback reframe — the v1.2 blocks read as too dry and too API-structural. Renames and reorders the §4.2 prose sections from What / Why-When / How to **What it does for you / How it fits / Working with it** (task-led, not API-structural). Adds §4.4 (prose source hierarchy: the how-to/examples in `doc_reference_urls` are authoritative for tone, framing, and code; the live reference page is authoritative for API names). Adds §4.5 (required structural-orientation FAQ entry — namespace / assembly / base type move here on every N-Full page). Adds the §7 "no structural opener" rule (P17) and promotes both it and the structural-orientation FAQ to HARD §12 checks. Updates the §4.3 template config (section ids, `faq_required_entries`, `no_structural_opener`, version → 1.2.0). The four demo samples (PdfDocument, HtmlHeaderFooter, IFormField, PdfPaperSize) are bumped to match. Interface sub-variant rules unchanged per CTO.
- **v1.2.0 (2026-05-31):** Implementation-validated rev. Folds in 16 spec adjustments (P1–P16) and 15 source-material patterns (S1–S15) surfaced across the Tier 1 + Tier 2 + Tier 3 N-Full handcraft passes (129 pages, 17 agent batches, ~120 distinct source-material bugs caught) and the N-Lite quality pass (65 pages, 7 polish batches). New §6.5 catalogs S-patterns. §6 hardens cross-class round-trip and adds generic-arity / namespace-from-URL / API-casing preservation rules. §7 adds member-salience and mail-merge-HTML encoding guardrails. §12 promotes round-trip-by-name and the brief-speculation guard to HARD. §15 marks Phases 2–5 complete and adds Phase 6 (N-Lite quality pass) and Phase 7 (spec fold-back). New §17 documents lessons learned, mapping S→P.
- **v1.1.0 (2026-05-29):** Folds in findings from the IFormField interface sample and the PdfDocument cross-class verification. Tightens the interface sub-variant with required inherited-member triage, required named implementors, and required FAQ shape. Promotes the forbidden-pattern scan to a Phase 5 hard gate. Adds a cross-class verification rule.
- **v1.0.0 (2026-05-29):** Initial spec.

---

## 1. Strategic premise (why this archetype is shaped the way it is)

This archetype injects a short overview block into docfx-generated API class reference pages under `/object-reference/api/`. The shape of the archetype is dictated by what the prioritization run (DataForSEO + live SERP + docfx type confirmation, 2026-05-28) actually established, which differs from the original brief's assumptions.

**v1.2 implementation note:** the 197 in-scope IronPDF pages have been treated end-to-end (129 N-Full handcrafted across Tier 1+2+3; 65 N-Lite generated programmatically and polished per-page; 3 marginal cases manually reviewed). The findings from that implementation pass are folded into this revision; §6.5 and §17 are the principal new content.

1. **The pages already rank.** All sampled flagship class pages rank #1 for their class-name query. The objective is **not** "make them rank."
2. **Per-page search demand is unmeasurable.** Only three class-name queries across the entire namespace exceeded DataForSEO's volume floor. Class-name queries are ultra-long-tail branded navigational searches: real intent, sub-threshold volume.
3. **Therefore the value is not ranking position.** The defensible value drivers, in priority order, are:
   - **Snippet / CTR control** on the handful of pages with measurable traffic (docfx auto-snippets currently surface a single method or constructor, not the class).
   - **AI Overview / LLM citation** — clean prose + code + FAQ is citable where raw member tables are not. This never appears in keyword-volume data and is plausibly the largest forward-looking lever, consistent with Iron's `llms.txt` investment.
   - **Topical authority + funnel** — well-linked overviews feed the how-to/example pages, which *do* carry traffic. API pages act as link-equity feeders, not destinations.
   - **Developer experience** — the CTO's stated second goal, independent of SEO.

**Consequences encoded into this archetype:**
- **No per-page keyword-research phase.** There is nothing to research per page; the primary keyword is the class name. (Reverses original-brief Note 1.)
- **Cannibalization count is not a scoring signal.** On a zero-volume query it reflects how many doc pages mention the class name, not a real traffic split.
- **Centrality (doc-reference count) is the demand proxy** used for prioritization.
- **Funnel, do not compete.** Overviews target class-name intent and route problem intent to the how-to/examples pages. They must not try to fully answer problem-intent queries those pages own.

---

## 2. Scope and treatment routing

**Universe:** 377 HTML files → 303 type pages → **197 in-scope** after the scope filter. Scope and type are locked from the 2026-05-28 confirmation passes.

### 2.1 Scope filter (out-of-scope = no treatment)

A page is out of scope if **any** apply:
- **Namespace blocklist:** `IronSoftware.Pdfium`, `Org.BouncyCastle.*`, `IronPdf.GrpcLayer`, or any namespace matching `*.Internal`, `*Interop*`, `*grpc*`.
- **Helper/result type** with no developer search intent (parser/token/result types: `CssToken`, `BlockExtractionResult`, `ChromeClientAccessor`, and similar).
- **No doc reference** AND not a developer-facing entry type.

### 2.2 Treatment routing (the locked full/lite split)

Treatment follows **semantics, not the CLR declaration.** docfx reports IronPDF's type-safe enums as `class` (they are declared `public sealed class X : Enum`); for content purposes they are enumerations and receive lite treatment. This override is the single most important routing rule in the archetype.

```
treatment = LITE  if  is_enum_pattern (base_type == "Enum")   # 50 pages
                  OR  is_exception (System.Exception in chain)  # 16 pages
                  OR  type_kind == "delegate"                   # 2 pages
treatment = MID   elif full-eligible AND thin                   # see N-Mid rule
                  (member_count <= 6, OR value-struct <= 12)     #   (v1.2.4)
treatment = FULL  otherwise                                     # 129 pages (IronPDF)
                  (107 classes + 22 interfaces)
```

The IronPDF counts below predate the N-Mid tier (v1.2.4): IronPDF was authored entirely
as N-Full + N-Lite. From IronPrint onward, full-eligible types split into N-Full and N-Mid:

| Treatment | IronPDF count | Composition |
|---|---|---|
| **N-Full** | 129 | 107 classes + 22 interfaces (rich surfaces) |
| **N-Mid** (v1.2.4) | — | thin classes/interfaces/static classes/value-structs (see §4A) |
| **N-Lite** | 68 | 50 enum-pattern + 16 exception + 2 delegate |

`is_enum_pattern` remains a per-page flag; flipping a specific type-safe enum back to FULL is a one-field override if stakeholders want richer pages for high-reference enums. Likewise the N-Mid/N-Full split is a per-page `--treatment` override on top of the member-count default (§4A).

**Manual-review flag:** `ExceptionHelper` (`IronSoftware.Exceptions`, static helper, base `Object`) resolves to FULL but reads as an internal utility. Human glance before generation; low stakes (1 page).

---

## 3. Injection contract (shared by N-Full and N-Lite)

The block is injected into a page docfx already rendered. These rules are non-negotiable and apply to both variants.

- **Placement:** below the docfx-generated class summary, above the member tables (Constructors / Fields / Properties / Methods).
- **No H1.** The page already owns the single H1 (`Class {Name}`). The block starts at **H2** or as a lead paragraph. A second H1 is a hard validation failure.
- **Heading depth:** H2 maximum for any block heading; H3 only inside N-Full where genuinely needed. Block headings must not collide with docfx's own section headings ("Constructors", "Properties", etc.).
- **Word budgets exclude code.** Code blocks never count toward prose word counts.
- **Output format:** governed by `FORMAT` input (default HTML; Markdown on request). **Open dependency** — see §12: the injection mechanism (docfx template/partial vs. post-build merge vs. plugin) determines the authored format and whether doc regeneration preserves the block. Resolve before bulk generation.
- **Idempotency:** re-running the archetype on a page replaces its prior injected block, never appends. The block is delimited by stable sentinel comments (`<!-- archetype-N:start {class} -->` / `<!-- archetype-N:end -->`) so a post-build merge can find and replace it.

---

## 4. Archetype N-Full

For true classes and interfaces. Produces the overview that makes the page citable and useful, and funnels to task-intent pages.

### 4.1 Profile

| Attribute | Value |
|---|---|
| Prose word count | 250–500 (excluding code), target 300–420 |
| Code examples | 1–2 (classes); interfaces: 0–1, implementor-oriented |
| Internal links | 3–5 (funnel set), via FeLynx |
| Headings | H2 lead optional; no H1; H3 only if multi-aspect |
| FAQ | 2–4 entries (FAQPage schema) |
| Structured data | TechArticle + SoftwareSourceCode + FAQPage |
| Persona | Iron Software technical writer; third person; reference register |

### 4.2 Section definitions (ordered)

The three prose sections are framed around **what the developer does with the type, not how the API is organized.** Structural facts (namespace, base type, assembly, implemented interfaces) do **not** open the block — they live in the required structural-orientation FAQ entry (§4.5), and the lead obeys the "no structural opener" rule (§7).

1. **What it does for you** — the task the developer accomplishes with this type, stated in the first sentence. The problem it solves, the feature it powers (branded headers, form filling, page sizing), and the nearest sibling it is confused with (the disambiguation the FAQ also resolves). Must **not** open with "`X` is in the `Y` namespace" or "`X` derives from `Z`". 2–4 sentences.
2. **How it fits** — where the type sits in a real workflow: how a developer obtains or attaches it (assigned to `RenderingOptions.HtmlHeader`, returned by `FindFormField`, produced by `RenderHtmlAsPdf`), and which step of the render → edit → save sequence it belongs to. Concrete and task-led, not an abstract statement of purpose. 2–4 sentences.
3. **Working with it** — correct usage: the key properties/methods a developer sets, important constraints (units, platform limits, disposal, standalone-document behavior). Leads into the code example with a funnel link. 3–6 sentences.
4. **Code example(s)** — 1–2 runnable, minimal, correct examples. Verified API surface only (see §6). Excluded from word count.
5. **Closing funnel** — soft pointer to the how-to/examples pages for task intent. No sales push.

**Interface sub-variant.** Validated against the `IFormField` sample (2026-05-29). Three rules apply in addition to the general N-Full structure, all hard-required:

1. **Contract/implementor framing.** Replace instantiation framing ("create a `new X()`") with contract framing (what the interface represents, where a developer receives it). The code example, if present, shows usage of a concrete implementor or the interface as a return type / parameter type — never `new X()`.
2. **Named implementors (required, ≥ 2).** The prose must name at least two concrete implementors. For a developer landing on `IFormField` from a search like "C# PDF form field interface", the answer to "what implements this?" is asymmetrically valuable and must appear before any inherited-member discussion. Hard validation check.
3. **Inherited-member triage (required, 2–4 members).** Because interface members are usually almost entirely inherited and docfx tabulates them without weighting, the "Working with it" section must name 2–4 inherited members that carry the everyday usage (e.g. `Value`, `Name`, `ReadOnly` for `IFormField`). docfx will not communicate this; the overview must.

**Interface FAQ shape.** The FAQ entries are not free-form. For interfaces, at least one entry **must** answer "What implements this in IronPDF?" — it is the highest-value class-name long-tail and the question docfx never answers. A second high-value shape is the disambiguation against the parent interface in the inheritance chain (e.g. `IFormField` vs `IFormFieldObject`); include this when an obvious parent confusion exists.

### 4.3 Template configuration

```php
<?php
// config/outlines/templates/fragment--api-class-overview-full.php

return [
    'type' => 'fragment',
    'archetype' => 'api-class-overview-full',
    'name' => 'API Class Overview (Full)',
    'version' => '1.2.0',
    'inherits_shared' => false,            // NOT a tutorial; no quickstart/TOC/CTA

    'constraints' => [
        'prose_word_count' => ['min' => 250, 'max' => 500, 'target' => [300, 420]],
        'code_blocks'      => ['min' => 1, 'max' => 2],   // interface: min 0
        'internal_links'   => ['min' => 3, 'max' => 5],
        'faq_entries'      => ['min' => 2, 'max' => 4],
        'faq_required_entries' => ['structural_orientation'], // HARD; all N-Full (§4.5)
        'no_structural_opener' => true,                   // HARD; lead is task-led (§7)
        'h1_count'         => ['exact' => 0],             // HARD
        'quality_threshold'=> 0.85,
    ],

    'sections' => [
        ['id' => 'what_it_does_for_you', 'words' => [40, 110], 'no_structural_opener' => true],
        ['id' => 'how_it_fits',          'words' => [40, 110]],
        ['id' => 'working_with_it',      'words' => [60, 160], 'leads_into' => 'code'],
        ['id' => 'code',                 'excluded_from_wordcount' => true],
        ['id' => 'closing_funnel',       'words' => [25, 70]],
    ],

    'interface_variant' => [
        'framing'              => 'contract_implementor',  // not instantiation; HARD
        'code_blocks'          => ['min' => 0, 'max' => 1],
        'named_implementors'   => ['min' => 2],            // HARD; named in prose
        'inherited_triage'     => ['min' => 2, 'max' => 4],// HARD; named in 'working_with_it'
        'faq_required_entries' => [
            'structural_orientation',                       // HARD; all N-Full (§4.5)
            'what_implements_this',                         // HARD for interfaces
            'parent_disambiguation',                        // soft; include if obvious parent confusion
        ],
    ],

    'schema' => ['TechArticle', 'SoftwareSourceCode', 'FAQPage'],
];
```

### 4.4 Prose source hierarchy (dual-source rule)

Archetype N draws from two sources with **different authority over different things.** Conflating them is what produced the dry, API-structural prose the v1.2.1 reframe corrects.

| Source | Authoritative for | NOT authoritative for |
|---|---|---|
| **How-to / examples / tutorials** named in the page's `doc_reference_urls` | **Tone, framing, and code examples.** The task-led voice ("to fill a form field, find it by name and assign to `Value`"), the scenarios worth leading with, and the shape of the runnable snippet are taken from these pages. | API names, signatures, member existence, casing, namespace. |
| **The live docfx reference page** (the page being annotated) | **Correctness of every API name** — class, namespace, base type, members, signatures, casing, generic arity (§6). | Tone and framing. The docfx summary is frequently dry, marketing-toned, or method-level (S3); it is never the model for prose voice. |

The rule: **read the how-to first for voice and framing, then verify every name against the reference page.** A writer who works only from the reference page reproduces docfx's structural register (the failure the CTO flagged); a writer who works only from the how-to ships unverified API names (the S7/S15 failure class). Both sources are mandatory inputs for an N-Full block. When the how-to and the reference page disagree on a name, the reference page wins (it is the live SDK); when they disagree on framing, the how-to wins.

### 4.5 Structural-orientation FAQ entry (required, all N-Full)

The structural facts a developer occasionally needs — namespace, assembly, base type, implemented interfaces — are deliberately kept out of the prose lead (§4.2, §7). They are not discarded: every N-Full page MUST carry one FAQ entry that captures them, so the orientation is one expand-click away rather than the first thing a reader sees.

**Shape (HARD-required on every N-Full page, class and interface):**

- **Question:** `"Where does {ClassName} live in the IronPDF API?"`
- **Answer:** names, in one or two sentences, the **namespace**, the **assembly** (`IronPdf.dll` unless the reference page indicates otherwise), and the **base type** (or, for an interface, the interfaces it extends). It may add one sentence of usage orientation that ties the structure back to a task (e.g. "...assigned to the `HtmlHeader` or `HtmlFooter` property of a renderer's `RenderingOptions`").

This entry counts toward the 2–4 FAQ budget (§4.1) and is the compromise that lets the prose stay task-led while keeping the API-structural information addressable — for the developer who wants it and for structured-data consumers. All namespace / base-type / assembly claims in this entry are subject to the §6 verification gate (URL-derived namespace per rule 6, verified base type per rule 1). For interfaces it sits alongside, and does not replace, the required "what implements this?" entry (§4.2).

---

## 4A. Archetype N-Mid (v1.2.4)

For **thin-but-not-lite** types: static classes, value-type structs (docfx renders these as `sealed class X : ValueType`), and small classes or interfaces whose surface does not support a full 250-word overview without padding. These are genuine developer-facing types (so N-Lite's bare abstract is too thin) but have little to say (so N-Full's floor forces the space-filling P19 exists to prevent). The IronPrint pilot found `License`, `Margins`, and similar shapes drafting honestly at 190–220 words; a cross-product scan found thin types are ~44% of full-eligible pages.

### 4A.1 Profile

| Attribute | Value |
|---|---|
| Prose word count | 150–250 (excluding code), target 170–220 |
| Code examples | 0–1 (one focused snippet when a usage line clarifies; 0 for marker types) |
| Internal links | 2–3 (funnel set), via FeLynx |
| FAQ | 1–2 entries (FAQPage schema); the structural-orientation entry (§4.5) is the required one |
| Structured data | TechArticle + SoftwareSourceCode (if code) + FAQPage |
| Persona | identical to N-Full |

### 4A.2 What N-Mid keeps and relaxes vs N-Full

**Keeps (same HARD gates as N-Full):** the §4.2 prose ordering (What it does for you / How it fits / Working with it, compressed), the §7 **P17 no-structural-opener** rule on the lead and abstract, the §4.5 **structural-orientation FAQ** (the single required FAQ entry on a 1-FAQ page IS this one), the §4.4 dual-source rule, the §6 verification gate, **P21 code brevity**, and all §7 editorial guardrails.

**Relaxes:** the prose floor (250 → 150) and ceiling (500 → 250); link count (3–5 → 2–3); FAQ count (2–4 → 1–2). For the **interface sub-variant**, named implementors stay required *when concrete implementors exist*, but the inherited-member triage (§4.2) becomes **optional** for interfaces with ≤ 2 members (a one- or two-member marker interface has no triage to do).

### 4A.3 Routing

A full-eligible type (not enum/exception/delegate) routes to N-Mid when it is **thin by member count**: declared-member-count ≤ 6, OR a value-type struct with ≤ 12 members (struct member counts are overload-inflated, so they get a higher ceiling). Rich static classes stay N-Full — `Printer` (13 members) and `BarcodeReader` (25) are N-Full, while `License` (4) and one-property interfaces are N-Mid. The member-count rule is the **default**; `--treatment full|mid` overrides per page for borderline judgment calls (e.g. forcing a member-light but conceptually central class to N-Full, or a member-heavy but repetitive struct like `Margins` to N-Mid). The injector derives this default from the docfx declaration automatically (`derive_treatment_from_html`), so no per-product dataset is required.

### 4A.4 Template configuration

```php
<?php
// config/outlines/templates/fragment--api-class-overview-mid.php

return [
    'type' => 'fragment',
    'archetype' => 'api-class-overview-mid',
    'name' => 'API Class Overview (Mid)',
    'version' => '1.2.4',
    'inherits_shared' => false,

    'constraints' => [
        'prose_word_count' => ['min' => 150, 'max' => 250, 'target' => [170, 220]],
        'code_blocks'      => ['min' => 0, 'max' => 1],
        'internal_links'   => ['min' => 2, 'max' => 3],
        'faq_entries'      => ['min' => 1, 'max' => 2],
        'faq_required_entries' => ['structural_orientation'], // HARD; §4.5
        'no_structural_opener' => true,                       // HARD; §7 / P17
        'h1_count'         => ['exact' => 0],                 // HARD
        'quality_threshold'=> 0.85,
    ],

    'interface_variant' => [
        'framing'            => 'contract_implementor',       // HARD (as N-Full)
        'named_implementors' => ['min' => 2],                 // HARD when implementors exist
        'inherited_triage'   => ['min' => 0, 'max' => 4],     // OPTIONAL for <=2-member interfaces
    ],

    'schema' => ['TechArticle', 'SoftwareSourceCode', 'FAQPage'],
];
```

---

## 5. Archetype N-Lite

For enum-pattern types, exceptions, and delegates. Improves the description and metadata without manufacturing a tutorial where none is warranted (the thin-content failure mode this whole effort exists to prevent). Three sub-variants.

### 5.1 N-Lite/enum (50 pages)

The dominant lite category. Several are heavily referenced (`PdfCssMediaType` 21, `LoggingModes` 18, `PdfPaperSize` 17, `PdfPaperOrientation` 14), so the useful content is *which value to pass and how*, not prose.

| Attribute | Value |
|---|---|
| Prose | 40–90 words: what the enumeration represents, when to choose which value |
| Code | **Optional single** one-line usage snippet (e.g. `renderer.RenderingOptions.PaperSize = PdfPaperSize.A4;`) |
| Internal links | 0–2 (the consuming class and/or the relevant how-to) |
| FAQ | none |
| Schema | TechArticle abstract only |

### 5.2 N-Lite/exception (16 pages)

| Attribute | Value |
|---|---|
| Prose | 40–80 words: what condition raises it, what the developer should check/do |
| Code | none |
| Internal links | 0–1 (the troubleshooting page if one exists) |
| FAQ | none |
| Schema | TechArticle abstract only |

### 5.3 N-Lite/delegate (2 pages: `StringDelegate`, `ChromeStringDelegate`)

| Attribute | Value |
|---|---|
| Prose | 30–60 words: signature purpose and where it is used |
| Code | none |
| Internal links | 0–1 |
| Schema | TechArticle abstract only |

### 5.4 Template configuration

```php
<?php
// config/outlines/templates/fragment--api-class-overview-lite.php

return [
    'type' => 'fragment',
    'archetype' => 'api-class-overview-lite',
    'name' => 'API Class Overview (Lite)',
    'version' => '1.1.0',
    'inherits_shared' => false,

    'sub_variants' => [
        'enum' => [
            'prose_word_count' => ['min' => 40, 'max' => 90],
            'code_blocks'      => ['min' => 0, 'max' => 1],   // single usage line
            'internal_links'   => ['min' => 0, 'max' => 2],
            'faq_entries'      => ['exact' => 0],
        ],
        'exception' => [
            'prose_word_count' => ['min' => 40, 'max' => 80],
            'code_blocks'      => ['exact' => 0],
            'internal_links'   => ['min' => 0, 'max' => 1],
            'faq_entries'      => ['exact' => 0],
        ],
        'delegate' => [
            'prose_word_count' => ['min' => 30, 'max' => 60],
            'code_blocks'      => ['exact' => 0],
            'internal_links'   => ['min' => 0, 'max' => 1],
            'faq_entries'      => ['exact' => 0],
        ],
    ],

    'h1_count' => ['exact' => 0],
    'schema'   => ['TechArticle'],
];
```

---

## 6. Verification gate (HARD)

Promoted from an editorial guardrail to a blocking procedural gate. A page cannot pass validation if any check fails. Reuses the OreFoundry v1.3 claim-verifier. **v1.2 hardening: rules 2 (cross-class), 5 (generic-arity), 6 (namespace-from-URL), 7 (API-casing preservation), and 8 (brief-speculation guard) are the highest-leverage adjustments — they catch the single largest bug class from the v1.1 run (~120 source-material bugs across 129 pages, dominated by brief speculation and cross-class drift).**

1. **Every API name verified against the live reference page.** Class name, namespace, base type, property names, method names, merge fields/constants, and enum members are confirmed against the page being annotated. No name from memory or from search snippets.
2. **Cross-class claims verified against the other class's reference page.** A statement about a method or member that lives on a *different* class (e.g. asserting `AddHtmlHeaders()` on `PdfDocument` from within the `HtmlHeaderFooter` overview) is verified on that other class's page, or it is removed. Single-page reading is insufficient for cross-class assertions.
   - **Applies to code examples too.** If a code example calls a member of a class other than the subject class, that consumer class's reference page must also pass verification for the referenced member. Example: a code block on the `IFormField` page that reads `pdf.Form.FindFormField(...)` requires confirming on the `PdfDocument` page that `Form` exists and returns `FormFieldCollection`, not a wrapper type. (Verified 2026-05-29: `PdfDocument.Form` returns `FormFieldCollection` directly.) When the consumer page cannot be verified, the example uses a different access path or the cross-class call is removed.
   - **Applies to how-to/example funnel links too.** If a closing-funnel link is named, the destination markdown must exist on disk in `front/markdown/ironpdf.com/how-to/` or `front/markdown/ironpdf.com/examples/`. Broken slug guard: 2 broken slugs (`/how-to/stamping/`, `/how-to/extract-text`) and roughly 15 keyword-match-but-irrelevant funnel links slipped through v1.1; v1.2 makes funnel-target existence a HARD check.
3. **Deprecation accuracy.** Stale "obsolete/deprecated" signals from search results are ignored; the live reference (presence/absence of `[Obsolete]`) is authoritative. The inverse also holds: a genuinely obsolete member must not be presented as current.
4. **Code compiles against the verified surface.** Examples use only confirmed members; no invented overloads or properties.
5. **Generic-arity URL suffix decoded (P11).** docfx encodes `Foo<T>` as `Foo-1.html` (arity-1) or sometimes as `Foo1.html`. The verifier MUST extract the generic-arity suffix from the URL and reconstruct the declaration shape as `Foo<T>` in prose. Producing prose that names the class as `Foo-1` or `Foo1` is a HARD fail. (Surfaced on `ChromeClient-1` and `VirtualPaperLayoutManager1` in Tier 3 batch M.)
6. **Namespace inferred from URL path, NOT from the brief (P12).** The namespace prefix in the docfx URL (`IronSoftware.Deployment.BaseVersionFactory.html` → namespace `IronSoftware.Deployment`) is authoritative. The brief MUST NOT assert a namespace; if it does, the verifier flags it. Speculation errors in v1.1 placed `BaseVersionFactory` and `SmartDeploymentBase` in `IronSoftware` when both live in `IronSoftware.Deployment`. HARD fail if the prose names a different namespace than the URL path encodes.
7. **API casing preserved verbatim (P14).** Method, property, and field names on the docfx page carry their casing as authored, including typos. If the docfx page declares `SetCustomPaperSizeInInches` (mixed `In`) and `SetCustomPaperSizeinCentimeters` (lowercase `in`), the prose preserves both forms. Silent correction is a HARD fail because the corrected name will not compile. (Surfaced on the `IPdfRenderOptions` page in Tier 3 batch M.)
8. **Brief-speculation guard (P16).** Any claim in the agent brief about hierarchy, implementor lists, member surface, or namespace MUST be marked `# UNVERIFIED` and round-tripped against the live docfx page before the agent relies on it. Every Tier 3 batch caught at least one brief-speculation error (PdfPagesCollection vs PdfPageCollection; ICheckableFormField implementors; PdfFont's interface chain; PersistentThreadLocalChromeClient inheritance; PathObject.Points typing; etc.). Briefs are *hypotheses*, not facts.
9. **Pairwise disambiguation closure (P15 / S9).** When `Foo` and `IFoo` both exist, OR when `Foo` is paired with `FooCollection`/`FooOptions`/`FooHelper`/`FooExtensions`, the prose MUST name the pair explicitly and the disambiguation FAQ MUST resolve them. When a parallel hierarchy exists (read-side vs write-side, e.g. `IAnnotation` family vs `PdfAnnotation` family), the disambiguation MUST distinguish BOTH axes.

Verifier output is attached to the batch plan so the plan-review checkpoint can see what was checked.

### 6.5 Source-material patterns (S1–S15)

The S-patterns are recurring docfx + how-to source-material problems that the generator and the agent both must guard against. They are catalogued here so future runs (additional Iron products, spec re-tunes) recognize the shapes. Each pattern names the failure and the corresponding spec-adjustment rule (P-number) that addresses it.

| ID | Pattern | Frequency | Addressed by |
|---|---|---|---|
| **S1** | Template ignores declaration modifiers (`static class`, `abstract`, `sealed`) | Universal where applicable | P1: preserve declaration shape in generation |
| **S2** | Headline-member ordering alphabetical, not by salience | Universal (every full/lite page over ~5 members) | P9: per-gate salience signal; P7: functional bucketing on >10 members |
| **S3** | Marketing-toned docfx summaries survive into output ("blazingly fast", "powerful") | ~25% of pages | P8: synthesized opener when summary is promotional |
| **S4** | Funnel-link picker weights keyword overlap over semantic relevance (`TextAlignment` matches `/how-to/draw-text-and-bitmap/` because both contain "text") | Universal | P4: stoplist-filtered keyword set + per-area canonical fallback |
| **S5** | FAQs are template fills, not class-name long-tail | Universal | P5: four-slot FAQ system (disambiguation / integration / constraint / funnel) |
| **S6** | Wrong canonical idiom for gate type (config classes shown with `new()` when they attach to a parent's get-only property) | Universal where applicable | P6: gate-aware idiom selection |
| **S7** | Source-material bugs (invalid C# in docfx remarks, broken `<see cref>` slugs, invented members in how-to bodies, struct rendered as `class : ValueType`) | ~120+ distinct cases across 129 N-Full pages | P2: round-trip every named member by name on its declaring page (HIGHEST LEVERAGE) |
| **S8** | Large property surfaces (>10 same-kind members) need functional bucketing, not alphabetical dump | Universal on large classes | P7: bucketing rule when member count exceeds threshold |
| **S9** | Pairwise disambiguation discipline (`Foo` vs `IFoo` vs `FooCollection` vs `FooOptions`) | ~20+ pair-shapes closed across all tiers | P15: pair-shape detection + required disambiguation FAQ |
| **S10** | docfx mis-classifies auto-properties (`public string Name { get; set; }`) as fields in its h3 section | Confirmed on PdfSignature, broader likely | P10: detect property-vs-field by declaration shape (parens + body), not docfx section h3 |
| **S11** | Generic-arity URL suffix — class is `Foo<T>` but URL strips brackets to `Foo-1.html` or `Foo1.html` | Every generic class | P11: extract `<T>` from arity suffix, reconstruct in prose |
| **S12** | Class name implies opposite semantics from actual contract (`PersistentThreadLocalChromeClient` = ONE persistent thread, not one per thread) | Rare but load-bearing | P13: misleading-name list triggers explicit-contract-semantics sentence |
| **S13** | API misspellings preserved for compile-fidelity (`SetCustomPaperSizein*` lowercase `in`); silent correction breaks user code | Multiple cases | P14: casing-preservation rule |
| **S14** | Parallel hierarchies (read-side `IAnnotation` family vs write-side `PdfAnnotation` family; `IFormField` triad of `IFormFieldObject`/`IFormFieldAnnotation`/`IFormFieldAnnotationObject`; `FontObject.GlyphWidths` typed as interface vs `GlyphWidthsList` typed as concrete) | 4+ confirmed multi-class shapes | P15: detect parallel-hierarchy pattern, require S9 closure on BOTH axes |
| **S15** | Brief assumptions about hierarchy / implementors / namespace / members are often wrong; agents must verify on disk | Universal across Tier 3 (every batch caught ≥1 case) | P16: brief-speculation guard — every brief claim marked `# UNVERIFIED` and round-tripped |

Mail-merge syntax in FAQ content (`<<fieldName>>`) is a downstream pattern that breaks the HTML-content detector in JSON-LD; entity-encode as `<code>&lt;&lt;fieldName&gt;&gt;</code>`. See §7.

---

## 7. Editorial guardrails

Reuses the Syndicator forbidden-pattern list rather than a vague "no AI phrases." In addition:

- No em dashes.
- No first-person tone (third person, reference register).
- No "not X but Y" negation construction.
- Soft CTA only: closing pointers to existing docs, never a sales push.
- Borderline embellishment caught by the forbidden list (e.g. "page furniture", "pixel-accurate", "on-brand") is rewritten plainly.
- U.S. spelling; product names per the canonical casing list (`IronPDF`, `ChromePdfRenderer`, etc.); inline code in backticks.

**No structural opener (P17; HARD on N-Full).** The first sentence of an N-Full block names **what the developer accomplishes** with the type, not what the type *is* in API terms. Forbidden as the lead: "`X` is in the `Y` namespace…", "`X` derives from `Z`…", "`X` implements `A`, `B`, and `C`…", and the bare "`X` is a class that…". Structural facts belong in the structural-orientation FAQ (§4.5). The lead must instead state the task or feature ("Use `HtmlHeaderFooter` when a PDF needs branded headers or footers…", "`PdfDocument` is the object you hold whenever you generate, edit, or save a PDF…", "`IFormField` is what you receive when you read fields from an existing PDF form…"). The rule applies to the **first sentence of the prose lead AND the first sentence of the TechArticle abstract.** This is the rule that catches the dry, API-structural framing the v1.2.1 reframe corrects — it would have flagged all three v1.0 demo openings.

**Opener variety (P18; SOFT per page, enforced at corpus level).** Task-led is necessary but not sufficient: if every page opens with the *same* task-led frame ("Use `X` to…"), the corpus reads as templated — a signal content editors flag and helpful-content ranking can penalize. The first sentence of the lead (and of the abstract) must **vary its syntactic structure across the corpus.** Six approved frames, all P17-safe:

  - **A — subject-verb** (class as the agent): "`ChromePdfRenderer` converts HTML, URLs, Markdown, and RTF into PDF documents."
  - **B — identity-by-role** (what you receive / hold / work through): "`PdfDocument` is the object you hold whenever you generate, edit, or save a PDF." (Use role nouns — *object, handle, record, what `Foo` returns* — **never** the type-kind words *class/interface/type/struct/enum*, which trip P17.)
  - **C — when-fronted**: "When a PDF needs branded headers or footers, `HtmlHeaderFooter` supplies them."
  - **D — task-gerund-fronted**: "Filling a form field in an existing PDF runs through `TextFormField`."
  - **E — feature/outcome-fronted**: "Page-level metadata — title, author, dates — lives on `PdfMetaData`."
  - **F — imperative**: "Use `X` when…" / "Reach for `X` to…" — the v1.2.1 default; now capped.

  Corpus rules: **no single frame on more than ~40% of pages; imperative (F) on no more than ~25%; the abstract's first sentence uses a different frame than its own lead.** Sibling families (`Foo`/`FooCollection`, the `IPdf*Object` parallel set, the `EmbedFile*` triad) must not share a frame — near-identical siblings reading identically is the most visible templating tell. The implementation pass (2026-06-04) brought the imperative-lead share from ~80% to 5% across the 126 handcrafts; see §17.6.

**No intra-page restatement (P19; SOFT per page; v1.2.3).** A page states its "central role" claim **once.** The v1.2.2 corpus had pages that asserted the same idea in consecutive paragraphs (e.g. PdfDocument's lead "the object you hold whenever you generate, edit, or save a PDF" was restated one paragraph later as "Every IronPDF workflow funnels through this object"). The second statement is space-filling: it adds words, not information, and is the per-page half of the repetition a content editor flags. Each paragraph must advance a distinct point (what it does → how it fits → working with it), not re-assert the lead. Also retire the recurring connective tics the v1.2.2 scan surfaced — "funnels through", "from there", "the same instance" used as a paragraph hinge.

**Closing-funnel variety (P20; SOFT, enforced at corpus level; v1.2.3).** The closing pointer to a how-to/example must **not** collapse into one skeleton corpus-wide. In v1.2.2, ~80 pages closed with "The {X} how-to covers the {Y} workflow" and ~80 used "end-to-end / end to end", overwhelmingly in the closer — the most visible corpus-level repetition. Vary the closer's verb and shape (`covers`, `walks through`, `demonstrates`, `has a worked example of`; sometimes lead with the link, sometimes with the task) and **cap the bare "covers the … end to end" skeleton well below the v1.2.2 level.** Sibling clusters (annotations, the stamping family, the exception lane) must not all close identically — the cluster is where identical closers are most obvious. Boilerplate sentences shared across generated lite siblings (the namespace/base clause, the `Message`/`InnerException` hint, the troubleshooting funnel) rotate across a small phrasing pool keyed by class name (`generate_samples.py`).

**Code-example brevity (P21; HARD on N-Full; v1.2.3).** The code example is read on hover — a developer wants the gist in one glance, not a tour. **Show ONE focused scenario.** The multi-scenario block (numbered `// 1.`, `// 2.`, … steps showing render-then-edit-then-save in a single listing) is forbidden as an N-Full example: pick the single most representative path. Prefer C# 8 declaration-form `using` (`using PdfDocument pdf = …;`) over a nested `using (…) { }` block to drop two lines and a brace level. Target **≤ 12 non-empty lines**; the HARD ceiling is **24 lines or any block with ≥ 2 numbered scenarios.** Reference rewrite (content editor's own, 2026-06):

  ```csharp
  using IronPdf;

  var renderer = new ChromePdfRenderer();
  using PdfDocument pdf = renderer.RenderHtmlAsPdf("<h1>Quarterly Report</h1>");

  pdf.MetaData.Title = "Q4 Report";
  pdf.SaveAs("report.pdf");
  ```

**Member-salience rule (P9; HARD on >5 member surfaces).** Headline members named in prose are ordered by salience, NOT alphabetical. Salience signals:

- **Default value first** for enums where one value is the runtime default (`UseMargins.None`, `TableOfContentsTypes.None`, `LoggingModes.All`).
- **Canonical pair / triad** before the long tail (`StandardFont`: lead `Helvetica`, `Times`, `Courier` — the three classic PDF families — before per-family variants; `HorizontalAlignment`: `Left`, `Center`, `Right` in reading order; `PdfPaperOrientation`: `Portrait`, `Landscape`).
- **Functional / restriction-tier ordering** for state enums (`PdfEditSecurity`: `NoEdit` → `EditPages` → `EditAll`, restriction ascending; `TimestampHashAlgorithms`: `SHA256`, `SHA512`, `SHA1` — canonical-modern first, legacy demoted).
- **Reverse alphabetical detection**: if the first three member names sort alphabetically, the picker has leaked the docfx default order. Re-order.

**Mail-merge / template-syntax HTML encoding (P3; HARD).** Content that contains template syntax with `<` followed by a letter (`<<fieldName>>`, mail merge; `<%= expr %>`, ASP; `<#variable#>`, .NET) MUST be entity-encoded inside JSON-LD strings: `<code>&lt;&lt;fieldName&gt;&gt;</code>`. The HTML-content detector inside the JSON-LD validator triggers on `<letter` and rejects unescaped instances. Surfaced on `MailMergeTemplate` in Tier 3 batch H.

**Bucketing rule (P7; HARD on >10 same-kind members).** Property/method surfaces with more than 10 same-kind members in N-Full prose MUST be presented in functional buckets (paper/margins/headers/footers/JS/timing — for renderers; identity/state/type-discovery — for form fields; mutation/iteration/serialization/observability — for collections), not as a single alphabetical list. The buckets are named in prose.

---

## 8. Linking (FeLynx integration)

- **Density:** deliberately low — the `blog`/`academic` preset range, never the `docs` ~13% preset. 3–5 links across an N-Full block; 0–2 for lite.
- **Funnel set, not duplication:** links point to the how-to/examples/tutorials that own task intent, plus the parent/related class reference. Candidate targets come from the page's own `doc_reference_urls` (already collected) and are URL-verified (HTTP 200) before inclusion.
- **Intro-paragraph rule exemption:** FeLynx's default strips links from intro paragraphs. For Archetype N, "intro" is redefined as **the first sentence only**, so a parent-class link on first mention in the "What" section is permitted. Encode as a FeLynx per-archetype override.
- **No link stacking:** max one link per sentence; respect the existing "links must earn their place" anti-pattern.

---

## 9. Metadata and structured data

Ported from Step 16 of `article-improvement-prompt-v2.1`. Phase 1 of the run **emits** the recommended metadata even if injection of it is deferred, so a later metadata pass is packaging rather than a re-run.

- **Meta-title** (≤ 60 chars), 3 variants (algorithm / human / balanced). **Every variant carries `C#` or `.NET`** — the bare class name is contested on-domain by the Java and Node pages (confirmed cross-language collision).
- **Meta-description** (120–160 chars), 3 variants, leading with class-name intent.
- **TechArticle** abstract (both variants) — the deliberate page summary that replaces docfx's weak method-level auto-snippet.
- **SoftwareSourceCode** wrapping each code block, `programmingLanguage: "C#"` (N-Full only).
- **FAQPage** (N-Full only), 2–4 entries targeting class-name long-tail and the gotchas currently intercepted by Stack Overflow (e.g. the "footer won't take full width" pattern). Questions omit the product name, per convention.

---

## 10. Keyword handling

No discovery phase. Deterministic assignment:

```
primary_keyword   = "{Product} {ClassName}"          # e.g. "IronPDF PdfDocument"
secondary_set     = ["{ClassName} C#", "{ClassName} class", "{ClassName} .NET"]
exclude_list      = sibling-owned problem terms       # e.g. "html to pdf c#",
                    "add headers and footers c#"       #   never targeted, only linked
```

Rationale: the prioritization run proved class-name queries are sub-threshold and the page already ranks for them; there is no measurable per-keyword signal to research. The exclude-list is the cannibalization guard, enforced as a hard rule.

---

## 11. Prioritization and batch integration

### 11.1 Scoring (centrality-led; locked 2026-05-28)

Position is **not** scored — dataset positions proved unreliable (a verified-#1 page reported as 57). Cannibalization is **not** scored — noise on zero-volume queries.

```
central  = log1p(doc_reference_count) / log1p(max_doc_reference_count)
traffic  = total_est_traffic / max_total_est_traffic          # only PdfDocument is non-zero
snippet  = 1.0 if (weak_snippet_flag AND total_est_traffic > 0) else 0.0
gate     = { primary: 1.0, config: 0.8, class-other: 0.7 }[gate_type]   # N-Full only

priority_score = (0.55*central + 0.30*traffic + 0.15*snippet) * gate
```

Weights are configurable; raw components are retained per page for re-tuning without a re-run.

### 11.2 Tiers (N-Full set, 129 pages)

| Tier | Count | Action |
|---|---|---|
| 1 | 25 | Build first. PdfDocument leads (the one measurable-traffic, weak-snippet page). |
| 2 | 30 | Second wave. |
| 3 | 74 | Batch later, light review. Weak-snippet status unknown for most (no SERP pull). |

N-Lite (68) runs as its own batch lane, ordered by doc-reference count (high-reference enums first).

### 11.3 Batch-planner pre-pass

The OreFoundry batch-planner consumes the locked dataset and, per page, resolves: in-scope flag, treatment (full/lite + sub-variant), gate_type, tier, primary/secondary keywords, exclude-list, and candidate funnel links (from `doc_reference_urls`). It emits a single batch plan. **One plan-review checkpoint** (per OreFoundry v1.2) — no per-page interactive interruptions. After approval the batch runs unattended through generation → verification gate → FeLynx → forbidden-pattern scan → metadata emission.

---

## 12. Validation rules

**N-Mid note (v1.2.4):** every gate below written as "N-Full" applies equally to **N-Mid** (P17 structural opener, §4.5 structural-orientation FAQ, P21 code brevity, forbidden-pattern scan, verification gate). N-Mid differs only in the per-variant count ranges (prose 150–250, code 0–1, links 2–3, FAQ 1–2 per §4A) and in the interface inherited-member triage being optional for ≤2-member interfaces.

**Hard (block):**
- H1 count != 0.
- Any API-name verification failure (§6).
- Any cross-class verification failure (§6 rule 2), including code-example consumer-class access AND funnel-link target existence on disk.
- Prose word count outside the variant range.
- Code-block count outside the variant range.
- A targeted keyword on the exclude-list.
- An unverified (non-200) internal link.
- **Forbidden-pattern hit (Syndicator list, em dash, first-person, "not X but Y").** Promoted from soft in v1.0 — author self-checks are unreliable (an em dash slipped past in the IFormField sample's first draft), so the scan runs as an independent Phase 5 gate against the final output.
- **Generic-arity URL suffix not decoded (§6 rule 5; v1.2).** Prose names the class as `Foo-1` / `Foo1` instead of `Foo<T>`.
- **Namespace mismatch (§6 rule 6; v1.2).** Prose names a namespace not encoded by the URL path.
- **API casing modified (§6 rule 7; v1.2).** Prose or code example silently re-cases a docfx-declared identifier.
- **Brief speculation propagated (§6 rule 8; v1.2).** Prose contains a hierarchy / implementor / member claim that originated in the brief without being round-tripped against the live docfx page.
- **Pairwise disambiguation absent (§6 rule 9; v1.2).** Where a `Foo`/`IFoo` pair or parallel-hierarchy pattern exists, the disambiguation FAQ does not resolve them.
- **Mail-merge / template syntax unescaped in JSON-LD (§7; v1.2).** `<<fieldName>>` or `<%= expr %>` left raw inside a JSON-LD string.
- **Bucketing missing on >10-member surfaces (§7; v1.2; N-Full only).** Same-kind member surface presented as alphabetical list rather than named functional buckets.
- **Structural opener in lead (§7 / P17; v1.2.1; N-Full).** The first sentence of the prose lead OR of the TechArticle abstract names what the type *is* in API terms (namespace / base type / implemented interfaces / "is a class that…") instead of the developer task it accomplishes.
- **Structural-orientation FAQ entry absent (§4.5; v1.2.1; N-Full).** The structural-orientation entry (naming namespace, assembly, and base type) is missing from the FAQ block. The question phrasing rotates across an approved pool ("Where does {ClassName} live in the IronPDF API?", "Which namespace and assembly contain {ClassName}?", "What namespace is {ClassName} defined in?", "Where is {ClassName} located in the IronPDF object model?"); any pool member satisfies the gate, but the answer must still name the namespace.
- **Multi-scenario code example (§7 / P21; v1.2.3; N-Full).** The code example contains ≥ 2 numbered scenarios (`// 1.`, `// 2.`, …) or exceeds 24 non-empty lines. N-Full code must show one focused scenario that reads on hover. *(Exit code 6; bypass `--skip-v123-checks`.)*
- **Interface sub-variant only:** named implementor count < 2.
- **Interface sub-variant only:** inherited-member triage count outside 2–4.
- **Interface sub-variant only:** absent "what implements this?" FAQ entry.

**Soft (warn):**
- Internal-link count outside target.
- FAQ count outside target (N-Full).
- Funnel link that duplicates rather than complements a sibling page's intent.
- Interface page with an obvious parent confusion but no parent-disambiguation FAQ entry.
- `ExceptionHelper` and other manual-review flags present in the batch.
- **Headline members in first-three alphabetical order (§7 member-salience; v1.2).** Indicates docfx default ordering leaked through; re-order.
- **Marketing-toned docfx summary passed through verbatim (S3; v1.2).** Synthesize a neutral opener instead.
- **Class name implies opposite semantics (S12; v1.2).** When the class name contains `ThreadLocal`, `Persistent`, `Per`, `Shared`, `Singleton`, the prose must include an explicit-contract-semantics sentence.
- **Intra-page restatement (P19; v1.2.3; N-Full).** A paragraph re-asserts the lead's central-role claim instead of advancing a new point, or hinges on a retired connective tic ("funnels through", "from there", "the same instance").
- **Code example over the comfortable length (P21; v1.2.3; N-Full).** Code example exceeds 14 non-empty lines (HARD ceiling is 24); trim toward ≤ 12 with declaration-form `using`.
- **Closing-funnel skeleton overused (P20; v1.2.3; corpus-level).** The "{X} how-to covers the {Y} workflow end to end" skeleton, or sibling-cluster pages closing identically, exceed the corpus cap. Enforced by the corpus scan (`analyze_ai_patterns.py`), not the per-page injector.

---

## 13. Pipeline integration

Integrates at **Phase 1.5 (Template Selection)** of the CElevator/AuthORE pipeline, as a new `fragment` type alongside the `tutorial`/`how-to`/`blog`/`code-example`/`troubleshooting` types:

```
Phase 1   Batch-planner pre-pass  → resolves scope, treatment, tier, keywords, funnel candidates
Phase 1.5 Template selection      → fragment + api-class-overview-(full|lite[/sub])
Phase 2   Generation (per page)   → What-it-does / How-it-fits / Working-with-it / (Code) / Funnel  OR  lite variant
Phase 3   Verification gate       → claim-verifier (HARD)
Phase 4   FeLynx                  → funnel links, intro-exemption override, density cap
Phase 5   Forbidden-pattern scan  → Syndicator list + em dash + first-person + "not X but Y" (HARD)
Phase 6   Metadata emission       → Step 16 port (title/desc variants, TechArticle/SSC/FAQ)
Phase 7   Validation              → §12 hard/soft
                                   → single plan-review was at end of Phase 1; runs unattended after
```

No new agents required: claim-verifier, batch-planner, and the FeLynx and metadata components already exist. Archetype N adds two template configs (§4.3, §5.4) and the FeLynx intro-exemption override.

---

## 14. Open dependencies

1. **docfx injection mechanism — RESOLVED (2026-05-29):** post-build merge selected. docfx generates from `.nupkg` files on a ~monthly cadence; a post-generation reinjection script reads cached overviews keyed by class FQN, validates against drift via member-table hashing, and merges into the rendered HTML between the sentinel comments (§3). Demo authoring happens by direct HTML edit; production reinjection script is post-demo work. Three separate caches (body prose, meta block, JSON-LD) per the runbook.
2. **Type confirmation — DONE.** Full/lite split is authoritative (docfx type kind + `is_enum_pattern` + `is_exception`). No further pass needed.
3. **Interface sub-variant — VALIDATED (2026-05-29):** confirmed against the `IFormField` reference page. Updates folded into §4.2 and §12 in v1.1.
4. **Hygiene tickets (parallel, non-blocking):**
   - Stale `iron-software.github.io/.../ironpdf/2024.4.2/` mirror → noindex/301 (splitting authority from canonical pages).
   - Cross-language title-tag / hreflang collision (.NET vs Java vs Node ranking for the same class name) — relevant to the 20-SDK initiative.

---

## 15. Phased roadmap

| Phase | Scope | Status / Exit criterion |
|---|---|---|
| 0a | **Stakeholder demo** (representative subset: PdfDocument, HtmlHeaderFooter, IFormField, PdfPaperSize) by direct HTML edit, sentinels in place | **DONE 2026-05-29.** Approval on content, strategy, and reinject design; baseline SERP snippet captured for PdfDocument. |
| 0b | Post-build reinjection script + three caches (body / meta / JSON-LD) keyed by class FQN; drift detection via member-table hash | **DONE.** `inject_archetype_n.py` + sentinel-wrapped injection blocks; member-table hash deferred to Phase 8. |
| 1 | Implement two template configs + FeLynx intro-exemption; wire verification gate (incl. cross-class rule) and Phase 5 hard-gate forbidden-pattern scan | **DONE.** `HtmlHeaderFooter` reproduced the reference sample within tolerance. |
| 2 | Tier 1 N-Full (25 pages), PdfDocument first; single plan-review | **DONE 2026-05-30.** 25 pages handcrafted, all passing §12 HARD rules. |
| 3 | N-Lite enum lane (50 pages) | **DONE.** Programmatic generation across 49 enums + 15 exceptions + 1 delegate, all gate-passing. |
| 4 | Tier 2 N-Full (30) + remaining lite (18); interface sub-variant exercised at scale | **DONE.** Tier 2 = 30 pages in 4 agent batches; remaining lite folded into Phase 3. |
| 5 | Tier 3 N-Full (74) | **DONE 2026-05-31.** 9 agent batches (E–M), all 74 pages passing §12 HARD rules. ~120 distinct source-material bugs caught across all three N-Full tiers. |
| 6 | **N-Lite quality pass** | **DONE 2026-05-31.** Pass 1 (programmatic) fixed grammar/truncation across 65 pages in `generate_samples.py`; Pass 2 (agent polish) reordered members by salience, fixed funnel links, added cross-class consumer mentions across all 49 enums. All 65 lite pages re-pass HARD gates. |
| 7 | **Spec fold-back (this revision, v1.2)** | **DONE 2026-05-31.** S1–S15 catalogued in §6.5; P1–P16 mapped into §6, §7, §12. Updated archetype-N spec is the canonical source. |
| 8 | **Tooling fold-back: implement P1–P16 in `generate_samples.py` and `inject_archetype_n.py`** | Highest-impact / lowest-effort items first: P2 (round-trip every member), P11 (generic-arity URL), P12 (namespace from URL), P14 (preserve API casing), P16 (brief-speculation guard). Member-table drift hash (deferred from Phase 0b) completes here. |
| 9 | **Apply to remaining Iron products** | IronOCR / IronXL / IronBarcode / IronQR / IronWord / IronPPT each have similar N-Full surfaces. Spec, S-patterns, P-adjustments transfer directly. Per-product brief writes against THIS spec (v1.2) as the source of truth. |
| 10 | Metadata injection pass (if deferred at earlier Phase) | Titles/descriptions/schema live in published HTML. |

---

## 16. Success metrics

Calibrated to the strategic premise (§1), **not** to ranking position (already #1):

- **Snippet control:** % of treated trafficked pages whose Google-displayed description matches the authored meta-description (replacing method-level auto-snippets). Primary metric for Tier 1.
- **CTR:** Search Console CTR on PdfDocument and other measurable-traffic pages, pre/post.
- **AI-citation presence:** appearance of treated pages in AI Overviews / LLM answers for class-name and member queries (manual sampled audit; no volume signal exists for this).
- **Funnel contribution:** referral clicks from API pages to the how-to/examples targets (the trafficked destinations).
- **Quality gate:** % of generated blocks passing §6 verification on first pass; thin-content/forbidden-pattern flag rate.
- **Coverage:** in-scope pages treated, by tier and variant.

Explicitly **not** a success metric: ranking position for class-name queries, and per-page organic-volume growth — both are unmeasurable or already maxed, and tracking them would misrepresent the project's value.

---

## 17. Lessons learned (v1.0 → v1.1 → v1.2)

This section is a retrospective on the three implementation passes. It exists to (a) make the implicit reasoning behind P1–P16 inspectable for future spec maintainers, and (b) give the per-product-runbook authors (Phase 9, remaining Iron products) a single place to read the operational findings.

### 17.1 The single biggest lever: cross-class round-trip

The S7 round-trip rule (every named member verified on its declaring page) caught roughly 120 distinct doc-side bugs across the 129 N-Full pages. Categories observed:

- **Invalid C# in docfx `<remarks>` example code** — most common bug class. Generators that pass these through without re-verifying produce non-compiling code samples.
- **Broken `<see cref>` slug targets** — docfx XML-doc links pointing at non-existent how-to pages. Visible to readers as 404 funnel links.
- **Invented members in how-to bodies** — how-to markdown that references properties, methods, or constructors that do not exist in the current SDK. The how-to was likely written against an earlier SDK and never re-verified.
- **Struct rendered as `class : ValueType`** — docfx mis-renders C# struct declarations. Pattern: `EmbedFileByte`, `EmbedFileStream`, `EmbedFilePath` triad.
- **Indexer rendered as `Item[String]`** — docfx artifact on classes with an `this[string]` indexer.
- **Cross-API typography drift** — same concept named differently across renderers (DocxPdfRenderOptions.Timeout is seconds, default 60; ChromePdfRenderOptions.Timeout is milliseconds — a real footgun for users following different docs).
- **Stale "obsolete" signals in search snippets** vs. live `[Obsolete]` attribute presence/absence — the docfx page is authoritative; SERP signals are not.

These bugs are not introduced by the archetype, they are inherited from the source material. The archetype's role is to NOT silently propagate them. **P2 is the highest-leverage spec adjustment for that reason.**

### 17.2 Brief speculation is the dominant new bug class

Across Tier 3's nine batches, every single batch caught at least one case where the agent brief I authored speculated a hierarchy fact that turned out to be wrong on disk. Examples that round-tripping caught (and that would otherwise have shipped):

- `PdfPagesCollection` was named `PdfPageCollection` in the brief.
- `ICheckableFormField` was claimed to be implemented by `ComboboxFormField`. Only `Checkbox` and `Radio` implement it.
- `PdfFont` was claimed to implement `IPdfFontObject`. It does not — the font hierarchies are separate.
- `BaseVersionFactory` and `SmartDeploymentBase` were placed in namespace `IronSoftware`. Both live in `IronSoftware.Deployment`.
- `PersistentThreadLocalChromeClient` was claimed to be a subclass of `ChromeClient<T>`. They are siblings.
- `VerifiedSignature.IsValid` was speculated. The actual property is `Valid`.
- `PdfAnnotation` family was claimed to share members like `PageIndex`, `Title`, `AnnotationType`. Actual members are `Type`, `Color`, `Contents`, `Hidden`, `Name`, `Rectangle`.

The pattern: confident-sounding hypotheses in briefs become facts in generated prose. **P16 (brief-speculation guard) makes the convention explicit: every hierarchy claim in the brief MUST be marked `# UNVERIFIED` and round-tripped before the agent relies on it.** Adopting this convention going forward (Phase 9, other Iron products) is non-optional.

### 17.3 Agent delegation pattern (operational notes)

The pattern that worked across 17 agent batches and 49 lite-polish agents:

1. **Per-batch theme** — group 7–10 pages by domain (e.g. PdfAnnotation family + Bookmarks; Extraction surface; Forms interfaces; etc.). Agents within a batch share cross-class context, which accelerates S9 disambiguation.
2. **Standing brief, per-batch prompt** — the `_handcraft-brief-for-agents.md` (N-Full) and `_lite-polish-brief.md` (N-Lite polish) live in the project's `generative-task/` directory. The per-batch prompt names the pages and the cross-class pairings; the brief carries the S/P guidance.
3. **Dry-run + apply + skip-list update per return** — each agent return is processed individually: `inject_archetype_n.py --dry-run` to confirm gate passage, then `inject_archetype_n.py` to write, then update `batch_apply.py` skip list to record the page as handcrafted (so a re-run of the manifest doesn't overwrite it).
4. **One plan-review at the start of each tier, then unattended** — per the OreFoundry v1.2 single-plan-review pattern. No per-page interactive interruption.

Throughput: Tier 3 ran 74 pages through 9 batches in roughly the same operational shape as Tier 1's 25 pages through 4 batches; per-batch size scaled from 6–7 to 8–10 without quality degradation.

### 17.4 What the programmatic generator can and cannot do

After implementing the programmatic fixes in `generate_samples.py` for the N-Lite quality pass (P1, P9, P14, plus the `_emit_summary_sentence` grammar helper), the generator now produces:

- Grammatical TechArticle abstracts even when the docfx summary begins with a noun phrase carrying its own verb (the StandardFont case: "Standard fonts defines 14 fonts...").
- Word-boundary-aware truncation in meta-descriptions (no more mid-word cuts like `...stan....`).
- Preserved CamelCase identifier casing (`IronPDF` is not lowercased to `ironPDF`).
- Sub-variant-specific closing lines, replacing the generic "Reference for members..." boilerplate.
- A noun-phrase rephrase for `Thrown when ...` exception summaries so they embed as "represents the error raised when ...".

What the generator still **cannot** do without per-page judgment:

- Pick a genuinely relevant funnel link. Keyword overlap will always produce false positives (`TextAlignment` matched `/how-to/draw-text-and-bitmap/` purely on the "text" token). The right answer requires reading the destination markdown. **Agent polish is the only fix for this.**
- Order members by salience without a curated salience signal per enum. Alphabetical is the inescapable default unless the generator has external ordering hints.
- Detect parallel-hierarchy / two-axis pairings. Each requires reading multiple docfx pages and comparing inheritance.

**The hybrid pattern (programmatic + agent polish) is durable for future products.** Skip-the-polish risks: every templated weakness in §17.4 stays in the output. Skip-the-programmatic risks: every agent fixes the same systematic grammar bugs 65 times.

### 17.5 S → P mapping (quick reference)

| S-pattern | Severity / frequency | P-adjustment |
|---|---|---|
| S1 declaration modifiers | universal where applies | P1 |
| S2 alphabetical members | universal | P9, P7 |
| S3 marketing summaries | ~25% | P8 |
| S4 keyword-overlap funnel | universal | P4 |
| S5 templated FAQs | universal | P5 |
| S6 wrong canonical idiom | universal where applies | P6 |
| **S7 source-material bugs** | **~120+ cases** | **P2 (highest leverage)** |
| S8 large surfaces | universal on large classes | P7 |
| S9 disambiguation pairs | ~20+ pair-shapes | P15 |
| S10 prop-as-field | medium | P10 |
| S11 generic-arity URL | every generic class | P11 |
| S12 misleading class names | rare but load-bearing | P13 |
| S13 API misspellings | multiple | P14 |
| S14 parallel hierarchies | 4+ multi-class shapes | P15 |
| **S15 brief speculation** | **universal across Tier 3** | **P16 (second-highest leverage)** |

P2 and P16 are the two adjustments that, if implemented faithfully in tooling (Phase 8), close the largest remaining gap between programmatic output and handcraft-quality output.

### 17.6 Opener variety (the templating trap the reframe created)

The v1.2.1 reframe fixed dryness but introduced a new failure mode: the agent batches, all working from the same task-led brief, converged on one frame — **~80% of the 126 N-Full leads opened "Use `X` to/when…".** Task-led but monotonous, and exactly the kind of pattern an editor or a helpful-content classifier reads as machine-generated.

The fix (P18, §7) is a **corpus-level** constraint, not a per-page one: no per-page check can see that 100 other pages opened the same way. The opener-variety pass distributed the 126 leads across six syntactic frames (subject-verb, identity-by-role, when-fronted, task-gerund, feature-fronted, imperative), capping the imperative frame and requiring the abstract to differ from its own lead. Result: imperative-lead share fell from ~80% to **5%**; first-word entropy rose from a near-monoculture to a spread led by "When" (19), "The" (8), "Use" (7), with a long tail of gerund and subject-led openers.

**Operational lesson for Phase 9:** when a single brief drives many parallel generations, identical framing is the default outcome — diversity has to be an explicit instruction with a distribution target and sibling-divergence rule, or it will not happen. Programmatic generation has the same trap (every `generate_samples.py` N-Full lead is one template); the generator now rotates among frames by a stable hash of the class name (§4.3 note), but agent polish remains the only source of genuinely varied, class-specific openers.
