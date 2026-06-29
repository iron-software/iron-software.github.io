<!--
N-Lite/enum. Members verified 2026-06-23: Backward, Both, Forward, None.
Salience order: None default, then Forward, Backward, Both.
Consuming member verified: IronXL.Styles.IStyle.DiagonalBorderDirection (paired with Style.DiagonalBorder line).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.DiagonalBorderDirection.html
-->

## Injected overview (Markdown)

Set `DiagonalBorderDirection` to choose which way a diagonal line crosses a cell, assigned to the `DiagonalBorderDirection` property of a range or cell `Style` and paired with the `DiagonalBorder` line itself. `None` is the default that draws no diagonal, `Forward` runs the line from the bottom-left to the top-right corner, `Backward` runs it from the top-left to the bottom-right, and `Both` draws an X. The [borders and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) covers cell border styling.

```csharp
worksheet["A1"].Style.DiagonalBorderDirection = DiagonalBorderDirection.Forward;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DiagonalBorderDirection Enum - IronXL C#`
- v2 (human): `DiagonalBorderDirection: Excel Diagonals C#`
- v3 (balanced): `DiagonalBorderDirection | IronXL C# .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the diagonal cell border direction in C# with the IronXL DiagonalBorderDirection enum: None, Forward, Backward, or Both, on Style.DiagonalBorderDirection.`
- v2 (human): `Draw diagonal lines across Excel cells in C# .NET with the IronXL DiagonalBorderDirection enum: None, Forward, Backward, and Both.`
- v3 (balanced): `Reference for the IronXL DiagonalBorderDirection enum in C#: None, Forward, Backward, and Both diagonal directions for cell borders.`

---

## Structured data

**TechArticle abstract**

> Set DiagonalBorderDirection in IronXL to choose which way a diagonal line crosses a cell, assigned to Style.DiagonalBorderDirection and paired with the DiagonalBorder line. None draws no diagonal, Forward runs bottom-left to top-right, Backward runs top-left to bottom-right, and Both draws an X.
