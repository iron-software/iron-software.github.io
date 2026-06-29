<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.MetaData.PdfMetaData.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfMetaData` is the object IronPDF C# code works with for PDF metadata. It represents class defining PDF file MetaData.

`PdfMetaData` matters when an application needs to configure or invoke PDF metadata from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfMetaData`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Author`, `CreationDate`, `Creator`, `CustomProperties`. Assign options or invoke methods on the instance to configure or perform the operation. The [HTML file to PDF](https://ironpdf.com/how-to/html-file-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfMetaData from the relevant entry point in the IronPDF API
void Configure(PdfMetaData instance)
{
    var current = instance.Author;
    instance.GetMetaDataDictionary();
}
```

For the broader workflow, see the [HTML zip file to PDF](https://ironpdf.com/how-to/html-zip-file-to-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF metadata portion of the IronPDF C# API contains related types that work with `PdfMetaData` directly. `PdfMetaData` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfMetaData` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfMetaData` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfMetaData`. Application code typically obtains or instantiates a single `PdfMetaData` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfMetaData Class - IronPDF C# API Reference`
- v2 (human): `PdfMetaData: IronPDF PDF Metadata in C#`
- v3 (balanced): `PdfMetaData Class | IronPDF C# PDF Metadata`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfMetaData is the IronPDF class for PDF metadata in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfMetaData class reference for C#: a class defining PDF file MetaData.`
- v3 (balanced): `PdfMetaData (PDF Metadata) in IronPDF for C#: a class defining PDF file MetaData. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfMetaData is the IronPDF C# entry point for PDF metadata, which provides class defining PDF file MetaData. PdfMetaData is in the IronPdf.MetaData namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfMetaData live in the IronPDF API?",
    "answer": "PdfMetaData is in the IronPdf.MetaData namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfMetaData class used for in C#?",
    "answer": "PdfMetaData is the IronPDF class that class defining PDF file MetaData. It is part of the IronPdf.MetaData namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfMetaData?",
    "answer": "Properties commonly used on PdfMetaData include Author, CreationDate, Creator, CustomProperties. Each property configures one aspect of the PDF metadata surface exposed by the class."
  },
  {
    "question": "What methods are available on PdfMetaData?",
    "answer": "Common methods include GetMetaDataDictionary, Keys, RemoveMetaDataKey, SetMetaDataDictionary. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).