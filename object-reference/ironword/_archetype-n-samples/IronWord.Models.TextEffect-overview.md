<!--
N-Full (TextEffect, 6 properties). Frame A (subject-verb). IronWord.
Members verified 2026-06-23: Effect3D(Effect3D), GlowEffect(Glow), GradientEffect(Gradient), ReflectionEffect, ShadowEffect, TextOutlineEffect(TextOutlineEffect). Ctor ().
Cross-class verified: TextStyle.TextEffect is of type TextEffect.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TextEffect.html
-->

## Injected overview (Markdown)

`TextEffect` gathers the visual effects you can layer onto text, so glow, gradient fill, shadow, reflection, a 3-D bevel, and an outline all hang off one object instead of being scattered across the styling API. You build it up by assigning the individual effects you want, then attach the whole bundle to a run's style.

A `TextEffect` reaches text through `TextStyle`, which exposes a `TextEffect` property. Assign your configured effect there and every run carrying that style picks up the look. Because the effects live together on a single object, you can prepare one decorative treatment once and reuse it across headings or callouts without rebuilding each effect inline.

Each property maps to a dedicated effect type. `GlowEffect` takes a `Glow`, `GradientEffect` takes a `Gradient`, `Effect3D` takes an `Effect3D`, and `TextOutlineEffect` takes a `TextOutlineEffect`, while `ShadowEffect` and `ReflectionEffect` cover drop shadows and mirrored reflections beneath the text. Set only the effects a design calls for and leave the rest unassigned, since an unset property simply contributes nothing to the rendered look. The properties combine rather than replace one another, so a single heading can carry a gradient fill, a soft glow, and an outline at the same time without any of them canceling the others. Build each sub-effect first, configure its own settings, assign it to the matching property on the `TextEffect`, and then hand the whole bundle to a `TextStyle` so the run renders with the full treatment when the document is saved.

```csharp
using IronWord.Models;

var effect = new TextEffect();
effect.GlowEffect = new Glow();
effect.TextOutlineEffect = TextOutlineEffect.DefaultEffect;
```

The [glow effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-glow-effect/) adds a glow, the [gradient effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-gradient-effect/) fills text with a gradient, and the [text outline how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-text-outline-effect/) outlines characters.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextEffect Class - IronWord C# API Reference`
- v2 (human): `TextEffect: Glow, Gradient & Outline in C#`
- v3 (balanced): `TextEffect Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply visual text effects in C# Word docs with the IronWord TextEffect class: set GlowEffect, GradientEffect, ShadowEffect, Effect3D, and TextOutlineEffect.`
- v2 (human): `Layer glow, gradient, shadow, reflection, 3-D, and outline onto Word text in C# with the IronWord TextEffect class, then attach it to a TextStyle.`
- v3 (balanced): `Reference for the IronWord TextEffect class in C#: collect glow, gradient, shadow, reflection, 3-D, and outline effects and apply them through TextStyle.`

---

## Structured data

**TechArticle abstract**

> Layering visual effects onto Word text in C# goes through the IronWord TextEffect class. It collects glow, gradient, shadow, reflection, 3-D, and outline treatments as the GlowEffect, GradientEffect, ShadowEffect, ReflectionEffect, Effect3D, and TextOutlineEffect properties, each typed to its own effect class. Assign the effects a design needs, then attach the TextEffect to a TextStyle so every run with that style renders the treatment.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextEffect live in the IronWord API?",
    "answer": "TextEffect is a class in the IronWord.Models namespace, shipped in IronWord.dll, with Object as its base type. It is reached through the TextEffect property on TextStyle, which carries the bundle of effects onto a text run."
  },
  {
    "question": "How do you add a glow or gradient to text in C#?",
    "answer": "Create a TextEffect, assign a Glow to its GlowEffect property or a Gradient to GradientEffect, then attach the TextEffect to a TextStyle. Every run that uses the style renders with the configured effects."
  },
  {
    "question": "Can you combine several text effects at once?",
    "answer": "Yes. The GlowEffect, GradientEffect, ShadowEffect, ReflectionEffect, Effect3D, and TextOutlineEffect properties are independent, so a single TextEffect can carry a gradient fill, a glow, and an outline together, with unset effects simply left off."
  }
]
```
