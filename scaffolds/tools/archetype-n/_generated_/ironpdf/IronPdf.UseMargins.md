<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.UseMargins.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `UseMargins` enumeration in IronPDF declares which margin values are copied from the main document onto headers and footers, used by header/footer types that implement `IMargins`.

It belongs to the `IronPdf` namespace and exposes 8 values: `None`, `All`, `TopAndBottom`, `LeftAndRight`, `Top`, `Bottom`, `Left`, and `Right`. Pair the value with the document's own margin settings so chrome aligns with the body grid.

See [Add Headers & Footers](https://ironpdf.com/how-to/headers-and-footers/) for typical setups.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `UseMargins Enum - IronPDF C# API Reference`
- v2 (human): `UseMargins: IronPDF Header & Footer Margins in C#`
- v3 (balanced): `UseMargins Enum | IronPDF C# Header/Footer`

**Meta-description (120-160 chars)**
- v1 (algorithm): `UseMargins is the IronPDF enumeration for header/footer margin inheritance in C#. Members: None, All, TopAndBottom, LeftAndRight, plus per-side.`
- v2 (human): `IronPDF UseMargins enumeration for C#: declares which margin values are copied from the main document onto headers and footers.`
- v3 (balanced): `UseMargins (Headers & Footers) in IronPDF for C#: selects which page margins propagate to chrome via IMargins. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The UseMargins enumeration in IronPDF lives in the IronPdf namespace, derived from Enum, declaring which margin values are copied from the main document onto headers and footers via IMargins. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
