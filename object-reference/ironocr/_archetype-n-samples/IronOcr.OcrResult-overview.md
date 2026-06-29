<!--
N-Full. Frame B. IronOcr. Members verified 2026-06-23 against OcrResult.html.
Properties: Text, Pages, Words, Paragraphs, Lines, Characters, Blocks, Tables, Barcodes, Confidence, PageCount, EngineModeUsed, TesseractVersion, Cancelled.
Methods: SaveAsSearchablePdf, SaveAsHocrFile/String, SaveAsHtmlString/Document, SaveAsTextFile, ToJson, FromJson, ExtractTextFromPage. Base: Object. Implements IOcrResult, IDocumentPageContainer<OcrResultPagesCollection>, IDocumentWithExtractableText.
-->

## Injected overview (Markdown)

`OcrResult` is the object you hold after `IronTesseract` reads an image or `OcrInput`, the full document object model for everything the engine recognized. Reach for it whenever a project needs more than a flat string of text: word positions, per-page structure, confidence scores, and the searchable PDF or hOCR export that downstream steps depend on. It is what `IronTesseract.Read` hands back, and it is distinct from the lighter single-purpose results such as `OcrPhotoResult` or `OcrLicensePlateResult`, which expose only a `Text`/`Confidence` trio for one scenario.

A read produces one `OcrResult`. `IronTesseract.Read` returns it directly, so a typical flow constructs an `IronTesseract`, builds an `OcrInput` from images or a PDF, calls `Read`, and then walks the result. The structure spans the whole input: `PageCount` reports how many pages were read, `Pages` exposes the per-page collection, and the overall `Confidence` summarizes recognition quality across the document.

The members fall into clear groups. For text, read `Text` for the full string or `ExtractTextFromPage` for a single page. For structure, iterate `Pages`, `Paragraphs`, `Lines`, `Words`, and `Characters`, with `Blocks` and `Tables` for layout regions and `Barcodes` for any codes found alongside the text. For output, call `SaveAsSearchablePdf` to produce a layered PDF, `SaveAsHocrFile` or `SaveAsHocrString` for hOCR, `SaveAsHtmlString` for HTML, or `ToJson` to serialize the whole model. `EngineModeUsed` and `TesseractVersion` record how the read ran, and `Cancelled` reports whether a cancellation token stopped it early.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput();
input.LoadImage("scan.png");
OcrResult result = ocr.Read(input);
Console.WriteLine(result.Text);
result.SaveAsSearchablePdf("searchable.pdf");
```

The [OCR results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) walks the document model property by property, the [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) shows how to pull text and coordinates, and the [searchable PDF example](https://ironsoftware.com/csharp/ocr/examples/make-pdf-searchable/) builds the layered export.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult Class - IronOCR C# API Reference`
- v2 (human): `OcrResult: The OCR Document Model in C#`
- v3 (balanced): `OcrResult Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read OCR output in C# with the IronOCR OcrResult class: get Text, Pages, Words, Lines, Confidence, Barcodes, and export a searchable PDF or hOCR.`
- v2 (human): `Work with full OCR output in C# through the IronOCR OcrResult class: text, page structure, confidence, barcodes, and searchable PDF export.`
- v3 (balanced): `Reference for the IronOCR OcrResult class in C#: the document model IronTesseract.Read returns, with text, structure, and searchable PDF output.`

---

## Structured data

**TechArticle abstract**

> Working with OCR output in C# runs through the IronOCR OcrResult class, the document object model IronTesseract.Read returns. It exposes the recognized Text plus structured Pages, Paragraphs, Lines, Words, Characters, Blocks, Tables, and Barcodes, along with Confidence, PageCount, and the engine details EngineModeUsed and TesseractVersion. Methods such as SaveAsSearchablePdf, SaveAsHocrString, SaveAsHtmlString, and ToJson export the result.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult live in the IronOCR API?",
    "answer": "OcrResult is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from System.Object and implements IOcrResult and IDocumentWithExtractableText. IronTesseract.Read returns an OcrResult."
  },
  {
    "question": "How do you get the recognized text from an OcrResult in C#?",
    "answer": "Read the Text property for the full document string, or call ExtractTextFromPage to get the text of a single page. For structure, iterate Pages, Paragraphs, Lines, Words, and Characters instead of parsing the flat string."
  },
  {
    "question": "Can OcrResult export a searchable PDF?",
    "answer": "Yes. Call SaveAsSearchablePdf to write a layered, searchable PDF, or SaveAsSearchablePdfBytes and SaveAsSearchablePdfStream for in-memory output. SaveAsHocrString, SaveAsHtmlString, and ToJson cover hOCR, HTML, and JSON export."
  }
]
```
