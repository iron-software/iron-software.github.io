<!--
N-Lite/enum. Members verified 2026-06-23: PNG, JPEG, BMP, GIF, TIFF.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Drawing.Images.ImageFormat.html
-->

## Injected overview (Markdown)

`ImageFormat` declares the encoding of an image when `IronXL` inserts one into a worksheet, passed to `WorkSheet.InsertImage`. `PNG` suits lossless graphics and screenshots, `JPEG` fits photographs where smaller files matter, and `BMP`, `GIF`, and `TIFF` cover uncompressed, animated, and high-resolution sources. The [worksheet images how-to](https://ironsoftware.com/csharp/excel/how-to/add-extract-remove-worksheet-images/) and the [add and extract images example](https://ironsoftware.com/csharp/excel/examples/add-extract-remove-worksheet-images/) show inserting an image.

```csharp
worksheet.InsertImage(bytes, ImageFormat.PNG, 1, 1, 4, 6);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageFormat Enum - IronXL C# API Reference`
- v2 (human): `ImageFormat: Insert Excel Images in C#`
- v3 (balanced): `ImageFormat Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the image encoding in C# with the IronXL ImageFormat enum: PNG, JPEG, BMP, GIF, or TIFF, passed to WorkSheet.InsertImage.`
- v2 (human): `Declare the image type IronXL inserts in C# with the ImageFormat enum: PNG for lossless graphics or JPEG for smaller photos.`
- v3 (balanced): `Reference for the IronXL ImageFormat enum in C#: PNG, JPEG, BMP, GIF, and TIFF encodings used with WorkSheet.InsertImage.`

---

## Structured data

**TechArticle abstract**

> Use ImageFormat in IronXL to declare the encoding of an image inserted into a worksheet, passed to WorkSheet.InsertImage. PNG suits lossless graphics and screenshots, JPEG fits photographs where smaller files matter, and BMP, GIF, and TIFF cover uncompressed, animated, and high-resolution sources.
