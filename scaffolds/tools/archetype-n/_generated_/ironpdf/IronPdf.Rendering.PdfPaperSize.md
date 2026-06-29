<!--
N-Lite/enum. Members verified from PAGE FACTS: A4, Letter, Legal, A3, A5, Custom (salient subset of 108 total).
Target: IronPdf.Rendering.PdfPaperSize
-->

## Injected overview (Markdown)

`PdfPaperSize` sets the virtual paper dimensions used when IronPDF renders a PDF, assigned to properties such as `PdfPrintOptions.PaperSize`. `A4` and `Letter` cover the two most common international and US formats respectively. `Legal`, `A3`, and `A5` address longer documents and smaller booklet pages. `Custom` signals that explicit width and height values will define the page size instead of a preset. See the [paper size how-to guide](https://ironpdf.com/how-to/custom-paper-size/) for full usage details.

```csharp
renderer.RenderingOptions.PaperSize = PdfPaperSize.A4;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfPaperSize Enum - IronPDF C# API Reference`
- v2 (human): `PdfPaperSize: Set PDF Page Size in C# with IronPDF`
- v3 (balanced): `PdfPaperSize Enum | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the virtual paper size for PDF rendering in C# with the IronPDF PdfPaperSize enum: A4, Letter, Legal, A3, A5, Custom, and 100+ more presets.`
- v2 (human): `Choose a paper size for your PDF in C# using IronPDF's PdfPaperSize enum. Covers A4, Letter, Legal, A3, A5, Custom, and many regional formats.`
- v3 (balanced): `Reference for the IronPDF PdfPaperSize enum in C#: A4, Letter, Legal, A3, A5, Custom, and over 100 real-world paper-size presets.`

---

## Structured data

**TechArticle abstract**

> Control the virtual paper dimensions of a rendered PDF in IronPDF by assigning a PdfPaperSize value to the rendering options. A4 and Letter are the standard international and US presets; Legal, A3, and A5 address longer and smaller formats; Custom defers to explicit dimensions. The enum is declared in IronPdf.Rendering and shipped in IronPdf.dll.