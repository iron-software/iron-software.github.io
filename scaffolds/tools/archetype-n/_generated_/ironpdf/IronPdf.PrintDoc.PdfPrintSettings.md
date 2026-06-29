<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.PrintDoc.PdfPrintSettings.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `PdfPrintSettings` in IronPDF when a C# application works with PDF printing. It controls physical printing options for PDF documents including layout and page arrangement.

`PdfPrintSettings` matters when an application needs to configure or invoke PDF printing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfPrintSettings`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `MultiplePages`. Assign options or invoke methods on the instance to configure or perform the operation. The [print PDF](https://ironpdf.com/how-to/print-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfPrintSettings from the relevant entry point in the IronPDF API
void Configure(PdfPrintSettings instance)
{
    var current = instance.MultiplePages;
}
```

For the broader workflow, see the [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF printing portion of the IronPDF C# API contains related types that work with `PdfPrintSettings` directly. `PdfPrintSettings` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfPrintSettings` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfPrintSettings` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfPrintSettings`. Application code typically obtains or instantiates a single `PdfPrintSettings` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPrintSettings Class - IronPDF C# API Reference`
- v2 (human): `PdfPrintSettings: IronPDF PDF Printing in C#`
- v3 (balanced): `PdfPrintSettings Class | IronPDF C# PDF Printing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfPrintSettings is the IronPDF class for PDF printing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfPrintSettings class reference for C#: controls physical printing options for PDF documents including layout and...`
- v3 (balanced): `PdfPrintSettings (PDF Printing) in IronPDF for C#: controls physical printing options for PDF documents including layout and... See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfPrintSettings is the IronPDF C# entry point for PDF printing and controls physical printing options for PDF documents including layout and page arrangement. PdfPrintSettings is in the IronPdf.PrintDoc namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfPrintSettings live in the IronPDF API?",
    "answer": "PdfPrintSettings is in the IronPdf.PrintDoc namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfPrintSettings class used for in C#?",
    "answer": "PdfPrintSettings is the IronPDF class that controls physical printing options for PDF documents including layout and page arrangement. It is part of the IronPdf.PrintDoc namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfPrintSettings?",
    "answer": "Properties commonly used on PdfPrintSettings include MultiplePages. Each property configures one aspect of the PDF printing surface exposed by the class."
  },
  {
    "question": "How do you create a PdfPrintSettings in C#?",
    "answer": "Instantiate PdfPrintSettings directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).