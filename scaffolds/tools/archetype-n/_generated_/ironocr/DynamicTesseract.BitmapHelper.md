<!--
N-Full (static class, 15 methods, bucketed). Frame F (imperative). IronOCR / DynamicTesseract.
Verified 2026-06-23: static class : Object; methods ConvertArgb1555ToRGBA, ConvertRgb555ToRGBA,
ConvertRgb565ToRGBA, EncodeAsRGBA, GetBPP(AnyBitmap), GetDataBit/Byte/QBit/UInt16/UInt32,
SetDataBit/Byte/QBit/UInt16/UInt32. Namespace DynamicTesseract; assembly IronOcr.dll.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.BitmapHelper.html
-->

## Injected overview (Markdown)

Reach for `BitmapHelper` when low-level OCR code has to convert pixel formats or touch a bitmap's raw bytes before handing the image to Tesseract. It is a static utility in the `DynamicTesseract` interop layer that sits under IronOCR's higher-level reading API, so most projects never call it directly. Code that drives the native engine itself, or that pre-processes image data for a custom scan path, is where it earns its place.

The class works on an `AnyBitmap` and on raw byte and pixel pointers, so it belongs to the stage that prepares image data, before the engine reads it. A typical caller has already decoded an image and now needs it in the packed RGBA layout the native pipeline expects, or needs to read and write individual samples in a buffer. `BitmapHelper` supplies the format conversions and the indexed accessors for that work without forcing a full re-decode of the image.

The members fall into three functional groups. The pixel-format converters, `ConvertArgb1555ToRGBA`, `ConvertRgb555ToRGBA`, and `ConvertRgb565ToRGBA`, promote a single packed 16-bit sample to 32-bit RGBA, and `EncodeAsRGBA` packs four `Byte` channels back into one `UInt32`. The typed buffer readers, `GetDataBit`, `GetDataByte`, `GetDataQBit`, `GetDataUInt16`, and `GetDataUInt32`, read a sample at an index from a pointer, and the matching `SetDataBit`, `SetDataByte`, `SetDataQBit`, `SetDataUInt16`, and `SetDataUInt32` write one back. `GetBPP` reports the bits per pixel of an `AnyBitmap`, which tells you which converter and accessor width to use. Because the accessors take raw pointers, call them from an `unsafe` context and respect the buffer bounds yourself.

```csharp
int bpp = BitmapHelper.GetBPP(bitmap);
uint rgba = BitmapHelper.EncodeAsRGBA(r, g, b, a);
```

For everyday reading, prefer the high-level API: the [color correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-color-correction/) and the [image quality how-to](https://ironsoftware.com/csharp/ocr/how-to/image-quality-correction/) tune the image, and the [advanced reading configuration how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-configurations-for-advanced-reading/) covers deeper engine control.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BitmapHelper Class - IronOCR C# API Reference`
- v2 (human): `BitmapHelper: Pixel & Buffer Helpers in C#`
- v3 (balanced): `BitmapHelper Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Convert pixel formats and read raw bitmap bytes in C# with the IronOCR BitmapHelper class: EncodeAsRGBA, GetBPP, and typed Get/Set data accessors.`
- v2 (human): `Work with raw image data in C# through the IronOCR BitmapHelper class: promote 16-bit pixels to RGBA, pack channels, and read or write buffer samples.`
- v3 (balanced): `Reference for the IronOCR BitmapHelper class in C#: pixel-format converters, EncodeAsRGBA, GetBPP, and typed buffer Get/Set accessors.`

---

## Structured data

**TechArticle abstract**

> BitmapHelper is a static pixel and buffer utility in IronOCR's DynamicTesseract interop layer for C#. It converts 16-bit packed samples to 32-bit RGBA with ConvertArgb1555ToRGBA, ConvertRgb555ToRGBA, and ConvertRgb565ToRGBA, packs channels with EncodeAsRGBA, reports bits per pixel with GetBPP, and reads or writes individual samples through typed GetData and SetData accessors over raw pointers.

**FAQPage entries**

```json
[
  {
    "question": "Where does BitmapHelper live in the IronOCR API?",
    "answer": "BitmapHelper is a static class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from Object and exposes only static pixel-format and buffer-access methods, so it is never instantiated."
  },
  {
    "question": "What does BitmapHelper do in IronOCR?",
    "answer": "It provides low-level image helpers for the interop layer: ConvertArgb1555ToRGBA, ConvertRgb555ToRGBA, and ConvertRgb565ToRGBA promote 16-bit samples to RGBA, EncodeAsRGBA packs four channels into a UInt32, GetBPP reports bits per pixel, and the GetData and SetData methods read and write buffer samples."
  },
  {
    "question": "Do you need BitmapHelper for normal OCR reading in C#?",
    "answer": "No. BitmapHelper is part of the DynamicTesseract interop layer beneath IronOCR's reading API. For typical OCR, use the high-level input and result classes; reach for BitmapHelper only when custom code manipulates raw pixel data before the native engine reads it."
  }
]
```
