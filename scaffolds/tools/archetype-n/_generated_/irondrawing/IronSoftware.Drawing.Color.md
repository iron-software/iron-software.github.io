<!--
N-Full (class, 189 members). Frame B (identity-by-role). IronDrawing.
Color constructors (int r,g,b), (int a,r,g,b), (string colorcode) verified; named fields (Black, Red, etc.) verified; implicit cast contract verified from summary.
Target: https://ironsoftware.com/open-source/csharp/drawing/object-reference/api/IronSoftware.Drawing.Color.html
-->

## Injected overview (Markdown)

Cross-platform color representation in .NET starts with `Color`, the central value type in `IronSoftware.Drawing` that bridges every major color system through implicit casting. Wherever a public API accepts or returns a `Color`, callers can pass a `System.Drawing.Color`, a `SkiaSharp.SKColor`, a `SixLabors.ImageSharp.Color`, or a `Microsoft.Maui.Graphics.Color` without any explicit conversion code, because the implicit operators handle the translation automatically. This makes `Color` the practical glue layer for cross-framework image processing pipelines on Windows, macOS, Linux, iOS, Android, NanoServer, IIS, Azure, AWS, and Google Compute.

**Constructing a color** takes three forms. Supply red, green, and blue channels as integers with `new Color(int red, int green, int blue)`, add an alpha channel with `new Color(int alpha, int red, int green, int blue)`, or parse a CSS-style hex string directly with `new Color(string colorcode)`. The string constructor accepts formats such as `"#FF5733"` and `"#80FF5733"` (with alpha), keeping color definitions readable in configuration and markup scenarios.

**Named color constants** cover the full web-color palette as `static readonly` fields. Common picks include `Color.Black`, `Color.White`, `Color.Transparent`, `Color.Red`, `Color.Green`, `Color.Blue`, `Color.Cyan`, `Color.Fuchsia`, `Color.Gold`, and more than 140 additional named entries. Using a named constant instead of a raw ARGB tuple improves readability and avoids off-by-one channel errors.

The named fields, constructors, and implicit cast operators together cover the three everyday tasks: picking a standard color, building a precise custom color, and passing that color into any third-party imaging library without adapter code.

```csharp
using IronSoftware.Drawing;

// Named constant, no conversion needed when passing to SkiaSharp or ImageSharp APIs
Color background = Color.AliceBlue;

// Custom opaque color from RGB channels
Color brand = new Color(34, 139, 34);

// Semi-transparent color from a hex string (alpha + RGB)
Color overlay = new Color("#80FF5733");

Console.WriteLine(overlay.ToString());
```

Explore further at the [IronDrawing getting-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/), the [color usage examples](https://ironsoftware.com/open-source/csharp/drawing/examples/color/), the [cross-platform compatibility how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/cross-platform-color/), and the [IronDrawing docs hub](https://ironsoftware.com/open-source/csharp/drawing/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Color Class - IronDrawing C# API Reference`
- v2 (human): `Color: Cross-Platform Colors in C# .NET`
- v3 (balanced): `Color Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use IronSoftware.Drawing.Color in C# to create colors from RGB, ARGB, or hex strings and cast implicitly to System.Drawing, SkiaSharp, and ImageSharp.`
- v2 (human): `Define and share colors across SkiaSharp, ImageSharp, and MAUI in C# with IronDrawing's Color class: named constants, ARGB constructors, and implicit casts.`
- v3 (balanced): `Reference for IronSoftware.Drawing.Color in C#: construct colors from RGB or hex, use 140+ named constants, and cast implicitly to all major .NET color types.`

---

## Structured data

**TechArticle abstract**

> Cross-platform color representation in C# .NET is handled by the IronSoftware.Drawing.Color class in IronSoftware.Drawing.dll. Construct a color from integer RGB or ARGB channels, or parse a hex string directly. Over 140 named static readonly fields cover the full web-color palette. Implicit cast operators allow a Color value to flow into System.Drawing.Color, SkiaSharp.SKColor, SixLabors.ImageSharp.Color, and Microsoft.Maui.Graphics.Color without explicit conversion, making it the interoperability layer for cross-framework image processing on every platform .NET supports.

**FAQPage entries**

```json
[
  {
    "question": "Where does Color live in the IronDrawing API?",
    "answer": "Color is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from System.Object and is the central color type used across IronDrawing and the broader Iron Software product suite."
  },
  {
    "question": "How do you create a custom color with IronSoftware.Drawing.Color?",
    "answer": "Use one of three constructors: new Color(int red, int green, int blue) for an opaque RGB color, new Color(int alpha, int red, int green, int blue) to include transparency, or new Color(string colorcode) to parse a CSS hex string such as \"#FF5733\" or \"#80FF5733\"."
  },
  {
    "question": "How does Color work with SkiaSharp, ImageSharp, and MAUI color types?",
    "answer": "IronSoftware.Drawing.Color defines implicit cast operators for System.Drawing.Color, SkiaSharp.SKColor, SixLabors.ImageSharp.Color, and Microsoft.Maui.Graphics.Color. Assign or pass a Color value wherever those types are expected and the conversion happens automatically, with no explicit cast required."
  },
  {
    "question": "What named color constants does Color provide?",
    "answer": "Color exposes more than 140 static readonly fields covering the full web-color palette, including Color.Black, Color.White, Color.Red, Color.Green, Color.Blue, Color.Gold, Color.Cyan, Color.Fuchsia, Color.AliceBlue, Color.Crimson, and many more. Color.Empty represents an uninitialized color."
  }
]
```