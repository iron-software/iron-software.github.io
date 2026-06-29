<!--
N-Lite/enum. DynamicTesseract. Members verified 2026-06-23 (salient subset of 14; value__ ignored).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.PageSegMode.html
-->

## Injected overview (Markdown)

Tell the Tesseract engine how to segment a page before recognition with `PageSegMode`. `Auto` is the general-purpose default that detects layout on its own, `SingleBlock` treats the image as one uniform block of text, and `SingleLine`, `SingleWord`, and `SingleChar` constrain recognition to a single line, word, or character for tightly cropped inputs. `SparseText` finds text scattered in no particular order, while `AutoOsd` and `OsdOnly` add orientation and script detection. Match the mode to the input's layout to improve accuracy. The [advanced reading how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-configurations-for-advanced-reading/) covers segmentation tuning.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PageSegMode Enum - IronOCR C# API Reference`
- v2 (human): `PageSegMode: Tesseract Layout Modes in C#`
- v3 (balanced): `PageSegMode Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Tesseract page segmentation in C# with the IronOCR PageSegMode enum: Auto, SingleBlock, SingleLine, SingleWord, SparseText, and more.`
- v2 (human): `Control how Tesseract reads a page layout in C# with PageSegMode: auto-detect, single block, single line or word, or sparse text.`
- v3 (balanced): `Reference for the IronOCR PageSegMode enum in C#: Auto, SingleBlock, SingleLine, SparseText, and OSD page segmentation modes.`

---

## Structured data

**TechArticle abstract**

> Set how the Tesseract engine segments a page before OCR with PageSegMode in IronOCR for C#. Auto detects layout automatically, SingleBlock treats the image as one block, and SingleLine, SingleWord, and SingleChar constrain recognition to a cropped input. SparseText finds scattered text, while AutoOsd and OsdOnly add orientation and script detection.
