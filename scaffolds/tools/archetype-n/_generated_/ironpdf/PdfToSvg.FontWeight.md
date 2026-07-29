<!--
N-Lite/enum. Members verified: Black, Bold, Default, DemiBold, ExtraBold, ExtraLight, Hairline, Heavy, Light, Medium, Normal, Regular, SemiBold, Thin, UltraBold, UltraLight, value__
Target: PdfToSvg.FontWeight
-->

## Injected overview (Markdown)

`FontWeight` controls the stroke weight applied to fonts during PDF-to-SVG conversion in IronPDF. `Default` and `Normal` (aliased as `Regular`) are the right starting points for body text. The scale runs from `Hairline` and `Thin` at the lightest end through `Light`, `ExtraLight`, and `UltraLight`, up to `Medium`, `SemiBold` (aliased as `DemiBold`), `Bold`, `ExtraBold`, `UltraBold`, `Heavy`, and `Black` for progressively heavier strokes. See the [IronPDF SVG conversion docs](https://ironpdf.com/how-to/pdf-to-svg/) for usage context.

```csharp
var options = new SvgOptions { FontWeight = FontWeight.Bold };
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontWeight Enum - IronPDF C# API Reference`
- v2 (human): `FontWeight: Set SVG Font Weight in C# with IronPDF`
- v3 (balanced): `FontWeight Enum | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control SVG font stroke weight in C# with the IronPDF FontWeight enum: Normal, Bold, Light, Black, and more in the PdfToSvg namespace.`
- v2 (human): `Pick the right font weight for PDF-to-SVG output in C# using IronPDF's FontWeight enum, from Hairline and Thin to Heavy and Black.`
- v3 (balanced): `Reference for the IronPDF PdfToSvg.FontWeight enum in C#: Normal, Bold, Light, Black, and the full weight scale for SVG conversion.`

---

## Structured data

**TechArticle abstract**

> Use FontWeight in the PdfToSvg namespace of IronPdf.dll to set the stroke weight of fonts during PDF-to-SVG conversion. Default and Normal are the standard starting values. The scale extends from Hairline and Thin at the lightest end through Medium and SemiBold to Bold, ExtraBold, Heavy, and Black for the heaviest strokes.