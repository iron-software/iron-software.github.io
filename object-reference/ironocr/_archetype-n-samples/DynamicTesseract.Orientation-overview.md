<!--
N-Lite/enum. Members verified 2026-06-23: PageUp, PageRight, PageDown, PageLeft. Consumed by Page.DetectBestOrientation(out Orientation, out float).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.Orientation.html
-->

## Injected overview (Markdown)

Read which way a page is turned with `Orientation`, the value `Page.DetectBestOrientation` reports for a scanned image. `PageUp` means the text reads normally with no rotation needed, the common case for a clean scan. `PageRight` and `PageLeft` mark a page rotated a quarter turn one way or the other, and `PageDown` marks one that is upside down. Use the result to rotate the image upright before recognition. The [detect page rotation how-to](https://ironsoftware.com/csharp/ocr/how-to/detect-page-rotation/) covers reading orientation in practice.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Orientation Enum - IronOCR C# API Reference`
- v2 (human): `Orientation: Page Rotation in C# OCR`
- v3 (balanced): `Orientation Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read page rotation in C# with the IronOCR Orientation enum: PageUp, PageRight, PageDown, and PageLeft, reported by Page.DetectBestOrientation.`
- v2 (human): `Find which way a scanned page is turned in C# with the IronOCR Orientation enum: upright, quarter-turn right or left, or upside down.`
- v3 (balanced): `Reference for the IronOCR Orientation enum in C#: PageUp, PageRight, PageDown, and PageLeft for detected page rotation.`

---

## Structured data

**TechArticle abstract**

> Read which way a scanned page is turned with the IronOCR Orientation enum in C#, the value Page.DetectBestOrientation reports. PageUp means no rotation is needed, PageRight and PageLeft mark a quarter-turn each way, and PageDown marks an upside-down page. Use the result to rotate the image upright before recognition.
