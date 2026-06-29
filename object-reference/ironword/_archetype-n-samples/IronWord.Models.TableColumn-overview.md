<!--
N-Mid (1 member). Frame B. IronWord. Members verified 2026-06-23 against IronWord.Models.TableColumn.html. Base: Object.
Member: Width (long).
Cross-class verified: Table.Columns returns List<TableColumn>.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TableColumn.html
-->

## Injected overview (Markdown)

`TableColumn` is the column record a developer reads when sizing the vertical bands of a Word table. Each instance represents one column within a table and carries its width, and a `Table` exposes its columns so they can be inspected and adjusted. It is the type you reach for when a table needs specific column widths rather than evenly divided space.

The column's single setting is `Width`, a value that controls how wide that column is rendered, measured in twips by default. Because the columns live on the parent table's `Columns` list, the usual pattern is to obtain a column from that list and set its `Width`, rather than constructing columns standalone. Add columns to a table with `Table.AddColumn`, then walk `Table.Columns` to assign each width.

```csharp
using IronWord.Models;

Table table = new Table(3, 4);
table.Columns[0].Width = 2400;
```

The [add a table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers table layout including column sizing, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where tables sit in the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableColumn Class - IronWord C# API`
- v2 (human): `TableColumn: Word Column Width in C#`
- v3 (balanced): `TableColumn Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Size Word table columns in C# with the IronWord TableColumn class: read a column from Table.Columns and set its Width, measured in twips by default.`
- v2 (human): `Control Word table column widths with the IronWord TableColumn class in C#: get a column from the table's Columns list and set its Width.`
- v3 (balanced): `Reference for the IronWord TableColumn class in C#: one column of a table, carrying a Width, accessed through the Table.Columns list.`

---

## Structured data

**TechArticle abstract**

> Sizing a Word table column in C# runs through the IronWord TableColumn class. Each instance represents one column and carries a Width, measured in twips by default. Columns live on the parent table's Columns list, so the usual pattern is to read a column from Table.Columns and set its Width.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableColumn live in the IronWord API?",
    "answer": "TableColumn is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and is accessed through the Columns list of a Table."
  },
  {
    "question": "How do you set a column width in a Word table with IronWord?",
    "answer": "Read the column from the table's Columns list and set its Width property, for example table.Columns[0].Width = 2400. The value is measured in twips by default."
  }
]
```
