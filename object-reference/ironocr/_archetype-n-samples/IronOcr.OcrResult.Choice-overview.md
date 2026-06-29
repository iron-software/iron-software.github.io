<!--
N-Mid. Frame B. IronOCR. Verified 2026-06-23: ctor Choice(); fields Confidence (double), Text (string); base Object. Cross-ref OcrResult.Character.Choices verified.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Choice.html
-->

## Injected overview (Markdown)

`OcrResult.Choice` is one alternative reading the engine considered for a character, paired with how likely it judged that reading to be. It is what you inspect when the top result for a glyph looks wrong and you want to see the runner-up candidates instead of accepting a single guess, which is useful for correction passes and for flagging low-confidence text.

You receive choices from the `Choices` array on an `OcrResult.Character`, reached by walking an `OcrResult` returned from `IronTesseract.Read`. Each choice exposes just two members: `Text`, the candidate string for that reading, and `Confidence`, its statistical confidence as a percentage. The array is ordered so the engine's preferred reading comes first, with weaker alternatives following.

To use it, read a character's `Choices`, then compare the `Confidence` values to decide whether the primary reading is trustworthy or whether an alternative is worth substituting. Choices are most informative on noisy or low-quality input where the engine is genuinely uncertain.

The [working with OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) covers reading per-character detail, and the [result confidence how-to](https://ironsoftware.com/csharp/ocr/how-to/tesseract-result-confidence/) explains using confidence values.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Choice Class - IronOCR C# API`
- v2 (human): `Choice: OCR Alternative Readings in C#`
- v3 (balanced): `OcrResult.Choice | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read an alternative OCR reading in C# with the IronOCR Choice class: the candidate Text and its statistical Confidence, from a Character's Choices.`
- v2 (human): `See the runner-up readings for a recognized character in C# with the IronOCR Choice class: each candidate's text and confidence percentage.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Choice class in C#: the Text and Confidence of an alternative character reading from a Character's Choices.`

---

## Structured data

**TechArticle abstract**

> Inspecting an alternative reading the OCR engine considered for a character in C# uses the IronOCR OcrResult.Choice class. You receive choices from the Choices array on an OcrResult.Character after IronTesseract.Read. Each exposes Text, the candidate string, and Confidence, its statistical confidence as a percentage, ordered preferred reading first.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Choice live in the IronOCR API?",
    "answer": "OcrResult.Choice is a class in the IronOcr namespace, shipped in IronOcr.dll, deriving from System.Object. You receive instances from the Choices array on an OcrResult.Character."
  },
  {
    "question": "How do you see alternative readings for a recognized character in C#?",
    "answer": "Walk an OcrResult down to a Character and read its Choices array. Each OcrResult.Choice exposes Text for the candidate string and Confidence for its percentage, ordered with the preferred reading first."
  }
]
```
