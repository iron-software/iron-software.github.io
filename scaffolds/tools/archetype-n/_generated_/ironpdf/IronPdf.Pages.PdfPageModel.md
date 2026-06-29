<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Pages.PdfPageModel.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF pages in IronPDF is handled through `PdfPageModel`. It represents the document object model (DOM) for a single PDF page.

`PdfPageModel` matters when an application needs to configure or invoke PDF pages from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfPageModel`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `BoundingBox`, `ImageObjects`, `PageIndex`, `PathObjects`. Assign options or invoke methods on the instance to configure or perform the operation. The [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfPageModel from the relevant entry point in the IronPDF API
void Configure(PdfPageModel instance)
{
    var current = instance.BoundingBox;
    instance.ToJson();
}
```

For the broader workflow, see the [stamp text image](https://ironpdf.com/how-to/stamp-text-image/) guide in the IronPDF C# documentation. For broader context, the PDF pages portion of the IronPDF C# API contains related types that work with `PdfPageModel` directly. `PdfPageModel` instances inherit additional members from `PdfClientAccessor` that may be relevant in advanced scenarios. In application code, treat `PdfPageModel` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfPageModel` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfPageModel`. Application code typically obtains or instantiates a single `PdfPageModel` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPageModel Class - IronPDF C# API Reference`
- v2 (human): `PdfPageModel: IronPDF PDF Pages in C#`
- v3 (balanced): `PdfPageModel Class | IronPDF C# PDF Pages`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfPageModel is the IronPDF class for PDF pages in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfPageModel class reference for C#: represents the document object model (DOM) for a single PDF page.`
- v3 (balanced): `PdfPageModel (PDF Pages) in IronPDF for C#: represents the document object model (DOM) for a single PDF page. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PdfPageModel in IronPDF to work with PDF pages from C#, which provides the document object model (DOM) for a single PDF page. PdfPageModel is in the IronPdf.Pages namespace, derived from PdfClientAccessor. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PdfPageModel?",
    "answer": "PdfPageModel is in the IronPdf.Pages namespace, shipped in IronPdf.dll. It derives from PdfClientAccessor."
  },
  {
    "question": "What is the PdfPageModel class used for in C#?",
    "answer": "PdfPageModel is the IronPDF class that the document object model (DOM) for a single PDF page. It is part of the IronPdf.Pages namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfPageModel?",
    "answer": "Properties commonly used on PdfPageModel include BoundingBox, ImageObjects, PageIndex, PathObjects. Each property configures one aspect of the PDF pages surface exposed by the class."
  },
  {
    "question": "What methods are available on PdfPageModel?",
    "answer": "Common methods include ToJson. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).