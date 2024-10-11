IronXL  - The Excel Library for .Net 
=============================================================

IronXL is an Excel Library for C# and .Net which allows developers to Read and edit Excel data from XLS and XLSX Documents without using Microsoft.Office.Interop.Excel

IronXL allows developers to Read, Generate and Edit Excel (and other Spreadsheet files) in .Net Applications  & websites. A fast and natural approach to work with Excel and Other Spreadsheet files in C#. 


Quickstart Guide:  https://ironsoftware.com/csharp/excel/
Nuget Package : https://www.nuget.org/packages/IronXL.Excel/

Key Library Features : 
=============================================================
* Intuitive C# & VB.NET Excel Spreadsheet API
* No need to install MS Office or Excel Interop
* Read, edit & create Excel spreadsheet files
* Fully supports .NET Core, Framework, and Azure
* Import Data from XLS/XLSX/CSV/TSV.
* Export Work Sheets to XLS/XLSX/CSV/TSV/JSON.
* Work with Spreadsheets as System.Data.DataSet and System.Data.DataTable objects.
* Excel Formulas recalculated every time a sheet it edited.
* Intuitive Ranges setting with a WorkSheet[“A1:B10”] syntax.
* Sort Ranges, Columns and Rows.
* Style Cells - Font, Size, Background pattern, Border, Alignment and Number formats.


	

Compatibility
=============================================================

IronXL works well in C#, VB.NET, MVC, ASP.NET projects for Websites, Console & Desktop APPs.

Works with:
- .NET Core 2 , 3 & 5
- .NET Standard 2  & 3
- .NET Framework 4.5 and above
- Xamarin, SharePoint, Mono
- Azure, AWS, Cloud hosting
- Windows, Linux, Mac, Mobile

Does NOT require Excel or MS office to be installed.

C# Excel Code Example
=============================================================

```cs
using IronXL;


//Create new Excel WorkBook document. 
//The default file format is XLSX, but we can override that for legacy support
WorkBook xlsWorkbook = WorkBook.Create(ExcelFileFormat.XLS);
xlsWorkbook.Metadata.Author = "IronXL";

//Add a blank WorkSheet
WorkSheet xlsSheet = xlsWorkbook.CreateWorkSheet("new_sheet");
//Add data and styles to the new worksheet

xlsSheet["A1"].Value = "Hello World";
xlsSheet["A2"].Style.BottomBorder.SetColor("#ff6600");
xlsSheet["A2"].Style.BottomBorder.Type = IronXL.Styles.BorderType.Double;

//Save the excel file
xlsWorkbook.SaveAs("NewExcelFile.xls");
```

Further Documentation
=============================================================

- Code Samples				:	https://ironsoftware.com/csharp/excel/examples/read-excel/
- MSDN Class Reference		:	https://ironsoftware.com/csharp/excel/object-reference/
- Tutorials					:	https://ironsoftware.com/csharp/excel/tutorials/how-to-read-excel-file-csharp/
- Nuget Package Manager		:   https://www.nuget.org/packages/IronXL.Excel/
- Support					:	developers@ironsoftware.com
