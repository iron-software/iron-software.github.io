<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.EmbedFileConfiguration.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `EmbedFileConfiguration` in IronPDF when a C# application works with PDF generation. It represents configuration of EmbedFilePath , EmbedFileByte , or EmbedFileStream when converting PdfDocument to PDF/A-3 document with embedding files Specifying type of embeddding file, file name, and custom of XMP Metadata.

`EmbedFileConfiguration` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `EmbedFileConfiguration`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `AFDesc`, `AFRelationship`, `ConformanceLevel`, `EmbedFileName`. Assign options or invoke methods on the instance to configure or perform the operation. The [custom hyphenation](https://ironpdf.com/how-to/custom-hyphenation/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain EmbedFileConfiguration from the relevant entry point in the IronPDF API
void Configure(EmbedFileConfiguration instance)
{
    var current = instance.AFDesc;
}
```

For the broader workflow, see the [custom logging](https://ironpdf.com/how-to/custom-logging/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `EmbedFileConfiguration` directly. `EmbedFileConfiguration` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `EmbedFileConfiguration` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `EmbedFileConfiguration` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `EmbedFileConfiguration`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `EmbedFileConfiguration Class - IronPDF C# API Reference`
- v2 (human): `EmbedFileConfiguration: IronPDF PDF Generation in C#`
- v3 (balanced): `EmbedFileConfiguration Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `EmbedFileConfiguration is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF EmbedFileConfiguration class reference for C#: configuration of EmbedFilePath , EmbedFileByte , or EmbedFileStream when...`
- v3 (balanced): `EmbedFileConfiguration (PDF Generation) in IronPDF for C#: configuration of EmbedFilePath , EmbedFileByte , or EmbedFileStream when... See members and usage.`

---

## Structured data

**TechArticle abstract**

> EmbedFileConfiguration is the IronPDF C# entry point for PDF generation, which provides configuration of EmbedFilePath , EmbedFileByte , or EmbedFileStream when converting PdfDocument to PDF/A-3 document with embedding files Specifying type of embeddding file, file name, and custom of XMP Metadata. EmbedFileConfiguration is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does EmbedFileConfiguration live in the IronPDF API?",
    "answer": "EmbedFileConfiguration is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the EmbedFileConfiguration class used for in C#?",
    "answer": "EmbedFileConfiguration is the IronPDF class that configuration of EmbedFilePath , EmbedFileByte , or EmbedFileStream when converting PdfDocument to PDF/A-3 document with embedding files Specifying type of embeddding file, file name, and custom of XMP Metadata. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of EmbedFileConfiguration?",
    "answer": "Properties commonly used on EmbedFileConfiguration include AFDesc, AFRelationship, ConformanceLevel, EmbedFileName. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a EmbedFileConfiguration in C#?",
    "answer": "Instantiate EmbedFileConfiguration directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).