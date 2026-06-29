<!--
N-Lite/enum. Members verified 2026-06-23: LeftToRight, RightToLeft, TopToBottom. Base Enum. Namespace IronOcr.OcrResult.
Read on OcrResultTextElement.TextDirection. Salience: LeftToRight (default/most common) first.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.TextFlow.html
-->

## Injected overview (Markdown)

`TextFlow` reports the reading direction OCR detected for a piece of recognized text, read from the `TextDirection` property of any result element. `LeftToRight` is the common case for languages such as English, `RightToLeft` covers scripts such as Arabic, and `TopToBottom` marks the vertical flow found in some East Asian writing. Check `TextDirection` when layout or ordering depends on the script, rather than assuming left-to-right. The [reading results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) reads element properties, and [international languages](https://ironsoftware.com/csharp/ocr/examples/intl-languages/) shows OCR across scripts.

```csharp
if (word.TextDirection == OcrResult.TextFlow.RightToLeft) { /* handle RTL */ }
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.TextFlow Enum - IronOCR C# API`
- v2 (human): `TextFlow: OCR Reading Direction in C#`
- v3 (balanced): `OcrResult.TextFlow Enum | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR OcrResult.TextFlow enum in C# reports reading direction: LeftToRight, RightToLeft, or TopToBottom, read from TextDirection.`
- v2 (human): `Tell which way OCR text reads in C# with the IronOCR TextFlow enum: LeftToRight, RightToLeft, or TopToBottom on a result element.`
- v3 (balanced): `Reference for the IronOCR OcrResult.TextFlow enum in C#: LeftToRight, RightToLeft, and TopToBottom values reported by TextDirection.`

---

## Structured data

**TechArticle abstract**

> Read OcrResult.TextFlow from the TextDirection property to tell which way IronOCR detected text reading in C#. LeftToRight covers languages such as English, RightToLeft covers scripts such as Arabic, and TopToBottom marks vertical East Asian script. Check it when ordering or layout depends on the script.
