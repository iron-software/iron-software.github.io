<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.MetaData.PdfCustomMetadataProperties.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfCustomMetadataProperties` is what IronPDF C# code uses for PDF metadata. It represents class that represents set of custom metadata properties.

`PdfCustomMetadataProperties` matters when an application needs to configure or invoke PDF metadata from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfCustomMetadataProperties`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Item[String]`. Assign options or invoke methods on the instance to configure or perform the operation. The [custom hyphenation](https://ironpdf.com/how-to/custom-hyphenation/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfCustomMetadataProperties from the relevant entry point in the IronPDF API
void Configure(PdfCustomMetadataProperties instance)
{
    var current = instance.Item[String];
    instance.Add();
}
```

For the broader workflow, see the [custom logging](https://ironpdf.com/how-to/custom-logging/) guide in the IronPDF C# documentation. For broader context, the PDF metadata portion of the IronPDF C# API contains related types that work with `PdfCustomMetadataProperties` directly. `PdfCustomMetadataProperties` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfCustomMetadataProperties` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfCustomMetadataProperties` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfCustomMetadataProperties`. Application code typically obtains or instantiates a single `PdfCustomMetadataProperties` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfCustomMetadataProperties Class - IronPDF C# API Reference`
- v2 (human): `PdfCustomMetadataProperties: IronPDF PDF Metadata in C#`
- v3 (balanced): `PdfCustomMetadataProperties Class | IronPDF C# PDF Metadata`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfCustomMetadataProperties is the IronPDF class for PDF metadata in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfCustomMetadataProperties class reference for C#: class that represents set of custom metadata properties.`
- v3 (balanced): `PdfCustomMetadataProperties (PDF Metadata) in IronPDF for C#: class that represents set of custom metadata properties. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfCustomMetadataProperties is the IronPDF C# entry point for PDF metadata. PdfCustomMetadataProperties is in the IronPdf.MetaData namespace. Class that represents set of custom metadata properties. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfCustomMetadataProperties live in the IronPDF API?",
    "answer": "PdfCustomMetadataProperties is in the IronPdf.MetaData namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfCustomMetadataProperties class used for in C#?",
    "answer": "PdfCustomMetadataProperties is the IronPDF class that class that represents set of custom metadata properties. It is part of the IronPdf.MetaData namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfCustomMetadataProperties?",
    "answer": "Properties commonly used on PdfCustomMetadataProperties include Item[String]. Each property configures one aspect of the PDF metadata surface exposed by the class."
  },
  {
    "question": "What methods are available on PdfCustomMetadataProperties?",
    "answer": "Common methods include Add, Remove. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).