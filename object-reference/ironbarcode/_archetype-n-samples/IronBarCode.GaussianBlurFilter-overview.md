<!--
N-Mid (KernelWidth/KernelHeight/Sigma; ctors (), (Int32,Int32,Single), (Single)). Frame E (feature/outcome-fronted).
Members verified; purpose from image-correction.md (kernel default 3x3, Sigma default 3.0); ImageFilters path verified 2026-06-22.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.GaussianBlurFilter.html
-->

## Injected overview (Markdown)

Speckle and high-frequency noise that confuse a decoder are smoothed away by `GaussianBlurFilter`, which averages each pixel with its neighbors using a Gaussian function. A moderate blur removes the grain in a noisy scan or photo so the bar pattern reads as a continuous shape rather than a field of dots. It is the standard noise-reduction pass when edge preservation is not the priority; for noise removal that keeps the edges crisp, the bilateral filter is the alternative.

The filter implements `IImageFilter` and goes into the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, applied in collection order before the read. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. The defaults produce a moderate blur from a 3x3 kernel with a `Sigma` of 3.0; the overloads expose `KernelWidth` and `KernelHeight` to size the averaging neighborhood and `Sigma` to control the blur intensity. Raise `Sigma` for a stronger blur when the noise is heavy.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new GaussianBlurFilter() }
};
var results = BarcodeReader.Read("noisy.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) shows the Gaussian pass on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image through a filter pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `GaussianBlurFilter - IronBarcode C# API`
- v2 (human): `GaussianBlurFilter: Reduce Barcode Noise in C#`
- v3 (balanced): `GaussianBlurFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Reduce barcode image noise in C# with IronBarcode GaussianBlurFilter: a Gaussian blur with KernelWidth, KernelHeight, and Sigma, added to ImageFilters.`
- v2 (human): `Smooth a noisy barcode scan in C# with IronBarcode GaussianBlurFilter, averaging neighboring pixels so speckle no longer confuses the decoder.`
- v3 (balanced): `Reference for the IronBarcode GaussianBlurFilter class in C#: apply a Gaussian blur with kernel and Sigma settings before reading a barcode.`

---

## Structured data

**TechArticle abstract**

> GaussianBlurFilter reduces noise in a barcode image in C# with IronBarcode by averaging each pixel with its neighbors through a Gaussian function. It implements IImageFilter and goes into the ImageFilterCollection on BarcodeReaderOptions.ImageFilters. Defaults give a moderate blur from a 3x3 kernel with Sigma 3.0; KernelWidth, KernelHeight, and Sigma tune the neighborhood size and blur intensity.

**FAQPage entries**

```json
[
  {
    "question": "Where does GaussianBlurFilter live in the IronBarcode API?",
    "answer": "GaussianBlurFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "How do you control the blur strength of GaussianBlurFilter?",
    "answer": "Raise the Sigma value for a stronger blur; the default is 3.0. KernelWidth and KernelHeight size the averaging neighborhood, with a 3x3 kernel by default. Set them through the constructor overloads when an image needs heavier noise reduction."
  }
]
```
