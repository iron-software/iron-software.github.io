<!--
N-Mid (5 members). Frame C. IronPDF. Members verified 2026-06-22. TextBlock cross-ref verified.
Target: IronSoftware.TextBlock class reference page.
-->

## Injected overview (Markdown)

Grouped text extraction from a PDF page becomes navigable when `TextBlock` organizes adjacent `TextLine` objects into a single spatial unit. Each `TextBlock` represents a cluster of lines that fall within close vertical proximity, mirroring the block model used by PyMuPDF, and gives code a structured way to reason about paragraphs, columns, and captions rather than raw character streams.

`BoundingBox` exposes a `RectangleF` describing the rectangle that encloses all lines in the block, useful for coordinate-based filtering or layout analysis. `Contents` collapses every line into a single string, giving quick access to the block's full text without iterating `Lines`. `Index` records the block's position in the sequence returned by the extraction call, so ordering is always recoverable. `Lines` provides an `IReadOnlyList<TextLine>` for per-line inspection, letting code examine individual line positions, text, or spacing within the block.

```csharp
using IronPdf;

foreach (TextBlock block in PdfDocument.FromFile("report.pdf").Pages[0].GetTextBlocks())
{
    if (block.BoundingBox.Y < 100)
        Console.WriteLine($"Header block {block.Index}: {block.Contents}");
}
```

The `IReadOnlyList<TextLine>` surface on `Lines` pairs naturally with LINQ, making it straightforward to filter blocks by line count, bounding-box position, or keyword presence. Because `BoundingBox` uses page-coordinate units consistent with IronPDF's rendering pipeline, the same rectangle can drive annotation placement or region-based redaction without coordinate conversion.

Explore related techniques at the [IronPDF text extraction how-to](https://ironpdf.com/how-to/extract-text-from-pdf/) and browse runnable samples at the [PDF text extraction examples](https://ironpdf.com/examples/extract-text-from-pdf/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextBlock Class - IronPDF C# API Reference`
- v2 (human): `TextBlock: Grouped PDF Text Lines in C#`
- v3 (balanced): `TextBlock Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use the IronPDF TextBlock class in C# to access grouped PDF text lines, bounding boxes, and contents from structured page extraction.`
- v2 (human): `Inspect extracted PDF text by block in C# with IronPDF's TextBlock: read Contents, iterate Lines, and filter by BoundingBox position.`
- v3 (balanced): `Reference for the IronPDF TextBlock class in C#: grouped text lines with BoundingBox, Contents, Index, and Lines for PDF text extraction.`

---

## Structured data

**TechArticle abstract**

> Structured PDF text extraction in C# uses TextBlock to group adjacent TextLine objects into a spatial unit with a bounding rectangle. BoundingBox gives the enclosing RectangleF, Contents returns the full block text, Index records sequence position, and Lines exposes an IReadOnlyList of TextLine for per-line inspection. TextBlock is a class in the IronSoftware namespace, shipped in IronPdf.dll, and derives from Object.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextBlock live in the IronPDF API?",
    "answer": "TextBlock is a class in the IronSoftware namespace, shipped in IronPdf.dll. It derives from Object and is returned as part of the block-level text extraction surface exposed by IronPDF's page model."
  },
  {
    "question": "How do you read the full text of a TextBlock in C#?",
    "answer": "Access the Contents property, which returns a single string combining all lines in the block. For per-line detail, iterate the Lines property, which is an IReadOnlyList of TextLine objects. Use BoundingBox to filter blocks by position before reading their text."
  }
]
```