<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extractions.PdfExtractor.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfExtractor` is the object IronPDF C# code works with for text extraction. It represents methods to extract tables and text from PDF documents with various options.

`PdfExtractor` matters when an application needs to configure or invoke text extraction from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfExtractor`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `Extract`, `ExtractAsync`, `ExtractPage`, `ExtractPageAsync`. Assign options or invoke methods on the instance to configure or perform the operation. The [extract text and images](https://ironpdf.com/how-to/extract-text-and-images/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfExtractor from the relevant entry point in the IronPDF API
void Configure(PdfExtractor instance)
{
    instance.Extract();
}
```

For the broader workflow, see the [custom hyphenation](https://ironpdf.com/how-to/custom-hyphenation/) guide in the IronPDF C# documentation. For broader context, the text extraction portion of the IronPDF C# API contains related types that work with `PdfExtractor` directly. `PdfExtractor` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfExtractor` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfExtractor` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfExtractor`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfExtractor Class - IronPDF C# API Reference`
- v2 (human): `PdfExtractor: IronPDF Text Extraction in C#`
- v3 (balanced): `PdfExtractor Class | IronPDF C# Text Extraction`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfExtractor is the IronPDF class for text extraction in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfExtractor class reference for C#: provides methods to extract tables and text from PDF documents with various...`
- v3 (balanced): `PdfExtractor (Text Extraction) in IronPDF for C#: provides methods to extract tables and text from PDF documents with various... See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, text extraction is driven through PdfExtractor from C#. PdfExtractor is in the IronPdf.Extractions namespace. Methods to extract tables and text from PDF documents with various options. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is PdfExtractor located in the IronPDF object model?",
    "answer": "PdfExtractor is in the IronPdf.Extractions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfExtractor class used for in C#?",
    "answer": "PdfExtractor is the IronPDF class that methods to extract tables and text from PDF documents with various options. It is part of the IronPdf.Extractions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on PdfExtractor?",
    "answer": "Common methods include Extract, ExtractAsync, ExtractPage, ExtractPageAsync. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).