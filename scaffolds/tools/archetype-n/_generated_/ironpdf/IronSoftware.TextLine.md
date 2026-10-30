<!--
N-Mid (5 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: IronSoftware.TextLine class reference page.
-->

## Injected overview (Markdown)

Extracting structured text from a PDF page becomes precise when each horizontal run of characters is captured as a `TextLine`, a record that groups one or more `TextSpan` objects sharing the same baseline into a single addressable unit. `TextLine` follows the PyMuPDF-style line model, making its layout familiar to developers who have worked with that ecosystem.

Four read-only properties expose everything needed for text analysis and coordinate-based processing. `Contents` returns the full plain-text string of the line, assembled from all its spans. `BoundingBox` gives the line's position and size as a `RectangleF`, enabling pixel-accurate region comparisons, redaction targeting, or table-cell alignment checks. `Index` identifies the line's ordinal position within its parent block, so lines can be sorted or filtered by reading order. `Spans` provides an `IReadOnlyList<TextSpan>` of the individual styled segments that make up the line; iterating `Spans` lets you inspect font, size, or color variations within a single line without splitting the raw string manually.

A typical workflow retrieves `TextLine` objects from IronPDF's text extraction pipeline and then queries `Contents` for keyword matching or passes `BoundingBox` to a coordinate-aware extraction call.

```csharp
using IronPdf;

foreach (TextLine line in pdfPage.TextLines)
{
    if (line.Contents.Contains("Invoice", StringComparison.OrdinalIgnoreCase))
        Console.WriteLine($"Line {line.Index} at Y={line.BoundingBox.Y}: {line.Contents}");
}
```

The [extract text from PDF how-to](https://ironpdf.com/how-to/extract-text-from-pdf/) covers the full extraction pipeline, and the [PDF text extraction examples](https://ironpdf.com/examples/extract-text-from-pdf/) show coordinate-based and span-level techniques.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextLine Class - IronPDF C# API Reference`
- v2 (human): `TextLine: Read PDF Text Lines in C# | IronPDF`
- v3 (balanced): `TextLine Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Access extracted PDF text lines in C# with IronPDF's TextLine class: Contents, BoundingBox, Index, and Spans for span-level text analysis.`
- v2 (human): `Use IronPDF's TextLine in C# to read extracted PDF text, check bounding boxes, and iterate styled spans within each line of a document.`
- v3 (balanced): `Reference for IronPDF's TextLine class in C#: read Contents, BoundingBox, and Spans to analyze extracted text lines from a PDF page.`

---

## Structured data

**TechArticle abstract**

> Precise PDF text extraction in C# uses TextLine, an IronSoftware class in IronPdf.dll that represents one horizontal line of text composed of one or more TextSpan objects. Contents returns the full string, BoundingBox gives the line's RectangleF position, Index records reading order, and Spans exposes the individual styled segments for font-level inspection.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextLine live in the IronPDF API?",
    "answer": "TextLine is a class in the IronSoftware namespace, shipped in IronPdf.dll. It derives from Object and is returned as part of IronPDF's page-level text extraction pipeline, giving access to Contents, BoundingBox, Index, and Spans."
  },
  {
    "question": "How do you read individual styled segments within a TextLine in C#?",
    "answer": "Iterate the Spans property, which returns an IReadOnlyList<TextSpan>. Each TextSpan represents a run of text sharing the same style within the line, letting you inspect font or formatting details without manually splitting the Contents string."
  }
]
```