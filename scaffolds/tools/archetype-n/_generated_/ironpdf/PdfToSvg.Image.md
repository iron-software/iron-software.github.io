<!--
N-Full (class, 9 members). Frame: feature-fronted prose lead, when-fronted abstract. IronPDF.
GetContent/GetContentAsync/ToDataUrl/ToDataUrlAsync/ContentType/Extension/Width/Height verified.
Target: PdfToSvg.Image class reference page.
-->

## Injected overview (Markdown)

Embedded raster images extracted during PDF-to-SVG conversion are surfaced through `Image`, the base record that carries both the raw bytes and the metadata needed to identify, size, and embed each graphic. When IronPDF converts a PDF page to SVG, every image resource on that page becomes a concrete `Image` subclass, giving you a uniform handle regardless of the underlying encoding.

Four properties describe the image without loading its content: `ContentType` returns the MIME type (for example `image/png` or `image/jpeg`), `Extension` gives the matching file extension without a leading dot, and `Width` and `Height` report pixel dimensions. These are available immediately after extraction, so you can filter or route images before paying the cost of decoding the bytes.

To retrieve the actual content, call `GetContent` for a synchronous `byte[]` or `GetContentAsync` for the awaitable form, both accepting an optional `CancellationToken`. For scenarios where the bytes must be embedded in HTML or SVG markup directly, `ToDataUrl` and `ToDataUrlAsync` produce a complete `data:` URI string, combining the MIME type and Base64-encoded content in one step. This is particularly useful when writing SVG output that must be self-contained, with no external file references.

The constructor `Image(string contentType, string extension, int width, int height)` is `protected`, so you do not instantiate `Image` directly. Concrete subclasses returned by the IronPDF conversion pipeline populate those fields. Your code consumes the object through the public surface.

```csharp
using IronPdf;
using PdfToSvg;
using System.IO;

var renderer = new SvgRenderer();
SvgDocument svg = renderer.RenderPdfPageAsSvg("report.pdf", pageIndex: 0);

foreach (Image img in svg.Images)
{
    if (img.ContentType == "image/png" && img.Width >= 300)
    {
        byte[] raw = await img.GetContentAsync();
        await File.WriteAllBytesAsync($"extracted_{img.Width}x{img.Height}.{img.Extension}", raw);
    }
}
```

The [PDF to SVG how-to](https://ironpdf.com/how-to/pdf-to-svg/) explains the full conversion pipeline. The [image extraction example](https://ironpdf.com/examples/extract-images-from-pdf/) shows common patterns for working with extracted graphics. For embedding images in generated output, see the [data URL guide](https://ironpdf.com/how-to/html-to-pdf/) and the [IronPDF get-started page](https://ironpdf.com/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfToSvg.Image Class - IronPDF C# API Reference`
- v2 (human): `PdfToSvg.Image: Extracted PDF Images in C#`
- v3 (balanced): `PdfToSvg.Image Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use PdfToSvg.Image in IronPDF to access extracted PDF images: read bytes with GetContent or GetContentAsync and embed with ToDataUrl in C#.`
- v2 (human): `Access raster images extracted from PDF pages in C# with PdfToSvg.Image: get bytes, MIME type, dimensions, and ready-made data URIs.`
- v3 (balanced): `Reference for PdfToSvg.Image in IronPDF C#: retrieve extracted image bytes, content type, dimensions, and data URLs from PDF-to-SVG conversion.`

---

## Structured data

**TechArticle abstract**

> When converting PDF pages to SVG with IronPDF, each embedded raster image is surfaced as a PdfToSvg.Image instance carrying ContentType, Extension, Width, and Height metadata alongside synchronous and asynchronous methods for retrieving raw bytes (GetContent, GetContentAsync) and ready-made data URIs (ToDataUrl, ToDataUrlAsync). The class is abstract with a protected constructor; concrete subclasses are returned by the IronPDF conversion pipeline and consumed through the public API surface.

**FAQPage entries**

```json
[
  {
    "question": "Where does Image live in the IronPDF API?",
    "answer": "Image is an abstract class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from System.Object. Concrete subclasses are returned by the IronPDF PDF-to-SVG conversion pipeline; you do not instantiate Image directly."
  },
  {
    "question": "How do you retrieve the raw bytes of an extracted PDF image in C#?",
    "answer": "Call GetContent on the Image instance for a synchronous byte array, or await GetContentAsync for the non-blocking form. Both accept an optional CancellationToken. Use ContentType and Extension to identify the format before writing the bytes to disk."
  },
  {
    "question": "How do you embed an extracted image directly in SVG or HTML markup?",
    "answer": "Call ToDataUrl or its async counterpart ToDataUrlAsync. Both return a complete data: URI string that combines the MIME type from ContentType with Base64-encoded content, ready to assign to an SVG image element's href or an HTML img src attribute."
  },
  {
    "question": "How do you filter extracted images by size or format before processing them?",
    "answer": "Read the Width, Height, and ContentType properties on each Image before calling GetContent or GetContentAsync. These metadata properties are available immediately after extraction and carry no I/O cost, so you can skip images that do not meet your criteria."
  }
]
```