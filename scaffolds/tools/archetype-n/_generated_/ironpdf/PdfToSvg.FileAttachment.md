<!--
N-Mid (3 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: PdfToSvg.FileAttachment class reference page.
-->

## Injected overview (Markdown)

Extracting a file embedded inside a PDF becomes straightforward with `FileAttachment`, the record that pairs an attachment's filename with the means to read its binary content. When IronPDF processes a PDF during SVG conversion, it surfaces each embedded file as a `FileAttachment` so the attachment's data can be retrieved without any additional parsing work.

`Name` exposes the filename stored in the PDF, such as `"report.xlsx"` or `"signature.png"`, and serves as the natural key for routing or saving the attachment. `GetContent` opens a `Stream` over the attachment's bytes synchronously, accepting an optional `CancellationToken` for cooperative cancellation in long-running operations. `GetContentAsync` mirrors that behaviour asynchronously, returning `Task<Stream>` and fitting naturally into `async`/`await` pipelines where blocking the calling thread is undesirable. Both content methods return a fresh `Stream` each time, so the caller controls lifetime and disposal.

A typical pattern reads the stream and writes it to disk alongside the converted SVG output:

```csharp
await using Stream content = await attachment.GetContentAsync();
await File.WriteAllBytesAsync(attachment.Name, await ReadAllBytesAsync(content));
```

For broader context on working with PDF attachments and conversion options, see the [IronPDF documentation](https://ironpdf.com/docs/) and the [PDF to SVG how-to](https://ironpdf.com/how-to/pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FileAttachment Class - IronPDF C# API Reference`
- v2 (human): `FileAttachment: Read PDF Attachments in C#`
- v3 (balanced): `FileAttachment Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Access embedded PDF file attachments in C# with IronPDF's FileAttachment class: read Name, GetContent, and GetContentAsync to extract attachment streams.`
- v2 (human): `Extract embedded files from a PDF in C# using IronPDF's FileAttachment class: get the filename and read content synchronously or asynchronously.`
- v3 (balanced): `Reference for IronPDF's FileAttachment class in C#: retrieve embedded PDF attachment names and read their content via GetContent or GetContentAsync.`

---

## Structured data

**TechArticle abstract**

> FileAttachment gives C# developers access to a single file embedded inside a PDF during IronPDF's PdfToSvg processing. Name exposes the stored filename, GetContent opens a synchronous Stream over the attachment bytes with optional CancellationToken support, and GetContentAsync returns a Task of Stream for use in async workflows.

**FAQPage entries**

```json
[
  {
    "question": "Where does FileAttachment live in the IronPDF API?",
    "answer": "FileAttachment is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from Object and is surfaced by IronPDF when enumerating embedded files encountered during PDF-to-SVG conversion."
  },
  {
    "question": "How do you read the content of a PDF attachment in C#?",
    "answer": "Call GetContent on the FileAttachment to receive a Stream synchronously, or call GetContentAsync to await a Task<Stream> without blocking. Both methods accept an optional CancellationToken. Use Name to determine the filename before writing the stream to disk or passing it downstream."
  }
]
```