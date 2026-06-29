<!--
N-Full / interface (8 props + 2 methods). Frame D. IronXL.
Implementor not documented in api/: framed via returner IStyle.Font (returns IFont, verified). Cross-ref IStyle.Font verified 2026-06-23.
Members Bold/Italic/Name/Height/Color/Underline/Strikeout/FontScript + SetColor(Color)/SetColor(String) verified.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.IFont.html
-->

## Injected overview (Markdown)

Controlling the typeface of an Excel cell in C# runs through `IFont`. It describes the font applied to a cell or range, the family, size, weight, and decoration, and is the part of a cell's style a developer touches whenever text needs to stand out as a heading, a total, or a flagged value. It pairs with the borders and fill on the same cell to produce the finished look.

A developer reaches `IFont` through `IStyle.Font`, the get-only property on the style returned by `Cell.Style` or `Range.Style`. There is no separate construction step: read `.Style.Font` and assign to its members, and assigning through a range's style applies the font to every cell in that range at once. This keeps header rows and labeled columns consistent without per-cell code.

The members map closely to Excel's font dialog. `Name` sets the typeface and `Height` the point size, while `Bold` and `Italic` control the weight and slant a heading or total usually needs. `Underline` takes a `FontUnderlineType` for single or double underlining, `Strikeout` draws a line through the text for struck-out values, and `FontScript` raises or lowers text for superscript and subscript. Color is set either through the `Color` string property or the `SetColor` method, which accepts a `Color` value or an RGB string for convenience, so a developer can pass whichever form is already on hand. Because `IFont` is reached through `IStyle.Font`, the usual idiom chains the two: `range.Style.Font.Bold = true`, and the same font members carry over whether the target is one cell or a whole range.

```csharp
using IronXL;

WorkBook workbook = WorkBook.Load("report.xlsx");
WorkSheet sheet = workbook.DefaultWorkSheet;
IFont font = sheet["A1"].Style.Font;
font.Name = "Calibri";
font.Height = 14;
font.Bold = true;
font.SetColor("#C00000");
```

The [cell font size how-to](https://ironsoftware.com/csharp/excel/how-to/cell-font-size/) covers sizing and weight, the [style cells, borders, and fonts example](https://ironsoftware.com/csharp/excel/examples/excel-style-cells-borders-fonts/) shows fonts alongside the rest of a cell's styling, and the [border and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) covers the borders and layout that pair with a font on the same style.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IFont Interface - IronXL C# API Reference`
- v2 (human): `IFont: Set Excel Cell Fonts in C#`
- v3 (balanced): `IFont Interface | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Excel cell fonts in C# through the IronXL IFont interface from IStyle.Font: control Name, Height, Bold, Italic, Underline, and color via SetColor.`
- v2 (human): `Control Excel cell typefaces in C# with the IronXL IFont contract: read Style.Font and set family, size, bold, italic, underline, and color.`
- v3 (balanced): `Reference for the IronXL IFont interface in C#: the font contract from IStyle.Font for typeface, size, bold, italic, underline, and color.`

---

## Structured data

**TechArticle abstract**

> IStyle.Font returns IronXL's IFont interface in C#, the font contract for an Excel cell or range. Name sets the typeface, Height the point size, and Bold and Italic the weight and slant. Underline takes a FontUnderlineType, Strikeout and FontScript add decoration, and Color or the SetColor method sets the text color. Assigning through a range's style applies the font to every cell.

**FAQPage entries**

```json
[
  {
    "question": "Where does IFont live in the IronXL API?",
    "answer": "IFont is an interface in the IronXL.Styles namespace, shipped in IronXL.dll. It is returned by the Font property of IStyle, which itself comes from Cell.Style or Range.Style."
  },
  {
    "question": "What returns IFont in IronXL?",
    "answer": "IStyle.Font returns an IFont. Because IStyle comes from Cell.Style and Range.Style, the typical path is range.Style.Font. IronXL exposes IFont through that property rather than letting you construct one directly."
  },
  {
    "question": "How do you make Excel text bold in C# with IronXL?",
    "answer": "Read Cell.Style.Font or Range.Style.Font to get an IFont, then set Bold to true. The same object's Name, Height, Italic, Underline, and SetColor control the typeface, size, slant, underline, and color."
  }
]
```
