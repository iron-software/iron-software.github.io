<!--
N-Full / interface (15 props + 2 methods). Frame B. IronXL.
Implementor not documented in api/: framed via returners Cell.Style / Range.Style (both return IStyle, verified 2026-06-23).
Members Font/LeftBorder/RightBorder/TopBorder/BottomBorder/DiagonalBorder return IFont/IBorder; SetBackgroundColor verified.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.IStyle.html
-->

## Injected overview (Markdown)

`IStyle` is what a cell or range hands back when a developer wants to control how it looks. Reading `Cell.Style` or `Range.Style` returns this contract, and everything about a cell's appearance, the fill color, font, borders, alignment, rotation, and text wrapping, is set through it. It is the single styling surface in IronXL, so the same object covers a one-cell tweak and a whole-range format.

A developer obtains `IStyle` rather than constructing it: `Cell.Style` and `Range.Style` both expose it as a get-only property, so styling means reading the property and assigning to its members. Assigning to a range's `Style` applies the change across every cell in the selection in one pass, which is how column-wide or table-wide formatting is done without looping. A single cell and a wide selection use the same surface, so the styling code does not change as the target grows.

The everyday members fall into a few groups. `Font` returns an `IFont` for typeface, size, bold, italic, and color; the four side borders (`TopBorder`, `BottomBorder`, `LeftBorder`, `RightBorder`) plus `DiagonalBorder` each return an `IBorder` for line color and style, with `DiagonalBorderDirection` setting which way a diagonal runs. Fill is handled by `BackgroundColor` together with `FillPattern`, or through the `SetBackgroundColor` helper that accepts a `Color` or an RGB string. Layout comes from `HorizontalAlignment`, `VerticalAlignment`, `WrapText`, `ShrinkToFit`, `Indention`, and `Rotation`. Because the border and font members return their own interfaces, a fluent path like `range.Style.Font.Bold = true` is the normal idiom.

```csharp
using IronXL;

WorkBook workbook = WorkBook.Load("report.xlsx");
WorkSheet sheet = workbook.DefaultWorkSheet;
IStyle headerStyle = sheet["A1:D1"].Style;
headerStyle.Font.Bold = true;
headerStyle.SetBackgroundColor("#DDEBF7");
headerStyle.BottomBorder.SetBorderStyle("#000000", BorderType.Thin);
```

The [style cells, borders, and fonts example](https://ironsoftware.com/csharp/excel/examples/excel-style-cells-borders-fonts/) demonstrates the full surface, the [border and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) covers borders and layout, and the [background pattern color how-to](https://ironsoftware.com/csharp/excel/how-to/background-pattern-color/) handles fills.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IStyle Interface - IronXL C# API Reference`
- v2 (human): `IStyle: Style Excel Cells and Ranges in C#`
- v3 (balanced): `IStyle Interface | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style Excel cells in C# through the IronXL IStyle interface from Cell.Style or Range.Style: set Font, borders, BackgroundColor, alignment, and WrapText.`
- v2 (human): `Control how Excel cells look in C# with the IronXL IStyle contract: read Cell.Style or Range.Style and set font, borders, fill, and alignment.`
- v3 (balanced): `Reference for the IronXL IStyle interface in C#: the styling contract returned by Cell.Style and Range.Style for fonts, borders, fills, and alignment.`

---

## Structured data

**TechArticle abstract**

> Cell.Style and Range.Style return IronXL's IStyle interface in C#, the single contract for cell appearance. Font returns an IFont; TopBorder, BottomBorder, LeftBorder, RightBorder, and DiagonalBorder return IBorder; BackgroundColor, FillPattern, and SetBackgroundColor handle fill; and HorizontalAlignment, VerticalAlignment, WrapText, and Rotation set layout. Assigning a range's Style applies the format across every cell.

**FAQPage entries**

```json
[
  {
    "question": "Where does IStyle live in the IronXL API?",
    "answer": "IStyle is an interface in the IronXL.Styles namespace, shipped in IronXL.dll. It is returned by the Style property of Cell and Range, and exposes a cell's font, borders, fill, and alignment."
  },
  {
    "question": "What returns IStyle in IronXL?",
    "answer": "Cell.Style and Range.Style both return an IStyle. IronXL exposes IStyle through these get-only properties rather than letting you construct one, so styling means reading Style and assigning to its members such as Font, BackgroundColor, and the border properties."
  },
  {
    "question": "How do you set a cell's font and borders in C#?",
    "answer": "Read Cell.Style or Range.Style to get an IStyle, then use Font (an IFont) for bold, size, and color, and the border properties (TopBorder, BottomBorder, LeftBorder, RightBorder), each an IBorder, for line color and style. SetBackgroundColor sets the fill."
  }
]
```
