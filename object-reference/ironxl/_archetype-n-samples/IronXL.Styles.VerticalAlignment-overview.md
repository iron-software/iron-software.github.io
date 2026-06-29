<!--
N-Lite/enum. Members verified 2026-06-23: Bottom, Center, Distributed, Justify, None, Top.
Salience order: Bottom (spreadsheet default), Top, Center first, then Justify/Distributed, then None.
Consuming member verified: IronXL.Styles.IStyle.VerticalAlignment.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.VerticalAlignment.html
-->

## Injected overview (Markdown)

Set `VerticalAlignment` to control how a cell's contents sit between its top and bottom edges, assigned to the `VerticalAlignment` property of a range or cell `Style`. `Bottom` is the spreadsheet default, while `Top` and `Center` cover the other common positions. `Justify` and `Distributed` spread wrapped text across the cell height, and `None` leaves the alignment unset. The [borders and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) shows the property in use.

```csharp
worksheet["A1"].Style.VerticalAlignment = VerticalAlignment.Center;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `VerticalAlignment Enum - IronXL C# API`
- v2 (human): `VerticalAlignment: Align Excel Cells in C#`
- v3 (balanced): `VerticalAlignment Enum | IronXL C# .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set vertical cell alignment in C# with the IronXL VerticalAlignment enum: Bottom, Top, Center, Justify, Distributed, or None, on Style.VerticalAlignment.`
- v2 (human): `Align Excel cell contents vertically in C# .NET with the IronXL VerticalAlignment enum, from Bottom and Top to Center and Justify.`
- v3 (balanced): `Reference for the IronXL VerticalAlignment enum in C#: Bottom, Top, Center, and Justify alignment via Style.VerticalAlignment.`

---

## Structured data

**TechArticle abstract**

> Set VerticalAlignment in IronXL to control how a cell's contents sit between its top and bottom edges, assigned to Style.VerticalAlignment. Bottom is the default, Top and Center cover the other common positions, and Justify, Distributed, and None handle wrapped text and unset alignment.
