<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Rendering.PdfRenderingEngine.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `PdfRenderingEngine` enumeration in IronPDF picks the HTML-to-PDF engine used for document generation.

Part of the `IronPdf.Rendering` namespace, declared values are `Default` and `Chrome` (2 total). Assign to `Installation.RenderingEngine` at app startup; `Chrome` requests Chromium for full HTML5, CSS3, and JavaScript support, while `Default` lets IronPDF pick the available engine (currently Chrome).

See [HTML to PDF](https://ironpdf.com/how-to/html-to-pdf/) for typical C# usage.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfRenderingEngine Enum - IronPDF C# API Reference`
- v2 (human): `PdfRenderingEngine: IronPDF PDF Rendering in C#`
- v3 (balanced): `PdfRenderingEngine Enum | IronPDF C# PDF Rendering`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfRenderingEngine is the IronPDF enumeration for PDF rendering in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfRenderingEngine enumeration reference for C#: specifies which HTML to PDF rendering engine to use for document generation.`
- v3 (balanced): `PdfRenderingEngine (PDF Rendering) in IronPDF for C#: specifies which HTML to PDF rendering engine to use for document generation. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The PdfRenderingEngine enumeration in IronPDF lives in the IronPdf.Rendering namespace, derived from Enum and specifies which HTML to PDF rendering engine to use for document generation. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.