<!--
N-Mid / interface (1 prop, Style -> IStyle). Frame B. IronXL. Triage optional (<=2 members).
Implementors NOT documented in api/ (Cell/Range declare : Object only, no IStylable in declaration), so contract-only framing.
Cell.Style and Range.Style return IStyle (verified 2026-06-23) and are the practical access points for the styling surface IStylable describes.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Styles.IStylable.html
-->

## Injected overview (Markdown)

`IStylable` is the contract for anything in IronXL that carries a style. It declares a single `Style` property returning an `IStyle`, marking a type as something whose appearance, font, borders, fill, and alignment, can be read and set. It is the abstraction behind the styling surface a developer uses on cells and ranges.

The contract is reached through its one member rather than directly: the spreadsheet objects a developer works with expose a `Style` property of type `IStyle`, which is the shape `IStylable` defines. In practice that means reading `Cell.Style` or `Range.Style` to get the `IStyle` and assigning to its members. Because `Style` is get-only, styling is done by reading the property and setting the font, borders, and fill on the returned object rather than replacing the style wholesale.

```csharp
using IronXL;
using IronXL.Styles;

WorkSheet sheet = WorkBook.Load("report.xlsx").DefaultWorkSheet;
IStyle style = sheet["A1"].Style;
style.Font.Bold = true;
```

The [style cells, borders, and fonts example](https://ironsoftware.com/csharp/excel/examples/excel-style-cells-borders-fonts/) demonstrates the styling surface, and the [border and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) covers borders and layout through it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IStylable Interface - IronXL C# API Reference`
- v2 (human): `IStylable: The Styleable Contract in C#`
- v3 (balanced): `IStylable Interface | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IStylable is the IronXL C# contract for a styled object: it declares a Style property returning IStyle for fonts, borders, fill, and alignment.`
- v2 (human): `Mark a type as styleable in C# with the IronXL IStylable contract: its Style property returns the IStyle that controls fonts, borders, and fill.`
- v3 (balanced): `Reference for the IronXL IStylable interface in C#: the contract whose Style property returns IStyle, the styling surface used on cells and ranges.`

---

## Structured data

**TechArticle abstract**

> IStylable is IronXL's contract for a styled object in C#. It declares a single Style property that returns an IStyle, the surface for a type's font, borders, fill, and alignment. In practice the styling members are reached by reading Cell.Style or Range.Style, both of which return IStyle, then assigning to that object rather than replacing the get-only Style property.

**FAQPage entries**

```json
[
  {
    "question": "Where does IStylable live in the IronXL API?",
    "answer": "IStylable is an interface in the IronXL.Styles namespace, shipped in IronXL.dll. It declares one member, a Style property of type IStyle, marking a type as something that carries a style."
  },
  {
    "question": "What does IStylable do in IronXL?",
    "answer": "IStylable defines a Style property returning IStyle, the contract for a styleable object. In day-to-day code the styling surface is reached through Cell.Style and Range.Style, which return the IStyle that IStylable describes."
  }
]
```
