<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.DocxPdfRenderOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`DocxPdfRenderOptions` is what IronPDF C# code uses for PDF generation. It represents margin values which can be copied from the main document to headers and footers applied to the document.

`DocxPdfRenderOptions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `DocxPdfRenderOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `FirstPageNumber`, `ForcePaperSize`, `GrayScale`, `InputEncoding`. Assign options or invoke methods on the instance to configure or perform the operation. The [headers and footers](https://ironpdf.com/how-to/headers-and-footers/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new DocxPdfRenderOptions();
var current = instance.FirstPageNumber;
// Read or assign other properties such as ForcePaperSize, GrayScale
instance.SetCustomPaperSizeinCentimeters();
```

For the broader workflow, see the [DOCX to PDF](https://ironpdf.com/how-to/docx-to-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `DocxPdfRenderOptions` directly. `DocxPdfRenderOptions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `DocxPdfRenderOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `DocxPdfRenderOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `DocxPdfRenderOptions`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocxPdfRenderOptions Class - IronPDF C# API Reference`
- v2 (human): `DocxPdfRenderOptions: IronPDF PDF Generation in C#`
- v3 (balanced): `DocxPdfRenderOptions Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `DocxPdfRenderOptions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF DocxPdfRenderOptions class reference for C#: margin values which can be copied from the main document to headers and...`
- v3 (balanced): `DocxPdfRenderOptions (PDF Generation) in IronPDF for C#: margin values which can be copied from the main document to headers and... See members and usage.`

---

## Structured data

**TechArticle abstract**

> DocxPdfRenderOptions handles PDF generation in IronPDF from C#, which provides margin values which can be copied from the main document to headers and footers applied to the document. DocxPdfRenderOptions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is DocxPdfRenderOptions defined in?",
    "answer": "DocxPdfRenderOptions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the DocxPdfRenderOptions class used for in C#?",
    "answer": "DocxPdfRenderOptions is the IronPDF class that margin values which can be copied from the main document to headers and footers applied to the document. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of DocxPdfRenderOptions?",
    "answer": "Properties commonly used on DocxPdfRenderOptions include FirstPageNumber, ForcePaperSize, GrayScale, InputEncoding. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a DocxPdfRenderOptions in C#?",
    "answer": "Instantiate DocxPdfRenderOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).