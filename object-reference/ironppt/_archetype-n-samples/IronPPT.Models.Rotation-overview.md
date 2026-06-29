<!--
N-Mid (Value double, ToString, one implicit operator). Frame C. IronPPT.
Value (double), ToString(), implicit operator Rotation(double) verified 2026-06-23.
Base Object; implements IRotation. NS IronPPT.Models, IronPPT.dll. Sibling of Percentage (vary frame).
Target: IronPPT.Models.Rotation.html
-->

## Injected overview (Markdown)

When a shape or text box needs to sit at an angle on a slide, `Rotation` carries that angle. It holds a single rotation amount in degrees, so a graphic can be turned clockwise or counter-clockwise from its default upright position without recomputing its placement coordinates.

The angle is stored in the `Value` property, a `double` measured in degrees, where positive numbers rotate the element around its center. An implicit conversion from `double` lets a plain number assign straight to a `Rotation`, so `45` reads as a forty-five-degree turn with no wrapper boilerplate. `ToString` renders the angle for logging or inspection. `Rotation` implements `IRotation`, the contract the elements that support turning expose, which keeps the angle described the same way across every rotatable item in a presentation.

```csharp
Rotation angle = 45;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places the shapes a rotation turns, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers positioning content on a slide.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Rotation Class - IronPPT C# API Reference`
- v2 (human): `Rotation: Set Slide Element Angles in C#`
- v3 (balanced): `Rotation Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Rotate slide elements in C# with the IronPPT Rotation class: set the Value angle in degrees, with implicit conversion from double.`
- v2 (human): `Turn a shape or text box in C# with the IronPPT Rotation class: hold one degree value and assign a plain number to angle the element.`
- v3 (balanced): `Reference for the IronPPT Rotation class in C#: an IRotation value type holding a Value angle in degrees with implicit double conversion.`

---

## Structured data

**TechArticle abstract**

> Angling a shape or text box on a slide runs through the IronPPT Rotation class in C#. Its Value property holds the angle in degrees as a double, and an implicit conversion from double lets a plain number assign directly. ToString renders the angle. Rotation implements IRotation, the contract rotatable slide elements expose for their turn amount.

**FAQPage entries**

```json
[
  {
    "question": "Where does Rotation live in the IronPPT API?",
    "answer": "Rotation is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and implements IRotation, holding the rotation angle in its Value property."
  },
  {
    "question": "How do you set a rotation angle in C#?",
    "answer": "Assign the Value property in degrees, or use the implicit conversion from double and assign a plain number where a Rotation is expected. Positive values turn the element clockwise around its center."
  }
]
```
