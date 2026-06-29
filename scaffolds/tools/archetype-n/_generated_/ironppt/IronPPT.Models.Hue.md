<!--
N-Mid (class, derives BaseColorField; implements IHue, IBaseColorField; Angle + ctor + implicit double operator). Frame E (feature-fronted). IronPPT.
Members verified 2026-06-23: Angle (IRotation), implicit operator Hue(double). Base BaseColorField, implements IHue, IBaseColorField. IRotation cross-ref verified.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Hue.html
-->

## Injected overview (Markdown)

A color adjustment that rotates the hue of a fill, the shift around the color wheel that turns a red toward orange or purple, is captured by `Hue`. Apply one as part of a color field when an element's color should be nudged by degrees rather than replaced outright.

`Angle`, an `IRotation`, is the amount of rotation: it expresses how far around the color wheel the hue moves, so a larger angle produces a more pronounced shift. Because `Hue` builds on `BaseColorField`, it slots into the same color-adjustment model as the library's other field types and is applied where a color modifier is expected. For brevity the type also defines an implicit conversion from `double`, so a rotation can be written as a plain number and the runtime builds the `Hue` for you. Set `Angle` directly when you want an explicit `IRotation`, or assign a `double` when a degree value is enough. Since a hue shift only has meaning against a base color, configure it while styling the element's color. To style the slide element it modifies, begin from the styling workflow.

```csharp
using IronPPT.Models;

Hue hue = 30;
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) styles elements on a slide, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places a shape whose color a hue can adjust.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Hue Class - IronPPT C# API Reference`
- v2 (human): `Hue: Rotate Shape Color in C#`
- v3 (balanced): `Hue Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Rotate a color's hue in C# with the IronPPT Hue class: set the Angle (an IRotation), or assign a double for the degrees of rotation.`
- v2 (human): `Shift a PowerPoint element's color around the color wheel in C# with the IronPPT Hue class by setting how many degrees to rotate the hue.`
- v3 (balanced): `Reference for the IronPPT Hue class in C#: rotate a color's hue by an Angle, with an implicit conversion from a double degree value.`

---

## Structured data

**TechArticle abstract**

> Rotating a color's hue in C# runs through IronPPT's Hue class. Angle, an IRotation, sets how far around the color wheel the hue shifts. Building on BaseColorField, Hue applies as a color adjustment on an element, and an implicit conversion from double lets a rotation be written as a plain degree value such as 30.

**FAQPage entries**

```json
[
  {
    "question": "Where does Hue live in the IronPPT API?",
    "answer": "Hue is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from BaseColorField and implements IHue and IBaseColorField, and it is applied as a color adjustment on an element."
  },
  {
    "question": "How do you rotate a color's hue in C# with IronPPT?",
    "answer": "Set the Angle property (an IRotation) to the degrees of rotation, or assign a double to a Hue, for example Hue hue = 30, and the implicit conversion builds it. A larger angle produces a more pronounced shift."
  }
]
```
