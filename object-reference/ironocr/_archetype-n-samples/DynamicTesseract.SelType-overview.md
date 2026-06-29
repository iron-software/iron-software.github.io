<!--
N-Lite/enum. Members verified 2026-06-23: SEL_DONT_CARE, SEL_HIT, SEL_MISS.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.SelType.html
-->

## Injected overview (Markdown)

`SelType` labels each cell of a structuring element used in the Leptonica morphology that IronOCR applies while cleaning an image before recognition. A structuring element is the small template a dilate or erode operation slides across the page, and each cell carries one of these roles. `SEL_HIT` marks a cell that must match a foreground pixel, `SEL_MISS` marks one that must match background, and `SEL_DONT_CARE` ignores the cell entirely. This is an internal building block, so application code rarely sets it directly.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SelType Enum - IronOCR C# API Reference`
- v2 (human): `SelType: Morphology Cell Roles in C#`
- v3 (balanced): `SelType Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Label structuring-element cells in C# with the IronOCR SelType enum: SEL_HIT for foreground, SEL_MISS for background, SEL_DONT_CARE to skip.`
- v2 (human): `Set the role of each morphology cell in C# with the IronOCR SelType enum: SEL_HIT, SEL_MISS, or SEL_DONT_CARE for Leptonica image cleanup.`
- v3 (balanced): `Reference for the IronOCR SelType enum in C#: SEL_HIT, SEL_MISS, and SEL_DONT_CARE roles for Leptonica structuring-element cells.`

---

## Structured data

**TechArticle abstract**

> Label the cells of a Leptonica structuring element in IronOCR for C# with SelType, used by the morphology that cleans an image before recognition. SEL_HIT requires a foreground pixel, SEL_MISS requires background, and SEL_DONT_CARE skips the cell.
