<!--
N-Mid (6 members). Frame D. IronOcr.
Members verified 2026-06-23: Characters, Font, WordNumber, Line, Paragraph, Block. Obtained via OcrResult.Page.Words.
Base OcrResult.OcrResultTextElement. Namespace IronOcr.OcrResult.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Word.html
-->

## Injected overview (Markdown)

Reading a single recognized word, with its characters and its place in the page layout, runs through `OcrResult.Word`. It is the finest text grouping above individual characters, the level most extraction code iterates when it wants words plus their position and confidence.

Words arrive from a page: `OcrResult.Page.Words` returns an array of `Word` in reading order. Each word derives from `OcrResult.OcrResultTextElement`, so you read `Text`, `Confidence`, `BoundingBox`, and `Color` from the shared base, then use the word-specific members to navigate the structure around it.

`Characters` is the array of `OcrResult.Character` that make up the word, in order, for character-level work. `WordNumber` is a 1 based identifier within the result. The navigation members point back up the layout tree: `Line`, `Paragraph`, and `Block` give the containing `OcrResult.Line`, `OcrResult.Paragraph`, and `OcrResult.Block`, so you can ask which line or paragraph a word belongs to. `Font` reports an `OcrResult.OcrFont` but is legacy and null unless the Tesseract 3 engine mode is used, so do not rely on it for current reads.

The [OCR results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) walks words and their parents, and the [reading results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) shows how to read word text, confidence, and position.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Word Class - IronOCR C# API`
- v2 (human): `OcrResult.Word: Read OCR Words in C#`
- v3 (balanced): `OcrResult.Word Class | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR OcrResult.Word class in C# exposes a word's Characters, WordNumber, and its containing Line, Paragraph, and Block.`
- v2 (human): `Read individual OCR words in C# with the IronOCR OcrResult.Word class: get the characters, position, confidence, and the line it belongs to.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Word class in C#: word characters and the Line, Paragraph, and Block that contain each recognized word.`

---

## Structured data

**TechArticle abstract**

> Reading a single recognized word in C# runs through the IronOCR OcrResult.Word class, obtained from OcrResult.Page.Words. Characters returns the word's character array, WordNumber is a 1 based identifier, and Line, Paragraph, and Block point to the containing elements. It derives from OcrResultTextElement for Text, Confidence, and BoundingBox; the legacy Font is null outside Tesseract 3 mode.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Word live in the IronOCR API?",
    "answer": "OcrResult.Word is a class in the IronOcr.OcrResult namespace, shipped in IronOcr.dll. It derives from OcrResult.OcrResultTextElement, and you obtain words from the OcrResult.Page.Words array."
  },
  {
    "question": "How do you find which line a recognized word belongs to in C#?",
    "answer": "Read the word's Line property for the containing OcrResult.Line, or Paragraph and Block to step further up the layout. Iterate Characters for the symbols in the word, and read Text and Confidence from the shared base."
  }
]
```
