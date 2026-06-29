<!--
N-Full (TextOutlineEffect, ~8 props + 2 methods, static DefaultEffect). Frame E (feature-fronted). IronWord.
Members verified 2026-06-23: DefaultEffect(static), Color, CompoundLineType(CompoundLineValues), LineCapType, LineJoin, LineWidth, PenAlignment(PenAlignmentValues), presetLineDash; GetLineWidth(MeasurementUnit), SetLineWidth(Double, MeasurementUnit). Ctor ().
Cross-class verified: TextEffect.TextOutlineEffect is of type TextOutlineEffect.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TextOutlineEffect.html
-->

## Injected overview (Markdown)

An outlined character, where the stroke around each letter is colored and weighted independently of the fill, comes from `TextOutlineEffect`. You configure the outline's color, thickness, dash pattern, and corner treatment, then apply it so headings and display text read as drawn shapes rather than flat type.

The effect attaches to text through `TextEffect`, which exposes a `TextOutlineEffect` property. Assign a configured instance there and the style that owns the `TextEffect` carries the outline onto every run it formats. A static `DefaultEffect` returns a ready-made outline, so you can start from a sensible baseline and adjust only the parts you care about.

Set the stroke color with `Color` and its thickness with `LineWidth`, or use `SetLineWidth` to supply the width in a chosen `MeasurementUnit` and `GetLineWidth` to read it back in the same units, which keeps the measurement explicit when a design specifies points or millimeters. The line's shape is controlled by `CompoundLineType` (a `CompoundLineValues` for single or doubled strokes), `LineCapType` and `LineJoin` for how the ends and corners are drawn, `PenAlignment` (a `PenAlignmentValues`) for how the stroke sits on the glyph edge, and `presetLineDash` for a dashed pattern instead of a solid rule. Configure the values a design needs, leave the rest at their defaults from `DefaultEffect`, and assign the result to a `TextEffect` before saving so the outline renders on screen and in the exported document.

```csharp
using IronWord.Models;

var outline = TextOutlineEffect.DefaultEffect;
outline.SetLineWidth(1.5, MeasurementUnit.Point);
```

The [text outline how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-text-outline-effect/) outlines characters, the [text outline example](https://ironsoftware.com/csharp/word/examples/add-text-effect-text-outline-effect/) shows a worked outline in code, and the [style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers the surrounding text formatting.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextOutlineEffect - IronWord C# API Reference`
- v2 (human): `TextOutlineEffect: Outline Text in C# Word`
- v3 (balanced): `TextOutlineEffect | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Outline text in C# Word docs with the IronWord TextOutlineEffect class: set Color, LineWidth, CompoundLineType, PenAlignment, and a preset line dash.`
- v2 (human): `Draw a colored stroke around characters in C# with the IronWord TextOutlineEffect class: control width, color, dash, caps, and joins, then apply it.`
- v3 (balanced): `Reference for the IronWord TextOutlineEffect class in C#: configure outline color, width, dash, and corners, then apply through TextEffect and TextStyle.`

---

## Structured data

**TechArticle abstract**

> Outlining characters in a C# Word document goes through the IronWord TextOutlineEffect class. Color and LineWidth set the stroke, SetLineWidth and GetLineWidth work in a chosen MeasurementUnit, and CompoundLineType, LineCapType, LineJoin, PenAlignment, and presetLineDash shape how the line is drawn. A static DefaultEffect supplies a baseline. Assign the result to a TextEffect to render the outline.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextOutlineEffect live in the IronWord API?",
    "answer": "TextOutlineEffect is a class in the IronWord.Models namespace, shipped in IronWord.dll, with Object as its base type. It is assigned to the TextOutlineEffect property on a TextEffect, which carries the outline onto a styled text run."
  },
  {
    "question": "How do you outline text in a C# Word document?",
    "answer": "Start from TextOutlineEffect.DefaultEffect, set the stroke Color and width through LineWidth or SetLineWidth, then assign the effect to a TextEffect and apply that through a TextStyle. The outline renders around each character."
  },
  {
    "question": "How do you set the outline thickness in specific units?",
    "answer": "Call SetLineWidth with a value and a MeasurementUnit to specify the stroke width, and GetLineWidth to read it back in the same units. The plain LineWidth property holds the raw value when units are not a concern."
  }
]
```
