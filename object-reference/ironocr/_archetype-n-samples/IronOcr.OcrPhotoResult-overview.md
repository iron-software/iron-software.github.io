<!--
N-Mid (4 members). Frame D. IronOcr. Verified 2026-06-23 against OcrPhotoResult.html.
Props: Text (override), Confidence (override), TextRegions (List<OcrPhotoResult.TextRegion>). Method SaveAsTextFile. Base AdvancedOcrResultBase, implements IOcrResult.
-->

## Injected overview (Markdown)

Reading text out of a photo in C#, a snapshot of a sign, a label, or a receipt rather than a clean scan, produces an `OcrPhotoResult`. It is the result type tuned for camera images, where text appears in scattered regions across the frame instead of neat document lines, and it returns from the photo-reading path on `IronTesseract`. It extends `AdvancedOcrResultBase`, so it shares the advanced-scan result shape while specializing in the spatial layout a photo demands.

The members center on those regions. `TextRegions` is a `List<OcrPhotoResult.TextRegion>`, each entry a block of text found somewhere in the image, which is the property that distinguishes a photo read from a flat document read. `Text` gives the combined recognized text and `Confidence` reports overall certainty, both overriding the base members. `SaveAsTextFile` writes the recognized text straight to a file when a quick dump is all a workflow needs. Iterate `TextRegions` when position matters, and fall back to `Text` for the plain string.

The [read photo how-to](https://ironsoftware.com/csharp/ocr/how-to/read-photo/) walks through reading a camera image, and the [photo reading example](https://ironsoftware.com/csharp/ocr/examples/read-photo/) shows the regions in code.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrPhotoResult Class - IronOCR C# API`
- v2 (human): `OcrPhotoResult: Read Text From Photos in C#`
- v3 (balanced): `OcrPhotoResult Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read photo OCR results in C# with the IronOCR OcrPhotoResult class: get TextRegions, the combined Text, a Confidence score, and SaveAsTextFile.`
- v2 (human): `Get text from a photo in C# with the IronOCR OcrPhotoResult: scattered TextRegions, the combined recognized text, and a confidence score.`
- v3 (balanced): `Reference for the IronOCR OcrPhotoResult class in C#: the TextRegions, Text, and Confidence from reading a camera image.`

---

## Structured data

**TechArticle abstract**

> Reading text from a photo in C# returns the IronOCR OcrPhotoResult class, the result tuned for camera images where text sits in scattered regions. TextRegions is a list of text blocks found across the frame, while Text gives the combined recognized string and Confidence reports overall certainty, both overriding AdvancedOcrResultBase. SaveAsTextFile writes the text to a file. Iterate TextRegions when position matters.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrPhotoResult live in the IronOCR API?",
    "answer": "OcrPhotoResult is a class in the IronOcr namespace, shipped in IronOcr.dll. It extends AdvancedOcrResultBase and implements IOcrResult, and it is returned when IronTesseract reads a photo."
  },
  {
    "question": "How do you get text regions from a photo in C#?",
    "answer": "Read the TextRegions property of an OcrPhotoResult, a list of OcrPhotoResult.TextRegion entries, each a block of text located in the image. Use the combined Text property for the full string, or SaveAsTextFile to write it out."
  }
]
```
