<!--
N-Mid (4 members). Frame A (subject-verb). IronWord.Models.
Members verified 2026-06-23: BorderColor (Color), BorderSize (uint), BorderSpace (uint),
BorderValue (BorderValues). Base Object. Sibling: Borders (four-side container holding BorderStyle).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.BorderStyle.html
-->

## Injected overview (Markdown)

`BorderStyle` defines the appearance of a single border line in a Word document. It captures the color, thickness, spacing, and line pattern for one edge, so a developer drawing a box around a paragraph or styling a table cell describes how that line looks with this type. One `BorderStyle` covers a single side; the `Borders` container holds four of them to style a whole rectangle.

Set `BorderColor` with a `Color` to tint the line, `BorderSize` (a `uint`) for its thickness, and `BorderSpace` (a `uint`) for the gap between the border and the content it surrounds. `BorderValue` chooses the line pattern from the `BorderValues` enumeration, picking a solid, dashed, or other style. Assign a configured `BorderStyle` to one of the `Borders` sides (`TopBorder`, `LeftBorder`, and so on) to apply it. Because the sizes are unsigned, only non-negative values are valid.

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) shows borders applied to table structure, and the [add styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers the surrounding paragraph formatting.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BorderStyle Class - IronWord C# API`
- v2 (human): `BorderStyle: Style a Border Line in C#`
- v3 (balanced): `BorderStyle Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style one border line in a Word document in C# with the IronWord BorderStyle class: set BorderColor, BorderSize, BorderSpace, and BorderValue.`
- v2 (human): `Set the color, thickness, and pattern of a single border in a Word document in C# with the IronWord BorderStyle class for paragraphs and table cells.`
- v3 (balanced): `Reference for the IronWord BorderStyle class in C#: define one border edge with BorderColor, BorderSize, BorderSpace, and a BorderValue pattern.`

---

## Structured data

**TechArticle abstract**

> Styling a single border line in a Word document in C# runs through the IronWord BorderStyle class. BorderColor sets the line color, BorderSize sets its thickness, BorderSpace sets the gap to the content, and BorderValue picks the line pattern from the BorderValues enumeration. Assign a BorderStyle to a side of the Borders container to apply it to an edge.

**FAQPage entries**

```json
[
  {
    "question": "Where does BorderStyle live in the IronWord API?",
    "answer": "BorderStyle is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and describes one border line's color, size, spacing, and pattern."
  },
  {
    "question": "What is the difference between BorderStyle and Borders in IronWord?",
    "answer": "BorderStyle describes the look of one border edge, while Borders is the container that holds four BorderStyle objects, one each for the top, bottom, left, and right sides of a rectangle."
  }
]
```
