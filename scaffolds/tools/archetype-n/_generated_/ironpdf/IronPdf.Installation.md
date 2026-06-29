<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Installation.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `Installation`. It represents one-time global configuration for IronPDF deployment, licensing, and performance tuning.

`Installation` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `Installation`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `AutomaticallyDownloadNativeBinaries`, `ChromeBrowserCachePath`, `ChromeBrowserLimit`, `ChromeGpuMode`. Assign options or invoke methods on the instance to configure or perform the operation. The [installation](https://ironpdf.com/how-to/installation/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain Installation from the relevant entry point in the IronPDF API
void Configure(Installation instance)
{
    var current = instance.AutomaticallyDownloadNativeBinaries;
    instance.CleanupTempImages();
}
```

For the broader workflow, see the [installation](https://ironpdf.com/how-to/installation/#initialize) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `Installation` directly. `Installation` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `Installation` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `Installation` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `Installation`. Application code typically obtains or instantiates a single `Installation` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Installation Class - IronPDF C# API Reference`
- v2 (human): `Installation: IronPDF PDF Generation in C#`
- v3 (balanced): `Installation Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `Installation is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF Installation class reference for C#: one-time global configuration for IronPDF deployment, licensing, and...`
- v3 (balanced): `Installation (PDF Generation) in IronPDF for C#: one-time global configuration for IronPDF deployment, licensing, and... See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use Installation in IronPDF to work with PDF generation from C#, which provides one-time global configuration for IronPDF deployment, licensing, and performance tuning. Installation is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain Installation?",
    "answer": "Installation is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the Installation class used for in C#?",
    "answer": "Installation is the IronPDF class that one-time global configuration for IronPDF deployment, licensing, and performance tuning. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of Installation?",
    "answer": "Properties commonly used on Installation include AutomaticallyDownloadNativeBinaries, ChromeBrowserCachePath, ChromeBrowserLimit, ChromeGpuMode. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "What methods are available on Installation?",
    "answer": "Common methods include CleanupTempImages, ConnectToIronPdfHost, Initialize. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).