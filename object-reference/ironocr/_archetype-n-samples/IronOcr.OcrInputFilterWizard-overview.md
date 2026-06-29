<!--
N-Mid (Run overloads). Frame C. IronOcr. Verified 2026-06-23: static string Run(string filePath, [out string bestReadResult], [out double ironOcrConfidence], IronTesseract tesseract = null). Base Object.
Cross-ref: IronTesseract optional arg. OcrFilters / ApplyMultipleFilters on OcrInputBase referenced.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrInputFilterWizard.html
-->

## Injected overview (Markdown)

When a scan refuses to read cleanly and the right filters are not obvious, `OcrInputFilterWizard` finds them by brute force. Its static `Run` method tries combinations of IronOCR's image filters against an image and reports the combination that produced the highest IronTesseract confidence, so a developer skips the manual trial-and-error of guessing which corrections a difficult source needs.

`Run` takes an image file path and an optional `IronTesseract` to read with, and returns the best read result as a string. The richer overloads add `out` parameters: `out string bestReadResult` and `out double ironOcrConfidence` surface the winning text and its confidence score, which is the signal you act on when deciding whether the source is usable. Treat the wizard as a tuning step run once on a representative image, then apply the filters it points to through `OcrInputBase.ApplyMultipleFilters` on the real inputs rather than calling it on every read.

The [filter wizard how-to](https://ironsoftware.com/csharp/ocr/how-to/filter-wizard/) walks through a run, and the [filter wizard example](https://ironsoftware.com/csharp/ocr/examples/filter-wizard/) shows the call.

```csharp
string text = OcrInputFilterWizard.Run("scan.png", out double confidence);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrInputFilterWizard - IronOCR C# API`
- v2 (human): `OcrInputFilterWizard: Auto-Tune OCR Filters`
- v3 (balanced): `OcrInputFilterWizard | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Auto-tune OCR filters in C# with the IronOCR OcrInputFilterWizard class: Run tries filter combinations and returns the best read and confidence.`
- v2 (human): `Find the best image filters for a difficult scan in C# with the IronOCR OcrInputFilterWizard class: Run reports the winning text and confidence.`
- v3 (balanced): `Reference for the IronOCR OcrInputFilterWizard class in C#: the static Run method brute-forces filter combinations for the highest confidence.`

---

## Structured data

**TechArticle abstract**

> When a scan reads poorly, find the right image filters in IronOCR with the OcrInputFilterWizard class in C#. Its static Run method brute-forces combinations of IronOCR's filters against an image and reports the combination with the highest IronTesseract confidence. Overloads expose out parameters for the best read result and its confidence score, so the filters can then be applied through ApplyMultipleFilters.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrInputFilterWizard live in the IronOCR API?",
    "answer": "OcrInputFilterWizard is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from Object and exposes a static Run method that takes an image path and an optional IronTesseract."
  },
  {
    "question": "How do you find the best OCR filters for an image in C#?",
    "answer": "Call OcrInputFilterWizard.Run with the image path; it tries filter combinations and returns the best read, with out parameters for the text and confidence. Apply the chosen filters through OcrInputBase.ApplyMultipleFilters on real inputs."
  }
]
```
