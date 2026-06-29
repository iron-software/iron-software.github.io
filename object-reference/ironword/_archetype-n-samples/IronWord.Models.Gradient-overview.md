<!--
N-Mid (5 members: DefaultGray static, LinearShadeAngle, LinearShadeScaled, StopPoints). Frame E. IronWord.
Members verified 2026-06-23. Consumer TextEffect.GradientEffect + StopPoints->List<GradientStop> verified.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Gradient.html
-->

## Injected overview (Markdown)

A multi-color fill that blends along an angle, applied to Word text, is configured through `Gradient`. You build one from its color stops and a direction, then attach it to the `GradientEffect` property of a `TextEffect` so the run renders with the blend.

The stops live in `StopPoints`, a `List<GradientStop>` where each entry pairs a color with the position along the gradient where that color lands. `LinearShadeAngle` sets the direction of the blend as a nullable `double`, and `LinearShadeScaled` is a nullable `bool` that controls whether the shade scales with the shape. For a quick starting point, the static `DefaultGray` returns a ready-made gray gradient you can apply directly or use as a template before swapping in your own stops. Order the entries in `StopPoints` by their stop positions so the colors blend in the intended sequence.

```csharp
Gradient gradient = Gradient.DefaultGray;
gradient.LinearShadeAngle = 45;
```

The [gradient text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-gradient-effect/) covers configuring the blend, and the [gradient effect example](https://ironsoftware.com/csharp/word/examples/add-text-effect-gradient-effect/) shows it on a run.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Gradient Class - IronWord C# API Reference`
- v2 (human): `Gradient: Blend Text Colors in C#`
- v3 (balanced): `Gradient Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure a Word text gradient in C# with the IronWord Gradient class: set StopPoints, LinearShadeAngle, and apply it via TextEffect.GradientEffect.`
- v2 (human): `Blend colors across Word text in C# with the IronWord Gradient class: add GradientStop points, set the angle, and attach it to a TextEffect.`
- v3 (balanced): `Reference for the IronWord Gradient class in C#: define color StopPoints and a shade angle, then apply through TextEffect.GradientEffect.`

---

## Structured data

**TechArticle abstract**

> Building a multi-color blend on Word text in C# runs through the IronWord Gradient class. StopPoints holds a List of GradientStop entries that pair a color with a position, LinearShadeAngle and LinearShadeScaled set the direction, and the static DefaultGray returns a ready-made gradient. Assign a configured Gradient to the GradientEffect property of a TextEffect.

**FAQPage entries**

```json
[
  {
    "question": "Where does Gradient live in the IronWord API?",
    "answer": "Gradient is a class in the IronWord.Models namespace, shipped in IronWord.dll, with base type Object. Assign a configured instance to the GradientEffect property of a TextEffect to apply it to a run."
  },
  {
    "question": "How do you define the colors of a gradient in C#?",
    "answer": "Add GradientStop entries to the StopPoints list, each pairing a color with its position along the blend. Set LinearShadeAngle for direction, or start from the static DefaultGray and replace its stops."
  }
]
```
