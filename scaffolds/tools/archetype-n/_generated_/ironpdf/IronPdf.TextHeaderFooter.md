<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.TextHeaderFooter.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `TextHeaderFooter` in IronPDF when a C# application works with PDF generation. It represents PDF Header and Footer display options.

`TextHeaderFooter` matters when an application needs to configure or invoke PDF generation from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `TextHeaderFooter`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CenterText`, `DrawDividerLine`, `DrawDividerLineColor`, `Font`. Assign options or invoke methods on the instance to configure or perform the operation. The [headers and footers](https://ironpdf.com/how-to/headers-and-footers/) covers typical usage in C# end to end.

```csharp
using IronPdf;

var instance = new TextHeaderFooter();
var current = instance.CenterText;
// Read or assign other properties such as DrawDividerLine, DrawDividerLineColor
instance.Clone();
```

For the broader workflow, see the [draw text and bitmap](https://ironpdf.com/how-to/draw-text-and-bitmap/) guide in the IronPDF C# documentation. For broader context, the PDF generation portion of the IronPDF C# API contains related types that work with `TextHeaderFooter` directly. `TextHeaderFooter` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `TextHeaderFooter` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `TextHeaderFooter` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `TextHeaderFooter`. Application code typically obtains or instantiates a single `TextHeaderFooter` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextHeaderFooter Class - IronPDF C# API Reference`
- v2 (human): `TextHeaderFooter: IronPDF PDF Generation in C#`
- v3 (balanced): `TextHeaderFooter Class | IronPDF C# PDF Generation`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TextHeaderFooter is the IronPDF class for PDF generation in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TextHeaderFooter class reference for C#: defines PDF Header and Footer display options.`
- v3 (balanced): `TextHeaderFooter (PDF Generation) in IronPDF for C#: defines PDF Header and Footer display options. See members and usage.`

---

## Structured data

**TechArticle abstract**

> TextHeaderFooter is the IronPDF C# entry point for PDF generation, which provides PDF Header and Footer display options. TextHeaderFooter is in the IronPdf namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextHeaderFooter live in the IronPDF API?",
    "answer": "TextHeaderFooter is in the IronPdf namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the TextHeaderFooter class used for in C#?",
    "answer": "TextHeaderFooter is the IronPDF class that PDF Header and Footer display options. It is part of the IronPdf namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of TextHeaderFooter?",
    "answer": "Properties commonly used on TextHeaderFooter include CenterText, DrawDividerLine, DrawDividerLineColor, Font. Each property configures one aspect of the PDF generation surface exposed by the class."
  },
  {
    "question": "How do you create a TextHeaderFooter in C#?",
    "answer": "Instantiate TextHeaderFooter directly with one of its constructors, or obtain it from the relevant IronPDF API entry point. The class supports the standard C# new expression where a constructor is defined."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).