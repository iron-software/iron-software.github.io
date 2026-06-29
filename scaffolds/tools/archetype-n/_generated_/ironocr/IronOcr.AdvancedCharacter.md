<!--
N-Mid (override; 1 own member ToString, rich inherited surface from AdvancedOcrElement). Frame B. IronOcr.
Obtained from AdvancedOcrResultBase.Characters (AdvancedCharacter[]) verified 2026-06-23.
Inherited members on AdvancedOcrElement: Text, BoundingBox, X, Y, Width, Height, PageNumber, RegionIndex, RegionConfidence.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.AdvancedCharacter.html
-->

## Injected overview (Markdown)

`AdvancedCharacter` is a single recognized character returned by the advanced OCR engine, complete with its position on the page. Each one pairs the decoded glyph with the pixel rectangle that locates it, so a project can highlight, crop, or map individual characters rather than only the run of text. It is the character-level peer of `AdvancedWord`, which groups the same data at word granularity.

You receive an `AdvancedCharacter` from the `Characters` array on an `AdvancedOcrResultBase` (the result type produced by the advanced and handwriting reads on `IronTesseract`). Iterate that array to walk every character the engine found across the document.

The recognized glyph is on `Text`, and the position comes from members inherited from `AdvancedOcrElement`: `BoundingBox` gives the pixel rectangle, `X`, `Y`, `Width`, and `Height` give the same box as separate values, and `PageNumber` reports the 1-based page the character sits on. `RegionIndex` and `RegionConfidence` tie the character back to its text region and that region's confidence score, useful when filtering low-confidence output before display.

```csharp
foreach (AdvancedCharacter ch in result.Characters)
    Console.WriteLine($"{ch.Text} at {ch.X},{ch.Y}");
```

The [read document advanced how-to](https://ironsoftware.com/csharp/ocr/how-to/read-document-advanced/) walks through an advanced read, and the [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) shows how to traverse characters, words, and their coordinates.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AdvancedCharacter Class - IronOCR C# API`
- v2 (human): `AdvancedCharacter: Per-Character OCR Data in C#`
- v3 (balanced): `AdvancedCharacter Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `AdvancedCharacter is a recognized character from IronOCR's advanced read in C#: its Text plus BoundingBox, X, Y, Width, Height, and PageNumber.`
- v2 (human): `Inspect each recognized character in C# with IronOCR's AdvancedCharacter: read the glyph and its exact pixel position from an advanced OCR result.`
- v3 (balanced): `Reference for IronOCR's AdvancedCharacter in C#: a single recognized character with text and spatial coordinates from an advanced OCR result.`

---

## Structured data

**TechArticle abstract**

> AdvancedCharacter is a single recognized character returned by IronOCR's advanced OCR engine in C#, obtained from the Characters array of an AdvancedOcrResultBase. Its Text holds the decoded glyph, while BoundingBox, X, Y, Width, Height, and PageNumber (inherited from AdvancedOcrElement) locate it on the page. RegionIndex and RegionConfidence link it to its text region.

**FAQPage entries**

```json
[
  {
    "question": "Where does AdvancedCharacter live in the IronOCR API?",
    "answer": "AdvancedCharacter is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from AdvancedOcrElement, and you obtain instances from the Characters array on an AdvancedOcrResultBase."
  },
  {
    "question": "How do you get the position of a recognized character in C#?",
    "answer": "Read BoundingBox for the pixel rectangle, or X, Y, Width, and Height for the same box as separate values. PageNumber gives the 1-based page. These members are inherited from AdvancedOcrElement and shared with AdvancedWord."
  }
]
```
