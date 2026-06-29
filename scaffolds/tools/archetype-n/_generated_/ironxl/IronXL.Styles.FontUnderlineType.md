<!--
N-Lite/enum. Members verified 2026-06-23: Double, DoubleAccounting, None, Single, SingleAccounting.
Salience order: None default, Single common, then Double, then accounting variants.
Consuming member verified: IronXL.Styles.IFont.UnderlineType (Style.Font.UnderlineType).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.FontUnderlineType.html
-->

## Injected overview (Markdown)

Set `FontUnderlineType` to choose how a cell's text is underlined, assigned to the `UnderlineType` property of a `Style.Font`. `None` is the default with no underline, `Single` draws the standard line, and `Double` draws two. `SingleAccounting` and `DoubleAccounting` use the wider accounting style that spaces the line out and extends it past the value, which suits totals in financial reports. The [cell font how-to](https://ironsoftware.com/csharp/excel/how-to/cell-font-size/) compares the underline types.

```csharp
worksheet["A1"].Style.Font.UnderlineType = FontUnderlineType.Single;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontUnderlineType Enum - IronXL C# API`
- v2 (human): `FontUnderlineType: Underline Excel Text C#`
- v3 (balanced): `FontUnderlineType Enum | IronXL C# .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Excel text underlining in C# with the IronXL FontUnderlineType enum: None, Single, Double, or accounting styles, on Style.Font.UnderlineType.`
- v2 (human): `Underline Excel cell text in C# .NET with the IronXL FontUnderlineType enum: None, Single, Double, and accounting underline styles.`
- v3 (balanced): `Reference for the IronXL FontUnderlineType enum in C#: None, Single, Double, and accounting underlines via Style.Font.UnderlineType.`

---

## Structured data

**TechArticle abstract**

> Set FontUnderlineType in IronXL to choose how a cell's text is underlined, assigned to Style.Font.UnderlineType. None applies no underline, Single and Double draw one or two lines, and SingleAccounting and DoubleAccounting use the wider accounting style suited to financial totals.
