<!--
N-Full (class; static DefaultEffect; BevelTop/BevelBottom, ContourColor/Width, ExtrusionColor/Height, PresetMaterialType; Get/Set width/height w/ MeasurementUnit). Frame C lead / Frame B abstract. IronWord.
Verified 2026-06-23: Effect3D(); static field DefaultEffect; BevelBottom/BevelTop (Bevel), ContourColor/ExtrusionColor (Color), ContourWidth/ExtrusionHeight (double), PresetMaterialType (PresetMaterialTypeValues); GetContourWidth(MeasurementUnit), GetExtrusionHeight(MeasurementUnit), SetContourWidth(double,MeasurementUnit), SetExtrusionHeight(double,MeasurementUnit). Base Object. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Effect3D.html
-->

## Injected overview (Markdown)

When an object or text in a Word document needs depth, `Effect3D` supplies the 3D treatment. It bundles the bevel, contour, extrusion, and material settings that give a flat element a raised, carved, or glossy appearance, which a developer attaches where a document element accepts a 3D effect.

The quickest start is the static `DefaultEffect`, a predefined `Effect3D` ready to apply without setting anything. For a custom effect, construct one with `new Effect3D()` and configure its parts. `BevelTop` and `BevelBottom` take `Bevel` objects that shape the raised edges, `ContourColor` and `ExtrusionColor` (both `Color`) set the outline and depth colors, and `PresetMaterialType` chooses a surface finish from `PresetMaterialTypeValues`, such as matte or metallic.

The depth measurements have paired getters and setters that work in a chosen unit. `SetContourWidth` and `SetExtrusionHeight` each take a value and a `MeasurementUnit`, while `GetContourWidth` and `GetExtrusionHeight` return the current value converted to a requested unit, so a developer can set the contour width in points and read it back in millimeters without doing the math. The `ContourWidth` and `ExtrusionHeight` properties hold the underlying double values directly when a unit conversion is not needed. Because all of these settings live on one effect object, the same `Effect3D` can be defined once and reused across several elements that should share the same look.

```csharp
var effect = new Effect3D();
effect.PresetMaterialType = PresetMaterialTypeValues.Matte;
effect.SetExtrusionHeight(6, MeasurementUnit.Point);
```

The [shadow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-shadow-effect/) applies a related depth effect, the [glow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-glow-effect/) covers another visual treatment, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how effects attach to elements.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Effect3D - IronWord C# API Reference`
- v2 (human): `Effect3D: 3D Effects in C# Word Documents`
- v3 (balanced): `Effect3D Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply a 3D effect in C# Word documents with the IronWord Effect3D class. Set bevels, contour and extrusion, and a preset material type.`
- v2 (human): `Give text and objects depth in a C# Word document with the IronWord Effect3D class: bevels, contour, extrusion, and material presets.`
- v3 (balanced): `Reference for the IronWord Effect3D class in C#: set BevelTop, contour and extrusion, and PresetMaterialType, or use the DefaultEffect.`

---

## Structured data

**TechArticle abstract**

> Effect3D is the 3D treatment IronWord applies to an object or text in a C# Word document, bundling bevel, contour, extrusion, and material settings. Start from the static DefaultEffect or construct one and set BevelTop, BevelBottom, ContourColor, ExtrusionColor, and PresetMaterialType. The paired SetContourWidth and GetContourWidth methods, and their extrusion counterparts, set and read depth values in a chosen MeasurementUnit.

**FAQPage entries**

```json
[
  {
    "question": "Where does Effect3D live in the IronWord API?",
    "answer": "Effect3D is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and exposes a static DefaultEffect for a ready-made 3D effect."
  },
  {
    "question": "How do you apply a 3D effect in a Word document in C#?",
    "answer": "Use the static Effect3D.DefaultEffect for a predefined effect, or construct one with new Effect3D() and set BevelTop, ContourColor, ExtrusionColor, and PresetMaterialType before attaching it to an element."
  },
  {
    "question": "How do you set the extrusion height of an IronWord 3D effect?",
    "answer": "Call SetExtrusionHeight with a value and a MeasurementUnit, then read it back in any unit with GetExtrusionHeight. The ExtrusionHeight property holds the raw double value when no unit conversion is needed."
  }
]
```
