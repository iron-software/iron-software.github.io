<!--
N-Full (class, rich surface). Frame B. IronWord. Members verified 2026-06-23 against IronWord.Models.Table.html.
Cross-class verified: WordDocument(Table) ctor + WordDocument.AddTable(Table); TableCell(TextContent); ZebraColor; TableBorders; TableStyle.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Table.html
-->

## Injected overview (Markdown)

`Table` is the grid object you build whenever a Word document needs structured rows and columns, such as an invoice, a report, or a data summary. One instance holds the rows, cells, and styling for a single table, and it is the type a developer reaches for behind a search like "C# Word table". Build it with dimensions and drop it into a document in a couple of lines.

A table is created either empty (`new Table()`), from rows (`new Table(params TableRow[])`), or sized up front with `new Table(int row, int column)`, which is the usual starting point. Once built, attach it to a document with `WordDocument.AddTable` or pass it to the `WordDocument(Table)` constructor. The cells are reachable through zero-based indexing: `table[row, column]` returns a `TableCell`, and `table[row]` returns a `TableRow`, so you assign or read content positionally.

Populate cells by assigning a `TableCell` (for example `table[0, 0] = new TableCell(new TextContent("Number"))`) or by calling `GetCell` and adding content to it. Rows and columns grow with `AddRow`, `AddColumn`, `RemoveRow`, and `RemoveColumn`, and `MergeCells` joins a rectangular range. Styling lives on the table's own properties: `Zebra` takes a `ZebraColor` for alternating row shading, `Borders` takes a `TableBorders`, `Shading` sets the fill, `Style` applies a `TableStyle`, and `Width`, `Justification`, and the cell-margin properties such as `TopCellMargin` control layout. The `Columns` and `Rows` lists expose the structure for iteration.

```csharp
using IronWord;
using IronWord.Models;

Table table = new Table(3, 3);
table.Zebra = new ZebraColor("FFFFFF", "DDDDDD");
table[0, 0] = new TableCell(new TextContent("Number"));

WordDocument doc = new WordDocument(table);
doc.SaveAs("Document.docx");
```

The [add a table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) walks through dimensions, styling, and cell content, the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) shows a populated grid saved to DOCX, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) covers how tables sit in the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Table Class - IronWord C# API Reference`
- v2 (human): `Table: Build Word Tables in C#`
- v3 (balanced): `Table Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Build Word tables in C# with the IronWord Table class: size rows and columns, index cells, merge ranges, and apply borders, shading, and zebra striping.`
- v2 (human): `Create and style tables in Word documents with the IronWord Table class in C#: size a grid, fill cells by index, merge cells, and add borders.`
- v3 (balanced): `Reference for the IronWord Table class in C#: construct a row-by-column grid, populate cells through indexing, and style with borders and zebra colors.`

---

## Structured data

**TechArticle abstract**

> Building a Word table in C# runs through the IronWord Table class. Construct it with a row and column count, populate cells through zero-based indexing such as table[0, 0] = new TableCell, and attach it with WordDocument.AddTable or the WordDocument(Table) constructor. Grow the grid with AddRow and AddColumn, join cells with MergeCells, and style it through the Zebra, Borders, Shading, and Style properties.

**FAQPage entries**

```json
[
  {
    "question": "Where does Table live in the IronWord API?",
    "answer": "Table is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from TableElement and is attached to a document with WordDocument.AddTable or the WordDocument(Table) constructor."
  },
  {
    "question": "How do you create a table in a Word document in C#?",
    "answer": "Construct a Table with a row and column count, for example new Table(3, 3), fill cells through indexing such as table[0, 0] = new TableCell(new TextContent(\"text\")), then add it with WordDocument.AddTable and call SaveAs."
  },
  {
    "question": "How do you merge or style cells in an IronWord table?",
    "answer": "Call MergeCells with the start and end row and column to join a range. For appearance, set the Zebra property to a ZebraColor for alternating rows, Borders to a TableBorders, and Style to a TableStyle."
  }
]
```
