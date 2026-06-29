<!--
N-Full (class, 14 members). Frame B (identity-by-role). IronDrawing.
Point(int,int), X, Y, Offset, Equals, GetHashCode, implicit operators verified from PAGE FACTS.
Target: IronSoftware.Drawing.Point API reference page.
-->

## Injected overview (Markdown)

Pixel-precise coordinate work in C# gets a cross-library anchor through `Point`, a lightweight record that holds an integer `X` and `Y` pair representing a location in a two-dimensional plane. Because IronDrawing targets cross-platform compatibility, `Point` ships with a full set of implicit conversion operators so the same value flows into SkiaSharp (`SKPointI`), System.Drawing (`System.Drawing.Point`), and other coordinate types without explicit casting.

Construct a value with `new Point(int x, int y)`. The two settable properties, `X` and `Y`, expose the horizontal and vertical components directly and can be reassigned after construction. When you need to shift a point relative to its current position, `Offset(int dx, int dy)` adds the deltas in place, which is cleaner than constructing a replacement. `Equals` and `GetHashCode` are overridden so `Point` values compare by coordinate rather than by reference, making them safe to use in dictionaries and hash sets.

The implicit operators are the feature that earns `Point` its role as a hub type. Assignments and method arguments that expect a `System.Drawing.Point`, a `SKPointI`, or one of the other supported coordinate types accept a `Point` directly, and the reverse conversions are also defined. This means code that mixes IronDrawing with SkiaSharp or with System.Drawing does not need adapter layers or manual unpacking.

A common pattern is to read coordinates from a cropping rectangle or a detected region, adjust them with `Offset`, and then pass the result straight to a rendering or layout API that expects a different point type:

```csharp
using IronSoftware.Drawing;

var origin = new Point(120, 80);
origin.Offset(10, -5);

// Implicit conversion: no cast needed when the target API expects SKPointI
SKPointI skPoint = origin;
Console.WriteLine($"SKPointI: {skPoint.X}, {skPoint.Y}");
```

The [IronDrawing get-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) covers installation and setup. The [coordinate types overview](https://ironsoftware.com/open-source/csharp/drawing/docs/) explains how `Point`, `Rectangle`, and `Color` relate to each other. For practical usage patterns, the [cross-library interop examples](https://ironsoftware.com/open-source/csharp/drawing/examples/cross-library-types/) show implicit conversions in action.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Point Class - IronDrawing C# API Reference`
- v2 (human): `Point: 2D Integer Coordinates in C#`
- v3 (balanced): `Point Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use the IronDrawing Point class in C# to store integer X and Y coordinates with Offset, Equals, and implicit conversions to SKPointI and System.Drawing.Point.`
- v2 (human): `Store and shift 2D integer coordinates in C# with IronDrawing's Point class, featuring Offset and implicit conversions to SkiaSharp and System.Drawing types.`
- v3 (balanced): `Reference for IronSoftware.Drawing.Point in C#: integer X/Y coordinates, Offset, Equals, and implicit operators for SKPointI and System.Drawing.Point.`

---

## Structured data

**TechArticle abstract**

> Pixel-precise coordinate work in C# gets a cross-library anchor through the IronSoftware.Drawing.Point class. Construct a value with Point(int x, int y), read or update the X and Y properties, and call Offset(int dx, int dy) to shift the point in place. Equals and GetHashCode compare by coordinate value. A full set of implicit operators lets a Point flow directly into SKPointI, System.Drawing.Point, and other supported types without explicit casting, making it a hub coordinate type across IronDrawing-based projects.

**FAQPage entries**

```json
[
  {
    "question": "Where does Point live in the IronDrawing API?",
    "answer": "Point is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It derives from Object and is constructed with new Point(int x, int y). It is not an interface or struct, so X and Y are settable properties on the instance."
  },
  {
    "question": "How do you shift a Point's position without creating a new instance?",
    "answer": "Call Offset(int dx, int dy) on the existing Point. It adds dx to X and dy to Y in place, so no replacement object is needed. This is useful when adjusting coordinates returned from a detection or layout step."
  },
  {
    "question": "What types does Point convert to and from implicitly?",
    "answer": "Point defines implicit operators to and from System.Drawing.Point and SKPointI, among other supported coordinate types. Assignments and method arguments that expect those types accept a Point directly, and the reverse conversions are also defined, so no explicit cast is required."
  },
  {
    "question": "Is Point safe to use as a dictionary key or in a hash set?",
    "answer": "Yes. Point overrides both Equals and GetHashCode to compare by coordinate value rather than by reference, so two Point instances with the same X and Y are considered equal and produce the same hash code."
  }
]
```