<!--
N-Lite/enum. Members verified 2026-06-23: Default, Png, Tiff, Bmp, Gif, Jp2, WebP, Lpdf, Ps, Pnm, Spix, Unknown (+ TIFF subfamily).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ImageFormat.html
-->

## Injected overview (Markdown)

Pick the output image encoding the low-level Tesseract layer writes with `ImageFormat`. `Default` lets the engine choose a sensible encoding and is the usual value. `Png` is lossless and the safe general choice, `Tiff` (with the `TiffG4`, `TiffLzw`, and `TiffPackBits` compression variants) suits multi-page scans, `Bmp` is uncompressed, and `Gif`, `Jp2`, and `WebP` cover the common web families. `Lpdf` and `Ps` target document output, while `Spix` and `Pnm` serve Leptonica's native formats. `Unknown` marks an unrecognized encoding.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageFormat Enum - IronOCR C# API Reference`
- v2 (human): `ImageFormat: Tesseract Image Encodings in C#`
- v3 (balanced): `ImageFormat Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select the image encoding for IronOCR's Tesseract layer in C# with the ImageFormat enum: Default, Png, Tiff, Bmp, Gif, Jp2, WebP, and more.`
- v2 (human): `Choose how the low-level Tesseract engine encodes images in C# with the ImageFormat enum: PNG, TIFF, BMP, WebP, PDF, and other formats.`
- v3 (balanced): `Reference for the IronOCR ImageFormat enum in C#: image encodings such as Default, Png, Tiff, and WebP for the Tesseract layer.`

---

## Structured data

**TechArticle abstract**

> Choose the image encoding for IronOCR's low-level Tesseract layer with the ImageFormat enum in C#. Default lets the engine choose, Png is lossless, Tiff (with G4, LZW, and PackBits variants) suits multi-page scans, and Gif, Jp2, and WebP cover web families. Lpdf and Ps target document output, while Spix and Pnm serve Leptonica's native formats.
