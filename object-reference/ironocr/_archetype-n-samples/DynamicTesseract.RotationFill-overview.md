<!--
N-Lite/enum. Members verified 2026-06-23: Black, White.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.RotationFill.html
-->

## Injected overview (Markdown)

Choosing how a rotated image fills the empty corners left after a deskew or orientation correction runs through `RotationFill`. When a page is rotated to straighten skewed scan lines, the triangular areas around the new edges have no source pixels, and this value decides what color fills them. `Black` pads those corners with black, suited to inverted or dark-background scans, and `White` pads with white, the natural choice for ordinary documents on a light background. The [orientation correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-orientation-correction/) walks through straightening a tilted scan.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RotationFill Enum - IronOCR C# API Reference`
- v2 (human): `RotationFill: Set Rotation Padding in C#`
- v3 (balanced): `RotationFill Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the corner fill color for a rotated scan in C# with the IronOCR RotationFill enum: Black for dark backgrounds or White for light documents.`
- v2 (human): `Pick how IronOCR fills empty corners after rotating a scan in C# with the RotationFill enum: White for normal pages, Black for inverted scans.`
- v3 (balanced): `Reference for the IronOCR RotationFill enum in C#: Black and White padding for the corners exposed when a skewed image is rotated.`

---

## Structured data

**TechArticle abstract**

> Set the corner fill color for a rotated image in IronOCR for C# with RotationFill. After a deskew rotation exposes empty triangles at the page edges, White pads them for light documents and Black pads them for dark or inverted scans.
