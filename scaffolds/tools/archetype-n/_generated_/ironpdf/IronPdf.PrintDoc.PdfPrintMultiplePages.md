<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.PrintDoc.PdfPrintMultiplePages.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF printing in IronPDF is handled through `PdfPrintMultiplePages`. It configures N-up printing to place multiple PDF pages on a single physical sheet.

`PdfPrintMultiplePages` matters when an application needs to configure or invoke PDF printing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfPrintMultiplePages`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Column`, `Margin`, `Orientation`, `Row`. Assign options or invoke methods on the instance to configure or perform the operation. The [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfPrintMultiplePages from the relevant entry point in the IronPDF API
void Configure(PdfPrintMultiplePages instance)
{
    var current = instance.Column;
}
```

For the broader workflow, see the [custom paper size](https://ironpdf.com/how-to/custom-paper-size/) guide in the IronPDF C# documentation. For broader context, the PDF printing portion of the IronPDF C# API contains related types that work with `PdfPrintMultiplePages` directly. `PdfPrintMultiplePages` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfPrintMultiplePages` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfPrintMultiplePages` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfPrintMultiplePages`. Application code typically obtains or instantiates a single `PdfPrintMultiplePages` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPrintMultiplePages Class - IronPDF C# API Reference`
- v2 (human): `PdfPrintMultiplePages: IronPDF PDF Printing in C#`
- v3 (balanced): `PdfPrintMultiplePages Class | IronPDF C# PDF Printing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfPrintMultiplePages is the IronPDF class for PDF printing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfPrintMultiplePages class reference for C#: configures N-up printing to place multiple PDF pages on a single physical sheet.`
- v3 (balanced): `PdfPrintMultiplePages (PDF Printing) in IronPDF for C#: configures N-up printing to place multiple PDF pages on a single physical sheet. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF printing is driven through PdfPrintMultiplePages from C# and configures N-up printing to place multiple PDF pages on a single physical sheet. PdfPrintMultiplePages is in the IronPdf.PrintDoc namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is PdfPrintMultiplePages located in the IronPDF object model?",
    "answer": "PdfPrintMultiplePages is in the IronPdf.PrintDoc namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfPrintMultiplePages class used for in C#?",
    "answer": "PdfPrintMultiplePages is the IronPDF class that configures N-up printing to place multiple PDF pages on a single physical sheet. It is part of the IronPdf.PrintDoc namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfPrintMultiplePages?",
    "answer": "Properties commonly used on PdfPrintMultiplePages include Column, Margin, Orientation, Row. Each property configures one aspect of the PDF printing surface exposed by the class."
  },
  {
    "question": "How do you create a PdfPrintMultiplePages in C#?",
    "answer": "Instantiate PdfPrintMultiplePages directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).