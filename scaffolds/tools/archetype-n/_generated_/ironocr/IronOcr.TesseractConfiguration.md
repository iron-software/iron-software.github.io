<!--
N-Full (class, ICloneable, ~13 members; bucketed). Frame B. IronOcr.
Members verified 2026-06-23: EngineMode, PageSegmentationMode, TesseractVersion, ReadBarCodes, ReadDataTables, RenderHocr, RenderSearchablePdf, TesseractVariables, BlackListCharacters, WhiteListCharacters, Clone(), TrySaveAllTesseractVariablesToFile(string).
Cross-ref verified: IronTesseract.Configuration returns TesseractConfiguration; IronTesseract(TesseractConfiguration) ctor.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.TesseractConfiguration.html
-->

## Injected overview (Markdown)

`TesseractConfiguration` is the settings object that fine-tunes how IronOCR's Tesseract engine recognizes text, exposing the same options a command-line or C++ Tesseract user would reach for. A developer uses it to switch engines, restrict which characters are accepted, turn on barcode or table reading, and emit searchable PDF or hOCR output, all without leaving managed code. It is the knob set most often when out-of-the-box accuracy needs tuning for a specific kind of document.

Every `IronTesseract` instance owns one through its `Configuration` property, so the usual pattern is to read that property and set values on it before calling `Read`. The same object can also be passed to the `IronTesseract(TesseractConfiguration)` constructor when a prepared configuration is reused across engines. Because the class implements `ICloneable`, `Clone` produces an independent copy, which is handy for keeping a baseline configuration and varying one setting per job.

The settings fall into a few groups. Engine selection covers `EngineMode`, `TesseractVersion`, and `PageSegmentationMode`, which together choose the recognition algorithm, the binary, and the layout-analysis strategy. Output toggles, `RenderSearchablePdf`, `RenderHocr`, `ReadBarCodes`, and `ReadDataTables`, decide what the read produces beyond plain text. Character control is handled by `WhiteListCharacters` and `BlackListCharacters`, which constrain or forbid specific glyphs. For options without a dedicated property, `TesseractVariables` is a `Dictionary<string, object>` that passes raw Tesseract variables through, and `TrySaveAllTesseractVariablesToFile` writes the active set out for inspection. Start from the defaults and change only what a document demands, since over-constraining segmentation or the character set is a common cause of dropped text.

```csharp
using IronOcr;

var ocr = new IronTesseract();
ocr.Configuration.EngineMode = TesseractEngineMode.TesseractAndLstm;
ocr.Configuration.PageSegmentationMode = TesseractPageSegmentationMode.Auto;
ocr.Configuration.RenderSearchablePdf = true;
```

The [Tesseract config how-to](https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/) walks through the options, the [fast configuration how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-fast-configuration/) tunes for speed, and the [Tesseract OCR tutorial](https://ironsoftware.com/csharp/ocr/tutorials/c-sharp-tesseract-ocr/) puts a full read together.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TesseractConfiguration Class - IronOCR C# API`
- v2 (human): `TesseractConfiguration: Tune OCR Settings in C#`
- v3 (balanced): `TesseractConfiguration Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Tune the IronOCR Tesseract engine in C# with the TesseractConfiguration class: set EngineMode, PageSegmentationMode, character lists, and output.`
- v2 (human): `Configure IronOCR in C# with the TesseractConfiguration class: choose the engine and segmentation, restrict characters, and emit searchable PDF.`
- v3 (balanced): `Reference for the IronOCR TesseractConfiguration class in C#: EngineMode, PageSegmentationMode, character lists, and searchable-PDF output.`

---

## Structured data

**TechArticle abstract**

> TesseractConfiguration is the settings object that fine-tunes IronOCR's Tesseract engine in C#, reached through IronTesseract.Configuration. It selects the engine with EngineMode, TesseractVersion, and PageSegmentationMode, toggles RenderSearchablePdf, RenderHocr, ReadBarCodes, and ReadDataTables, restricts glyphs with WhiteListCharacters and BlackListCharacters, and passes raw options through TesseractVariables. It implements ICloneable for independent copies.

**FAQPage entries**

```json
[
  {
    "question": "Where does TesseractConfiguration live in the IronOCR API?",
    "answer": "TesseractConfiguration is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from Object and implements ICloneable, and is reached through the Configuration property of an IronTesseract instance."
  },
  {
    "question": "How do you change Tesseract settings in C# with IronOCR?",
    "answer": "Read the Configuration property on an IronTesseract instance and set values on it before calling Read. For example, assign EngineMode, PageSegmentationMode, or RenderSearchablePdf. You can also pass a prepared TesseractConfiguration to the IronTesseract constructor."
  },
  {
    "question": "How do you restrict which characters IronOCR recognizes?",
    "answer": "Set WhiteListCharacters to limit recognition to a specific set of glyphs, or BlackListCharacters to forbid certain ones. Both are string properties on TesseractConfiguration. Over-constraining the set is a common cause of missing text."
  }
]
```
