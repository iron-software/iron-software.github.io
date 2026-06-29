<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Signing.PdfSignature.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfSignature` is the object IronPDF C# code works with for PDF signing. It represents that represents a PDF signing certificate (.PFX or .p12) format which can be used to digitally sign a PDF.

`PdfSignature` matters when an application needs to configure or invoke PDF signing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfSignature`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `FromBase64`, `LoadSignatureImageFromFile`, `LoadSignatureImageFromStream`. Assign options or invoke methods on the instance to configure or perform the operation. The [signing](https://ironpdf.com/how-to/signing/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfSignature from the relevant entry point in the IronPDF API
void Configure(PdfSignature instance)
{
    instance.FromBase64();
}
```

For the broader workflow, see the [signing PDF with hsm](https://ironpdf.com/how-to/signing-pdf-with-hsm/) guide in the IronPDF C# documentation. For broader context, the PDF signing portion of the IronPDF C# API contains related types that work with `PdfSignature` directly. `PdfSignature` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `PdfSignature` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfSignature` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfSignature`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfSignature Class - IronPDF C# API Reference`
- v2 (human): `PdfSignature: IronPDF PDF Signing in C#`
- v3 (balanced): `PdfSignature Class | IronPDF C# PDF Signing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfSignature is the IronPDF class for PDF signing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfSignature class reference for C#: a class that represents a PDF signing certificate (.PFX or .p12) format...`
- v3 (balanced): `PdfSignature (PDF Signing) in IronPDF for C#: a class that represents a PDF signing certificate (.PFX or .p12) format... See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PdfSignature in IronPDF to work with PDF signing from C#. PdfSignature is in the IronPdf.Signing namespace. That represents a PDF signing certificate (.PFX or .p12) format which can be used to digitally sign a PDF. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PdfSignature?",
    "answer": "PdfSignature is in the IronPdf.Signing namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the PdfSignature class used for in C#?",
    "answer": "PdfSignature is the IronPDF class that that represents a PDF signing certificate (.PFX or .p12) format which can be used to digitally sign a PDF. It is part of the IronPdf.Signing namespace and is used through the IronPDF C# API."
  },
  {
    "question": "How do you create a PdfSignature in C#?",
    "answer": "Instantiate PdfSignature directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  },
  {
    "question": "What methods are available on PdfSignature?",
    "answer": "Common methods include FromBase64, LoadSignatureImageFromFile, LoadSignatureImageFromStream. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).