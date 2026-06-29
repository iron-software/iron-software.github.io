<!--
N-Mid (KernelSize; ctors (), (Int32)). Frame E (feature/outcome-fronted).
Members verified 2026-06-23: KernelSize odd >0, default 5; median blur (salt-and-pepper). ImageFilters path verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.MedianBlurFilter.html
-->

## Injected overview (Markdown)

Salt-and-pepper specks scattered across a scan are cleared by `MedianBlurFilter`, which replaces each pixel with the median value of its neighborhood. Unlike an averaging blur, a median pass removes isolated bright and dark dots without smearing the sharp transitions between bars, so the edges that a decoder depends on stay crisp. It is the filter to reach for when a thresholded or low-quality scan is peppered with stray pixels rather than uniformly grainy; for a gentler, edge-softening smooth of general noise, a Gaussian blur is the alternative.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, where filters run in collection order before the read. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. The parameterless constructor uses a `KernelSize` of 5, the size of the neighborhood sampled for each median. `KernelSize` must be an odd value greater than 0; the `MedianBlurFilter(int kernelSize)` overload or the `KernelSize` property raises it for stronger speck removal on heavier noise.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new MedianBlurFilter() }
};
var results = BarcodeReader.Read("speckled.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) covers the correction filters on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image through a filter pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MedianBlurFilter - IronBarcode C# API`
- v2 (human): `MedianBlurFilter: Clear Speckle from Barcodes in C#`
- v3 (balanced): `MedianBlurFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Clear salt-and-pepper noise from barcodes in C# with IronBarcode MedianBlurFilter: a median blur with a KernelSize setting, added to ImageFilters before reading.`
- v2 (human): `Remove stray specks from a scanned barcode in C# with IronBarcode MedianBlurFilter, taking the median of each neighborhood while keeping bar edges sharp.`
- v3 (balanced): `Reference for the IronBarcode MedianBlurFilter class in C#: apply a median blur with KernelSize to remove speckle before reading a barcode.`

---

## Structured data

**TechArticle abstract**

> MedianBlurFilter removes salt-and-pepper noise from a barcode image in C# with IronBarcode by replacing each pixel with the median of its neighborhood, clearing stray specks while keeping bar edges sharp. It implements IImageFilter and is added to the ImageFilterCollection on BarcodeReaderOptions.ImageFilters. KernelSize must be an odd value greater than 0, with a default of 5.

**FAQPage entries**

```json
[
  {
    "question": "Where does MedianBlurFilter live in the IronBarcode API?",
    "answer": "MedianBlurFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "What KernelSize values does MedianBlurFilter accept?",
    "answer": "KernelSize must be an odd value greater than 0, and the default is 5. Set it through the MedianBlurFilter(int kernelSize) constructor or the KernelSize property; a larger odd kernel removes heavier speckle from the scan."
  }
]
```
