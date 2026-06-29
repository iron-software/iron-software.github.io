<!--
N-Full. Frame E (feature-fronted). IronXL. Members verified 2026-06-23 against IronXL.WorkSheet.html:
GetRange, GetCellAt, GetRow, GetColumn, Item[String], Merge, Unmerge, AutoSizeColumn, AutoSizeRow,
AddNamedRange, CreateFreezePane, Rows/Columns via Range base, Name, SaveAs. Base type Range.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.WorkSheet.html
-->

## Injected overview (Markdown)

Reading and writing the cells of a single Excel tab in C# happens through `WorkSheet`. It represents one sheet inside a `WorkBook` and is where the actual data work lives: pulling values out, writing them in, selecting ranges, merging cells, and shaping rows and columns. A developer searching for "C# Excel worksheet" wants this type, and most IronXL examples spend the bulk of their lines on it.

Obtain a worksheet from a workbook with `GetWorkSheet`, by index from the `WorkSheets` collection, or fresh from `CreateWorkSheet`. Once held, the indexer `Item[String]` gives the quickest path to data, so `workSheet["A1"]` reads or assigns a single cell and `workSheet["A1:C3"]` returns a `Range` spanning several. The `GetRange`, `GetCellAt`, `GetRow`, and `GetColumn` methods cover the same ground with explicit arguments when a string address is awkward.

Because `WorkSheet` derives from `Range`, the whole range surface is available on the sheet itself, including `Rows`, `Columns`, and value access, alongside sheet-specific members grouped by job. For layout, `Merge` and `Unmerge` combine cells while `AutoSizeColumn` and `AutoSizeRow` fit them to content. For structure, `AddNamedRange` and `AddNamedTable` register reusable names and `CreateFreezePane` locks headers in place. `Name` reads or sets the tab label, and `SaveAs` writes just this sheet to its own file. Edits stay in memory until the parent `WorkBook` is saved, so a worksheet and the workbook that owns it are written together.

```csharp
using IronXL;

WorkBook workBook = WorkBook.Load("sample.xlsx");
WorkSheet workSheet = workBook.GetWorkSheet("Sheet1");
Range range = workSheet["A1:A10"];
decimal total = range.Sum();
workSheet["B1"].Value = total;
workBook.SaveAs("output.xlsx");
```

The [select range how-to](https://ironsoftware.com/csharp/excel/how-to/select-range/) covers cell and range access, the [manage worksheets how-to](https://ironsoftware.com/csharp/excel/how-to/manage-worksheet/) handles sheet operations, and the [merge cells how-to](https://ironsoftware.com/csharp/excel/how-to/csharp-excel-merge-cells/) demonstrates `Merge`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WorkSheet Class - IronXL C# API Reference`
- v2 (human): `WorkSheet: Read & Write Excel Cells in C#`
- v3 (balanced): `WorkSheet Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read and write Excel cells in C# with the IronXL WorkSheet class. Use the indexer for ranges, GetRange and GetRow for access, Merge and AutoSizeColumn for layout.`
- v2 (human): `Work with one Excel tab in C# through the IronXL WorkSheet class: read and write cells, select ranges, merge cells, and size rows and columns.`
- v3 (balanced): `Reference for the IronXL WorkSheet class in C#: access cells and ranges with the indexer, merge cells, auto-size columns, and add named ranges.`

---

## Structured data

**TechArticle abstract**

> A WorkSheet is the object IronXL hands a developer to read and write the cells of one Excel tab in C#. Get it from a WorkBook with GetWorkSheet, then use the string indexer or GetRange, GetRow, and GetColumn to access data. It derives from Range, so the full range surface is available, alongside sheet members like Merge, AutoSizeColumn, AddNamedRange, and CreateFreezePane.

**FAQPage entries**

```json
[
  {
    "question": "Where does WorkSheet live in the IronXL API?",
    "answer": "WorkSheet is a class in the IronXL namespace, shipped in IronXL.dll, and derives from Range. Get one from a WorkBook through GetWorkSheet or the WorkSheets collection."
  },
  {
    "question": "How do you read a cell value from a WorkSheet in C#?",
    "answer": "Use the string indexer: workSheet[\"A1\"].Value returns the cell value, and workSheet[\"A1:C3\"] returns a Range covering several cells. GetCellAt and GetRange do the same with explicit row and column arguments."
  },
  {
    "question": "Does WorkSheet share members with Range in IronXL?",
    "answer": "Yes. WorkSheet derives from Range, so range members like Rows, Columns, Sum, and value access work directly on the sheet, in addition to sheet-specific members such as Merge, AutoSizeColumn, and AddNamedRange."
  }
]
```
