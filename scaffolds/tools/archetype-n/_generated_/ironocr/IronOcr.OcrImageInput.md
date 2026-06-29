<!--
N-Mid (4 ctors). Frame D. IronOcr. Verified 2026-06-23: ctors take AnyBitmap/byte[]/Stream/string + Nullable<int> Dpi, Rectangle ContentArea, string Title. Base OcrInputBase; implements IDisposable.
Consumed by IronTesseract.Read(OcrInputBase) (cross-ref verified). Filter methods inherited from OcrInputBase.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrImageInput.html
-->

## Injected overview (Markdown)

Feeding a single image to a read starts by wrapping it in an `OcrImageInput`. It is the image-backed input you build from a file, a `Stream`, a `byte[]`, or an `AnyBitmap`, then pass to `IronTesseract.Read`. Use it for one picture, screenshot, or photo, where `OcrInput` is the choice when a job spans many images or PDF pages.

Each constructor takes the image source plus three optional arguments: a `Dpi` to declare the source resolution, a `ContentArea` rectangle to read only part of the image, and a `Title` to label the input. Because `OcrImageInput` derives from `OcrInputBase`, the inherited filter methods, `Deskew`, `Binarize`, `DeNoise`, and `Contrast` among them, are available on the instance to clean the image before the read, and `Dispose` releases it afterward. Build the input, apply any filters the source needs, then hand it to `Read` and read the words off the returned `OcrResult`.

The [input images how-to](https://ironsoftware.com/csharp/ocr/how-to/input-images/) covers the image sources, and the [OCR input example](https://ironsoftware.com/csharp/ocr/examples/csharp-ocr-input-for-iron-tesseract/) builds one for a read.

```csharp
using var input = new OcrImageInput("scan.png");
OcrResult result = ironTesseract.Read(input);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrImageInput - IronOCR C# API Reference`
- v2 (human): `OcrImageInput: OCR a Single Image in C#`
- v3 (balanced): `OcrImageInput | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Wrap an image for OCR in C# with the IronOCR OcrImageInput class: build from a file, Stream, byte[], or AnyBitmap and pass it to Read.`
- v2 (human): `OCR a single image in C# with the IronOCR OcrImageInput class: load from a file, stream, or bitmap, set DPI and a content area, then read.`
- v3 (balanced): `Reference for the IronOCR OcrImageInput class in C#: an image-backed input from a file, Stream, byte[], or AnyBitmap for IronTesseract.Read.`

---

## Structured data

**TechArticle abstract**

> Wrap a single image for OCR in IronOCR with the OcrImageInput class in C#. Construct it from a file path, Stream, byte[], or AnyBitmap, with optional Dpi, a ContentArea rectangle, and a Title, then pass it to IronTesseract.Read. It derives from OcrInputBase, so the inherited image filters clean the source before the read.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrImageInput live in the IronOCR API?",
    "answer": "OcrImageInput is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from OcrInputBase, implements IDisposable, and is passed to IronTesseract.Read as an OcrInputBase."
  },
  {
    "question": "How do you OCR a single image in C#?",
    "answer": "Create an OcrImageInput from a file, Stream, byte[], or AnyBitmap, optionally setting Dpi and a ContentArea, then pass it to IronTesseract.Read. Use OcrInput instead when a job has many images or PDF pages."
  }
]
```
