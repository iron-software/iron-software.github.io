<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Rendering.PdfPaperSizeConverter.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF rendering in IronPDF runs through `PdfPaperSizeConverter`. It represents class for converting PDF paper sizes from the PdfPaperSize enum to millimeters.

`PdfPaperSizeConverter` matters when an application needs to configure or invoke PDF rendering from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfPaperSizeConverter`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `ToMillimeters`. Assign options or invoke methods on the instance to configure or perform the operation. The [custom paper size](https://ironpdf.com/how-to/custom-paper-size/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfPaperSizeConverter from the relevant entry point in the IronPDF API
void Configure(PdfPaperSizeConverter instance)
{
    instance.ToMillimeters();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF rendering portion of the IronPDF C# API contains related types that work with `PdfPaperSizeConverter` directly. `PdfPaperSizeConverter` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfPaperSizeConverter` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfPaperSizeConverter` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfPaperSizeConverter`. Application code typically obtains or instantiates a single `PdfPaperSizeConverter` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPaperSizeConverter Class - IronPDF C# API Reference`
- v2 (human): `PdfPaperSizeConverter: IronPDF PDF Rendering in C#`
- v3 (balanced): `PdfPaperSizeConverter Class | IronPDF C# PDF Rendering`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfPaperSizeConverter is the IronPDF class for PDF rendering in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfPaperSizeConverter class reference for C#: class for converting PDF paper sizes from the PdfPaperSize enum to millimeters.`
- v3 (balanced): `PdfPaperSizeConverter (PDF Rendering) in IronPDF for C#: class for converting PDF paper sizes from the PdfPaperSize enum to millimeters. See members and usage.`

---

## Structured data

**TechArticle abstract**

> PdfPaperSizeConverter is the IronPDF C# entry point for PDF rendering, which provides class for converting PDF paper sizes from the PdfPaperSize enum to millimeters. PdfPaperSizeConverter is in the IronPdf.Rendering namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfPaperSizeConverter live in the IronPDF API?",
    "answer": "PdfPaperSizeConverter is in the IronPdf.Rendering namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfPaperSizeConverter class used for in C#?",
    "answer": "PdfPaperSizeConverter is the IronPDF class that class for converting PDF paper sizes from the PdfPaperSize enum to millimeters. It is part of the IronPdf.Rendering namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on PdfPaperSizeConverter?",
    "answer": "Common methods include ToMillimeters. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).