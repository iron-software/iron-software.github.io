# Archetype-N polish brief (shared by cross-product fan-out subagents)

You author Archetype-N API-overview sample `.md` files for one cluster of an Iron Software
docfx product, then self-validate each with the injector until it passes. Your caller gives you
the PRODUCT PARAMS and YOUR PAGES; everything else is here.

> Vendored copy. This brief was originally written for Claude Code fan-out subagents; the
> in-build generator (`generate_overview.{py,mjs}`) assembles its own system prompt from these
> same rules and the reference samples. Paths below are relative to this `scaffolds/tools/archetype-n/` directory.

## Read first (defines format + rules)
1. Spec: `spec/archetype-N-spec.md`
2. Reference samples (match their structure + voice), in `spec/reference-samples/`:
   - `qrreader-overview.md` (N-Full class), `qrwriter-overview.md` (N-Full, static, bucketed)
   - `qrcode-overview.md` (N-Mid), `iqrinput-overview.md` (N-Mid interface)
   - `qrencoding-overview.md` (N-Lite enum), `ironqrexception-overview.md` + `ironqrfileexception-overview.md` (N-Lite exception)

## Per page: read the target HTML, author the sample, self-validate.
- Target HTML = `<api-dir>/<FQN>.html`. Output = `<staging>/<FQN>-overview.md` (FQN = the .html stem, preserve case).
- **Verify every API name** (class, namespace, base type, members, signatures, casing) against the target HTML. Use ONLY members declared there. Cross-class members are allowed when naming where a type is obtained/consumed, but they must be real on their own class (a WARN for these on validation is fine). Never invent members or implementor class names.
- **Namespace** = the FQN minus its final segment (e.g. `Foo.Bar.Baz` → namespace `Foo.Bar`). **Assembly** is given in the product params.

## Tier sizing (the prose word counter runs ~15% UNDER your felt length — write LONG)
- **full**: prose **aim 280–340** (HARD 250–500); code 1–2 (interfaces 0–1); internal links 3–5; FAQ 2–4.
- **mid**: prose **aim 190–235** (HARD 150–250); code 0–1; links 2–3; FAQ 1–2.
- **lite (enum)**: prose **aim 60–85** (HARD 40–90); code 0–1 (one usage line); links 0–2; **NO FAQ**; abstract required; order members by salience (default/canonical first, not alphabetical); name only salient members of large enums.
- **lite (exception)**: prose **40–80**; **NO code, NO FAQ**; links 0–1; abstract required; say what condition raises it + what to check/do; verify the base type from the page and state the chain; vary phrasing across an exception family.

## HARD rules
- **Structural-orientation FAQ required on every full and mid page**: an entry `"Where does {Class} live in the {Brand} API?"` whose answer names the namespace, the assembly, and the base type (for an interface, the interfaces it extends). On a 1-FAQ mid page this IS that entry.
- **No structural opener**: the first sentence of the prose lead AND of the TechArticle abstract must state the developer TASK, never what the type is. Forbidden openers: "X is a class/interface/struct/enum…", "X is in the … namespace", "X derives from…", "X extends…", "X implements…", and starting the abstract with "extends". Use a role noun (object/handle/record/contract) if you must, never the type-kind word.
- **Opener variety**: vary the opening syntactic frame across your pages (subject-verb / identity-by-role / when-fronted / task-gerund / feature-fronted / imperative); the abstract's first sentence must use a different frame than its own lead. Sibling/near-identical types must not open the same way.
- **Code brevity**: ONE focused scenario, ≤ ~12 non-empty lines, declaration-form `using` where natural; no multi-numbered-step blocks.
- **Editorial**: no em dashes (use commas/parentheses); no first person (I/we/our — second-person "you" is fine; in FAQ use "How do you…", never "How do I…"); no "not X but Y" construction; US spelling; inline code in backticks; preserve API casing exactly (never "correct" it).
- **Interfaces**: contract framing, never `new X()`. Name ≥2 concrete implementors IF they are documented in the api dir; if not, describe the contract and the property/method that RETURNS it (verify that return path on the other class's page) — do not invent class names. Include a FAQ answering what implements / what returns it. Full interfaces: name 2–4 everyday members. ≤2-member mid interfaces: member triage optional.
- **Large member surfaces (>10 same-kind)**: present in named functional buckets, not an alphabetical dump.

## Funnel links (real docs only)
Discover slugs by listing the product's doc surface (given in params): `<md-root>/how-to/*.md`, `<md-root>/examples/*/` (nested dirs), `<md-root>/tutorials/*.md`. Build URLs as `<product-url>{how-to|examples|tutorials}/{slug}/`. Pick slugs SEMANTICALLY relevant to the class (read the slug names). Only use slugs that exist on disk.

## Sample file format (match the reference samples exactly)
- Optional leading HTML comment.
- `## Injected overview (Markdown)` — prose paragraphs + (if any) ONE ```csharp fenced block. No H1; headings at most H2; do NOT put a line that is exactly `---` inside this section.
- `---`
- `## Recommended metadata` — `**Meta-title (≤ 60 chars)**` then three bullets `- v1 (algorithm): \`...\`` / `- v2 (human): \`...\`` / `- v3 (balanced): \`...\``; then `**Meta-description (120–160 chars)**` with the same three-variant shape. Every meta-title carries `C#` or `.NET`.
- `---`
- `## Structured data` — `**TechArticle abstract**` then a `> ` blockquote (PLAIN text, no backticks/code inside — write `Foo` not `` `Foo` ``); then for full/mid ONLY, `**FAQPage entries**` then a ```json array of {question, answer} objects. OMIT the FAQ block for lite.

## Self-validate each file — loop until exit 0
```
python "scaffolds/tools/archetype-n/inject_archetype_n.py" "<sample>.md" "<target>.html" --base-url "<base-url>" --product-url "<product-url>" --treatment <full|mid|lite> --dry-run
```
Exit 0 = pass. Non-zero prints the failing HARD gate (prose-words, structural-opener, structural-orientation-faq, code-brevity, forbidden-pattern, api-casing, faq-entries, internal-links-as-HARD-only-if-0…) — fix and re-run until exit 0. WARN lines (e.g. member-roundtrip for verified cross-class members) are acceptable. ALWAYS keep `--dry-run`; never write the target HTML. Edit nothing outside the staging dir.

When done, report one line per page: `FQN: PASS, <prose words>`, and note anything you could not verify.
