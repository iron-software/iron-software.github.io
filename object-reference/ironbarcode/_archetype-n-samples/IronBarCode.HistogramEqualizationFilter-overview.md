<!--
N-Mid (no properties; ctor () only). Frame F (imperative).
Members verified 2026-06-23: parameterless ctor only, no configurable members; histogram equalization (contrast). ImageFilters path verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.HistogramEqualizationFilter.html
-->

## Injected overview (Markdown)

Reach for `HistogramEqualizationFilter` when a barcode is washed out or under-exposed and the bars barely stand apart from the background. Histogram equalization redistributes an image's brightness levels so the tones spread across the full range, pulling a low-contrast capture into one where dark bars and light spaces separate cleanly. A code shot in poor lighting, behind glare, or from a faded printout often carries enough detail to decode once the contrast is stretched, and this filter performs that stretch automatically with no tuning required.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, where filters run in collection order before the read. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. It exposes only the parameterless constructor and has no configurable properties, so the equalization is applied uniformly across the image; place it early in the collection so later filters operate on the contrast-corrected result.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new HistogramEqualizationFilter() }
};
var results = BarcodeReader.Read("washed-out.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) demonstrates the correction filters on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image through a filter pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HistogramEqualizationFilter - IronBarcode C#`
- v2 (human): `Fix Low-Contrast Barcodes in C# | IronBarcode`
- v3 (balanced): `HistogramEqualizationFilter | IronBarcode C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Fix low-contrast barcode images in C# with IronBarcode HistogramEqualizationFilter: histogram equalization added to ImageFilters before reading.`
- v2 (human): `Rescue a washed-out or under-exposed barcode in C# with IronBarcode HistogramEqualizationFilter, stretching the contrast so bars stand out cleanly.`
- v3 (balanced): `Reference for the IronBarcode HistogramEqualizationFilter class in C#: apply histogram equalization to fix low-contrast images before reading.`

---

## Structured data

**TechArticle abstract**

> HistogramEqualizationFilter stretches the contrast of a barcode image in C# with IronBarcode by redistributing brightness levels across the full range, so a washed-out or under-exposed code separates cleanly into bars and spaces. It implements IImageFilter and is added to the ImageFilterCollection on BarcodeReaderOptions.ImageFilters, and it exposes only a parameterless constructor with no configurable members.

**FAQPage entries**

```json
[
  {
    "question": "Where does HistogramEqualizationFilter live in the IronBarcode API?",
    "answer": "HistogramEqualizationFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "Does HistogramEqualizationFilter have any settings to configure?",
    "answer": "No. The class exposes only a parameterless constructor and has no configurable properties, so the equalization is applied uniformly across the whole image. Construct it and add it to the ImageFilterCollection, placing it early so later filters work on the contrast-corrected result."
  }
]
```
