<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.TableDetectionStrategy.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `TableDetectionStrategy` enumeration in IronPDF selects which algorithm `PdfExtractor` uses to identify tabular regions in a PDF before `ExportManager` writes them out.

Part of the `IronPdf.Extractions` namespace, the 3 members are `Nurminen` (heuristic line-based detection), `Spreadsheet` (ruling-grid detection for bordered tables), and `Hybrid` (both, with results merged).

See [Parse PDFs in C#](https://ironpdf.com/how-to/csharp-parse-pdf/) for the extraction APIs that read this setting.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableDetectionStrategy Enum - IronPDF C# API Reference`
- v2 (human): `TableDetectionStrategy: IronPDF Text Extraction in C#`
- v3 (balanced): `TableDetectionStrategy Enum | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TableDetectionStrategy is the IronPDF enumeration for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TableDetectionStrategy enumeration reference for C#: table detection strategies Determines which algorithm(s) to use for...`
- v3 (balanced): `TableDetectionStrategy (Text Extraction) in IronPDF for C#: table detection strategies Determines which algorithm(s) to use for... See members and usage.`

---

## Structured data

**TechArticle abstract**

> The TableDetectionStrategy enumeration in IronPDF lives in the IronPdf.Extractions namespace, derived from Enum. Table detection strategies Determines which algorithm(s) to use for detecting tables in PDF documents. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
