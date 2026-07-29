<!--
N-Lite/enum. Members verified: Italic, Normal, Oblique, value__.
Target: PdfToSvg.FontStyle enum in IronPdf.dll
-->

## Injected overview (Markdown)

`FontStyle` controls how text glyphs are styled when IronPDF renders a PDF to SVG output. `Normal` is the default upright style and the most common choice. `Italic` selects a true italic typeface variant, while `Oblique` applies a slanted rendering when a dedicated italic face is unavailable. Set this value when configuring SVG font appearance during PDF conversion. See the [IronPDF SVG conversion docs](https://ironpdf.com/how-to/pdf-to-svg/) for context.

```csharp
// Example: reference the enum value directly
var style = FontStyle.Normal;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontStyle Enum - IronPDF C# API Reference`
- v2 (human): `FontStyle: SVG Font Styling Options in C#`
- v3 (balanced): `FontStyle Enum | IronPDF C# SVG Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control SVG text rendering in C# with the IronPDF PdfToSvg.FontStyle enum: Normal, Italic, and Oblique values for PDF-to-SVG font style output.`
- v2 (human): `Set SVG font style during PDF conversion in C# using IronPDF's FontStyle enum: choose Normal, Italic, or Oblique for accurate text rendering.`
- v3 (balanced): `Reference for IronPDF's PdfToSvg.FontStyle enum in C#: Normal, Italic, and Oblique values for controlling SVG text appearance in conversions.`

---

## Structured data

**TechArticle abstract**

> Configure SVG text appearance during PDF-to-SVG conversion with the PdfToSvg.FontStyle enum in IronPDF. Normal is the default upright style, Italic selects a true italic typeface variant, and Oblique applies a slanted rendering when a dedicated italic face is unavailable.