<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Annotations.PdfAnnotationCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF annotations in IronPDF is handled through `PdfAnnotationCollection`. It manages the collection of annotations (sticky notes, comments) in a PDF document.

`PdfAnnotationCollection` matters when an application needs to configure or invoke PDF annotations from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfAnnotationCollection`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `ClearItems`, `RemoveAllAnnotationsForPage`. Assign options or invoke methods on the instance to configure or perform the operation. The [access PDF DOM object](https://ironpdf.com/how-to/access-pdf-dom-object/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfAnnotationCollection from the relevant entry point in the IronPDF API
void Configure(PdfAnnotationCollection instance)
{
    instance.ClearItems();
}
```

For the broader workflow, see the [add copy delete pages PDF](https://ironpdf.com/how-to/add-copy-delete-pages-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF annotations portion of the IronPDF C# API contains related types that work with `PdfAnnotationCollection` directly. `PdfAnnotationCollection` instances inherit additional members from `ObservableCollection<IAnnotation>` that may be relevant in advanced scenarios. In application code, treat `PdfAnnotationCollection` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfAnnotationCollection` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfAnnotationCollection`. Application code typically obtains or instantiates a single `PdfAnnotationCollection` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfAnnotationCollection Class - IronPDF C# API Reference`
- v2 (human): `PdfAnnotationCollection: IronPDF PDF Annotations in C#`
- v3 (balanced): `PdfAnnotationCollection Class | IronPDF C# PDF Annotations`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfAnnotationCollection is the IronPDF class for PDF annotations in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfAnnotationCollection class reference for C#: manages the collection of annotations (sticky notes, comments) in a PDF document.`
- v3 (balanced): `PdfAnnotationCollection (PDF Annotations) in IronPDF for C#: manages the collection of annotations (sticky notes, comments) in a PDF document. See members...`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF annotations is driven through PdfAnnotationCollection from C# and manages the collection of annotations (sticky notes, comments) in a PDF document. PdfAnnotationCollection is in the IronPdf.Annotations namespace, derived from ObservableCollection<IAnnotation>. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is PdfAnnotationCollection located in the IronPDF object model?",
    "answer": "PdfAnnotationCollection is in the IronPdf.Annotations namespace, shipped in IronPdf.dll. It derives from ObservableCollection<IAnnotation>."
  },
  {
    "question": "What is the PdfAnnotationCollection class used for in C#?",
    "answer": "PdfAnnotationCollection is the IronPDF class that manages the collection of annotations (sticky notes, comments) in a PDF document. It is part of the IronPdf.Annotations namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on PdfAnnotationCollection?",
    "answer": "Common methods include ClearItems, RemoveAllAnnotationsForPage. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).