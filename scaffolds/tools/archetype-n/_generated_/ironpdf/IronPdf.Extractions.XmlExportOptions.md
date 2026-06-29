<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.XmlExportOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `XmlExportOptions` in IronPDF when a C# application works with text extraction. It represents configuration options for XML exports Controls XML schema inclusion and formatting options. ------------------------------------------------ Usage: var options = new XmlExportOptions { XmlIncludeSchema = true, XmlPrettyPrint = true }; ------------------------------------------------.

`XmlExportOptions` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `XmlExportOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `XmlIncludeSchema`, `XmlPrettyPrint`. Assign options or invoke methods on the instance to configure or perform the operation. The [export save PDF csharp](https://ironpdf.com/how-to/export-save-pdf-csharp/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new XmlExportOptions();
var current = instance.XmlIncludeSchema;
// Read or assign other properties such as XmlPrettyPrint, XmlIncludeSchema
```

For the broader workflow, see the [XML to PDF](https://ironpdf.com/how-to/xml-to-pdf/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `XmlExportOptions` directly. `XmlExportOptions` instances inherit additional members from `ExportOptionsBase` that may be relevant in advanced scenarios. In application code, treat `XmlExportOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `XmlExportOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `XmlExportOptions`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `XmlExportOptions Class - IronPDF C# API Reference`
- v2 (human): `XmlExportOptions: IronPDF Text Extraction in C#`
- v3 (balanced): `XmlExportOptions Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `XmlExportOptions is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF XmlExportOptions class reference for C#: configuration options for XML exports Controls XML schema inclusion and...`
- v3 (balanced): `XmlExportOptions (Text Extraction) in IronPDF for C#: configuration options for XML exports Controls XML schema inclusion and... See members and usage.`

---

## Structured data

**TechArticle abstract**

> XmlExportOptions handles text extraction in IronPDF from C#. XmlExportOptions is in the IronPdf.Extractions namespace, derived from ExportOptionsBase. Configuration options for XML exports Controls XML schema inclusion and formatting options. ------------------------------------------------ Usage: var options = new XmlExportOptions { XmlIncludeSchema = true, XmlPrettyPrint = true }; ------------------------------------------------. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is XmlExportOptions defined in?",
    "answer": "XmlExportOptions is in the IronPdf.Extractions namespace, shipped in IronPdf.dll. It derives from ExportOptionsBase."
  },
  {
    "question": "What is the XmlExportOptions class used for in C#?",
    "answer": "XmlExportOptions is the IronPDF class that configuration options for XML exports Controls XML schema inclusion and formatting options. ------------------------------------------------ Usage: var options = new XmlExportOptions { XmlIncludeSchema = true, XmlPrettyPrint = true }; ------------------------------------------------. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of XmlExportOptions?",
    "answer": "Properties commonly used on XmlExportOptions include XmlIncludeSchema, XmlPrettyPrint. Each property configures one aspect of the text extraction surface exposed by the class."
  },
  {
    "question": "How do you create a XmlExportOptions in C#?",
    "answer": "Instantiate XmlExportOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).