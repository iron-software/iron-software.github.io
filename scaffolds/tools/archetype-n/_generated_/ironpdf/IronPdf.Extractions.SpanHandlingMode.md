<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.SpanHandlingMode.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `SpanHandlingMode` enumeration in IronPDF declares 4 values that control how `PdfExtractor` flattens table cells carrying `rowspan` or `colspan` when `ExportManager` writes them to CSV, JSON, or XML.

Members are `Merge` (single value retained), `Repeat` (value copied across spanned cells), `Empty` (placeholder blanks), and `Annotate` (span metadata preserved).

See [Extract Text & Images](https://ironpdf.com/how-to/extract-text-and-images/) for the extraction surface that consumes this setting.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SpanHandlingMode Enum - IronPDF C# API Reference`
- v2 (human): `SpanHandlingMode: IronPDF Text Extraction in C#`
- v3 (balanced): `SpanHandlingMode Enum | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `SpanHandlingMode is the IronPDF enumeration for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF SpanHandlingMode enumeration reference for C#: enumeration of how to handle cells with rowspan/colspan in exports Controls...`
- v3 (balanced): `SpanHandlingMode (Text Extraction) in IronPDF for C#: enumeration of how to handle cells with rowspan/colspan in exports Controls... See members and usage.`

---

## Structured data

**TechArticle abstract**

> The SpanHandlingMode enumeration in IronPDF lives in the IronPdf.Extractions namespace, derived from Enum. Enumeration of how to handle cells with rowspan/colspan in exports Controls how merged cells are represented in different export formats. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
