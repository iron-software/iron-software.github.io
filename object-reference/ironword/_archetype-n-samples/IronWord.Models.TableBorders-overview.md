<!--
N-Full (class). Frame C. IronWord. Members verified 2026-06-23 against IronWord.Models.TableBorders.html. Base: Object.
Members: TopBorder, BottomBorder, LeftBorder, RightBorder, InsideHorizontalBorder, InsideVerticalBorder (all BorderStyle).
Cross-class verified: Table.Borders, TableStyle.Borders; BorderStyle.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TableBorders.html
-->

## Injected overview (Markdown)

When a table needs lines drawn around and between its cells, `TableBorders` collects the six edges that define them. It groups the outer frame and the inner grid lines into one object you assign to a table, so you set every border in a single place instead of per cell. Reach for it whenever a Word table needs anything beyond the default look.

Each side is its own `BorderStyle`: `TopBorder`, `BottomBorder`, `LeftBorder`, and `RightBorder` draw the outer frame, while `InsideHorizontalBorder` and `InsideVerticalBorder` draw the grid lines that separate rows and columns inside the table. A `BorderStyle` carries the color, line pattern, and thickness, so assigning the same instance to several edges keeps them visually matched, and assigning different ones lets the frame differ from the interior.

Build a `TableBorders`, set the edges you care about, and assign it to the `Borders` property of a `Table` or a `TableStyle`. Edges you leave unset fall back to the table's defaults, so a header rule or a single outer frame needs only the relevant properties populated. Because the same object holds all six sides, a developer can define one border scheme and reuse it across tables for a consistent document. A common scheme gives the outer frame a heavier line and the inside grid a lighter one, which separates the table from the page while keeping the cells legible. Sharing a single `BorderStyle` instance between matching edges is the simplest way to guarantee those edges stay identical as the design changes.

```csharp
using IronWord.Models;

Table table = new Table(4, 4);
table.Borders = new TableBorders
{
    TopBorder = new BorderStyle(),
    BottomBorder = new BorderStyle()
};
```

The [add a table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) shows borders applied to a styled table, the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) saves a bordered grid to DOCX, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) covers how tables and their styling fit the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableBorders Class - IronWord C# API`
- v2 (human): `TableBorders: Word Table Lines in C#`
- v3 (balanced): `TableBorders Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Word table borders in C# with the IronWord TableBorders class: assign a BorderStyle to each outer edge and to the inside horizontal and vertical grid lines.`
- v2 (human): `Draw lines around and inside Word tables with the IronWord TableBorders class in C#: set the four outer edges and the inner grid lines in one object.`
- v3 (balanced): `Reference for the IronWord TableBorders class in C#: six BorderStyle edges for a table, the outer frame plus the inside horizontal and vertical lines.`

---

## Structured data

**TechArticle abstract**

> Drawing lines around and inside a Word table in C# runs through the IronWord TableBorders class. It collects six edges, each a BorderStyle: TopBorder, BottomBorder, LeftBorder, and RightBorder for the outer frame, plus InsideHorizontalBorder and InsideVerticalBorder for the inner grid. Assign a TableBorders to the Borders property of a Table or TableStyle.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableBorders live in the IronWord API?",
    "answer": "TableBorders is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and is assigned to the Borders property of a Table or a TableStyle."
  },
  {
    "question": "How do you add borders to a table in C# with IronWord?",
    "answer": "Create a TableBorders, set each edge to a BorderStyle (TopBorder, BottomBorder, LeftBorder, RightBorder, and the InsideHorizontalBorder and InsideVerticalBorder grid lines), then assign it to the Borders property of your Table."
  },
  {
    "question": "What is the difference between the outer and inside borders?",
    "answer": "TopBorder, BottomBorder, LeftBorder, and RightBorder draw the outer frame of the table, while InsideHorizontalBorder and InsideVerticalBorder draw the lines that separate rows and columns within it."
  }
]
```
