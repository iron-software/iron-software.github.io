<!--
N-Full (class, 7 members). Frame: task-gerund lead / when-fronted abstract. IronXL.
StreamRow members verified: ctor(int,IReadOnlyList<StreamCell>), Cells, Header, this[int], this[string], RowNumber, TryGetCell.
Target: IronXL.StreamRow API reference page.
-->

## Injected overview (Markdown)

Streaming through a large XLSX worksheet row by row without loading the whole workbook into memory is what `StreamRow` makes possible. Each `StreamRow` represents one worksheet row delivered during a forward-only streaming pass, carrying the row's position and a sparse collection of `StreamCell` values for every column that actually contained content in the source file.

`RowNumber` gives the zero-based or one-based index of the row within the sheet, so positional logic stays straightforward. `Cells` exposes the populated columns as an `IReadOnlyList<StreamCell>`, but because the list is sparse, columns with no content are absent rather than represented by empty entries. To reach a specific column safely, use the `this[int columnIndex]` indexer for a numeric column address or `this[string columnName]` for a header-based name such as `"Price"`. When the column might be absent and a missing-key exception would be disruptive, `TryGetCell(string columnName, out StreamCell cell)` returns `false` cleanly instead of throwing, making it the right choice inside conditional branches.

`Header` pairs with the column-name indexer: it holds the header row values captured earlier in the stream, so `row["Price"]` resolves correctly even though the streaming reader never revisits earlier rows. This design keeps memory use flat across worksheets with hundreds of thousands of rows, because only the current `StreamRow` and its `StreamCell` objects need to be live at any moment.

The constructor `StreamRow(int rowNumber, IReadOnlyList<StreamCell> cells)` is public, which allows unit tests to build synthetic rows without touching a real file, a practical advantage when testing pipeline logic in isolation.

```csharp
using IronXL;

WorkBook.StreamXlsx("large-report.xlsx", (StreamRow row) =>
{
    if (row.RowNumber == 0) return; // skip header row

    if (row.TryGetCell("Revenue", out StreamCell revenueCell))
        Console.WriteLine($"Row {row.RowNumber}: {revenueCell.Value}");
});
```

Explore related resources: the [IronXL getting-started guide](https://ironsoftware.com/csharp/excel/get-started/), the [streaming large Excel files how-to](https://ironsoftware.com/csharp/excel/how-to/stream-xlsx/), the [read Excel data examples](https://ironsoftware.com/csharp/excel/examples/read-excel/), and the [IronXL API docs](https://ironsoftware.com/csharp/excel/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `StreamRow Class - IronXL C# API Reference`
- v2 (human): `StreamRow: Stream Excel Rows in C#`
- v3 (balanced): `StreamRow Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use IronXL StreamRow in C# to read one XLSX row at a time during forward-only streaming. Access cells by index or name with TryGetCell for safe lookup.`
- v2 (human): `StreamRow lets you process huge Excel files row by row in C# with IronXL, accessing sparse cells by column index, name, or safe TryGetCell lookup.`
- v3 (balanced): `Reference for IronXL StreamRow in C#: stream XLSX rows with Cells, RowNumber, and TryGetCell for memory-efficient large-file processing.`

---

## Structured data

**TechArticle abstract**

> When processing large XLSX files without loading them fully into memory, StreamRow delivers one worksheet row at a time during a forward-only streaming pass in IronXL. Each record exposes RowNumber, a sparse Cells list, and a Header list for name-based lookup. Reach a specific column with the int or string indexer, or call TryGetCell to retrieve a StreamCell safely when the column may be absent. The class lives in the IronXL namespace, shipped in IronXL.dll, and derives from Object.

**FAQPage entries**

```json
[
  {
    "question": "Where does StreamRow live in the IronXL API?",
    "answer": "StreamRow is a class in the IronXL namespace, shipped in IronXL.dll. It derives from System.Object and is delivered row by row during a forward-only XLSX streaming operation."
  },
  {
    "question": "How do you access a specific cell in a StreamRow by column name?",
    "answer": "Use the string indexer row[\"ColumnName\"] to retrieve a StreamCell by header name, or call TryGetCell(\"ColumnName\", out StreamCell cell) to avoid an exception when the column may not be present in that row."
  },
  {
    "question": "Why is the Cells list on StreamRow described as sparse?",
    "answer": "StreamRow only includes StreamCell entries for columns that contained actual content in the source XLSX row. Columns with no data are omitted entirely, so the list length may be smaller than the total column count of the sheet."
  },
  {
    "question": "How do you unit-test code that consumes StreamRow without a real Excel file?",
    "answer": "The public constructor StreamRow(int rowNumber, IReadOnlyList<StreamCell> cells) lets you build synthetic StreamRow instances in test code, so pipeline logic can be verified without reading an actual XLSX file."
  }
]
```