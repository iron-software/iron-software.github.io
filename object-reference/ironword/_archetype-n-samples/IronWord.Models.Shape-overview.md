<!--
N-Full (drawing shape, 34 members -> bucket). Frame A (subject-verb; sibling ShapeContent uses B). IronWord.Models.
Verified 2026-06-23: public class Shape : ContentElement, <obfuscated interface 'lyduza' ignored>. Base ContentElement.
Props (17): Angle, DistanceFromBottom, DistanceFromLeft, DistanceFromRight, DistanceFromTop, FillColor, Height, HorizontalAlignment, Id, Index, Name, StrokeColor, StrokeWeight, Type, VerticalAlignment, Width, WrapText.
Methods (17): Clone, FlipHorizontal, FlipVertical, Get/Set DistanceFrom*(Units), GetHeight/GetWidth(Units), SetHeight/SetWidth(double,Units), Resize(int,int), Rotate(double).
Note: Shape methods use Units enum (verified); ShapeContent uses MeasurementUnit. Pair disambiguation Shape vs ShapeContent in FAQ.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Shape.html
-->

## Injected overview (Markdown)

`Shape` represents a drawing object placed in a Word document, a rectangle, line, or other figure positioned on the page. A developer adds one to draw a callout, divider, or decorative figure, controlling its size, position, rotation, and fill. It is the visual element a developer works with for page graphics, and it is paired with `ShapeContent`, the inline shape that flows with text rather than being positioned on the page.

A shape carries its own position and dimensions, so it is placed by setting where it sits and how large it is rather than by inserting it into a text flow. That makes it the page-positioned counterpart in the document model: a developer sets its coordinates and size, then the figure renders at that spot.

The members fall into clear groups. Appearance is set by `FillColor`, `StrokeColor`, `StrokeWeight`, and `Type`, with `Name`, `Id`, and `Index` identifying the shape. Sizing uses `Height` and `Width` directly, or `GetHeight`, `GetWidth`, `SetHeight`, and `SetWidth`, which take a `Units` value so the dimension is unambiguous, plus `Resize` for a quick width-and-height resize. Positioning uses `HorizontalAlignment` and `VerticalAlignment` along with the `DistanceFromTop`, `DistanceFromBottom`, `DistanceFromLeft`, and `DistanceFromRight` properties and their `Get`/`Set` method forms that take a `Units` value, while `WrapText` controls how surrounding text flows around the shape. Transforms cover `Angle`, `Rotate`, `FlipHorizontal`, and `FlipVertical`, and `Clone` copies the shape. Prefer the `Set` methods over the raw distance and size properties whenever the unit matters.

```csharp
using IronWord.Models;
using IronWord.Models.Enums;

var shape = new Shape();
shape.SetWidth(100, Units.pt);
shape.SetHeight(50, Units.pt);
shape.Rotate(15);
```

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) covers placing visual content, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how drawing elements fit the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Shape Class - IronWord C# API Reference`
- v2 (human): `Shape: Draw & Position Figures in Word with C#`
- v3 (balanced): `Shape Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a positioned drawing to a Word document in C# with the IronWord Shape class: set FillColor, StrokeColor, size, position, and rotation.`
- v2 (human): `Draw and position a figure on a Word page in C# with the IronWord Shape class: set its fill, size, and offsets, then rotate or flip it.`
- v3 (balanced): `Reference for the IronWord Shape class in C#: a page-positioned drawing with fill, stroke, sizing, positioning, and transform members.`

---

## Structured data

**TechArticle abstract**

> Adding a positioned drawing to a Word document in C# runs through the IronWord Shape class. FillColor, StrokeColor, and Type set its appearance, SetHeight and SetWidth size it in a chosen Units value, and the DistanceFrom and Alignment members place it on the page. Angle, Rotate, FlipHorizontal, and FlipVertical transform it, and Clone copies it.

**FAQPage entries**

```json
[
  {
    "question": "Where does Shape live in the IronWord API?",
    "answer": "Shape is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ContentElement and represents a page-positioned drawing object with its own size, position, and fill."
  },
  {
    "question": "How do you size and position a shape in C#?",
    "answer": "Set Height and Width directly, or call SetHeight and SetWidth with a Units value for unambiguous dimensions. Place the shape with HorizontalAlignment, VerticalAlignment, and the DistanceFromTop, DistanceFromLeft, and related offset members."
  },
  {
    "question": "What is the difference between Shape and ShapeContent in IronWord?",
    "answer": "Shape is a drawing positioned on the page with its own coordinates. ShapeContent is the inline shape that flows with text inside a run. Use Shape for page graphics and ShapeContent when the figure should move with the surrounding text."
  }
]
```
