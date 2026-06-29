<!--
N-Full class. Frame D (task-gerund). IronPPT. Base Object.
Members verified 2026-06-23 against IronPPT.Models.TextOutlineEffect.html:
ctor, DefaultEffect (static), Color, CompoundLineType, LineCapType, LineJoin,
LineWidth, PenAlignment, presetLineDash (lowercase p preserved), GetLineWidth, SetLineWidth.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.TextOutlineEffect.html
-->

## Injected overview (Markdown)

Outlining the glyphs of a run of text in a slide runs through `TextOutlineEffect`. The object describes the stroke drawn around each character, so a heading or callout can carry a colored, weighted border rather than a flat fill. Use it whenever a title needs more visual weight than a plain font color delivers, and pull `TextOutlineEffect.DefaultEffect` for a sensible starting stroke instead of setting every field by hand.

The effect attaches to the text styling of a run and is read when the slide renders, so a developer builds the stroke once and assigns it where the run's outline is expected. A fresh instance comes from `new TextOutlineEffect()`, and the static `DefaultEffect` returns a preconfigured stroke that you can adjust from there.

`Color` sets the stroke color and `LineWidth` its thickness, with `GetLineWidth` and `SetLineWidth` reading and writing that width in a chosen `Units` so a value can be expressed in points or another measure. `CompoundLineType`, `LineCapType`, `LineJoin`, and `PenAlignment` shape how the stroke is drawn, joined, and positioned relative to the glyph edge, taking `CompoundLineValues`, `LineCapValues`, `StrokeJoinStyleValues`, and `PenAlignmentValues` respectively. The `presetLineDash` property selects a dash pattern from `PresetLineDashValues` for a dotted or dashed outline. Keep widths modest so the outline frames the text rather than swallowing it, and prefer the unit-aware `SetLineWidth` over assigning `LineWidth` raw when the rest of the document works in points.

```csharp
var outline = TextOutlineEffect.DefaultEffect;
outline.Color = Color.Black;
outline.SetLineWidth(1.5, Units.Point);
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) walks through placing and styling text on a slide, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows run-level formatting in context, and the [TextStyle reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.TextStyle.html) covers the wider text styling surface this outline sits within.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextOutlineEffect Class - IronPPT C# API`
- v2 (human): `TextOutlineEffect: Outline Slide Text in C#`
- v3 (balanced): `TextOutlineEffect Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Outline slide text in C# with the IronPPT TextOutlineEffect class: set Color, LineWidth, dash, cap, and join, or start from DefaultEffect.`
- v2 (human): `Draw a stroke around slide text in C# with the IronPPT TextOutlineEffect class: control color, width, dash pattern, line cap, and join.`
- v3 (balanced): `Reference for the IronPPT TextOutlineEffect class in C#: configure a text outline stroke with Color, LineWidth, dash, cap, and join.`

---

## Structured data

**TechArticle abstract**

> The IronPPT TextOutlineEffect class describes the stroke drawn around glyphs of a text run in a slide in C#. Color sets the stroke color and LineWidth its thickness, with GetLineWidth and SetLineWidth working in a chosen Units. CompoundLineType, LineCapType, LineJoin, PenAlignment, and presetLineDash shape how the stroke is drawn. Start from the static DefaultEffect and adjust.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextOutlineEffect live in the IronPPT API?",
    "answer": "TextOutlineEffect is a class in the IronPPT.Models namespace, shipped in IronPPT.dll, deriving from Object. It describes the stroke drawn around the glyphs of a styled text run."
  },
  {
    "question": "How do you set the outline width on slide text in C#?",
    "answer": "Build a TextOutlineEffect, then call SetLineWidth with a value and a Units, or assign the LineWidth property directly. Read the current width back with GetLineWidth in the units you want. Start from TextOutlineEffect.DefaultEffect to avoid setting every field."
  },
  {
    "question": "What controls the look of a text outline stroke?",
    "answer": "Color sets the stroke color and presetLineDash picks a dash pattern from PresetLineDashValues. CompoundLineType, LineCapType, LineJoin, and PenAlignment determine how the stroke is compounded, capped, joined, and aligned to the glyph edge."
  }
]
```
