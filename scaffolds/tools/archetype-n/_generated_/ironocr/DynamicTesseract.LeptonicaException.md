<!--
N-Lite/exception. Declared: public class LeptonicaException : Exception. 4 ctors.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.LeptonicaException.html
-->

## Injected overview (Markdown)

`LeptonicaException` signals a failure inside the Leptonica image-processing layer that IronOCR's Tesseract engine relies on, typically while decoding, converting, or transforming an input image before recognition. Read its message and inner exception to see which operation failed, then confirm the source image is a supported format and is not corrupt or empty before retrying. It derives directly from `Exception`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LeptonicaException - IronOCR C# API Reference`
- v2 (human): `LeptonicaException: Image Layer Error in C#`
- v3 (balanced): `LeptonicaException | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `LeptonicaException reports image-processing failures in IronOCR for C#: a decode, convert, or transform error in the Leptonica layer.`
- v2 (human): `Handle image-layer errors in C# with LeptonicaException: check the source image format and integrity when IronOCR's Leptonica step fails.`
- v3 (balanced): `Reference for LeptonicaException in C#: raised when IronOCR's Leptonica image-processing layer fails to decode or transform an image.`

---

## Structured data

**TechArticle abstract**

> LeptonicaException signals a failure in the Leptonica image-processing layer that IronOCR's Tesseract engine relies on in C#, usually while decoding or transforming an input image before recognition. Read the message and inner exception to find the failing operation, then confirm the image is a supported, intact format. It derives from Exception.
