<!--
N-Full (3 props + 4 methods). Frame C. IronPPT.
Verified 2026-06-23: Height/Width (double), PresetProfileType (BevelPresetTypeValues); GetHeight(Units)/GetWidth(Units)/SetHeight(double,Units)/SetWidth(double,Units). Base System.Object. Units enum + BevelPresetTypeValues enum in IronPPT.Enums.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Bevel.html
-->

## Injected overview (Markdown)

When a shape needs a raised or recessed three-dimensional edge, `Bevel` supplies it in IronPPT. It describes the bevel applied to a shape's edge, giving the outline depth so a button, card, or callout reads as raised rather than flat. You build one to define how deep and how wide the bevel runs and which profile shape it follows.

A `Bevel` is configured and then attached to the three-dimensional shape effect that draws it: an `Effect3D` exposes a `BevelTop` and a `BevelBottom`, each a `Bevel`, so you assign one to the top face, the bottom face, or both. That places it in the styling step of building a slide rather than in layout or content, and the same `Bevel` settings can describe the edge of any shape that takes one.

Three properties carry the shape of the edge. `Height` and `Width` are `double` values for the bevel's depth and spread, and `PresetProfileType` selects the profile curve from the `BevelPresetTypeValues` enumeration (circle, slope, and similar). Because depth is unit-sensitive, four methods read and write the dimensions in a chosen `Units`: `GetHeight(Units)` and `GetWidth(Units)` return the value converted to that unit, and `SetHeight(double, Units)` and `SetWidth(double, Units)` set it in a specific unit. Use the unit-aware setters when your measurements come in points or centimeters rather than the property's native value.

```csharp
using IronPPT.Models;
using IronPPT.Enums;

var bevel = new Bevel();
bevel.PresetProfileType = BevelPresetTypeValues.Circle;
bevel.SetHeight(3, Units.Point);
bevel.SetWidth(3, Units.Point);
```

The [add shape workflow in the add-slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) builds the shapes a bevel decorates, the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through shape styling, and the [Effect3D reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Effect3D.html) shows where a bevel attaches.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Bevel Class - IronPPT C# API Reference`
- v2 (human): `Bevel: 3D Shape Edges in C#`
- v3 (balanced): `Bevel Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Bevel adds a 3D shape edge in IronPPT for C#: set Height, Width, and PresetProfileType, or use the unit-aware GetHeight and SetHeight methods.`
- v2 (human): `Give a shape a raised or recessed edge in C# with IronPPT's Bevel: control depth, width, and profile, with unit-aware getters and setters.`
- v3 (balanced): `Reference for the IronPPT Bevel class in C#: a shape's 3D edge with Height, Width, PresetProfileType, and unit-aware Get and Set methods.`

---

## Structured data

**TechArticle abstract**

> Giving a shape a raised or recessed three-dimensional edge in IronPPT for C# runs through Bevel. Height and Width are double dimensions, PresetProfileType selects the profile from the BevelPresetTypeValues enumeration, and GetHeight, GetWidth, SetHeight, and SetWidth read and write the dimensions in a chosen Units. Attach a configured Bevel to the shape effect that draws it.

**FAQPage entries**

```json
[
  {
    "question": "Where does Bevel live in the IronPPT API?",
    "answer": "Bevel is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from System.Object and describes the three-dimensional edge applied to a shape."
  },
  {
    "question": "How do you set a bevel's size in a specific unit in C#?",
    "answer": "Call SetHeight or SetWidth with a value and a Units argument, such as SetHeight(3, Units.Point). Read the converted value back with GetHeight(Units) or GetWidth(Units), or set the native Height and Width properties directly."
  },
  {
    "question": "How do you choose the bevel profile shape in IronPPT?",
    "answer": "Set the PresetProfileType property to a value from the BevelPresetTypeValues enumeration, which selects the profile curve such as circle or slope. Combine it with Height and Width for the depth and spread of the edge."
  }
]
```
