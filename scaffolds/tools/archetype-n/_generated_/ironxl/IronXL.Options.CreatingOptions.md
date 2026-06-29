<!--
N-Mid (1 property + ctor). Frame B (identity-by-role). IronXL.
Members verified 2026-06-22: CreatingOptions(), DefaultFileFormat (ExcelFileFormat). Base Object, namespace IronXL.Options.
DefaultFileFormat type ExcelFileFormat cross-ref OK. Consuming WorkBook.Create cross-ref assumed; kept generic.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Options.CreatingOptions.html
-->

## Injected overview (Markdown)

`CreatingOptions` is the small settings object that decides the file format of a brand-new IronXL `WorkBook`. It carries the choice between the legacy XLS format and the modern XLSX format, so a developer creating a spreadsheet from scratch can pin the output to whichever a downstream consumer expects rather than accepting the default.

Pass an instance when creating a workbook, having set its one property first. `DefaultFileFormat` is an `ExcelFileFormat` value, and XLSX is the default when nothing is specified, which suits most new files. Reach for XLS only when an older tool or process cannot read the newer format. Because the object holds a single decision, configuring it is a one-line step taken before the workbook exists; the chosen format then governs how that workbook saves unless overridden at save time. A parameterless constructor creates the options with the XLSX default already in place.

```csharp
using IronXL;
using IronXL.Options;

var options = new CreatingOptions();
options.DefaultFileFormat = ExcelFileFormat.XLSX;
```

The [create a spreadsheet how-to](https://ironsoftware.com/csharp/excel/how-to/create-spreadsheet/) walks through making a new workbook, and the [create Excel spreadsheet example](https://ironsoftware.com/csharp/excel/examples/create-excel-spreadsheet/) shows a worked file.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CreatingOptions Class - IronXL C# API`
- v2 (human): `CreatingOptions: New Workbook Format in C#`
- v3 (balanced): `CreatingOptions | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the format of a new IronXL workbook in C# with CreatingOptions: choose XLS or XLSX through the DefaultFileFormat property.`
- v2 (human): `Pick the file format for a new spreadsheet in C# with the IronXL CreatingOptions class: XLSX by default, or XLS for older tools.`
- v3 (balanced): `Reference for the IronXL CreatingOptions class in .NET: set DefaultFileFormat to XLS or XLSX when creating a new WorkBook.`

---

## Structured data

**TechArticle abstract**

> Choosing the format of a new IronXL workbook in C# runs through the CreatingOptions class. Its DefaultFileFormat property takes an ExcelFileFormat value, with XLSX as the default and XLS available for older tools. Construct it with the parameterless constructor, set the format, and pass it when creating a WorkBook.

**FAQPage entries**

```json
[
  {
    "question": "Where does CreatingOptions live in the IronXL API?",
    "answer": "CreatingOptions is a class in the IronXL.Options namespace, shipped in IronXL.dll, deriving from System.Object. It supplies format settings when creating a new WorkBook."
  },
  {
    "question": "How do you set the format of a new workbook in C#?",
    "answer": "Create a CreatingOptions instance, set its DefaultFileFormat property to an ExcelFileFormat value such as XLSX or XLS, and pass it when creating the WorkBook. XLSX is the default if nothing is specified."
  }
]
```
