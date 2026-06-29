<!--
N-Lite/enum. Members verified 2026-06-23: LeftToRight, RightToLeft, TopToBottom. Sibling of TextLineOrder; differ in framing (within-line vs line-stacking).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.WritingDirection.html
-->

## Injected overview (Markdown)

Reading which way characters flow within a line comes from `WritingDirection`, reported by Tesseract's layout analysis alongside the detected script. `LeftToRight` is the flow for Latin and most Western text, `RightToLeft` covers Arabic, Hebrew, and similar scripts, and `TopToBottom` marks vertically written text. Where `TextLineOrder` describes how whole lines stack, this value describes the direction of glyphs inside one line, so the two together place the text on the page. It is read from a result, not configured.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WritingDirection Enum - IronOCR C# Reference`
- v2 (human): `WritingDirection: In-Line Text Flow in C#`
- v3 (balanced): `WritingDirection Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read in-line character flow in C# with the IronOCR WritingDirection enum: LeftToRight, RightToLeft for Arabic and Hebrew, or TopToBottom.`
- v2 (human): `Interpret which way glyphs flow in a line in C# with the IronOCR WritingDirection enum: LeftToRight, RightToLeft, or TopToBottom.`
- v3 (balanced): `Reference for the IronOCR WritingDirection enum in C#: LeftToRight, RightToLeft, and TopToBottom character flow from layout analysis.`

---

## Structured data

**TechArticle abstract**

> Read the direction characters flow within a line in IronOCR for C# with WritingDirection, reported by Tesseract layout analysis. LeftToRight suits Latin text, RightToLeft covers Arabic and Hebrew, and TopToBottom marks vertical writing, complementing the line-stacking order.
