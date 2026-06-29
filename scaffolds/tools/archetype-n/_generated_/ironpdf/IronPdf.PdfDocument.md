<!--
N-Full (class, 255 members). Frame B (identity-by-role). IronPdf.
PdfDocument constructors, Pages, Annotations, Attachments, Bookmarks, Fonts, Form, Layers, MetaData, SecuritySettings, Password, OwnerPassword, PageCount, BinaryData, Stream verified.
AppendPdf, ApplyStamp, ApplyMultipleStamps, AddHtmlHeaders/Footers, AddBackgroundPdf, AddForegroundOverlayPdf verified.
Target: IronPdf.PdfDocument class reference.
-->

## Injected overview (Markdown)

The central object for every post-render operation in IronPDF is `PdfDocument`: the handle through which you merge, split, stamp, secure, annotate, and save PDF files in C#. Renderers such as `ChromePdfRenderer` produce one, and you can also construct one directly from a file path, a `byte[]`, a `Stream`, a `Uri`, or a pair of width/height dimensions for a blank canvas.

With 255 members, `PdfDocument` covers a wide surface. The properties group naturally into functional areas:

**Content and structure:** `Pages` (`PdfPagesCollection`) gives index-based access to individual pages; `PageCount` reports the total. `Annotations` (`PdfAnnotationCollection`), `Bookmarks` (`PdfBookMarkCollection`), `Attachments` (`PdfAttachmentCollection`), `Fonts` (`PdfFontCollection`), `Form` (`FormFieldCollection`), and `Layers` (`PdfLayerCollection`) expose every embedded object type as a typed, editable collection.

**Document identity:** `MetaData` (`PdfMetaData`) holds author, title, creation date, and custom XMP fields. `RevisionCount` tracks how many incremental saves the document has accumulated.

**Security:** `SecuritySettings` (`PdfSecuritySettings`) controls permissions such as printing and copying. `Password` and `OwnerPassword` set the user and owner passwords directly on the object.

**Raw bytes and streaming:** `BinaryData` returns the full PDF as a `byte[]`; `BinaryDataIncremental` returns only the incremental delta. `Stream` exposes a `MemoryStream` for pipeline scenarios.

Modification methods follow a fluent pattern: most return `PdfDocument` so calls can be chained. `AppendPdf` concatenates another document. `ApplyStamp` and `ApplyMultipleStamps` (with async variants) place `Stamper` objects on chosen pages. `AddBackgroundPdf` and `AddForegroundOverlayPdf` composite one PDF behind or in front of another, with page-range overloads for precise targeting. `AddHtmlHeaders`, `AddHtmlFooters`, `AddTextHeaders`, and `AddTextFooters` inject running headers and footers, accepting margin, page-number offset, and page-filter parameters.

The constructor that accepts a `string` file path, optional `Password`, optional `OwnerPassword`, and a `ChangeTrackingModes` value is the most common entry point when loading an existing file. Pass `ChangeTrackingModes` to enable incremental-save tracking so that `BinaryDataIncremental` captures only what changed, which is useful for large documents that receive small edits.

```csharp
using IronPdf;
using IronPdf.Editing;

using var pdf = new PdfDocument("report.pdf");

var stamp = new TextStamper { Text = "CONFIDENTIAL", FontSize = 36, Opacity = 0.4 };
pdf.ApplyStamp(stamp);

pdf.SecuritySettings.AllowUserPrinting = IronPdf.Security.PdfPrintSecurity.FullPrintAllowed;
pdf.Password = "user-pass";

pdf.SaveAs("report-secured.pdf");
```

Explore further at the [IronPDF documentation hub](https://ironpdf.com/docs/), the [PDF stamping how-to](https://ironpdf.com/how-to/stamp-text-image-pdf/), the [PDF security how-to](https://ironpdf.com/how-to/pdf-permissions-passwords/), and the [merge and split examples](https://ironpdf.com/examples/merge-or-split-pdfs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfDocument Class - IronPDF C# API Reference`
- v2 (human): `PdfDocument: Edit & Save PDFs in C#`
- v3 (balanced): `PdfDocument Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `PdfDocument is the IronPDF C# class for merging, stamping, securing, and saving PDFs. Load from file, bytes, or stream and chain fluent modification methods.`
- v2 (human): `Edit, secure, stamp, and save PDF files in C# with IronPDF's PdfDocument class. Access pages, annotations, forms, bookmarks, and security settings.`
- v3 (balanced): `Reference for IronPDF PdfDocument in C#: load, modify, stamp, and secure PDFs with 255 members covering pages, annotations, forms, and binary output.`

---

## Structured data

**TechArticle abstract**

> PdfDocument is the central handle in IronPDF for merging, splitting, stamping, securing, and saving PDF files in C#. Load one from a file path, byte array, Stream, or Uri, or receive one from a renderer. Properties expose typed collections for pages, annotations, bookmarks, attachments, form fields, fonts, and layers. Fluent methods including AppendPdf, ApplyStamp, AddBackgroundPdf, and AddHtmlHeaders return PdfDocument so calls chain naturally. SecuritySettings, Password, and OwnerPassword control access, while BinaryData and Stream handle raw output. PdfDocument lives in the IronPdf namespace, ships in IronPdf.dll, and derives from PdfClientAccessor.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfDocument live in the IronPDF API?",
    "answer": "PdfDocument is a class in the IronPdf namespace, shipped in IronPdf.dll. It derives from PdfClientAccessor. Construct it directly with one of its overloads (file path, byte array, Stream, Uri, or dimensions) or receive one from a renderer such as ChromePdfRenderer."
  },
  {
    "question": "How do you load an existing PDF file with PdfDocument in C#?",
    "answer": "Pass the file path to the constructor: new PdfDocument(\"file.pdf\"). Optional parameters accept a user Password, an OwnerPassword, and a ChangeTrackingModes value. For encrypted files supply the password in the same constructor call."
  },
  {
    "question": "How do you stamp text or an image onto a PDF with PdfDocument?",
    "answer": "Create a Stamper subclass (such as TextStamper or ImageStamper), then call ApplyStamp on the PdfDocument, optionally passing a page index or an IEnumerable<int> of page indexes. ApplyMultipleStamps and their async variants handle batches of stamps in one call."
  },
  {
    "question": "How do you save a PdfDocument to disk or retrieve its bytes in C#?",
    "answer": "Call SaveAs with a file path to write to disk. Use the BinaryData property to get the full PDF as a byte array, BinaryDataIncremental for only the incremental delta, or the Stream property for a MemoryStream suitable for HTTP responses and pipeline scenarios."
  }
]
```