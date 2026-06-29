<!--
N-Mid / interface (0 own members; pure marker). Triage optional per 4A.2. Frame C. IronWord.
Single concrete implementor: TableRowStyle (verified). No external return path found; do not invent TableRow.Style.
Extends IDerivedStyle, IStyle, IWordDocumentObjectProperty, IDocumentObjectProperty (all inherited members come from these).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ITableRowStyle.html
-->

## Injected overview (Markdown)

When styling applies to a whole table row in a Word document, `ITableRowStyle` is the contract that represents it. It is the row-level peer of the cell and paragraph style contracts, marking a style as the one that governs a table row so code can treat row styling through a shared type rather than the concrete class.

The concrete implementor in IronWord is `TableRowStyle`. The interface declares no members of its own; it composes the style surface it offers from the contracts it extends, so what you read and set lives on the inherited `IDerivedStyle` and `IStyle` members rather than on `ITableRowStyle` directly. In practice you create a `TableRowStyle`, set the inherited style values it carries, and apply it to a row; the interface exists so a row style can be passed and stored alongside the other style kinds under one common type. Reach for the concrete `TableRowStyle` when building or adjusting the formatting, and use the interface when code handles styles uniformly.

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) builds a styled table, and the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) shows row formatting in context.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITableRowStyle Interface - IronWord C# API`
- v2 (human): `ITableRowStyle: The Table Row Style Contract in C#`
- v3 (balanced): `ITableRowStyle Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITableRowStyle is the IronWord contract in C# for a Word table row's style; it extends IDerivedStyle and is implemented by TableRowStyle.`
- v2 (human): `Style a whole Word table row in C# through the IronWord ITableRowStyle contract: the row-level peer of the cell style, implemented by TableRowStyle.`
- v3 (balanced): `Reference for the IronWord ITableRowStyle interface in C#: the table-row style contract, extending IDerivedStyle, implemented by TableRowStyle.`

---

## Structured data

**TechArticle abstract**

> Styling a whole Word table row in C# runs through the IronWord ITableRowStyle contract, implemented by TableRowStyle. The interface declares no members of its own and composes its surface from the IDerivedStyle and IStyle contracts it extends. Create a TableRowStyle, set the inherited style values, and apply it to a row; the interface lets a row style be handled alongside the other style kinds under one type.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITableRowStyle live in the IronWord API?",
    "answer": "ITableRowStyle is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IDerivedStyle, IStyle, IWordDocumentObjectProperty, and IDocumentObjectProperty, and declares no members of its own."
  },
  {
    "question": "What implements ITableRowStyle in IronWord?",
    "answer": "TableRowStyle implements ITableRowStyle. Because the interface adds no members of its own, you set the style values it inherits from IDerivedStyle and IStyle on the concrete TableRowStyle and apply that to a table row."
  }
]
```
