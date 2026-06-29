<!--
N-Lite/enum. Members verified 2026-06-23 (larger enum, salient subset named): NoFill, SolidForeground, FineDots, SparseDots, ThickForwardDiagonals, Bricks. (Also present: AltBars, BigSpots, Diamonds, Squares, LeastDots, LessDots, ThickBackwardDiagonals, ThinForwardDiagonals, ThinBackwardDiagonals, ThickHorizontalBands, ThinHorizontalBands, ThickVerticalBands, ThinVerticalBands.)
Salience order: NoFill default, SolidForeground common, then representative dot/diagonal/band patterns.
Consuming member verified: IronXL.Styles.IStyle.FillPattern.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.FillPattern.html
-->

## Injected overview (Markdown)

Set `FillPattern` to choose the shading style applied behind a cell's contents, assigned to the `FillPattern` property of a range or cell `Style`. `NoFill` is the default that leaves the cell unshaded, and `SolidForeground` fills it with a flat foreground color. The remaining values give textured patterns such as `FineDots`, `SparseDots`, `ThickForwardDiagonals`, and `Bricks`, along with further dot, diagonal, and band variations. The [background and pattern color how-to](https://ironsoftware.com/csharp/excel/how-to/background-pattern-color/) shows the property in use.

```csharp
worksheet["A1"].Style.FillPattern = FillPattern.SolidForeground;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FillPattern Enum - IronXL C# API Reference`
- v2 (human): `FillPattern: Shade Excel Cells in C#`
- v3 (balanced): `FillPattern Enum | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Excel cell shading in C# with the IronXL FillPattern enum: NoFill, SolidForeground, FineDots, diagonals, and more, on Style.FillPattern.`
- v2 (human): `Shade Excel cells in C# .NET with the IronXL FillPattern enum, from NoFill and SolidForeground to dotted, diagonal, and band textures.`
- v3 (balanced): `Reference for the IronXL FillPattern enum in C#: NoFill, SolidForeground, and textured fill patterns via Style.FillPattern.`

---

## Structured data

**TechArticle abstract**

> Set FillPattern in IronXL to choose the shading style applied behind a cell's contents, assigned to Style.FillPattern. NoFill is the default, SolidForeground fills with a flat color, and the remaining values give textured patterns such as FineDots, diagonals, and bricks.
