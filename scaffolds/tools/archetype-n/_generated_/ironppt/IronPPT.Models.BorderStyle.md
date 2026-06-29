<!--
N-Mid (4 props). Frame E. IronPPT. BorderColor/BorderSize/BorderSpace/BorderValue verified 2026-06-23.
Borders aggregates four BorderStyle objects (cross-ref verified on Borders page).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.BorderStyle.html
-->

## Injected overview (Markdown)

The look of one edge of a border, its color, thickness, spacing, and line style, lives on `BorderStyle` in IronPPT. You configure a `BorderStyle` to describe how a single side is drawn, then assign it to one of the four edges a `Borders` object exposes.

Four properties define the edge. `BorderColor` sets the line color as a `Color`, `BorderSize` sets the thickness, `BorderSpace` sets the gap between the border and the content, and `BorderValue` selects the line style from the `BorderValues` enumeration (solid, dashed, and similar). Build one with `new BorderStyle()`, set the properties you need, and hand it to the `TopBorder`, `BottomBorder`, `LeftBorder`, or `RightBorder` property of a `Borders` instance. Leaving a property unset keeps that aspect at its default, so a simple solid line needs only a color and a size.

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles content blocks, and the [add shape how-to is covered in the add-slide workflow](https://ironsoftware.com/csharp/ppt/how-to/add-slide/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BorderStyle Class - IronPPT C# API Reference`
- v2 (human): `BorderStyle: Style One Border Edge in C#`
- v3 (balanced): `BorderStyle Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `BorderStyle defines one border edge in IronPPT for C#: set BorderColor, BorderSize, BorderSpace, and BorderValue, then assign it to a Borders edge.`
- v2 (human): `Style a single border edge in C# with IronPPT's BorderStyle: choose color, thickness, spacing, and line style, then attach it to a Borders side.`
- v3 (balanced): `Reference for the IronPPT BorderStyle class in C#: the per-edge color, size, spacing, and line-style settings used by a Borders object.`

---

## Structured data

**TechArticle abstract**

> Defining how one border edge is drawn in IronPPT for C# runs through BorderStyle. BorderColor sets the line color, BorderSize the thickness, BorderSpace the gap to the content, and BorderValue the line style from the BorderValues enumeration. Assign a configured BorderStyle to a Borders object's TopBorder, BottomBorder, LeftBorder, or RightBorder.

**FAQPage entries**

```json
[
  {
    "question": "Where does BorderStyle live in the IronPPT API?",
    "answer": "BorderStyle is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from System.Object and is assigned to the four edge properties of a Borders object."
  },
  {
    "question": "How do you style a border edge in C# with IronPPT?",
    "answer": "Create a BorderStyle, set BorderColor, BorderSize, BorderSpace, and BorderValue, then assign it to the TopBorder, BottomBorder, LeftBorder, or RightBorder property of a Borders instance."
  }
]
```
