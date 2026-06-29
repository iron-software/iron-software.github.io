<!--
N-Lite/enum. Members verified 2026-06-23: MorphDilate, MorphErode, MorphOpen, MorphClose, MorphHMT.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.MorphOperator.html
-->

## Injected overview (Markdown)

Choose the Leptonica morphology operation applied to a binary image with `MorphOperator`, the cleanup step that sharpens shapes before recognition. `MorphDilate` grows foreground pixels to close small gaps, and `MorphErode` shrinks them to remove specks. `MorphOpen` erodes then dilates to clear noise while keeping shape, and `MorphClose` dilates then erodes to fill holes. `MorphHMT` is the hit-miss transform for matching exact pixel patterns.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MorphOperator Enum - IronOCR C# API Reference`
- v2 (human): `MorphOperator: Image Morphology in C#`
- v3 (balanced): `MorphOperator Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select a Leptonica morphology operation in C# with the IronOCR MorphOperator enum: MorphDilate, MorphErode, MorphOpen, MorphClose, MorphHMT.`
- v2 (human): `Apply image morphology in C# with the IronOCR MorphOperator enum: dilate, erode, open, close, or hit-miss to clean a binary image for OCR.`
- v3 (balanced): `Reference for the IronOCR MorphOperator enum in C#: the Leptonica dilate, erode, open, close, and hit-miss morphology operations.`

---

## Structured data

**TechArticle abstract**

> Select the Leptonica morphology operation applied to a binary image with the IronOCR MorphOperator enum in C#. MorphDilate grows foreground pixels and MorphErode shrinks them, MorphOpen clears noise while keeping shape, MorphClose fills holes, and MorphHMT is the hit-miss transform for exact pattern matching.
