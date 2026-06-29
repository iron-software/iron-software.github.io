<!--
N-Lite/enum. Members verified 2026-06-23: LeftToRight, RightToLeft, TopToBottom.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.TextLineOrder.html
-->

## Injected overview (Markdown)

`TextLineOrder` reports the order in which lines of text stack on a page, part of the layout analysis Tesseract returns while detecting orientation and reading direction. `TopToBottom` is the usual stacking for Latin and most horizontal scripts, where each line sits below the previous one. `LeftToRight` and `RightToLeft` describe vertical scripts whose columns of lines advance sideways, such as traditional East Asian text. The value is read from a result rather than set, so it informs how detected text is interpreted.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextLineOrder Enum - IronOCR C# Reference`
- v2 (human): `TextLineOrder: Line Stacking Order in C#`
- v3 (balanced): `TextLineOrder Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read how text lines stack in C# with the IronOCR TextLineOrder enum: TopToBottom for horizontal scripts, LeftToRight or RightToLeft for vertical.`
- v2 (human): `Interpret line stacking order in C# with the IronOCR TextLineOrder enum: TopToBottom for normal pages, LeftToRight or RightToLeft for vertical text.`
- v3 (balanced): `Reference for the IronOCR TextLineOrder enum in C#: TopToBottom, LeftToRight, and RightToLeft stacking orders from layout analysis.`

---

## Structured data

**TechArticle abstract**

> Read the order in which text lines stack on a page in IronOCR for C# with TextLineOrder, returned by Tesseract layout analysis. TopToBottom is the usual horizontal-script stacking, while LeftToRight and RightToLeft describe vertical scripts whose line columns advance sideways.
