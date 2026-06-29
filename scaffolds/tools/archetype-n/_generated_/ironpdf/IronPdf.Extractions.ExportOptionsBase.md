<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.ExportOptionsBase.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`ExportOptionsBase` is what IronPDF C# code uses for text extraction. It represents base configuration options for exporting extracted data Contains common options applicable to all export formats. ------------------------------------------------ Usage: // Use base options for generic export var options = new ExportOptionsBase { IncludeHeaders = true, SpanMode = SpanHandlingMode.Repeat }; // Or use format-specific options var csvOptions = new CsvExportOptions { CsvDelimiter = ";", IncludeHeaders = true }; ------------------------------------------------.

`ExportOptionsBase` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ExportOptionsBase`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `IncludeEmptyRows`, `IncludeHeaders`, `SpanMode`, `TextEncoding`. Assign options or invoke methods on the instance to configure or perform the operation. The [base URLs](https://ironpdf.com/how-to/base-urls/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new ExportOptionsBase();
var current = instance.IncludeEmptyRows;
// Read or assign other properties such as IncludeHeaders, SpanMode
```

For the broader workflow, see the [export save PDF csharp](https://ironpdf.com/how-to/export-save-pdf-csharp/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `ExportOptionsBase` directly. `ExportOptionsBase` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ExportOptionsBase` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ExportOptionsBase Class - IronPDF C# API Reference`
- v2 (human): `ExportOptionsBase: IronPDF Text Extraction in C#`
- v3 (balanced): `ExportOptionsBase Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ExportOptionsBase is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ExportOptionsBase class reference for C#: base configuration options for exporting extracted data Contains common...`
- v3 (balanced): `ExportOptionsBase (Text Extraction) in IronPDF for C#: base configuration options for exporting extracted data Contains common... See members and usage.`

---

## Structured data

**TechArticle abstract**

> ExportOptionsBase handles text extraction in IronPDF from C#. ExportOptionsBase is in the IronPdf.Extractions namespace. Base configuration options for exporting extracted data Contains common options applicable to all export formats. ------------------------------------------------ Usage: // Use base options for generic export var options = new ExportOptionsBase { IncludeHeaders = true, SpanMode = SpanHandlingMode.Repeat }; // Or use format-specific options var csvOptions = new CsvExportOptions { CsvDelimiter = ";", IncludeHeaders = true }; ------------------------------------------------. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is ExportOptionsBase defined in?",
    "answer": "ExportOptionsBase is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ExportOptionsBase class used for in C#?",
    "answer": "ExportOptionsBase is the IronPDF class that base configuration options for exporting extracted data Contains common options applicable to all export formats. ------------------------------------------------ Usage: // Use base options for generic export var options = new ExportOptionsBase { IncludeHeaders = true, SpanMode = SpanHandlingMode.Repeat }; // Or use format-specific options var csvOptions = new CsvExportOptions { CsvDelimiter = \";\", IncludeHeaders = true }; ------------------------------------------------. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of ExportOptionsBase?",
    "answer": "Properties commonly used on ExportOptionsBase include IncludeEmptyRows, IncludeHeaders, SpanMode, TextEncoding. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a ExportOptionsBase in C#?",
    "answer": "Instantiate ExportOptionsBase directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).