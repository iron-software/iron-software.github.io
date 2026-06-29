<!--
N-Mid (class, implements IElementPosition; 2 properties + tuple operator + ctor). Frame C (when-fronted). IronPPT.
Members verified 2026-06-23: X (IDocUnit), Y (IDocUnit), implicit operator ElementPosition((double,double)). Base Object, implements IElementPosition.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.ElementPosition.html
-->

## Injected overview (Markdown)

When a shape, image, or text box needs to sit at a precise spot on a slide, `ElementPosition` holds that location. It pairs a horizontal and a vertical coordinate so a single object describes where an element's anchor lands on the page.

`X` and `Y` are the two coordinates, each an `IDocUnit` so a position can be expressed in the measurement a project prefers rather than a bare number. Assign an `ElementPosition` to the element you are placing, and the slide draws it at those coordinates. For brevity, the type also defines an implicit conversion from a `(double, double)` tuple, so a position can be written as a coordinate pair and the runtime builds the `ElementPosition` for you. Set `X` and `Y` directly when you want explicit units, or assign a tuple when plain numbers are enough. Because position travels with the element it locates, configure it as part of adding and arranging that element. The slide element workflow shows where placement fits in building a slide.

```csharp
using IronPPT.Models;

ElementPosition position = (100.0, 50.0);
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through placing elements on a slide, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) positions a shape.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ElementPosition Class - IronPPT C# API`
- v2 (human): `ElementPosition: Place Slide Elements in C#`
- v3 (balanced): `ElementPosition Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set where a slide element sits in C# with the IronPPT ElementPosition class: X and Y as IDocUnit, or assign a (double, double) coordinate tuple.`
- v2 (human): `Position a shape, image, or text box on a PowerPoint slide in C# with the IronPPT ElementPosition class, using X and Y or a simple tuple.`
- v3 (balanced): `Reference for the IronPPT ElementPosition class in C#: hold a slide element's X and Y coordinates, or convert from a (double, double) tuple.`

---

## Structured data

**TechArticle abstract**

> Locating a slide element in C# runs through IronPPT's ElementPosition class. X and Y carry the horizontal and vertical coordinates, each an IDocUnit so the position can use a chosen measurement. Assign an ElementPosition to the element being placed, or write a (double, double) tuple and let the implicit conversion build it.

**FAQPage entries**

```json
[
  {
    "question": "Where does ElementPosition live in the IronPPT API?",
    "answer": "ElementPosition is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and implements IElementPosition, and it holds the X and Y coordinates assigned to a slide element."
  },
  {
    "question": "How do you set an element's position in C# with IronPPT?",
    "answer": "Set the X and Y properties (each an IDocUnit) for explicit units, or assign a (double, double) tuple such as (100.0, 50.0) and the implicit conversion creates the ElementPosition for you."
  }
]
```
