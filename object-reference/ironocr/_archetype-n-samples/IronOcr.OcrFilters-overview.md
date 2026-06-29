<!--
N-Lite/enum. Members verified 2026-06-23: None, Binarize, Contrast, Deskew, DeNoise, Sharpen, Scale, Rotate, Invert, AdaptiveThreshold, Dilate, Erode, Open, Close (large enum; salient subset named). Base Enum.
Consumed by OcrInputBase.ApplyMultipleFilters(OcrFilters, ...).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrFilters.html
-->

## Injected overview (Markdown)

Naming which image corrections to apply before a read runs through `OcrFilters`, the flag set `OcrInputBase.ApplyMultipleFilters` takes. `None` applies nothing. The everyday choices are `Binarize` (force pixels to black or white for low-contrast text), `Contrast`, `Deskew`, `DeNoise`, and `Sharpen`, with `Scale` and `Rotate` adjusting geometry. The morphology values, `AdaptiveThreshold`, `Dilate`, `Erode`, `Open`, and `Close`, fix broken or merged strokes on rough scans, and `Invert` flips light-on-dark text. The [filter wizard how-to](https://ironsoftware.com/csharp/ocr/how-to/filter-wizard/) finds a strong combination automatically, and [image quality correction](https://ironsoftware.com/csharp/ocr/how-to/image-quality-correction/) covers each filter.

```csharp
input.ApplyMultipleFilters(OcrFilters.Binarize | OcrFilters.Deskew);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrFilters Enum - IronOCR C# API Reference`
- v2 (human): `OcrFilters: Clean Up OCR Images in C#`
- v3 (balanced): `OcrFilters Enum | IronOCR C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose image filters in C# with the IronOCR OcrFilters enum: Binarize, Contrast, Deskew, DeNoise, Sharpen, and more for ApplyMultipleFilters.`
- v2 (human): `Improve OCR accuracy in C# with the IronOCR OcrFilters enum: binarize, deskew, denoise, sharpen, and morphology filters before a read.`
- v3 (balanced): `Reference for the IronOCR OcrFilters enum in C#: Binarize, Deskew, DeNoise, Sharpen, and morphology values for ApplyMultipleFilters.`

---

## Structured data

**TechArticle abstract**

> Name the image corrections to apply before an OCR read in IronOCR with OcrFilters, the flag set passed to OcrInputBase.ApplyMultipleFilters in C#. None applies nothing; Binarize, Contrast, Deskew, DeNoise, and Sharpen are the common choices, while AdaptiveThreshold, Dilate, Erode, Open, and Close handle morphology on rough scans and Invert flips light-on-dark text.
