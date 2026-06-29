<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.TextExtractionOrder.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `TextExtractionOrder` enumeration in IronPDF picks the strategy used to determine word order when `ExtractAllText` or `ExtractTextFromPage` reads content from a PDF.

It belongs to the `IronPdf` namespace and exposes two values: `LogicalOrder` (follows the PDF's underlying text stream, best for reading-order extraction) and `VisualOrder` (sorts tokens by on-page coordinates, best for multi-column layouts).

See [Extract Text & Images](https://ironpdf.com/how-to/extract-text-and-images/) for both modes in use.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextExtractionOrder - IronPDF C# API Reference`
- v2 (human): `TextExtractionOrder: IronPDF Text Extraction in C#`
- v3 (balanced): `TextExtractionOrder Enum | IronPDF C# Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TextExtractionOrder is the IronPDF enumeration for PDF text-extraction word order in C#. Members: LogicalOrder, VisualOrder.`
- v2 (human): `IronPDF TextExtractionOrder enumeration for C#: picks logical-stream or visual-coordinate word order for ExtractAllText and friends.`
- v3 (balanced): `TextExtractionOrder in IronPDF for C#: chooses logical or visual ordering when reading text from a PDF. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The TextExtractionOrder enumeration in IronPDF lives in the IronPdf namespace, derived from Enum, picking the strategy used to determine word order when ExtractAllText or ExtractTextFromPage reads content from a PDF. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
