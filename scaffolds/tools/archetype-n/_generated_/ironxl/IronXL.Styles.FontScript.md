<!--
N-Lite/enum. Members verified 2026-06-23: None, Sub, Super.
Salience order: None default, then Super, Sub.
Consuming member verified: IronXL.Styles.IFont.FontScript (Style.Font.FontScript).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.FontScript.html
-->

## Injected overview (Markdown)

Set `FontScript` to position a cell's text as normal, superscript, or subscript, assigned to the `FontScript` property of a `Style.Font`. `None` is the default that keeps text on the baseline, `Super` raises it for power notation such as x squared, and `Sub` lowers it for chemical formulas such as H2O. The [cell font how-to](https://ironsoftware.com/csharp/excel/how-to/cell-font-size/) covers script positioning alongside the other font options.

```csharp
worksheet["A1"].Style.Font.FontScript = FontScript.Super;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontScript Enum - IronXL C# API Reference`
- v2 (human): `FontScript: Super and Subscript in Excel C#`
- v3 (balanced): `FontScript Enum | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set superscript or subscript text in C# with the IronXL FontScript enum: None, Super, or Sub, on Style.Font.FontScript.`
- v2 (human): `Position Excel cell text as superscript or subscript in C# .NET with the IronXL FontScript enum: None, Super, and Sub.`
- v3 (balanced): `Reference for the IronXL FontScript enum in C#: None, Super, and Sub text positioning via Style.Font.FontScript.`

---

## Structured data

**TechArticle abstract**

> Set FontScript in IronXL to position a cell's text as normal, superscript, or subscript, assigned to Style.Font.FontScript. None keeps text on the baseline, Super raises it for power notation, and Sub lowers it for chemical formulas.
