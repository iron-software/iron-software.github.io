<!--
N-Full. Frame A (subject-verb). IronXL. Members verified 2026-06-23 against IronXL.Cell.html:
Value, Text, Formula, Style, FormatString, IntValue, DoubleValue, DecimalValue, DateTimeValue,
BoolValue, IsFormula, IsEmpty, IsText, IsNumeric, Address, AddressString, Hyperlink, Comment, Copy.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Cell.html
-->

## Injected overview (Markdown)

`Cell` holds the value, formula, and formatting of one position in an Excel sheet in C#, and exposes the typed readers a developer needs to pull that value out as the right .NET type. Every single-cell read or write in IronXL ends at a `Cell`, whether the goal is the raw text, a parsed number, a date, or the formula behind a computed result. It is the type behind a search like "C# Excel cell value".

A cell is reached from a worksheet, most often through the indexer, so `workSheet["A1"]` returns the `Cell` at that address, or through `GetCellAt`. From there `Value` reads or assigns the cell's contents as an object, while `Text` gives the display string and `Formula` reads or sets a formula like `=SUM(A1:A10)`.

For typed access, the cell offers `IntValue`, `DoubleValue`, `DecimalValue`, `DateTimeValue`, and `BoolValue`, which convert the stored value to that type, plus the `IsFormula`, `IsEmpty`, `IsText`, and `IsNumeric` flags for testing what a cell holds before reading it. Presentation lives on `Style` for fonts, borders, and fill, and on `FormatString` for the number or date format. A cell also carries its `Address`, an attached `Hyperlink`, and an optional `Comment`, and `Copy` duplicates it to another location. Setting `Value` and setting `Formula` are alternatives on the same cell, since a value-bearing cell and a formula-bearing one are the same object in two states.

```csharp
using IronXL;

WorkBook workBook = WorkBook.Load("sample.xlsx");
WorkSheet workSheet = workBook.GetWorkSheet("Sheet1");
Cell cell = workSheet["A1"];
cell.Value = 42;
cell.Style.Font.Bold = true;
workBook.SaveAs("output.xlsx");
```

The [select range how-to](https://ironsoftware.com/csharp/excel/how-to/select-range/) covers cell access, the [set cell data format how-to](https://ironsoftware.com/csharp/excel/how-to/set-cell-data-format/) shows `FormatString`, and the [edit formulas how-to](https://ironsoftware.com/csharp/excel/how-to/edit-formulas/) works with `Formula`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Cell Class - IronXL C# API Reference`
- v2 (human): `Cell: Read & Write Excel Cell Values in C#`
- v3 (balanced): `Cell Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read and write one Excel cell in C# with the IronXL Cell class: Value, Text, and Formula, typed readers like IntValue and DateTimeValue, Style, and FormatString.`
- v2 (human): `Work with a single Excel cell in C# through the IronXL Cell class: read its value as the right type, set a formula, and control fonts and number formats.`
- v3 (balanced): `Reference for the IronXL Cell class in C#: read and write Value, Text, and Formula, convert with typed readers, and format through Style and FormatString.`

---

## Structured data

**TechArticle abstract**

> Holding the value, formula, and formatting of one Excel position in C# is the job of the IronXL Cell class. Reach a cell from a worksheet through the indexer or GetCellAt, then read or assign Value, Text, and Formula. Typed readers such as IntValue, DoubleValue, and DateTimeValue return the stored value as a .NET type, while Style and FormatString control presentation.

**FAQPage entries**

```json
[
  {
    "question": "Where does Cell live in the IronXL API?",
    "answer": "Cell is a class in the IronXL namespace, shipped in IronXL.dll, and derives from Object. Reach one from a WorkSheet through the string indexer or GetCellAt."
  },
  {
    "question": "How do you read a cell value as a number in C#?",
    "answer": "Use a typed reader on the Cell: IntValue, DoubleValue, or DecimalValue return the stored value as that type. Check IsNumeric first if a cell might hold text, and read FormatString to see its number or date format."
  },
  {
    "question": "How do you set a formula on a cell with IronXL?",
    "answer": "Assign to the Cell.Formula property, for example cell.Formula = \"=SUM(A1:A10)\". IsFormula reports whether a cell holds one, and Value reads the computed result after the workbook evaluates."
  }
]
```
