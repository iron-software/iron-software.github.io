<!--
N-Mid (4 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: PdfToSvg.OptionalContentGroup class reference page.
-->

## Injected overview (Markdown)

Control which layers appear in an SVG export by configuring an `OptionalContentGroup` before passing it to IronPDF's PDF-to-SVG conversion pipeline. Each instance represents one optional content group (OCG) from a layered PDF, pairing a human-readable `Name` with a `Visible` flag that determines whether that layer is rendered in the output.

Construct an `OptionalContentGroup` with `new OptionalContentGroup(string name)`, where `name` matches the layer label used in the source document. Set `Visible` to `true` to include the layer or `false` to suppress it entirely. The read-only `Name` property retrieves the label after construction, and `ToString()` returns the same value, making instances easy to log or display in diagnostic output.

A typical use case is a technical drawing exported as SVG where annotation layers, dimension lines, or watermark layers must be toggled independently. By building a list of `OptionalContentGroup` objects with targeted `Visible` settings, you can produce multiple SVG variants from a single PDF without editing the source file.

```csharp
using PdfToSvg;

var annotations = new OptionalContentGroup("Annotations") { Visible = false };
var dimensions  = new OptionalContentGroup("Dimensions")  { Visible = true  };
```

See the [IronPDF documentation](https://ironpdf.com/docs/) for full PDF-to-SVG conversion guidance, and the [PDF layer how-to](https://ironpdf.com/how-to/pdf-layers/) for practical examples of working with optional content groups in exported files.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OptionalContentGroup Class - IronPDF C# API`
- v2 (human): `OptionalContentGroup: Control PDF Layers in C#`
- v3 (balanced): `OptionalContentGroup Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use OptionalContentGroup in IronPDF C# to show or hide PDF layers during SVG export by setting the Name and Visible properties on each group.`
- v2 (human): `Toggle individual PDF layers in SVG exports with IronPDF's OptionalContentGroup class in C#: set Name and Visible to control each layer.`
- v3 (balanced): `Reference for IronPDF's OptionalContentGroup class in C#: configure Name and Visible to include or suppress PDF layers in SVG output.`

---

## Structured data

**TechArticle abstract**

> Configuring which PDF layers appear in an SVG export is handled through OptionalContentGroup in IronPDF's PdfToSvg namespace. Construct one with a layer name, then set Visible to true or false to include or suppress that layer. The Name property retrieves the label, and ToString returns it for logging. Multiple instances can be combined to produce targeted SVG variants from a single layered PDF.

**FAQPage entries**

```json
[
  {
    "question": "Where does OptionalContentGroup live in the IronPDF API?",
    "answer": "OptionalContentGroup is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from System.Object and is used when configuring layer visibility for PDF-to-SVG conversion."
  },
  {
    "question": "How do you hide a specific PDF layer during SVG export with OptionalContentGroup?",
    "answer": "Construct an OptionalContentGroup with the layer's name and set its Visible property to false. Pass the configured instances to the SVG export call so IronPDF omits that layer from the output."
  }
]
```