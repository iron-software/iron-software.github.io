<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Signing.PdfSignatureImage.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfSignatureImage` is what IronPDF C# code uses for PDF signing. It represents PDF digital signature image.

`PdfSignatureImage` matters when an application needs to configure or invoke PDF signing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfSignatureImage`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Image`, `PageIndex`, `Rectangle`. Assign options or invoke methods on the instance to configure or perform the operation. The [image to PDF](https://ironpdf.com/how-to/image-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfSignatureImage from the relevant entry point in the IronPDF API
void Configure(PdfSignatureImage instance)
{
    var current = instance.Image;
}
```

For the broader workflow, see the [PDF image flatten csharp](https://ironpdf.com/how-to/pdf-image-flatten-csharp/) guide in the IronPDF C# documentation. For broader context, the PDF signing portion of the IronPDF C# API contains related types that work with `PdfSignatureImage` directly. `PdfSignatureImage` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfSignatureImage` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfSignatureImage` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfSignatureImage`. Application code typically obtains or instantiates a single `PdfSignatureImage` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfSignatureImage Class - IronPDF C# API Reference`
- v2 (human): `PdfSignatureImage: IronPDF PDF Signing in C#`
- v3 (balanced): `PdfSignatureImage Class | IronPDF C# PDF Signing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfSignatureImage is the IronPDF class for PDF signing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfSignatureImage class reference for C#: PDF digital signature image.`
- v3 (balanced): `PdfSignatureImage (PDF Signing) in IronPDF for C#: PDF digital signature image. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PdfSignatureImage in IronPDF to work with PDF signing from C#, which provides PDF digital signature image. PdfSignatureImage is in the IronPdf.Signing namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PdfSignatureImage?",
    "answer": "PdfSignatureImage is in the IronPdf.Signing namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfSignatureImage class used for in C#?",
    "answer": "PdfSignatureImage is the IronPDF class that PDF digital signature image. It is part of the IronPdf.Signing namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfSignatureImage?",
    "answer": "Properties commonly used on PdfSignatureImage include Image, PageIndex, Rectangle. Each property configures one aspect of the PDF signing surface exposed by the class."
  },
  {
    "question": "How do you create a PdfSignatureImage in C#?",
    "answer": "Instantiate PdfSignatureImage directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).