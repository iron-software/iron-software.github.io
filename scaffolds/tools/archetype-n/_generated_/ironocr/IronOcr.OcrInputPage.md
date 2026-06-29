<!--
N-Full (class, 14 members). Frame B. IronOcr. Verified 2026-06-23.
Props: ContentArea (get/set), Width, Height, Index, HorizontalDPI, VerticalDPI (get). Methods: ToBitmap, SaveAsImage, GetTextRegions, FindTextRegion, GetCropRectangleImage, DrawRectanglesOnPage. Base Object; OcrInput.Page derives from it. Obtained via OcrInputBase.GetPages() (cross-ref verified).
Funnel verified: how-to/ocr-region-of-an-image, how-to/input-images.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrInputPage.html
-->

## Injected overview (Markdown)

`OcrInputPage` is one page, a single image, inside an `OcrInput`. A developer reaches for it to inspect or adjust an individual page after loading, rather than treating the whole input as one block: read a page's dimensions, restrict the read to a region, or export the page back out as an image. The pages of an input are enumerated by `OcrInputBase.GetPages`, which returns one `OcrInputPage` per loaded image.

The geometry properties describe the page as loaded. `Width` and `Height` give its pixel size, `HorizontalDPI` and `VerticalDPI` its resolution, and `Index` its position in the input. `ContentArea` is the one settable property: assign a `Rectangle` to limit recognition to part of the page, the building block behind region-of-interest reads. The methods cover two jobs. Region discovery is handled by `FindTextRegion`, which returns the bounding rectangle of the text on the page, and `GetTextRegions`, which returns a list of regions for a page with several text blocks. Image export is handled by `ToBitmap`, which returns the page as an `AnyBitmap`, `SaveAsImage`, which writes it to a file, `GetCropRectangleImage`, which returns just the `ContentArea`, and `DrawRectanglesOnPage`, which renders rectangles onto the page for debugging.

Set `ContentArea` to read only the part of a page that matters, or call `FindTextRegion` first to let IronOCR locate the text, then read the input as usual. Do not confuse `OcrInputPage` with `OcrInput.Page`, the nested type that extends it.

The [region of an image how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-region-of-an-image/) reads a content area, and the [input images how-to](https://ironsoftware.com/csharp/ocr/how-to/input-images/) loads the pages.

```csharp
using var input = new OcrInput();
input.LoadImage("page.png");
OcrInputPage page = input.GetPages().First();
page.ContentArea = new Rectangle(0, 0, 600, 200);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrInputPage Class - IronOCR C# API`
- v2 (human): `OcrInputPage: Work With One OCR Page in C#`
- v3 (balanced): `OcrInputPage Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Work with a single OCR page in C# with the IronOCR OcrInputPage class: ContentArea, FindTextRegion, ToBitmap, and SaveAsImage.`
- v2 (human): `Inspect and crop one page of an OCR input in C# with the IronOCR OcrInputPage class: read its size, set a content area, or export it.`
- v3 (balanced): `Reference for the IronOCR OcrInputPage class in C#: page size, ContentArea, FindTextRegion, and image export from GetPages.`

---

## Structured data

**TechArticle abstract**

> OcrInputPage is one page within an OcrInput in IronOCR, the object you inspect or adjust per page in C#. Width, Height, Index, and the DPI properties describe the loaded page, while the settable ContentArea restricts recognition to a region. FindTextRegion and GetTextRegions locate text, and ToBitmap, SaveAsImage, and GetCropRectangleImage export the page. Pages come from OcrInputBase.GetPages.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrInputPage live in the IronOCR API?",
    "answer": "OcrInputPage is a class in the IronOcr namespace, shipped in IronOcr.dll. It derives from Object, and the nested OcrInput.Page type extends it. Pages are obtained from OcrInputBase.GetPages."
  },
  {
    "question": "How do you OCR only part of a page in C#?",
    "answer": "Get the OcrInputPage from OcrInputBase.GetPages, then assign a Rectangle to its ContentArea property to limit recognition to that area. Call FindTextRegion first to let IronOCR locate the text automatically."
  },
  {
    "question": "What is the difference between OcrInputPage and OcrInput.Page?",
    "answer": "OcrInputPage is the standalone page type returned by GetPages. OcrInput.Page is a nested type that extends OcrInputPage. In everyday code you work with the OcrInputPage instances the input gives you."
  }
]
```
