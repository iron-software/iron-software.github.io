<!--
N-Mid (4 members). Frame E (feature-fronted). IronWord.Models.
Members verified 2026-06-23: TopBorder, BottomBorder, LeftBorder, RightBorder (each BorderStyle).
Base Object. Sibling: BorderStyle (the per-edge style this container holds).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Borders.html
-->

## Injected overview (Markdown)

The four edges of a box in a Word document, top, bottom, left, and right, are grouped on `Borders`. It bundles a `BorderStyle` for each side, so a developer outlining a paragraph or a table cell sets all four borders through one object instead of tracking them separately. Reach for it whenever a rectangle needs an outline, whether that is a full frame or a single ruled line.

Assign a `BorderStyle` to `TopBorder`, `BottomBorder`, `LeftBorder`, or `RightBorder` to style that edge; leave a side unset to leave it without a border. Each side is independent, so the same container can carry a heavy top rule and lighter sides, or only one ruled edge. Configure each `BorderStyle` first (its color, size, spacing, and line pattern), then attach the `Borders` group to the element it frames.

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) applies borders to table cells, and the [add styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers paragraph-level formatting around them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Borders Class - IronWord C# API`
- v2 (human): `Borders: Outline a Box in Word with C#`
- v3 (balanced): `Borders Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set all four edges of a box in a Word document in C# with the IronWord Borders class: assign a BorderStyle to TopBorder, BottomBorder, Left, and Right.`
- v2 (human): `Outline a paragraph or table cell in a Word document in C# with the IronWord Borders class, one BorderStyle per side for top, bottom, left, and right.`
- v3 (balanced): `Reference for the IronWord Borders class in C#: the four-sided container holding a BorderStyle for the top, bottom, left, and right edges of a box.`

---

## Structured data

**TechArticle abstract**

> Outlining the four edges of a box in a Word document in C# runs through the IronWord Borders class. It holds a BorderStyle for each side through the TopBorder, BottomBorder, LeftBorder, and RightBorder properties, so all four edges are set from one object. Each side is independent, and an unset side has no border.

**FAQPage entries**

```json
[
  {
    "question": "Where does Borders live in the IronWord API?",
    "answer": "Borders is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and groups a BorderStyle for each of the top, bottom, left, and right edges of a box."
  },
  {
    "question": "How do you outline only one edge of a box in C#?",
    "answer": "Assign a configured BorderStyle to just the side you want, such as TopBorder, and leave the other three properties unset. Each edge on a Borders object is independent, so an unset side renders without a border."
  }
]
```
