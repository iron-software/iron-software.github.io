<!--
N-Full (class, 12 members). Frame B (identity-by-role). IronDrawing.
PointF(float,float), X, Y, Offset, implicit operators verified from PAGE FACTS 2026-06-22.
Target: IronSoftware.Drawing.PointF API reference page.
-->

## Injected overview (Markdown)

Precise sub-pixel positioning in cross-platform .NET graphics relies on `PointF`, a lightweight coordinate record that stores an ordered pair of single-precision floating-point values as `X` and `Y`. Wherever IronDrawing needs to express a location on a two-dimensional plane, such as a text anchor, a crop origin, or a shape vertex, `PointF` is the common currency that travels between rendering engines without losing fractional precision.

Construct a point with `new PointF(float x, float y)` and read or update its position through the `X` and `Y` properties, both of which are mutable. To shift a point relative to its current location, call `Offset(float dx, float dy)`, which adds the supplied deltas directly to `X` and `Y` in place. This avoids allocating a replacement instance when only a translation is needed, which is common in layout loops that nudge elements by a fixed margin.

`PointF` integrates smoothly with SkiaSharp through a set of implicit conversion operators. An `SKPoint` converts to `PointF` automatically, and a `PointF` converts back to `SKPoint`, so code that mixes IronDrawing APIs with direct SkiaSharp calls requires no explicit casts. Additional implicit operators cover the `System.Drawing.PointF` type and related platform point types, meaning a value obtained from one graphics subsystem passes directly into another. `Equals` and `GetHashCode` are overridden so that `PointF` instances compare by coordinate value rather than reference, making them safe to use as dictionary keys or in LINQ distinct operations.

Because `PointF` derives from `Object` and carries no unmanaged resources, no disposal step is required. It is a plain, allocatable value-holder that fits naturally into collections, tuples, and return types throughout the IronDrawing surface.

```csharp
using IronSoftware.Drawing;

// Build a point, shift it, then use it as an SKPoint implicitly.
var origin = new PointF(12.5f, 34.75f);
origin.Offset(5f, -10f);          // origin is now (17.5, 24.75)

SkiaSharp.SKPoint skPt = origin;  // implicit operator, no cast needed
Console.WriteLine($"SKPoint: {skPt.X}, {skPt.Y}");
```

Explore further with the [IronDrawing getting-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/), the [coordinate and geometry how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/coordinate-geometry/), the [AnyBitmap drawing examples](https://ironsoftware.com/open-source/csharp/drawing/examples/anybitmapobject/), and the [IronDrawing API documentation hub](https://ironsoftware.com/open-source/csharp/drawing/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PointF Class - IronDrawing C# API Reference`
- v2 (human): `PointF: 2D Float Coordinates in C#`
- v3 (balanced): `PointF Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use PointF in IronDrawing C# to store float X and Y coordinates, offset positions, and convert implicitly to SKPoint and System.Drawing.PointF.`
- v2 (human): `PointF stores precise 2D coordinates in IronDrawing for .NET. Set X and Y, shift with Offset, and convert seamlessly to SKPoint or System.Drawing.PointF.`
- v3 (balanced): `Reference for IronSoftware.Drawing.PointF in C#: float X/Y coordinates, Offset for translation, and implicit conversion to SKPoint and platform point types.`

---

## Structured data

**TechArticle abstract**

> Precise sub-pixel positioning in cross-platform .NET graphics relies on the IronSoftware.Drawing.PointF class, which stores an ordered pair of single-precision floating-point values as X and Y. Construct it with PointF(float x, float y), translate it in place with Offset(float dx, float dy), and pass it directly to SkiaSharp or System.Drawing APIs through implicit conversion operators. Equals and GetHashCode are overridden for value-based comparison. PointF lives in the IronSoftware.Drawing namespace and is shipped in IronSoftware.Drawing.dll.

**FAQPage entries**

```json
[
  {
    "question": "Where does PointF live in the IronDrawing API?",
    "answer": "PointF is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from System.Object and is constructed with new PointF(float x, float y)."
  },
  {
    "question": "How do you shift a PointF position without creating a new instance?",
    "answer": "Call Offset(float dx, float dy) on an existing PointF. It adds dx to X and dy to Y in place, avoiding a new allocation. This is useful in layout loops that apply a fixed margin to many points."
  },
  {
    "question": "How do you convert a PointF to an SKPoint in C#?",
    "answer": "PointF provides an implicit operator to SKPoint, so assigning a PointF to an SKPoint variable or passing it to an SKPoint parameter requires no explicit cast. The reverse conversion from SKPoint to PointF is also implicit."
  },
  {
    "question": "Can PointF instances be compared by value or used as dictionary keys?",
    "answer": "Yes. PointF overrides Equals and GetHashCode so that two instances with identical X and Y values are considered equal. This makes PointF safe to use as a dictionary key or in LINQ operations such as Distinct."
  }
]
```