<!--
N-Mid (1 member). Frame C. IronPDF. Members verified 2026-06-22. GetTextBlocks extension on IPdfClient.
Target: IronSoftware.PdfClientTextExtensions
-->

## Injected overview (Markdown)

Structured text extraction from a PDF page becomes a single call when you use `PdfClientTextExtensions`, a static helper class that layers over `IronSoftware.Pdfium.IPdfClient` to return spatially organized text data. Rather than parsing raw character streams, you receive a ready-to-use `IReadOnlyList<TextBlock>` that groups characters into coherent blocks, preserving the reading order and layout geometry the underlying Pdfium engine detected.

The single declared member, `GetTextBlocks`, is an extension method on `IPdfClient`. Pass the client handle, an `IDocumentId` identifying the open document, and a zero-based `page_index`, and the method returns all text blocks found on that page. Each `TextBlock` in the result carries positional and content information, making it straightforward to filter by region, sort by vertical position, or feed the data into a downstream text-processing pipeline. Because the return type is `IReadOnlyList<TextBlock>`, the collection is safe to enumerate multiple times without side effects.

This class fits into the lower-level Pdfium layer of IronPDF, sitting alongside other `IPdfClient`-oriented utilities rather than the higher-level `PdfDocument` API. It is the right tool when you need precise, block-level text coordinates from a specific page, for example when building a table extractor, a redaction tool, or a content-search index.

```csharp
using IronSoftware;

IReadOnlyList<TextBlock> blocks = client.GetTextBlocks(documentId, pageIndex: 0);
foreach (TextBlock block in blocks)
    Console.WriteLine(block.Text);
```

The [IronPDF text extraction how-to](https://ironpdf.com/how-to/extract-text-from-pdf/) covers common extraction patterns, and the [IronPDF examples](https://ironpdf.com/examples/extract-text/) show end-to-end scenarios.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfClientTextExtensions Class - IronPDF C# API`
- v2 (human): `PdfClientTextExtensions: Extract Text Blocks in C#`
- v3 (balanced): `PdfClientTextExtensions Class | IronPDF C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use PdfClientTextExtensions in IronPDF C# to call GetTextBlocks on IPdfClient and retrieve a structured IReadOnlyList of TextBlock objects per page.`
- v2 (human): `Extract structured text blocks from a PDF page in C# with IronPDF's PdfClientTextExtensions and its GetTextBlocks extension method on IPdfClient.`
- v3 (balanced): `Reference for IronPDF's PdfClientTextExtensions in C#: call GetTextBlocks on IPdfClient to retrieve spatially organized TextBlock data per page.`

---

## Structured data

**TechArticle abstract**

> PdfClientTextExtensions adds structured text extraction to IronPDF's IPdfClient in C#. Its GetTextBlocks extension method accepts an IPdfClient, an IDocumentId, and a zero-based page index, returning an IReadOnlyList of TextBlock objects that preserve the layout geometry detected by the Pdfium engine on that page.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfClientTextExtensions live in the IronPDF API?",
    "answer": "PdfClientTextExtensions is a static class in the IronSoftware namespace, shipped in IronPdf.dll. It extends IronSoftware.Pdfium.IPdfClient and derives from Object."
  },
  {
    "question": "How do you retrieve text blocks from a specific PDF page in C#?",
    "answer": "Call GetTextBlocks on an IPdfClient instance, passing an IDocumentId and a zero-based page_index. The method returns an IReadOnlyList<TextBlock> containing all text blocks found on that page, with positional and content data for each block."
  }
]
```