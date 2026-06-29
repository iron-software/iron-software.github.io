<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.ImageToPdfConverter.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `ImageToPdfConverter`. It represents converts images (PNG, JPG, BMP, GIF, TIFF, SVG) to professional PDF documents instantly.

`ImageToPdfConverter` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ImageToPdfConverter`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `ImageToPdf`, `ImageToPdf`, `ImageToPdf`, `ImageToPdf`. Assign options or invoke methods on the instance to configure or perform the operation. The [image to PDF](https://ironpdf.com/how-to/image-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain ImageToPdfConverter from the relevant entry point in the IronPDF API
void Configure(ImageToPdfConverter instance)
{
    instance.ImageToPdf();
}
```

For the broader workflow, see the [image to PDF csharp](https://ironpdf.com/examples/image-to-pdf-csharp/) example and the [image to PDF](https://ironpdf.com/how-to/image-to-pdf/#in-memory-conversion) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `ImageToPdfConverter` directly. `ImageToPdfConverter` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ImageToPdfConverter` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ImageToPdfConverter` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ImageToPdfConverter`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageToPdfConverter Class - IronPDF C# API Reference`
- v2 (human): `ImageToPdfConverter: IronPDF PDF Generation in C#`
- v3 (balanced): `ImageToPdfConverter Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ImageToPdfConverter is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ImageToPdfConverter class reference for C#: converts images (PNG, JPG, BMP, GIF, TIFF, SVG) to professional PDF...`
- v3 (balanced): `ImageToPdfConverter (PDF Generation) in IronPDF for C#: converts images (PNG, JPG, BMP, GIF, TIFF, SVG) to professional PDF... See members and usage.`

---

## Structured data

**TechArticle abstract**

> ImageToPdfConverter is the IronPDF C# entry point for PDF generation, which provides converts images (PNG, JPG, BMP, GIF, TIFF, SVG) to professional PDF documents instantly. ImageToPdfConverter is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does ImageToPdfConverter live in the IronPDF API?",
    "answer": "ImageToPdfConverter is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ImageToPdfConverter class used for in C#?",
    "answer": "ImageToPdfConverter is the IronPDF class that converts images (PNG, JPG, BMP, GIF, TIFF, SVG) to professional PDF documents instantly. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on ImageToPdfConverter?",
    "answer": "Common methods include ImageToPdf, ImageToPdf, ImageToPdf, ImageToPdf. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).