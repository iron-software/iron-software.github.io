<!--
N-Mid (5 properties + ctor). Frame D (task-gerund-fronted). IronXL.
Members verified 2026-06-22: LoadingOptions(), ConvertFieldValues (bool, default true), CsvIgnoreQuotes (bool, default false), CsvListDelimiter (string), DefaultFileFormat (ExcelFileFormat), Password (string). Base Object, namespace IronXL.Options.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Options.LoadingOptions.html
-->

## Injected overview (Markdown)

Opening a workbook that needs special handling on the way in runs through `LoadingOptions`. It is the settings object a developer supplies when loading a file so that CSV parsing, an encryption password, and the working format are all decided before the data is read, rather than fixed up afterward.

Set the properties that match the source file, then pass the options to the load call. `Password` supplies the password for an encrypted workbook so it can be opened. For delimited text, `CsvListDelimiter` sets the separator (its default follows the current region's culture), `CsvIgnoreQuotes` controls whether quote characters are treated literally, and `ConvertFieldValues`, true by default, parses each field's value into a typed cell rather than leaving raw text. `DefaultFileFormat` is an `ExcelFileFormat` value that picks XLS or XLSX as the in-memory format when loading CSV or TSV, with XLSX as the default. Set only the properties a given file requires; the parameterless constructor leaves the rest at their documented defaults.

```csharp
using IronXL.Options;

var options = new LoadingOptions();
options.Password = "secret";
options.CsvListDelimiter = ",";
```

The [load a spreadsheet how-to](https://ironsoftware.com/csharp/excel/how-to/load-spreadsheet/) opens files of several types, and the [read CSV file how-to](https://ironsoftware.com/csharp/excel/how-to/csharp-read-csv-file/) covers delimited input.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LoadingOptions Class - IronXL C# API`
- v2 (human): `LoadingOptions: Load Excel & CSV in C#`
- v3 (balanced): `LoadingOptions | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control workbook loading in C# with IronXL LoadingOptions: set a Password, CSV delimiter, quote handling, value conversion, and file format.`
- v2 (human): `Open encrypted or delimited files in C# with the IronXL LoadingOptions class: set a Password, CSV delimiter, and how field values convert.`
- v3 (balanced): `Reference for the IronXL LoadingOptions class in .NET: Password, CsvListDelimiter, CsvIgnoreQuotes, ConvertFieldValues, DefaultFileFormat.`

---

## Structured data

**TechArticle abstract**

> Loading a workbook with special handling in C# runs through the IronXL LoadingOptions class. Password opens an encrypted file, CsvListDelimiter and CsvIgnoreQuotes shape CSV parsing, ConvertFieldValues turns raw fields into typed cells, and DefaultFileFormat sets the in-memory format for CSV or TSV. Set the properties a file needs before the load call.

**FAQPage entries**

```json
[
  {
    "question": "Where does LoadingOptions live in the IronXL API?",
    "answer": "LoadingOptions is a class in the IronXL.Options namespace, shipped in IronXL.dll, deriving from System.Object. It configures how a WorkBook is read when loading a file."
  },
  {
    "question": "How do you open a password-protected workbook in C#?",
    "answer": "Create a LoadingOptions instance, set its Password property to the workbook password, and pass the options to the load call. The same object also controls CSV delimiter, quote handling, and value conversion for delimited input."
  }
]
```
