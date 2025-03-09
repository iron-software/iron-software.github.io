# IronXL - The Excel Library for .Net

IronXL is a powerful .NET Excel library that enables developers to read, generate, and edit Excel files (XLS, XLSX) without relying on Microsoft.Office.Interop.Excel.

With IronXL, developers can seamlessly read, modify, and create spreadsheets in .NET applications and websites, offering a fast and intuitive approach to working with Excel files in C#.

Quickstart Guide: <https://ironsoftware.com/csharp/excel/> <br>
Nuget Package : <https://www.nuget.org/packages/IronXL.Excel/>

# Key Library Features

- Intuitive C# & VB.NET Excel Spreadsheet API
- No need to install MS Office or Excel Interop
- Read, edit, and create Excel spreadsheet files
- Fully supports .NET Core, .NET Framework, and Azure
- Import data from XLS, XLSX, CSV, TSV
- Export worksheets to XLS, XLSX, CSV, TSV, JSON
- Work with spreadsheets as System.Data.DataSet and System.Data.DataTable objects
- Excel formulas are recalculated every time a sheet is edited
- Intuitive range setting using `WorkSheet["A1:B10"]` syntax.
- Sort ranges, columns, and rows
- Style cells – font, size, background pattern, border, alignment, and number formats

# Compatibility

IronXL works well in C#, VB.NET, MVC, ASP.NET projects for Websites, Console & Desktop APPs.

Works with:

- .NET 9, .NET 8, .NET 7, .NET 6, .NET 5, and .NET Core, Standard, and Framework 4.6.2+
- Windows, macOS, Linux, Docker, Azure, and AWS
- Console, Desktop, and Web Apps. MVC, Blazor, MAUI, Razor Pages, Web Forms

Does NOT require Excel or MS office to be installed.

# C&num; Excel Code Example

```csharp
using IronXL;
  
// Create new Excel WorkBook document
// The default file format is XLSX, but we can override that for legacy support
WorkBook workbook = WorkBook.Create(ExcelFileFormat.XLS);
workbook.Metadata.Author = "IronXL";

// Add a blank WorkSheet
WorkSheet worksheet = workbook.CreateWorkSheet("new_sheet");
// Add data and styles to the new worksheet

worksheet["A1"].Value = "Hello World";
worksheet["A2"].Style.BottomBorder.SetColor("#ff6600");
worksheet["A2"].Style.BottomBorder.Type = IronXL.Styles.BorderType.Double;

// Save the excel file
workbook.SaveAs("NewExcelFile.xls");
```

# Further Documentation

- Code Examples : <https://ironsoftware.com/csharp/excel/examples/read-excel/>
- How-To Guides : <https://ironsoftware.com/csharp/excel/how-to/create-xlsx-file-c-sharp/>
- Tutorials : <https://ironsoftware.com/csharp/excel/tutorials/how-to-read-excel-file-csharp/>
- MSDN Class Reference : <https://ironsoftware.com/csharp/excel/object-reference/>
- Support : <support@ironsoftware.com>