<!--
N-Lite/enum. Declared: public sealed class ResultHighlightType : Enum. Members verified 2026-06-23: Character, Word, Line, Paragraph.
Cross-ref: OcrInputBase.HighlightTextAndSaveAsImages(IronTesseract, string, ResultHighlightType) verified.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.ResultHighlightType.html
-->

## Injected overview (Markdown)

Choosing how IronOCR draws debug highlights runs through `ResultHighlightType`, passed to `HighlightTextAndSaveAsImages` when an input is saved as annotated images. `Word` boxes each recognized word and is the usual choice for spot-checking accuracy, `Character` highlights individual glyphs for the finest-grained view, `Line` groups by text line, and `Paragraph` outlines whole blocks for a layout-level check. The [highlight text how-to](https://ironsoftware.com/csharp/ocr/how-to/highlight-texts-as-images/) writes annotated images for debugging.

```csharp
input.HighlightTextAndSaveAsImages(ocr, "highlighted.png", ResultHighlightType.Word);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ResultHighlightType Enum - IronOCR C# API`
- v2 (human): `ResultHighlightType: Highlight OCR Results in C#`
- v3 (balanced): `ResultHighlightType Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Pick the OCR highlight granularity in C# with the IronOCR ResultHighlightType enum: Character, Word, Line, or Paragraph for debug images.`
- v2 (human): `Control how IronOCR draws debug highlights in C# with the ResultHighlightType enum: box each character, word, line, or paragraph in saved images.`
- v3 (balanced): `Reference for the IronOCR ResultHighlightType enum in C#: Character, Word, Line, and Paragraph modes for HighlightTextAndSaveAsImages.`

---

## Structured data

**TechArticle abstract**

> Pick how IronOCR draws debug highlights in C# with the ResultHighlightType enum, passed to HighlightTextAndSaveAsImages. Word boxes each recognized word, Character highlights individual glyphs, Line groups by text line, and Paragraph outlines whole blocks for a layout-level check.
