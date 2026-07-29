<!--
N-Full (class, 11 members). Frame B (identity-by-role). PdfToSvg / IronPDF.
Open/OpenAsync/Dispose verified; Pages/Images/Info/IsEncrypted/Permissions/OptionalContentGroups verified.
Target: PdfToSvg.PdfDocument API reference page.
-->

## Injected overview (Markdown)

The entry point for converting a PDF file to SVG output in C# is `PdfDocument`, the handle through which every page, image, metadata record, and permission flag in a PDF becomes accessible to your code. Call the static `Open` or `OpenAsync` factory to load a file from a path or a `Stream`, then work with the resulting object to inspect content and drive rendering. Because `PdfDocument` implements `Dispose`, wrap it in a `using` block to release native resources promptly.

**Opening a document** accepts two overloads for each transport: a `string` path and a `Stream`. The stream overload accepts a `leaveOpen` flag (default `false`) that controls whether the underlying stream is closed when the document is disposed. Both overloads accept an `OpenOptions` instance for fine-grained load control and a `CancellationToken` for cooperative cancellation. `OpenAsync` mirrors those signatures and returns `Task<PdfDocument>`, making it the right choice in ASP.NET Core handlers or any async pipeline.

**Working with the loaded document** centers on six properties grouped by concern:

- Content access: `Pages` (`PdfPageCollection`) enumerates every page for SVG conversion; `Images` (`ImageEnumerable`) iterates embedded raster images across the document.
- Document identity: `Info` (`DocumentInfo`) exposes title, author, creation date, and other XMP/Info-dictionary fields.
- Security: `IsEncrypted` reports whether the file is password-protected; `Permissions` (`DocumentPermissions`) details what operations the document allows, such as printing or copying.
- Layering: `OptionalContentGroups` (`OptionalContentGroupCollection`) gives access to PDF optional content groups (OCG layers), which control visibility of layer-separated content during conversion.

Because `Open` is synchronous, it suits console tools and batch scripts where blocking is acceptable. For web applications or desktop apps with a responsive UI, prefer `OpenAsync` to keep the load operation off the main thread.

```csharp
using PdfToSvg;

await using var pdf = await PdfDocument.OpenAsync("report.pdf");

Console.WriteLine($"Title: {pdf.Info.Title}");
Console.WriteLine($"Pages: {pdf.Pages.Count}");
Console.WriteLine($"Encrypted: {pdf.IsEncrypted}");

foreach (var page in pdf.Pages)
    await page.SaveAsSvgAsync($"page_{page.PageNumber}.svg");
```

Explore further at the [IronPDF get-started guide](https://ironpdf.com/get-started/), the [PDF-to-SVG how-to](https://ironpdf.com/how-to/pdf-to-svg/), the [PDF metadata how-to](https://ironpdf.com/how-to/pdf-metadata/), and the [PDF security examples](https://ironpdf.com/examples/pdf-security/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfDocument Class - IronPDF C# API Reference`
- v2 (human): `PdfDocument: Open and Convert PDFs to SVG in C#`
- v3 (balanced): `PdfDocument Class | IronPDF C# SVG API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Load a PDF in C# with PdfDocument.Open or OpenAsync, then access Pages, Images, Info, and Permissions to drive SVG conversion with IronPDF.`
- v2 (human): `PdfDocument is the C# handle for opening PDFs and converting them to SVG. Access pages, images, metadata, and security flags via IronPDF.`
- v3 (balanced): `Reference for PdfToSvg.PdfDocument in C#: open PDFs from path or stream with Open or OpenAsync, then read Pages, Info, and Permissions for SVG output.`

---

## Structured data

**TechArticle abstract**

> Converting a PDF to SVG in C# starts with PdfDocument, the central handle in the PdfToSvg namespace shipped in IronPdf.dll. Call the static Open or OpenAsync factory with a file path or Stream to load the document, then access Pages for per-page SVG rendering, Images for embedded raster content, Info for metadata, IsEncrypted and Permissions for security details, and OptionalContentGroups for layer control. Dispose the instance when finished to release native resources.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfDocument live in the IronPDF API?",
    "answer": "PdfDocument is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from Object and is obtained exclusively through the static Open or OpenAsync factory methods, never through a constructor."
  },
  {
    "question": "How do you open a PDF file for SVG conversion in C#?",
    "answer": "Call PdfDocument.Open with a file path string, or PdfDocument.OpenAsync for the awaitable form. Both accept an optional OpenOptions instance and a CancellationToken. Wrap the result in a using block so Dispose is called automatically when you are finished."
  },
  {
    "question": "How do you open a password-protected or encrypted PDF?",
    "answer": "Pass decryption credentials through an OpenOptions instance to PdfDocument.Open or OpenAsync. After loading, check IsEncrypted to confirm the file was encrypted, and inspect Permissions to see which operations the document allows."
  },
  {
    "question": "What is the difference between Open and OpenAsync on PdfDocument?",
    "answer": "Open blocks the calling thread until the PDF is fully loaded, making it suitable for console tools and batch scripts. OpenAsync returns a Task<PdfDocument> and is the better choice in ASP.NET Core request handlers or desktop apps where blocking the UI thread must be avoided."
  }
]
```