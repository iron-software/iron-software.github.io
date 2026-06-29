<!--
N-Full (class, 32 members). Frame B (identity-by-role). IronDrawing.
SizeF members verified from PAGE FACTS 2026-06-22.
Target: IronSoftware.Drawing.SizeF API reference page.
-->

## Injected overview (Markdown)

A precise, cross-library size record for floating-point dimensions, `SizeF` stores an ordered pair of `float` values representing `Width` and `Height`. It bridges IronDrawing with SkiaSharp (`SKSize`), System.Numerics (`Vector2`), and the rest of the .NET drawing ecosystem through a rich set of implicit and explicit conversions, so a size measured in one library passes cleanly into another without manual unpacking.

Construct a `SizeF` from two floats, from a `PointF`, or by copying an existing `SizeF`. The static `SizeF.Empty` field provides a zero-initialized sentinel. Once created, `Width` and `Height` are mutable properties, and `Deconstruct` lets you unpack both values in a single tuple assignment. Equality is covered by both `Equals(SizeF)` and the `==` / `!=` operators, making the struct safe to compare in conditional logic.

**Arithmetic and geometry** are handled through named static methods and operator overloads:

- Building and modifying: `Add` and the `+` operator combine two sizes; `Subtract` and the `-` operator reduce one.
- Scaling: `*` scales a size by a scalar (both `SizeF * float` and `float * SizeF`); `/` divides by a scalar.
- Transformation: `Transform(SizeF, Matrix3x2)` applies a 2-D affine matrix, useful for rotating or skewing a bounding box before passing it to a renderer.

**Conversions** cover the most common cross-library handoffs. Implicit casts move a `SizeF` to `SKSize` and `Vector2` without any explicit cast syntax. Explicit casts to `PointF` and `Size` are intentionally narrowing: `PointF` reinterprets the width and height as X and Y coordinates, while `Size` truncates the floats to integers.

Because `SizeF` is a value type derived from `ValueType`, it allocates on the stack, copies by value, and carries no hidden heap cost. This makes it practical in tight loops that compute image tile dimensions, layout bounds, or canvas regions at high frequency.

```csharp
using IronSoftware.Drawing;
using System.Numerics;

SizeF original = new SizeF(120.5f, 80.25f);
SizeF padding  = new SizeF(10f, 10f);
SizeF padded   = SizeF.Add(original, padding);

var (w, h) = padded;                      // Deconstruct
SizeF scaled  = padded * 1.5f;
Vector2 vec   = scaled;                   // implicit to Vector2
Console.WriteLine(scaled.ToString());
```

Explore more in the [IronDrawing get-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/), the [color and geometry examples](https://ironsoftware.com/open-source/csharp/drawing/examples/), the [cross-library conversion how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/cross-library-image-conversion/), and the [IronDrawing docs hub](https://ironsoftware.com/open-source/csharp/drawing/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SizeF Class - IronDrawing C# API Reference`
- v2 (human): `SizeF: Float Size Values in C# with IronDrawing`
- v3 (balanced): `SizeF Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use IronDrawing SizeF in C# to store float width and height, perform arithmetic, apply matrix transforms, and convert to SKSize or Vector2.`
- v2 (human): `SizeF in IronDrawing stores floating-point width and height with arithmetic operators, matrix transforms, and implicit casts to SKSize and Vector2.`
- v3 (balanced): `Reference for IronSoftware.Drawing.SizeF in C#: float width/height storage, Add, Subtract, Transform, and cross-library conversions to SKSize and Vector2.`

---

## Structured data

**TechArticle abstract**

> Precise floating-point dimensions for cross-library .NET drawing are stored in the IronSoftware.Drawing.SizeF value type. Construct it from two floats, a PointF, or a copy of another SizeF, then use Add, Subtract, the arithmetic operators, and Transform with a Matrix3x2 for geometry work. Implicit conversions reach SKSize and Vector2; explicit casts reach PointF and Size. Deconstruct unpacks Width and Height in one assignment. Because SizeF derives from ValueType it allocates on the stack with no heap overhead.

**FAQPage entries**

```json
[
  {
    "question": "Where does SizeF live in the IronDrawing API?",
    "answer": "SizeF is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from ValueType and is constructed directly with new SizeF(float width, float height), new SizeF(PointF), or new SizeF(SizeF)."
  },
  {
    "question": "How do you scale or transform a SizeF in C#?",
    "answer": "Multiply by a scalar using the * operator (SizeF * float or float * SizeF) to scale uniformly, divide with the / operator, or call SizeF.Transform(size, matrix) to apply a full Matrix3x2 affine transformation."
  },
  {
    "question": "How do you convert SizeF to SKSize or Vector2?",
    "answer": "IronSoftware.Drawing.SizeF provides implicit conversion operators to both SKSize and Vector2, so you can assign a SizeF directly to a variable of either type without an explicit cast."
  },
  {
    "question": "What is SizeF.Empty used for?",
    "answer": "SizeF.Empty is a static readonly field that holds a SizeF with Width and Height both set to zero. It serves as a safe default or sentinel value when no meaningful size has been assigned yet."
  }
]
```