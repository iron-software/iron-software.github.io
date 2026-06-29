<!--
N-Mid / interface (4 members). Frame E (feature-fronted). Extends IContentElement. Implementors: Image, Shape, Slide, TextBox. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IGraphic.html
-->

## Injected overview (Markdown)

Size, position, and rotation on a slide live on `IGraphic`. The contract is the common geometry every visual element shares, so the same four members place a picture, a shape, a text box, or a whole slide. A developer works through it whenever a placed element needs to move, scale, or turn, regardless of what kind of element it is.

A graphic element is obtained from the slide it belongs to rather than created on its own, so an `IGraphic` reference usually comes from reading or adding an element and is then adjusted. The members are few and shared. `Width` and `Height` are `DocUnit` values setting the element's box. `Position` is an `ElementPosition` placing it on the slide. `Angle` is a `Rotation` turning it about its center. Because these are inherited wherever the contract is, code that lays out a slide can position any element through the same four members. Concrete implementors in IronPPT include `Image`, `Shape`, `TextBox`, and `Slide`, each adding its own members on top of this shared geometry.

```csharp
graphic.Width = new DocUnit(200);
graphic.Position = position;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places a shape, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) covers the slide that holds it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IGraphic Interface - IronPPT C# API Reference`
- v2 (human): `IGraphic: Size & Position Slide Elements in C#`
- v3 (balanced): `IGraphic Interface | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IGraphic interface in C#: shared geometry with Width, Height, Position, and Angle for slide elements like Image, Shape, and Slide.`
- v2 (human): `Size, place, and rotate any slide element in C# through the IronPPT IGraphic contract, implemented by Image, Shape, TextBox, and Slide.`
- v3 (balanced): `Reference for the IronPPT IGraphic interface in C#: Width, Height, Position, and Angle shared by Image, Shape, TextBox, and Slide.`

---

## Structured data

**TechArticle abstract**

> Size, place, and rotate any slide element in C# through the IronPPT IGraphic contract. It carries the shared geometry: Width and Height as DocUnit values, Position as an ElementPosition, and Angle as a Rotation. Concrete implementors include Image, Shape, TextBox, and Slide, each adding its own members on top of this geometry.

**FAQPage entries**

```json
[
  {
    "question": "Where does IGraphic live in the IronPPT API?",
    "answer": "IGraphic is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IContentElement and is implemented by visual element classes such as Image, Shape, TextBox, and Slide."
  }
]
```
