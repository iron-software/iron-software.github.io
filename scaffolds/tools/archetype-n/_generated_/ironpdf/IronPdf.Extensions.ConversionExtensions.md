<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Extensions.ConversionExtensions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF extensions in IronPDF is handled through `ConversionExtensions`. It represents conversion methods to product PDF documents from other objects.

`ConversionExtensions` matters when an application needs to configure or invoke PDF extensions from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `ConversionExtensions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `ToPdf`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain ConversionExtensions from the relevant entry point in the IronPDF API
void Configure(ConversionExtensions instance)
{
    instance.ToPdf();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF extensions portion of the IronPDF C# API contains related types that work with `ConversionExtensions` directly. `ConversionExtensions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `ConversionExtensions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `ConversionExtensions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `ConversionExtensions`. Application code typically obtains or instantiates a single `ConversionExtensions` and shares it across multiple IronPDF operations rather than recreating it per call. For multi-threaded scenarios, follow the threading guidance for the relevant IronPDF entry point; `ConversionExtensions` instances are not assumed to be thread-safe unless documented.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ConversionExtensions Class - IronPDF C# API Reference`
- v2 (human): `ConversionExtensions: IronPDF PDF Extensions in C#`
- v3 (balanced): `ConversionExtensions Class | IronPDF C# PDF Extensions`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ConversionExtensions is the IronPDF class for PDF extensions in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ConversionExtensions class reference for C#: conversion methods to product PDF documents from other objects.`
- v3 (balanced): `ConversionExtensions (PDF Extensions) in IronPDF for C#: conversion methods to product PDF documents from other objects. See members and usage.`

---

## Structured data

**TechArticle abstract**

> ConversionExtensions is the IronPDF C# entry point for PDF extensions, which provides conversion methods to product PDF documents from other objects. ConversionExtensions is in the IronPdf.Extensions namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does ConversionExtensions live in the IronPDF API?",
    "answer": "ConversionExtensions is in the IronPdf.Extensions namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the ConversionExtensions class used for in C#?",
    "answer": "ConversionExtensions is the IronPDF class that conversion methods to product PDF documents from other objects. It is part of the IronPdf.Extensions namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on ConversionExtensions?",
    "answer": "Common methods include ToPdf. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).