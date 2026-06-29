<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.JsonExportOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`JsonExportOptions` is the object IronPDF C# code works with for text extraction. It represents configuration options for JSON exports Currently inherits all options from ExportOptionsBase.

`JsonExportOptions` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `JsonExportOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Assign options or invoke methods on the instance to configure or perform the operation. The [export save PDF csharp](https://ironpdf.com/how-to/export-save-pdf-csharp/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new JsonExportOptions();
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `JsonExportOptions` directly. `JsonExportOptions` instances inherit additional members from `ExportOptionsBase` that may be relevant in advanced scenarios. In application code, treat `JsonExportOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `JsonExportOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `JsonExportOptions`. Application code typically obtains or instantiates a single `JsonExportOptions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `JsonExportOptions Class - IronPDF C# API Reference`
- v2 (human): `JsonExportOptions: IronPDF Text Extraction in C#`
- v3 (balanced): `JsonExportOptions Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `JsonExportOptions is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF JsonExportOptions class reference for C#: configuration options for JSON exports Currently inherits all options from...`
- v3 (balanced): `JsonExportOptions (Text Extraction) in IronPDF for C#: configuration options for JSON exports Currently inherits all options from... See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, text extraction is driven through JsonExportOptions from C#. JsonExportOptions is in the IronPdf.Extractions namespace, derived from ExportOptionsBase. Configuration options for JSON exports Currently inherits all options from ExportOptionsBase. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is JsonExportOptions located in the IronPDF object model?",
    "answer": "JsonExportOptions is in the IronPdf.Extractions namespace, shipped in IronPdf.dll. It derives from ExportOptionsBase."
  },
  {
    "question": "What is the JsonExportOptions class used for in C#?",
    "answer": "JsonExportOptions is the IronPDF class that configuration options for JSON exports Currently inherits all options from ExportOptionsBase. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "How do you create a JsonExportOptions in C#?",
    "answer": "Instantiate JsonExportOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).