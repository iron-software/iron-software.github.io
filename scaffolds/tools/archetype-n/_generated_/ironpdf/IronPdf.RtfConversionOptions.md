<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.RtfConversionOptions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

PDF generation in IronPDF is handled through `RtfConversionOptions`. It represents configuration options for RTF to PDF conversion.

`RtfConversionOptions` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `RtfConversionOptions`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `ColumnGapPercent`, `FontFamily`, `FontSizePt`, `MarginBottomTwips`. Assign options or invoke methods on the instance to configure or perform the operation. The [RTF to PDF](https://ironpdf.com/how-to/rtf-to-pdf/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new RtfConversionOptions();
var current = instance.ColumnGapPercent;
// Read or assign other properties such as FontFamily, FontSizePt
instance.ForA4();
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `RtfConversionOptions` directly. `RtfConversionOptions` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `RtfConversionOptions` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `RtfConversionOptions` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `RtfConversionOptions`. Application code typically obtains or instantiates a single `RtfConversionOptions` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RtfConversionOptions Class - IronPDF C# API Reference`
- v2 (human): `RtfConversionOptions: IronPDF PDF Generation in C#`
- v3 (balanced): `RtfConversionOptions Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `RtfConversionOptions is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF RtfConversionOptions class reference for C#: configuration options for RTF to PDF conversion.`
- v3 (balanced): `RtfConversionOptions (PDF Generation) in IronPDF for C#: configuration options for RTF to PDF conversion. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use RtfConversionOptions in IronPDF to work with PDF generation from C#, which provides configuration options for RTF to PDF conversion. RtfConversionOptions is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain RtfConversionOptions?",
    "answer": "RtfConversionOptions is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the RtfConversionOptions class used for in C#?",
    "answer": "RtfConversionOptions is the IronPDF class that configuration options for RTF to PDF conversion. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of RtfConversionOptions?",
    "answer": "Properties commonly used on RtfConversionOptions include ColumnGapPercent, FontFamily, FontSizePt, MarginBottomTwips. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a RtfConversionOptions in C#?",
    "answer": "Instantiate RtfConversionOptions directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).