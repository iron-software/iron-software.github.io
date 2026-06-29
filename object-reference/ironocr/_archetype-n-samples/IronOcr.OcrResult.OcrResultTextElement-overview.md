<!--
N-Full (abstract base of the OCR text model). Frame B. IronOcr.
Members verified 2026-06-23: Text, Confidence, BoundingBox, Color, TextDirection, Contents, Clone, ToString.
Base OcrResult.OcrResultElement. Namespace IronOcr.OcrResult.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.OcrResultTextElement.html
-->

## Injected overview (Markdown)

`OcrResultTextElement` is the shared shape behind every piece of recognized text an OCR read returns. Whenever you walk the words, lines, paragraphs, tables, or pages of an `OcrResult`, each item is built on this element, so the same handful of properties answer "what does it say, how sure is the engine, and where is it on the page" no matter which level you are inspecting.

A developer rarely constructs this element directly. It arrives as the base of the concrete result types: `OcrResult.Word`, `OcrResult.Line`, `OcrResult.Paragraph`, `OcrResult.Table`, and `OcrResult.Page` all derive from it, and you receive them by reading their arrays off the result. Because the element is abstract, you work with it through those derived types, but you read the same members on each one, which is what makes post-processing an OCR result uniform.

The members you reach for first are `Text`, the recognized string for that element (truncated when the product is unlicensed), and `Confidence`, the averaged per-character accuracy where 1 is 100 percent. `BoundingBox` gives the position as a `RectangleF`, `Color` reports the detected text color, and `TextDirection` returns an `OcrResult.TextFlow` so you can tell left-to-right text from right-to-left or vertical scripts. `Contents` is a synonym of `Text`, and `Clone` produces a copy when you need to detach an element from its result. Filter by `Confidence` to drop low-quality reads, and read `BoundingBox` to draw highlights or crop regions.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput();
input.LoadImage("scan.png");
OcrResult result = ocr.Read(input);

foreach (OcrResult.Word word in result.Pages[0].Words)
    Console.WriteLine($"{word.Text} ({word.Confidence:P0})");
```

The [OCR results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) walks the result tree, and the [reading results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) shows how to pull text, confidence, and position from each element.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResultTextElement - IronOCR C# API`
- v2 (human): `OcrResultTextElement: OCR Text Model in C#`
- v3 (balanced): `OcrResultTextElement Class | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR OcrResultTextElement class is the base of every OCR result item in C#: read Text, Confidence, BoundingBox, Color, and TextDirection.`
- v2 (human): `Inspect recognized text in C# through the IronOCR OcrResultTextElement base: every word, line, and page exposes Text, Confidence, and position.`
- v3 (balanced): `Reference for the IronOCR OcrResultTextElement class in C#: the shared base for OCR words, lines, paragraphs, tables, and pages with text and position.`

---

## Structured data

**TechArticle abstract**

> Every recognized text item in an IronOCR result in C# is built on the OcrResultTextElement base. It supplies Text and the Contents synonym, a Confidence score, a BoundingBox as a RectangleF, a Color, and a TextDirection returning OcrResult.TextFlow. The concrete OcrResult.Word, Line, Paragraph, Table, and Page types derive from it, so the same members read across every level of an OcrResult.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResultTextElement live in the IronOCR API?",
    "answer": "OcrResultTextElement is an abstract class in the IronOcr.OcrResult namespace, shipped in IronOcr.dll. It derives from OcrResult.OcrResultElement and is the base of the concrete OcrResult.Word, Line, Paragraph, Table, and Page types."
  },
  {
    "question": "How do you read the text and confidence of an OCR element in C#?",
    "answer": "Each result item exposes Text for the recognized string and Confidence for the averaged per-character accuracy, where 1 is 100 percent. Read BoundingBox for position and TextDirection for the reading order. Filter by Confidence to discard low-quality results."
  },
  {
    "question": "What is the difference between Text and Contents on an OCR element?",
    "answer": "Contents is a synonym of Text, both returning the full recognized string for that element. Use either; Text is the conventional choice. Both are truncated when IronOCR is running unlicensed."
  }
]
```
