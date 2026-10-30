<!--
N-Full (class, 7 members). Frame B (identity-by-role). IronPDF.
TextSpan members verified: BoundingBox, Contents, FillColor, Font, FontSize, Fragments, ctor.
Base type: Object. Namespace: IronSoftware. Assembly: IronPdf.dll.
Target: IronSoftware.TextSpan API reference page.
-->

## Injected overview (Markdown)

A `TextSpan` is the atomic record of extracted PDF text: a contiguous run of characters that share the same font, size, and fill color, modeled after the span concept in PyMuPDF. Whenever IronPDF walks a PDF page to surface its textual content, each visually uniform segment arrives as one of these objects, giving you precise access to both the characters and the typographic context around them.

The `Contents` property holds the raw string for the span. Alongside it, `FontSize` gives the point size, `Font` exposes the full `FontObject` descriptor (name, weight, and encoding details), and `FillColor` returns the rendered `Color` so you can distinguish, for example, red headings from black body text. `BoundingBox` provides a `RectangleF` in PDF user-space coordinates, which maps the span's position and dimensions onto the page, useful for spatial filtering or overlay annotation. When a span is composed of multiple discrete drawing operations, `Fragments` exposes each constituent `TextObject` as an `IReadOnlyList<TextObject>`, letting you inspect sub-span detail without losing the grouped view.

You do not construct `TextSpan` directly in typical workflows. Instances surface through IronPDF's text-extraction pipeline when you interrogate a `PdfDocument` page. From there, iterate the spans, filter by `FillColor` or `FontSize`, and read `Contents` to assemble the text you need.

```csharp
using IronPdf;
using IronSoftware;

using var pdf = PdfDocument.FromFile("report.pdf");
var page = pdf.Pages[0];

foreach (TextSpan span in page.GetTextSpans())
{
    if (span.FontSize >= 14f)
        Console.WriteLine($"{span.Contents}  [{span.BoundingBox.X:F1}, {span.BoundingBox.Y:F1}]");
}
```

Because `BoundingBox` uses PDF user-space (origin at the bottom-left of the page), coordinates increase upward. Convert to screen coordinates by subtracting the Y value from the page height when you need top-left-origin positioning for overlays or crop operations.

Explore related topics in the IronPDF documentation: the [text extraction how-to](https://ironpdf.com/how-to/extract-text-from-pdf/) explains the full pipeline, the [PDF reading examples](https://ironpdf.com/examples/extract-text-from-pdf/) show common patterns, the [font handling guide](https://ironpdf.com/how-to/custom-fonts/) covers `FontObject` usage, and the [get started page](https://ironpdf.com/get-started/) walks through installation and licensing.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextSpan Class - IronPDF C# API Reference`
- v2 (human): `TextSpan: Extracted PDF Text Spans in C#`
- v3 (balanced): `TextSpan Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use the IronPDF TextSpan class in C# to access extracted PDF text runs with font, size, color, bounding box, and fragment-level detail per span.`
- v2 (human): `TextSpan gives you extracted PDF text in C#, with font, size, fill color, bounding box, and per-fragment access via IronPDF's text pipeline.`
- v3 (balanced): `Reference for the IronPDF TextSpan class in C#: read Contents, FontSize, FillColor, BoundingBox, and Fragments from each extracted PDF text run.`

---

## Structured data

**TechArticle abstract**

> A TextSpan record in IronPDF captures a contiguous run of PDF text that shares a single font, size, and fill color. Instances surface through IronPDF's text-extraction pipeline rather than direct construction. Each span exposes Contents for the text, FontSize and Font for typographic detail, FillColor for the rendered color, BoundingBox as a RectangleF in PDF user-space, and Fragments as an IReadOnlyList of TextObject entries for sub-span inspection. The class lives in the IronSoftware namespace, ships in IronPdf.dll, and derives from Object.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextSpan live in the IronPDF API?",
    "answer": "TextSpan is a class in the IronSoftware namespace, shipped in IronPdf.dll. It derives from Object. Instances are returned by IronPDF's text-extraction pipeline when you interrogate a PDF page; you do not construct TextSpan directly."
  },
  {
    "question": "How do you extract text with font and color information from a PDF in C#?",
    "answer": "Use IronPDF's text-extraction pipeline to obtain TextSpan objects from a PDF page. Each TextSpan exposes Contents for the text, Font and FontSize for typographic detail, and FillColor for the rendered color, so you can filter or group spans by their visual style."
  },
  {
    "question": "What does the BoundingBox property on TextSpan represent?",
    "answer": "BoundingBox is a RectangleF in PDF user-space coordinates, with the origin at the bottom-left of the page and Y increasing upward. It gives the position and dimensions of the text run on the page, which you can use for spatial filtering, cropping, or overlay annotation."
  },
  {
    "question": "When would you use the Fragments property instead of Contents?",
    "answer": "Contents gives the combined string for the entire span. Fragments exposes each constituent TextObject as an IReadOnlyList<TextObject>, which is useful when a span is built from multiple discrete drawing operations and you need sub-span positional or stylistic detail."
  }
]
```