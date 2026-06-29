<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.HtmlExportOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`HtmlExportOptions` is what IronPDF C# code uses for text extraction. It represents configuration options for HTML exports Controls styling, responsiveness, and CSS class application for HTML table output. ------------------------------------------------ Usage: var options = new HtmlExportOptions { HtmlIncludeStyles = true, HtmlResponsive = true, HtmlTableClass = "custom-table" }; ------------------------------------------------.

`HtmlExportOptions` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `HtmlExportOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `HtmlIncludeStyles`, `HtmlResponsive`, `HtmlTableClass`. Assign options or invoke methods on the instance to configure or perform the operation. The [custom hyphenation](https://ironpdf.com/how-to/custom-hyphenation/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new HtmlExportOptions();
var current = instance.HtmlIncludeStyles;
// Read or assign other properties such as HtmlResponsive, HtmlTableClass
```

For the broader workflow, see the [custom logging](https://ironpdf.com/how-to/custom-logging/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `HtmlExportOptions` directly. `HtmlExportOptions` instances inherit additional members from `ExportOptionsBase` that may be relevant in advanced scenarios. In application code, treat `HtmlExportOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `HtmlExportOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `HtmlExportOptions`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HtmlExportOptions Class - IronPDF C# API Reference`
- v2 (human): `HtmlExportOptions: IronPDF Text Extraction in C#`
- v3 (balanced): `HtmlExportOptions Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `HtmlExportOptions is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF HtmlExportOptions class reference for C#: configuration options for HTML exports Controls styling, responsiveness...`
- v3 (balanced): `HtmlExportOptions (Text Extraction) in IronPDF for C#: configuration options for HTML exports Controls styling, responsiveness... See members and usage.`

---

## Structured data

**TechArticle abstract**

> HtmlExportOptions handles text extraction in IronPDF from C#. HtmlExportOptions is in the IronPdf.Extractions namespace, derived from ExportOptionsBase. Configuration options for HTML exports Controls styling, responsiveness, and CSS class application for HTML table output. ------------------------------------------------ Usage: var options = new HtmlExportOptions { HtmlIncludeStyles = true, HtmlResponsive = true, HtmlTableClass = "custom-table" }; ------------------------------------------------. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is HtmlExportOptions defined in?",
    "answer": "HtmlExportOptions is in the IronPdf.Extractions namespace, shipped in IronPdf.dll. It derives from ExportOptionsBase."
  },
  {
    "question": "What is the HtmlExportOptions class used for in C#?",
    "answer": "HtmlExportOptions is the IronPDF class that configuration options for HTML exports Controls styling, responsiveness, and CSS class application for HTML table output. ------------------------------------------------ Usage: var options = new HtmlExportOptions { HtmlIncludeStyles = true, HtmlResponsive = true, HtmlTableClass = \"custom-table\" }; ------------------------------------------------. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of HtmlExportOptions?",
    "answer": "Properties commonly used on HtmlExportOptions include HtmlIncludeStyles, HtmlResponsive, HtmlTableClass. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a HtmlExportOptions in C#?",
    "answer": "Instantiate HtmlExportOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).