<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Annotations.PdfFreeTextAnnotation.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfFreeTextAnnotation` is what IronPDF C# code uses for PDF annotations. It represents PDF free annotation.

`PdfFreeTextAnnotation` matters when an application needs to configure or invoke PDF annotations from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfFreeTextAnnotation`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Appearance`. Assign options or invoke methods on the instance to configure or perform the operation. The [draw text and bitmap](https://ironpdf.com/how-to/draw-text-and-bitmap/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfFreeTextAnnotation from the relevant entry point in the IronPDF API
void Configure(PdfFreeTextAnnotation instance)
{
    var current = instance.Appearance;
}
```

For the broader workflow, see the [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) guide in the IronPDF C# documentation. For broader context, the PDF annotations portion of the IronPDF C# API contains related types that work with `PdfFreeTextAnnotation` directly. `PdfFreeTextAnnotation` instances inherit additional members from `PdfAnnotation` that may be relevant in advanced scenarios. In application code, treat `PdfFreeTextAnnotation` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfFreeTextAnnotation` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfFreeTextAnnotation`. Application code typically obtains or instantiates a single `PdfFreeTextAnnotation` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfFreeTextAnnotation Class - IronPDF C# API Reference`
- v2 (human): `PdfFreeTextAnnotation: IronPDF PDF Annotations in C#`
- v3 (balanced): `PdfFreeTextAnnotation Class | IronPDF C# PDF Annotations`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfFreeTextAnnotation is the IronPDF class for PDF annotations in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfFreeTextAnnotation class reference for C#: PDF free annotation.`
- v3 (balanced): `PdfFreeTextAnnotation (PDF Annotations) in IronPDF for C#: PDF free annotation. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PdfFreeTextAnnotation in IronPDF to work with PDF annotations from C#, which provides PDF free annotation. PdfFreeTextAnnotation is in the IronPdf.Annotations namespace, derived from PdfAnnotation. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PdfFreeTextAnnotation?",
    "answer": "PdfFreeTextAnnotation is in the IronPdf.Annotations namespace, shipped in IronPdf.dll. It derives from PdfAnnotation."
  },
  {
    "question": "What is the PdfFreeTextAnnotation class used for in C#?",
    "answer": "PdfFreeTextAnnotation is the IronPDF class that PDF free annotation. It is part of the IronPdf.Annotations namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfFreeTextAnnotation?",
    "answer": "Properties commonly used on PdfFreeTextAnnotation include Appearance. Each property configures one aspect of the PDF annotations surface exposed by the class."
  },
  {
    "question": "How do you create a PdfFreeTextAnnotation in C#?",
    "answer": "Instantiate PdfFreeTextAnnotation directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).