<!--
N-Full (class, 12 members). Frame B (identity-by-role lead). IronPDF.
PdfExtractionResult members verified from PAGE FACTS 2026-06-22.
Target: IronPdf.Extractions.PdfExtractionResult
-->

## Injected overview (Markdown)

The record a developer receives after calling `PdfExtractor.Extract` is a `PdfExtractionResult`, the single object that bundles every table, every text layer, and the document metadata produced by one extraction pass. Rather than making separate calls for tables and text, you query this result object to slice the output by page, page range, or the whole document.

`PdfExtractionResult` organises its surface into two functional areas: structured table data and text content.

**Tables:** `Tables` returns the full `List<TableObject>` found across the document. When you need only one page, `GetTablesByPage(int pageNumber)` narrows the list. For a contiguous span of pages, `GetTablesByPageRange(int startPage, int endPage)` covers the range. To pinpoint a single table when a page holds more than one, `GetTableByPageAndIndex(int pageNumber, int tableIndexOnPage)` selects by zero-based position on that page.

**Text:** `FullText` exposes the complete formatted text string for the document. `Text` gives a `TextContent` object for richer programmatic access. The `Get`-prefixed text methods mirror the table methods: `GetFullTextByPage` and `GetFullTextByPageRange` return formatted text; `GetRawText`, `GetRawTextByPage`, and `GetRawTextByPageRange` return unformatted strings stripped of layout hints, which is useful when feeding content to a parser or search index.

`Metadata` surfaces a `DocumentMetadata` record containing author, title, creation date, and related document-level properties.

A common workflow reads all tables from a report, then pulls the raw text from the same pages to feed a downstream pipeline:

```csharp
using IronPdf.Extractions;

PdfExtractionResult result = PdfExtractor.Extract("annual-report.pdf");

// Inspect document metadata
Console.WriteLine(result.Metadata.Title);

// Iterate every table in the document
foreach (TableObject table in result.Tables)
    Console.WriteLine($"Page {table.PageNumber}: {table.RowCount} rows");

// Pull raw text from pages 3 through 7 for indexing
string rawSlice = result.GetRawTextByPageRange(3, 7);
```

For a broader look at PDF content extraction in IronPDF, see the [PDF extraction how-to](https://ironpdf.com/how-to/extract-text-and-tables/), the [text extraction examples](https://ironpdf.com/examples/extract-text-from-pdf/), and the [table extraction examples](https://ironpdf.com/examples/extract-tables-from-pdf/). The [IronPDF documentation hub](https://ironpdf.com/docs/) covers installation and licensing.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfExtractionResult Class - IronPDF C# API`
- v2 (human): `PdfExtractionResult: PDF Tables & Text in C#`
- v3 (balanced): `PdfExtractionResult Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use PdfExtractionResult in IronPDF C# to access extracted tables, text, and metadata from a PDF. Query by page, range, or full document with typed methods.`
- v2 (human): `PdfExtractionResult holds every table, text layer, and metadata from an IronPDF extraction. Slice results by page or range with built-in C# query methods.`
- v3 (balanced): `Reference for IronPDF PdfExtractionResult in C#: access extracted tables and text by page or range, plus document metadata, from one result object.`

---

## Structured data

**TechArticle abstract**

> Calling PdfExtractor.Extract returns a PdfExtractionResult, the object that consolidates all tables, text content, and document metadata from a single PDF extraction pass. Tables exposes the full List of TableObject instances; GetTablesByPage, GetTablesByPageRange, and GetTableByPageAndIndex narrow the set. FullText and Text provide formatted text; GetRawText, GetRawTextByPage, and GetRawTextByPageRange deliver unformatted strings. The Metadata property surfaces document-level properties such as title and author. PdfExtractionResult lives in the IronPdf.Extractions namespace, shipped in IronPdf.dll, and derives from Object.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfExtractionResult live in the IronPDF API?",
    "answer": "PdfExtractionResult is a class in the IronPdf.Extractions namespace, shipped in IronPdf.dll. It derives from Object and is returned by PdfExtractor.Extract after processing a PDF document."
  },
  {
    "question": "How do you retrieve tables from a specific page using PdfExtractionResult?",
    "answer": "Call GetTablesByPage(int pageNumber) to get a List<TableObject> for that page. To target a single table when a page holds more than one, use GetTableByPageAndIndex(int pageNumber, int tableIndexOnPage). For a span of pages, use GetTablesByPageRange(int startPage, int endPage)."
  },
  {
    "question": "What is the difference between FullText and GetRawText on PdfExtractionResult?",
    "answer": "FullText returns the complete formatted text string for the document, preserving layout hints. GetRawText returns an unformatted string stripped of those hints, which is better suited for feeding content to a parser, search index, or NLP pipeline. Both page-scoped and range-scoped variants exist for each approach."
  },
  {
    "question": "How do you access document metadata from a PdfExtractionResult?",
    "answer": "The Metadata property returns a DocumentMetadata object containing document-level properties such as title, author, and creation date, all captured during the same extraction call that produced the tables and text."
  }
]
```