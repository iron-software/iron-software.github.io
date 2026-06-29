<!--
N-Mid (4 props, each BorderStyle). Frame B. IronPPT. Top/Bottom/Left/RightBorder verified 2026-06-23.
BorderStyle cross-ref verified on its page.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Borders.html
-->

## Injected overview (Markdown)

`Borders` is the container that groups the four edges around a content block in IronPPT, so a single object describes the complete frame rather than four scattered settings. You hold one when you want a table cell, paragraph, or shape to carry an outline, and you set each side independently.

Four properties make up the frame: `TopBorder`, `BottomBorder`, `LeftBorder`, and `RightBorder`, each a `BorderStyle`. A `BorderStyle` in turn carries that edge's `BorderColor`, `BorderSize`, `BorderSpace`, and `BorderValue` line style, so you control every side separately or repeat one configuration across all four for a uniform box. Create the object with `new Borders()`, assign a configured `BorderStyle` to each side you want drawn, and leave the others unset to skip them. A common pattern is to build one `BorderStyle` and assign the same settings to every edge for a plain rectangular outline.

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles a block, and the [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) builds the slide content the frame sits on.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Borders Class - IronPPT C# API Reference`
- v2 (human): `Borders: Frame a Block on Four Sides in C#`
- v3 (balanced): `Borders Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Borders groups four edges in IronPPT for C#: TopBorder, BottomBorder, LeftBorder, and RightBorder, each a BorderStyle, frame a content block.`
- v2 (human): `Frame a block on all four sides in C# with IronPPT's Borders: set the Top, Bottom, Left, and Right BorderStyle edges independently or uniformly.`
- v3 (balanced): `Reference for the IronPPT Borders class in C#: the four-edge container exposing TopBorder, BottomBorder, LeftBorder, and RightBorder.`

---

## Structured data

**TechArticle abstract**

> Framing a content block on all four sides in IronPPT for C# runs through Borders. It exposes TopBorder, BottomBorder, LeftBorder, and RightBorder, each a BorderStyle that defines that edge's color, size, spacing, and line style. Set each side independently, or repeat one BorderStyle across all four for a uniform outline.

**FAQPage entries**

```json
[
  {
    "question": "Where does Borders live in the IronPPT API?",
    "answer": "Borders is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from System.Object and exposes four BorderStyle edge properties."
  },
  {
    "question": "How do you add a border on all four sides in C# with IronPPT?",
    "answer": "Create a Borders object and assign a configured BorderStyle to its TopBorder, BottomBorder, LeftBorder, and RightBorder properties. Reuse one BorderStyle across all four for a uniform frame."
  }
]
```
