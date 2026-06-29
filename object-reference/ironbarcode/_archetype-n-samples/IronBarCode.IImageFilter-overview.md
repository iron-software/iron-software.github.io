<!--
N-Mid / interface (marker interface, 0 declared members on docfx page; inherited triage N/A). Frame B (identity-by-role).
Implementors listed from api dir: Adaptive/Binary threshold, Brightness, Contrast, Gaussian, Bilateral, Median, Sharpen, Invert, Dilate, Erode, HistogramEqualization. Verified 2026-06-22.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.IImageFilter.html
-->

## Injected overview (Markdown)

`IImageFilter` is the common contract every image-correction filter in IronBarcode satisfies, the type the reader accepts when a barcode image needs cleaning up before decoding. A developer rarely names it directly. Its value is that it lets the `ImageFilterCollection` hold any mix of filters in one ordered list, so brightness, contrast, blur, and threshold steps queue together and the reader applies them uniformly without knowing which concrete filter is which.

The concrete implementors shipped with IronBarcode cover the common image problems: `AdaptiveThresholdFilter` and `BinaryThresholdFilter` binarize, `BrightnessFilter` and `ContrastFilter` adjust tone, `GaussianBlurFilter` and `BilateralFilter` smooth noise, and `SharpenFilter`, `MedianBlurFilter`, `InvertFilter`, `DilateFilter`, `ErodeFilter`, and `HistogramEqualizationFilter` handle the rest. Code that needs a correction step instantiates one of these and adds it to an `ImageFilterCollection`, which is then assigned to `BarcodeReaderOptions.ImageFilters`. Implementing `IImageFilter` directly is reserved for a custom correction the built-in set does not provide; for everyday reads, the supplied filters are the answer.

```csharp
IImageFilter filter = new ContrastFilter(2.0f);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) walks through the built-in filters, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) applies several to read a degraded image.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IImageFilter Interface - IronBarcode C# API`
- v2 (human): `IImageFilter: The Barcode Image Filter Contract`
- v3 (balanced): `IImageFilter Interface | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IImageFilter is the contract for IronBarcode image-correction filters in C#: implemented by AdaptiveThresholdFilter, ContrastFilter, GaussianBlurFilter, and more.`
- v2 (human): `Every IronBarcode image filter in C# implements IImageFilter, so a single ImageFilterCollection can queue brightness, contrast, blur, and threshold steps.`
- v3 (balanced): `Reference for the IronBarcode IImageFilter interface in C#: the common contract for the filters added to BarcodeReaderOptions.ImageFilters.`

---

## Structured data

**TechArticle abstract**

> IImageFilter is the contract every IronBarcode image-correction filter implements in C#, letting an ImageFilterCollection hold any mix of filters in one ordered list. Implementors include AdaptiveThresholdFilter, BinaryThresholdFilter, BrightnessFilter, ContrastFilter, GaussianBlurFilter, and BilateralFilter; code adds one to the collection on BarcodeReaderOptions.ImageFilters rather than implementing the interface itself.

**FAQPage entries**

```json
[
  {
    "question": "Where does IImageFilter live in the IronBarcode API?",
    "answer": "IImageFilter is an interface in the IronBarCode namespace, shipped in IronBarCode.dll. It extends Object and is the element type of ImageFilterCollection, which is assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "What implements IImageFilter in IronBarcode?",
    "answer": "The built-in filters implement it: AdaptiveThresholdFilter, BinaryThresholdFilter, BrightnessFilter, ContrastFilter, GaussianBlurFilter, BilateralFilter, SharpenFilter, MedianBlurFilter, InvertFilter, DilateFilter, ErodeFilter, and HistogramEqualizationFilter. Implement it yourself only for a custom correction step."
  }
]
```
