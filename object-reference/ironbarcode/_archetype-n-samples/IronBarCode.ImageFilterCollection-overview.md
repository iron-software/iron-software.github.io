<!--
N-Mid (class : List<IImageFilter>; ctor(Boolean) + CacheAtEachIteration prop). Frame A (subject-verb).
Members verified; ImageFilters access path verified against image-correction.md 2026-06-22.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.ImageFilterCollection.html
-->

## Injected overview (Markdown)

`ImageFilterCollection` holds the ordered pipeline of image-correction filters IronBarcode applies to a barcode image before it tries to decode. It is a list of `IImageFilter` instances, and the order matters: the reader runs the filters from first to last, so a developer arranges them the way the image needs, for example a threshold to binarize, then a sharpen to crisp the edges. This is the object that connects the individual filters to a read.

Build a collection, populate it with filter instances, and assign it to the `ImageFilters` property of a `BarcodeReaderOptions`, then pass those options to `BarcodeReader.Read`. Because the collection derives from `List<IImageFilter>`, the usual list operations apply for adding, reordering, or removing steps. The `CacheAtEachIteration` property controls whether the intermediate image is cached after each filter runs, which helps when tuning a pipeline and inspecting the effect of each step. The boolean constructor sets that behavior at creation; the parameterless constructor uses the default.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new ContrastFilter(2.0f), new SharpenFilter() }
};
var results = BarcodeReader.Read("blurry.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) shows a populated collection on a sample image, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a low-quality barcode through a pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageFilterCollection - IronBarcode C# API`
- v2 (human): `ImageFilterCollection: Order Barcode Filters in C#`
- v3 (balanced): `ImageFilterCollection Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ImageFilterCollection is the ordered IImageFilter pipeline in IronBarcode C#, assigned to BarcodeReaderOptions.ImageFilters and applied before decoding.`
- v2 (human): `Queue IronBarcode image filters in order in C# with ImageFilterCollection: add threshold, contrast, and sharpen steps, then read the corrected image.`
- v3 (balanced): `Reference for the IronBarcode ImageFilterCollection class in C#: an ordered list of IImageFilter steps set on BarcodeReaderOptions.ImageFilters.`

---

## Structured data

**TechArticle abstract**

> ImageFilterCollection holds the ordered image-correction pipeline IronBarcode applies before reading a barcode in C#. It derives from List of IImageFilter, so filters run in list order; assign it to BarcodeReaderOptions.ImageFilters and pass the options to BarcodeReader.Read. The CacheAtEachIteration property caches the intermediate image after each filter, and a boolean constructor sets that behavior at creation.

**FAQPage entries**

```json
[
  {
    "question": "Where does ImageFilterCollection live in the IronBarcode API?",
    "answer": "ImageFilterCollection is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from List of IImageFilter and is the type of the BarcodeReaderOptions.ImageFilters property."
  },
  {
    "question": "How do you add filters to ImageFilterCollection in C#?",
    "answer": "Construct an ImageFilterCollection, add IImageFilter instances such as ContrastFilter or SharpenFilter in the order you want them applied, and assign it to BarcodeReaderOptions.ImageFilters. The reader runs the filters in list order before decoding."
  }
]
```
