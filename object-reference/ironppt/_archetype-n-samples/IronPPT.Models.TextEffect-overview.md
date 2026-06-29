<!--
N-Full (class : Object; 6 effect-object properties). Frame E (lead), Frame C (abstract). IronPPT.
Verified 2026-06-23: Effect3D (Effect3D), GlowEffect (Glow), GradientEffect (Gradient), ReflectionEffect (Reflection), ShadowEffect (Shadow), TextOutlineEffect (TextOutlineEffect).
Target: IronPPT.Models.TextEffect.html
-->

## Injected overview (Markdown)

Layered visual effects on slide text, glow, reflection, 3D, and the rest, are gathered on `TextEffect`. It is the single object that collects every decorative effect a run of text can wear, so a developer configures one effect bundle and applies it rather than wiring each effect separately.

A `TextEffect` is built and attached to the text being styled, and each effect is a property holding its own dedicated effect object. `GlowEffect` (a `Glow`) adds a colored halo, `ShadowEffect` (a `Shadow`) casts a drop shadow, and `ReflectionEffect` (a `Reflection`) mirrors the text below itself. `GradientEffect` (a `Gradient`) fills the text with a color blend, `Effect3D` (an `Effect3D`) gives it depth and bevel, and `TextOutlineEffect` (a `TextOutlineEffect`) strokes its edges. Each property is independent, so a developer sets only the effects a design needs and leaves the rest unset.

Configure the individual effect objects first, then assign them to the matching property on the `TextEffect`. Because the effects compose, a heading can carry a gradient fill, an outline, and a soft shadow at once from one bundle. The `Shadow` used by `ShadowEffect` and the `Gradient` used by `GradientEffect` are the same standalone types a developer configures elsewhere, so an effect built for one element drops straight into a `TextEffect`. Leave a property unset to skip that effect, and reuse the same `TextEffect` across several text runs to keep a consistent treatment across a deck without rebuilding each effect every time.

```csharp
var effect = new TextEffect();
effect.GlowEffect = glow;
effect.ShadowEffect = Shadow.OuterShadow1;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places the text these effects style, the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows colors and styling on slide elements, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles the surrounding text.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextEffect Class - IronPPT C# API Reference`
- v2 (human): `TextEffect: Glow, Shadow & 3D Text in C#`
- v3 (balanced): `TextEffect Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Bundle text effects in C# with the IronPPT TextEffect class: set GlowEffect, ShadowEffect, ReflectionEffect, GradientEffect, Effect3D, and outline.`
- v2 (human): `Add glow, shadow, reflection, and 3D to slide text in C# with the IronPPT TextEffect class: one bundle that collects every decorative effect.`
- v3 (balanced): `Reference for the IronPPT TextEffect class in C#: the effect bundle for slide text, with GlowEffect, ShadowEffect, GradientEffect, and Effect3D.`

---

## Structured data

**TechArticle abstract**

> TextEffect gathers the decorative effects a run of IronPPT slide text can wear in C#. GlowEffect adds a halo, ShadowEffect a drop shadow, ReflectionEffect a mirror, GradientEffect a color blend, Effect3D depth, and TextOutlineEffect an edge stroke. Each property is independent, so a design uses only the effects it needs.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextEffect live in the IronPPT API?",
    "answer": "TextEffect is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and collects the individual text-effect objects under one bundle."
  },
  {
    "question": "How do you add a glow or shadow to slide text in C#?",
    "answer": "Create the individual effect object, such as a Glow or a Shadow, then assign it to the matching property on a TextEffect (GlowEffect or ShadowEffect). Leave other effect properties unset to skip them."
  },
  {
    "question": "Can you combine several text effects at once?",
    "answer": "Yes. The effect properties are independent, so a TextEffect can hold a GradientEffect, a TextOutlineEffect, and a ShadowEffect together. Configure each effect object and assign it to its property on the same bundle."
  }
]
```
