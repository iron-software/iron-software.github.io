<!--
N-Mid (Amount prop; ctors () and (Single)). Frame C (when-fronted).
Members verified; purpose from image-correction.md (default 1, 0 black, >1 brighter); ImageFilters path verified 2026-06-22.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BrightnessFilter.html
-->

## Injected overview (Markdown)

When a barcode image is too dark to read, a photo shot in poor light or a scan that came out underexposed, `BrightnessFilter` lifts the overall luminance so the bars separate cleanly from the background. It scales the brightness of every pixel by a single amount, which is the simplest correction in the set and often the only one a dim but otherwise clean image needs before decoding.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, applied in collection order ahead of the read. A developer constructs it, drops it into the collection, and passes the options to `BarcodeReader.Read`. The single `Amount` property sets the scaling: the default value of 1 leaves the image unchanged, 0 produces a fully black image, and values above 1 brighten it. The single-argument constructor sets `Amount` at creation. Brightness pairs naturally with a contrast pass when an image is both dark and flat.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new BrightnessFilter(1.5f) }
};
var results = BarcodeReader.Read("underexposed.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) shows the brightness pass on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a low-quality image after correction.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BrightnessFilter - IronBarcode C# API Reference`
- v2 (human): `BrightnessFilter: Brighten Barcode Images in C#`
- v3 (balanced): `BrightnessFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Brighten dark barcode images in C# with IronBarcode BrightnessFilter: an Amount-scaled luminance pass added to BarcodeReaderOptions.ImageFilters.`
- v2 (human): `Read an underexposed barcode in C# with IronBarcode BrightnessFilter, which lifts overall luminance by an Amount so the bars stand out for decoding.`
- v3 (balanced): `Reference for the IronBarcode BrightnessFilter class in C#: scale image brightness with Amount before reading a barcode.`

---

## Structured data

**TechArticle abstract**

> BrightnessFilter lifts the luminance of a dark barcode image in C# with IronBarcode so the bars separate from the background before decoding. It implements IImageFilter and goes into the ImageFilterCollection on BarcodeReaderOptions.ImageFilters. The Amount property scales brightness: 1 leaves the image unchanged, 0 turns it black, and values above 1 brighten it.

**FAQPage entries**

```json
[
  {
    "question": "Where does BrightnessFilter live in the IronBarcode API?",
    "answer": "BrightnessFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "What does the Amount property do on BrightnessFilter?",
    "answer": "Amount scales the image brightness. The default of 1 leaves the image unchanged, 0 produces a fully black image, and values above 1 make it brighter. Pass it to the constructor or set the property when an image is underexposed."
  }
]
```
