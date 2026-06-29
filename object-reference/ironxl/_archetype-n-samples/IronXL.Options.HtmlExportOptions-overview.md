<!--
N-Mid (5 properties + ctor). Frame C (when-fronted). IronXL.
Members verified 2026-06-22: HtmlExportOptions(), OutputColumnHeaders, OutputHiddenColumns, OutputHiddenRows, OutputLeadingSpacesAsNonBreaking, OutputRowNumbers (all bool). Base Object, namespace IronXL.Options.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Options.HtmlExportOptions.html
-->

## Injected overview (Markdown)

When a spreadsheet is exported to HTML, `HtmlExportOptions` controls what the generated page actually shows. It is the settings object a developer passes alongside an HTML export to decide whether spreadsheet furniture such as row numbers and column headers appears in the output, and how hidden content and spacing are treated.

Set the relevant properties before running the export. `OutputColumnHeaders` and `OutputRowNumbers` add the A, B, C column letters and the 1, 2, 3 row indexes to the rendered table, useful when the HTML needs to mirror the grid a user sees in Excel. `OutputHiddenColumns` and `OutputHiddenRows` decide whether content hidden in the workbook is carried into the page or dropped. `OutputLeadingSpacesAsNonBreaking` preserves indentation by emitting leading spaces as non-breaking spaces, which browsers would otherwise collapse. Every property is a boolean, so configuring an export is a short sequence of true or false toggles. The parameterless constructor creates the options with default values ready to adjust.

```csharp
using IronXL.Options;

var options = new HtmlExportOptions();
options.OutputColumnHeaders = true;
options.OutputRowNumbers = true;
```

The [convert Excel to HTML example](https://ironsoftware.com/csharp/excel/examples/convert-excel-to-html/) renders a workbook as a page, and the [convert file types how-to](https://ironsoftware.com/csharp/excel/how-to/convert-spreadsheet-file-types/) covers other output formats.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HtmlExportOptions Class - IronXL C# API`
- v2 (human): `HtmlExportOptions: Excel to HTML in C#`
- v3 (balanced): `HtmlExportOptions | IronXL C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control Excel to HTML export in C# with IronXL HtmlExportOptions: toggle column headers, row numbers, hidden rows and columns, and spacing.`
- v2 (human): `Decide what an HTML export shows in C# with the IronXL HtmlExportOptions class: column headers, row numbers, hidden content, and spacing.`
- v3 (balanced): `Reference for the IronXL HtmlExportOptions class in .NET: toggle OutputColumnHeaders, OutputRowNumbers, and hidden row and column output.`

---

## Structured data

**TechArticle abstract**

> Controlling how a spreadsheet exports to HTML in C# runs through the IronXL HtmlExportOptions class. OutputColumnHeaders and OutputRowNumbers add grid labels, OutputHiddenColumns and OutputHiddenRows decide whether hidden content carries over, and OutputLeadingSpacesAsNonBreaking preserves indentation. Every property is a boolean toggle set before the export.

**FAQPage entries**

```json
[
  {
    "question": "Where does HtmlExportOptions live in the IronXL API?",
    "answer": "HtmlExportOptions is a class in the IronXL.Options namespace, shipped in IronXL.dll, deriving from System.Object. It configures how a workbook is rendered when exporting to HTML."
  },
  {
    "question": "How do you show column headers when exporting Excel to HTML in C#?",
    "answer": "Create an HtmlExportOptions instance and set OutputColumnHeaders to true, optionally with OutputRowNumbers, then pass it to the HTML export. Both are boolean properties that add the grid labels to the generated page."
  }
]
```
