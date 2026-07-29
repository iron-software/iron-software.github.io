<!--
N-Full (class, 36 members). Frame B (identity-by-role lead). IronDrawing.
Size members verified from PAGE FACTS 2026-06-22.
Target: IronSoftware.Drawing.Size API reference page.
-->

## Injected overview (Markdown)

An ordered pair of integers, `Width` and `Height`, is what `Size` stores, making it the standard dimensional record for pixel measurements across IronDrawing. Anywhere a bitmap dimension, canvas bound, or layout rectangle needs to be expressed as discrete integer units, `Size` is the value that carries it. Because `Size` is a `ValueType`, it copies by value and requires no heap allocation, which keeps hot paths that create many dimensions allocation-free.

Construction is flexible. Pass a single `int` to set both axes to the same value, supply separate `width` and `height` integers, copy an existing `Size`, or convert from a `Point`. The static field `Size.Empty` gives a zero-by-zero sentinel without allocating. When a floating-point dimension is available, `Size.Truncate(SizeF)` converts it to integer coordinates by truncating toward zero, and `Size.Transform(Size, Matrix3x2)` applies an affine matrix and returns a `SizeF` for sub-pixel precision.

**Building and modifying:** `Add` and `Subtract` combine two sizes component-wise, mirrored by the `+` and `-` operators. Scalar multiplication and division are available through `*` and `/` with both `int` and `float` right-hand operands, the float variants returning `SizeF` to preserve fractional results. `Deconstruct` lets you unpack `Width` and `Height` directly in a tuple assignment.

**Conversions:** `Size` converts implicitly to `SizeF` and to `SKSizeI`, and accepts implicit conversions from `SKSizeI` and from several platform `Size` types, so it slots into SkiaSharp pipelines and cross-platform graphics APIs without explicit casts. An explicit cast to `Point` is available when the dimension needs to be treated as a coordinate.

**Equality and formatting:** `Equals(Size)`, `Equals(object)`, `GetHashCode`, the `==` and `!=` operators, and `ToString` round out the value-type contract.

```csharp
using IronSoftware.Drawing;

// Construct, combine, and deconstruct a Size
var canvas = new Size(1920, 1080);
var border = new Size(20);
Size padded = Size.Add(canvas, border);

var (w, h) = padded;
Console.WriteLine($"{w} x {h}");   // 1940 x 1100

// Scale down by half (integer result)
Size half = padded / 2;

// Implicit widening to SizeF for sub-pixel work
SizeF precise = half;
```

Explore the [IronDrawing get-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for installation, the [color and image primitives docs](https://ironsoftware.com/open-source/csharp/drawing/docs/) for how `Size` relates to `Rectangle` and `Point`, the [AnyBitmap how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/anybitmap/) for bitmap dimension workflows, and the [coordinate types example](https://ironsoftware.com/open-source/csharp/drawing/examples/coordinate-types/) for practical conversion patterns.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Size Class - IronDrawing C# API Reference`
- v2 (human): `Size: Integer Dimensions in C# with IronDrawing`
- v3 (balanced): `Size Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use the IronDrawing Size class in C# to store integer width and height pairs, with arithmetic operators, matrix transforms, and implicit SizeF conversion.`
- v2 (human): `Store pixel dimensions in C# with IronDrawing's Size struct: add, subtract, scale, transform, and convert to SizeF or SKSizeI with no extra allocation.`
- v3 (balanced): `Reference for IronSoftware.Drawing.Size in C#: integer width/height storage with arithmetic operators, Matrix3x2 transform, and implicit SizeF conversion.`

---

## Structured data

**TechArticle abstract**

> Pixel dimensions and canvas bounds in IronDrawing are expressed through the Size value type in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It stores an integer Width and Height pair, supports component-wise Add and Subtract, scalar multiplication and division operators, a Matrix3x2 Transform to SizeF, and Truncate from SizeF. Implicit conversions to SizeF and SKSizeI, and from SKSizeI and several platform Size types, make it interoperable across SkiaSharp and cross-platform graphics APIs. Size.Empty provides a zero-by-zero sentinel, and Deconstruct enables tuple unpacking.

**FAQPage entries**

```json
[
  {
    "question": "Where does Size live in the IronDrawing API?",
    "answer": "Size is a struct (ValueType) in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It stores integer Width and Height properties and is the standard dimensional type used across IronDrawing for pixel measurements."
  },
  {
    "question": "How do you combine or scale two Size values in C#?",
    "answer": "Use Size.Add(left, right) or the + operator to sum two sizes component-wise, and Size.Subtract or the - operator to difference them. Scale with the * and / operators: integer operands return Size, float operands return SizeF to preserve fractional results."
  },
  {
    "question": "How do you convert between Size and SizeF or SKSizeI?",
    "answer": "Size converts implicitly to SizeF and to SKSizeI, so no cast is needed in assignments. Convert a SizeF back to Size with the static Size.Truncate(SizeF) method, which truncates fractional parts toward zero. SKSizeI also converts implicitly to Size."
  },
  {
    "question": "What is Size.Empty and when should you use it?",
    "answer": "Size.Empty is a static readonly Size with Width and Height both set to zero. Use it as a sentinel or default value to represent an unset or absent dimension without allocating a new instance."
  }
]
```