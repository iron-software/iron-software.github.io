<!--
N-Full. Frame B (identity-by-role). IronXL. Members verified 2026-06-23 against IronXL.WorkBook.html:
Load, Create, CreateWorkSheet, GetWorkSheet, RemoveWorkSheet, WorkSheets, SaveAs, Save, Metadata, Password, Encrypt, SetActiveTab.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.WorkBook.html
-->

## Injected overview (Markdown)

`WorkBook` is the object a developer holds for the whole span of an Excel job in C#, from opening or creating a file through editing it and saving it back out. It models a single spreadsheet document, its worksheets, and the metadata around it, so most IronXL code starts by getting a `WorkBook` and ends by saving one. It is the type a search like "C# Excel workbook" lands on.

Open an existing file with `WorkBook.Load`, which accepts a path, a byte array, or a `Stream` and reads `XLSX`, `XLS`, `CSV`, and other supported formats. Start a fresh document instead with the static `WorkBook.Create`, optionally passing an `ExcelFileFormat`. Once a workbook is in hand, reach into its sheets through the `WorkSheets` collection, `GetWorkSheet` by name, or `CreateWorkSheet` to add one, and remove a sheet with `RemoveWorkSheet`.

The everyday surface is small. `WorkSheets` exposes the sheets for iteration, `Metadata` carries document properties like author and title, and `SetActiveTab` chooses which sheet opens first. When the edits are done, persist with `SaveAs` for a new file path or `Save` to write back to the loaded source, and choose the output format through the file extension or a `SavingOptions` argument. For protected files, `Password` and `Encrypt` apply a password before saving. A workbook obtained from `Load` and one from `Create` behave the same way from this point on, so the read and write paths converge on the same object.

```csharp
using IronXL;

WorkBook workBook = WorkBook.Load("sample.xlsx");
WorkSheet workSheet = workBook.GetWorkSheet("Sheet1");
workSheet["A1"].Value = "Updated";
workBook.SaveAs("output.xlsx");
```

The [load spreadsheet how-to](https://ironsoftware.com/csharp/excel/how-to/load-spreadsheet/) walks through opening files, the [create spreadsheet how-to](https://ironsoftware.com/csharp/excel/how-to/create-spreadsheet/) starts a new workbook, and the [read Excel example](https://ironsoftware.com/csharp/excel/examples/read-excel/) shows a full read.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WorkBook Class - IronXL C# API Reference`
- v2 (human): `WorkBook: Open & Save Excel Files in C#`
- v3 (balanced): `WorkBook Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Open, edit, and save Excel files in C# with the IronXL WorkBook class. Load a file or Create one, reach its WorkSheets, then SaveAs to write it back.`
- v2 (human): `Work with an entire Excel document in C# through the IronXL WorkBook class: load or create a file, get its worksheets, edit, and save in one object.`
- v3 (balanced): `Reference for the IronXL WorkBook class in C#: load or create an Excel file, access its WorkSheets collection, set metadata, and save with SaveAs.`

---

## Structured data

**TechArticle abstract**

> Opening, editing, and saving an Excel file in C# runs through the IronXL WorkBook class. Load reads an existing XLSX, XLS, or CSV file from a path, stream, or byte array, while the static Create starts a new document. A workbook exposes its sheets through the WorkSheets collection, GetWorkSheet, and CreateWorkSheet, holds document properties in Metadata, and writes back with Save or SaveAs.

**FAQPage entries**

```json
[
  {
    "question": "Where does WorkBook live in the IronXL API?",
    "answer": "WorkBook is a class in the IronXL namespace, shipped in IronXL.dll, and derives from Object. Get one from WorkBook.Load or WorkBook.Create, then reach its sheets through the WorkSheets collection."
  },
  {
    "question": "How do you open an existing Excel file in C#?",
    "answer": "Call the static WorkBook.Load with a file path, byte array, or Stream. It reads XLSX, XLS, CSV, and other supported formats and returns a WorkBook you can edit and then write back with Save or SaveAs."
  },
  {
    "question": "What is the difference between Save and SaveAs on a WorkBook?",
    "answer": "Save writes the workbook back to the file it was loaded from, while SaveAs writes to a new path you supply. Both pick the output format from the file extension, or you can pass a SavingOptions argument."
  }
]
```
