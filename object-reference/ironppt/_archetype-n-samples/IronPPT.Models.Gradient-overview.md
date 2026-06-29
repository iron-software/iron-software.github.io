<!--
N-Mid (class, implements IGradient; 3 properties + ctor). Frame B (identity-by-role). IronPPT.
Members verified 2026-06-23: LinearShadeAngle (IRotation), LinearShadeScaled (Nullable<bool>), StopPoints (List<IGradientStop>). Base Object, implements IGradient. IGradientStop, IRotation cross-refs verified.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Gradient.html
-->

## Injected overview (Markdown)

`Gradient` is the fill that blends one color into another across a shape, the smooth transition a flat color cannot give. Use it when a slide element needs a graduated background, defined by the colors it passes through and the angle along which they shade.

The colors live in `StopPoints`, a `List<IGradientStop>` where each stop pairs a color with a position along the blend, so the fill runs through the stops in order. `LinearShadeAngle`, an `IRotation`, sets the direction the gradient travels across the shape, turning a top-to-bottom blend into a diagonal or side-to-side one. `LinearShadeScaled`, a nullable `bool`, controls whether the linear shade scales with the shape's dimensions, leaving the default behavior in place when null. Add at least two stops for a visible blend, order them from start to end, and set the angle to aim the transition. Assign the configured `Gradient` to the element's fill so it renders with the shape. To place and style the shape it fills, begin from the slide element workflow.

```csharp
using IronPPT.Models;

var gradient = new Gradient();
gradient.StopPoints = new List<IGradientStop>();
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) styles elements on a slide, and the [GradientStop reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.GradientStop.html) details the color stops a gradient holds.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Gradient Class - IronPPT C# API Reference`
- v2 (human): `Gradient: Blend Shape Colors in C#`
- v3 (balanced): `Gradient Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Fill a slide shape with a color blend in C# with the IronPPT Gradient class: set StopPoints, the LinearShadeAngle, and LinearShadeScaled.`
- v2 (human): `Give a PowerPoint shape a graduated fill in C# with the IronPPT Gradient class: define the color stops and the angle the colors shade along.`
- v3 (balanced): `Reference for the IronPPT Gradient class in C#: define color stops, set the shade angle, and control scaling for a shape's gradient fill.`

---

## Structured data

**TechArticle abstract**

> Filling a slide shape with a color blend in C# runs through IronPPT's Gradient class. StopPoints, a List of IGradientStop, holds the colors and their positions, LinearShadeAngle (an IRotation) sets the direction the blend travels, and LinearShadeScaled controls whether the shade scales with the shape. Assign a configured Gradient to the element's fill.

**FAQPage entries**

```json
[
  {
    "question": "Where does Gradient live in the IronPPT API?",
    "answer": "Gradient is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and implements IGradient, and it is assigned as a shape's fill to blend colors across the element."
  },
  {
    "question": "How do you define the colors of a gradient in C# with IronPPT?",
    "answer": "Populate StopPoints with IGradientStop entries, each pairing a color with a position along the blend, and order them from start to end. Set LinearShadeAngle to aim the transition across the shape."
  }
]
```
