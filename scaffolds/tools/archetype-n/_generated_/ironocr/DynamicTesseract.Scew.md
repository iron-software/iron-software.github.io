<!--
N-Mid (struct, ValueType). Members verified 2026-06-23: ctor(float angle, float confidence); Angle, Confidence (get-only); Equals, GetHashCode, ToString, op_Equality, op_Inequality.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.Scew.html
-->

## Injected overview (Markdown)

`Scew` is the small record a deskew measurement returns when IronOCR estimates how far a scanned page is tilted. It pairs the detected tilt with a measure of how trustworthy that estimate is, so a workflow can decide whether to rotate the page straight before recognition.

The struct carries two read-only values. `Angle` is the skew angle in degrees, the amount the page would need to rotate to sit level, and `Confidence` rates how strongly the underlying sweep agreed on that angle. A low confidence is the signal to leave the page as-is rather than rotate on a weak guess. The value is produced by the skew estimation step and consumed when correcting orientation, so a typical flow reads `Angle`, checks `Confidence` against a threshold, and rotates only when the measurement is solid. Because it is a value type, instances compare by value through the supplied `Equals` and equality operators. The [orientation correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-orientation-correction/) shows straightening a tilted scan before reading.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Scew Struct - IronOCR C# API Reference`
- v2 (human): `Scew: Read Page Skew Angle in C#`
- v3 (balanced): `Scew Struct | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read the detected page skew in C# with the IronOCR Scew struct: Angle gives the tilt in degrees and Confidence rates how reliable the estimate is.`
- v2 (human): `Measure how far a scan is tilted in C# with the IronOCR Scew struct: check the Angle in degrees and the Confidence before rotating a page straight.`
- v3 (balanced): `Reference for the IronOCR Scew struct in C#: Angle and Confidence values from skew detection used to decide whether to deskew a page.`

---

## Structured data

**TechArticle abstract**

> Read the detected tilt of a scanned page in IronOCR for C# with the Scew struct. Angle reports the skew in degrees and Confidence rates how reliable that estimate is, so a workflow checks the confidence against a threshold before rotating the page straight ahead of recognition.

**FAQPage entries**

```json
[
  {
    "question": "Where does Scew live in the IronOCR API?",
    "answer": "Scew is a value-type struct in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from System.ValueType and is returned by the skew-estimation step, exposing the read-only Angle and Confidence values."
  },
  {
    "question": "How do you tell whether a detected skew angle is reliable in C#?",
    "answer": "Read the Confidence value on the Scew result alongside Angle. A high confidence means the sweep agreed on the tilt and the page is safe to rotate; a low confidence is the cue to leave the page unrotated rather than correct on a weak estimate."
  }
]
```
