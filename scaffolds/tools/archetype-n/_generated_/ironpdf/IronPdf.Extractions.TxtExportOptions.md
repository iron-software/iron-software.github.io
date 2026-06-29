<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.TxtExportOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`TxtExportOptions` is the object IronPDF C# code works with for text extraction. It represents configuration options for plain text exports Currently inherits all options from ExportOptionsBase.

`TxtExportOptions` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `TxtExportOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Assign options or invoke methods on the instance to configure or perform the operation. The [draw text and bitmap](https://ironpdf.com/how-to/draw-text-and-bitmap/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new TxtExportOptions();
```

For the broader workflow, see the [export save PDF csharp](https://ironpdf.com/how-to/export-save-pdf-csharp/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `TxtExportOptions` directly. `TxtExportOptions` instances inherit additional members from `ExportOptionsBase` that may be relevant in advanced scenarios. In application code, treat `TxtExportOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `TxtExportOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `TxtExportOptions`. Application code typically obtains or instantiates a single `TxtExportOptions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TxtExportOptions Class - IronPDF C# API Reference`
- v2 (human): `TxtExportOptions: IronPDF Text Extraction in C#`
- v3 (balanced): `TxtExportOptions Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TxtExportOptions is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TxtExportOptions class reference for C#: configuration options for plain text exports Currently inherits all options...`
- v3 (balanced): `TxtExportOptions (Text Extraction) in IronPDF for C#: configuration options for plain text exports Currently inherits all options... See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, text extraction is driven through TxtExportOptions from C#. TxtExportOptions is in the IronPdf.Extractions namespace, derived from ExportOptionsBase. Configuration options for plain text exports Currently inherits all options from ExportOptionsBase. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is TxtExportOptions located in the IronPDF object model?",
    "answer": "TxtExportOptions is in the IronPdf.Extractions namespace, shipped in IronPdf.dll. It derives from ExportOptionsBase."
  },
  {
    "question": "What is the TxtExportOptions class used for in C#?",
    "answer": "TxtExportOptions is the IronPDF class that configuration options for plain text exports Currently inherits all options from ExportOptionsBase. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "How do you create a TxtExportOptions in C#?",
    "answer": "Instantiate TxtExportOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).