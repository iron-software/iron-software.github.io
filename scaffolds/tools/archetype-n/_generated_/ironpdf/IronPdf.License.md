<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.License.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF generation in IronPDF runs through `License`. It manages IronPDF licensing - apply your license key once at application startup.

`License` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `License`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `IsLicensed`, `LicenseKey`. Assign options or invoke methods on the instance to configure or perform the operation. The [license keys](https://ironpdf.com/how-to/license-keys/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain License from the relevant entry point in the IronPDF API
void Configure(License instance)
{
    var current = instance.IsLicensed;
    instance.DisableAppAnalytics();
}
```

For the broader workflow, see the [cshtml to PDF mvc core](https://ironpdf.com/how-to/cshtml-to-pdf-mvc-core/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `License` directly. `License` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `License` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `License` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `License`. Application code typically obtains or instantiates a single `License` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `License Class - IronPDF C# API Reference`
- v2 (human): `License: IronPDF PDF Generation in C#`
- v3 (balanced): `License Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `License is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF License class reference for C#: manages IronPDF licensing - apply your license key once at application startup.`
- v3 (balanced): `License (PDF Generation) in IronPDF for C#: manages IronPDF licensing - apply your license key once at application startup. See members and usage.`

---

## Structured data

**TechArticle abstract**

> In IronPDF, PDF generation is driven through License from C# and manages IronPDF licensing - apply your license key once at application startup. License is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where is License located in the IronPDF object model?",
    "answer": "License is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the License class used for in C#?",
    "answer": "License is the IronPDF class that manages IronPDF licensing - apply your license key once at application startup. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of License?",
    "answer": "Properties commonly used on License include IsLicensed, LicenseKey. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "What methods are available on License?",
    "answer": "Common methods include DisableAppAnalytics, IsValidLicense. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).