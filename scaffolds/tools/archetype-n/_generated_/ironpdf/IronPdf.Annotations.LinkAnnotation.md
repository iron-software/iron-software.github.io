<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Annotations.LinkAnnotation.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF annotations in IronPDF runs through `LinkAnnotation`. It creates a clickable link annotation that navigates to a specific page within the same PDF document.

`LinkAnnotation` matters when an application needs to configure or invoke PDF annotations from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `LinkAnnotation`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `AnnotationIndex`, `Color`, `Contents`, `DestinationBottom`. Assign options or invoke methods on the instance to configure or perform the operation. The [annotations](https://ironpdf.com/how-to/annotations/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain LinkAnnotation from the relevant entry point in the IronPDF API
void Configure(LinkAnnotation instance)
{
    var current = instance.AnnotationIndex;
    instance.ToString();
}
```

For the broader workflow, see the [color grayscale](https://ironpdf.com/how-to/color-grayscale/) guide in the IronPDF C# documentation. For broader context, the PDF annotations portion of the IronPDF C# API contains related types that work with `LinkAnnotation` directly. `LinkAnnotation` instances inherit additional members from `PdfClientAccessor` that may be relevant in advanced scenarios. In application code, treat `LinkAnnotation` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `LinkAnnotation` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `LinkAnnotation`. Application code typically obtains or instantiates a single `LinkAnnotation` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LinkAnnotation Class - IronPDF C# API Reference`
- v2 (human): `LinkAnnotation: IronPDF PDF Annotations in C#`
- v3 (balanced): `LinkAnnotation Class | IronPDF C# PDF Annotations`

**Meta-description (120-160 chars)**
- v1 (algorithm): `LinkAnnotation is the IronPDF class for PDF annotations in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF LinkAnnotation class reference for C#: creates a clickable link annotation that navigates to a specific page...`
- v3 (balanced): `LinkAnnotation (PDF Annotations) in IronPDF for C#: creates a clickable link annotation that navigates to a specific page... See members and usage.`

---

## Structured data

**TechArticle abstract**

> LinkAnnotation is the IronPDF C# entry point for PDF annotations and creates a clickable link annotation that navigates to a specific page within the same PDF document. LinkAnnotation is in the IronPdf.Annotations namespace, derived from PdfClientAccessor. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does LinkAnnotation live in the IronPDF API?",
    "answer": "LinkAnnotation is in the IronPdf.Annotations namespace, shipped in IronPdf.dll. It derives from PdfClientAccessor."
  },
  {
    "question": "What is the LinkAnnotation class used for in C#?",
    "answer": "LinkAnnotation is the IronPDF class that creates a clickable link annotation that navigates to a specific page within the same PDF document. It is part of the IronPdf.Annotations namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of LinkAnnotation?",
    "answer": "Properties commonly used on LinkAnnotation include AnnotationIndex, Color, Contents, DestinationBottom. Each property configures one aspect of the PDF annotations surface exposed by the class."
  },
  {
    "question": "How do you create a LinkAnnotation in C#?",
    "answer": "Instantiate LinkAnnotation directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).