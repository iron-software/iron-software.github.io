<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Annotations.PdfAnnotation.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfAnnotation` is the object IronPDF C# code works with for PDF annotations. It represents base PDF annotation.

`PdfAnnotation` matters when an application needs to configure or invoke PDF annotations from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfAnnotation`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Color`, `Contents`, `Hidden`, `Name`. Assign options or invoke methods on the instance to configure or perform the operation. The [base URLs](https://ironpdf.com/how-to/base-urls/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfAnnotation from the relevant entry point in the IronPDF API
void Configure(PdfAnnotation instance)
{
    var current = instance.Color;
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF annotations portion of the IronPDF C# API contains related types that work with `PdfAnnotation` directly. `PdfAnnotation` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfAnnotation` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfAnnotation` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfAnnotation`. Application code typically obtains or instantiates a single `PdfAnnotation` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfAnnotation Class - IronPDF C# API Reference`
- v2 (human): `PdfAnnotation: IronPDF PDF Annotations in C#`
- v3 (balanced): `PdfAnnotation Class | IronPDF C# PDF Annotations`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfAnnotation is the IronPDF class for PDF annotations in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfAnnotation class reference for C#: base PDF annotation.`
- v3 (balanced): `PdfAnnotation (PDF Annotations) in IronPDF for C#: base PDF annotation. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfAnnotation is the IronPDF C# entry point for PDF annotations, which provides base PDF annotation. PdfAnnotation is in the IronPdf.Annotations namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfAnnotation live in the IronPDF API?",
    "answer": "PdfAnnotation is in the IronPdf.Annotations namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfAnnotation class used for in C#?",
    "answer": "PdfAnnotation is the IronPDF class that base PDF annotation. It is part of the IronPdf.Annotations namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfAnnotation?",
    "answer": "Properties commonly used on PdfAnnotation include Color, Contents, Hidden, Name. Each property configures one aspect of the PDF annotations surface exposed by the class."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).