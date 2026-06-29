<!--
N-Full. Frame A. IronOCR. Members verified 2026-06-23: FontName, FontSize, IsBold, IsItalic, IsSerif, IsFixedWidth, IsUnderlined, IsSmallCaps, IsCaligraphic; base Object. Cross-ref OcrResult.Character.Font verified.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.OcrFont.html
-->

## Injected overview (Markdown)

`OcrResult.OcrFont` reports the typeface IronOCR believes a recognized character was set in, so you can preserve or analyze styling rather than capturing plain text alone. Reach for it when a downstream step needs to know whether a glyph was bold, italic, serif, or fixed-width, for example when rebuilding a styled document or filtering by emphasis.

You do not construct this object. You read it from the `Font` property of an `OcrResult.Character`, which you reach by walking an `OcrResult` returned from `IronTesseract.Read`. Font detail is populated mainly under the Tesseract OEM engine modes, so it is most reliable when the engine is configured for the legacy Tesseract path rather than the LSTM-only modes; expect best-guess values, since the figures are estimated from the recognized shapes.

The members fall into two groups. `FontName` gives the closest known typeface name and `FontSize` the estimated height in points. The remaining members are boolean style flags: `IsBold`, `IsItalic`, and `IsUnderlined` for the common emphases, `IsSerif` and `IsFixedWidth` for the family classification (serif like Times, monospaced like Courier), and `IsSmallCaps` and `IsCaligraphic` for the less common small-caps and Fraktur-style cases. Read the flags directly on the character's font to branch on styling, and treat each value as advisory rather than exact, since the engine infers them from the recognized glyph shapes. A practical pattern is to read `FontName` and `FontSize` to approximate a typeface, then use the flags to apply emphasis when you rebuild the text in a styled output, falling back to a plain rendering whenever the flags conflict or the font detail was not populated for that character.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput("scan.png");
OcrResult result = ocr.Read(input);
OcrResult.OcrFont font = result.Pages[0].Words[0].Characters[0].Font;
Console.WriteLine($"{font.FontName} {font.FontSize}pt bold={font.IsBold}");
```

The [working with OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) covers reading character detail, the [IronTesseract how-to](https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/) explains the engine modes that populate font data, and the [results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) shows accessing per-character properties.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.OcrFont Class - IronOCR C# API`
- v2 (human): `OcrFont: Read OCR Font Details in C#`
- v3 (balanced): `OcrResult.OcrFont | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read OCR font details in C# with the IronOCR OcrFont class: FontName, FontSize, IsBold, IsItalic, IsSerif, IsFixedWidth, and more style flags.`
- v2 (human): `Find out the typeface, size, and style of recognized text in C# with the IronOCR OcrFont class: name, size, bold, italic, serif, and fixed-width.`
- v3 (balanced): `Reference for the IronOCR OcrResult.OcrFont class in C#: read FontName, FontSize, and style flags from a Character under Tesseract engine modes.`

---

## Structured data

**TechArticle abstract**

> OcrResult.OcrFont reports the typeface IronOCR estimates for a recognized character in C#, read from a Character's Font property after IronTesseract.Read. It exposes FontName and FontSize plus the style flags IsBold, IsItalic, IsUnderlined, IsSerif, IsFixedWidth, IsSmallCaps, and IsCaligraphic. Values are best guesses and are populated mainly under Tesseract OEM engine modes.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.OcrFont live in the IronOCR API?",
    "answer": "OcrResult.OcrFont is a class in the IronOcr namespace, shipped in IronOcr.dll, deriving from System.Object. You read it from the Font property of an OcrResult.Character obtained from an OcrResult."
  },
  {
    "question": "How do you read font details from OCR output in C#?",
    "answer": "Walk an OcrResult down to a Character, then read its Font property to get an OcrFont. From there read FontName and FontSize, or the IsBold, IsItalic, IsSerif, and IsFixedWidth flags to branch on styling."
  },
  {
    "question": "Why is OcrFont information empty or unreliable?",
    "answer": "Detailed font data is populated mainly under the Tesseract OEM engine modes, so configure the legacy Tesseract path rather than an LSTM-only mode. Even then the values are best guesses estimated from the recognized shapes."
  }
]
```
