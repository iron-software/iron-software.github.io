<!--
N-Mid (6 members). Frame B (identity-by-role). IronXL. Members verified 2026-06-23 against IronXL.RangeRow.html:
AutoSizeRow, AutoSizeRow(Boolean), Height, Hidden, RemoveRow, RowNumber. Base type Range.
WorkSheet.GetRow cross-ref verified on IronXL.WorkSheet.html.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.RangeRow.html
-->

## Injected overview (Markdown)

`RangeRow` is the row-shaped view of an Excel sheet a developer holds in C# to size, hide, identify, or remove a single row as a unit. It is what a worksheet returns for one row, carrying the row-level operations that a plain block of cells does not, so code reaching for "C# Excel row" lands here.

Get a row from a worksheet with `GetRow`, passing the row index, which returns the `RangeRow` for that position. Because `RangeRow` derives from `Range`, every range member still applies, so the row's cells can be read, summed, or formatted as any range, while the row-specific members add the operations that only make sense on a whole row. `RowNumber` reports the row's position, `Height` reads or sets how tall it renders, and `AutoSizeRow` fits that height to content instead, with an overload that controls whether merged cells count toward the measurement. `Hidden` shows or hides the row, and `RemoveRow` deletes it, shifting the rows below it up. These edits stay in memory until the parent `WorkBook` is saved.

```csharp
using IronXL;

WorkBook workBook = WorkBook.Load("sample.xlsx");
WorkSheet workSheet = workBook.GetWorkSheet("Sheet1");
RangeRow row = workSheet.GetRow(0);
row.AutoSizeRow();
workBook.SaveAs("output.xlsx");
```

The [auto resize how-to](https://ironsoftware.com/csharp/excel/how-to/autosize-rows-columns/) covers `AutoSizeRow`, and the [add rows and columns how-to](https://ironsoftware.com/csharp/excel/how-to/add-rows-columns/) inserts and removes rows.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RangeRow Class - IronXL C# API Reference`
- v2 (human): `RangeRow: Size & Hide Excel Rows in C#`
- v3 (balanced): `RangeRow Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Work with a whole Excel row in C# with the IronXL RangeRow class: RowNumber, Height, AutoSizeRow, Hidden, and RemoveRow on the row from GetRow.`
- v2 (human): `Handle an entire Excel row in C# through the IronXL RangeRow class: read its number, set its height, auto-size it to content, hide it, or remove it.`
- v3 (balanced): `Reference for the IronXL RangeRow class in C#: identify a row by number, set Height, AutoSizeRow to content, and Hidden or RemoveRow.`

---

## Structured data

**TechArticle abstract**

> Sizing, hiding, identifying, or removing one Excel row as a unit in C# runs through the IronXL RangeRow class. A worksheet returns one from GetRow by index. RowNumber reports its position, Height sets its size while AutoSizeRow fits content, Hidden shows or hides it, and RemoveRow deletes it. It derives from Range, so range members apply to the row's cells too.

**FAQPage entries**

```json
[
  {
    "question": "Where does RangeRow live in the IronXL API?",
    "answer": "RangeRow is a class in the IronXL namespace, shipped in IronXL.dll, and derives from Range. A WorkSheet returns one from GetRow, passing the row index."
  },
  {
    "question": "How do you auto-size an Excel row in C#?",
    "answer": "Get the row with WorkSheet.GetRow, then call AutoSizeRow on the returned RangeRow to fit its height to content. An overload controls whether merged cells count, and Height sets a fixed size instead."
  }
]
```
