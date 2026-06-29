<!--
N-Full (inline shape content, 44 members -> bucket). Frame B (identity-by-role; sibling Shape uses A). IronWord.Models.
Verified 2026-06-23: public class ShapeContent : ContentElement, IWordShapeObject, IShape, IWordDocumentObject, IDocumentObject, ICloneable, IColored, IWordAbsolute, IAbsolute, IJsonSerializable. Base ContentElement.
Ctors: (ShapeType, RectangleF), (ShapeType, RectangleF, Color, Color), (List<IPathSegment>), (List<IPathSegment>, Color, Color).
Props (sel): Angle, BoundingBox, DistanceFrom*, FillColor, FlipHorizontal, FlipVertical, Height, HorizontalAlignment, Id, Index, Name, Points (List<IPathSegment>), StrokeColor, StrokeWeight, TextWrapBehavior, Type, VerticalAlignment, Width, ZOrder, ZPosition.
Methods: Get/Set DistanceFrom*(MeasurementUnit), GetHeight/GetWidth(MeasurementUnit), SetHeight/SetWidth(double,MeasurementUnit), Resize(int,int), Rotate(double), ToJson().
Cross-ref verified: Run(params ShapeContent[]), Run.AddShape(ShapeContent), Run.ExtractShapes() returns List<ShapeContent>.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ShapeContent.html
-->

## Injected overview (Markdown)

`ShapeContent` is the inline shape a developer adds inside a run so a figure flows with the surrounding text. It is the drawing that travels with the words, a rectangle, ellipse, or freeform path that sits in the text stream rather than being pinned to a fixed spot on the page. A developer reaches for it to embed a small graphic alongside content, and it is paired with `Shape`, the page-positioned drawing that does not flow with text.

A run owns its inline shapes: a `Run` accepts `ShapeContent` items in its constructor, `AddShape` inserts one, and `ExtractShapes` reads them back as a `List<ShapeContent>`. A developer creates a shape from a `ShapeType` and a bounding `RectangleF`, optionally passing fill and stroke `Color` values, or builds a freeform outline by passing a `List<IPathSegment>`. That places it in the content-building step, between the run and the path geometry it may carry.

The members group by job. Construction comes from the `ShapeType` plus `RectangleF` constructors or the path-based ones, and `Points` exposes the freeform geometry as a `List<IPathSegment>`. Appearance is set by `FillColor`, `StrokeColor`, `StrokeWeight`, and `Type`, with `Name`, `Id`, and `Index` identifying the shape. Sizing and placement use `Height`, `Width`, the distance-from-edge properties such as `DistanceFromTop` and `DistanceFromLeft`, `HorizontalAlignment`, and `VerticalAlignment`, all available as `Get` and `Set` method forms that take a `MeasurementUnit`, plus `BoundingBox`, `ZOrder`, and `ZPosition` for stacking and bounds. Transforms cover `Angle`, `Rotate`, `FlipHorizontal`, `FlipVertical`, and `Resize`, while `TextWrapBehavior` controls how text flows around it and `ToJson` serializes it. Prefer the `Set` methods over the raw properties whenever the unit matters.

```csharp
using IronWord.Models;
using IronWord.Models.Enums;

var shape = new ShapeContent(ShapeType.Rectangle, new RectangleF(0, 0, 100, 50));
shape.FillColor = Color.LightBlue;
new Run(shape);
```

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) covers placing visual content inline, the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) shows building runs, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ShapeContent Class - IronWord C# API`
- v2 (human): `ShapeContent: Inline Shapes in Word with C#`
- v3 (balanced): `ShapeContent Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add an inline shape to a Word run in C# with the IronWord ShapeContent class: build from ShapeType and RectangleF, set fill, size, and wrap.`
- v2 (human): `Embed a figure that flows with text in a Word document in C# with the IronWord ShapeContent class: a rectangle, ellipse, or freeform path.`
- v3 (balanced): `Reference for the IronWord ShapeContent class in C#: the inline shape added to a Run, with construction, appearance, sizing, and transforms.`

---

## Structured data

**TechArticle abstract**

> Adding an inline shape to a Word run in C# runs through the IronWord ShapeContent class. Construct one from a ShapeType and a RectangleF, or from a List of IPathSegment for freeform paths. FillColor, StrokeColor, and Type set appearance, the SetHeight, SetWidth, and DistanceFrom methods size and place it in a MeasurementUnit, and a Run accepts it through AddShape. ToJson serializes it.

**FAQPage entries**

```json
[
  {
    "question": "Where does ShapeContent live in the IronWord API?",
    "answer": "ShapeContent is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ContentElement and implements IWordShapeObject and IShape, representing an inline shape added to a Run."
  },
  {
    "question": "How do you add an inline shape to a document in C#?",
    "answer": "Create a ShapeContent from a ShapeType and a RectangleF, set FillColor and StrokeColor if needed, then add it to a Run with AddShape or the Run constructor. ExtractShapes reads the inline shapes back as a List of ShapeContent."
  },
  {
    "question": "What is the difference between ShapeContent and Shape in IronWord?",
    "answer": "ShapeContent is an inline shape that flows with the text inside a Run. Shape is a drawing positioned on the page with its own coordinates. Use ShapeContent when the figure should move with the surrounding content and Shape for fixed page graphics."
  }
]
```
