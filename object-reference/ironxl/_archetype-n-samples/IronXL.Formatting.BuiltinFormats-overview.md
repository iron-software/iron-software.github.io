<!--
N-Full (static class, 32 const format-string fields). Frame E. IronXL.
Fields verified 2026-06-23: Currency2, Currency0, Accounting2, Number2, Percent, Percent2,
Scientific1, ShortDate, LongDate1, ShortDateAndTime, Time1, Fraction1, Thousands2, Text, General.
Cross-ref: Cell.FormatString verified on IronXL.Cell.html; Range.FormatString on IronXL.Range.html.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.BuiltinFormats.html
-->

## Injected overview (Markdown)

Currency, percentage, date, and accounting layouts that a spreadsheet needs every day live as ready-made strings on `BuiltinFormats`. Each field holds an Excel number-format code, so a developer assigns one to a cell instead of hand-writing a format pattern like `"$#,##0.00"`. It is the shortcut a developer reaches for behind a search like "C# Excel number format".

The fields feed the `FormatString` property on a `Cell` or a `Range`. After loading or creating a workbook, pick the field that matches the data and assign it: `BuiltinFormats.Currency2` for two-decimal money, `BuiltinFormats.Percent2` for percentages, `BuiltinFormats.ShortDate` for dates. Because `BuiltinFormats` is a static class of constants, there is nothing to construct; reference the field directly wherever a format string is expected.

The fields group by data kind. Money and accounting cover `Currency0`, `Currency2`, `Accounting0`, `Accounting2`, and their red-negative variants such as `Currency2Red`. Numbers cover `Number0`, `Number2`, `Thousands2`, `Scientific1`, and the `Fraction1` family. Dates and times cover `ShortDate`, `LongDate1`, `ShortDateAndTime`, and the `Time1` through `Time4` set. `Percent` and `Percent2` handle ratios, while `Text` forces literal text and `General` restores Excel's default. The trailing digit on most names is the decimal-place count, so `Number0` shows whole numbers and `Number2` shows two places. When none of the built-ins fit, assign a raw Excel format code to `FormatString` directly instead of a `BuiltinFormats` field.

```csharp
using IronXL;
using IronXL.Formatting;

WorkBook book = WorkBook.Create();
WorkSheet sheet = book.DefaultWorkSheet;
sheet["B2"].Value = 1234.5;
sheet["B2"].FormatString = BuiltinFormats.Currency2;
book.SaveAs("formatted.xlsx");
```

The [set cell data format how-to](https://ironsoftware.com/csharp/excel/how-to/set-cell-data-format/) walks through applying a format to a cell or range, the [Excel number formats example](https://ironsoftware.com/csharp/excel/examples/excel-number-formats/) shows several built-ins side by side, and the [style cells example](https://ironsoftware.com/csharp/excel/examples/excel-style-cells-borders-fonts/) combines formats with fonts and borders.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BuiltinFormats Class - IronXL C# API Reference`
- v2 (human): `BuiltinFormats: Excel Number Formats in C#`
- v3 (balanced): `BuiltinFormats Class | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply Excel number formats in C# with the IronXL BuiltinFormats class: assign Currency2, Percent2, ShortDate, and more to a cell's FormatString.`
- v2 (human): `Format Excel cells in C# with the IronXL BuiltinFormats class: ready-made currency, percentage, date, and accounting codes for FormatString.`
- v3 (balanced): `Reference for the IronXL BuiltinFormats class in C#: built-in number-format strings like Currency2 and ShortDate for the FormatString property.`

---

## Structured data

**TechArticle abstract**

> Currency, percentage, date, and accounting layouts live as ready-made number-format strings on IronXL's BuiltinFormats class in C#. Assign a field such as Currency2, Percent2, or ShortDate to the FormatString property of a Cell or Range to format spreadsheet data without writing a raw Excel format code. The fields group by data kind, and the trailing digit on most names sets the decimal-place count.

**FAQPage entries**

```json
[
  {
    "question": "Where does BuiltinFormats live in the IronXL API?",
    "answer": "BuiltinFormats is a static class in the IronXL.Formatting namespace, shipped in IronXL.dll. Its fields are constant Excel number-format strings that you assign to a cell or range FormatString property."
  },
  {
    "question": "How do you apply a built-in number format to a cell in C#?",
    "answer": "Set the FormatString property of a Cell or Range to a BuiltinFormats field, for example cell.FormatString = BuiltinFormats.Currency2 for two-decimal currency. There is nothing to construct because BuiltinFormats holds static constants."
  },
  {
    "question": "What do the numbers in field names like Number2 and Currency0 mean?",
    "answer": "The trailing digit is the decimal-place count: Number0 shows whole numbers, Number2 shows two decimals, and Currency0 shows currency with no decimals. Names ending in Red, such as Currency2Red, display negative values in red."
  }
]
```
