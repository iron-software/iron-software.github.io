<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Cleaner.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `Cleaner`. It can be used to scan or sanitize (remove any potentially harmful content) PDF document.

`Cleaner` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `Cleaner`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `SanitizeWithBitmap`, `SanitizeWithBitmap`, `SanitizeWithBitmap`, `SanitizeWithBitmap`. Assign options or invoke methods on the instance to configure or perform the operation. The [add remove attachments](https://ironpdf.com/how-to/add-remove-attachments/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain Cleaner from the relevant entry point in the IronPDF API
void Configure(Cleaner instance)
{
    instance.SanitizeWithBitmap();
}
```

For the broader workflow, see the [sanitize PDF](https://ironpdf.com/how-to/sanitize-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `Cleaner` directly. `Cleaner` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `Cleaner` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `Cleaner` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `Cleaner`. Application code typically obtains or instantiates a single `Cleaner` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Cleaner Class - IronPDF C# API Reference`
- v2 (human): `Cleaner: IronPDF PDF Generation in C#`
- v3 (balanced): `Cleaner Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `Cleaner is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF Cleaner class reference for C#: the Cleaner class can be used to scan or sanitize (remove any potentially...`
- v3 (balanced): `Cleaner (PDF Generation) in IronPDF for C#: the Cleaner class can be used to scan or sanitize (remove any potentially... See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF generation is driven through Cleaner from C# and can be used to scan or sanitize (remove any potentially harmful content) PDF document. Cleaner is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is Cleaner located in the IronPDF object model?",
    "answer": "Cleaner is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the Cleaner class used for in C#?",
    "answer": "Cleaner is the IronPDF class that can be used to scan or sanitize (remove any potentially harmful content) PDF document. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on Cleaner?",
    "answer": "Common methods include SanitizeWithBitmap, SanitizeWithBitmap, SanitizeWithBitmap, SanitizeWithBitmap. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).