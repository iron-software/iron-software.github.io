<!--
N-Full (class, 14 properties -> functional buckets per P7, + 8 get/set unit methods). Frame B. IronPPT.
Members verified 2026-06-23: Alignment(RectangleAlignmentValues), BlurRadius, DistanceFromText, StartPosition, EndPosition,
StartingOpacity, EndingOpacity, DirectionAngle, FadeDirectionAngle, HorizontalSkewAngle, VerticalSkewAngle (double),
HorizontalScalingFactor(int), VerticalScalingFactor(double), SchemeColor(Color); Get/SetBlurRadius/DistanceFromText/
StartPosition/EndPosition(Units). ctor(). Base Object. Cross-class: TextEffect.ReflectionEffect verified.
NS IronPPT.Models, IronPPT.dll. Target: IronPPT.Models.Reflection.html
-->

## Injected overview (Markdown)

Adding a mirrored reflection beneath text on a slide runs through `Reflection`. It describes the faded mirror image that appears below a styled run, the polished look used on title text or a logo word, and gathers every parameter of that effect, its blur, distance, opacity, angle, and color, into one configurable object. A developer reaches for it when text should sit on a reflective surface rather than flat on the slide.

A `Reflection` is configured and then attached to text through a `TextEffect`, whose `ReflectionEffect` property holds it alongside the glow, shadow, 3-D, and outline effects. It sits beside `Glow`, `Shadow`, `Effect3D`, and `TextOutlineEffect` as the text decorations IronPPT exposes, so a developer mixes them by setting the matching property on the same `TextEffect`.

The properties group by what they control. **Geometry**: `DistanceFromText`, `StartPosition`, and `EndPosition` place the reflection, while `HorizontalScalingFactor`, `VerticalScalingFactor`, `HorizontalSkewAngle`, and `VerticalSkewAngle` size and slant it. **Appearance**: `BlurRadius` softens the image, `StartingOpacity` and `EndingOpacity` set its fade, `SchemeColor` (a `Color`) tints it, and `Alignment` (a `RectangleAlignmentValues`) anchors it. **Fade direction**: `DirectionAngle` and `FadeDirectionAngle` aim the gradient. For the measurement-based properties, paired methods read and write in explicit units, `SetBlurRadius`, `SetDistanceFromText`, `SetStartPosition`, and `SetEndPosition` each take a value and a `Units`, with matching `Get` methods returning the value in a requested `Units`.

```csharp
using IronPPT.Models;
using IronPPT.Enums;

var reflection = new Reflection();
reflection.BlurRadius = 4;
reflection.SetDistanceFromText(2, Units.Point);
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) creates content an effect decorates, the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers the text it applies to, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers building slide content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Reflection Class - IronPPT C# API Reference`
- v2 (human): `Reflection: Mirror Text Effects in C#`
- v3 (balanced): `Reflection Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a reflection text effect in C# with the IronPPT Reflection class: set BlurRadius, opacity, distance, and angle, via TextEffect.`
- v2 (human): `Mirror text below itself in C# with the IronPPT Reflection class: control blur, distance, opacity, and angle, then attach via TextEffect.`
- v3 (balanced): `Reference for the IronPPT Reflection class in C#: blur, distance, opacity, skew, and color of a reflection, set on TextEffect.`

---

## Structured data

**TechArticle abstract**

> Adding a mirrored reflection beneath slide text runs through the IronPPT Reflection class in C#. It gathers the effect's geometry (DistanceFromText, StartPosition, scaling, and skew), appearance (BlurRadius, StartingOpacity, EndingOpacity, SchemeColor, Alignment), and fade direction into one object, with paired Get and Set methods that read and write measurements in explicit Units. Attach it through a TextEffect's ReflectionEffect property.

**FAQPage entries**

```json
[
  {
    "question": "Where does Reflection live in the IronPPT API?",
    "answer": "Reflection is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and is attached to text through a TextEffect, whose ReflectionEffect property holds it alongside Glow, Shadow, Effect3D, and TextOutlineEffect."
  },
  {
    "question": "How do you add a reflection to text in IronPPT?",
    "answer": "Create a Reflection, set its blur, distance, opacity, and angle, and assign it to the ReflectionEffect property of a TextEffect. The TextEffect carries the reflection alongside the other text decorations on the same text."
  },
  {
    "question": "How do you set the reflection distance in specific units?",
    "answer": "Call SetDistanceFromText with a value and a Units argument, and read it back with GetDistanceFromText for a requested Units. The same paired Get and Set methods apply to BlurRadius, StartPosition, and EndPosition."
  }
]
```
