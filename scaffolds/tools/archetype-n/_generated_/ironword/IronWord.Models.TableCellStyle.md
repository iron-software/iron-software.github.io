<!--
N-Full (class). Frame B. IronWord. Members verified 2026-06-23 against IronWord.Models.TableCellStyle.html. Base: Object. Implements ITableCellStyle, IDerivedStyle.
Members: BaseStyle, InheritedStyle, BottomMargin, LeftMargin, RightMargin, TopMargin, Width.
Cross-class verified: TableCell.Style returns TableCellStyle.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TableCellStyle.html
-->

## Injected overview (Markdown)

`TableCellStyle` is the styling record a developer assigns to a table cell to control its margins and width without touching the cell's content. One instance gathers the padding and sizing for a cell into a single object, so the same settings can be applied consistently across many cells. It is what the `Style` property of a `TableCell` holds.

The padding inside a cell is set through `TopMargin`, `BottomMargin`, `LeftMargin`, and `RightMargin`, which control the space between each cell border and its contents. `Width` sets the cell's width. These are the practical levers for spacing table content cleanly, and because they live on a separate style object, a developer can build one `TableCellStyle` and reuse it rather than repeating margin values on every cell.

`TableCellStyle` also participates in IronWord's derived-style model: `BaseStyle` points at a style this one builds on, and `InheritedStyle` exposes the effective settings after inheritance is resolved, so a cell style can extend a shared base while overriding only the margins it needs. Construct a `TableCellStyle`, set the margins and width you want, and assign it to a cell's `Style` property to apply the spacing. Consistent cell padding is what keeps a table from looking cramped, so applying the same style across a column or a whole table gives content room to breathe without setting margins cell by cell. When a table needs a couple of cells to differ, those cells take their own `TableCellStyle` while the rest share a common one, and the derived-style model resolves the result so each cell reports its effective spacing through `InheritedStyle`.

```csharp
using IronWord.Models;

TableCell cell = new Table(2, 2)[0, 0];
cell.Style = new TableCellStyle
{
    LeftMargin = 120,
    RightMargin = 120
};
```

The [add a table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers cell styling alongside table layout, the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) saves a populated grid to DOCX, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where cell styling fits the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableCellStyle Class - IronWord C# API`
- v2 (human): `TableCellStyle: Word Cell Padding in C#`
- v3 (balanced): `TableCellStyle Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style Word table cells in C# with the IronWord TableCellStyle class: set TopMargin, BottomMargin, LeftMargin, RightMargin, and Width, with BaseStyle inheritance.`
- v2 (human): `Control table cell padding and width with the IronWord TableCellStyle class in C#: set the four margins and width, reuse a base style, and apply it to a cell.`
- v3 (balanced): `Reference for the IronWord TableCellStyle class in C#: the cell margins and Width held on TableCell.Style, with BaseStyle and InheritedStyle inheritance.`

---

## Structured data

**TechArticle abstract**

> Styling a Word table cell's spacing in C# runs through the IronWord TableCellStyle class. It gathers the cell's padding into TopMargin, BottomMargin, LeftMargin, and RightMargin, plus Width, and is assigned to the Style property of a TableCell. BaseStyle lets a cell style build on a shared base, while InheritedStyle exposes the effective settings.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableCellStyle live in the IronWord API?",
    "answer": "TableCellStyle is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object, implements ITableCellStyle and IDerivedStyle, and is held on the Style property of a TableCell."
  },
  {
    "question": "How do you set table cell padding in C# with IronWord?",
    "answer": "Create a TableCellStyle, set TopMargin, BottomMargin, LeftMargin, and RightMargin to the padding you want, set Width if needed, then assign it to the Style property of a TableCell."
  },
  {
    "question": "What do BaseStyle and InheritedStyle do on TableCellStyle?",
    "answer": "BaseStyle points at a style this one builds on, so a cell style can extend a shared base. InheritedStyle exposes the effective settings after that inheritance is resolved."
  }
]
```
