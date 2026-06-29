<!--
N-Full (class). Frame C. IronWord. Members verified 2026-06-23 against IronWord.Models.TableStyle.html. Base: Object. Implements ITableStyle, IDerivedStyle.
Members: BaseStyle, Borders, BottomCellMargin, InheritedStyle, Justification, LeftCellMargin, RightCellMargin, TopCellMargin, Width.
S9 pair: IronWord.Models.Enums.TableStyle (enum) is a distinct type — disambiguated in FAQ.
Cross-class verified: Table.Style returns TableStyle; TableBorders.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TableStyle.html
-->

## Injected overview (Markdown)

When a table needs a default appearance applied across all of its rows and cells, `TableStyle` collects those settings into one object you assign to the table. It holds the table-wide borders, cell margins, alignment, and width, so a developer sets the look once instead of repeating values per cell. Note that it is the styling object in `IronWord.Models`, distinct from the `TableStyle` enumeration in `IronWord.Models.Enums`.

The defaults a table applies are set through this object's properties: `Borders` takes a `TableBorders` for the frame and grid lines, `BottomCellMargin`, `TopCellMargin`, `LeftCellMargin`, and `RightCellMargin` set the default padding inside every cell, `Justification` aligns the table on the page, and `Width` sets its overall width. Any of these can be overridden by the styling of an individual row or cell, so the table style is the baseline rather than the last word.

`TableStyle` also takes part in IronWord's derived-style model: `BaseStyle` points at a style this one extends, and `InheritedStyle` exposes the effective settings once inheritance is resolved, which lets several tables share a base style and override only what differs. Build a `TableStyle`, set its borders, margins, and alignment, and assign it to the `Style` property of a `Table` to apply the defaults across the whole grid. Setting the look on the table style rather than on each cell keeps a large grid consistent and easy to retune, since one change to the style flows to every cell that has not overridden it. This baseline-plus-override approach is what lets a reporting layout reuse the same table style while a few highlighted cells still carry their own shading.

```csharp
using IronWord.Models;

Table table = new Table(3, 3);
table.Style = new TableStyle
{
    Borders = new TableBorders(),
    Width = 9000
};
```

The [add a table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers table-wide styling, the [add table example](https://ironsoftware.com/csharp/word/examples/add-table/) saves a styled grid to DOCX, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where table styling fits the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableStyle Class - IronWord C# API Reference`
- v2 (human): `TableStyle: Word Table Styling in C#`
- v3 (balanced): `TableStyle Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style Word tables in C# with the IronWord TableStyle class: set Borders, the four cell margins, Justification, and Width, with BaseStyle inheritance.`
- v2 (human): `Apply table-wide styling with the IronWord TableStyle class in C#: set default borders, cell margins, alignment, and width, then assign it to a table.`
- v3 (balanced): `Reference for the IronWord TableStyle class in C#: the borders, cell margins, Justification, and Width held on Table.Style, with BaseStyle inheritance.`

---

## Structured data

**TechArticle abstract**

> Applying table-wide styling in C# runs through the IronWord TableStyle class in IronWord.Models. It holds the default Borders, the four cell margins, Justification, and Width for a table, and is assigned to the Style property of a Table. BaseStyle lets a table style extend a shared base, and individual rows or cells can override these defaults.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableStyle live in the IronWord API?",
    "answer": "The TableStyle class is in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object, implements ITableStyle and IDerivedStyle, and is held on the Style property of a Table."
  },
  {
    "question": "How do you apply a default style to a whole table in C#?",
    "answer": "Create a TableStyle, set Borders to a TableBorders, the cell margins, Justification, and Width, then assign it to the Style property of a Table. Individual rows and cells can override these defaults."
  },
  {
    "question": "What is the difference between the TableStyle class and the TableStyle enum?",
    "answer": "The TableStyle class in IronWord.Models is the styling object you assign to Table.Style. The TableStyle enumeration in IronWord.Models.Enums is a separate type listing named built-in style values, not the styling container."
  }
]
```
