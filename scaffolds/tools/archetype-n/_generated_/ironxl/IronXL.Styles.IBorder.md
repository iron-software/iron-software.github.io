<!--
N-Mid / interface (2 props + 4 methods = 6). Frame B. IronXL.
Implementor not documented in api/: framed via returners IStyle.TopBorder/BottomBorder/LeftBorder/RightBorder/DiagonalBorder (all return IBorder, verified 2026-06-23).
Members: Color, Type (BorderType), SetBorderStyle(Color/String, BorderType), SetColor(Color/String). Cross-ref BorderType enum verified.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.IBorder.html
-->

## Injected overview (Markdown)

`IBorder` is what a cell's style hands back for one edge of its border. Each side of a cell, read through `IStyle`, returns this contract so a developer can set the line's color and weight independently, which is how a header underline or a boxed total is drawn.

A developer reaches `IBorder` through the border properties of `IStyle`: `TopBorder`, `BottomBorder`, `LeftBorder`, `RightBorder`, and `DiagonalBorder`, all get-only and all reached from `Cell.Style` or `Range.Style`. There is no construction step; read the side you want and set it. Assigning through a range's style applies the same edge across the whole selection.

`Color` sets the line color as an RGB string and `Type` takes a `BorderType` for the weight and style, such as thin, medium, or thick. The `SetBorderStyle` method sets both at once, accepting either a `Color` or an RGB string alongside a `BorderType`, and `SetColor` updates only the color. Set the type to a visible weight; a color alone on a `None` border will not render.

```csharp
using IronXL;
using IronXL.Styles;

WorkSheet sheet = WorkBook.Load("report.xlsx").DefaultWorkSheet;
sheet["A1:D1"].Style.BottomBorder.SetBorderStyle("#000000", BorderType.Medium);
```

The [border and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) covers borders in context, and the [style cells, borders, and fonts example](https://ironsoftware.com/csharp/excel/examples/excel-style-cells-borders-fonts/) shows them alongside fonts and fills.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IBorder Interface - IronXL C# API Reference`
- v2 (human): `IBorder: Set Excel Cell Borders in C#`
- v3 (balanced): `IBorder Interface | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Excel cell borders in C# through the IronXL IBorder interface from IStyle: use Color and Type, or SetBorderStyle to set color and BorderType at once.`
- v2 (human): `Draw a cell edge in C# with the IronXL IBorder contract: read a side from Style and set its color and line weight with SetBorderStyle.`
- v3 (balanced): `Reference for the IronXL IBorder interface in C#: the per-edge border contract from IStyle's TopBorder, BottomBorder, and side properties.`

---

## Structured data

**TechArticle abstract**

> IStyle's TopBorder, BottomBorder, LeftBorder, RightBorder, and DiagonalBorder properties return IronXL's IBorder interface in C#, one per cell edge. Color sets the line color as an RGB string and Type takes a BorderType for the weight; SetBorderStyle sets both at once from a Color or RGB string plus a BorderType, and SetColor updates only the color. IBorder is reached from Cell.Style or Range.Style.

**FAQPage entries**

```json
[
  {
    "question": "Where does IBorder live in the IronXL API?",
    "answer": "IBorder is an interface in the IronXL.Styles namespace, shipped in IronXL.dll. It is returned by the border properties of IStyle, such as TopBorder and BottomBorder, which come from Cell.Style or Range.Style."
  },
  {
    "question": "What returns IBorder in IronXL?",
    "answer": "The IStyle border properties return it: TopBorder, BottomBorder, LeftBorder, RightBorder, and DiagonalBorder. IronXL exposes IBorder through these get-only properties rather than letting you construct one, so a typical path is range.Style.BottomBorder."
  }
]
```
