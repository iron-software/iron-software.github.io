<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Fonts.PdfFontCollection.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`PdfFontCollection` is the object IronPDF C# code works with for PDF fonts. It represents observable collection of fonts.

`PdfFontCollection` matters when an application needs to configure or invoke PDF fonts from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `PdfFontCollection`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `Item[String]`. Assign options or invoke methods on the instance to configure or perform the operation. The [manage fonts](https://ironpdf.com/how-to/manage-fonts/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain PdfFontCollection from the relevant entry point in the IronPDF API
void Configure(PdfFontCollection instance)
{
    var current = instance.Item[String];
    instance.Add();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the PDF fonts portion of the IronPDF C# API contains related types that work with `PdfFontCollection` directly. `PdfFontCollection` instances inherit additional members from `ObservableCollection<PdfFont>` that may be relevant in advanced scenarios. In application code, treat `PdfFontCollection` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `PdfFontCollection` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `PdfFontCollection`. Application code typically obtains or instantiates a single `PdfFontCollection` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfFontCollection Class - IronPDF C# API Reference`
- v2 (human): `PdfFontCollection: IronPDF PDF Fonts in C#`
- v3 (balanced): `PdfFontCollection Class | IronPDF C# PDF Fonts`

**Meta-description (120-160 chars)**
- v1 (algorithm): `PdfFontCollection is the IronPDF class for PDF fonts in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF PdfFontCollection class reference for C#: observable collection of fonts.`
- v3 (balanced): `PdfFontCollection (PDF Fonts) in IronPDF for C#: observable collection of fonts. See members and usage.`

---

## Structured data

**TechArticle abstract**

> Use PdfFontCollection in IronPDF to work with PDF fonts from C#, which provides observable collection of fonts. PdfFontCollection is in the IronPdf.Fonts namespace, derived from ObservableCollection<PdfFont>. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain PdfFontCollection?",
    "answer": "PdfFontCollection is in the IronPdf.Fonts namespace, shipped in IronPdf.dll. It derives from ObservableCollection<PdfFont>."
  },
  {
    "question": "What is the PdfFontCollection class used for in C#?",
    "answer": "PdfFontCollection is the IronPDF class that observable collection of fonts. It is part of the IronPdf.Fonts namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of PdfFontCollection?",
    "answer": "Properties commonly used on PdfFontCollection include Item[String]. Each property configures one aspect of the PDF fonts surface exposed by the class."
  },
  {
    "question": "What methods are available on PdfFontCollection?",
    "answer": "Common methods include Add, Add, Find, GetHashCode. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).