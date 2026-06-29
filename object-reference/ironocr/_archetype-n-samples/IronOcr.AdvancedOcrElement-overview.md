<!--
N-Full (abstract base, 9 properties). Frame B. IronOcr.
Members verified 2026-06-23: Text, BoundingBox, X, Y, Width, Height, PageNumber, RegionIndex, RegionConfidence.
Derived types: AdvancedCharacter, AdvancedWord (both : AdvancedOcrElement). Obtained via AdvancedOcrResultBase.Characters / .Words.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.AdvancedOcrElement.html
-->

## Injected overview (Markdown)

`AdvancedOcrElement` is the shared shape behind every positioned element an advanced OCR read returns, the common data a recognized word or character carries. It pairs the recognized text with the coordinates that place it on the page image, so any element from an advanced read can be highlighted, cropped, or mapped back onto its source the same way. Its two concrete forms are `AdvancedWord` and `AdvancedCharacter`, which add nothing structural beyond word versus character granularity.

You do not work with `AdvancedOcrElement` directly. You receive its derived types from an `AdvancedOcrResultBase`: the `Words` array yields `AdvancedWord` elements and the `Characters` array yields `AdvancedCharacter` elements. Both result collections come from the advanced and handwriting reads on `IronTesseract`, which is where every element in this hierarchy originates.

The members split into two groups. Content is on `Text`, the recognized string for the element. Geometry is the rest: `BoundingBox` is the element's pixel rectangle, while `X`, `Y`, `Width`, and `Height` express that same box as individual values for code that prefers them separately. `PageNumber` is the 1-based page the element was found on, important for multi-page documents. Two region members add context: `RegionIndex` is the 0-based index of the text region the element belongs to, and `RegionConfidence` is the OCR confidence for that region, which is the value to threshold on when filtering shaky output before display or storage.

```csharp
foreach (AdvancedWord word in result.Words)
    if (word.RegionConfidence > 0.8)
        Console.WriteLine($"{word.Text} @ {word.BoundingBox}");
```

The [read document advanced how-to](https://ironsoftware.com/csharp/ocr/how-to/read-document-advanced/) walks through an advanced read, the [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) covers traversing the recognized elements, and the [read handwritten image how-to](https://ironsoftware.com/csharp/ocr/how-to/read-handwritten-image/) uses the same element shape for handwriting.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AdvancedOcrElement Class - IronOCR C# API`
- v2 (human): `AdvancedOcrElement: Positioned OCR Data in C#`
- v3 (balanced): `AdvancedOcrElement Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `AdvancedOcrElement is the base for IronOCR's advanced OCR elements in C#: Text plus BoundingBox, X, Y, Width, Height, PageNumber, and region data.`
- v2 (human): `Work with positioned OCR data in C# through IronOCR's AdvancedOcrElement, the shared base of AdvancedWord and AdvancedCharacter, with examples.`
- v3 (balanced): `Reference for IronOCR's AdvancedOcrElement in C#: the base class for AdvancedWord and AdvancedCharacter, carrying text and spatial coordinates.`

---

## Structured data

**TechArticle abstract**

> The shared shape behind every positioned element of an IronOCR advanced read in C# is AdvancedOcrElement. It pairs recognized Text with geometry (BoundingBox, X, Y, Width, Height, PageNumber) plus RegionIndex and RegionConfidence. Its concrete forms, AdvancedWord and AdvancedCharacter, are obtained from the Words and Characters arrays of an AdvancedOcrResultBase.

**FAQPage entries**

```json
[
  {
    "question": "Where does AdvancedOcrElement live in the IronOCR API?",
    "answer": "AdvancedOcrElement is an abstract class in the IronOcr namespace, shipped in IronOcr.dll. It derives from Object and is the base type of AdvancedWord and AdvancedCharacter."
  },
  {
    "question": "What classes derive from AdvancedOcrElement in IronOCR?",
    "answer": "AdvancedWord and AdvancedCharacter both derive from AdvancedOcrElement. You obtain them from the Words and Characters arrays on an AdvancedOcrResultBase, the result of an advanced or handwriting read."
  },
  {
    "question": "How do you get an element's position from an advanced OCR read in C#?",
    "answer": "Read BoundingBox for the pixel rectangle, or X, Y, Width, and Height as separate values. PageNumber gives the 1-based page, and RegionConfidence lets you filter low-confidence regions before using the text."
  }
]
```
