<!--
N-Lite/enum. Members verified: RotateNoneFlipNone, Rotate90FlipNone, Rotate180FlipNone, Rotate270FlipNone, RotateNoneFlipX, RotateNoneFlipY, RotateNoneFlipXY, and nine additional combinations.
Target: IronSoftware.Drawing.AnyBitmap.RotateFlipType
-->

## Injected overview (Markdown)

`RotateFlipType` controls how much an `AnyBitmap` is rotated and which axis is flipped, passed to bitmap transform operations. `RotateNoneFlipNone` is the identity (no change), `Rotate90FlipNone` rotates clockwise 90 degrees, `Rotate180FlipNone` and `Rotate270FlipNone` complete the rotation set. Flip suffixes `FlipX`, `FlipY`, and `FlipXY` mirror the image after rotation. The naming follows `System.Drawing.RotateFlipType` notation for easy migration.

```csharp
AnyBitmap rotated = bitmap.RotateFlip(AnyBitmap.RotateFlipType.Rotate90FlipNone);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RotateFlipType Enum - IronDrawing C# API Reference`
- v2 (human): `RotateFlipType: Rotate and Flip Bitmaps in C#`
- v3 (balanced): `RotateFlipType Enum | IronDrawing C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Reference for the IronDrawing RotateFlipType enum in C#: rotate AnyBitmap by 90, 180, or 270 degrees and flip on X, Y, or both axes.`
- v2 (human): `Control bitmap rotation and flipping in C# with IronDrawing's RotateFlipType enum: 90, 180, 270 degree rotations combined with X, Y, or XY flips.`
- v3 (balanced): `IronDrawing RotateFlipType enum for C#: rotate AnyBitmap 90–270 degrees and flip on X, Y, or XY axes with System.Drawing-compatible notation.`

---

## Structured data

**TechArticle abstract**

> Use RotateFlipType in IronDrawing to specify rotation and flip transforms on an AnyBitmap. RotateNoneFlipNone applies no change, Rotate90FlipNone rotates clockwise 90 degrees, and Rotate180FlipNone and Rotate270FlipNone complete the rotation set. FlipX, FlipY, and FlipXY suffixes mirror the result on the corresponding axis. The enum follows System.Drawing.RotateFlipType notation for straightforward migration from legacy code.