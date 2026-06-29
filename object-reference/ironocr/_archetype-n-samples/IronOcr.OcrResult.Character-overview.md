<!--
N-Full. Frame D. IronOCR. Members verified 2026-06-23: fields Block, Line, Paragraph, Word; props Angle, CharacterNumber, Choices, Font, LooseBottom/Left/Right/Top; method ToChar(); base OcrResult.OcrResultTextElement (Text, Confidence inherited).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Character.html
-->

## Injected overview (Markdown)

Inspecting OCR output one character at a time runs through `OcrResult.Character`, the finest-grained text element in an IronOCR result. Reach for it when a word-level or line-level read is not precise enough, for example when you need per-character confidence, alternative recognition guesses, or detailed font traits for a single glyph.

You do not create a character. You obtain one by walking an `OcrResult` returned from `IronTesseract.Read`: enumerate `result.Pages`, then a page's `Words`, then a word's `Characters`, or read the `Characters` array directly on a `Line` or `Block`. Each character knows its place in the tree through the `Block`, `Line`, `Paragraph`, and `Word` fields, so you can move back up from a single glyph to its containing structures without re-querying the document.

The everyday members are the inherited `Text` and `Confidence` from `OcrResult.OcrResultTextElement`, plus `CharacterNumber` for the one-based index within the document and `ToChar` to convert the element to a plain `System.Char`. `Choices` returns an `OcrResult.Choice` array of alternative readings with their statistical relevance, which is useful when confidence is low and you want a fallback. `Font` returns an `OcrResult.OcrFont` with typeface details, visible mainly under Tesseract-only engine modes. `Angle` and the `LooseLeft`, `LooseTop`, `LooseRight`, and `LooseBottom` values give the rotation and the relaxed bounding box for finer layout work, where the loose values widen the tight bounding box slightly to account for ascenders, descenders, and italic slant that can fall outside the exact glyph rectangle.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput("scan.png");
OcrResult result = ocr.Read(input);
foreach (OcrResult.Character c in result.Pages[0].Words[0].Characters)
    Console.WriteLine($"{c.Text} ({c.Confidence:F0}%)");
```

The [working with OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) covers navigating the element tree, the [result confidence how-to](https://ironsoftware.com/csharp/ocr/how-to/tesseract-result-confidence/) explains reading per-character confidence, and the [results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) reads characters, words, and lines from a result.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Character Class - IronOCR C# API`
- v2 (human): `Character: Per-Glyph OCR Detail in C#`
- v3 (balanced): `OcrResult.Character | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read a single OCR character in C# with the IronOCR Character class: Text, Confidence, Choices, Font, CharacterNumber, ToChar, and Block or Line links.`
- v2 (human): `Inspect OCR output glyph by glyph in C# with the IronOCR Character class: per-character text, confidence, alternative choices, and font details.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Character class in C#: per-character Text, Confidence, Choices, Font, and ToChar from an OcrResult tree.`

---

## Structured data

**TechArticle abstract**

> Inspecting OCR output character by character in C# uses the IronOCR OcrResult.Character element, the finest-grained text item in a result. Obtain it by walking an OcrResult from IronTesseract.Read down to a word's Characters. It exposes inherited Text and Confidence, plus CharacterNumber, ToChar, a Choices array of alternatives, an OcrFont, and Block, Line, Paragraph, and Word links back up the tree.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Character live in the IronOCR API?",
    "answer": "OcrResult.Character is a class in the IronOcr namespace, shipped in IronOcr.dll, deriving from OcrResult.OcrResultTextElement. You receive instances by walking an OcrResult down to a word's or line's Characters array."
  },
  {
    "question": "How do you read individual characters from OCR output in C#?",
    "answer": "Run IronTesseract.Read to get an OcrResult, then enumerate Pages, Words, and each word's Characters array. Read each character's inherited Text and Confidence, or call ToChar to get a System.Char."
  },
  {
    "question": "How do you get alternative recognition guesses for a character?",
    "answer": "Read the Choices property, which returns an OcrResult.Choice array of alternative readings with a statistical Confidence for each. This is useful as a fallback when the primary Confidence is low."
  }
]
```
