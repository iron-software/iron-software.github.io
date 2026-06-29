<!--
N-Full (override; assigned full tier despite 7-member surface). Frame A (subject-verb). IronXL.
Members verified 2026-06-23 against IronXL.RangeColumn.html: ColumnLetter, ColumnNumber, Width, Hidden,
AutoSizeColumn, AutoSizeColumn(Boolean), RemoveColumn. Base type Range. WorkSheet.GetColumn cross-ref verified.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.RangeColumn.html
-->

## Injected overview (Markdown)

`RangeColumn` treats one whole column of an Excel sheet as a unit in C#, so a developer can size it, hide it, identify it, or read its cells without listing each one. It is the column-shaped view a worksheet hands back, and it carries the column-level operations that a plain range of arbitrary cells does not. Code reaching for "C# Excel column" wants this type.

A column comes from a worksheet through `GetColumn`, by index or by letter, which returns the `RangeColumn` for that position. Because `RangeColumn` derives from `Range`, every range member still applies, so the column's cells can be summed, sorted, iterated, or formatted exactly as any other range, while the column-specific members add the operations that only make sense on a full column.

Those members are few and focused. `ColumnLetter` and `ColumnNumber` identify the column in spreadsheet terms (`A`, `B`, ... or `1`, `2`, ...), which is the pair developers reach for when mapping between user-facing letters and zero-based code. `Width` reads or sets how wide the column renders, and `AutoSizeColumn` fits that width to the content instead, with an overload that controls whether merged cells count toward the measurement. `Hidden` shows or hides the column, and `RemoveColumn` deletes it from the sheet, shifting the columns after it. These edits stay in memory until the parent `WorkBook` is saved, so a column change and the workbook that owns it are written together.

```csharp
using IronXL;

WorkBook workBook = WorkBook.Load("sample.xlsx");
WorkSheet workSheet = workBook.GetWorkSheet("Sheet1");
RangeColumn column = workSheet.GetColumn(0);
column.AutoSizeColumn();
workBook.SaveAs("output.xlsx");
```

The [auto resize how-to](https://ironsoftware.com/csharp/excel/how-to/autosize-rows-columns/) covers `AutoSizeColumn`, the [add rows and columns how-to](https://ironsoftware.com/csharp/excel/how-to/add-rows-columns/) inserts and removes columns, and the [select range how-to](https://ironsoftware.com/csharp/excel/how-to/select-range/) shows `GetColumn`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RangeColumn Class - IronXL C# API`
- v2 (human): `RangeColumn: Size & Hide Excel Columns in C#`
- v3 (balanced): `RangeColumn Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Work with a whole Excel column in C# with the IronXL RangeColumn class: ColumnLetter and ColumnNumber, Width, AutoSizeColumn, Hidden, and RemoveColumn.`
- v2 (human): `Handle an entire Excel column in C# through the IronXL RangeColumn class: read its letter and number, set its width, auto-size it, hide it, or remove it.`
- v3 (balanced): `Reference for the IronXL RangeColumn class in C#: identify a column by letter or number, set Width, AutoSizeColumn to content, and Hidden or RemoveColumn.`

---

## Structured data

**TechArticle abstract**

> Treating one whole Excel column as a unit in C# is the job of the IronXL RangeColumn class. A worksheet returns one from GetColumn, by index or letter. ColumnLetter and ColumnNumber identify it, Width sets its size while AutoSizeColumn fits content, Hidden shows or hides it, and RemoveColumn deletes it. It derives from Range, so range members apply to the column's cells too.

**FAQPage entries**

```json
[
  {
    "question": "Where does RangeColumn live in the IronXL API?",
    "answer": "RangeColumn is a class in the IronXL namespace, shipped in IronXL.dll, and derives from Range. A WorkSheet returns one from GetColumn, by index or column letter."
  },
  {
    "question": "How do you auto-size an Excel column in C#?",
    "answer": "Get the column with WorkSheet.GetColumn, then call AutoSizeColumn on the returned RangeColumn to fit its width to content. An overload controls whether merged cells count toward the measurement, and Width sets a fixed size instead."
  },
  {
    "question": "How do you identify a column by its letter with IronXL?",
    "answer": "Read ColumnLetter on the RangeColumn for the spreadsheet letter like A or B, and ColumnNumber for the numeric position. Both come from the column returned by WorkSheet.GetColumn."
  }
]
```
