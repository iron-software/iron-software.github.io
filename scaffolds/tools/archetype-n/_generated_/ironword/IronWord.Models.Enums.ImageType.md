<!--
N-Lite/enum. Members verified 2026-06-23 (10 values; salient subset named): Png, Jpeg, Gif, Bmp, Tiff, Svg, plus Emf, Wmf, Icon, Pcx. Base Enum.
Target: IronWord.Models.Enums.ImageType.html
-->

## Injected overview (Markdown)

Identify the format of an image added to or read from a Word document with `ImageType`. `Png` and `Jpeg` cover the common raster formats for screenshots and photos, `Gif` and `Bmp` handle simple and uncompressed bitmaps, `Tiff` suits high-resolution scans, and `Svg` carries vector artwork. Metafile and legacy formats (`Emf`, `Wmf`, `Icon`, `Pcx`) round out the set. The [add image example](https://ironsoftware.com/csharp/word/examples/add-image/) inserts a picture, and the [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) pulls them back out.

```csharp
var imageType = ImageType.Png;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageType Enum - IronWord C# API Reference`
- v2 (human): `ImageType: Word Image Formats in C#`
- v3 (balanced): `ImageType Enum | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Identify Word image formats in C# with the IronWord ImageType enum: Png, Jpeg, Gif, Bmp, Tiff, Svg, and metafile formats.`
- v2 (human): `Tell IronWord which image format you are using in C# with the ImageType enum: Png, Jpeg, Gif, Bmp, Tiff, or Svg.`
- v3 (balanced): `Reference for the IronWord ImageType enum in C#: Png and Jpeg for common images, plus Gif, Bmp, Tiff, Svg, and more.`

---

## Structured data

**TechArticle abstract**

> Identify the format of an image used in a Word document with IronWord ImageType in C#. Png and Jpeg cover common raster images, Gif and Bmp handle bitmaps, Tiff suits scans, Svg carries vector art, and metafile formats round out the set.
