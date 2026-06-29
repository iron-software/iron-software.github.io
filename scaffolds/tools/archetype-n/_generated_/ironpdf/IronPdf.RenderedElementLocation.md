<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.RenderedElementLocation.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF generation in IronPDF is handled through `RenderedElementLocation`. It represents the rendered location of an HTML element within a PDF document.

`RenderedElementLocation` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `RenderedElementLocation`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `ElementIndex`, `PageIndex`, `Rectangle`, `Text`. Assign options or invoke methods on the instance to configure or perform the operation. The [HTML element to PDF](https://ironpdf.com/how-to/html-element-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new RenderedElementLocation();
var current = instance.ElementIndex;
// Read or assign other properties such as PageIndex, Rectangle
instance.Equals();
```

For the broader workflow, see the [ironpdf 2021 chrome rendering engine eap](https://ironpdf.com/how-to/ironpdf-2021-chrome-rendering-engine-eap/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `RenderedElementLocation` directly. `RenderedElementLocation` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `RenderedElementLocation` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `RenderedElementLocation` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `RenderedElementLocation`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RenderedElementLocation Class - IronPDF C# API Reference`
- v2 (human): `RenderedElementLocation: IronPDF PDF Generation in C#`
- v3 (balanced): `RenderedElementLocation Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `RenderedElementLocation is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF RenderedElementLocation class reference for C#: represents the rendered location of an HTML element within a PDF document.`
- v3 (balanced): `RenderedElementLocation (PDF Generation) in IronPDF for C#: represents the rendered location of an HTML element within a PDF document. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF generation is driven through RenderedElementLocation from C#, which provides the rendered location of an HTML element within a PDF document. RenderedElementLocation is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is RenderedElementLocation located in the IronPDF object model?",
    "answer": "RenderedElementLocation is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the RenderedElementLocation class used for in C#?",
    "answer": "RenderedElementLocation is the IronPDF class that the rendered location of an HTML element within a PDF document. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of RenderedElementLocation?",
    "answer": "Properties commonly used on RenderedElementLocation include ElementIndex, PageIndex, Rectangle, Text. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a RenderedElementLocation in C#?",
    "answer": "Instantiate RenderedElementLocation directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).