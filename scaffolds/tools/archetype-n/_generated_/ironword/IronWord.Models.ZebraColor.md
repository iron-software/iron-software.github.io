<!--
N-Mid (ZebraColor, 2 props, 2 ctors). Frame B (identity-by-role). IronWord.
Members verified 2026-06-23: Color1(Color), Color2(Color). Ctors (Color, Color) and (string, string). No parameterless ctor.
Cross-class verified: Table.Zebra is of type ZebraColor (public ZebraColor Zebra { get; set; }).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ZebraColor.html
-->

## Injected overview (Markdown)

`ZebraColor` is the alternating-row color pair you set on a table so its rows band between two shades, the banded look that makes a long table easier to read. It holds the two colors that take turns down the rows, giving a table its striped appearance without coloring each row by hand.

A `ZebraColor` reaches a table through `Table`, whose `Zebra` property is a `ZebraColor`. Assign a configured pair there and the table renders its rows in alternating colors when the document is saved. Construct one by passing the two colors to the constructor, either as `Color` values or as string color specifications, since there is no parameterless constructor: a `ZebraColor` always carries both colors from the start. The two shades are held by `Color1` and `Color2`, the colors applied to alternating rows, and you can read or replace either after construction to retune the banding. Pick two shades with enough contrast to separate the rows but close enough to stay subtle, then assign the pair to a table's `Zebra` property so the striping applies across every row.

```csharp
using IronWord.Models;

var zebra = new ZebraColor(Color.White, Color.LightGray);
```

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers building tables, and the [table example](https://ironsoftware.com/csharp/word/examples/add-table/) shows a worked table in code.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ZebraColor Class - IronWord C# API Reference`
- v2 (human): `ZebraColor: Striped Table Rows in C# Word`
- v3 (balanced): `ZebraColor Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Band table rows in C# Word docs with the IronWord ZebraColor class: pass two colors to the constructor and set them on a Table's Zebra property.`
- v2 (human): `Add alternating row colors to Word tables in C# with the IronWord ZebraColor class: hold two shades in Color1 and Color2 and apply them to a table.`
- v3 (balanced): `Reference for the IronWord ZebraColor class in C#: define an alternating-row color pair with Color1 and Color2 and apply it through Table.Zebra.`

---

## Structured data

**TechArticle abstract**

> Banding table rows in a C# Word document goes through the IronWord ZebraColor class. It holds the two alternating row shades in Color1 and Color2, constructed from a pair of Color values or string color specifications, with no parameterless constructor. Assign a ZebraColor to a Table's Zebra property and the table renders its rows in alternating colors when the document is saved.

**FAQPage entries**

```json
[
  {
    "question": "Where does ZebraColor live in the IronWord API?",
    "answer": "ZebraColor is a class in the IronWord.Models namespace, shipped in IronWord.dll, with Object as its base type. It is assigned to the Zebra property on a Table to band the table's rows in two alternating colors."
  }
]
```
