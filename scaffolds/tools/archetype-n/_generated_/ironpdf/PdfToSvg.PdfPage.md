<!--
N-Full (class, 9 members). Frame B (identity-by-role). IronPDF / PdfToSvg.
SaveAsSvg/SaveAsSvgAsync/ToSvgString/ToSvgStringAsync/Document/FileAttachments/Images verified from PAGE FACTS.
Target: PdfToSvg.PdfPage API reference page.
-->

## Injected overview (Markdown)

A handle to a single page inside a PDF document, `PdfPage` is the object through which IronPDF converts that page to scalable vector graphics. Whether the goal is writing an SVG file to disk, streaming it to a response, or capturing the markup as an in-memory string, every conversion path starts here.

`PdfPage` instances are obtained from a `PdfDocument` rather than constructed directly. Once you hold a page reference, three conversion families are available. `SaveAsSvg` writes to either a file path or a `Stream` synchronously; `SaveAsSvgAsync` provides the awaitable counterpart for keeping I/O off the UI or request thread. `ToSvgString` and `ToSvgStringAsync` skip the file system entirely and return the SVG markup as a `string`, which is convenient when the output feeds a downstream pipeline, a template engine, or an HTTP response body. All four methods accept an optional `SvgConversionOptions` argument for controlling fidelity, fonts, and other rendering details, and an optional `CancellationToken` for cooperative cancellation in long-running or server-side workflows.

Beyond conversion, `PdfPage` exposes three read-only properties that reflect the content of the underlying page. `Document` returns the parent `PdfDocument`, so you can navigate back to the full document context without holding a separate reference. `FileAttachments` surfaces the `FileAttachmentCollection` scoped to the page, and `Images` provides an `ImageEnumerable` for inspecting or extracting raster images embedded on that page.

The code below shows a representative async workflow: open a document, select a page, and save it as an SVG file using a cancellation token tied to an ASP.NET `HttpContext`.

```csharp
using PdfToSvg;

using var doc = await PdfDocument.LoadAsync("report.pdf");
PdfPage page = doc.Pages[0];

await page.SaveAsSvgAsync(
    "page-one.svg",
    new SvgConversionOptions { IncludeHiddenText = true },
    cancellationToken);
```

For a string-based path, swap `SaveAsSvgAsync` for `ToSvgStringAsync` and assign the result directly to a variable for further processing.

Explore related resources at the [IronPDF get-started guide](https://ironpdf.com/get-started/), the [PDF-to-SVG how-to](https://ironpdf.com/how-to/pdf-to-svg/), the [SVG conversion examples](https://ironpdf.com/examples/pdf-to-svg/), and the full [IronPDF documentation hub](https://ironpdf.com/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPage Class - IronPDF C# API Reference`
- v2 (human): `PdfPage: Convert PDF Pages to SVG in C#`
- v3 (balanced): `PdfPage Class | IronPDF C# SVG API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use the IronPDF PdfPage class in C# to convert a PDF page to SVG via SaveAsSvg, SaveAsSvgAsync, ToSvgString, or ToSvgStringAsync with SvgConversionOptions.`
- v2 (human): `Convert any PDF page to scalable vector graphics in C# with IronPDF's PdfPage: save to file, stream, or string, sync or async.`
- v3 (balanced): `Reference for the IronPDF PdfPage class: convert PDF pages to SVG in C# with sync and async methods, streams, file paths, and conversion options.`

---

## Structured data

**TechArticle abstract**

> Converting a single PDF page to scalable vector graphics in C# runs through the PdfToSvg.PdfPage class in IronPDF. Obtained from a PdfDocument, PdfPage exposes SaveAsSvg and SaveAsSvgAsync for writing SVG to a file path or Stream, and ToSvgString and ToSvgStringAsync for capturing the markup as an in-memory string. All methods accept an optional SvgConversionOptions and a CancellationToken. The Document, FileAttachments, and Images properties give access to the parent document and embedded page content.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfPage live in the IronPDF API?",
    "answer": "PdfPage is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from Object and is obtained from a PdfDocument rather than constructed directly."
  },
  {
    "question": "How do you convert a PDF page to an SVG string in C#?",
    "answer": "Call ToSvgString on a PdfPage instance to receive the SVG markup as a string synchronously, or await ToSvgStringAsync for the non-blocking form. Both accept an optional SvgConversionOptions and a CancellationToken."
  },
  {
    "question": "What is the difference between SaveAsSvg and ToSvgString on PdfPage?",
    "answer": "SaveAsSvg writes the SVG output to a file path or a Stream and returns void, while ToSvgString returns the SVG markup as a string without touching the file system. Both have async counterparts: SaveAsSvgAsync and ToSvgStringAsync."
  },
  {
    "question": "How do you cancel a long-running SVG conversion with PdfPage?",
    "answer": "Pass a CancellationToken to SaveAsSvgAsync, ToSvgStringAsync, or their synchronous overloads. The token is optional on all four conversion methods, making it straightforward to integrate with ASP.NET request cancellation or a timeout policy."
  }
]
```