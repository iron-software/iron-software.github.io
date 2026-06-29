<!--
N-Mid (4 members: GlowColor, GlowRadius, GetGlowRadius, SetGlowRadius). Frame C. IronWord.
Members verified 2026-06-23. Consumer TextEffect.GlowEffect verified on TextEffect page.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Glow.html
-->

## Injected overview (Markdown)

When text in a Word document needs a soft luminous halo around its outline, `Glow` describes that effect. You set its color and its spread, then attach the configured object to the `GlowEffect` property of a `TextEffect` so the run carries the glow when the document renders.

Two properties hold the settings. `GlowColor` takes a `Color` for the halo, and `GlowRadius` controls how far the glow spreads as a `double`. Because radius is unit-sensitive, read and write it through `GetGlowRadius` and `SetGlowRadius`, which both take a `MeasurementUnit` so a value is interpreted in points, centimeters, or inches rather than a raw number. Construct a `Glow`, set the color and radius, and assign it to `TextEffect.GlowEffect`; a wider radius and a lighter color produce a subtler halo, while a tight radius reads as a sharp edge.

```csharp
Glow glow = new Glow();
glow.GlowColor = Color.Blue;
glow.SetGlowRadius(5, MeasurementUnit.Point);
```

The [glow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-glow-effect/) walks through applying it, and the [glow effect example](https://ironsoftware.com/csharp/word/examples/add-text-effect-glow-effect/) shows a working run.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Glow Class - IronWord C# API Reference`
- v2 (human): `Glow: Add a Text Glow Effect in C#`
- v3 (balanced): `Glow Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure a Word text glow in C# with the IronWord Glow class: set GlowColor and GlowRadius, then assign it to TextEffect.GlowEffect.`
- v2 (human): `Give Word text a soft halo in C# with the IronWord Glow class: pick a color, set the radius in points, and attach it to a TextEffect.`
- v3 (balanced): `Reference for the IronWord Glow class in C#: set GlowColor and a unit-aware GlowRadius, then apply it through TextEffect.GlowEffect.`

---

## Structured data

**TechArticle abstract**

> Describing a glow halo on Word text in C# runs through the IronWord Glow class. GlowColor sets the halo color and GlowRadius its spread, read and written through GetGlowRadius and SetGlowRadius with a MeasurementUnit. Assign a configured Glow to the GlowEffect property of a TextEffect to apply it to a run.

**FAQPage entries**

```json
[
  {
    "question": "Where does Glow live in the IronWord API?",
    "answer": "Glow is a class in the IronWord.Models namespace, shipped in IronWord.dll, with base type Object. Assign a configured instance to the GlowEffect property of a TextEffect to apply it."
  },
  {
    "question": "How do you set the glow radius in C#?",
    "answer": "Call SetGlowRadius with a double and a MeasurementUnit so the value is read in points, centimeters, or inches. Use GetGlowRadius with the same unit to read it back, rather than reading the raw GlowRadius number."
  }
]
```
