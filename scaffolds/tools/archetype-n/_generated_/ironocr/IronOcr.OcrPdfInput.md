<!--
N-Mid (5 members). Frame F. IronOcr. Verified 2026-06-23 against OcrPdfInput.html.
Ctors take Path/Bytes/Stream/IDocumentId + Password + PdfContents OcrContent + PageIndices + ContentAreas. Prop: OcrContent (PdfContents). Base OcrInputBase, implements IDisposable.
-->

## Injected overview (Markdown)

Reach for `OcrPdfInput` to feed a PDF into an OCR read instead of an image. It wraps a PDF, by file path, byte array, stream, or an `IDocumentId`, so `IronTesseract` can recognize text across its pages the same way it reads a scan. It is the PDF-specific input alongside the image input types, and as an `OcrInputBase` it slots into the same `Read` call every other input uses.

The constructors carry the options a PDF read needs. Each takes the source plus an optional `Password` for protected documents, a `PdfContents` value as `OcrContent` to choose whether to read embedded text, rendered pages, or both, a `PageIndices` sequence to limit the read to specific pages, and a `ContentAreas` array of rectangles to restrict recognition to regions of each page. The `OcrContent` property reports the content mode the input was built with. Because the type implements `IDisposable`, wrap it in a `using` so the document and its resources are released after the read.

The [input PDFs how-to](https://ironsoftware.com/csharp/ocr/how-to/input-pdfs/) covers reading from a PDF, and the [searchable PDF example](https://ironsoftware.com/csharp/ocr/examples/make-pdf-searchable/) turns a read into a searchable document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrPdfInput Class - IronOCR C# API Reference`
- v2 (human): `OcrPdfInput: OCR a PDF in C#`
- v3 (balanced): `OcrPdfInput Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Feed a PDF into OCR in C# with the IronOCR OcrPdfInput class: load by path, bytes, or stream with a password, OcrContent mode, and page limits.`
- v2 (human): `Read a PDF with OCR in C# using the IronOCR OcrPdfInput: wrap a file, stream, or bytes, set the content mode, and restrict pages or regions.`
- v3 (balanced): `Reference for the IronOCR OcrPdfInput class in C#: the OcrInputBase that wraps a PDF for reading, with password, OcrContent, and page options.`

---

## Structured data

**TechArticle abstract**

> Feeding a PDF into an OCR read in C# uses the IronOCR OcrPdfInput class, the input that wraps a PDF by path, byte array, stream, or IDocumentId. Each constructor takes an optional Password, a PdfContents value as OcrContent to set the content mode, a PageIndices sequence to limit pages, and a ContentAreas array to restrict regions. As an OcrInputBase it passes to IronTesseract.Read, and it implements IDisposable, so wrap it in a using.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrPdfInput live in the IronOCR API?",
    "answer": "OcrPdfInput is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from OcrInputBase and implements IDisposable, so it passes to IronTesseract.Read and should be wrapped in a using."
  },
  {
    "question": "How do you OCR a PDF in C#?",
    "answer": "Construct an OcrPdfInput from a file path, byte array, or stream, optionally with a Password and a PdfContents OcrContent mode, then pass it to IronTesseract.Read. Use PageIndices to limit the pages and ContentAreas to restrict recognition to regions."
  }
]
```
