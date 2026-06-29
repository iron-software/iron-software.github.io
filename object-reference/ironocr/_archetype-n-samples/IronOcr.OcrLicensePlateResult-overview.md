<!--
N-Mid (3 members). Frame B. IronOcr. Verified 2026-06-23 against OcrLicensePlateResult.html.
Props: Text, Confidence, Licenseplate (note casing: Licenseplate). Base Object, implements IOcrResult.
ReadLicensePlate cross-ref (named on summary "Result from ReadLicensePlate(OcrInputBase)").
-->

## Injected overview (Markdown)

`OcrLicensePlateResult` is what a license-plate read hands back, the small result object that carries just the plate text and where it sat in the image. `IronTesseract.ReadLicensePlate` returns one, so a parking, tolling, or access-control workflow gets the recognized characters without walking a full document model. It is the focused counterpart to `OcrResult`, which exposes the entire page structure, where this type answers one question: what does the plate say, and how sure is the engine.

The result is read straight off the returned object. `Text` holds the recognized plate characters and `Confidence` reports the engine's certainty as a score, so a low value can route a frame for review or a retry. `Licenseplate` is the `Rectangle` that locates the detected plate within the source image, useful for drawing an overlay or cropping the region for a second pass. Read `Confidence` before trusting `Text`, and use `Licenseplate` when the location matters as much as the characters.

The [read license plate how-to](https://ironsoftware.com/csharp/ocr/how-to/read-license-plate/) walks through a full read, and the [license plate example](https://ironsoftware.com/csharp/ocr/examples/read-license-plate/) shows the result fields in code.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrLicensePlateResult Class - IronOCR C# API`
- v2 (human): `OcrLicensePlateResult: Plate Reads in C#`
- v3 (balanced): `OcrLicensePlateResult Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read license plate results in C# with the IronOCR OcrLicensePlateResult class: get the plate Text, Confidence score, and Licenseplate rectangle.`
- v2 (human): `Get license plate output in C# from the IronOCR OcrLicensePlateResult: the recognized text, a confidence score, and the plate's location.`
- v3 (balanced): `Reference for the IronOCR OcrLicensePlateResult class in C#: the plate Text, Confidence, and Licenseplate region from ReadLicensePlate.`

---

## Structured data

**TechArticle abstract**

> Reading a license plate in C# returns the IronOCR OcrLicensePlateResult class, the focused result IronTesseract.ReadLicensePlate produces. It exposes Text with the recognized plate characters, Confidence as the engine's certainty score, and Licenseplate, a Rectangle locating the plate in the source image. Check Confidence before trusting Text, and use Licenseplate to overlay or crop the detected region.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrLicensePlateResult live in the IronOCR API?",
    "answer": "OcrLicensePlateResult is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from System.Object and implements IOcrResult, and IronTesseract.ReadLicensePlate returns it."
  },
  {
    "question": "How do you read a license plate in C#?",
    "answer": "Call ReadLicensePlate on an IronTesseract to get an OcrLicensePlateResult, then read its Text for the plate characters and Confidence for the certainty score. The Licenseplate property gives the rectangle where the plate was found."
  }
]
```
