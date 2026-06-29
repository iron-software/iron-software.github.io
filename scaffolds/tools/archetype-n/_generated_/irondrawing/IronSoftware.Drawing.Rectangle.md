<!--
N-Full (class, 29 members). Frame B (identity-by-role). IronDrawing.
Rectangle constructors, X/Y/Width/Height/Bottom/Left/Right/Top, Units, Contains, ConvertTo, implicit operators verified from PAGE FACTS 2026-06-22.
Target: IronSoftware.Drawing.Rectangle API reference
-->

## Injected overview (Markdown)

A cross-platform rectangle record, `Rectangle` is the single geometry type that bridges `System.Drawing.Rectangle`, `SkiaSharp.SKRect`, `SixLabors.ImageSharp.Rectangle`, and `Microsoft.Maui.Graphics.Rect` without manual conversion code. Wherever a public IronDrawing API accepts or returns a region of an image, `Rectangle` is the currency, and implicit cast operators handle the translation to and from every supported framework type automatically.

Construct a `Rectangle` with coordinates and dimensions directly, using `Rectangle(int x, int y, int width, int height, MeasurementUnits units)`, or from a `Point` and a `Size` pair via `Rectangle(Point point, Size size, MeasurementUnits units)`. The `MeasurementUnits` property records whether the values are expressed in pixels, inches, or millimetres, and `ConvertTo(MeasurementUnits toUnits, int dpi)` converts the rectangle to a different unit system at a given DPI, defaulting to 96. The default constructor produces a zero-origin, zero-size rectangle ready for property assignment.

**Geometry properties** cover every edge and dimension needed for layout and hit-testing work:

- Coordinates and size: `X`, `Y`, `Width`, `Height`
- Derived edges (read-only): `Left`, `Right`, `Top`, `Bottom`
- Unit metadata: `Units`

`Contains(int x, int y)` tests whether a point falls inside the rectangle, which is useful for click-region checks or crop-boundary validation.

The implicit cast operators are the practical heart of the class. Assigning a `Rectangle` to a `System.Drawing.RectangleF`, `SkiaSharp.SKRect`, `SkiaSharp.SKRectI`, `Microsoft.Maui.Graphics.Rect`, or `Microsoft.Maui.Graphics.RectF` variable requires no explicit conversion. The reverse direction works equally: any of those types assigned to a `Rectangle` variable is silently promoted. This symmetry means a method that accepts `Rectangle` can receive a `System.Drawing.Rectangle` from a caller who has never heard of IronDrawing, and a method that returns `Rectangle` can feed a SkiaSharp pipeline without an adapter layer.

```csharp
using IronSoftware.Drawing;

// Construct from coordinates; units default to pixels via MeasurementUnits.Pixel
var crop = new Rectangle(10, 20, 640, 480, MeasurementUnits.Pixel);

// Implicit cast to SkiaSharp without any explicit conversion
SkiaSharp.SKRect skRect = crop;

// Promote a System.Drawing.Rectangle into IronDrawing seamlessly
System.Drawing.Rectangle sysCrop = new System.Drawing.Rectangle(0, 0, 320, 240);
Rectangle ironRect = sysCrop;

// Unit conversion: pixels to inches at 150 DPI
Rectangle inchRect = ironRect.ConvertTo(MeasurementUnits.Inch, 150);

// Point containment check
bool hit = crop.Contains(100, 200);
```

Explore the [IronDrawing get-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for installation, the [drawing docs](https://ironsoftware.com/open-source/csharp/drawing/docs/) for the full type catalogue, and the [image cropping example](https://ironsoftware.com/open-source/csharp/drawing/examples/image-crop/) for a practical `Rectangle` workflow.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Rectangle Class - IronDrawing C# API Reference`
- v2 (human): `Rectangle: Cross-Platform Geometry in C#`
- v3 (balanced): `Rectangle Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use IronDrawing Rectangle in C# to define image regions with implicit casts to System.Drawing, SkiaSharp, ImageSharp, and MAUI rectangle types.`
- v2 (human): `IronDrawing Rectangle bridges System.Drawing, SkiaSharp, ImageSharp, and MAUI in C# with zero-conversion implicit casts and unit conversion support.`
- v3 (balanced): `Reference for IronDrawing Rectangle in C#: cross-platform geometry with implicit casts to SkiaSharp, ImageSharp, MAUI, and System.Drawing types.`

---

## Structured data

**TechArticle abstract**

> Defining image regions and crop boundaries in C# across multiple rendering frameworks is handled by the IronSoftware.Drawing Rectangle class. Construct it from coordinates and a MeasurementUnits value, read derived edges through Left, Right, Top, and Bottom, test point containment with Contains, and convert between unit systems with ConvertTo. Implicit cast operators provide zero-code interoperability with System.Drawing.Rectangle, SkiaSharp.SKRect, SkiaSharp.SKRectI, SixLabors.ImageSharp.Rectangle, Microsoft.Maui.Graphics.Rect, and their floating-point variants in both directions.

**FAQPage entries**

```json
[
  {
    "question": "Where does Rectangle live in the IronDrawing API?",
    "answer": "Rectangle is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from Object and is constructed with new Rectangle(), new Rectangle(Point, Size, MeasurementUnits), or new Rectangle(int, int, int, int, MeasurementUnits)."
  },
  {
    "question": "How do you convert an IronDrawing Rectangle to a SkiaSharp or System.Drawing rectangle?",
    "answer": "Assign the Rectangle directly to a variable of the target type. Implicit cast operators cover SKRect, SKRectI, System.Drawing.Rectangle, System.Drawing.RectangleF, Microsoft.Maui.Graphics.Rect, and RectF with no explicit conversion call required."
  },
  {
    "question": "How do you change the unit system of a Rectangle from pixels to inches or millimetres?",
    "answer": "Call ConvertTo(MeasurementUnits toUnits, int dpi) on the Rectangle, passing the target MeasurementUnits value and the DPI of the context (default 96). The method returns a new Rectangle expressed in the requested units."
  },
  {
    "question": "How do you test whether a point falls inside a Rectangle?",
    "answer": "Call Contains(int x, int y) on the Rectangle. It returns true when the given coordinates lie within the rectangle's bounds, which is useful for hit-testing crop regions or validating click coordinates."
  }
]
```