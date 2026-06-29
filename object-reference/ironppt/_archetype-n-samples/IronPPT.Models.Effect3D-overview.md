<!--
N-Full (class, ~12 members). Frame E (feature-fronted). IronPPT.
Members verified 2026-06-23: BevelTop/BevelBottom (Bevel), ContourColor/ExtrusionColor (Color),
ContourWidth/ExtrusionHeight (double), PresetMaterialType (PresetMaterialTypeValues), DefaultEffect (static),
GetContourWidth/SetContourWidth/GetExtrusionHeight/SetExtrusionHeight(Units). Bevel, Color, Units, PresetMaterialTypeValues cross-refs verified.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Effect3D.html
-->

## Injected overview (Markdown)

Three-dimensional depth on a shape, the bevels, extrusion, and contour that make a box read as raised or carved, is described by `Effect3D`. Apply one when a slide element needs a material, lit appearance rather than a flat fill, and reach for the static `DefaultEffect` when a sensible starting effect is enough.

An `Effect3D` is attached to a shape's style and then tuned property by property. `BevelTop` and `BevelBottom` each take a `Bevel` that shapes the raised top and bottom edges, while `ContourColor` and `ContourWidth` outline the form and `ExtrusionColor` with `ExtrusionHeight` push it back into apparent depth. `PresetMaterialType`, a `PresetMaterialTypeValues`, selects the surface finish so the same geometry can look like plastic, metal, or matte under the slide's lighting.

Width and height values are plain `double` properties measured in the library's internal unit, so set them through the unit-aware helpers when working in a specific measurement. `SetContourWidth` and `SetExtrusionHeight` each accept a value plus a `Units`, and `GetContourWidth` and `GetExtrusionHeight` read the values back in the `Units` you ask for, which keeps your code in points or centimeters even though the stored value is unit-agnostic. Start from `Effect3D.DefaultEffect` to get a balanced result, then override only the properties a design calls for rather than building every value from zero. Because the bevels are described by the separate `Bevel` type, adjust an edge by configuring that object and assigning it to `BevelTop` or `BevelBottom`. For the slide elements this effect decorates, the shape and styling workflow is the place to begin.

```csharp
using IronPPT.Models;
using IronPPT.Enums;

var effect = Effect3D.DefaultEffect;
effect.PresetMaterialType = PresetMaterialTypeValues.Metal;
effect.SetExtrusionHeight(6, Units.Point);
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places a shape on a slide, the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through styling elements on a slide, and the [Bevel reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Bevel.html) details the edge object the bevel properties accept.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Effect3D Class - IronPPT C# API Reference`
- v2 (human): `Effect3D: 3D Shape Effects in C#`
- v3 (balanced): `Effect3D Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add 3D depth to slide shapes in C# with the IronPPT Effect3D class: set BevelTop, ExtrusionHeight, ContourColor, and a PresetMaterialType finish.`
- v2 (human): `Give a PowerPoint shape raised, beveled depth in C# with the IronPPT Effect3D class: bevels, extrusion, contour, and material presets.`
- v3 (balanced): `Reference for the IronPPT Effect3D class in C#: configure bevels, extrusion height, contour, and material type for 3D shape effects.`

---

## Structured data

**TechArticle abstract**

> Three-dimensional depth on a slide shape is described by IronPPT's Effect3D class in C#. BevelTop and BevelBottom take a Bevel, ContourColor and ContourWidth outline the form, ExtrusionColor and ExtrusionHeight add apparent depth, and PresetMaterialType selects the surface finish. Width and height read and write through unit-aware helpers such as SetExtrusionHeight, and the static DefaultEffect supplies a balanced starting point.

**FAQPage entries**

```json
[
  {
    "question": "Where does Effect3D live in the IronPPT API?",
    "answer": "Effect3D is a class in the IronPPT.Models namespace, shipped in IronPPT.dll, and it derives from Object. Attach it to a shape's style and tune its bevel, extrusion, and contour properties to give the shape 3D depth."
  },
  {
    "question": "How do you set the extrusion height of a 3D effect in C#?",
    "answer": "Call SetExtrusionHeight on the Effect3D, passing a value and a Units, for example effect.SetExtrusionHeight(6, Units.Point). Read it back with GetExtrusionHeight, which returns the value in the Units you request, since ExtrusionHeight itself is a plain double in internal units."
  },
  {
    "question": "What is Effect3D.DefaultEffect?",
    "answer": "DefaultEffect is a static Effect3D that supplies a balanced starting configuration. Begin from it, then override only the bevel, contour, extrusion, or PresetMaterialType properties a given design needs."
  }
]
```
