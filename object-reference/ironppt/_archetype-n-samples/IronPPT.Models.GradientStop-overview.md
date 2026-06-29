<!--
N-Mid (class, implements IGradientStop; 2 properties + ctor). Frame D (task-gerund). IronPPT. Sibling of Gradient (frame B) - different frame.
Members verified 2026-06-23: Color (IColor), StopPoint (IDocUnit). Base Object, implements IGradientStop. IColor, IDocUnit cross-refs verified.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.GradientStop.html
-->

## Injected overview (Markdown)

Defining one color along a gradient's blend runs through `GradientStop`. Each stop fixes a single color at a position in the transition, and a list of these stops is what gives a `Gradient` its sequence of colors from start to end.

`Color`, an `IColor`, is the color the stop contributes, and `StopPoint`, an `IDocUnit`, is where along the blend that color lands. A gradient needs at least two stops to show a visible transition: one near the start and one near the end, with extra stops in between for multi-color blends. Build a `GradientStop`, set its `Color` and `StopPoint`, and add it to the `StopPoints` list on a `Gradient`. The order of the stop positions determines how the colors run across the shape, so set `StopPoint` deliberately rather than relying on insertion order alone. Since stops only have meaning inside a gradient, configure them while building that fill. To style the shape the gradient fills, start from the slide element workflow.

```csharp
using IronPPT.Models;

var stop = new GradientStop();
gradient.StopPoints.Add(stop);
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) styles elements on a slide, and the [Gradient reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Gradient.html) shows the fill these stops belong to.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `GradientStop Class - IronPPT C# API`
- v2 (human): `GradientStop: Color Stops in C#`
- v3 (balanced): `GradientStop Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define a color stop for a gradient in C# with the IronPPT GradientStop class: set Color (an IColor) and StopPoint (an IDocUnit position).`
- v2 (human): `Place one color at a position along a PowerPoint gradient in C# with the IronPPT GradientStop class, then add it to a Gradient's stop list.`
- v3 (balanced): `Reference for the IronPPT GradientStop class in C#: set a color and its position along a gradient, then add it to a Gradient's StopPoints.`

---

## Structured data

**TechArticle abstract**

> Defining one color along a gradient in C# runs through IronPPT's GradientStop class. Color, an IColor, is the color the stop contributes, and StopPoint, an IDocUnit, is its position in the blend. Build a stop, set both, and add it to the StopPoints list on a Gradient; a blend needs at least two stops to be visible.

**FAQPage entries**

```json
[
  {
    "question": "Where does GradientStop live in the IronPPT API?",
    "answer": "GradientStop is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and implements IGradientStop, and instances are collected in a Gradient's StopPoints list."
  },
  {
    "question": "How do you add a color stop to a gradient in C# with IronPPT?",
    "answer": "Create a GradientStop, set its Color (an IColor) and StopPoint (an IDocUnit position), and add it to the StopPoints list on a Gradient. Use two or more stops, ordered by position, for a visible blend."
  }
]
```
