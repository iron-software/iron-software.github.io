<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.PixelFormat.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `PixelFormat` enumeration in IronPDF declares the per-pixel colour layout used when a page is rasterised to a bitmap.

Part of the `IronPdf` namespace, the two members are `Format32bppArgb` and `Format32bppRgb`. `Format32bppArgb` preserves transparency for image overlays and stamping pipelines, while `Format32bppRgb` drops the alpha channel and produces smaller buffers for opaque-only output such as thumbnails or print rasters.

See [convert PDF pages to images](https://ironpdf.com/how-to/rasterize-pdf-to-images/) for example code.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PixelFormat Enum - IronPDF C# API Reference`
- v2 (human): `PixelFormat: IronPDF PDF Rasterization in C#`
- v3 (balanced): `PixelFormat Enum | IronPDF C# PDF-to-Image Output`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PixelFormat is the IronPDF enumeration declaring the per-pixel colour layout (Format32bppArgb, Format32bppRgb) for rasterising PDF pages in C#.`
- v2 (human): `IronPDF PixelFormat for C#: Format32bppArgb preserves transparency for overlays, Format32bppRgb drops alpha for smaller opaque thumbnails and prints.`
- v3 (balanced): `PixelFormat in IronPDF for C# selects the bitmap colour layout (Format32bppArgb, Format32bppRgb) used when rasterising PDF pages to images.`

---

## Structured data

**TechArticle abstract**

> The PixelFormat enumeration in IronPDF lives in the IronPdf namespace, derived from Enum and declares the per-pixel colour layout used when rasterising a PDF page to a bitmap. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
