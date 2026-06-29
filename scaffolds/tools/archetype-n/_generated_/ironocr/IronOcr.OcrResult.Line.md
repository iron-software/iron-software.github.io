<!--
N-Full. Frame E. IronOCR. Members verified 2026-06-23: fields BaselineAngle, BaselineOffset, Block, Paragraph; props Characters, LineNumber, Words; base OcrResult.OcrResultTextElement (Text, Confidence inherited).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Line.html
-->

## Injected overview (Markdown)

A single line of recognized text, with the words and characters that make it up, is exposed through `OcrResult.Line`. It sits between paragraphs and words in the IronOCR result tree, so it is the level you read when you want text grouped the way it appears on the page, line by line, rather than as one flat string or as individual glyphs.

You obtain lines by walking an `OcrResult` from `IronTesseract.Read`: enumerate a page's paragraphs and their `Lines`, or read the `Lines` array on a `Block`. Each line carries the inherited `Text` and `Confidence` from `OcrResult.OcrResultTextElement`, plus `LineNumber` for its one-based position within the result. From a line you can drill down with the `Words` and `Characters` arrays, or move up to the containing `Block` and `Paragraph` fields, which keeps navigation in both directions without re-reading the document.

For layout-sensitive work the line adds geometry beyond the inherited bounding box. `BaselineAngle` reports the angle at which the line slopes, and `BaselineOffset` gives the pixel offset that defines that slope, both helpful when a scan is skewed and you need to measure or correct orientation before further processing. Reading `Text` per line is the common path; the `Words` and `Characters` arrays are there when you need to go finer within a line you have already located, and the `Block` and `Paragraph` fields let you confirm which region a given line belongs to.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput("document.png");
OcrResult result = ocr.Read(input);
foreach (OcrResult.Line line in result.Pages[0].Lines)
    Console.WriteLine($"{line.LineNumber}: {line.Text}");
```

The [working with OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) walks the result tree from pages to lines to words, the [detect page rotation how-to](https://ironsoftware.com/csharp/ocr/how-to/detect-page-rotation/) covers handling skewed scans, and the [results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) reads line-level text from a scan.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Line Class - IronOCR C# API`
- v2 (human): `Line: Read OCR Text Line by Line in C#`
- v3 (balanced): `OcrResult.Line | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read a line of OCR text in C# with the IronOCR Line class: inherited Text and Confidence, LineNumber, Words, Characters, BaselineAngle, and Block links.`
- v2 (human): `Get OCR output grouped line by line in C# with the IronOCR Line class: line text, confidence, word and character arrays, and baseline geometry.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Line class in C#: line Text, Confidence, LineNumber, Words, Characters, and baseline angle from an OcrResult.`

---

## Structured data

**TechArticle abstract**

> Reading OCR text grouped line by line in C# uses the IronOCR OcrResult.Line element. Obtain lines by walking an OcrResult from IronTesseract.Read down to a page's or block's Lines. Each line exposes inherited Text and Confidence, a one-based LineNumber, Words and Characters arrays for drilling down, Block and Paragraph links for moving up, and BaselineAngle and BaselineOffset for skew measurement.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Line live in the IronOCR API?",
    "answer": "OcrResult.Line is a class in the IronOcr namespace, shipped in IronOcr.dll, deriving from OcrResult.OcrResultTextElement. You receive instances by walking an OcrResult down to a page's or block's Lines array."
  },
  {
    "question": "How do you read OCR output one line at a time in C#?",
    "answer": "Run IronTesseract.Read to get an OcrResult, then enumerate the Lines array on a page or block and read each line's inherited Text property. LineNumber gives its one-based position in the result."
  },
  {
    "question": "How do you detect a skewed line of text with OcrResult.Line?",
    "answer": "Read BaselineAngle for the angle at which the line slopes and BaselineOffset for the pixel offset that defines the slope. Together they let you measure or correct orientation on a skewed scan."
  }
]
```
