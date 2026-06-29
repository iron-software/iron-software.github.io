<!--
N-Mid (4 members). Frame B. IronOcr. Members verified 2026-06-23: Text, Confidence, Tables, NoOutlineRegions. Base AdvancedOcrResultBase.
Returned by IronTesseract.ReadDocumentAdvanced(OcrInputBase, ModelType) (cross-ref verified).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrDocAdvancedResult.html
-->

## Injected overview (Markdown)

`OcrDocAdvancedResult` is the record you receive from `IronTesseract.ReadDocumentAdvanced`, the machine-learning read built for structured documents. It carries the recognized content of one document together with the layout the advanced model recovered, so a developer reads both the words and the structure around them from a single object.

`Text` holds the full recognized text of the input, and `Confidence` reports the average per-character accuracy as a value where 1 equals 100 percent, useful for deciding whether a result is trustworthy enough to use unattended. `Tables` exposes the recognized tables and their cell contents, the property that makes this result type worth choosing over a plain read when a document contains grids. `NoOutlineRegions` lists the borderless regions the model detected, the areas of text that sit outside a ruled table. Read `Text` for the raw transcription, then walk `Tables` to rebuild the document's grids in code.

The [advanced document read how-to](https://ironsoftware.com/csharp/ocr/how-to/read-document-advanced/) produces this result, and the [read table how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) works through its `Tables` property.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrDocAdvancedResult - IronOCR C# API`
- v2 (human): `OcrDocAdvancedResult: Tables & Text in C#`
- v3 (balanced): `OcrDocAdvancedResult | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read structured documents in C# with the IronOCR OcrDocAdvancedResult class: Text, Confidence, Tables, and NoOutlineRegions from an advanced read.`
- v2 (human): `Get text and table structure in C# from the IronOCR OcrDocAdvancedResult class, returned by ReadDocumentAdvanced for structured documents.`
- v3 (balanced): `Reference for the IronOCR OcrDocAdvancedResult class in C#: Text, Confidence, Tables, and NoOutlineRegions from ReadDocumentAdvanced.`

---

## Structured data

**TechArticle abstract**

> Receive structured-document output in IronOCR from the OcrDocAdvancedResult class, returned by IronTesseract.ReadDocumentAdvanced in C#. Text holds the full recognized text and Confidence reports average per-character accuracy. Tables exposes recognized tables and their cells, and NoOutlineRegions lists borderless text regions, so a developer reads both content and layout from one object.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrDocAdvancedResult live in the IronOCR API?",
    "answer": "OcrDocAdvancedResult is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from AdvancedOcrResultBase and is returned by IronTesseract.ReadDocumentAdvanced."
  },
  {
    "question": "How do you read tables from a document in C#?",
    "answer": "Call IronTesseract.ReadDocumentAdvanced to get an OcrDocAdvancedResult, then read its Tables property for the recognized tables and their cells. Use Text for the full transcription and Confidence to gauge accuracy."
  }
]
```
