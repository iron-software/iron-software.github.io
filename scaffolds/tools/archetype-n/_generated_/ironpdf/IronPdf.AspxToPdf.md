<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.AspxToPdf.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `AspxToPdf`. It represents one-line PDF conversion for ASP.NET WebForms - transforms any ASPX page into PDF instantly.

`AspxToPdf` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `AspxToPdf`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `RenderThisPageAsPdf`, `RenderThisPageAsPdf`. Assign options or invoke methods on the instance to configure or perform the operation. The [ASPX to PDF](https://ironpdf.com/how-to/aspx-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain AspxToPdf from the relevant entry point in the IronPDF API
void Configure(AspxToPdf instance)
{
    instance.RenderThisPageAsPdf();
}
```

For the broader workflow, see the [ASPX to PDF](https://ironpdf.com/examples/aspx-to-pdf/) example and the [cshtml to PDF mvc core](https://ironpdf.com/how-to/cshtml-to-pdf-mvc-core/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `AspxToPdf` directly. `AspxToPdf` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `AspxToPdf` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `AspxToPdf` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `AspxToPdf`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AspxToPdf Class - IronPDF C# API Reference`
- v2 (human): `AspxToPdf: IronPDF PDF Generation in C#`
- v3 (balanced): `AspxToPdf Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `AspxToPdf is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF AspxToPdf class reference for C#: one-line PDF conversion for ASP.NET WebForms - transforms any ASPX page...`
- v3 (balanced): `AspxToPdf (PDF Generation) in IronPDF for C#: one-line PDF conversion for ASP.NET WebForms - transforms any ASPX page... See members and usage.`

---

## Structured data

**TechArticle abstract**

> AspxToPdf is the IronPDF C# entry point for PDF generation, which provides one-line PDF conversion for ASP.NET WebForms - transforms any ASPX page into PDF instantly. AspxToPdf is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does AspxToPdf live in the IronPDF API?",
    "answer": "AspxToPdf is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the AspxToPdf class used for in C#?",
    "answer": "AspxToPdf is the IronPDF class that one-line PDF conversion for ASP.NET WebForms - transforms any ASPX page into PDF instantly. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on AspxToPdf?",
    "answer": "Common methods include RenderThisPageAsPdf, RenderThisPageAsPdf. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).