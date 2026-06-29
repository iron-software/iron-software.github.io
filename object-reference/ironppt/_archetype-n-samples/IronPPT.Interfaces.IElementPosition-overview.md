<!--
N-Mid / interface (2 members). Frame D lead. Implementor: ElementPosition. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IElementPosition.html
-->

## Injected overview (Markdown)

Placing a shape, image, or text box at a precise spot on a slide runs through `IElementPosition`. The contract exposes an `X` and a `Y`, each typed as `IDocUnit`, so a coordinate can be read or set in whichever measurement unit the surrounding layout code uses, inches, points, EMU, and the rest. Coding against the contract keeps positioning logic uniform across element types.

The concrete implementor in IronPPT is `ElementPosition`, the object that holds an element's location on its slide. Because `X` and `Y` are `IDocUnit` values rather than plain numbers, a developer assigns a position by setting the unit that matches the value at hand and can read the same coordinate back in a different unit. A developer usually receives a position from the element being laid out rather than constructing it, then adjusts `X` and `Y` to move the element.

```csharp
position.X.Inch = 1.0;
position.Y.Inch = 2.0;
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) positions elements on a slide, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places shapes at set coordinates.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IElementPosition - IronPPT C# API`
- v2 (human): `IElementPosition: Place Slide Elements in C#`
- v3 (balanced): `IElementPosition Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IElementPosition is IronPPT's coordinate contract in C#: it exposes X and Y as IDocUnit values. Implemented by the ElementPosition class.`
- v2 (human): `Position a slide element in C# through IronPPT's IElementPosition contract: set X and Y in any unit through their IDocUnit values.`
- v3 (balanced): `Reference for the IronPPT IElementPosition interface in C#: the X and Y coordinate contract ElementPosition implements.`

---

## Structured data

**TechArticle abstract**

> Placing an element precisely on an IronPPT slide is handled by the IElementPosition contract in C#. It exposes an X and a Y, each an IDocUnit, so a coordinate reads or sets in any measurement unit. The concrete implementor is ElementPosition, which holds an element's location; you receive it from the element being laid out and adjust X and Y to move it.

**FAQPage entries**

```json
[
  {
    "question": "Where does IElementPosition live in the IronPPT API?",
    "answer": "IElementPosition is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and declares X and Y, each typed as IDocUnit."
  },
  {
    "question": "What implements IElementPosition in IronPPT?",
    "answer": "The ElementPosition class in IronPPT.Models implements IElementPosition. You usually receive it from the element being laid out, then set X and Y through their IDocUnit values to move the element."
  }
]
```
