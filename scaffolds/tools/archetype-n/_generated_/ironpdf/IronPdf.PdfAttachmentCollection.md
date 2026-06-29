<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.PdfAttachmentCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF generation in IronPDF is handled through `PdfAttachmentCollection`. It manages the collection of file attachments embedded in a PDF document.

`PdfAttachmentCollection` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfAttachmentCollection`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Item[Int32]`. Assign options or invoke methods on the instance to configure or perform the operation. The [add remove attachments](https://ironpdf.com/how-to/add-remove-attachments/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfAttachmentCollection from the relevant entry point in the IronPDF API
void Configure(PdfAttachmentCollection instance)
{
    var current = instance.Item[Int32];
    instance.AddAttachment();
}
```

For the broader workflow, see the [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `PdfAttachmentCollection` directly. `PdfAttachmentCollection` instances inherit additional members from `PdfClientAccessor` that may be relevant in advanced scenarios. In application code, treat `PdfAttachmentCollection` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfAttachmentCollection` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfAttachmentCollection`. Application code typically obtains or instantiates a single `PdfAttachmentCollection` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfAttachmentCollection Class - IronPDF C# API Reference`
- v2 (human): `PdfAttachmentCollection: IronPDF PDF Generation in C#`
- v3 (balanced): `PdfAttachmentCollection Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfAttachmentCollection is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfAttachmentCollection class reference for C#: manages the collection of file attachments embedded in a PDF document.`
- v3 (balanced): `PdfAttachmentCollection (PDF Generation) in IronPDF for C#: manages the collection of file attachments embedded in a PDF document. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PdfAttachmentCollection in IronPDF to work with PDF generation from C# and manages the collection of file attachments embedded in a PDF document. PdfAttachmentCollection is in the IronPdf namespace, derived from PdfClientAccessor. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PdfAttachmentCollection?",
    "answer": "PdfAttachmentCollection is in the IronPdf namespace, shipped in IronPdf.dll. It derives from PdfClientAccessor."
  },
  {
    "question": "What is the PdfAttachmentCollection class used for in C#?",
    "answer": "PdfAttachmentCollection is the IronPDF class that manages the collection of file attachments embedded in a PDF document. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfAttachmentCollection?",
    "answer": "Properties commonly used on PdfAttachmentCollection include Item[Int32]. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "What methods are available on PdfAttachmentCollection?",
    "answer": "Common methods include AddAttachment, GetEnumerator, RemoveAttachment. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).