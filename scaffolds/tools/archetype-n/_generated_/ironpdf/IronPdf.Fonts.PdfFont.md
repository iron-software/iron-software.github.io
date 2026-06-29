<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Fonts.PdfFont.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfFont` is the object IronPDF C# code works with for PDF fonts. It represents font info which describes the data structure of font referenced inside a PDF document.

`PdfFont` matters when an application needs to configure or invoke PDF fonts from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfFont`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `DescendantFontObjNum`, `DocumentId`, `FontData`, `FontSize`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain PdfFont from the relevant entry point in the IronPDF API
void Configure(PdfFont instance)
{
    var current = instance.DescendantFontObjNum;
    instance.Embed();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF fonts portion of the IronPDF C# API contains related types that work with `PdfFont` directly. `PdfFont` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfFont` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfFont` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfFont`. Application code typically obtains or instantiates a single `PdfFont` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfFont Class - IronPDF C# API Reference`
- v2 (human): `PdfFont: IronPDF PDF Fonts in C#`
- v3 (balanced): `PdfFont Class | IronPDF C# PDF Fonts`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfFont is the IronPDF class for PDF fonts in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfFont class reference for C#: font info which describes the data structure of font referenced inside a...`
- v3 (balanced): `PdfFont (PDF Fonts) in IronPDF for C#: font info which describes the data structure of font referenced inside a... See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PdfFont in IronPDF to work with PDF fonts from C#. PdfFont is in the IronPdf.Fonts namespace. Font info which describes the data structure of font referenced inside a PDF document. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PdfFont?",
    "answer": "PdfFont is in the IronPdf.Fonts namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfFont class used for in C#?",
    "answer": "PdfFont is the IronPDF class that font info which describes the data structure of font referenced inside a PDF document. It is part of the IronPdf.Fonts namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfFont?",
    "answer": "Properties commonly used on PdfFont include DescendantFontObjNum, DocumentId, FontData, FontSize. Each property configures one aspect of the PDF fonts surface exposed by the class."
  },
  {
    "question": "How do you create a PdfFont in C#?",
    "answer": "Instantiate PdfFont directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).