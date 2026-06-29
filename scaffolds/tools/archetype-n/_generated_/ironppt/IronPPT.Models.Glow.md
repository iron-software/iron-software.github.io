<!--
N-Mid (class, base Object; GlowColor, GlowRadius + Get/SetGlowRadius(Units) + ctor). Frame A (subject-verb). IronPPT.
Members verified 2026-06-23: GlowColor (Color), GlowRadius (double), GetGlowRadius(Units), SetGlowRadius(double, Units). Base Object. Color, Units cross-refs verified.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Glow.html
-->

## Injected overview (Markdown)

`Glow` surrounds a shape with a soft colored halo, the diffuse light that bleeds outward from its edges. Apply one when a slide element should appear to emit light or stand out against its background, and control how far the halo spreads and what color it takes.

`GlowColor`, a `Color`, sets the halo's color, and `GlowRadius`, a `double`, sets how far it extends from the edge in the library's internal unit. Because the raw radius is unit-agnostic, set it through `SetGlowRadius`, which accepts a value plus a `Units`, and read it back with `GetGlowRadius`, which returns the radius in the `Units` you ask for. That keeps the code working in points or centimeters while the stored value stays neutral. A larger radius produces a wider, softer glow, and a saturated `GlowColor` makes the effect read more strongly. Assign a configured `Glow` to the element's style so it travels with the shape. To see where this effect fits when decorating a slide element, start from the styling workflow.

```csharp
using IronPPT.Models;
using IronPPT.Enums;

var glow = new Glow();
glow.SetGlowRadius(8, Units.Point);
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) styles elements on a slide, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places the shape a glow decorates.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Glow Class - IronPPT C# API Reference`
- v2 (human): `Glow: Add a Halo to Slide Shapes in C#`
- v3 (balanced): `Glow Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a soft halo to a slide shape in C# with the IronPPT Glow class: set GlowColor and the glow radius with SetGlowRadius and a Units value.`
- v2 (human): `Surround a PowerPoint shape with a colored glow in C# with the IronPPT Glow class: choose the color and how far the halo spreads.`
- v3 (balanced): `Reference for the IronPPT Glow class in C#: set the glow color and radius, reading and writing the radius through unit-aware helpers.`

---

## Structured data

**TechArticle abstract**

> Adding a soft colored halo to a slide shape in C# runs through IronPPT's Glow class. GlowColor, a Color, sets the halo's color, and GlowRadius, a double in internal units, sets how far it spreads. Set the radius through SetGlowRadius with a Units value and read it back with GetGlowRadius, then assign the Glow to the shape's style.

**FAQPage entries**

```json
[
  {
    "question": "Where does Glow live in the IronPPT API?",
    "answer": "Glow is a class in the IronPPT.Models namespace, shipped in IronPPT.dll, and it derives from Object. Configure its GlowColor and radius, then assign it to a shape's style to give the element a halo."
  },
  {
    "question": "How do you set the glow radius in C# with IronPPT?",
    "answer": "Call SetGlowRadius and pass a value with a Units, for example glow.SetGlowRadius(8, Units.Point). Read it back with GetGlowRadius in the Units you want, since GlowRadius itself is a plain double in internal units."
  }
]
```
