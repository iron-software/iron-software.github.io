<!--
N-Mid (Amount prop; ctors () and (Single)). Frame A (subject-verb).
Members verified; purpose from image-correction.md (default 1, 0 gray, >1 more contrast); ImageFilters path verified 2026-06-22.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.ContrastFilter.html
-->

## Injected overview (Markdown)

`ContrastFilter` widens the difference in intensity between the light and dark regions of a barcode image, the correction for a washed-out or flat photo where the bars and the background sit too close in tone for a reliable read. Pushing the contrast up makes the black bars darker and the white spaces lighter, sharpening the boundary a decoder keys on; pulling it down has the opposite, softening effect. It is one of the most frequently applied passes, often paired with a sharpen step.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, run in collection order before decoding. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. The single `Amount` property controls the strength: the default value of 1 leaves the image unchanged, 0 produces a fully gray image, and values above 1 increase contrast. The single-argument constructor sets `Amount` at creation.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new ContrastFilter(2.0f) }
};
var results = BarcodeReader.Read("washed-out.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) demonstrates the contrast pass on a sample, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded barcode after correction.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ContrastFilter - IronBarcode C# API Reference`
- v2 (human): `ContrastFilter: Sharpen Barcode Contrast in C#`
- v3 (balanced): `ContrastFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Increase barcode image contrast in C# with IronBarcode ContrastFilter: an Amount-scaled pass added to BarcodeReaderOptions.ImageFilters before reading.`
- v2 (human): `Read a washed-out barcode in C# with IronBarcode ContrastFilter, which widens the light-to-dark difference so the bars stand out for decoding.`
- v3 (balanced): `Reference for the IronBarcode ContrastFilter class in C#: adjust image contrast with Amount before reading a barcode.`

---

## Structured data

**TechArticle abstract**

> ContrastFilter widens the intensity difference between light and dark regions of a barcode image in C# with IronBarcode, sharpening the boundary a decoder keys on in washed-out photos. It implements IImageFilter and goes into the ImageFilterCollection on BarcodeReaderOptions.ImageFilters. The Amount property sets the strength: 1 leaves the image unchanged, 0 makes it gray, and values above 1 increase contrast.

**FAQPage entries**

```json
[
  {
    "question": "Where does ContrastFilter live in the IronBarcode API?",
    "answer": "ContrastFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "What does the Amount property do on ContrastFilter?",
    "answer": "Amount sets the contrast strength. The default of 1 leaves the image unchanged, 0 produces a fully gray image, and values above 1 increase contrast. Pass it to the constructor or set the property when a barcode image looks flat or washed out."
  }
]
```
