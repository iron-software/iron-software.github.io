<!--
N-Full (class). Frame D. IronWord. Members verified 2026-06-23 against IronWord.Models.TableCell.html. Base: TableElement.
Members used: ctors TableCell()/TableCell(ContentElement[])/TableCell(String); Value, Style, Shading, TextAlignment, VerticalAlignment, Width, GridSpan; AddChild, AddText, AddImage, AddParagraph, AddTable, GetWidth, ExtractText, Split.
Cross-class verified: TextContent ctor; Table indexing returns TableCell.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TableCell.html
-->

## Injected overview (Markdown)

Filling a single box in a Word table runs through `TableCell`. Each instance is one cell, holding the content placed inside it and the styling applied to it, and a `Table` hands you cells by index so you can write to them one at a time. It is what a developer works with whenever a table needs text, images, or nested content in a specific position.

A cell is created empty (`new TableCell()`), from a string (`new TableCell("Total")`), or from content elements (`new TableCell(params ContentElement[])`), and the common way to obtain one is through the parent table's indexer, `table[row, column]`. Add content with `AddText`, `AddParagraph`, `AddImage`, `AddShape`, or `AddTable` for a nested grid, or call `AddChild` to attach any `ContentElement`. The plain text of a cell is available through the `Value` property and `ExtractText`, and `FindText` and `ReplaceText` edit it in place.

Cell appearance is set through the cell's own properties: `Style` takes a `TableCellStyle`, `Shading` sets the fill color, `TextAlignment` and `VerticalAlignment` position the content, and `Width`, `GridSpan`, and the four margin properties control sizing. `GetWidth` and `SetWidth` read and write the width in a chosen `MeasurementUnit`, and `Split` divides a cell. Because the table addresses cells positionally, the usual pattern is to index to the cell you want, then add or style its content. A single cell is not limited to one piece of content: it can hold a paragraph, an image, and a nested table together, which is how richer layouts such as a product row with a label, a thumbnail, and a detail grid are built. `InsertCellBeforeSelf` and `InsertCellAfterSelf` add neighbouring cells relative to this one when a row needs to grow.

```csharp
using IronWord.Models;

Table table = new Table(2, 2);
TableCell cell = table[0, 0];
cell.AddText(new TextContent("Number"));
cell.VerticalAlignment = VerticalAlign.Middle;
```

The [add a table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers populating and styling cells, the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) fills cells by index across a grid, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where cells sit in the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableCell Class - IronWord C# API Reference`
- v2 (human): `TableCell: Fill Word Table Cells in C#`
- v3 (balanced): `TableCell Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Fill Word table cells in C# with the IronWord TableCell class: add text, images, and nested content, read Value, and style with Shading and alignment.`
- v2 (human): `Populate and style individual table cells with the IronWord TableCell class in C#: add text or images, set shading and alignment, and span columns.`
- v3 (balanced): `Reference for the IronWord TableCell class in C#: obtained through a table indexer, it holds cell content via AddText and AddChild plus styling.`

---

## Structured data

**TechArticle abstract**

> Filling a single Word table cell in C# runs through the IronWord TableCell class. A Table hands you a cell through its indexer, table[row, column], and you add content with AddText, AddParagraph, AddImage, or AddChild. The plain text is available through Value and ExtractText, and appearance is set through the Style, Shading, TextAlignment, and VerticalAlignment properties.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableCell live in the IronWord API?",
    "answer": "TableCell is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from TableElement and is usually obtained from a Table through its indexer, table[row, column]."
  },
  {
    "question": "How do you add text to a table cell in C# with IronWord?",
    "answer": "Index to the cell with table[row, column], then call AddText with a TextContent, or assign a new TableCell that was constructed with content. AddParagraph, AddImage, and AddChild add other content types to the same cell."
  },
  {
    "question": "How do you style a single table cell in IronWord?",
    "answer": "Set the cell's own properties: Style takes a TableCellStyle, Shading sets the fill color, and TextAlignment and VerticalAlignment position the content. Width and GridSpan control sizing and column spanning."
  }
]
```
