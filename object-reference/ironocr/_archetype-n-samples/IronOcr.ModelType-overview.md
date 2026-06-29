<!--
N-Lite/enum. Members verified 2026-06-23: Normal, Enhanced. Base Enum.
Consumed by IronTesseract.ReadDocumentAdvanced(OcrInputBase, ModelType) -> OcrDocAdvancedResult.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.ModelType.html
-->

## Injected overview (Markdown)

Choosing the machine-learning model behind an advanced read runs through `ModelType`, the second argument to `IronTesseract.ReadDocumentAdvanced`. `Normal` is the standard model, tuned for speed and general documents, and is the right default for most scans. `Enhanced` trades processing time for higher accuracy on challenging images, complex layouts, or low-quality sources, so reach for it when a `Normal` read leaves errors. The [advanced document read how-to](https://ironsoftware.com/csharp/ocr/how-to/read-document-advanced/) walks through the workflow, and the [read table how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) uses the result it produces.

```csharp
OcrDocAdvancedResult result = ironTesseract.ReadDocumentAdvanced(input, ModelType.Enhanced);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ModelType Enum - IronOCR C# API Reference`
- v2 (human): `ModelType: Pick an OCR ML Model in C#`
- v3 (balanced): `ModelType Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the OCR ML model in C# with the IronOCR ModelType enum: Normal for speed or Enhanced for accuracy, passed to ReadDocumentAdvanced.`
- v2 (human): `Select the model behind an advanced read in C# with the IronOCR ModelType enum: Normal for fast general scans, Enhanced for tough images.`
- v3 (balanced): `Reference for the IronOCR ModelType enum in C#: Normal and Enhanced models for ReadDocumentAdvanced, trading speed against accuracy.`

---

## Structured data

**TechArticle abstract**

> Choose the machine-learning model for an advanced OCR read in IronOCR with ModelType, the argument passed to IronTesseract.ReadDocumentAdvanced in C#. Normal is the default model optimized for speed and general documents, while Enhanced gives higher accuracy on challenging images and complex layouts at the cost of more processing time.
