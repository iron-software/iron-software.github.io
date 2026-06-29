<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.HtmlFormatOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `HtmlFormatOptions`. It contains properties that define the formatting options for converting PDF to HTML.

`HtmlFormatOptions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `HtmlFormatOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `BackgroundColor`, `H1Color`, `H1FontSize`, `H1TextAlignment`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

var instance = new HtmlFormatOptions();
var current = instance.BackgroundColor;
// Read or assign other properties such as H1Color, H1FontSize
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `HtmlFormatOptions` directly. `HtmlFormatOptions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `HtmlFormatOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `HtmlFormatOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `HtmlFormatOptions`. Application code typically obtains or instantiates a single `HtmlFormatOptions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HtmlFormatOptions Class - IronPDF C# API Reference`
- v2 (human): `HtmlFormatOptions: IronPDF PDF Generation in C#`
- v3 (balanced): `HtmlFormatOptions Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `HtmlFormatOptions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF HtmlFormatOptions class reference for C#: this class contains properties that define the formatting options for...`
- v3 (balanced): `HtmlFormatOptions (PDF Generation) in IronPDF for C#: this class contains properties that define the formatting options for... See members and usage.`

---

## Structured data

**TechArticle abstract**

> HtmlFormatOptions is the IronPDF C# entry point for PDF generation and contains properties that define the formatting options for converting PDF to HTML. HtmlFormatOptions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does HtmlFormatOptions live in the IronPDF API?",
    "answer": "HtmlFormatOptions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the HtmlFormatOptions class used for in C#?",
    "answer": "HtmlFormatOptions is the IronPDF class that contains properties that define the formatting options for converting PDF to HTML. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of HtmlFormatOptions?",
    "answer": "Properties commonly used on HtmlFormatOptions include BackgroundColor, H1Color, H1FontSize, H1TextAlignment. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a HtmlFormatOptions in C#?",
    "answer": "Instantiate HtmlFormatOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).