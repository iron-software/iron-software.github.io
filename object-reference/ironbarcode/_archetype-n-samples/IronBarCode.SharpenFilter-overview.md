<!--
N-Mid (Sigma; ctors (), (Single)). Frame B (identity-by-role).
Members verified 2026-06-23: Sigma float default 3.0f; Gaussian sharpening. ImageFilters path verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.SharpenFilter.html
-->

## Injected overview (Markdown)

`SharpenFilter` is the pass that recovers definition in a soft barcode image, applying Gaussian sharpening to pull blurred bar edges back into focus. A code that came out of an out-of-focus camera, a low-resolution capture, or an aggressive upscale loses the crisp boundaries a decoder relies on, and sharpening amplifies the contrast at those transitions so the bars regain a clean edge. It addresses softness rather than noise, so it pairs well after a smoothing filter that has cleaned an image but left it slightly blurred.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, where filters run in collection order before the read. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. The parameterless constructor uses a `Sigma` of 3.0, the weight that governs how strong the sharpening is. The `SharpenFilter(float sigma)` overload or the `Sigma` property raises that value for more aggressive edge enhancement when the image is heavily blurred, though too high a value can over-sharpen and introduce artifacts.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new SharpenFilter() }
};
var results = BarcodeReader.Read("blurry.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) walks through the correction filters on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image through a filter pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SharpenFilter - IronBarcode C# API`
- v2 (human): `SharpenFilter: Sharpen Blurry Barcodes in C#`
- v3 (balanced): `SharpenFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Sharpen blurry barcode images in C# with IronBarcode SharpenFilter: Gaussian sharpening with a Sigma setting, added to ImageFilters before reading.`
- v2 (human): `Bring a soft, out-of-focus barcode back into focus in C# with IronBarcode SharpenFilter, amplifying edge contrast so bars regain a clean boundary.`
- v3 (balanced): `Reference for the IronBarcode SharpenFilter class in C#: apply Gaussian sharpening with a Sigma value before reading a blurry barcode.`

---

## Structured data

**TechArticle abstract**

> SharpenFilter applies Gaussian sharpening to a barcode image in C# with IronBarcode, amplifying contrast at bar edges so a soft or out-of-focus code regains clean boundaries. It implements IImageFilter and is added to the ImageFilterCollection on BarcodeReaderOptions.ImageFilters. The Sigma property, default 3.0, controls how strong the sharpening is.

**FAQPage entries**

```json
[
  {
    "question": "Where does SharpenFilter live in the IronBarcode API?",
    "answer": "SharpenFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "How do you control the sharpening strength of SharpenFilter?",
    "answer": "Set the Sigma value, which defaults to 3.0, through the SharpenFilter(float sigma) constructor or the Sigma property. A higher Sigma sharpens more aggressively, though pushing it too high can over-sharpen the image and introduce artifacts."
  }
]
```
