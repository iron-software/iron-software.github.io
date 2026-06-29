<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.ChromePdfRenderOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`ChromePdfRenderOptions` is what IronPDF C# code uses for PDF generation. It represents HTML To PDF output options for .

`ChromePdfRenderOptions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ChromePdfRenderOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `AutoBookmarkCssSelectors`, `AutoBookmarkMaxHeadingLevel`, `AutoBookmarkMinHeadingLevel`, `AutoBookmarksFromHeadings`. Assign options or invoke methods on the instance to configure or perform the operation. The [custom paper size](https://ironpdf.com/how-to/custom-paper-size/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new ChromePdfRenderOptions();
var current = instance.AutoBookmarkCssSelectors;
// Read or assign other properties such as AutoBookmarkMaxHeadingLevel, AutoBookmarkMinHeadingLevel
instance.Clone();
```

For the broader workflow, see the [headers and footers](https://ironpdf.com/how-to/headers-and-footers/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `ChromePdfRenderOptions` directly. `ChromePdfRenderOptions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ChromePdfRenderOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ChromePdfRenderOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ChromePdfRenderOptions`. Application code typically obtains or instantiates a single `ChromePdfRenderOptions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChromePdfRenderOptions Class - IronPDF C# API Reference`
- v2 (human): `ChromePdfRenderOptions: IronPDF PDF Generation in C#`
- v3 (balanced): `ChromePdfRenderOptions Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ChromePdfRenderOptions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ChromePdfRenderOptions class reference for C#: HTML To PDF output options for .`
- v3 (balanced): `ChromePdfRenderOptions (PDF Generation) in IronPDF for C#: HTML To PDF output options for . See members and usage.`

---

## Structured data

**TechArticle abstract**

> ChromePdfRenderOptions handles PDF generation in IronPDF from C#, which provides HTML To PDF output options for . ChromePdfRenderOptions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is ChromePdfRenderOptions defined in?",
    "answer": "ChromePdfRenderOptions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ChromePdfRenderOptions class used for in C#?",
    "answer": "ChromePdfRenderOptions is the IronPDF class that HTML To PDF output options for . It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ChromePdfRenderOptions?",
    "answer": "Properties commonly used on ChromePdfRenderOptions include AutoBookmarkCssSelectors, AutoBookmarkMaxHeadingLevel, AutoBookmarkMinHeadingLevel, AutoBookmarksFromHeadings. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a ChromePdfRenderOptions in C#?",
    "answer": "Instantiate ChromePdfRenderOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).