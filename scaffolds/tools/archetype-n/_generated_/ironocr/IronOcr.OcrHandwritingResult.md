<!--
N-Mid (4 members). Frame E. IronOcr. Members verified 2026-06-23: Text, Confidence, TextLines, SaveAsTextFile(String). Base Object; implements IOcrResult.
Returned by IronTesseract.ReadHandwriting(OcrInputBase) (cross-ref verified). TextLines is List<OcrHandwritingResult.TextLine>.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrHandwritingResult.html
-->

## Injected overview (Markdown)

Recognized handwriting, line by line, lives on `OcrHandwritingResult`. It is the object `IronTesseract.ReadHandwriting` hands back, holding the transcribed text of a handwritten image along with where each line sits, so a developer reads the words and keeps the on-page layout from one result.

`Text` returns the full transcription as a single string, the quickest way to pull every recognized word at once. `Confidence` reports the average per-character accuracy where 1 equals 100 percent, a signal worth checking because handwriting reads less reliably than print. `TextLines` is a list of `OcrHandwritingResult.TextLine` entries, each a recognized line with its position on the input, which lets code preserve line breaks or map text back to the image. `SaveAsTextFile` writes the result straight to a plain `.txt` file when only the words are needed. Read `Text` for a fast dump, or iterate `TextLines` when layout matters.

The [handwriting read how-to](https://ironsoftware.com/csharp/ocr/how-to/read-handwritten-image/) produces this result, and the [handwriting read example](https://ironsoftware.com/csharp/ocr/examples/read-handwritten-image/) shows a short run.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrHandwritingResult - IronOCR C# API`
- v2 (human): `OcrHandwritingResult: Read Handwriting in C#`
- v3 (balanced): `OcrHandwritingResult | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read handwriting in C# with the IronOCR OcrHandwritingResult class: Text, Confidence, TextLines, and SaveAsTextFile from ReadHandwriting.`
- v2 (human): `Get transcribed handwriting and line positions in C# from the IronOCR OcrHandwritingResult class, returned by ReadHandwriting.`
- v3 (balanced): `Reference for the IronOCR OcrHandwritingResult class in C#: Text, Confidence, and TextLines for handwriting returned by ReadHandwriting.`

---

## Structured data

**TechArticle abstract**

> Read handwriting line by line in IronOCR with the OcrHandwritingResult class, returned by IronTesseract.ReadHandwriting in C#. Text gives the full transcription, Confidence reports average per-character accuracy, and TextLines lists each recognized line with its position. SaveAsTextFile writes the words to a plain text file when layout is not needed.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrHandwritingResult live in the IronOCR API?",
    "answer": "OcrHandwritingResult is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from Object, implements IOcrResult, and is returned by IronTesseract.ReadHandwriting."
  },
  {
    "question": "How do you read handwriting from an image in C#?",
    "answer": "Call IronTesseract.ReadHandwriting to get an OcrHandwritingResult, then read Text for the full transcription. Iterate TextLines to keep line positions, or call SaveAsTextFile to write the words to a file."
  }
]
```
