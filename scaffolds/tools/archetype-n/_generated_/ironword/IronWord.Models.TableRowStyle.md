<!--
N-Mid (1 member). Frame E. IronWord. Members verified 2026-06-23 against IronWord.Models.TableRowStyle.html. Base: Object. Implements ITableRowStyle, IDerivedStyle.
Member: Height (Nullable<long>). NOTE: TableRow has no Style property in api dir, so no cross-class TableRow.Style claim made.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TableRowStyle.html
-->

## Injected overview (Markdown)

Row-level sizing for a Word table is captured by `TableRowStyle`, the styling record that holds the appearance settings for a table row separately from its cells. One instance describes a single row's style and exposes it through IronWord's derived-style contracts, so row styling can be defined and reused rather than set inline.

The setting it carries is `Height`, a nullable value that sets how tall the row renders, measured in twips by default; leaving it null lets the row size to its content. Build a `TableRowStyle`, set `Height` to the value you need, and apply it where a row style is accepted. Because the height is nullable, a developer expresses "no fixed height" simply by leaving it unset, which is the right choice when the row should grow to fit whatever content it holds. A fixed height is useful for header rows or for keeping a table's rows visually even.

```csharp
using IronWord.Models;

TableRowStyle rowStyle = new TableRowStyle
{
    Height = 600
};
```

The [add a table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers table and row styling, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where row styling fits the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableRowStyle Class - IronWord C# API`
- v2 (human): `TableRowStyle: Word Row Height in C#`
- v3 (balanced): `TableRowStyle Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style Word table rows in C# with the IronWord TableRowStyle class: set the nullable Height to fix a row's height, measured in twips by default.`
- v2 (human): `Control Word table row height with the IronWord TableRowStyle class in C#: set the nullable Height, or leave it unset to size the row to its content.`
- v3 (balanced): `Reference for the IronWord TableRowStyle class in C#: a row styling record carrying a nullable Height, exposed through the derived-style contracts.`

---

## Structured data

**TechArticle abstract**

> Setting the height of a Word table row in C# runs through the IronWord TableRowStyle class. It carries a single nullable Height, measured in twips by default, so a developer fixes a row's height by setting it or sizes the row to its content by leaving it null. The class participates in IronWord's derived-style contracts.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableRowStyle live in the IronWord API?",
    "answer": "TableRowStyle is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements ITableRowStyle and IDerivedStyle."
  },
  {
    "question": "How do you set the height of a table row style in IronWord?",
    "answer": "Create a TableRowStyle and set its nullable Height property to the height you want, measured in twips by default. Leaving Height null lets the row size to its content."
  }
]
```
