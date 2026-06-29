<!--
N-Full (abstract base; impl IOcrResult). Frame D. IronOcr.
Members verified 2026-06-23: Text, Confidence, Characters (AdvancedCharacter[]), Words (AdvancedWord[]); SaveAsSearchablePdf(String,Boolean,String,String), SaveAsSearchablePdfBytes(Boolean,String,String), SaveAsSearchablePdfStream(Boolean,String,String).
Produced by IronTesseract advanced/handwriting reads (ReadDocumentAdvanced -> OcrDocAdvancedResult, ReadHandwriting -> OcrHandwritingResult).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.AdvancedOcrResultBase.html
-->

## Injected overview (Markdown)

Reading a document with IronOCR's advanced engine produces an `AdvancedOcrResultBase`, the result that both gives you the recognized text and exports it as a searchable PDF. It is the shared base of the advanced-read results, so the same members work whether the read targeted a general document or handwriting. Concrete result types such as `OcrDocAdvancedResult` and `OcrHandwritingResult` extend it.

You obtain one by calling an advanced read on `IronTesseract`: `ReadDocumentAdvanced` returns an `OcrDocAdvancedResult` and `ReadHandwriting` returns an `OcrHandwritingResult`, both of which are `AdvancedOcrResultBase` results. From there you inspect the recognized content or write it straight to a searchable PDF without a second pass.

Two members give you the text: `Text` is the full recognized string for the whole input, and `Confidence` is the average per-character OCR accuracy from 0 to 1, the number to gate on before trusting the output. Two more give you positioned detail: `Characters` is an `AdvancedCharacter[]` and `Words` is an `AdvancedWord[]`, each element carrying its own coordinates for highlighting, cropping, or layout work, so the same result drives both plain text and a positioned overlay. The searchable-PDF members handle export without a second OCR pass: `SaveAsSearchablePdf` writes the overlaid PDF to a file path, `SaveAsSearchablePdfBytes` returns it as a byte array, and `SaveAsSearchablePdfStream` returns it as a stream, each accepting options for the document title and the OCR text overlay.

```csharp
var result = ocr.ReadDocumentAdvanced(input, ModelType.Document);
Console.WriteLine(result.Text);
result.SaveAsSearchablePdf("searchable.pdf");
```

The [read document advanced how-to](https://ironsoftware.com/csharp/ocr/how-to/read-document-advanced/) covers an advanced read, the [searchable PDF how-to](https://ironsoftware.com/csharp/ocr/how-to/searchable-pdf/) walks through the export, and the [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) traverses the words and characters.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AdvancedOcrResultBase Class - IronOCR C# API`
- v2 (human): `AdvancedOcrResultBase: Advanced OCR Results in C#`
- v3 (balanced): `AdvancedOcrResultBase Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `AdvancedOcrResultBase is IronOCR's advanced-read result in C#: Text, Confidence, Characters, Words, and SaveAsSearchablePdf export methods.`
- v2 (human): `Read text and export searchable PDFs in C# with IronOCR's AdvancedOcrResultBase, the base of advanced and handwriting results, with examples.`
- v3 (balanced): `Reference for IronOCR's AdvancedOcrResultBase in C#: recognized Text, Confidence, Characters, Words, and searchable-PDF export methods.`

---

## Structured data

**TechArticle abstract**

> Reading a document with IronOCR's advanced engine in C# produces an AdvancedOcrResultBase. Text holds the recognized string and Confidence the average accuracy, while Characters and Words expose positioned AdvancedCharacter and AdvancedWord elements. SaveAsSearchablePdf, SaveAsSearchablePdfBytes, and SaveAsSearchablePdfStream export the result. You obtain one from IronTesseract.ReadDocumentAdvanced or ReadHandwriting.

**FAQPage entries**

```json
[
  {
    "question": "Where does AdvancedOcrResultBase live in the IronOCR API?",
    "answer": "AdvancedOcrResultBase is an abstract class in the IronOcr namespace, shipped in IronOcr.dll. It derives from Object, implements IOcrResult, and is the base of OcrDocAdvancedResult and OcrHandwritingResult."
  },
  {
    "question": "How do you get an AdvancedOcrResultBase in C#?",
    "answer": "Call an advanced read on IronTesseract: ReadDocumentAdvanced returns an OcrDocAdvancedResult and ReadHandwriting returns an OcrHandwritingResult, both of which are AdvancedOcrResultBase results."
  },
  {
    "question": "How do you export an advanced OCR result to a searchable PDF?",
    "answer": "Call SaveAsSearchablePdf with a file path to write the overlaid PDF, or use SaveAsSearchablePdfBytes for a byte array and SaveAsSearchablePdfStream for a stream. Each accepts options for the document title and OCR overlay."
  }
]
```
