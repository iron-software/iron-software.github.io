<!--
N-Full. Frame E (feature-fronted). IronWord. >10 methods -> functional buckets (paper size / margins / header-footer / measured reads).
Members verified 2026-06-23: props BottomMargin, Footer, Gutter, Header, LeftMargin, Orientation, PaperSize, RightMargin, TopMargin;
methods SetCustomPaperSize(double,double,MeasurementUnit), SetCustomPaperSize(int,int), Set/Get{Top,Bottom,Left,Right}Margin(.,MeasurementUnit), SetGutter, SetHeaderHeight, SetFooterHeight, GetHeaderHeight, GetFooterHeight, GetWidth, GetHeight (all MeasurementUnit).
Base Object. Cross-ref verified: DocumentSection.PageSetup property; WordDocument.Sections / AddSection.
Target: IronWord.Models.PageSetup.html
-->

## Injected overview (Markdown)

Page size, orientation, margins, and the header and footer bands for a section all live on `PageSetup`. It is the type that decides how a stretch of the document is laid out on the page, the settings a developer reaches for to switch to landscape, set a custom paper size, or widen the margins for binding.

Each `DocumentSection` owns a `PageSetup` through its `PageSetup` property, so layout can differ from section to section within one document. A developer obtains a section from the `WordDocument` (its `Sections` collection, or a new one added with `AddSection`), reads or assigns that section's `PageSetup`, and the change applies to every page the section covers. Settings here describe the section's page frame, not the content inside it.

The members fall into a few groups. Paper: `PaperSize` and `Orientation` pick a standard size and portrait or landscape, while `SetCustomPaperSize` (overloaded for raw integers or a value pair with a `MeasurementUnit`) sets exact dimensions. Margins: `SetTopMargin`, `SetBottomMargin`, `SetLeftMargin`, and `SetRightMargin` take a value plus a `MeasurementUnit`, with matching `GetTopMargin` and the others reading them back; `Gutter` (and `SetGutter`) reserves binding space. Header and footer: the `Header` and `Footer` properties hold the bands, and `SetHeaderHeight` and `SetFooterHeight`, with their `GetHeaderHeight` and `GetFooterHeight` readers, size them. Measured reads: `GetWidth` and `GetHeight` return the page dimensions in any `MeasurementUnit` you request.

```csharp
PageSetup setup = section.PageSetup;
setup.Orientation = PageOrientation.Landscape;
setup.SetTopMargin(2.5, MeasurementUnit.Centimeter);
```

The [word to PDF how-to](https://ironsoftware.com/csharp/word/how-to/word-to-pdf/) shows how page layout carries into a rendered document, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) covers sections and structure.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PageSetup Class - IronWord C# API Reference`
- v2 (human): `PageSetup: Word Page Layout in C#`
- v3 (balanced): `PageSetup Class | IronWord .NET API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Word page size, orientation, and margins in C# with the IronWord PageSetup class: PaperSize, Orientation, SetCustomPaperSize, and margin setters.`
- v2 (human): `Control the page layout of a Word section in C# with the IronWord PageSetup class: paper size, portrait or landscape, margins, and header bands.`
- v3 (balanced): `Reference for the IronWord PageSetup class in C#: per-section page size, orientation, margins, gutter, and header and footer heights.`

---

## Structured data

**TechArticle abstract**

> Controlling the page size, orientation, and margins of a Word section in C# runs through the IronWord PageSetup class. Each DocumentSection owns one through its PageSetup property. PaperSize and Orientation pick a layout, SetCustomPaperSize sets exact dimensions, the margin setters take a value with a MeasurementUnit, and GetWidth and GetHeight read the page dimensions back in any unit.

**FAQPage entries**

```json
[
  {
    "question": "Where does PageSetup live in the IronWord API?",
    "answer": "PageSetup is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object, and each DocumentSection exposes its own instance through the PageSetup property so layout can vary per section."
  },
  {
    "question": "How do you set page orientation and margins in IronWord?",
    "answer": "Get the section's PageSetup, assign Orientation for portrait or landscape, and call SetTopMargin, SetBottomMargin, SetLeftMargin, or SetRightMargin with a value and a MeasurementUnit. Use SetCustomPaperSize for exact page dimensions."
  },
  {
    "question": "Can different sections have different page layouts in IronWord?",
    "answer": "Yes. Because every DocumentSection owns its own PageSetup, one document can mix portrait and landscape pages or different paper sizes. Obtain a section from the WordDocument's Sections collection and configure its PageSetup independently."
  }
]
```
