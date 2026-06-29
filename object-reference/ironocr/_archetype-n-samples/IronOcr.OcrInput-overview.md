<!--
N-Full (class, 32 members; bucketed). Frame B. IronOcr. Verified 2026-06-23.
ctor OcrInput(); LoadImage/LoadImageFrame(s)/LoadPdf/LoadPdfPage(s)/LoadScannedPdf/LoadPage(s)/Add. Base OcrInputBase (filters + GetPages + Dispose inherited). Consumed by IronTesseract.Read(OcrInputBase) (cross-ref verified).
Funnel slugs verified on disk: how-to/input-images, how-to/input-pdfs, examples/csharp-ocr-input-for-iron-tesseract.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrInput.html
-->

## Injected overview (Markdown)

`OcrInput` is the container you fill with the pages you want to read, whether they come from images or from PDF documents. One input can hold a single screenshot or a hundred scanned pages, and the same object accepts both formats, so a developer assembles a whole job into one input and hands it to `IronTesseract.Read` in a single call. It is the multi-source counterpart to `OcrImageInput`, which wraps just one image.

Construct an empty `OcrInput` with `new OcrInput()`, then load content through one of its `Load` families. The image loaders, `LoadImage`, `LoadImageFrame`, and `LoadImageFrames`, take a file path, `Stream`, `byte[]`, or `AnyBitmap` and add one picture or selected frames of a multi-frame image. The PDF loaders, `LoadPdf`, `LoadPdfPage`, and `LoadPdfPages`, rasterize a born-digital PDF at a chosen DPI, while `LoadScannedPdf` is the path for image-only scanned PDFs. `LoadPage`, `LoadPages`, and `Add` append existing `OcrInputPage` objects you already hold. Every loader accepts an optional `ContentArea` rectangle so only part of each page is read.

Because `OcrInput` derives from `OcrInputBase`, the inherited image filters (`Deskew`, `Binarize`, `DeNoise`, and the rest) and the page accessors `GetPages` and `PageCount` work on the assembled input before you read it. Load every page first, apply any filters the sources need, then pass the input to `Read` and walk the returned `OcrResult`. Dispose the input when done to release the loaded images.

The [input images how-to](https://ironsoftware.com/csharp/ocr/how-to/input-images/) loads pictures, the [input PDFs how-to](https://ironsoftware.com/csharp/ocr/how-to/input-pdfs/) loads documents, and the [OCR input example](https://ironsoftware.com/csharp/ocr/examples/csharp-ocr-input-for-iron-tesseract/) assembles one for a read.

```csharp
using var input = new OcrInput();
input.LoadPdf("invoice.pdf");
input.LoadImage("signature.png");
OcrResult result = ironTesseract.Read(input);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrInput Class - IronOCR C# API Reference`
- v2 (human): `OcrInput: Load Images & PDFs for OCR in C#`
- v3 (balanced): `OcrInput Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Assemble OCR pages in C# with the IronOCR OcrInput class: LoadImage, LoadPdf, and LoadScannedPdf, then pass it to IronTesseract.Read.`
- v2 (human): `Load images and PDFs for OCR in C# with the IronOCR OcrInput class: build one input from many sources, filter it, then read it in one call.`
- v3 (balanced): `Reference for the IronOCR OcrInput class in C#: load images and PDF pages with LoadImage, LoadPdf, and LoadScannedPdf for IronTesseract.Read.`

---

## Structured data

**TechArticle abstract**

> OcrInput is the container you fill with pages for OCR in IronOCR, holding images and PDF pages together in C#. Construct one with new OcrInput(), then load content with LoadImage, LoadImageFrames, LoadPdf, LoadPdfPages, or LoadScannedPdf, each accepting an optional ContentArea. It derives from OcrInputBase, so inherited image filters and GetPages apply before the input is passed to IronTesseract.Read.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrInput live in the IronOCR API?",
    "answer": "OcrInput is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from OcrInputBase and is passed to IronTesseract.Read, which accepts it as an OcrInputBase."
  },
  {
    "question": "How do you load both images and PDFs into one OCR job in C#?",
    "answer": "Create an OcrInput, then call LoadImage for pictures and LoadPdf or LoadScannedPdf for documents on the same instance. Pass the assembled input to IronTesseract.Read to recognize every loaded page in one call."
  },
  {
    "question": "What is the difference between OcrInput and OcrImageInput?",
    "answer": "OcrImageInput wraps a single image, while OcrInput holds many pages from images and PDFs together. Use OcrImageInput for one picture and OcrInput when a job spans several images or PDF pages. Both derive from OcrInputBase."
  }
]
```
