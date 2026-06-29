<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Pages.PdfPage.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF pages in IronPDF runs through `PdfPage`. It represents a single page within a PDF document with access to dimensions, content, and manipulation methods.

`PdfPage` matters when an application needs to configure or invoke PDF pages from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfPage`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Characters`, `Height`, `Lines`, `ObjectModel`. Assign options or invoke methods on the instance to configure or perform the operation. The [transform PDF pages](https://ironpdf.com/how-to/transform-pdf-pages/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfPage from the relevant entry point in the IronPDF API
void Configure(PdfPage instance)
{
    var current = instance.Characters;
    instance.Extend();
}
```

For the broader workflow, see the [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) guide in the IronPDF C# documentation. For broader context, the PDF pages portion of the IronPDF C# API contains related types that work with `PdfPage` directly. `PdfPage` instances inherit additional members from `PdfClientAccessor` that may be relevant in advanced scenarios. In application code, treat `PdfPage` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfPage` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfPage`. Application code typically obtains or instantiates a single `PdfPage` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPage Class - IronPDF C# API Reference`
- v2 (human): `PdfPage: IronPDF PDF Pages in C#`
- v3 (balanced): `PdfPage Class | IronPDF C# PDF Pages`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfPage is the IronPDF class for PDF pages in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfPage class reference for C#: represents a single page within a PDF document with access to dimensions...`
- v3 (balanced): `PdfPage (PDF Pages) in IronPDF for C#: represents a single page within a PDF document with access to dimensions... See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfPage is the IronPDF C# entry point for PDF pages, which provides a single page within a PDF document with access to dimensions, content, and manipulation methods. PdfPage is in the IronPdf.Pages namespace, derived from PdfClientAccessor. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfPage live in the IronPDF API?",
    "answer": "PdfPage is in the IronPdf.Pages namespace, shipped in IronPdf.dll. It derives from PdfClientAccessor."
  },
  {
    "question": "What is the PdfPage class used for in C#?",
    "answer": "PdfPage is the IronPDF class that a single page within a PDF document with access to dimensions, content, and manipulation methods. It is part of the IronPdf.Pages namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfPage?",
    "answer": "Properties commonly used on PdfPage include Characters, Height, Lines, ObjectModel. Each property configures one aspect of the PDF pages surface exposed by the class."
  },
  {
    "question": "How do you create a PdfPage in C#?",
    "answer": "Instantiate PdfPage directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).