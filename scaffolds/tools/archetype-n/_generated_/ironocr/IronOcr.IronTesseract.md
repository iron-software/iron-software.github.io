<!--
N-Full (central engine class; large method surface -> functional buckets). Frame A. IronOcr. Implements IOcrEngine.
Members verified 2026-06-23: ctors IronTesseract(), IronTesseract(TesseractConfiguration); field Configuration; props Language, MultiThreaded, EnableTesseractConsoleMessages; methods Read overloads (OcrInputBase, OcrInputBase[], AnyBitmap, String, +Rectangle, IDocumentId), ReadAsync, ReadDocumentAdvanced(OcrInputBase,ModelType), ReadHandwriting, ReadPassport, ReadLicensePlate, ReadPhoto(OcrInputBase,ModelType), ReadScreenShot, ConvertToSearchablePdf/Bytes, AddSecondaryLanguage(OcrLanguage|String), ClearSecondaryLanguages, UseCustomTesseractLanguageFile; event OcrProgress.
Cross-class: OcrInput ctor (OcrInput.html), OcrResult.Text/Words verified.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.IronTesseract.html
-->

## Injected overview (Markdown)

`IronTesseract` runs Tesseract OCR on images and PDFs in .NET, turning scanned pages, photos, and documents into text and searchable PDFs. It is the engine a developer reaches for behind a search like "C# Tesseract OCR": construct one, point it at an `OcrInput`, and call a read. It wraps Iron Software's tuned Tesseract 5 build, so the same object handles a clean scan, a noisy photo, or a multi-page PDF.

Create one with `new IronTesseract()`, or `new IronTesseract(TesseractConfiguration)` to start from a prepared configuration. Set `Language` to the document's natural language, add more with `AddSecondaryLanguage` for multilingual pages, and flip `MultiThreaded` to read pages and images on parallel threads. The `Configuration` field exposes a `TesseractConfiguration` for fine-grained engine control, and `EnableTesseractConsoleMessages` surfaces the engine's own diagnostics. Subscribe to the `OcrProgress` event to report progress on long reads.

The read surface groups into functional buckets. **Standard reads** are the `Read` overloads, which accept an `OcrInputBase`, an array of inputs, an `AnyBitmap`, or an image path (with an optional `Rectangle` to limit OCR to a region) and return an `OcrResult`; the `IDocumentId` overloads read an existing PDF. **Asynchronous reads** are the `ReadAsync` overloads, which return an awaitable result with an optional timeout for keeping the call off a request thread. **Specialized machine-learning reads** target specific content: `ReadDocumentAdvanced`, `ReadHandwriting`, `ReadPassport`, `ReadLicensePlate`, `ReadPhoto`, and `ReadScreenShot`, each returning a result type tuned to that scenario, with matching async forms. **Searchable-PDF conversion** is handled by `ConvertToSearchablePdf` and `ConvertToSearchablePdfBytes`, which OCR a PDF's images and overlay the recognized text. Custom language data loads through `AddSecondaryLanguage` and `UseCustomTesseractLanguageFile`, and `ClearSecondaryLanguages` resets the set.

```csharp
using IronOcr;

var ocr = new IronTesseract();
ocr.Language = OcrLanguage.English;
OcrResult result = ocr.Read(new OcrInput("scan.png"));
Console.WriteLine(result.Text);
```

The [Iron Tesseract how-to](https://ironsoftware.com/csharp/ocr/how-to/iron-tesseract/) covers configuring and running a read, the [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) traverses the returned text and words, and the [simple OCR example](https://ironsoftware.com/csharp/ocr/examples/simple-csharp-ocr-tesseract/) shows a minimal read.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronTesseract Class - IronOCR C# API Reference`
- v2 (human): `IronTesseract: Run Tesseract OCR in C#`
- v3 (balanced): `IronTesseract Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Run Tesseract OCR in C# with the IronOCR IronTesseract class: set Language, call Read on an OcrInput, and get an OcrResult, sync or async.`
- v2 (human): `Read images and PDFs in C# with IronOCR's IronTesseract class: configure language, run standard or ML reads, and export searchable PDFs.`
- v3 (balanced): `Reference for IronOCR's IronTesseract class in C#: the Tesseract 5 engine with Read and ReadAsync overloads and specialized ML reads.`

---

## Structured data

**TechArticle abstract**

> IronTesseract runs Tesseract OCR on images and PDFs in C#, the engine behind IronOCR. Construct it, set Language (and AddSecondaryLanguage for multilingual pages), then call a read: the Read and ReadAsync overloads return an OcrResult, while ReadDocumentAdvanced, ReadHandwriting, ReadPassport, ReadLicensePlate, ReadPhoto, and ReadScreenShot target specific content. ConvertToSearchablePdf overlays recognized text onto a PDF.

**FAQPage entries**

```json
[
  {
    "question": "Where does IronTesseract live in the IronOCR API?",
    "answer": "IronTesseract is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from Object and implements IOcrEngine. Construct it with new IronTesseract() and call Read with an OcrInput."
  },
  {
    "question": "How do you read text from an image in C# with IronTesseract?",
    "answer": "Create an IronTesseract, set Language, and call Read with an OcrInput wrapping the image, then read OcrResult.Text. Use ReadAsync for the non-blocking form, and pass a Rectangle to a Read overload to OCR only a region."
  },
  {
    "question": "What specialized reads does IronTesseract provide?",
    "answer": "Beyond the standard Read, IronTesseract offers machine-learning reads for specific content: ReadDocumentAdvanced, ReadHandwriting, ReadPassport, ReadLicensePlate, ReadPhoto, and ReadScreenShot, each returning a result type tuned to that scenario, with async counterparts."
  }
]
```
