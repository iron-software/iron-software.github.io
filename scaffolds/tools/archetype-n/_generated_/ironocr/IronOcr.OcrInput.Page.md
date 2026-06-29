<!--
N-Mid. Frame B. IronOCR. Verified 2026-06-23: base OcrInputPage; inherited ToBitmap, GetTextRegions, FindTextRegion, SaveAsImage, Width, Height, Index, ContentArea, HorizontalDPI, VerticalDPI.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrInput.Page.html
-->

## Injected overview (Markdown)

`OcrInput.Page` is a single page inside an `OcrInput`, the unit you work with when an input holds more than one image. One page can correspond to an appended image, a page of a PDF or TIFF, or a frame of a GIF, so it is how you address an individual sheet within a multi-page or multi-frame document before or after reading.

You obtain pages by enumerating the `Pages` collection of an `OcrInput` you have loaded and appended content to. Each page carries the members it inherits from `OcrInputPage`: `Index` for its position in the input, `Width` and `Height` for its pixel size, and `HorizontalDPI` and `VerticalDPI` for its resolution. `ContentArea` sets or reports the rectangle the engine should read, which is the member to use when you only need part of a page.

For preparing or inspecting a page, `ToBitmap` renders it to an `AnyBitmap`, `SaveAsImage` writes it out (optionally with an `AnyBitmap.ImageFormat`), and `GetTextRegions`, `FindTextRegion`, and `FindMultipleTextRegions` locate text areas on the page. Set the page-level options before calling `IronTesseract.Read` on the parent input.

The [input PDFs how-to](https://ironsoftware.com/csharp/ocr/how-to/input-pdfs/) covers reading multi-page documents, and the [OCR a region how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-region-of-an-image/) uses the page content area.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrInput.Page Class - IronOCR C# API`
- v2 (human): `OcrInput.Page: Per-Page OCR Input in C#`
- v3 (balanced): `OcrInput.Page | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Address one page of an IronOCR OcrInput in C#: read Index, Width, Height, and DPI, set ContentArea, or call ToBitmap and SaveAsImage on the page.`
- v2 (human): `Work with a single page of a multi-page OCR input in C# with the IronOCR OcrInput.Page class: size, DPI, content area, and per-page image export.`
- v3 (balanced): `Reference for the IronOCR OcrInput.Page class in C#: a page within an OcrInput with Index, size, DPI, ContentArea, and ToBitmap.`

---

## Structured data

**TechArticle abstract**

> Addressing one page of a multi-page OcrInput in C# uses the IronOCR OcrInput.Page object, where a page maps to an appended image, a PDF or TIFF page, or a GIF frame. Enumerate the input's Pages and read inherited members from OcrInputPage: Index, Width, Height, HorizontalDPI, VerticalDPI, and ContentArea, plus ToBitmap, SaveAsImage, and the GetTextRegions methods.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrInput.Page live in the IronOCR API?",
    "answer": "OcrInput.Page is a class in the IronOcr namespace, shipped in IronOcr.dll, deriving from OcrInputPage. You obtain instances by enumerating the Pages collection of an OcrInput."
  },
  {
    "question": "How do you read just one page of a multi-page OCR input in C#?",
    "answer": "Load and append content to an OcrInput, then enumerate its Pages and use the page you want. Set ContentArea to limit the read to part of the page, and call IronTesseract.Read on the parent input."
  }
]
```
