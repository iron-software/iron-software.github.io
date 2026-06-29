<!--
N-Lite/enum. Members verified: Default, Png, Jpeg, Bmp, Gif, Tiff, Webp, Icon, Wbmp, Wmf, RawFormat.
Target: IronSoftware.Drawing.AnyBitmap.ImageFormat
-->

## Injected overview (Markdown)

`ImageFormat` controls the file format `AnyBitmap` uses when reading or exporting images, passed to methods such as `AnyBitmap.ExportFile`. `Default` preserves the source format, `Png` and `Jpeg` cover the most common raster exports, `Bmp` targets uncompressed bitmaps, and `Tiff` suits multi-page or print workflows. `Webp` delivers modern compressed output, while `Gif`, `Icon`, `Wbmp`, and `Wmf` serve specialized targets. `RawFormat` reflects the format detected on load. See the [IronDrawing docs](https://ironsoftware.com/open-source/csharp/drawing/docs/) for export examples.

```csharp
anyBitmap.ExportFile("output.webp", AnyBitmap.ImageFormat.Webp);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AnyBitmap.ImageFormat Enum - IronDrawing C# API`
- v2 (human): `ImageFormat: Choose an Export Format in C#`
- v3 (balanced): `AnyBitmap.ImageFormat Enum | IronDrawing C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control image export format in C# with IronDrawing's AnyBitmap.ImageFormat enum: Png, Jpeg, Bmp, Tiff, Webp, Gif, and more via AnyBitmap.ExportFile.`
- v2 (human): `Pick the right image format for AnyBitmap exports in C# with ImageFormat: Png, Jpeg, Webp, Tiff, Bmp, Gif, and other popular options.`
- v3 (balanced): `Reference for IronDrawing's AnyBitmap.ImageFormat enum in C#: Default, Png, Jpeg, Webp, Tiff, and other supported export formats.`

---

## Structured data

**TechArticle abstract**

> Use AnyBitmap.ImageFormat in IronDrawing to specify the image format for reading or exporting bitmaps. Default preserves the source format, Png and Jpeg cover common raster exports, Tiff suits print and multi-page workflows, and Webp provides modern compressed output. Pass a value to AnyBitmap.ExportFile to control the output encoding.