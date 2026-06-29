<!--
N-Full (text/shape shadow effect, 15 members). Frame C (when-fronted; sibling Reflection uses B, must differ). IronWord.Models.
Verified 2026-06-23: public class Shadow : Object. Field OuterShadow1. Props: Alignment, BlurRadius, DirectionAngle, DistanceFromText, HorizontalScalingFactor, HorizontalSkewAngle, SchemeColor, VerticalScalingFactor, VerticalSkewAngle.
Methods: GetBlurRadius(MeasurementUnit), GetDistanceFromText(MeasurementUnit), SetBlurRadius(double, MeasurementUnit), SetDistanceFromText(double, MeasurementUnit).
Cross-ref verified: TextEffect.ShadowEffect returns Shadow.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Shadow.html
-->

## Injected overview (Markdown)

When text in a Word document should cast a dark, offset copy behind it, `Shadow` describes that effect. It is the drop shadow a developer applies to lift type off the page, the soft dark echo that gives a heading depth. A developer styling a document reaches for it when flat text needs emphasis, and it is the effect paired with `Reflection`, which mirrors the text rather than darkening a copy behind it.

A shadow is set as the `ShadowEffect` on a `TextEffect`, so it is configured as part of a text style's effects rather than on its own. Build the shadow's blur, color, and offset once, attach it to the text effect, and the dark copy renders wherever that styled text appears. The `OuterShadow1` field offers a ready-made outer-shadow preset as a convenient starting point.

`BlurRadius` softens the shadow's edge and `DistanceFromText` sets how far it falls from the original, while `DirectionAngle` and `Alignment` orient where it lands. `SchemeColor` tints the shadow, and the skew and scaling properties (`HorizontalSkewAngle`, `VerticalSkewAngle`, `HorizontalScalingFactor`, `VerticalScalingFactor`) shear and size the offset copy for a slanted or stretched effect. Because Word measurements can be expressed in several units, `SetBlurRadius` and `SetDistanceFromText` take a value plus a `MeasurementUnit`, and `GetBlurRadius` and `GetDistanceFromText` read those values back in a chosen unit. Prefer the `Set` methods over the raw `BlurRadius` and `DistanceFromText` properties whenever the unit matters, so the dimension is recorded with its unit rather than as a bare number.

```csharp
using IronWord.Models;
using IronWord.Models.Enums;

var shadow = new Shadow();
shadow.SetBlurRadius(3, MeasurementUnit.Point);
shadow.SetDistanceFromText(2, MeasurementUnit.Point);
shadow.DirectionAngle = 45;
```

The [shadow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-shadow-effect/) walks through applying it, the [reflection text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-reflection-effect/) covers the mirrored counterpart, and the [glow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-glow-effect/) shows another text effect.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Shadow Class - IronWord C# API`
- v2 (human): `Shadow: Drop Shadow Text Effect in C#`
- v3 (balanced): `Shadow Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a drop shadow to Word text in C# with the IronWord Shadow class: set BlurRadius, DistanceFromText, DirectionAngle, and SchemeColor.`
- v2 (human): `Lift text off the page with a drop shadow in C# using the IronWord Shadow class: soften the edge, set the offset, and tint the dark copy.`
- v3 (balanced): `Reference for the IronWord Shadow class in C#: the drop-shadow text effect set as TextEffect.ShadowEffect, with blur, offset, and color.`

---

## Structured data

**TechArticle abstract**

> Adding a drop shadow to Word text in C# runs through the IronWord Shadow class. BlurRadius and DistanceFromText shape the offset, DirectionAngle and Alignment orient it, SchemeColor tints it, and skew and scaling properties shear the copy. SetBlurRadius and SetDistanceFromText take a MeasurementUnit. A shadow attaches as the ShadowEffect on a TextEffect.

**FAQPage entries**

```json
[
  {
    "question": "Where does Shadow live in the IronWord API?",
    "answer": "Shadow is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and is attached as the ShadowEffect property of a TextEffect to cast a dark, offset copy behind styled text."
  },
  {
    "question": "How do you apply a drop shadow to text in C#?",
    "answer": "Create a Shadow, soften it with SetBlurRadius, set its offset with SetDistanceFromText, orient it with DirectionAngle, and assign it as the ShadowEffect on a TextEffect. The blur and distance setters take a MeasurementUnit so the dimensions are unambiguous."
  },
  {
    "question": "What is the difference between Shadow and Reflection in IronWord?",
    "answer": "Shadow casts a dark, offset copy behind the text to give it depth. Reflection produces a faded mirror image beneath the text. Both attach to a TextEffect, through the ShadowEffect and ReflectionEffect properties respectively."
  }
]
```
