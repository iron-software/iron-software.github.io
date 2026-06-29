<!--
N-Full (abstract base, 41 members; bucketed). Frame E. IronOcr. Verified 2026-06-23.
Props TargetDPI, Title. Filter methods (Binarize, Contrast, AdaptiveThreshold; Deskew, Rotate, Scale, HoughTransformStraighten; DeNoise, Despeckle, Sharpen, Dilate, Erode, Open, Close, EnhanceResolution; ReplaceColor, SelectTextColor(s), Invert, ToGrayScale; ApplyMultipleFilters). Page mgmt GetPages, PageCount, RemovePage(s), WithTitle, Dispose. Subclasses OcrImageInput, OcrInput. Consumed by IronTesseract.Read(OcrInputBase).
Funnel verified: how-to/image-quality-correction, how-to/filter-wizard, how-to/input-images.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrInputBase.html
-->

## Injected overview (Markdown)

Image preprocessing in IronOCR, every deskew, denoise, and color fix that lifts recognition accuracy, lives on `OcrInputBase`. It is the shared parent of the concrete inputs `OcrImageInput` and `OcrInput`, so the filter and page operations described here are the ones a developer actually calls on whichever input was built, and the type `IronTesseract.Read` accepts.

A developer rarely names `OcrInputBase` directly; its value is the surface inherited by the inputs. Two properties carry settings: `TargetDPI` declares the working resolution and `Title` labels the input. The filter methods group by job. Thresholding and contrast covers `Binarize`, `Contrast`, and `AdaptiveThreshold`. Geometry covers `Deskew`, `Rotate`, `Scale`, and `HoughTransformStraighten` for tilted scans. Cleanup covers `DeNoise`, `Despeckle`, `Sharpen`, `EnhanceResolution`, and the morphology pair-set `Dilate`, `Erode`, `Open`, and `Close`. Color handling covers `ReplaceColor`, `SelectTextColor`, `SelectTextColors`, `Invert`, and `ToGrayScale`. `ApplyMultipleFilters` runs a chosen `OcrFilters` combination in one call.

Most filter methods return the same `OcrInputBase`, so corrections chain fluently before the read, and many take an optional strength argument such as the deskew angle or a contrast amount when the default needs tuning. Page operations sit alongside the filters: `GetPages` and `PageCount` enumerate the loaded pages, `RemovePage` and `RemovePages` drop pages from the input, `WithTitle` sets a label inline, and `Dispose` frees the images once the read is finished. Apply only the filters a source actually needs, since over-filtering a clean image hurts accuracy more than it helps, then pass the prepared input to `Read` and read the words off the returned `OcrResult`.

The [image quality how-to](https://ironsoftware.com/csharp/ocr/how-to/image-quality-correction/) walks through these filters, the [filter wizard how-to](https://ironsoftware.com/csharp/ocr/how-to/filter-wizard/) picks a combination, and the [input images how-to](https://ironsoftware.com/csharp/ocr/how-to/input-images/) builds the input they run on.

```csharp
using var input = new OcrImageInput("scan.png");
input.Deskew();
input.DeNoise();
OcrResult result = ironTesseract.Read(input);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrInputBase Class - IronOCR C# API`
- v2 (human): `OcrInputBase: OCR Image Filters in C#`
- v3 (balanced): `OcrInputBase Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Preprocess OCR images in C# with the IronOCR OcrInputBase class: Deskew, Binarize, DeNoise, and ApplyMultipleFilters on every input type.`
- v2 (human): `Clean up images before OCR in C# with the IronOCR OcrInputBase class: the deskew, denoise, contrast, and color filters shared by every input.`
- v3 (balanced): `Reference for the IronOCR OcrInputBase class in C#: the shared image-filter and page surface for OcrImageInput and OcrInput.`

---

## Structured data

**TechArticle abstract**

> Image preprocessing for OCR in IronOCR lives on the OcrInputBase class in C#, the shared parent of OcrImageInput and OcrInput. It exposes the TargetDPI and Title properties and the filter methods a developer calls on an input, grouped into thresholding, geometry such as Deskew and Rotate, cleanup such as DeNoise and Sharpen, and color handling, plus ApplyMultipleFilters and page operations like GetPages and RemovePage. It is the type IronTesseract.Read accepts.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrInputBase live in the IronOCR API?",
    "answer": "OcrInputBase is the base class in the IronOcr namespace, shipped in IronOcr.dll. It derives from Object, is the parent of OcrImageInput and OcrInput, and is the parameter type accepted by IronTesseract.Read."
  },
  {
    "question": "How do you clean up an image before OCR in C#?",
    "answer": "Call the inherited filter methods on the input, such as Deskew, Binarize, DeNoise, and Contrast, or run a set at once with ApplyMultipleFilters. Apply only the filters the source needs, then pass the input to IronTesseract.Read."
  },
  {
    "question": "What is the difference between OcrInputBase and OcrInput?",
    "answer": "OcrInputBase is the abstract parent that defines the image filters and page operations. OcrInput and OcrImageInput are the concrete inputs you construct; OcrInput holds many pages and OcrImageInput wraps a single image."
  }
]
```
