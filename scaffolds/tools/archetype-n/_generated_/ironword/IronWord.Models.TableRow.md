<!--
N-Full (class). Frame B. IronWord. Members verified 2026-06-23 against IronWord.Models.TableRow.html. Base: TableElement.
Members: ctors TableRow()/TableRow(TableCell[]); Cells, Height, Index, Item[Int32]; AddCell, GetEnumerator, GetHeight, InsertRowAfterSelf, InsertRowBeforeSelf, SetHeight.
Cross-class verified: Table.AddRow(TableRow); Table.Rows; TableCell ctor.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TableRow.html
-->

## Injected overview (Markdown)

`TableRow` is the horizontal band of cells you assemble when building a Word table row by row. Each instance holds an ordered list of `TableCell` objects and the row's height, and a `Table` exposes its rows for reading and editing. Use it when a table is built incrementally, adding one populated row at a time rather than sizing the whole grid up front.

Create a row empty (`new TableRow()`) or from cells (`new TableRow(params TableCell[])`), then add it to a table with `Table.AddRow`. The cells inside a row are reachable through the `Cells` list and through the row's indexer, `row[index]`, and `AddCell` appends a `TableCell` to the end. Because `TableRow` is enumerable, `GetEnumerator` and a `foreach` walk its cells directly, which is handy when filling or reading a row in a loop.

Row height is controlled by the `Height` property, and `GetHeight` and `SetHeight` read and write it in a chosen `MeasurementUnit`. `Index` reports the row's position within the table, and `InsertRowAfterSelf` and `InsertRowBeforeSelf` add a neighbouring row relative to this one, so rows can be spliced in without rebuilding the table. The usual pattern is to build a `TableRow` with its cells, set the height if it matters, and hand it to the table. Building a table row by row is the natural approach when the row count is not known up front, such as turning a list of records into a table where each record becomes one row. After a row is added, it stays reachable through `Table.Rows`, so a later pass can adjust its height or read its cells.

```csharp
using IronWord.Models;

TableRow row = new TableRow();
row.AddCell(new TableCell("Number"));
row.AddCell(new TableCell("Name"));

Table table = new Table();
table.AddRow(row);
```

The [add a table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers building tables from rows and cells, the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) iterates rows to populate a grid, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) covers how rows sit in the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableRow Class - IronWord C# API Reference`
- v2 (human): `TableRow: Build Word Table Rows in C#`
- v3 (balanced): `TableRow Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Build Word table rows in C# with the IronWord TableRow class: hold cells in a Cells list, add cells with AddCell, set Height, and add the row with Table.AddRow.`
- v2 (human): `Assemble Word tables row by row with the IronWord TableRow class in C#: add cells, set row height, and append the row to a table.`
- v3 (balanced): `Reference for the IronWord TableRow class in C#: an enumerable band of TableCell objects with a Height property, added to a table through Table.AddRow.`

---

## Structured data

**TechArticle abstract**

> Building a Word table row by row in C# runs through the IronWord TableRow class. Construct a row empty or from cells, append cells with AddCell, and add the finished row to a table through Table.AddRow. The Cells list and the row indexer reach its cells, the row is enumerable through GetEnumerator, and Height controls its height.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableRow live in the IronWord API?",
    "answer": "TableRow is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from TableElement and is added to a table through Table.AddRow, with its rows exposed on the Table.Rows list."
  },
  {
    "question": "How do you build a table row in C# with IronWord?",
    "answer": "Create a TableRow, append cells with AddCell (or pass them to the constructor), set Height if needed, then call Table.AddRow to attach the row. The Cells list and the row indexer reach the cells afterwards."
  },
  {
    "question": "How do you set the height of a table row in IronWord?",
    "answer": "Set the Height property directly, or call SetHeight with a value and a MeasurementUnit. GetHeight reads the current height back in the unit you request."
  }
]
```
