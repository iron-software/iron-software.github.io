<!--
N-Full (text effect, 23 members). Frame B (identity-by-role). IronWord.Models.
Verified 2026-06-23: public class Reflection : Object. Props: Alignment, BlurRadius, DirectionAngle, DistanceFromText, EndingOpacity, EndPosition, FadeDirectionAngle, HorizontalScalingFactor, HorizontalSkewAngle, SchemeColor, StartingOpacity, StartPosition, VerticalScalingFactor, VerticalSkewAngle.
Methods: Get/Set BlurRadius, DistanceFromText, EndPosition, StartPosition (MeasurementUnit overloads).
Cross-ref verified: TextEffect.ReflectionEffect returns Reflection. Sibling of Shadow (frame must differ).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Reflection.html
-->

## Injected overview (Markdown)

`Reflection` is the mirrored-image effect a developer attaches when text in a Word document should appear to reflect off a surface below it. It describes the faded copy that falls beneath the original, the polished touch on a title or heading that makes the type look like it is sitting on glass. A developer styling a document reaches for it when flat text needs a sense of depth, and it is the effect most easily confused with `Shadow`, which casts a dark offset rather than a faded mirror.

A reflection is set as the `ReflectionEffect` on a `TextEffect`, so it is configured as part of a text style's effects rather than on its own. Build the reflection's geometry and fade once, attach it to the text effect, and the mirrored copy renders wherever that styled text appears.

The fade is controlled by `StartingOpacity` and `EndingOpacity` together with `StartPosition` and `EndPosition`, which set where the reflection begins and ends and how it dissolves. `BlurRadius` softens the mirrored image, `DistanceFromText` pushes it away from the original, and `Alignment` and `FadeDirectionAngle` orient it. The skew and scaling properties (`HorizontalSkewAngle`, `VerticalSkewAngle`, `HorizontalScalingFactor`, `VerticalScalingFactor`) shear and size the reflected copy, while `SchemeColor` and `DirectionAngle` tune its tint and direction. Because Word measurements can be expressed in several units, the `SetBlurRadius`, `SetDistanceFromText`, `SetStartPosition`, and `SetEndPosition` methods take a value plus a `MeasurementUnit`, and the matching `Get` methods read those values back in a chosen unit. Prefer the `Set` methods over the raw properties whenever the unit matters, so the dimension is recorded unambiguously.

```csharp
using IronWord.Models;
using IronWord.Models.Enums;

var reflection = new Reflection();
reflection.StartingOpacity = 60;
reflection.EndingOpacity = 0;
reflection.SetBlurRadius(2, MeasurementUnit.Point);
reflection.SetDistanceFromText(1, MeasurementUnit.Point);
```

The [reflection text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-reflection-effect/) walks through applying it, the [shadow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-shadow-effect/) covers the related offset effect, and the [glow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-glow-effect/) shows another text styling option.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Reflection Class - IronWord C# API`
- v2 (human): `Reflection: Mirrored Text Effect in C#`
- v3 (balanced): `Reflection Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a mirrored reflection to Word text in C# with the IronWord Reflection class: set StartingOpacity, EndingOpacity, BlurRadius, and positions.`
- v2 (human): `Make text in a Word document look like it sits on glass in C# with the IronWord Reflection class: a faded mirror image with a tunable blur.`
- v3 (balanced): `Reference for the IronWord Reflection class in C#: the mirrored text effect set as TextEffect.ReflectionEffect, with opacity, blur, and position.`

---

## Structured data

**TechArticle abstract**

> Adding a mirrored reflection to Word text in C# runs through the IronWord Reflection class. StartingOpacity, EndingOpacity, StartPosition, and EndPosition shape the fade, BlurRadius softens the mirror, and skew and scaling properties shear the copy. SetBlurRadius, SetDistanceFromText, and the position setters take a MeasurementUnit. A reflection attaches as the ReflectionEffect on a TextEffect.

**FAQPage entries**

```json
[
  {
    "question": "Where does Reflection live in the IronWord API?",
    "answer": "Reflection is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and is attached as the ReflectionEffect property of a TextEffect to mirror styled text."
  },
  {
    "question": "How do you apply a reflection to text in C#?",
    "answer": "Create a Reflection, set its fade with StartingOpacity and EndingOpacity, soften it with SetBlurRadius, and assign it as the ReflectionEffect on a TextEffect. The position setters and blur method take a MeasurementUnit so the dimensions are unambiguous."
  },
  {
    "question": "What is the difference between Reflection and Shadow in IronWord?",
    "answer": "Reflection produces a faded mirror image of the text beneath it, as if it sits on glass. Shadow casts a dark, offset copy behind the text. Both attach to a TextEffect, but through the ReflectionEffect and ShadowEffect properties respectively."
  }
]
```
