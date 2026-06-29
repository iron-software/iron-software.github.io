<!--
N-Mid / interface (1 own member: InheritedStyle -> ITableStyle). Frame D. IronWord.
Single concrete implementor: TableCellStyle (verified). Obtained via TableCell.Style (returns TableCellStyle concrete).
Extends IDerivedStyle, IStyle, IWordDocumentObjectProperty, IDocumentObjectProperty.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ITableCellStyle.html
-->

## Injected overview (Markdown)

Describing the styling of a single table cell through a contract, rather than a concrete type, is what `ITableCellStyle` provides. It represents the style applied to one cell of a Word table, separate from the row and table styles that surround it, so cell-level formatting can be read or carried independently of the implementing class.

The concrete implementor in IronWord is `TableCellStyle`, which is what a `TableCell` exposes through its `Style` property. The contract's own member is `InheritedStyle`, a get-only property typed as `ITableStyle` that points to the table-level style a cell inherits its defaults from, so reading it shows where a cell's unset values come from. Because the interface member is read-only, you obtain the inherited style through it rather than reassigning it; to change a cell's formatting, set a `TableCellStyle` on the cell's `Style` property and adjust the concrete type.

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) builds a styled table, and the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) shows cell formatting in context.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITableCellStyle Interface - IronWord C# API`
- v2 (human): `ITableCellStyle: The Cell Style Contract in C#`
- v3 (balanced): `ITableCellStyle Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITableCellStyle is the IronWord contract in C# for one table cell's style; its InheritedStyle returns ITableStyle, implemented by TableCellStyle.`
- v2 (human): `Work with a Word table cell's style in C# through the IronWord ITableCellStyle contract: read its inherited table style, implemented by TableCellStyle.`
- v3 (balanced): `Reference for the IronWord ITableCellStyle interface in C#: the cell-style contract with an InheritedStyle property, implemented by TableCellStyle.`

---

## Structured data

**TechArticle abstract**

> Describing one Word table cell's style through a contract in C# runs through the IronWord ITableCellStyle interface, implemented by TableCellStyle. Its InheritedStyle property is a get-only ITableStyle pointing to the table-level style a cell inherits from. Obtain the concrete TableCellStyle from a TableCell's Style property, and adjust formatting through that type.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITableCellStyle live in the IronWord API?",
    "answer": "ITableCellStyle is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IDerivedStyle, IStyle, IWordDocumentObjectProperty, and IDocumentObjectProperty, and its InheritedStyle property returns an ITableStyle."
  },
  {
    "question": "What implements ITableCellStyle in IronWord?",
    "answer": "TableCellStyle implements ITableCellStyle. A TableCell exposes a TableCellStyle through its Style property, so you obtain and adjust cell formatting on the concrete TableCellStyle rather than the interface."
  }
]
```
