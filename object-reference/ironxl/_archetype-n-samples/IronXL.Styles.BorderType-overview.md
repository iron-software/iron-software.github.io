<!--
N-Lite/enum. Members verified 2026-06-23 (larger enum, salient subset named): None, Thin, Medium, Thick, Double, Dashed, Dotted, Hair, DashDot. (Also present: DashDotDot, MediumDashed, MediumDashDot, MediumDashDotDot, SlantedDashDot.)
Salience order: None default, then weight tiers Thin/Medium/Thick, then common line styles.
Consuming member verified: IronXL.Styles.IBorder.Type (e.g. Style.TopBorder.Type).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.BorderType.html
-->

## Injected overview (Markdown)

Set `BorderType` to choose the line style drawn on a cell edge, assigned to the `Type` property of a border such as `Style.TopBorder` or `Style.LeftBorder`. `None` leaves an edge undrawn, while `Thin`, `Medium`, and `Thick` set the weight of a solid line. `Double`, `Dashed`, `Dotted`, `Hair`, and `DashDot` give the common variations, with heavier and slanted dash forms also available. The [borders and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) walks through styling each edge.

```csharp
worksheet["A1"].Style.TopBorder.Type = BorderType.Thin;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BorderType Enum - IronXL C# API Reference`
- v2 (human): `BorderType: Style Excel Cell Borders in C#`
- v3 (balanced): `BorderType Enum | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Excel cell border line styles in C# with the IronXL BorderType enum: None, Thin, Medium, Thick, Double, Dashed, and more, on Border.Type.`
- v2 (human): `Style Excel cell borders in C# .NET with the IronXL BorderType enum, from None and Thin to Thick, Double, Dashed, and Dotted lines.`
- v3 (balanced): `Reference for the IronXL BorderType enum in C#: None, Thin, Medium, Thick, and Double border lines via Border.Type.`

---

## Structured data

**TechArticle abstract**

> Set BorderType in IronXL to choose the line style drawn on a cell edge, assigned to the Type property of a border such as Style.TopBorder. None leaves an edge undrawn, Thin, Medium, and Thick set solid-line weight, and Double, Dashed, Dotted, and Hair give common variations.
