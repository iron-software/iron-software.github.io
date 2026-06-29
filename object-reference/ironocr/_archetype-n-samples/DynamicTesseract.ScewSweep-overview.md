<!--
N-Mid (struct, ValueType). Members verified 2026-06-23: ctor(int reduction=4, float range=7F, float delta=1F); Default (static); DefaultDelta, DefaultRange, DefaultReduction (consts); Delta, Range, Reduction (get-only props).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ScewSweep.html
-->

## Injected overview (Markdown)

Tuning how IronOCR searches for a page's skew angle runs through `ScewSweep`, the small settings record that drives the deskew estimation. It bundles the parameters that decide how wide and how finely the estimator hunts for the tilt that best straightens a scan, so a project can trade detection speed against precision.

Three read-only values define a sweep. `Range` is the span of angles searched in degrees, `Delta` is the step between candidate angles within that span, and `Reduction` is the downscaling factor applied while testing, where a larger reduction speeds the search on big images. The `Default` static value supplies a balanced configuration, and the `DefaultRange`, `DefaultDelta`, and `DefaultReduction` constants expose its individual settings for reference. The constructor takes the same three parameters with those defaults, so a custom sweep widens `Range` for badly tilted input or shrinks `Delta` for a finer angle estimate. The [orientation correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-orientation-correction/) covers straightening a skewed page.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ScewSweep Struct - IronOCR C# API Reference`
- v2 (human): `ScewSweep: Tune Deskew Search in C#`
- v3 (balanced): `ScewSweep Struct | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Tune skew-angle search in C# with the IronOCR ScewSweep struct: set Range, Delta, and Reduction, or take the Default balanced configuration.`
- v2 (human): `Control how IronOCR hunts for a page's skew in C# with the ScewSweep struct: widen Range for tilted input or shrink Delta for a finer estimate.`
- v3 (balanced): `Reference for the IronOCR ScewSweep struct in C#: Range, Delta, and Reduction settings plus the Default sweep for deskew estimation.`

---

## Structured data

**TechArticle abstract**

> Tune how IronOCR searches for a page's skew angle in C# with the ScewSweep struct. Range sets the span of angles tested, Delta the step between them, and Reduction the downscaling applied during the search, while the Default value and matching constants supply a balanced starting configuration.

**FAQPage entries**

```json
[
  {
    "question": "Where does ScewSweep live in the IronOCR API?",
    "answer": "ScewSweep is a value-type struct in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from System.ValueType, exposes the read-only Range, Delta, and Reduction values, and offers a Default static configuration for the deskew estimator."
  },
  {
    "question": "What do the Range, Delta, and Reduction values control in C#?",
    "answer": "Range is the span of angles the deskew search covers in degrees, Delta is the step between candidate angles, and Reduction is the downscaling factor used while testing. Widen Range for heavily tilted scans and shrink Delta for a more precise angle estimate."
  }
]
```
