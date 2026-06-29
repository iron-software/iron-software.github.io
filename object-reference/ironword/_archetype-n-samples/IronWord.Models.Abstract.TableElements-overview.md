<!--
N-Mid (abstract table-group base). Frame C. IronWord. Verified 2026-06-23.
Members verified: BackgroundColor, Borders, SetBorders(TableBorders). Extends ParentElement. Garbage interface 'lyduza' in syntax NOT named. No documented derived types. Sibling of TableElement -> different opener frame. Target: IronWord.Models.Abstract.TableElements.html
-->

## Injected overview (Markdown)

When a grouped table structure in a Word document needs shared fill and border handling in C#, `TableElements` provides it. It is an abstract base for table-structure nodes that carry an appearance and a set of borders, sitting alongside the single-node `TableElement` base in the model. A developer encounters it as the base of a concrete table node rather than building it directly.

`BackgroundColor` holds the element's fill as a `Color`, and `Borders` carries a `TableBorders` value describing the surrounding lines. `SetBorders` applies a `TableBorders` to the element in one call, which is the convenient way to push a prepared border set onto the structure. Because the type is abstract and inherits its child-management surface from `ParentElement`, you set appearance here and reach to the inherited members for the contained content.

```csharp
using IronWord.Models;

TableBorders borders = new TableBorders();
```

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) builds and styles tables, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the table structure in the model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableElements Class - IronWord C# API`
- v2 (human): `TableElements: Word Table Group Styling in C#`
- v3 (balanced): `TableElements Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `TableElements is an IronWord base for grouped Word table nodes in C#: it carries BackgroundColor and Borders, with SetBorders to apply a TableBorders.`
- v2 (human): `Style a grouped Word table structure in C# with IronWord's TableElements base: set its BackgroundColor, read its Borders, or apply borders in one call.`
- v3 (balanced): `Reference for the IronWord TableElements class in C#: the abstract table-group base with BackgroundColor, Borders, and a SetBorders method.`

---

## Structured data

**TechArticle abstract**

> Giving a grouped Word table structure shared fill and border handling in C# is the role of the IronWord TableElements base class. It carries BackgroundColor as a Color and Borders as a TableBorders, and its SetBorders method applies a prepared border set in one call. The type is abstract and inherits its child-management surface from ParentElement.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableElements live in the IronWord API?",
    "answer": "TableElements is an abstract class in the IronWord.Models.Abstract namespace, shipped in IronWord.dll. It derives from ParentElement, so it combines child management with table appearance members."
  },
  {
    "question": "How do you apply borders to a table structure in C#?",
    "answer": "Set the Borders property to a TableBorders value, or call SetBorders with a prepared TableBorders to apply it in one call. Set BackgroundColor to a Color for the fill behind the structure."
  }
]
```
