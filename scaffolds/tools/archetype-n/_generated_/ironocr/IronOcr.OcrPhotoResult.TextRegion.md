<!--
N-Mid (value struct). Frame E. IronOCR. Verified 2026-06-23: sealed class : ValueType, IEquatable<TextRegion>; ctors; Empty; props PageNumber, Region, RegionConf, TextInRegion; Equals, GetHashCode.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrPhotoResult.TextRegion.html
-->

## Injected overview (Markdown)

A recognized patch of text in a photo, together with where it sits and how confident the read was, is captured by `OcrPhotoResult.TextRegion`. It is the value you work through when a `OcrPhotoResult` reports text by region rather than as a single block, which is the natural shape for photographed signs, labels, and screens where text appears in scattered areas.

You receive these regions from a photo read rather than constructing them yourself, though the constructors exist if you need to model one. Each region exposes `TextInRegion` for the recognized text, `Region` for the bounding `Rectangle` on the source image, and `RegionConf` for the confidence of that region. `PageNumber` identifies the page or frame the region came from when the input had more than one.

Because it is a value type, comparisons go through `Equals` and `GetHashCode`, and the static `Empty` field gives a default region for an absent or unset value. Read `TextInRegion` and `Region` together when you want both the content and its placement, for example to draw a box around each detected area.

The [read from photo how-to](https://ironsoftware.com/csharp/ocr/how-to/read-photo/) covers reading text from photographs, and the [read photo example](https://ironsoftware.com/csharp/ocr/examples/read-photo/) shows working with the photo result.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrPhotoResult.TextRegion - IronOCR C# API`
- v2 (human): `TextRegion: Photo OCR Text Areas in C#`
- v3 (balanced): `TextRegion Struct | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read a photo OCR text region in C# with the IronOCR TextRegion struct: TextInRegion, Region rectangle, RegionConf confidence, and PageNumber.`
- v2 (human): `Get each recognized text area from a photo in C# with the IronOCR TextRegion struct: the text, its bounding rectangle, and a confidence value.`
- v3 (balanced): `Reference for the IronOCR OcrPhotoResult.TextRegion struct in C#: TextInRegion, Region, RegionConf, and PageNumber from a photo read.`

---

## Structured data

**TechArticle abstract**

> Capturing a recognized patch of text from a photo in C# uses the IronOCR OcrPhotoResult.TextRegion value type. You receive regions from an OcrPhotoResult, each exposing TextInRegion for the text, Region for the bounding Rectangle, RegionConf for confidence, and PageNumber for the source page or frame. It is a struct, so it compares through Equals and offers a static Empty default.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrPhotoResult.TextRegion live in the IronOCR API?",
    "answer": "OcrPhotoResult.TextRegion is a value-type struct in the IronOcr namespace, shipped in IronOcr.dll, deriving from System.ValueType and implementing IEquatable. You receive instances from an OcrPhotoResult."
  },
  {
    "question": "How do you read text areas from a photo in C#?",
    "answer": "Read a photo into an OcrPhotoResult, then for each TextRegion read TextInRegion for the recognized text and Region for its bounding rectangle. RegionConf reports the confidence and PageNumber the source page."
  }
]
```
