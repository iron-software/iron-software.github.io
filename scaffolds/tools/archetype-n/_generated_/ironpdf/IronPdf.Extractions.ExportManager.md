<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.ExportManager.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `ExportManager` in IronPDF when a C# application works with text extraction. It represents methods to export tables and text to various formats.

`ExportManager` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ExportManager`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `ExportResult`, `ExportTable`, `ExportTable`, `ExportTables`. Assign options or invoke methods on the instance to configure or perform the operation. The [custom hyphenation](https://ironpdf.com/how-to/custom-hyphenation/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain ExportManager from the relevant entry point in the IronPDF API
void Configure(ExportManager instance)
{
    instance.ExportResult();
}
```

For the broader workflow, see the [custom logging](https://ironpdf.com/how-to/custom-logging/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `ExportManager` directly. `ExportManager` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ExportManager` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ExportManager` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ExportManager`. Application code typically obtains or instantiates a single `ExportManager` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ExportManager Class - IronPDF C# API Reference`
- v2 (human): `ExportManager: IronPDF Text Extraction in C#`
- v3 (balanced): `ExportManager Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ExportManager is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ExportManager class reference for C#: provides methods to export tables and text to various formats.`
- v3 (balanced): `ExportManager (Text Extraction) in IronPDF for C#: provides methods to export tables and text to various formats. See members and usage.`

---

## Structured data

**TechArticle abstract**

> ExportManager is the IronPDF C# entry point for text extraction, which provides methods to export tables and text to various formats. ExportManager is in the IronPdf.Extractions namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does ExportManager live in the IronPDF API?",
    "answer": "ExportManager is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ExportManager class used for in C#?",
    "answer": "ExportManager is the IronPDF class that methods to export tables and text to various formats. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on ExportManager?",
    "answer": "Common methods include ExportResult, ExportTable, ExportTable, ExportTables. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).