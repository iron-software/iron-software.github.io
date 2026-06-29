<!--
N-Lite/enum (namespace IronBarCode.Internals). Members verified 2026-06-23: Otsu, Simple.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Internals.BinarizationMethod.html
Consumer: BinaryThresholdFilter.BinarizationMethod (and constructor argument).
-->

## Injected overview (Markdown)

`BinarizationMethod` selects how IronBarcode converts a grayscale image to black and white before reading, which sharpens the contrast a decoder relies on. It is set on `BinaryThresholdFilter.BinarizationMethod` or passed to that filter's constructor. `Otsu` computes a threshold from the image histogram and adapts to uneven lighting, while `Simple` applies a fixed threshold value for fast, predictable results on clean scans. The [image orientation correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-orientation-correction/) covers preprocessing filters.

```csharp
var filter = new BinaryThresholdFilter(BinarizationMethod.Otsu);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BinarizationMethod Enum - IronBarcode C# API`
- v2 (human): `BinarizationMethod: Image Thresholding in C#`
- v3 (balanced): `BinarizationMethod Enum | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set image binarization in C# with the IronBarcode BinarizationMethod enum: Otsu adaptive thresholding or Simple fixed threshold, on BinaryThresholdFilter.`
- v2 (human): `Choose how IronBarcode thresholds images in C# with the BinarizationMethod enum: adaptive Otsu or a fast Simple fixed threshold.`
- v3 (balanced): `Reference for the IronBarcode BinarizationMethod enum in C#: Otsu and Simple thresholding for converting images to black and white.`

---

## Structured data

**TechArticle abstract**

> Use BinarizationMethod in IronBarcode to select how a grayscale image is converted to black and white before reading, set on BinaryThresholdFilter. Otsu computes an adaptive threshold from the image histogram, while Simple applies a fixed threshold value for fast results on clean scans.
