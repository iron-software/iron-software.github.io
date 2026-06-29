<!--
N-Lite/enum. Declared: public sealed class TesseractPageSegmentationMode : Enum. Members verified 2026-06-23: Auto, AutoOnly, AutoOsd, OsdOnly, SingleBlock, SingleBlockVertText, SingleColumn, SingleLine, SingleWord, SingleChar, CircleWord, RawLine, SparseText, SparseTextOsd.
Cross-ref: TesseractConfiguration.PageSegmentationMode verified.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.TesseractPageSegmentationMode.html
-->

## Injected overview (Markdown)

Telling Tesseract how to find text on a page sets `TesseractConfiguration.PageSegmentationMode` to a `TesseractPageSegmentationMode` value. `Auto` performs full page layout analysis and is the everyday choice. For known shapes, narrow it: `SingleBlock` treats the image as one uniform block, `SingleLine` and `SingleWord` constrain to a line or word, `SingleChar` to one glyph, and `SparseText` finds scattered text in no particular order. `OsdOnly` runs only orientation and script detection. The [page segmentation how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-configurations-for-advanced-reading/) tunes the mode.

```csharp
ocr.Configuration.PageSegmentationMode = TesseractPageSegmentationMode.Auto;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TesseractPageSegmentationMode Enum - IronOCR C#`
- v2 (human): `PageSegmentationMode: Tune OCR Layout in C#`
- v3 (balanced): `TesseractPageSegmentationMode | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set how Tesseract segments a page in C# with the IronOCR TesseractPageSegmentationMode enum: Auto, SingleBlock, SingleLine, SparseText, and more.`
- v2 (human): `Tell IronOCR how to find text in C# with the TesseractPageSegmentationMode enum: full Auto layout, a single block, line, word, or sparse text.`
- v3 (balanced): `Reference for the IronOCR TesseractPageSegmentationMode enum in C#: Auto, SingleBlock, SingleLine, SingleWord, SparseText, and OsdOnly.`

---

## Structured data

**TechArticle abstract**

> Set how Tesseract searches a page for text in C# with the IronOCR TesseractPageSegmentationMode enum, assigned to TesseractConfiguration.PageSegmentationMode. Auto runs full layout analysis, while SingleBlock, SingleLine, SingleWord, SingleChar, and SparseText constrain detection to a known shape.
