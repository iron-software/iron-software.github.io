<!--
N-Mid (struct, value-type, nested in OcrHandwritingResult). docfx title: "OcrHandwritingResult.TextLine".
Declared: public sealed class TextLine : ValueType, IEquatable<OcrHandwritingResult.TextLine>. Namespace IronOcr.
Field: Empty. Properties: LineConf, LineRect, PageNumber, TextInLine. Frame E (feature-fronted).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrHandwritingResult.TextLine.html
-->

## Injected overview (Markdown)

One recognized line of handwriting, with its text, position, and confidence, lives on `OcrHandwritingResult.TextLine`. You read these lines from a handwriting result after IronOCR processes a handwritten image, one `TextLine` per line it detects.

`TextInLine` holds the recognized text for the line, `LineConf` reports the confidence score so you can flag low-quality reads, `LineRect` gives the line's bounding rectangle on the page, and `PageNumber` identifies which page it came from. The static `Empty` field provides a default line when no result applies. Loop the lines from the handwriting result, keep those whose `LineConf` clears your threshold, and use `LineRect` to lay the text back over the source image. Because it is a value type nested under `OcrHandwritingResult`, refer to it with the qualified name when you declare variables.

The [read handwritten image how-to](https://ironsoftware.com/csharp/ocr/how-to/read-handwritten-image/) walks through producing these results, and the [read handwritten image example](https://ironsoftware.com/csharp/ocr/examples/read-handwritten-image/) reads the lines and their confidence.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrHandwritingResult.TextLine - IronOCR C#`
- v2 (human): `TextLine: Handwriting Lines in C#`
- v3 (balanced): `OcrHandwritingResult.TextLine | IronOCR C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `OcrHandwritingResult.TextLine holds one handwriting line in C#: TextInLine, LineConf, LineRect, and PageNumber from an IronOCR handwriting read.`
- v2 (human): `Read a recognized handwriting line in C# with the IronOCR TextLine value type: its text, confidence, bounding rectangle, and page number.`
- v3 (balanced): `Reference for IronOCR's OcrHandwritingResult.TextLine in C#: one handwriting line with TextInLine, LineConf, LineRect, and PageNumber.`

---

## Structured data

**TechArticle abstract**

> One recognized line of handwriting, with its text, position, and confidence, lives on OcrHandwritingResult.TextLine in C#. TextInLine holds the recognized text, LineConf reports the confidence score, LineRect gives the bounding rectangle, and PageNumber identifies the page. You read these lines from a handwriting result after IronOCR processes a handwritten image.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrHandwritingResult.TextLine live in the IronOCR API?",
    "answer": "TextLine is a struct nested under OcrHandwritingResult in the IronOcr namespace, shipped in IronOcr.dll. docfx renders it as a sealed class deriving from ValueType, and it implements IEquatable<OcrHandwritingResult.TextLine>."
  },
  {
    "question": "How do you read recognized handwriting lines and their confidence in C#?",
    "answer": "Loop the TextLine values from an OcrHandwritingResult and read TextInLine for the text and LineConf for the confidence score. LineRect gives the line's rectangle and PageNumber the page; the static Empty field provides a default line."
  }
]
```
