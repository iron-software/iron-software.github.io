<!--
N-Lite/enum. Members verified 2026-06-23: AreaMap, Sampling, Shear.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.RotationMethod.html
-->

## Injected overview (Markdown)

Picking the algorithm that rotates a skewed scan straight runs through `RotationMethod`, trading speed against edge quality. `AreaMap` resamples with area mapping for the smoothest result on text and fine detail, `Sampling` uses nearest-neighbor sampling for a faster rotation when throughput matters more than crisp edges, and `Shear` applies a three-pass shear rotation, the quickest option and a good fit for small correction angles. The [orientation correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-orientation-correction/) covers straightening a tilted page before reading.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RotationMethod Enum - IronOCR C# API Reference`
- v2 (human): `RotationMethod: Choose Rotation Quality in C#`
- v3 (balanced): `RotationMethod Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the rotation algorithm for a skewed scan in C# with the IronOCR RotationMethod enum: AreaMap, Sampling, or Shear, trading speed for quality.`
- v2 (human): `Set how IronOCR rotates a tilted scan in C# with the RotationMethod enum: AreaMap for smooth edges, Sampling or Shear for faster results.`
- v3 (balanced): `Reference for the IronOCR RotationMethod enum in C#: AreaMap, Sampling, and Shear rotation algorithms balancing speed against edge quality.`

---

## Structured data

**TechArticle abstract**

> Choose the rotation algorithm for a skewed image in IronOCR for C# with RotationMethod. AreaMap resamples for the smoothest edges, Sampling uses faster nearest-neighbor sampling, and Shear applies a quick three-pass shear rotation that suits small correction angles.
