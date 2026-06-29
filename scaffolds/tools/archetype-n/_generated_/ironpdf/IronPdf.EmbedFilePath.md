<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.EmbedFilePath.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`EmbedFilePath` is the object IronPDF C# code works with for PDF generation. It represents struct for storing path directory of embedding file with configuration.

`EmbedFilePath` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `EmbedFilePath`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `EmbedFileConfiguration`, `FilePath`. Assign options or invoke methods on the instance to configure or perform the operation. The [HTML file to PDF](https://ironpdf.com/how-to/html-file-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain EmbedFilePath from the relevant entry point in the IronPDF API
void Configure(EmbedFilePath instance)
{
    var current = instance.EmbedFileConfiguration;
    instance.Deconstruct();
}
```

For the broader workflow, see the [HTML zip file to PDF](https://ironpdf.com/how-to/html-zip-file-to-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `EmbedFilePath` directly. `EmbedFilePath` instances inherit additional members from `ValueType` that may be relevant in advanced scenarios. In application code, treat `EmbedFilePath` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `EmbedFilePath` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `EmbedFilePath`. Application code typically obtains or instantiates a single `EmbedFilePath` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `EmbedFilePath Class - IronPDF C# API Reference`
- v2 (human): `EmbedFilePath: IronPDF PDF Generation in C#`
- v3 (balanced): `EmbedFilePath Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `EmbedFilePath is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF EmbedFilePath class reference for C#: struct for storing path directory of embedding file with configuration.`
- v3 (balanced): `EmbedFilePath (PDF Generation) in IronPDF for C#: struct for storing path directory of embedding file with configuration. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF generation is driven through EmbedFilePath from C#, which provides struct for storing path directory of embedding file with configuration. EmbedFilePath is in the IronPdf namespace, derived from ValueType. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is EmbedFilePath located in the IronPDF object model?",
    "answer": "EmbedFilePath is in the IronPdf namespace, shipped in IronPdf.dll. It derives from ValueType."
  },
  {
    "question": "What is the EmbedFilePath class used for in C#?",
    "answer": "EmbedFilePath is the IronPDF class that struct for storing path directory of embedding file with configuration. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of EmbedFilePath?",
    "answer": "Properties commonly used on EmbedFilePath include EmbedFileConfiguration, FilePath. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a EmbedFilePath in C#?",
    "answer": "Instantiate EmbedFilePath directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).