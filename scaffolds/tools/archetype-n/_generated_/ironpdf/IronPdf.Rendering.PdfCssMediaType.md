<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Rendering.PdfCssMediaType.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `PdfCssMediaType` enumeration in IronPDF selects which CSS media-query stylesheet the renderer honors when converting HTML to PDF.

Part of the `IronPdf.Rendering` namespace, declared values are `Screen` and `Print` (2 total). The value is assigned to `ChromePdfRenderOptions.CssMediaType`, switching between on-screen layout and `@media print` rules such as repeating table headers and page-break hints.

See [CSS screen and print](https://ironpdf.com/how-to/html-to-pdf-responsive-css/) for typical C# usage.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfCssMediaType Enum - IronPDF C# API Reference`
- v2 (human): `PdfCssMediaType: IronPDF PDF Rendering in C#`
- v3 (balanced): `PdfCssMediaType Enum | IronPDF C# PDF Rendering`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfCssMediaType is the IronPDF enumeration for PDF rendering in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfCssMediaType enumeration reference for C#: defines which style-sheet should be rendered. 'Print' or 'Screen'.`
- v3 (balanced): `PdfCssMediaType (PDF Rendering) in IronPDF for C#: defines which style-sheet should be rendered. 'Print' or 'Screen'. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The PdfCssMediaType enumeration in IronPDF lives in the IronPdf.Rendering namespace, derived from Enum, representing which style-sheet should be rendered. 'Print' or 'Screen'. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.