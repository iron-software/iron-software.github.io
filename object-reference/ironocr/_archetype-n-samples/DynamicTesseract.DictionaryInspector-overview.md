<!--
N-Mid (class, 3 members incl ctor). Frame B (identity-by-role). IronOCR / DynamicTesseract.
Verified 2026-06-23: class : Object; ctor DictionaryInspector(); TrainedDataSupportsLtsm(String, TesseractVersion);
TrainedDataSupportsOem(String, TesseractVersion). Namespace DynamicTesseract; assembly IronOcr.dll; base Object.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.DictionaryInspector.html
-->

## Injected overview (Markdown)

`DictionaryInspector` is the helper that answers whether a Tesseract trained-data file works with a given engine mode before a read is attempted. A `.traineddata` language pack may carry an LSTM model, a legacy model, or both, and pairing the wrong pack with the wrong engine mode is a common cause of a failed or empty OCR run. This type lets interop code check that compatibility up front.

Construct one and call `TrainedDataSupportsLtsm`, passing the trained-data path and a `TesseractVersion`, to confirm the pack contains the LSTM model the modern neural engine needs. `TrainedDataSupportsOem` performs the matching check for the legacy Tesseract OEM path. Each returns a simple yes or no for that combination, which sits in the validation step that runs before a custom or downloaded language pack is loaded. It lives in the `DynamicTesseract` interop layer beneath IronOCR; most projects rely on IronOCR's bundled language packs and never need it, but code that ships its own trained data can use it to fail fast with a clear message.

The [custom language how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-custom-language/) covers loading your own trained data, and the [custom font training how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-custom-font-training/) walks through producing a pack.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DictionaryInspector - IronOCR C# API Reference`
- v2 (human): `DictionaryInspector: Check Trained Data in C#`
- v3 (balanced): `DictionaryInspector Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Check Tesseract trained-data compatibility in C# with the IronOCR DictionaryInspector: TrainedDataSupportsLtsm and TrainedDataSupportsOem.`
- v2 (human): `Confirm a .traineddata pack works with your engine mode in C# using the IronOCR DictionaryInspector class before loading a custom language.`
- v3 (balanced): `Reference for the IronOCR DictionaryInspector in C#: verify a trained-data file supports the LSTM or legacy OEM engine path before loading.`

---

## Structured data

**TechArticle abstract**

> DictionaryInspector confirms whether a Tesseract trained-data file is compatible with an engine mode in IronOCR for C#. Construct one and call TrainedDataSupportsLtsm or TrainedDataSupportsOem, each taking a trained-data path and a TesseractVersion, to check the pack before loading a custom or downloaded language and to fail fast on a mismatch.

**FAQPage entries**

```json
[
  {
    "question": "Where does DictionaryInspector live in the IronOCR API?",
    "answer": "DictionaryInspector is a class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from Object and is constructed directly with its default constructor before its check methods are called."
  },
  {
    "question": "How do you check a Tesseract trained-data file in C# with IronOCR?",
    "answer": "Create a DictionaryInspector and call TrainedDataSupportsLtsm to test the LSTM neural path, or TrainedDataSupportsOem for the legacy engine path, passing the trained-data path and a TesseractVersion. Use it to validate a custom language pack before loading it."
  }
]
```
