<!--
N-Lite/enum. Declared: public sealed class TesseractEngineMode : Enum. Members verified 2026-06-23: Default, LstmOnly, TesseractAndLstm, TesseractOnly.
Cross-ref: TesseractConfiguration.EngineMode verified.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.TesseractEngineMode.html
-->

## Injected overview (Markdown)

Selecting the recognition algorithm Tesseract runs sets `TesseractConfiguration.EngineMode` to a `TesseractEngineMode` value. `TesseractAndLstm` combines the legacy engine with the neural LSTM model and is the recommended mode for IronOCR, `LstmOnly` uses just the neural model, `TesseractOnly` uses just the legacy engine, and `Default` lets Tesseract pick. The [Tesseract config how-to](https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/) sets engine options.

```csharp
ocr.Configuration.EngineMode = TesseractEngineMode.TesseractAndLstm;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TesseractEngineMode Enum - IronOCR C# API`
- v2 (human): `TesseractEngineMode: Pick the OCR Engine in C#`
- v3 (balanced): `TesseractEngineMode Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the Tesseract OCR algorithm in C# with the IronOCR TesseractEngineMode enum: TesseractAndLstm, LstmOnly, TesseractOnly, or Default.`
- v2 (human): `Set which engine IronOCR uses in C# with the TesseractEngineMode enum: the recommended TesseractAndLstm, neural LstmOnly, or legacy TesseractOnly.`
- v3 (balanced): `Reference for the IronOCR TesseractEngineMode enum in C#: TesseractAndLstm, LstmOnly, TesseractOnly, and Default for TesseractConfiguration.`

---

## Structured data

**TechArticle abstract**

> Choose the Tesseract recognition algorithm in C# with the IronOCR TesseractEngineMode enum, set on TesseractConfiguration.EngineMode. TesseractAndLstm is the recommended mode, LstmOnly uses the neural model, TesseractOnly uses the legacy engine, and Default lets Tesseract choose.
