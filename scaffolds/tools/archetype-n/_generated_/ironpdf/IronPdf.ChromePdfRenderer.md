<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.ChromePdfRenderer.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `ChromePdfRenderer`. It creates professional PDF documents from HTML using the actual Chrome browser engine for pixel-perfect accuracy.

`ChromePdfRenderer` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ChromePdfRenderer`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `LoginCredentials`, `RenderingOptions`. Assign options or invoke methods on the instance to configure or perform the operation. The [headers and footers](https://ironpdf.com/how-to/headers-and-footers/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain ChromePdfRenderer from the relevant entry point in the IronPDF API
void Configure(ChromePdfRenderer instance)
{
    var current = instance.LoginCredentials;
    instance.ApplyCookies();
}
```

For the broader workflow, see the [markdown to PDF](https://ironpdf.com/examples/markdown-to-pdf/) example and the [HTML file to PDF](https://ironpdf.com/how-to/html-file-to-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `ChromePdfRenderer` directly. `ChromePdfRenderer` instances inherit additional members from `ChromeClientAccessor` that may be relevant in advanced scenarios. In application code, treat `ChromePdfRenderer` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ChromePdfRenderer` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ChromePdfRenderer`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChromePdfRenderer Class - IronPDF C# API Reference`
- v2 (human): `ChromePdfRenderer: IronPDF PDF Generation in C#`
- v3 (balanced): `ChromePdfRenderer Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ChromePdfRenderer is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ChromePdfRenderer class reference for C#: creates professional PDF documents from HTML using the actual Chrome...`
- v3 (balanced): `ChromePdfRenderer (PDF Generation) in IronPDF for C#: creates professional PDF documents from HTML using the actual Chrome... See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use ChromePdfRenderer in IronPDF to work with PDF generation from C# and creates professional PDF documents from HTML using the actual Chrome browser engine for pixel-perfect accuracy. ChromePdfRenderer is in the IronPdf namespace, derived from ChromeClientAccessor. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain ChromePdfRenderer?",
    "answer": "ChromePdfRenderer is in the IronPdf namespace, shipped in IronPdf.dll. It derives from ChromeClientAccessor."
  },
  {
    "question": "What is the ChromePdfRenderer class used for in C#?",
    "answer": "ChromePdfRenderer is the IronPDF class that creates professional PDF documents from HTML using the actual Chrome browser engine for pixel-perfect accuracy. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ChromePdfRenderer?",
    "answer": "Properties commonly used on ChromePdfRenderer include LoginCredentials, RenderingOptions. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a ChromePdfRenderer in C#?",
    "answer": "Instantiate ChromePdfRenderer directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).