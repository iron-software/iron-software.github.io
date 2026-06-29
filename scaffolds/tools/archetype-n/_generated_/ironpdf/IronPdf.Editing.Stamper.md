<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Editing.Stamper.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Working with PDF editing in IronPDF runs through `Stamper`. It represents a PDF Stamper.

`Stamper` matters when an application needs to configure or invoke PDF editing from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `Stamper`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `HorizontalAlignment`, `HorizontalOffset`, `Html`, `Hyperlink`. Assign options or invoke methods on the instance to configure or perform the operation. The [blazor tutorial](https://ironpdf.com/how-to/blazor-tutorial/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain Stamper from the relevant entry point in the IronPDF API
void Configure(Stamper instance)
{
    var current = instance.HorizontalAlignment;
    instance.AntiClockwiseRotateAlignment();
}
```

For the broader workflow, see the [csharp parse PDF](https://ironpdf.com/how-to/csharp-parse-pdf/) guide in the IronPDF C# documentation. For broader context, the PDF editing portion of the IronPDF C# API contains related types that work with `Stamper` directly. `Stamper` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `Stamper` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `Stamper` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `Stamper`. Application code typically obtains or instantiates a single `Stamper` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Stamper Class - IronPDF C# API Reference`
- v2 (human): `Stamper: IronPDF PDF Editing in C#`
- v3 (balanced): `Stamper Class | IronPDF C# PDF Editing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `Stamper is the IronPDF class for PDF editing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF Stamper class reference for C#: defines a PDF Stamper.`
- v3 (balanced): `Stamper (PDF Editing) in IronPDF for C#: defines a PDF Stamper. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Stamper is the IronPDF C# entry point for PDF editing, which provides a PDF Stamper. Stamper is in the IronPdf.Editing namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does Stamper live in the IronPDF API?",
    "answer": "Stamper is in the IronPdf.Editing namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the Stamper class used for in C#?",
    "answer": "Stamper is the IronPDF class that a PDF Stamper. It is part of the IronPdf.Editing namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of Stamper?",
    "answer": "Properties commonly used on Stamper include HorizontalAlignment, HorizontalOffset, Html, Hyperlink. Each property configures one aspect of the PDF editing surface exposed by the class."
  },
  {
    "question": "What methods are available on Stamper?",
    "answer": "Common methods include AntiClockwiseRotateAlignment. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).