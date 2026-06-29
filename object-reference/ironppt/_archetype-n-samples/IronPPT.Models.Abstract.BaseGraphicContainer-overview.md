<!--
N-Full abstract class. Frame A (subject-verb). Sibling of BaseGraphic - different frame, different framing.
IronPPT.Models.Abstract namespace. Base ParentElement; implements ICloneableElement, IParentElement, IGraphic, IContentElement.
Members verified 2026-06-23 against IronPPT.Models.Abstract.BaseGraphicContainer.html:
Angle (Rotation), Height (DocUnit), Position (ElementPosition), Width (DocUnit),
FlipHorizontal, FlipVertical, Resize(int,int), Rotate(double).
Derived concrete type verified: Shape (IronPPT.Models.Shape : BaseGraphicContainer).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Abstract.BaseGraphicContainer.html
-->

## Injected overview (Markdown)

`BaseGraphicContainer` gives a graphic that also holds child content the same geometry every standalone graphic has. It combines the size, position, and rotation surface of a graphic with the child-handling of a parent element, which is what a shape needs: a shape is positioned and rotated like any graphic yet contains the text or elements drawn inside it. The concrete type that derives from it is `Shape`.

A container is never created as a `BaseGraphicContainer` directly, since the class is abstract; a developer works with `Shape` and reaches these members through it. Because it derives from `ParentElement`, a shape both carries children and exposes the geometry below, so the container is where the two responsibilities meet for any graphic that wraps content.

`Position` is the container's `ElementPosition`, `Width` and `Height` are `DocUnit` sizes, and `Angle` is its `Rotation`. `Resize` takes a width and height as integers, `Rotate` turns the container by an angle, and `FlipHorizontal` and `FlipVertical` mirror it. These behave exactly as they do on a plain graphic, so a shape is placed, sized, rotated, and flipped through the same calls, and its child content moves with it. Adjust the geometry on the container and the content it holds follows, which keeps a shape and its contents aligned without repositioning each piece.

```csharp
void Arrange(BaseGraphicContainer container)
{
    container.Resize(500, 200);
    container.FlipHorizontal();
}
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) builds a shape on a slide, the [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) covers slide content, and the [Shape reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Shape.html) documents the concrete container that derives from this base.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BaseGraphicContainer Class - IronPPT C# API`
- v2 (human): `BaseGraphicContainer: Graphics That Hold Content`
- v3 (balanced): `BaseGraphicContainer Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT BaseGraphicContainer base in C# adds geometry to a content-holding graphic: Position, Width, Height, Resize, Rotate, flip.`
- v2 (human): `Position and size a content-holding graphic in C# with the IronPPT BaseGraphicContainer base, the geometry behind a slide Shape.`
- v3 (balanced): `Reference for the IronPPT BaseGraphicContainer class in C#: geometry plus child content for graphics like Shape, with Resize and Rotate.`

---

## Structured data

**TechArticle abstract**

> Combine graphic geometry with child content in C# through the IronPPT BaseGraphicContainer base. Position is an ElementPosition, Width and Height are DocUnit sizes, and Angle is a Rotation, while Resize, Rotate, FlipHorizontal, and FlipVertical move and shape the container. It derives from ParentElement so it also holds children, and the concrete type that derives from it is Shape.

**FAQPage entries**

```json
[
  {
    "question": "Where does BaseGraphicContainer live in the IronPPT API?",
    "answer": "BaseGraphicContainer is an abstract class in the IronPPT.Models.Abstract namespace, shipped in IronPPT.dll. It derives from ParentElement and implements ICloneableElement, IParentElement, IGraphic, and IContentElement, joining graphic geometry to child content."
  },
  {
    "question": "What derives from BaseGraphicContainer in IronPPT?",
    "answer": "Shape derives from BaseGraphicContainer, gaining both the geometry members (Position, Width, Height, Resize, Rotate, flip) and the child-handling it inherits from ParentElement. Because the base is abstract, you work with Shape."
  },
  {
    "question": "How does BaseGraphicContainer differ from BaseGraphic?",
    "answer": "BaseGraphic is the geometry base for a standalone graphic such as Image, while BaseGraphicContainer also derives from ParentElement so it holds child content, which is what a Shape needs. Both expose the same Position, size, rotation, and flip members."
  }
]
```
