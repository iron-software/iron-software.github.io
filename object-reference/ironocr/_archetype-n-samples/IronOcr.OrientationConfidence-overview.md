<!--
N-Mid (2 props + ctor). Frame B. IronOcr. Verified 2026-06-23 against OrientationConfidence.html.
Props: ActualConfidence (float[]), MinConfidence (float, get;set;). Ctor public. Base Object. No summary on page.
Sibling of OcrPageOrientationResult (HighConfidence) -> different frame.
-->

## Injected overview (Markdown)

`OrientationConfidence` is the object that holds the confidence numbers behind a page-orientation decision, the raw scores that decide whether a detected rotation is trustworthy. Where `OcrPageOrientationResult` reports a single `HighConfidence` flag, this type carries the values that flag is derived from, plus the threshold those values are tested against, so a workflow can apply its own tolerance instead of relying on the built-in cutoff.

There are two members to work with. `ActualConfidence` is a `float[]` of the confidence scores the orientation detector produced, one per candidate the engine weighed. `MinConfidence` is a settable `float` threshold: a detection counts as confident only when the actual scores clear it. Raise `MinConfidence` to demand stronger evidence before auto-rotating a page, or lower it to accept borderline detections in a controlled batch. Read `ActualConfidence` to inspect or log the scores, and set `MinConfidence` to tune how strict the orientation check is for a given source of documents.

The [detect page rotation how-to](https://ironsoftware.com/csharp/ocr/how-to/detect-page-rotation/) covers orientation detection, and the [image orientation correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-orientation-correction/) applies the correction to a scan.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OrientationConfidence Class - IronOCR C# API`
- v2 (human): `OrientationConfidence: Tune Page Angle in C#`
- v3 (balanced): `OrientationConfidence Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Tune orientation detection in C# with the IronOCR OrientationConfidence class: read ActualConfidence scores and set the MinConfidence threshold.`
- v2 (human): `Control how strict page-angle detection is in C# with the IronOCR OrientationConfidence: inspect actual scores and set a minimum threshold.`
- v3 (balanced): `Reference for the IronOCR OrientationConfidence class in C#: the ActualConfidence scores and the settable MinConfidence orientation threshold.`

---

## Structured data

**TechArticle abstract**

> Tuning how strict page-orientation detection is in C# uses the IronOCR OrientationConfidence class, which holds the scores behind an orientation decision. ActualConfidence is a float array of the confidence values the detector produced, and MinConfidence is a settable threshold those values must clear to count as confident. Raise MinConfidence to demand stronger evidence before auto-rotating, or lower it to accept borderline detections in a controlled batch.

**FAQPage entries**

```json
[
  {
    "question": "Where does OrientationConfidence live in the IronOCR API?",
    "answer": "OrientationConfidence is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from System.Object and carries the confidence scores and threshold behind a page-orientation detection."
  },
  {
    "question": "How do you set a confidence threshold for page orientation in C#?",
    "answer": "Set the MinConfidence property on an OrientationConfidence to the minimum score a detection must clear to count as confident. Read the ActualConfidence float array to inspect the scores the orientation detector actually produced."
  }
]
```
