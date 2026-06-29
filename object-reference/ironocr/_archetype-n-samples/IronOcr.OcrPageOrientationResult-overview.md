<!--
N-Mid (3 members + ctor). Frame E. IronOcr. Verified 2026-06-23 against OcrPageOrientationResult.html.
Props: PageNumber (int), RotationAngle (int), HighConfidence (bool). Ctor public. Base Object.
-->

## Injected overview (Markdown)

The rotation a page needs before its text reads correctly arrives in C# as an `OcrPageOrientationResult`. It reports, per page, how far the content is turned and whether the detection was confident, so a workflow can rotate a sideways or upside-down scan before recognition rather than feeding skewed pages to the engine. It is the orientation-detection counterpart that travels with `OrientationConfidence`, which carries the underlying confidence values this result summarizes into a single flag.

The members are read straight off the object. `PageNumber` identifies which page the result describes, `RotationAngle` gives the detected rotation in degrees that the page should be corrected by, and `HighConfidence` is a boolean that reports whether the detection was reliable enough to act on automatically. Branch on `HighConfidence` first: when it is true, apply `RotationAngle` to straighten the page; when it is false, route the page for review or fall back to a more thorough detection mode rather than trusting an uncertain angle.

The [detect page rotation how-to](https://ironsoftware.com/csharp/ocr/how-to/detect-page-rotation/) shows orientation detection in a read, and the [image orientation correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-orientation-correction/) straightens pages before recognition.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrPageOrientationResult Class - IronOCR C#`
- v2 (human): `OcrPageOrientationResult: Page Angle in C#`
- v3 (balanced): `OcrPageOrientationResult Class | IronOCR C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read page orientation in C# with the IronOCR OcrPageOrientationResult class: get PageNumber, RotationAngle, and a HighConfidence flag.`
- v2 (human): `Find how far a page is rotated in C# with the IronOCR OcrPageOrientationResult: the page number, rotation angle, and a confidence flag.`
- v3 (balanced): `Reference for the IronOCR OcrPageOrientationResult class in C#: the PageNumber, RotationAngle, and HighConfidence from orientation detection.`

---

## Structured data

**TechArticle abstract**

> The rotation a scanned page needs in C# is reported by the IronOCR OcrPageOrientationResult class, the result of page orientation detection. PageNumber identifies the page, RotationAngle gives the detected rotation in degrees, and HighConfidence flags whether the detection was reliable. Branch on HighConfidence: apply RotationAngle when true, and route the page for review or a more thorough detection mode when false.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrPageOrientationResult live in the IronOCR API?",
    "answer": "OcrPageOrientationResult is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from System.Object and represents the result of page orientation detection on an OcrInput."
  },
  {
    "question": "How do you tell how far a page is rotated in C#?",
    "answer": "Read the RotationAngle property of an OcrPageOrientationResult for the detected rotation in degrees, use PageNumber to identify the page, and check HighConfidence to decide whether the angle is reliable enough to apply automatically."
  }
]
```
