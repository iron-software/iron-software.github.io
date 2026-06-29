<!--
N-Full. Frame D (task-gerund-fronted). IronXL. Members verified 2026-06-23 against IronXL.Range.html:
Sum, Avg, Min, Max, Columns, Rows, Column, Row, ColumnCount, RowCount, GetEnumerator, SortAscending,
SortDescending, SortByColumn, Value, StringValue, Style, RangeAddress, SaveAsNamedRange, Trim, Replace, ToDataTable.
WorkSheet["A1:C3"] indexer returns Range (cross-ref verified on IronXL.WorkSheet.html).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Range.html
-->

## Injected overview (Markdown)

Working across a block of Excel cells at once in C#, rather than one cell at a time, is what `Range` is for. It represents a rectangular group of cells, such as `A1:C10`, and gives a developer aggregation, sorting, iteration, and bulk formatting over the whole block in a single call. It is the type a worksheet's string indexer returns and the surface most data-processing IronXL code spends its time on.

A range comes from a worksheet's indexer, so `workSheet["A1:C10"]` returns the `Range` covering those cells, or from `GetRange`. Because `WorkSheet`, `RangeColumn`, and `RangeRow` all derive from `Range`, the same members apply whether the block is an explicit selection, a whole sheet, a single column, or a single row.

The members cluster by task. For math, `Sum`, `Avg`, `Min`, and `Max` reduce the numeric cells in the range to a single result. For navigation, `Rows` and `Columns` enumerate the sub-ranges, `Row` and `Column` pick one out, `ColumnCount` and `RowCount` size the block, and the range itself is iterable through `GetEnumerator`. For ordering, `SortAscending`, `SortDescending`, and `SortByColumn` reorder the cells in place. For editing, `Value` writes the same value to every cell, `Style` applies shared formatting, `Replace` swaps cell contents, and `Trim` drops surrounding empty cells. To keep a selection for reuse, `SaveAsNamedRange` registers it under a name. A range read with the indexer and one returned from `GetRange` are the same object, so either entry point reaches the full surface.

```csharp
using IronXL;

WorkBook workBook = WorkBook.Load("sample.xlsx");
WorkSheet workSheet = workBook.GetWorkSheet("Sheet1");
Range range = workSheet["A1:A10"];
decimal total = range.Sum();
range.SortAscending();
```

The [select range how-to](https://ironsoftware.com/csharp/excel/how-to/select-range/) covers building a range, the [aggregate functions example](https://ironsoftware.com/csharp/excel/examples/aggregate-excel-functions/) uses `Sum` and `Avg`, and the [sort cells how-to](https://ironsoftware.com/csharp/excel/how-to/sort-cells/) reorders one.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Range Class - IronXL C# API Reference`
- v2 (human): `Range: Work With Excel Cell Blocks in C#`
- v3 (balanced): `Range Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Work across a block of Excel cells in C# with the IronXL Range class: Sum, Avg, Min, and Max, iterate Rows and Columns, and SortAscending in one call.`
- v2 (human): `Handle many Excel cells at once in C# through the IronXL Range class: aggregate values, sort a selection, iterate rows and columns, and format in bulk.`
- v3 (balanced): `Reference for the IronXL Range class in C#: aggregate with Sum and Avg, sort cells, iterate Rows and Columns, and save a selection as a named range.`

---

## Structured data

**TechArticle abstract**

> The IronXL Range class works across a rectangular block of Excel cells in C# in a single call. A worksheet's string indexer returns one, for example workSheet["A1:C10"]. Sum, Avg, Min, and Max aggregate the numeric cells, Rows and Columns iterate the block, SortAscending and SortByColumn reorder it, and Value, Style, and Replace edit every cell at once. WorkSheet, RangeColumn, and RangeRow all derive from it.

**FAQPage entries**

```json
[
  {
    "question": "Where does Range live in the IronXL API?",
    "answer": "Range is a class in the IronXL namespace, shipped in IronXL.dll, and derives from Object. A WorkSheet's string indexer or GetRange returns one, and WorkSheet, RangeColumn, and RangeRow all derive from it."
  },
  {
    "question": "How do you sum a range of cells in C#?",
    "answer": "Call Sum on the Range returned by the worksheet indexer, for example workSheet[\"A1:A10\"].Sum(). Avg, Min, and Max give the other aggregates over the numeric cells in the block."
  },
  {
    "question": "How do you select a range of cells with IronXL?",
    "answer": "Use the worksheet string indexer with an address like workSheet[\"A1:C10\"], which returns a Range, or call GetRange. From there you can aggregate, sort, iterate Rows and Columns, or apply Style to the whole block."
  }
]
```
