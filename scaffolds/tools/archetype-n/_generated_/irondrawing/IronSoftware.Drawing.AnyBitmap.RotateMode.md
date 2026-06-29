<!--
N-Lite/enum. Members verified: None, Rotate90, Rotate180, Rotate270, value__.
Target: IronSoftware.Drawing.AnyBitmap.RotateMode
-->

## Injected overview (Markdown)

`RotateMode` controls the clockwise rotation applied when transforming an `AnyBitmap` image. `None` leaves the image unchanged and is the default. `Rotate90`, `Rotate180`, and `Rotate270` rotate the canvas by the corresponding degree clockwise. Pass the value directly to the relevant `AnyBitmap` rotation method. See the [IronDrawing getting started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for setup details.

```csharp
AnyBitmap rotated = bitmap.Rotate(AnyBitmap.RotateMode.Rotate90);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RotateMode Enum - IronDrawing C# API Reference`
- v2 (human): `RotateMode: Rotate Images in C# with IronDrawing`
- v3 (balanced): `RotateMode Enum | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control image rotation in C# with the IronDrawing AnyBitmap.RotateMode enum: None, Rotate90, Rotate180, or Rotate270 for clockwise transforms.`
- v2 (human): `Use AnyBitmap.RotateMode in IronDrawing to rotate images 90, 180, or 270 degrees clockwise in C#, or keep the original with None.`
- v3 (balanced): `Reference for IronDrawing AnyBitmap.RotateMode in C#: choose None, Rotate90, Rotate180, or Rotate270 for clockwise image rotation.`

---

## Structured data

**TechArticle abstract**

> Apply clockwise image rotation in IronDrawing by passing an AnyBitmap.RotateMode value to the AnyBitmap rotation method. None leaves the image unchanged. Rotate90, Rotate180, and Rotate270 rotate the canvas by the corresponding degree clockwise.