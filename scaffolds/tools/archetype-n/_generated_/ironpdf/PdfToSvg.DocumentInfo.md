<!--
N-Full (class, 8 members). Frame B (identity-by-role). IronPDF / PdfToSvg.DocumentInfo.
All members verified from PAGE FACTS 2026-06-22.
Target: PdfToSvg.DocumentInfo class reference page.
-->

## Injected overview (Markdown)

A read-only record of the metadata embedded in a PDF file, `DocumentInfo` gives every field that PDF producers write into a document's information dictionary: authorship, timestamps, toolchain provenance, and descriptive text. Retrieving this object is the first step whenever a workflow needs to audit, display, or index PDF metadata without opening the full document for rendering.

`DocumentInfo` surfaces eight properties drawn directly from the PDF information dictionary. The string fields, `Author`, `Creator`, `Keywords`, `Producer`, `Subject`, and `Title`, mirror the standard PDF metadata keys by the same names. `Creator` records the application that originally created the source document (for example, a word processor), while `Producer` identifies the software that converted or wrote the PDF bytes. `Keywords` arrives as a single string whose internal delimiter follows whatever convention the producing tool used, so splitting on commas or semicolons is the caller's responsibility.

The two timestamp properties, `CreationDate` and `ModDate`, are typed as `Nullable<DateTimeOffset>` rather than plain strings. That choice reflects the PDF specification: a document may omit either date entirely, and when present the value carries timezone information. Checking for `null` before formatting is therefore correct practice, not defensive boilerplate.

All eight properties are read-only. `DocumentInfo` is a value-carrying record, not a builder, so there are no setters and no constructor to call directly. The object is obtained from the IronPDF conversion pipeline rather than constructed in application code.

```csharp
using PdfToSvg;

using var doc = PdfDocument.Load("report.pdf");
DocumentInfo info = doc.Info;

Console.WriteLine($"Title:    {info.Title}");
Console.WriteLine($"Author:   {info.Author}");
Console.WriteLine($"Keywords: {info.Keywords}");

if (info.CreationDate.HasValue)
    Console.WriteLine($"Created:  {info.CreationDate.Value:yyyy-MM-dd}");

if (info.ModDate.HasValue)
    Console.WriteLine($"Modified: {info.ModDate.Value:yyyy-MM-dd}");
```

The [IronPDF get-started guide](https://ironpdf.com/get-started/) covers initial setup. The [PDF metadata how-to](https://ironpdf.com/how-to/pdf-metadata/) explains reading and writing document properties in depth. The [PDF to SVG conversion example](https://ironpdf.com/examples/pdf-to-svg/) shows the broader pipeline that surfaces `DocumentInfo`. Full API documentation is available at the [IronPDF docs hub](https://ironpdf.com/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocumentInfo Class - IronPDF C# API Reference`
- v2 (human): `DocumentInfo: Read PDF Metadata in C#`
- v3 (balanced): `DocumentInfo Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Access PDF metadata in C# with the IronPDF DocumentInfo class. Read Title, Author, Keywords, Producer, Creator, Subject, CreationDate, and ModDate.`
- v2 (human): `Read PDF document metadata in C# with DocumentInfo: get title, author, keywords, timestamps, and toolchain fields from any PDF information dictionary.`
- v3 (balanced): `Reference for the IronPDF DocumentInfo class in C#: read-only PDF metadata including Title, Author, Keywords, CreationDate, ModDate, and Producer.`

---

## Structured data

**TechArticle abstract**

> Retrieving the metadata embedded in a PDF file runs through the DocumentInfo record in the PdfToSvg namespace. The object exposes eight read-only properties drawn from the PDF information dictionary: Author, Creator, Keywords, Producer, Subject, and Title as strings, plus CreationDate and ModDate as Nullable DateTimeOffset values that reflect the optional, timezone-aware timestamps the PDF specification defines. DocumentInfo is obtained from the IronPDF conversion pipeline rather than constructed directly, and all properties are read-only.

**FAQPage entries**

```json
[
  {
    "question": "Where does DocumentInfo live in the IronPDF API?",
    "answer": "DocumentInfo is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from Object and is obtained from the IronPDF document pipeline rather than instantiated directly with new DocumentInfo()."
  },
  {
    "question": "Why are CreationDate and ModDate typed as Nullable<DateTimeOffset>?",
    "answer": "The PDF specification makes both date fields optional, and when present they carry timezone offset information. Nullable<DateTimeOffset> models both facts: a null value means the field was absent in the document, and a non-null value preserves the full timezone-aware timestamp."
  },
  {
    "question": "How do you read the title and author of a PDF in C#?",
    "answer": "Obtain a DocumentInfo object from the IronPDF document pipeline and read its Title and Author properties. Both are plain strings that map directly to the corresponding PDF information dictionary keys."
  },
  {
    "question": "What is the difference between Creator and Producer in DocumentInfo?",
    "answer": "Creator identifies the application that originally authored the source document, such as a word processor or design tool. Producer identifies the software that wrote or converted the final PDF bytes, such as a PDF library or printer driver."
  }
]
```