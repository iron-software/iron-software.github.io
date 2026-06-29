<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.DocxToPdfRenderer.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `DocxToPdfRenderer` in IronPDF when a C# application works with PDF generation. It represents converts Microsoft Word documents (.DOCX) to PDF with perfect formatting preservation.

`DocxToPdfRenderer` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `DocxToPdfRenderer`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `RenderingOptions`. Assign options or invoke methods on the instance to configure or perform the operation. The [DOCX to PDF](https://ironpdf.com/how-to/docx-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new DocxToPdfRenderer();
var current = instance.RenderingOptions;
instance.RenderDocxAsPdf();
```

For the broader workflow, see the [DOCX to PDF](https://ironpdf.com/examples/docx-to-pdf/) example and the [DOCX to PDF](https://ironpdf.com/how-to/docx-to-pdf/#stream-conversion) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `DocxToPdfRenderer` directly. `DocxToPdfRenderer` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `DocxToPdfRenderer` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `DocxToPdfRenderer` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `DocxToPdfRenderer`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocxToPdfRenderer Class - IronPDF C# API Reference`
- v2 (human): `DocxToPdfRenderer: IronPDF PDF Generation in C#`
- v3 (balanced): `DocxToPdfRenderer Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `DocxToPdfRenderer is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF DocxToPdfRenderer class reference for C#: converts Microsoft Word documents (.DOCX) to PDF with perfect formatting...`
- v3 (balanced): `DocxToPdfRenderer (PDF Generation) in IronPDF for C#: converts Microsoft Word documents (.DOCX) to PDF with perfect formatting... See members and usage.`

---

## Structured data

**TechArticle abstract**

> DocxToPdfRenderer is the IronPDF C# entry point for PDF generation, which provides converts Microsoft Word documents (.DOCX) to PDF with perfect formatting preservation. DocxToPdfRenderer is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does DocxToPdfRenderer live in the IronPDF API?",
    "answer": "DocxToPdfRenderer is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the DocxToPdfRenderer class used for in C#?",
    "answer": "DocxToPdfRenderer is the IronPDF class that converts Microsoft Word documents (.DOCX) to PDF with perfect formatting preservation. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of DocxToPdfRenderer?",
    "answer": "Properties commonly used on DocxToPdfRenderer include RenderingOptions. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a DocxToPdfRenderer in C#?",
    "answer": "Instantiate DocxToPdfRenderer directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).