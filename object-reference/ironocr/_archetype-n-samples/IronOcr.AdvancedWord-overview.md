<!--
N-Mid (override; 1 own member ToString, rich inherited surface from AdvancedOcrElement). Frame E. IronOcr.
Obtained from AdvancedOcrResultBase.Words (AdvancedWord[]) verified 2026-06-23.
Inherited members on AdvancedOcrElement: Text, BoundingBox, X, Y, Width, Height, PageNumber, RegionIndex, RegionConfidence.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.AdvancedWord.html
-->

## Injected overview (Markdown)

Word-level results from an advanced OCR read are carried by `AdvancedWord`. Each instance is one word the engine recognized, paired with the pixel rectangle that places it on the page, so a project can lay text back over an image, draw word boxes, or search by location. It is the word-granularity counterpart of `AdvancedCharacter`, which exposes the same data one glyph at a time.

You obtain an `AdvancedWord` from the `Words` array on an `AdvancedOcrResultBase`, the result returned by the advanced and handwriting reads on `IronTesseract`. Iterating that array walks every word found across the document in reading order.

The recognized text is on `Text`, and the geometry comes from members inherited from `AdvancedOcrElement`: `BoundingBox` gives the pixel rectangle, `X`, `Y`, `Width`, and `Height` give the same box as separate values, and `PageNumber` reports the 1-based page. `RegionIndex` and `RegionConfidence` connect the word to its text region and that region's confidence, which helps when discarding uncertain words before further processing.

```csharp
foreach (AdvancedWord word in result.Words)
    Console.WriteLine($"{word.Text} ({word.Width}x{word.Height})");
```

The [read document advanced how-to](https://ironsoftware.com/csharp/ocr/how-to/read-document-advanced/) covers an advanced read end to end, and the [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) demonstrates traversing words and their coordinates.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AdvancedWord Class - IronOCR C# API Reference`
- v2 (human): `AdvancedWord: Per-Word OCR Data in C#`
- v3 (balanced): `AdvancedWord Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `AdvancedWord is a recognized word from IronOCR's advanced read in C#: its Text plus BoundingBox, X, Y, Width, Height, and PageNumber.`
- v2 (human): `Inspect each recognized word in C# with IronOCR's AdvancedWord: read the word and its exact pixel box from an advanced OCR result, with examples.`
- v3 (balanced): `Reference for IronOCR's AdvancedWord in C#: a single recognized word with text and spatial coordinates from an advanced OCR result.`

---

## Structured data

**TechArticle abstract**

> Word-level output from IronOCR's advanced OCR engine in C# is carried by AdvancedWord, obtained from the Words array of an AdvancedOcrResultBase. Its Text holds the recognized word, while BoundingBox, X, Y, Width, Height, and PageNumber (inherited from AdvancedOcrElement) place it on the page. RegionIndex and RegionConfidence link it to its text region.

**FAQPage entries**

```json
[
  {
    "question": "Where does AdvancedWord live in the IronOCR API?",
    "answer": "AdvancedWord is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from AdvancedOcrElement, and you obtain instances from the Words array on an AdvancedOcrResultBase."
  },
  {
    "question": "How do you get the position of a recognized word in C#?",
    "answer": "Read BoundingBox for the pixel rectangle, or X, Y, Width, and Height for the same box as separate values. PageNumber gives the 1-based page. These members are inherited from AdvancedOcrElement and shared with AdvancedCharacter."
  }
]
```
