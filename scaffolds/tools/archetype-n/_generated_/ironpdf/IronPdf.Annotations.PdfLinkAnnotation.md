<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Annotations.PdfLinkAnnotation.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfLinkAnnotation` is what IronPDF C# code uses for PDF annotations. It represents PDF link annotation.

`PdfLinkAnnotation` matters when an application needs to configure or invoke PDF annotations from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfLinkAnnotation`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Dest`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain PdfLinkAnnotation from the relevant entry point in the IronPDF API
void Configure(PdfLinkAnnotation instance)
{
    var current = instance.Dest;
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF annotations portion of the IronPDF C# API contains related types that work with `PdfLinkAnnotation` directly. `PdfLinkAnnotation` instances inherit additional members from `PdfAnnotation` that may be relevant in advanced scenarios. In application code, treat `PdfLinkAnnotation` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfLinkAnnotation` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfLinkAnnotation`. Application code typically obtains or instantiates a single `PdfLinkAnnotation` and shares it across multiple IronPDF operations rather than recreating it per call. For multi-threaded scenarios, follow the threading guidance for the relevant IronPDF entry point; `PdfLinkAnnotation` instances are not assumed to be thread-safe unless documented.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfLinkAnnotation Class - IronPDF C# API Reference`
- v2 (human): `PdfLinkAnnotation: IronPDF PDF Annotations in C#`
- v3 (balanced): `PdfLinkAnnotation Class | IronPDF C# PDF Annotations`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfLinkAnnotation is the IronPDF class for PDF annotations in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfLinkAnnotation class reference for C#: PDF link annotation.`
- v3 (balanced): `PdfLinkAnnotation (PDF Annotations) in IronPDF for C#: PDF link annotation. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfLinkAnnotation handles PDF annotations in IronPDF from C#, which provides PDF link annotation. PdfLinkAnnotation is in the IronPdf.Annotations namespace, derived from PdfAnnotation. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is PdfLinkAnnotation defined in?",
    "answer": "PdfLinkAnnotation is in the IronPdf.Annotations namespace, shipped in IronPdf.dll. It derives from PdfAnnotation."
  },
  {
    "question": "What is the PdfLinkAnnotation class used for in C#?",
    "answer": "PdfLinkAnnotation is the IronPDF class that PDF link annotation. It is part of the IronPdf.Annotations namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfLinkAnnotation?",
    "answer": "Properties commonly used on PdfLinkAnnotation include Dest. Each property configures one aspect of the PDF annotations surface exposed by the class."
  },
  {
    "question": "How do you create a PdfLinkAnnotation in C#?",
    "answer": "Instantiate PdfLinkAnnotation directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).