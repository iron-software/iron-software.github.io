<!--
N-Full (class, 24 members). Frame B (identity-by-role). IronDrawing.
RectangleF constructors, X/Y/Width/Height/Units, Contains, ConvertTo, implicit operators verified.
Target: IronSoftware.Drawing.RectangleF API reference page.
-->

## Injected overview (Markdown)

Cross-platform rectangle geometry in floating-point coordinates becomes portable across every major .NET imaging library when you use `RectangleF` from `IronSoftware.Drawing`. A single value of this type flows without explicit casting into `System.Drawing.RectangleF`, `SkiaSharp.SKRect`, `SixLabors.ImageSharp.RectangleF`, and `Microsoft.Maui.Graphics.Rect`, so a method that accepts or returns `IronSoftware.Drawing.RectangleF` works transparently with whichever graphics stack the caller already uses.

Construct a rectangle with `new RectangleF(float x, float y, float width, float height, MeasurementUnits units)` or with a `PointF` and `SizeF` pair. The `Units` property records whether the values are pixels, inches, or another `MeasurementUnits` member, and `ConvertTo(MeasurementUnits toUnits, int dpi)` reprojects the rectangle into a different unit system at a given DPI, defaulting to 96. The derived edges `Left`, `Top`, `Right`, and `Bottom` are computed from `X`, `Y`, `Width`, and `Height`, so you never have to calculate bounds manually. `Contains(int x, int y)` tests whether a pixel coordinate falls inside the rectangle, which is useful for hit-testing regions in image-processing pipelines.

The implicit operator set is the key design feature. Assigning an `IronSoftware.Drawing.RectangleF` to a `SkiaSharp.SKRect` variable, or passing a `Microsoft.Maui.Graphics.Rect` where an `IronSoftware.Drawing.RectangleF` is expected, requires no cast syntax. The same implicit conversions work in both directions for `System.Drawing.RectangleF`, `SkiaSharp.SKRect`, `Microsoft.Maui.Graphics.RectF`, and `Microsoft.Maui.Graphics.Rect`. This makes `RectangleF` a practical neutral currency type for library APIs that need to stay decoupled from any one imaging dependency.

Runtime targets include .NET 7, .NET 6, .NET 5, .NET Core, and .NET Standard, and the type runs on Windows, macOS, Linux, NanoServer, iOS, Android, and cloud environments such as Azure, AWS, and Google Compute.

```csharp
using IronSoftware.Drawing;
using SkiaSharp;

// Construct with explicit units
RectangleF region = new RectangleF(10f, 20f, 200f, 150f, MeasurementUnits.Pixels);

// Derived edges
Console.WriteLine($"Right={region.Right}, Bottom={region.Bottom}");

// Hit-test a coordinate
bool hit = region.Contains(50, 80);

// Convert to inches at 300 DPI
RectangleF inches = region.ConvertTo(MeasurementUnits.Inches, 300);

// Implicit cast to SkiaSharp - no explicit conversion needed
SKRect skRect = region;
```

Explore further at the [IronDrawing getting-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/), the [drawing docs overview](https://ironsoftware.com/open-source/csharp/drawing/docs/), the [cross-platform compatibility how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/cross-platform-compatibility/), and the [rectangle usage examples](https://ironsoftware.com/open-source/csharp/drawing/examples/rectangle/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RectangleF Class - IronDrawing C# API Reference`
- v2 (human): `RectangleF: Cross-Platform Rectangles in C#`
- v3 (balanced): `RectangleF Class | IronDrawing .NET API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use IronSoftware.Drawing.RectangleF in C# for cross-platform float rectangles with implicit casts to SkiaSharp, ImageSharp, MAUI, and System.Drawing.`
- v2 (human): `Define and convert float rectangles in C# that cast implicitly to SkiaSharp, ImageSharp, MAUI, and System.Drawing with IronDrawing RectangleF.`
- v3 (balanced): `Reference for IronSoftware.Drawing.RectangleF: portable float rectangles in .NET with implicit conversion to SkiaSharp, ImageSharp, and MAUI types.`

---

## Structured data

**TechArticle abstract**

> Cross-platform rectangle geometry in floating-point coordinates becomes portable across every major .NET imaging library through IronSoftware.Drawing.RectangleF. Construct it with pixel or unit-aware coordinates, read derived edges via Left, Top, Right, and Bottom, test point containment with Contains, and reproject units with ConvertTo. Implicit operators eliminate explicit casts when exchanging values with System.Drawing.RectangleF, SkiaSharp.SKRect, SixLabors.ImageSharp.RectangleF, and Microsoft.Maui.Graphics.Rect, making RectangleF a neutral currency type for cross-library image-processing APIs on .NET 5 through .NET 7, .NET Core, and all major operating systems.

**FAQPage entries**

```json
[
  {
    "question": "Where does RectangleF live in the IronDrawing API?",
    "answer": "RectangleF is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from Object and is constructed directly with new RectangleF() or the coordinate/unit overloads."
  },
  {
    "question": "How do you convert an IronSoftware.Drawing.RectangleF to a SkiaSharp SKRect or System.Drawing.RectangleF?",
    "answer": "Assign or pass the RectangleF value directly. Implicit operator overloads handle the conversion to SKRect, System.Drawing.RectangleF, Microsoft.Maui.Graphics.Rect, and Microsoft.Maui.Graphics.RectF without any cast syntax."
  },
  {
    "question": "How do you change the measurement units of a RectangleF?",
    "answer": "Call ConvertTo(MeasurementUnits toUnits, int dpi) on the instance. The method returns a new RectangleF with coordinates reprojected into the target unit at the specified DPI, defaulting to 96 when omitted."
  },
  {
    "question": "Which .NET versions and platforms does RectangleF support?",
    "answer": "RectangleF targets .NET 5, .NET 6, .NET 7, and .NET Core, and runs on Windows, macOS, Linux, NanoServer, iOS, Android, and cloud platforms including Azure, AWS, and Google Compute."
  }
]
```