<!--
N-Mid / interface (2 members). Frame B (role). No declared base. Implementor: GradientStop. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IGradientStop.html
-->

## Injected overview (Markdown)

`IGradientStop` is one color-and-position pair inside a gradient. It is the unit a developer works with when deciding which color a blend hits and where along the run it lands, so a gradient with three stops is three of these in order. You reach for the contract while tuning a gradient fill, adding a stop to introduce a new color or moving one to shift where the transition happens.

A stop is held in the `StopPoints` list of an `IGradient` rather than standing alone, so it is usually added to that list and then adjusted. The contract carries two members. `Color` is the `IColor` shown at this stop. `StopPoint` is an `IDocUnit` giving the position along the gradient where this color sits, measured in the document's units. Order the stops by position to control the sequence of colors. The concrete implementor in IronPPT is `GradientStop`, so code that builds a gradient constructs `GradientStop` values and adds them to the gradient's stop list.

```csharp
gradient.StopPoints.Add(new GradientStop());
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) styles a shape, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) covers related styling.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IGradientStop - IronPPT C# API Reference`
- v2 (human): `IGradientStop: A Color Stop in a Gradient (C#)`
- v3 (balanced): `IGradientStop Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IGradientStop interface in C#: a Color (IColor) and a StopPoint (IDocUnit) defining one stop in a gradient's StopPoints list.`
- v2 (human): `Set one color stop in a C# gradient through the IronPPT IGradientStop contract: a Color and its position, implemented by GradientStop.`
- v3 (balanced): `Reference for the IronPPT IGradientStop interface in C#: the color-and-position stop in a gradient, implemented by the GradientStop class.`

---

## Structured data

**TechArticle abstract**

> Set one color stop in a C# gradient through the IronPPT IGradientStop contract. Color (an IColor) is the color at this stop and StopPoint (an IDocUnit) is its position along the blend. Stops are held in an IGradient's StopPoints list and ordered by position. The concrete implementor is the GradientStop class.

**FAQPage entries**

```json
[
  {
    "question": "Where does IGradientStop live in the IronPPT API?",
    "answer": "IGradientStop is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It declares no base interface and is implemented by the GradientStop class, held in an IGradient's StopPoints list."
  }
]
```
