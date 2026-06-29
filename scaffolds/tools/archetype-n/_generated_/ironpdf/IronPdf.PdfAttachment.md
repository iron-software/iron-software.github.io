<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.PdfAttachment.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF generation in IronPDF is handled through `PdfAttachment`. It represents a file attachment embedded within a PDF document.

`PdfAttachment` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfAttachment`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Data`, `Index`, `Name`. Assign options or invoke methods on the instance to configure or perform the operation. The [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfAttachment from the relevant entry point in the IronPDF API
void Configure(PdfAttachment instance)
{
    var current = instance.Data;
}
```

For the broader workflow, see the [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `PdfAttachment` directly. `PdfAttachment` instances inherit additional members from `PdfClientAccessor` that may be relevant in advanced scenarios. In application code, treat `PdfAttachment` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfAttachment` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfAttachment`. Application code typically obtains or instantiates a single `PdfAttachment` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfAttachment Class - IronPDF C# API Reference`
- v2 (human): `PdfAttachment: IronPDF PDF Generation in C#`
- v3 (balanced): `PdfAttachment Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfAttachment is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfAttachment class reference for C#: represents a file attachment embedded within a PDF document.`
- v3 (balanced): `PdfAttachment (PDF Generation) in IronPDF for C#: represents a file attachment embedded within a PDF document. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfAttachment is the IronPDF C# entry point for PDF generation, which provides a file attachment embedded within a PDF document. PdfAttachment is in the IronPdf namespace, derived from PdfClientAccessor. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfAttachment live in the IronPDF API?",
    "answer": "PdfAttachment is in the IronPdf namespace, shipped in IronPdf.dll. It derives from PdfClientAccessor."
  },
  {
    "question": "What is the PdfAttachment class used for in C#?",
    "answer": "PdfAttachment is the IronPDF class that a file attachment embedded within a PDF document. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfAttachment?",
    "answer": "Properties commonly used on PdfAttachment include Data, Index, Name. Each property configures one aspect of the PDF generation surface exposed by the class."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).