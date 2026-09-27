<!--
N-Full (class, 7 members). Frame B (identity-by-role). IronXL.
StreamCell members verified: ColumnIndex, ColumnLetter, IsFormula, Text, Type, Value, ctor.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.StreamCell.html
-->

## Injected overview (Markdown)

Each position visited during a forward-only XLSX stream is represented as a `StreamCell`, an immutable snapshot that carries the column address, data type, raw value, and formatted text of one cell without loading the entire workbook into memory. When large files must be processed quickly and write-back is not required, `StreamCell` is the record a developer inspects inside a streaming read loop.

`StreamCell` surfaces seven members. `ColumnIndex` gives the zero-based integer column position, and `ColumnLetter` gives the familiar letter label such as `"C"` or `"AA"`. `Type` is a `StreamCellType` discriminator that tells you whether the cell holds a number, a string, a boolean, a date, or an error, so a switch on `Type` replaces defensive casting. `Value` is the raw `object` for programmatic use, while `Text` is the pre-formatted string representation suitable for display or CSV output. `IsFormula` flags cells whose value was computed by a formula rather than entered directly, which matters when downstream logic needs to distinguish authored constants from derived results.

The constructor `StreamCell(int columnIndex, StreamCellType type, object value, string text, bool isFormula)` is public, so unit tests can build fixture cells without touching a real file. In production, instances arrive from the IronXL streaming API rather than being constructed by hand.

Because `StreamCell` is not backed by the workbook, it cannot write values back. It is a read-only record: once the streaming cursor advances, the previous `StreamCell` remains valid in memory but the worksheet position it described has been passed. This design keeps the memory footprint flat even for worksheets with hundreds of thousands of rows.

```csharp
using IronXL;

WorkBook.StreamRead("large-report.xlsx", (StreamCell cell) =>
{
    if (cell.Type == StreamCellType.Number)
        Console.WriteLine($"{cell.ColumnLetter}: {cell.Value} ({cell.Text})");

    if (cell.IsFormula)
        Console.WriteLine($"  ^ formula cell at column {cell.ColumnIndex}");
});
```

The [stream read how-to](https://ironsoftware.com/csharp/excel/how-to/stream-read-xlsx/) explains the full streaming workflow, the [read Excel file guide](https://ironsoftware.com/csharp/excel/how-to/read-excel-file/) covers standard in-memory reading for comparison, and the [IronXL get-started page](https://ironsoftware.com/csharp/excel/get-started/) covers installation and licensing.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `StreamCell Class - IronXL C# API Reference`
- v2 (human): `StreamCell: Stream Excel Cells in C#`
- v3 (balanced): `StreamCell Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use IronXL StreamCell in C# to read cell values, types, and column addresses during forward-only XLSX streaming without loading the full workbook.`
- v2 (human): `Inspect column, type, value, and text for each cell during a fast forward-only Excel stream in C# with the IronXL StreamCell class.`
- v3 (balanced): `Reference for IronXL StreamCell in C#: access ColumnIndex, ColumnLetter, Type, Value, Text, and IsFormula during low-memory XLSX streaming.`

---

## Structured data

**TechArticle abstract**

> Inspecting individual cells during a forward-only XLSX stream in C# is done through the IronXL StreamCell record. Each instance exposes ColumnIndex and ColumnLetter for position, a StreamCellType via Type for safe discrimination, the raw Value object, a formatted Text string, and an IsFormula flag. StreamCell is immutable and not backed by the workbook, keeping memory flat across large worksheets. Instances arrive from the IronXL streaming API; the public constructor also supports unit-test fixture creation.

**FAQPage entries**

```json
[
  {
    "question": "Where does StreamCell live in the IronXL API?",
    "answer": "StreamCell is a class in the IronXL namespace, shipped in IronXL.dll. It derives from Object and is produced by the IronXL streaming read API. Its seven members include ColumnIndex, ColumnLetter, Type, Value, Text, IsFormula, and a public constructor."
  },
  {
    "question": "How do you read cell values from a large Excel file without loading it fully into memory?",
    "answer": "Use the IronXL streaming API, which delivers one StreamCell per cell position. Inspect Type to determine the data kind, then read Value for the raw object or Text for the formatted string. Because StreamCell is immutable, memory stays flat regardless of worksheet size."
  },
  {
    "question": "What is the difference between StreamCell and Cell in IronXL?",
    "answer": "Cell is backed by the workbook and supports reading and writing values. StreamCell is an immutable snapshot produced during forward-only streaming: it cannot write values back, but it allows processing very large XLSX files with a minimal memory footprint."
  },
  {
    "question": "How do you detect formula cells with StreamCell?",
    "answer": "Check the IsFormula property. When true, the cell's value was computed by a worksheet formula rather than entered as a constant. The Value and Text properties still reflect the computed result."
  }
]
```