<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.PrintDoc.PdfPrintDocument.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF printing in IronPDF is handled through `PdfPrintDocument`. It represents advanced control over printing PDF documents to physical printers.

`PdfPrintDocument` matters when an application needs to configure or invoke PDF printing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfPrintDocument`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `FlattenDocument`. Assign options or invoke methods on the instance to configure or perform the operation. The [create forms](https://ironpdf.com/how-to/create-forms/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfPrintDocument from the relevant entry point in the IronPDF API
void Configure(PdfPrintDocument instance)
{
    var current = instance.FlattenDocument;
    instance.OnBeforePrintPage();
}
```

For the broader workflow, see the [edit forms](https://ironpdf.com/how-to/edit-forms/) guide in the IronPDF C# documentation. For broader context, the PDF printing portion of the IronPDF C# API contains related types that work with `PdfPrintDocument` directly. `PdfPrintDocument` instances inherit additional members from `PrintDocument` that may be relevant in advanced scenarios. In application code, treat `PdfPrintDocument` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfPrintDocument` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfPrintDocument`. Application code typically obtains or instantiates a single `PdfPrintDocument` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPrintDocument Class - IronPDF C# API Reference`
- v2 (human): `PdfPrintDocument: IronPDF PDF Printing in C#`
- v3 (balanced): `PdfPrintDocument Class | IronPDF C# PDF Printing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfPrintDocument is the IronPDF class for PDF printing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfPrintDocument class reference for C#: provides advanced control over printing PDF documents to physical printers.`
- v3 (balanced): `PdfPrintDocument (PDF Printing) in IronPDF for C#: provides advanced control over printing PDF documents to physical printers. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF printing is driven through PdfPrintDocument from C#. PdfPrintDocument is in the IronPdf.PrintDoc namespace, derived from PrintDocument. Advanced control over printing PDF documents to physical printers. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is PdfPrintDocument located in the IronPDF object model?",
    "answer": "PdfPrintDocument is in the IronPdf.PrintDoc namespace, shipped in IronPdf.dll. It derives from PrintDocument."
  },
  {
    "question": "What is the PdfPrintDocument class used for in C#?",
    "answer": "PdfPrintDocument is the IronPDF class that advanced control over printing PDF documents to physical printers. It is part of the IronPdf.PrintDoc namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfPrintDocument?",
    "answer": "Properties commonly used on PdfPrintDocument include FlattenDocument. Each property configures one aspect of the PDF printing surface exposed by the class."
  },
  {
    "question": "How do you create a PdfPrintDocument in C#?",
    "answer": "Instantiate PdfPrintDocument directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).