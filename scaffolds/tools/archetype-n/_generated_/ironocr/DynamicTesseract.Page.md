<!--
N-Full / class. Frame A (subject-verb). IronOcr. Base: DisposableBase, IDisposable.
Members verified 2026-06-23: props ImageName{get}, PageSegmentMode{get}, RegionOfInterest{get;set} (Rect); methods GetText, GetHOCRText(int,bool), GetBoxText(int), GetUNLVText, GetMeanConfidence, GetIterator->ResultIterator, AnalyseLayout->PageIterator, DetectBestOrientation(out Orientation,out float), GetSegmentedRegions(PageIteratorLevel)->List<Rectangle>, Dispose.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.Page.html
-->

## Injected overview (Markdown)

`Page` represents one recognized image in IronOCR's low-level Tesseract layer and exposes the text, geometry, and confidence the engine extracted from it. A page is the unit of recognition at this level: feed the engine an image, and the resulting `Page` is where the recognized output is read back.

A `Page` carries the image it was built from through the `ImageName` property, the `PageSegmentMode` that controlled how the engine split the image into regions, and a `RegionOfInterest` (a `Rect`) that can restrict recognition to part of the page. Because it derives from `DisposableBase` and holds a native recognition handle, a `Page` is disposable and should be wrapped in a `using` block so the handle is released when reading finishes.

The text output comes in several shapes. `GetText` returns the plain recognized text, `GetHOCRText` returns positioned hOCR markup, `GetBoxText` returns per-character box coordinates, and `GetUNLVText` returns the UNLV format used in accuracy testing. `GetMeanConfidence` reports the overall recognition confidence as a percentage, which is useful for flagging a low-quality scan before trusting its text. For structural work, `GetIterator` returns a `ResultIterator` that walks the recognized text element by element, `AnalyseLayout` returns a `PageIterator` over layout without running full recognition, and `GetSegmentedRegions` returns a `List<Rectangle>` of regions at a chosen `PageIteratorLevel`. `DetectBestOrientation` reports the page rotation as an `Orientation` so the image can be turned upright before a final read.

```csharp
using DynamicTesseract.Page page = engine.Process(image);
Console.WriteLine(page.GetText());
Console.WriteLine(page.GetMeanConfidence());
```

The [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) covers working with recognized output, the [hOCR export how-to](https://ironsoftware.com/csharp/ocr/how-to/html-hocr-export/) covers positioned markup, and the [detect page rotation how-to](https://ironsoftware.com/csharp/ocr/how-to/detect-page-rotation/) covers orientation.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Page Class - IronOCR C# API Reference`
- v2 (human): `Page: Read Recognized OCR Output in C#`
- v3 (balanced): `Page Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read recognized OCR output in C# with the IronOCR Page class: GetText, GetHOCRText, GetMeanConfidence, GetIterator, and DetectBestOrientation.`
- v2 (human): `Get text, geometry, and confidence from a recognized image in C# with IronOCR's low-level Page class: plain text, hOCR, boxes, and regions.`
- v3 (balanced): `Reference for the IronOCR Page class in C#: read plain text, hOCR, box text, confidence, iterators, and page orientation from a recognized image.`

---

## Structured data

**TechArticle abstract**

> Page represents one recognized image in IronOCR's low-level Tesseract layer in C# and exposes the engine's output. GetText, GetHOCRText, GetBoxText, and GetUNLVText return text in different shapes, GetMeanConfidence reports overall confidence, GetIterator and AnalyseLayout return iterators over results and layout, and DetectBestOrientation reports rotation. It derives from DisposableBase, so dispose it after reading.

**FAQPage entries**

```json
[
  {
    "question": "Where does Page live in the IronOCR API?",
    "answer": "Page is a class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from DisposableBase and implements IDisposable, so wrap it in a using block to release its native recognition handle."
  },
  {
    "question": "How do you read recognized text from a Page in C#?",
    "answer": "Call GetText for plain text, GetHOCRText for positioned hOCR markup, or GetBoxText for per-character box coordinates. GetMeanConfidence returns the overall recognition confidence, and GetIterator returns a ResultIterator for element-by-element traversal."
  },
  {
    "question": "How is Page different from IronTesseract's OcrResult?",
    "answer": "Page is the low-level DynamicTesseract recognition unit exposing raw engine output and iterators. Most applications use the high-level IronTesseract API and its OcrResult instead, which wraps this layer in a richer, managed result model."
  }
]
```
