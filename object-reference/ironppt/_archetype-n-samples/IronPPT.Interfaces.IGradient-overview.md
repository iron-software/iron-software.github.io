<!--
N-Mid / interface (3 members). Frame D (gerund). No declared base. Implementor: Gradient. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IGradient.html
-->

## Injected overview (Markdown)

Filling a shape or background with a smooth color blend in C# runs through `IGradient`. The contract describes a multi-stop gradient: the colors it passes through, the points where each color sits, and the angle the blend follows. A developer works with it while styling a shape fill, where a flat color is not enough and the look calls for one color easing into another.

A gradient is reached through the fill of the element being styled rather than built in isolation, so an `IGradient` is usually obtained from the object it decorates and then adjusted. Three members carry the work. `StopPoints` is a `List<IGradientStop>` holding each color and its position along the blend, so adding or reordering stops shapes the transition. `LinearShadeAngle` is an `IRotation` that sets the direction the gradient runs. `LinearShadeScaled`, a `Nullable<bool>`, controls whether the shade scales with the shape. The concrete implementor in IronPPT is the `Gradient` class, so most code uses `Gradient` directly and names the interface only when a method should accept any gradient.

```csharp
gradient.StopPoints.Add(stop);
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) builds a styled shape, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows related styling work.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IGradient Interface - IronPPT C# API Reference`
- v2 (human): `IGradient: Build Gradient Fills in C#`
- v3 (balanced): `IGradient Interface | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IGradient interface in C#: set StopPoints, LinearShadeAngle, and LinearShadeScaled to define a multi-stop gradient fill.`
- v2 (human): `Define a smooth color blend for a shape fill in C# through the IronPPT IGradient contract, implemented by the Gradient class.`
- v3 (balanced): `Reference for the IronPPT IGradient interface in C#: the gradient-fill contract carrying StopPoints and LinearShadeAngle, implemented by Gradient.`

---

## Structured data

**TechArticle abstract**

> Define a smooth, multi-stop color blend in C# through the IronPPT IGradient contract. StopPoints holds a List of IGradientStop, each a color at a position; LinearShadeAngle (an IRotation) sets the direction; and LinearShadeScaled, a nullable bool, controls scaling with the shape. The concrete implementor is the Gradient class.

**FAQPage entries**

```json
[
  {
    "question": "Where does IGradient live in the IronPPT API?",
    "answer": "IGradient is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It declares no base interface and is implemented by the Gradient class in IronPPT.Models."
  }
]
```
