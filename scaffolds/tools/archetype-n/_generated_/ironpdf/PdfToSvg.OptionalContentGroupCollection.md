<!--
N-Mid (0 declared members). Frame C. IronPDF. Members verified 2026-06-22.
Target: PdfToSvg.OptionalContentGroupCollection
-->

## Injected overview (Markdown)

Inspecting the optional-content layers present in an SVG conversion result becomes straightforward through `OptionalContentGroupCollection`, a read-only snapshot of every `OptionalContentGroup` detected during PDF-to-SVG export. Because it extends `ReadOnlyCollection<OptionalContentGroup>`, the full set of standard collection operations, including indexed access, `Count`, `Contains`, and enumeration, is available without any additional setup.

Optional content groups (OCGs) map to the layer system embedded in many PDF files: technical drawings, legal documents, and multi-language publications commonly use layers to show or hide content conditionally. When IronPDF converts such a document to SVG, each layer surfaces as an `OptionalContentGroup` entry inside this collection, giving calling code a structured way to discover what layers were present and to drive any layer-aware post-processing logic.

The collection is consumed rather than constructed directly. Retrieve it from the SVG conversion result and iterate or query it to branch on specific layer names before writing output files or applying further transformations.

```csharp
using IronPdf;

// Convert a layered PDF to SVG, then inspect its optional-content groups.
var result = PdfToSvg.Convert("layered-drawing.pdf");
OptionalContentGroupCollection groups = result.OptionalContentGroups;

foreach (OptionalContentGroup group in groups)
{
    Console.WriteLine(group.Name);
}
```

For background on PDF-to-SVG conversion in IronPDF, see the [IronPDF documentation hub](https://ironpdf.com/docs/) and the [PDF to SVG how-to guide](https://ironpdf.com/how-to/pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OptionalContentGroupCollection Class - IronPDF C# API`
- v2 (human): `OptionalContentGroupCollection: PDF Layers in C#`
- v3 (balanced): `OptionalContentGroupCollection Class | IronPDF C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read PDF optional-content groups during SVG conversion in C# with IronPDF's OptionalContentGroupCollection, a ReadOnlyCollection of OptionalContentGroup.`
- v2 (human): `Inspect PDF layers when converting to SVG in C# using IronPDF's OptionalContentGroupCollection, a read-only list of optional-content groups.`
- v3 (balanced): `Reference for IronPDF's OptionalContentGroupCollection in C#: enumerate PDF optional-content layers exposed during PDF-to-SVG conversion.`

---

## Structured data

**TechArticle abstract**

> Enumerating the optional-content layers present in a PDF-to-SVG conversion result in C# is handled through OptionalContentGroupCollection, a read-only snapshot of every OptionalContentGroup detected by IronPDF during export. Extending ReadOnlyCollection of OptionalContentGroup, it provides indexed access, Count, Contains, and standard enumeration, making layer-aware post-processing straightforward without constructing the collection directly.

**FAQPage entries**

```json
[
  {
    "question": "Where does OptionalContentGroupCollection live in the IronPDF API?",
    "answer": "OptionalContentGroupCollection is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It extends ReadOnlyCollection<OptionalContentGroup> and is obtained from the SVG conversion result rather than instantiated directly."
  },
  {
    "question": "How do you enumerate PDF layers after converting to SVG in C#?",
    "answer": "Retrieve the OptionalContentGroupCollection from the PDF-to-SVG conversion result, then use a foreach loop or indexed access to visit each OptionalContentGroup entry. Standard ReadOnlyCollection members such as Count and Contains are also available."
  }
]
```