<!--
N-Full (abstract base). Frame B. IronOCR. Members verified 2026-06-23: Height, Location, Width, X, Y, ToBitmap(OcrInput); abstract; base Object; derived Barcode + OcrResultTextElement.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.OcrResultElement.html
-->

## Injected overview (Markdown)

`OcrResult.OcrResultElement` is the shared base every positioned item in an OCR result inherits, so any time you ask where a recognized piece of text or a detected barcode sits on the page, you are reading members declared here. It supplies the geometry common to the whole result tree, which is what lets you draw boxes, crop regions, or map coordinates back to the source image regardless of whether the item is a character, a word, a line, or a barcode.

Every element exposes its position and size through `X`, `Y`, `Width`, and `Height`, all measured in pixels from the top-left of the source page. `Location` bundles the same geometry into a single `Rectangle` when you would rather pass one value than four. The element does not hold the text itself; the richer text subclasses add `Text`, `Confidence`, and the navigation members on top of this geometry. Because the type is abstract, you never construct one directly. You receive concrete subclasses by walking an `OcrResult` returned from `IronTesseract.Read`, then reading these inherited members on each item.

`ToBitmap` takes the originating `OcrInput` and returns an `AnyBitmap` cropped to that element, which is handy for saving a snippet of a detected region or feeding it to a downstream step. Two branches extend this base directly: `OcrResult.Barcode` for detected barcodes, and `OcrResult.OcrResultTextElement`, the parent of the text-bearing elements such as `OcrResult.Character`, `OcrResult.Line`, and `OcrResult.Block`.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput("scan.png");
OcrResult result = ocr.Read(input);
foreach (OcrResult.Word word in result.Words)
    Console.WriteLine($"{word.Text} at {word.X},{word.Y} ({word.Width}x{word.Height})");
```

The [working with OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) walks through the result tree, the [highlight text as images how-to](https://ironsoftware.com/csharp/ocr/how-to/highlight-texts-as-images/) uses element geometry to crop regions, and the [results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) shows reading geometry from each element.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResultElement Class - IronOCR C# API`
- v2 (human): `OcrResultElement: OCR Element Geometry in C#`
- v3 (balanced): `OcrResultElement Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Base class for IronOCR result elements in C#: read X, Y, Width, Height, and Location, or call ToBitmap to crop a detected region from an OcrInput.`
- v2 (human): `Get the position and size of any recognized OCR element in C# with the IronOCR OcrResultElement base class: X, Y, Width, Height, and ToBitmap.`
- v3 (balanced): `Reference for the IronOCR OcrResultElement class in C#: the shared geometry, X, Y, Width, Height, Location, and ToBitmap, behind every result item.`

---

## Structured data

**TechArticle abstract**

> Reading the position of any recognized OCR element in C# runs through the IronOCR OcrResultElement base class. It is the abstract parent every result item inherits, exposing X, Y, Width, Height, and a Location Rectangle in source-image pixels, plus a ToBitmap method that crops the element from its OcrInput. OcrResult.Barcode and OcrResult.OcrResultTextElement extend it.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResultElement live in the IronOCR API?",
    "answer": "OcrResult.OcrResultElement is an abstract class in the IronOcr namespace, shipped in IronOcr.dll, deriving from System.Object. OcrResult.Barcode and OcrResult.OcrResultTextElement extend it, and concrete result items inherit its geometry members."
  },
  {
    "question": "How do you get the position of a recognized element in C#?",
    "answer": "Read the X and Y properties for the top-left corner and Width and Height for the size, all in source-image pixels, on any result item such as a Word or Line. Location returns the same geometry as a single Rectangle."
  },
  {
    "question": "What is the difference between OcrResultElement and OcrResultTextElement?",
    "answer": "OcrResultElement carries only geometry and is the base for everything, including barcodes. OcrResult.OcrResultTextElement extends it to add the text members such as Text and Confidence for the character, word, line, and block elements."
  }
]
```
