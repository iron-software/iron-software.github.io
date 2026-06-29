<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.PdfDocumentExtensions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `PdfDocumentExtensions` in IronPDF when a C# application works with PDF generation. It represents extension methods for PdfDocument class.

`PdfDocumentExtensions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfDocumentExtensions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `ToDocument`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain PdfDocumentExtensions from the relevant entry point in the IronPDF API
void Configure(PdfDocumentExtensions instance)
{
    instance.ToDocument();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `PdfDocumentExtensions` directly. `PdfDocumentExtensions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfDocumentExtensions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfDocumentExtensions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfDocumentExtensions`. Application code typically obtains or instantiates a single `PdfDocumentExtensions` and shares it across multiple IronPDF operations rather than recreating it per call. For multi-threaded scenarios, follow the threading guidance for the relevant IronPDF entry point; `PdfDocumentExtensions` instances are not assumed to be thread-safe unless documented.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfDocumentExtensions Class - IronPDF C# API Reference`
- v2 (human): `PdfDocumentExtensions: IronPDF PDF Generation in C#`
- v3 (balanced): `PdfDocumentExtensions Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfDocumentExtensions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfDocumentExtensions class reference for C#: extension methods for PdfDocument class.`
- v3 (balanced): `PdfDocumentExtensions (PDF Generation) in IronPDF for C#: extension methods for PdfDocument class. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfDocumentExtensions is the IronPDF C# entry point for PDF generation, which provides extension methods for PdfDocument class. PdfDocumentExtensions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfDocumentExtensions live in the IronPDF API?",
    "answer": "PdfDocumentExtensions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfDocumentExtensions class used for in C#?",
    "answer": "PdfDocumentExtensions is the IronPDF class that extension methods for PdfDocument class. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on PdfDocumentExtensions?",
    "answer": "Common methods include ToDocument. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).