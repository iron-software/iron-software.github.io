<!--
N-Full. Frame C (when-fronted). IronBarcode.
Threshold/Lower/Upper/Rectangle props verified; ctors verified; ImageFilters access path verified against image-correction.md 2026-06-22.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.AdaptiveThresholdFilter.html
-->

## Injected overview (Markdown)

When a barcode image has uneven lighting, glare, or a shadow falling across part of the frame, a single global cutoff cannot cleanly separate the bars from the background, and `AdaptiveThresholdFilter` is the preprocessing step that handles it. It applies a Bradley adaptive threshold, computing a local cutoff for each region of the image rather than one value for the whole picture, so a barcode that is bright on one side and dim on the other still binarizes into clean black bars on a white field. This is the filter to reach for on photos and scans with non-uniform illumination, where a plain binary threshold would lose part of the code.

The filter is one of the `IImageFilter` implementations that go into the `ImageFilterCollection` assigned to `BarcodeReaderOptions.ImageFilters`. The reader applies the filters in collection order before it attempts decoding, so an adaptive threshold typically sits early in the pipeline, ahead of a sharpen or contrast pass, because it produces the clean two-tone image those later steps refine. A developer constructs the filter, adds it to the collection, and passes the options to `BarcodeReader.Read` along with the source image.

Several constructors trade off convenience against control. The parameterless form uses tuned defaults, while overloads accept a `Threshold`, the `Lower` and `Upper` replacement colors, and a `Rectangle` that confines the operation to a region of interest. The `Threshold` property sets the sensitivity of the local comparison, `Lower` and `Upper` choose the two output colors the pixels collapse to, and `Rectangle` restricts the filter to part of the frame when only one zone needs correcting. Tune `Threshold` first; the defaults already suit most documents with patchy lighting.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new AdaptiveThresholdFilter() }
};
var results = BarcodeReader.Read("uneven-lighting.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) walks through each filter on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) shows a full read of a low-quality image. For images that are also skewed or rotated, the [image orientation correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-orientation-correction/) is the companion guide.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AdaptiveThresholdFilter - IronBarcode C# API`
- v2 (human): `AdaptiveThresholdFilter: Binarize Barcodes in C#`
- v3 (balanced): `AdaptiveThresholdFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Binarize uneven barcode images in C# with the IronBarcode AdaptiveThresholdFilter: a Bradley adaptive threshold added to BarcodeReaderOptions.ImageFilters.`
- v2 (human): `Clean up barcode photos with patchy lighting in C# using IronBarcode AdaptiveThresholdFilter, a per-region threshold that beats a single global cutoff.`
- v3 (balanced): `Reference for the IronBarcode AdaptiveThresholdFilter class in C#: apply a Bradley adaptive threshold to barcode images before reading them.`

---

## Structured data

**TechArticle abstract**

> AdaptiveThresholdFilter binarizes barcode images in C# with IronBarcode by applying a Bradley adaptive threshold, computing a local cutoff per region so images with uneven lighting still produce clean black bars. It implements IImageFilter, goes into the ImageFilterCollection on BarcodeReaderOptions.ImageFilters, and exposes Threshold, Lower, Upper, and Rectangle to tune sensitivity, output colors, and a region of interest.

**FAQPage entries**

```json
[
  {
    "question": "Where does AdaptiveThresholdFilter live in the IronBarcode API?",
    "answer": "AdaptiveThresholdFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "When should you use AdaptiveThresholdFilter instead of BinaryThresholdFilter?",
    "answer": "Use AdaptiveThresholdFilter when lighting across the image is uneven, since it computes a separate threshold for each region. Use BinaryThresholdFilter when a single global cutoff is enough, such as a uniformly lit image."
  },
  {
    "question": "How do you apply AdaptiveThresholdFilter before reading a barcode in C#?",
    "answer": "Create an ImageFilterCollection containing a new AdaptiveThresholdFilter, assign it to BarcodeReaderOptions.ImageFilters, and pass the options to BarcodeReader.Read with your image. The filter runs in collection order before decoding."
  }
]
```
