<!--
N-Full (class : BaseGraphicContainer, ...IShape...; FillColor, Id, Name, OutlineColor, Type, Clone). Frame D (lead), Frame C (abstract). IronPPT.
Verified 2026-06-23: FillColor, OutlineColor (IColor), Id (uint), Name (string), Type (Nullable<ShapeType>), Clone() override. Cross-ref: Slide.AddShape(IShape) returns IShape; Width/Position inherited (WARN ok).
Target: IronPPT.Models.Shape.html
-->

## Injected overview (Markdown)

Drawing a shape onto a slide, an arrow, rectangle, or circle that structures content or draws the eye, runs through `Shape`. It models a single graphic placed on a slide, with its own type, colors, and identity, so a developer can build diagrams and callouts directly from code.

A developer creates one with `new Shape()` and adds it to a slide through `Slide.AddShape`, which accepts the shape and returns an `IShape`. The `Type` property, a `Nullable<ShapeType>`, picks the geometry from the `ShapeType` enum (a triangle, rectangle, or one of the other preset forms). `FillColor` and `OutlineColor` are `IColor` values that set the interior and the border. `Name` gives the shape a readable label and `Id` (a `uint`) is its identifier within the slide. The `Clone` method returns a copy as an `IContentElement`, handy for repeating a styled shape across slides.

Set `Type` first so the shape has a geometry, then assign `FillColor` and `OutlineColor` for its look; size and position come from the inherited graphic members. The `ShapeType` enum covers the common preset forms, so picking a member is how a developer chooses between an arrow, a rectangle, an oval, and the rest without drawing geometry by hand. Because `Shape` is a content element, the same instance can be added, cloned, and re-styled without rebuilding it from scratch, which keeps diagram-generation code compact. When a slide needs several similar shapes, build one, set its type and colors, and use `Clone` to stamp out the variants rather than repeating the setup.

```csharp
var shape = new Shape();
shape.Type = ShapeType.Triangle;
shape.OutlineColor = outlineColor;
slide.AddShape(shape);
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) builds and colors a shape, the [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) creates slides to place them on, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) arranges the slides that hold them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Shape Class - IronPPT C# API Reference`
- v2 (human): `Shape: Add Shapes to Slides in C#`
- v3 (balanced): `Shape Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add shapes to a slide in C# with the IronPPT Shape class: set Type from ShapeType, set FillColor and OutlineColor, and add it with Slide.AddShape.`
- v2 (human): `Draw arrows, rectangles, and circles on a slide in C# with the IronPPT Shape class: choose a Type, set its colors, and add it to a slide.`
- v3 (balanced): `Reference for the IronPPT Shape class in C#: a slide graphic with a ShapeType, FillColor and OutlineColor, an Id and Name, and a Clone method.`

---

## Structured data

**TechArticle abstract**

> Shape models a single graphic placed on an IronPPT slide in C#. Create one with new Shape(), set Type from the ShapeType enum for its geometry, and assign FillColor and OutlineColor for its look. Slide.AddShape adds it and returns an IShape, while Name, Id, and Clone identify and copy it.

**FAQPage entries**

```json
[
  {
    "question": "Where does Shape live in the IronPPT API?",
    "answer": "Shape is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from BaseGraphicContainer and implements IShape, IGraphic, IContentElement, and related interfaces."
  },
  {
    "question": "How do you add a shape to a slide in C#?",
    "answer": "Create a Shape with new Shape(), set its Type to a ShapeType member such as Triangle, and assign FillColor and OutlineColor. Pass it to Slide.AddShape, which adds the shape and returns an IShape."
  },
  {
    "question": "How do you reuse the same shape across slides?",
    "answer": "Call Clone on the Shape to get a copy as an IContentElement, then add the copy to another slide. This repeats a styled shape without rebuilding its type and colors each time."
  }
]
```
