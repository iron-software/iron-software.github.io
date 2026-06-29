<!--
N-Full abstract class. Frame B (identity-by-role). IronPPT.Models.Abstract namespace.
Base ContentElement; implements ICloneableElement, IGraphic, IContentElement.
Members verified 2026-06-23 against IronPPT.Models.Abstract.BaseGraphic.html:
Angle (Rotation), Height (DocUnit), Position (ElementPosition), Width (DocUnit),
FlipHorizontal, FlipVertical, Resize(int,int), Rotate(double).
Derived concrete type verified: Image (IronPPT.Models.Image : BaseGraphic).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Abstract.BaseGraphic.html
-->

## Injected overview (Markdown)

`BaseGraphic` is the shared base every standalone graphic on a slide inherits, the place where size, position, rotation, and flipping are defined once. A developer rarely names it directly; the concrete type to reach for is `Image`, which derives from it. The base matters because the geometry members below are the same whether the graphic is an image or another standalone graphic, so learning them once covers the family.

Because it is abstract, a graphic is not created as a `BaseGraphic`; a developer works with a derived type such as `Image` and then positions and sizes it through the inherited members. A graphic obtained from the slide can be cast or held as `BaseGraphic` when only the geometry matters, which is why the `IGraphic` contract it implements describes exactly this shared surface.

`Position` is the graphic's `ElementPosition` on the slide, while `Width` and `Height` are `DocUnit` values for its size and `Angle` is its `Rotation`. `Resize` sets width and height together from two integers, and `Rotate` turns the graphic by a given angle. `FlipHorizontal` and `FlipVertical` mirror it across the respective axis. These members move and shape the graphic without touching its content, so an image can be repositioned, resized, rotated, or flipped through the same calls used for any other standalone graphic.

```csharp
void Place(BaseGraphic graphic)
{
    graphic.Resize(400, 300);
    graphic.Rotate(15);
}
```

The [manage image how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-image/) covers placing and sizing an image on a slide, the [add image example](https://ironsoftware.com/csharp/ppt/examples/add-image/) shows one in a worked slide, and the [Image reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Image.html) documents the concrete graphic that derives from this base.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BaseGraphic Class - IronPPT C# API Reference`
- v2 (human): `BaseGraphic: Position & Size Slide Graphics in C#`
- v3 (balanced): `BaseGraphic Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Position and size slide graphics in C# with the IronPPT BaseGraphic base: Position, Width, Height, Angle, Resize, Rotate, and flip.`
- v2 (human): `The IronPPT BaseGraphic base in C# defines size, position, and rotation for slide graphics like Image: Resize, Rotate, and flip.`
- v3 (balanced): `Reference for the IronPPT BaseGraphic class in C#: the geometry base for slide graphics, with Position, Width, Height, and Rotate.`

---

## Structured data

**TechArticle abstract**

> Position, size, and rotate a standalone slide graphic in C# through the IronPPT BaseGraphic base. Position is its ElementPosition, Width and Height are DocUnit values, and Angle is a Rotation. Resize sets width and height together, Rotate turns the graphic, and FlipHorizontal and FlipVertical mirror it. BaseGraphic is abstract; the concrete graphic that derives from it is Image.

**FAQPage entries**

```json
[
  {
    "question": "Where does BaseGraphic live in the IronPPT API?",
    "answer": "BaseGraphic is an abstract class in the IronPPT.Models.Abstract namespace, shipped in IronPPT.dll. It derives from ContentElement and implements ICloneableElement, IGraphic, and IContentElement, defining the shared geometry for slide graphics."
  },
  {
    "question": "What derives from BaseGraphic in IronPPT?",
    "answer": "Image derives from BaseGraphic, inheriting its Position, Width, Height, Angle, Resize, Rotate, and flip members. Because BaseGraphic is abstract you work with the derived type and use the inherited geometry members to place and size it."
  },
  {
    "question": "How do you resize and rotate a slide graphic in C#?",
    "answer": "Call Resize with a width and height to size the graphic and Rotate with an angle to turn it. Set Position to an ElementPosition to move it, and use FlipHorizontal or FlipVertical to mirror it. These inherited members work the same on any graphic that derives from BaseGraphic."
  }
]
```
