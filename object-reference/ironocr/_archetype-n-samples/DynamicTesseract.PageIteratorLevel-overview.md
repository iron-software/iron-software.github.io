<!--
N-Lite/enum. DynamicTesseract. Members verified 2026-06-23: Block, Para, TextLine, Word, Symbol (value__ ignored).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.PageIteratorLevel.html
-->

## Injected overview (Markdown)

Choose how far down the page hierarchy a `PageIterator` or `ResultIterator` walks with `PageIteratorLevel`. `Block` steps over whole regions, `Para` over paragraphs, `TextLine` over lines, `Word` over individual words, and `Symbol` over single characters. Pass the level to iterator calls such as `GetText` or `TryGetBoundingBox` to read recognized content and its position at the granularity a task needs. The [OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) walks through reading text at each level.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PageIteratorLevel Enum - IronOCR C# API`
- v2 (human): `PageIteratorLevel: OCR Granularity in C#`
- v3 (balanced): `PageIteratorLevel Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set OCR result granularity in C# with the IronOCR PageIteratorLevel enum: Block, Para, TextLine, Word, or Symbol for a PageIterator.`
- v2 (human): `Pick how deep an IronOCR iterator walks in C# with PageIteratorLevel: whole blocks, paragraphs, lines, words, or single symbols.`
- v3 (balanced): `Reference for the IronOCR PageIteratorLevel enum in C#: Block, Para, TextLine, Word, and Symbol levels for page and result iterators.`

---

## Structured data

**TechArticle abstract**

> Choose the page hierarchy level an IronOCR PageIterator or ResultIterator walks with PageIteratorLevel in C#. Block covers whole regions, Para paragraphs, TextLine lines, Word words, and Symbol single characters. Pass the level to iterator calls such as GetText or TryGetBoundingBox to read content at the needed granularity.
