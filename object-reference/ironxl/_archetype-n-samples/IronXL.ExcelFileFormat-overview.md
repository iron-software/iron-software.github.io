<!--
N-Lite/enum. Members verified 2026-06-23: XLSX, XLS.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.ExcelFileFormat.html
-->

## Injected overview (Markdown)

`ExcelFileFormat` selects the workbook format `IronXL` writes when a file is created, saved, or converted, passed to `WorkBook.Create`, `WorkBook.Import`, and `WorkBook.ToStream`. `XLSX` is the modern Open XML format and the usual choice for current spreadsheets, while `XLS` is the legacy binary format for older Excel versions and tools that still require it. The [convert spreadsheet file types how-to](https://ironsoftware.com/csharp/excel/how-to/convert-spreadsheet-file-types/) walks through moving between formats.

```csharp
WorkBook workBook = WorkBook.Create(ExcelFileFormat.XLSX);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ExcelFileFormat Enum - IronXL C# API Reference`
- v2 (human): `ExcelFileFormat: Pick XLSX or XLS in C#`
- v3 (balanced): `ExcelFileFormat Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the workbook format in C# with the IronXL ExcelFileFormat enum: XLSX or XLS, passed to WorkBook.Create, Import, and ToStream.`
- v2 (human): `Select which spreadsheet format IronXL writes in C# with the ExcelFileFormat enum: modern XLSX or legacy XLS for older Excel tools.`
- v3 (balanced): `Reference for the IronXL ExcelFileFormat enum in C#: XLSX and XLS workbook formats used when creating, importing, or saving files.`

---

## Structured data

**TechArticle abstract**

> Use ExcelFileFormat in IronXL to select the workbook format when creating, saving, or converting a file, passed to WorkBook.Create, Import, and ToStream. XLSX is the modern Open XML format and the usual choice, while XLS is the legacy binary format for older Excel versions.
