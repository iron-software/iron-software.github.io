<!--
N-Mid (abstract table base). Frame D. IronWord. Verified 2026-06-23.
Members verified: BackgroundColor, Borders, ExtractImages(), ExtractShapes(). Extends ParentElement. Derived: Table, TableCell, TableRow. Target: IronWord.Models.Abstract.TableElement.html
-->

## Injected overview (Markdown)

Sharing fill, border, and content-extraction behavior across the parts of a Word table in C# is the role of `TableElement`. It is the base the table-structure nodes descend from, so a table, its rows, and its cells all expose the same appearance and extraction members. A developer meets it through one of those concrete nodes rather than on its own.

The types that extend it are `Table`, `TableCell`, and `TableRow`, obtained when you build a table or read one from a document. `BackgroundColor` sets the fill behind the element as a `Color`, and `Borders` carries a `TableBorders` describing the lines around it, so styling a whole table or a single cell uses the same two properties. `ExtractImages` and `ExtractShapes` return the `ImageContent` and `ShapeContent` nodes nested inside the element, which is how you pull embedded graphics out of a table region. Because the type is abstract, it is never constructed directly.

```csharp
using IronWord.Models;

TableCell cell = new TableCell();
cell.BackgroundColor = Color.LightGray;
```

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) builds and styles tables, and the [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) pulls graphics out of a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableElement Class - IronWord C# API`
- v2 (human): `TableElement: The Word Table Node Base in C#`
- v3 (balanced): `TableElement Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `TableElement is the IronWord base for Word table nodes in C#: Table, TableRow, and TableCell share BackgroundColor, Borders, ExtractImages, ExtractShapes.`
- v2 (human): `Style and read Word table parts in C# with IronWord's TableElement base: set BackgroundColor and Borders, and extract images or shapes from a region.`
- v3 (balanced): `Reference for the IronWord TableElement class in C#: the abstract base behind Table, TableRow, and TableCell, with fill, border, and extraction members.`

---

## Structured data

**TechArticle abstract**

> Sharing fill, border, and content-extraction behavior across the parts of a Word table in C# is the role of the IronWord TableElement base class. Table, TableRow, and TableCell extend it. It exposes BackgroundColor for fill, Borders as a TableBorders, and the ExtractImages and ExtractShapes members that return the ImageContent and ShapeContent nodes nested inside the element.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableElement live in the IronWord API?",
    "answer": "TableElement is an abstract class in the IronWord.Models.Abstract namespace, shipped in IronWord.dll. It derives from ParentElement and is the base for the Table, TableRow, and TableCell nodes."
  },
  {
    "question": "How do you set a table cell's background and borders in C#?",
    "answer": "Set BackgroundColor to a Color for the fill and Borders to a TableBorders for the lines; both are inherited from TableElement, so they work the same on a Table, a TableRow, and a TableCell. Use ExtractImages and ExtractShapes to read graphics nested in the element."
  }
]
```
