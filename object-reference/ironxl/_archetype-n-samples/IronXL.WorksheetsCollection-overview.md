<!--
N-Full. Frame C (when-fronted). IronXL. Members verified 2026-06-23 against IronXL.WorksheetsCollection.html:
Add, Remove, RemoveAt, Insert, Contains, IndexOf, Count, Item[Int32], Create, SetSheetIndex, FindIndex, Clear, GetEnumerator.
Implements IList<WorkSheet>. WorkBook.WorkSheets cross-ref verified on IronXL.WorkBook.html.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.WorksheetsCollection.html
-->

## Injected overview (Markdown)

When code needs to walk, add, reorder, or remove the sheets of an Excel file in C#, `WorksheetsCollection` is the type it works through. It is the list of worksheets a `WorkBook` exposes as its `WorkSheets` property, so iterating every tab, counting them, or inserting a new one all run against this collection rather than the workbook directly.

A workbook hands back its collection through `WorkSheets`, and from there the surface is a familiar list. Index a sheet by position with `Item[Int32]`, so `workBook.WorkSheets[0]` is the first tab, and read how many there are with `Count`. The collection implements `IList<WorkSheet>`, so it supports `GetEnumerator` for `foreach` iteration over each `WorkSheet`.

The members fall into a few jobs. For adding, `Create` builds a new named sheet in place and `Add` appends an existing `WorkSheet`, while `Insert` places one at a chosen index. For removal, `Remove` takes a sheet instance, `RemoveAt` takes a position, and `Clear` empties the collection. For ordering and lookup, `SetSheetIndex` moves a sheet to a new position, `IndexOf` and `FindIndex` locate one, and `Contains` tests membership. Changes to the collection are part of the workbook, so they persist when the parent `WorkBook` is saved. To create or fetch a sheet by name rather than by position, the workbook's own `CreateWorkSheet` and `GetWorkSheet` are the more direct route.

```csharp
using IronXL;

WorkBook workBook = WorkBook.Load("sample.xlsx");
foreach (WorkSheet sheet in workBook.WorkSheets)
    Console.WriteLine(sheet.Name);

WorkSheet added = workBook.WorkSheets.Create("Summary");
workBook.SaveAs("output.xlsx");
```

The [manage worksheets how-to](https://ironsoftware.com/csharp/excel/how-to/manage-worksheet/) walks through adding and removing sheets, the [Excel worksheets example](https://ironsoftware.com/csharp/excel/examples/excel-worksheets/) iterates a collection, and the [copy worksheet how-to](https://ironsoftware.com/csharp/excel/how-to/copy-an-excel-worksheet/) moves sheets between workbooks.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WorksheetsCollection - IronXL C# API`
- v2 (human): `WorksheetsCollection: Excel Sheets in C#`
- v3 (balanced): `WorksheetsCollection Class | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Iterate, add, reorder, and remove Excel sheets in C# with the IronXL WorksheetsCollection: index by position, Count, Create, Add, Remove, and SetSheetIndex.`
- v2 (human): `Manage the worksheets of a workbook in C# through the IronXL WorksheetsCollection: loop over every tab, add or remove sheets, and change their order.`
- v3 (balanced): `Reference for the IronXL WorksheetsCollection in C#: the WorkBook.WorkSheets list of sheets, with Create, Add, RemoveAt, and SetSheetIndex.`

---

## Structured data

**TechArticle abstract**

> Walking, adding, reordering, and removing the sheets of an Excel file in C# runs through the IronXL WorksheetsCollection. A WorkBook exposes it as the WorkSheets property, an IList of WorkSheet that supports indexing by position, Count, and foreach iteration. Create and Add bring in sheets, Remove and RemoveAt take them out, and SetSheetIndex changes their order.

**FAQPage entries**

```json
[
  {
    "question": "Where does WorksheetsCollection live in the IronXL API?",
    "answer": "WorksheetsCollection is a class in the IronXL namespace, shipped in IronXL.dll, and implements IList<WorkSheet>. A WorkBook exposes it through the WorkSheets property."
  },
  {
    "question": "How do you loop over every worksheet in a workbook in C#?",
    "answer": "Iterate the WorkBook.WorkSheets collection with foreach, since WorksheetsCollection implements IList<WorkSheet>. Each item is a WorkSheet, and Count reports how many sheets the workbook holds."
  },
  {
    "question": "How do you reorder worksheets with IronXL?",
    "answer": "Call SetSheetIndex on the WorkSheets collection to move a sheet to a new position. Use Add, Create, or Insert to bring sheets in, and Remove or RemoveAt to take them out."
  }
]
```
