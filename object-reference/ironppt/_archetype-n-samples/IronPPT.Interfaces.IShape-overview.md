<!--
N-Full / interface. Frame B. Implementors: Shape, TextBox. IronPPT. Members verified 2026-06-23.
IShape : IGraphic, IContentElement. Target: IronPPT.Interfaces.IShape.html
-->

## Injected overview (Markdown)

`IShape` is the contract you work through whenever code touches a shape on a slide, whether that shape is a rectangle, a picture frame, or a text box. It gives a uniform way to read and adjust a shape's appearance and placement without caring which concrete kind of shape it actually is, so a loop over a slide's shapes can recolor, rename, or reposition each one through the same members.

The concrete implementors in IronPPT are `Shape` and `TextBox` (a `TextBox` is a `Shape` that also holds text). A developer rarely names the interface directly: shapes arrive already typed through `ISlide.Shapes`, which is a `List<IShape>`, or are added with `AddShape`. Working against `IShape` rather than a concrete class keeps shape-editing code generic across those kinds and easy to test with a stub.

The everyday members are `FillColor` and `OutlineColor` (both typed as `IColor`) for appearance, `Name` and `Type` for identity, and the geometry methods `Resize`, `Rotate`, `FlipHorizontal`, and `FlipVertical`. `Type` is a `Nullable<ShapeType>` describing what the shape is, `Index` reports its place in the slide's shape list, and `Id` and `Clone` round out the surface. Position and size members such as `Height`, `Width`, `Angle`, and `Position` are inherited from `IGraphic`, so a single shape exposes both its own appearance surface and the graphic geometry every slide element shares. Because the same members exist on every implementor, code that recolors or repositions one shape works unchanged across rectangles, pictures, and text boxes, which is what makes batch edits over `ISlide.Shapes` practical.

```csharp
foreach (IShape shape in slide.Shapes)
{
    shape.Name = "Logo";
    shape.Rotate(90);
}
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) adds a shape to a slide, the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through positioning elements on a slide, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) covers working with a slide's contents.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IShape Interface - IronPPT C# API Reference`
- v2 (human): `IShape: The Slide Shape Contract in C#`
- v3 (balanced): `IShape Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IShape is the IronPPT shape contract in C#: read FillColor, OutlineColor, Name, and Type, and call Resize, Rotate, and Flip on any slide shape.`
- v2 (human): `Edit any slide shape in C# through the IronPPT IShape contract: set fill and outline color, rename, resize, and rotate, implemented by Shape and TextBox.`
- v3 (balanced): `Reference for the IronPPT IShape interface in C#: the shape contract behind Shape and TextBox, with color, naming, and geometry members.`

---

## Structured data

**TechArticle abstract**

> Editing a shape on a slide in C# runs through the IronPPT IShape contract. It exposes FillColor and OutlineColor, Name and Type, and the geometry methods Resize, Rotate, FlipHorizontal, and FlipVertical, with Height, Width, and Position inherited from IGraphic. The implementors are Shape and TextBox, reached through ISlide.Shapes, so shape-editing code stays uniform across kinds.

**FAQPage entries**

```json
[
  {
    "question": "Where does IShape live in the IronPPT API?",
    "answer": "IShape is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IGraphic and IContentElement, so a shape carries both its own appearance members and inherited graphic geometry."
  },
  {
    "question": "What implements IShape in IronPPT?",
    "answer": "Shape and TextBox implement IShape; a TextBox is a Shape that also holds text. You usually receive them already typed through ISlide.Shapes, a List<IShape>, rather than constructing the interface directly."
  },
  {
    "question": "How do you change a shape's color in C#?",
    "answer": "Set the FillColor and OutlineColor properties, both typed as IColor, on any IShape. Use Name and Type to identify the shape, and Resize, Rotate, FlipHorizontal, or FlipVertical to adjust its geometry."
  }
]
```
