<!--
N-Lite/enum. Members verified: Bevel, Miter, Round, value__.
Target: IronSoftware.LineJoins enum in IronPdf.dll
-->

## Injected overview (Markdown)

`LineJoins` controls how IronPDF renders the corner where two stroked path segments meet, mapping directly to the PDF `j` operator (ISO 32000-1 §8.4.3.4). `Miter` is the default sharp-pointed join, `Round` produces a smooth circular arc at each corner, and `Bevel` cuts the corner with a flat diagonal. Set this value when styling drawn shapes or borders in a PDF document.

```csharp
stamp.LineJoin = LineJoins.Round;
```

See [IronPDF drawing and stamping](https://ironpdf.com/how-to/stamping/) for practical usage.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LineJoins Enum - IronPDF C# API Reference`
- v2 (human): `LineJoins: Set Path Corner Style in C# PDF`
- v3 (balanced): `LineJoins Enum | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control stroked path corner style in IronPDF with the LineJoins enum: Miter, Round, or Bevel, mapping to the PDF j operator in C#.`
- v2 (human): `Choose how IronPDF joins stroked path corners in C# with LineJoins: sharp Miter, smooth Round, or flat Bevel diagonal cuts.`
- v3 (balanced): `Reference for the IronPDF LineJoins enum in C#: Miter, Round, and Bevel corner styles for stroked PDF paths via the j operator.`

---

## Structured data

**TechArticle abstract**

> Use LineJoins in IronPDF to control the corner style where stroked path segments meet, corresponding to the PDF j operator. Miter produces a sharp point, Round adds a smooth arc, and Bevel cuts the corner with a flat diagonal. Assign the value when styling drawn shapes or borders in a generated PDF document.