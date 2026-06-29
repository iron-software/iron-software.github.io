<!--
N-Full (class; named-table styling). Frame E. IronXL.
Name/ShowColumnStripes/ShowRowStripes/ShowFirstColumn/ShowLastColumn + built-in fields (TableStyleMedium2, None) verified 2026-06-23.
Range.SaveAsNamedTable(string, bool, TableStyle, bool) cross-ref verified on IronXL.Range.html.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.TableStyle.html
-->

## Injected overview (Markdown)

The banded look of an Excel named table comes from `TableStyle`. When a range is saved as a named table, this type decides which banner of stripes, header emphasis, and column highlighting Excel paints over the data. A developer building a report or an exported dataset reaches for it to make a plain block of cells read as a real Excel table rather than loose values.

`TableStyle` is supplied to `Range.SaveAsNamedTable`, the call that promotes a selected range into a named table on the worksheet. The argument is optional, so a table can be created with the workbook default, or styled by passing one of the built-in presets that mirror Excel's own gallery. The style travels with the table once it is written, so the choice made here is what a user sees when the file is opened.

The presets are exposed as static fields named after Excel's three families: light, medium, and dark, each numbered (`TableStyleLight1`, `TableStyleMedium2`, `TableStyleDark3`, and so on), with `None` for an unstyled table. Pass one of these fields straight into `SaveAsNamedTable` rather than constructing a style by hand. The instance properties tune the banding on top of the chosen preset: `ShowRowStripes` and `ShowColumnStripes` toggle the alternating bands, while `ShowFirstColumn` and `ShowLastColumn` emphasize the leading and trailing columns, and `Name` reports the underlying style identifier. The stripe and emphasis flags are nullable, so an unset flag defers to the preset's own default instead of forcing a value. The same presets and flags map directly onto the table styling a user would pick from Excel's ribbon, which keeps a generated table consistent with what the audience expects to see.

```csharp
using IronXL;

WorkBook workbook = WorkBook.Create();
WorkSheet sheet = workbook.DefaultWorkSheet;
sheet["A1:C4"].SaveAsNamedTable("Sales", true, TableStyle.TableStyleMedium2, true);
```

The [named table how-to](https://ironsoftware.com/csharp/excel/how-to/named-table/) walks through creating a styled table, the [style cells, borders, and fonts example](https://ironsoftware.com/csharp/excel/examples/excel-style-cells-borders-fonts/) shows the wider formatting surface that surrounds it, and the [border and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) covers per-cell styling for tables that need finer control.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableStyle Class - IronXL C# API Reference`
- v2 (human): `TableStyle: Style Excel Named Tables in C#`
- v3 (balanced): `TableStyle Class | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style an Excel named table in C# with the IronXL TableStyle class: pass a built-in preset like TableStyleMedium2 to Range.SaveAsNamedTable and toggle stripes.`
- v2 (human): `Give an Excel table the banded gallery look in C# with IronXL TableStyle: choose a light, medium, or dark preset and toggle row and column stripes.`
- v3 (balanced): `Reference for the IronXL TableStyle class in C#: built-in table presets plus ShowRowStripes and ShowColumnStripes flags for Range.SaveAsNamedTable.`

---

## Structured data

**TechArticle abstract**

> The banded look of an Excel named table in C# comes from IronXL's TableStyle class. Pass a built-in preset such as TableStyleMedium2 or TableStyleDark3 to Range.SaveAsNamedTable, or TableStyle.None for no style. Instance flags ShowRowStripes, ShowColumnStripes, ShowFirstColumn, and ShowLastColumn tune the banding and emphasis on top of the chosen preset, and Name reports the style identifier.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableStyle live in the IronXL API?",
    "answer": "TableStyle is a class in the IronXL.Styles namespace, shipped in IronXL.dll, with a base type of Object. It is passed to Range.SaveAsNamedTable to style a range that is saved as a named table."
  },
  {
    "question": "How do you style an Excel named table in C#?",
    "answer": "Call Range.SaveAsNamedTable and pass a TableStyle preset such as TableStyle.TableStyleMedium2 for the tableStyle argument. Use TableStyle.None for an unstyled table, and set ShowRowStripes or ShowColumnStripes to control the banding."
  },
  {
    "question": "What table style presets does IronXL provide?",
    "answer": "TableStyle exposes static fields matching Excel's gallery in light, medium, and dark families, each numbered, such as TableStyleLight1, TableStyleMedium2, and TableStyleDark3, plus None for no styling."
  }
]
```
