<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.CompressionOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `CompressionOptions`. It represents configuration options for reducing PDF file size through compression.

`CompressionOptions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `CompressionOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CompressImages`, `HighQualityImageSubsampling`, `JpegQuality`, `RemoveStructureTree`. Assign options or invoke methods on the instance to configure or perform the operation. The [stamp text image](https://ironpdf.com/how-to/stamp-text-image/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new CompressionOptions();
var current = instance.CompressImages;
// Read or assign other properties such as HighQualityImageSubsampling, JpegQuality
```

For the broader workflow, see the [custom paper size](https://ironpdf.com/how-to/custom-paper-size/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `CompressionOptions` directly. `CompressionOptions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `CompressionOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `CompressionOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `CompressionOptions`. Application code typically obtains or instantiates a single `CompressionOptions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CompressionOptions Class - IronPDF C# API Reference`
- v2 (human): `CompressionOptions: IronPDF PDF Generation in C#`
- v3 (balanced): `CompressionOptions Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `CompressionOptions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF CompressionOptions class reference for C#: configuration options for reducing PDF file size through compression.`
- v3 (balanced): `CompressionOptions (PDF Generation) in IronPDF for C#: configuration options for reducing PDF file size through compression. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF generation is driven through CompressionOptions from C#, which provides configuration options for reducing PDF file size through compression. CompressionOptions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is CompressionOptions located in the IronPDF object model?",
    "answer": "CompressionOptions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the CompressionOptions class used for in C#?",
    "answer": "CompressionOptions is the IronPDF class that configuration options for reducing PDF file size through compression. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of CompressionOptions?",
    "answer": "Properties commonly used on CompressionOptions include CompressImages, HighQualityImageSubsampling, JpegQuality, RemoveStructureTree. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a CompressionOptions in C#?",
    "answer": "Instantiate CompressionOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).