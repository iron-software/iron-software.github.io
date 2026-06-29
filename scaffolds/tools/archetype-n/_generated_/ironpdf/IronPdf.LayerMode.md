<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.LayerMode.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `LayerMode` enumeration in IronPDF declares whether merged content sits above or below the existing page.

Part of the `IronPdf` namespace, the two members are `Background` and `Foreground`. The value drives stamping, watermark, and merge operations: `Background` paints under existing text and is the typical pick for letterheads, while `Foreground` overlays elements such as draft stamps or page numbers.

See the [backgrounds and foregrounds guide](https://ironpdf.com/how-to/background-foreground/) for examples.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LayerMode Enum - IronPDF C# API Reference`
- v2 (human): `LayerMode: IronPDF Stamps & Watermarks in C#`
- v3 (balanced): `LayerMode Enum | IronPDF C# Backgrounds & Stamps`

**Meta-description (120-160 chars)**
- v1 (algorithm): `LayerMode is the IronPDF enumeration that selects Background or Foreground placement for stamping, watermark, and merge operations in C#.`
- v2 (human): `IronPDF LayerMode enumeration for C#: Background paints under existing text (letterheads), Foreground overlays draft stamps or page numbers.`
- v3 (balanced): `LayerMode in IronPDF for C# declares whether merged content sits above or below the page (Background, Foreground) during stamping and watermarking.`

---

## Structured data

**TechArticle abstract**

> The LayerMode enumeration in IronPDF lives in the IronPdf namespace, derived from Enum, representing the layering mode applied when merging, stamping, or watermarking PDF pages. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
