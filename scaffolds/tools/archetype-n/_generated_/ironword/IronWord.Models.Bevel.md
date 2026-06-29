<!--
N-Full (override; small but central 3D-effect type, 7 members). Frame D (task-gerund). IronWord.Models.
Members verified 2026-06-23: Height, Width, PresetProfileType (BevelPresetTypeValues),
GetHeight(MeasurementUnit), GetWidth(MeasurementUnit), SetHeight(double, MeasurementUnit),
SetWidth(double, MeasurementUnit). Base Object.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Bevel.html
-->

## Injected overview (Markdown)

Giving a shape's edge a raised, three-dimensional profile in a Word document runs through `Bevel`. It describes the chamfer applied along the top or bottom edge of a shape, the formatting that makes a button or callout look embossed rather than flat. A developer styling shapes for a polished document reaches for it when a plain outline is not enough and the edge should catch light.

A bevel attaches to a shape's 3D formatting, so it is configured as part of building that shape rather than on its own. Set the profile and the depth once, and the edge renders with that effect wherever the shape appears.

`PresetProfileType` chooses the bevel shape from the `BevelPresetTypeValues` options, picking the geometry of the raised edge from profiles such as `Circle`, `Angle`, `Convex`, and `SoftRound`. `Height` and `Width` set the depth of the effect, and because measurements in Word can be expressed in several units, the `SetHeight` and `SetWidth` methods take both a value and a `MeasurementUnit` so the depth is unambiguous. `GetHeight` and `GetWidth` read those values back in a chosen `MeasurementUnit`, which is convenient when the value was set in one unit and you need it in another.

Prefer the `SetHeight` and `SetWidth` methods over assigning the raw `Height` and `Width` properties whenever the unit matters, since the methods record the value with its unit rather than a bare number. A `MeasurementUnit` of `Point` suits fine edge depths, while `Millimeter` or `Inch` reads more naturally for larger shapes. Keep the height and width modest relative to the shape; an oversized bevel can overwhelm the shape's face. Build the bevel up first, then attach it to the shape's 3D formatting as part of styling that shape.

```csharp
using IronWord.Models;
using IronWord.Models.Enums;

var bevel = new Bevel();
bevel.PresetProfileType = BevelPresetTypeValues.Circle;
bevel.SetHeight(5, MeasurementUnit.Point);
bevel.SetWidth(5, MeasurementUnit.Point);
```

The [glow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-glow-effect/), the [shadow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-shadow-effect/), and the [text outline effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-text-outline-effect/) show related shape and text effects in context.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Bevel Class - IronWord C# API`
- v2 (human): `Bevel: 3D Edge Effects for Shapes in C#`
- v3 (balanced): `Bevel Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply a 3D edge to a Word shape in C# with the IronWord Bevel class: set PresetProfileType, then SetHeight and SetWidth with a MeasurementUnit.`
- v2 (human): `Give a shape a raised, embossed edge in a Word document in C# with the IronWord Bevel class: choose a profile and set the bevel depth in any unit.`
- v3 (balanced): `Reference for the IronWord Bevel class in C#: set a shape's 3D edge with PresetProfileType, SetHeight, SetWidth, GetHeight, and GetWidth.`

---

## Structured data

**TechArticle abstract**

> Adding a raised, three-dimensional edge to a Word shape in C# runs through the IronWord Bevel class. PresetProfileType selects the bevel geometry from BevelPresetTypeValues, while SetHeight and SetWidth set the effect's depth with an explicit MeasurementUnit. GetHeight and GetWidth read those dimensions back in a chosen unit. A bevel attaches to a shape's 3D formatting.

**FAQPage entries**

```json
[
  {
    "question": "Where does Bevel live in the IronWord API?",
    "answer": "Bevel is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and describes the 3D edge profile applied to a shape's formatting."
  },
  {
    "question": "How do you set the size of a bevel in C#?",
    "answer": "Call SetHeight and SetWidth, passing a value and a MeasurementUnit so the depth is unambiguous. Read the values back with GetHeight and GetWidth, which also take a MeasurementUnit so you can convert between units."
  },
  {
    "question": "What does PresetProfileType control on Bevel?",
    "answer": "PresetProfileType chooses the bevel's geometry from the BevelPresetTypeValues enumeration, setting the shape of the raised edge. Height and Width then control how deep the effect renders."
  }
]
```
