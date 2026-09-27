<!--
N-Mid (5 members). Frame C. IronXL. Members verified 2026-06-22.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.StreamReadOptions.html
-->

## Injected overview (Markdown)

Controlling which worksheet to read and whether its first row is a header becomes straightforward by passing a configured `StreamReadOptions` to a forward-only `StreamRows` call. This plain options record carries four settable properties: `SheetIndex`, `SheetName`, `HasHeaderRow`, and `HeaderRowIndex`. Together they let a caller target any sheet in a workbook and tell the streaming reader exactly where column names begin, without loading the entire file into memory first.

`SheetIndex` and `SheetName` select the target worksheet. When both are set, `SheetName` takes precedence. `HasHeaderRow` signals that the first read row contains column labels rather than data; `HeaderRowIndex` refines that further by specifying which zero-based row index holds those labels, useful when a sheet has a title block above the real column names. The default constructor `StreamReadOptions()` initialises all properties to their zero-value defaults, so only the properties that differ from the defaults need to be assigned before passing the object to `StreamRows`.

Because `StreamRows` is a forward-only, low-memory path through large files, `StreamReadOptions` is the sole configuration surface for that read mode. Keeping the options object separate from the method signature means a single configured instance can be reused across multiple files that share the same sheet layout.

```csharp
using IronXL;

var opts = new StreamReadOptions
{
    SheetName    = "Sales",
    HasHeaderRow = true,
    HeaderRowIndex = 0
};

foreach (var row in WorkBook.StreamRows("large-report.xlsx", opts))
{
    Console.WriteLine(row[0].StringValue);
}
```

The [IronXL getting-started guide](https://ironsoftware.com/csharp/excel/get-started/) covers installation, and the [read Excel file how-to](https://ironsoftware.com/csharp/excel/how-to/read-excel-file/) explains broader worksheet access patterns.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `StreamReadOptions Class - IronXL C# API Reference`
- v2 (human): `StreamReadOptions: Stream Excel Sheets in C#`
- v3 (balanced): `StreamReadOptions Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure forward-only Excel streaming in C# with IronXL StreamReadOptions: set SheetIndex, SheetName, HasHeaderRow, and HeaderRowIndex for StreamRows.`
- v2 (human): `Use IronXL StreamReadOptions in C# to pick a worksheet and mark a header row before calling StreamRows for low-memory Excel file reading.`
- v3 (balanced): `Reference for IronXL StreamReadOptions in C#: configure sheet selection and header-row detection for the forward-only StreamRows read mode.`

---

## Structured data

**TechArticle abstract**

> Configuring a forward-only StreamRows pass through an Excel file in C# starts with a StreamReadOptions instance. Set SheetIndex or SheetName to target a worksheet, HasHeaderRow to mark that a header row is present, and HeaderRowIndex to identify which zero-based row holds the column labels. The default constructor initialises all properties to zero-value defaults, so only differing properties need assignment before passing the object to StreamRows.

**FAQPage entries**

```json
[
  {
    "question": "Where does StreamReadOptions live in the IronXL API?",
    "answer": "StreamReadOptions is a class in the IronXL namespace, shipped in IronXL.dll. It derives from Object and is passed as the second argument to the WorkBook.StreamRows method to configure forward-only worksheet streaming."
  },
  {
    "question": "How do you target a specific worksheet when streaming rows in C#?",
    "answer": "Set SheetName to the worksheet's name or SheetIndex to its zero-based position on the StreamReadOptions instance before passing it to StreamRows. When both are provided, SheetName takes precedence."
  }
]
```