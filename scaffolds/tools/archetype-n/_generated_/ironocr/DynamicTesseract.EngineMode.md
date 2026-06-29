<!--
N-Lite/enum. Members verified 2026-06-23: Default, LstmOnly, TesseractAndLstm, TesseractOnly (value__ is the backing field, omitted).
Salience: Default first, then modern LstmOnly, combined, legacy TesseractOnly. Namespace DynamicTesseract; assembly IronOcr.dll.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.EngineMode.html
-->

## Injected overview (Markdown)

`EngineMode` selects which recognition engine the `DynamicTesseract` interop layer runs. `Default` lets the library choose the recommended path. `LstmOnly` runs only the modern neural LSTM engine, the usual choice for accuracy on printed text. `TesseractAndLstm` runs both the legacy and neural engines together, and `TesseractOnly` runs the legacy engine alone, kept for compatibility with older trained data. For everyday reading, IronOCR's high-level configuration is the simpler route; the [advanced reading configuration how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-configurations-for-advanced-reading/) covers tuning the engine.

```csharp
var mode = EngineMode.LstmOnly;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `EngineMode Enum - IronOCR C# API Reference`
- v2 (human): `EngineMode: Pick the OCR Engine in C#`
- v3 (balanced): `EngineMode Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the OCR engine in C# with the IronOCR EngineMode enum: Default, LstmOnly, TesseractAndLstm, or TesseractOnly for the DynamicTesseract layer.`
- v2 (human): `Select which Tesseract engine runs in C# with the IronOCR EngineMode enum: the modern LstmOnly path, both engines, or the legacy TesseractOnly mode.`
- v3 (balanced): `Reference for the IronOCR EngineMode enum in C#: Default, LstmOnly, TesseractAndLstm, and TesseractOnly recognition paths.`

---

## Structured data

**TechArticle abstract**

> Select the recognition engine in IronOCR's DynamicTesseract layer with EngineMode in C#. Default chooses the recommended path, LstmOnly runs the modern neural engine, TesseractAndLstm runs both legacy and neural engines, and TesseractOnly runs the legacy engine for older trained data. For everyday reading, IronOCR's high-level configuration is simpler.
