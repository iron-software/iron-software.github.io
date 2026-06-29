<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.AdvancedCompressionOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `AdvancedCompressionOptions` in IronPDF when a C# application works with PDF generation. It represents configuration for the advanced compression pipeline.

`AdvancedCompressionOptions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `AdvancedCompressionOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CoalesceContents`, `CompressionLevel`, `CompressStreams`, `DecodeGeneralizedStreams`. Assign options or invoke methods on the instance to configure or perform the operation. The [PDF compression](https://ironpdf.com/how-to/pdf-compression/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new AdvancedCompressionOptions();
var current = instance.CoalesceContents;
// Read or assign other properties such as CompressionLevel, CompressStreams
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `AdvancedCompressionOptions` directly. `AdvancedCompressionOptions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `AdvancedCompressionOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `AdvancedCompressionOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `AdvancedCompressionOptions`. Application code typically obtains or instantiates a single `AdvancedCompressionOptions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AdvancedCompressionOptions Class - IronPDF C# API Reference`
- v2 (human): `AdvancedCompressionOptions: IronPDF PDF Generation in C#`
- v3 (balanced): `AdvancedCompressionOptions Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `AdvancedCompressionOptions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF AdvancedCompressionOptions class reference for C#: configuration for the advanced compression pipeline.`
- v3 (balanced): `AdvancedCompressionOptions (PDF Generation) in IronPDF for C#: configuration for the advanced compression pipeline. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use AdvancedCompressionOptions in IronPDF to work with PDF generation from C#, which provides configuration for the advanced compression pipeline. AdvancedCompressionOptions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain AdvancedCompressionOptions?",
    "answer": "AdvancedCompressionOptions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the AdvancedCompressionOptions class used for in C#?",
    "answer": "AdvancedCompressionOptions is the IronPDF class that configuration for the advanced compression pipeline. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of AdvancedCompressionOptions?",
    "answer": "Properties commonly used on AdvancedCompressionOptions include CoalesceContents, CompressionLevel, CompressStreams, DecodeGeneralizedStreams. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a AdvancedCompressionOptions in C#?",
    "answer": "Instantiate AdvancedCompressionOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).