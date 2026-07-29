<!--
N-Lite/enum. Members verified: Horizontal, None, Vertical.
Target: IronSoftware.Drawing.AnyBitmap.FlipMode
-->

## Injected overview (Markdown)

`FlipMode` controls the axis along which `AnyBitmap` mirrors an image. `None` leaves the bitmap unchanged and is the safe default. `Horizontal` flips pixels left-to-right across the vertical axis, and `Vertical` flips pixels top-to-bottom across the horizontal axis. Pass the value wherever an `AnyBitmap` flip operation is accepted. See the [IronDrawing getting-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for setup details.

```csharp
AnyBitmap flipped = bitmap.Flip(AnyBitmap.FlipMode.Horizontal);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FlipMode Enum - IronDrawing C# API Reference`
- v2 (human): `FlipMode: Mirror Images in C# with IronDrawing`
- v3 (balanced): `FlipMode Enum | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control image flip direction in C# with the IronDrawing AnyBitmap.FlipMode enum: None, Horizontal, or Vertical, used in AnyBitmap flip operations.`
- v2 (human): `Use AnyBitmap.FlipMode in C# to mirror images horizontally or vertically, or skip flipping with None, via IronDrawing's AnyBitmap API.`
- v3 (balanced): `Reference for IronDrawing's AnyBitmap.FlipMode enum in C#: None, Horizontal, and Vertical values for bitmap flip operations.`

---

## Structured data

**TechArticle abstract**

> Use AnyBitmap.FlipMode in IronDrawing to specify how an AnyBitmap image is mirrored. None leaves the image unchanged, Horizontal flips pixels across the vertical axis, and Vertical flips pixels across the horizontal axis. The enum is declared in the IronSoftware.Drawing.AnyBitmap namespace within IronSoftware.Drawing.dll.