<!--
N-Lite/enum. Members verified 2026-06-23: Center, CenterSelection, Distributed, Fill, General, Justify, Left, Right.
Salience order: Left, Center, Right (reading order) first, then General default, then specialized.
Consuming member verified: IronXL.Styles.IStyle.HorizontalAlignment.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.HorizontalAlignment.html
-->

## Injected overview (Markdown)

Set `HorizontalAlignment` to control how a cell's contents sit across its width, assigned to the `HorizontalAlignment` property of a range or cell `Style`. `Left`, `Center`, and `Right` cover the everyday cases, while `General` is the spreadsheet default that aligns text left and numbers right. `Justify` and `Distributed` spread text across the cell, `Fill` repeats the value, and `CenterSelection` centers across a span. The [borders and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) shows the property in use.

```csharp
worksheet["A1"].Style.HorizontalAlignment = HorizontalAlignment.Center;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HorizontalAlignment Enum - IronXL C# API`
- v2 (human): `HorizontalAlignment: Align Excel Cells in C#`
- v3 (balanced): `HorizontalAlignment Enum | IronXL C# .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set horizontal cell alignment in C# with the IronXL HorizontalAlignment enum: Left, Center, Right, General, Justify, and more, on Style.HorizontalAlignment.`
- v2 (human): `Align Excel cell contents in C# .NET with the IronXL HorizontalAlignment enum, from Left, Center, and Right to General, Justify, and Fill.`
- v3 (balanced): `Reference for the IronXL HorizontalAlignment enum in C#: Left, Center, Right, and General alignment via Style.HorizontalAlignment.`

---

## Structured data

**TechArticle abstract**

> Set HorizontalAlignment in IronXL to control how a cell's contents sit across its width, assigned to Style.HorizontalAlignment. Left, Center, and Right cover the everyday cases, General is the default that aligns text left and numbers right, and Justify, Distributed, Fill, and CenterSelection handle special layouts.
