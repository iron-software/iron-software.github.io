<!--
N-Full. Frame E (feature/outcome-fronted). IronBarcode.
Threshold/Lower/Upper/Rectangle/BinarizationMethod props verified; ctors verified; ImageFilters access path verified 2026-06-22.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BinaryThresholdFilter.html
-->

## Injected overview (Markdown)

A hard two-tone conversion of a barcode image, where every pixel becomes either black or white at a chosen luminance cutoff, is the job of `BinaryThresholdFilter`. It splits the pixels at a single global threshold by comparing the luminance of each color component, which is the fast, predictable way to flatten a evenly lit but low-contrast image into the crisp bars a decoder expects. Where `AdaptiveThresholdFilter` computes a cutoff per region for patchy lighting, this filter uses one cutoff across the whole frame, so it suits images whose brightness is consistent and only the contrast is weak.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`. Because the reader applies the collection in order before decoding, a binary threshold usually runs early, turning the source into a clean black-and-white image that any later step works from. A developer instantiates it, adds it to the collection, and hands the options to `BarcodeReader.Read`.

The constructors range from a parameterless default to overloads that take a `Threshold`, the `Lower` and `Upper` colors, a `Rectangle` region, and a `BinarizationMethod`. The `Threshold` property is the cutoff luminance, `Lower` and `Upper` set the two colors pixels collapse to, `Rectangle` confines the operation to a region of interest, and `BinarizationMethod` selects the algorithm used to decide the split. IronBarcode ships sensible defaults for every property, so a bare `new BinaryThresholdFilter()` is often enough; reach for the overloads only when a specific image needs a tuned cutoff or a restricted region.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new BinaryThresholdFilter() }
};
var results = BarcodeReader.Read("low-contrast.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) compares this filter against the adaptive threshold on a real barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image end to end. The [image orientation correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-orientation-correction/) covers the rotation and skew cases a threshold pass does not address.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BinaryThresholdFilter - IronBarcode C# API`
- v2 (human): `BinaryThresholdFilter: Threshold Barcodes in C#`
- v3 (balanced): `BinaryThresholdFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply a global luminance threshold to barcode images in C# with IronBarcode BinaryThresholdFilter, added to BarcodeReaderOptions.ImageFilters before reading.`
- v2 (human): `Flatten an evenly lit, low-contrast barcode into clean black-and-white in C# with IronBarcode BinaryThresholdFilter, a single global threshold pass.`
- v3 (balanced): `Reference for the IronBarcode BinaryThresholdFilter class in C#: split barcode pixels at a chosen luminance cutoff before decoding.`

---

## Structured data

**TechArticle abstract**

> BinaryThresholdFilter converts a barcode image to two tones in C# with IronBarcode by splitting pixels at a single global luminance cutoff, suited to evenly lit, low-contrast images. It implements IImageFilter, goes into the ImageFilterCollection on BarcodeReaderOptions.ImageFilters, and exposes Threshold, Lower, Upper, Rectangle, and BinarizationMethod to control the cutoff, output colors, region, and algorithm.

**FAQPage entries**

```json
[
  {
    "question": "Where does BinaryThresholdFilter live in the IronBarcode API?",
    "answer": "BinaryThresholdFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "What is the difference between BinaryThresholdFilter and AdaptiveThresholdFilter?",
    "answer": "BinaryThresholdFilter applies one global cutoff across the whole image and works best when lighting is even. AdaptiveThresholdFilter computes a separate cutoff per region, which handles uneven illumination and shadows that a single threshold cannot."
  },
  {
    "question": "How do you set the threshold for BinaryThresholdFilter in C#?",
    "answer": "Pass a Threshold value to one of the constructor overloads, or set the Threshold property after construction. Lower and Upper choose the two output colors, and BinarizationMethod selects the split algorithm. The defaults suit most evenly lit images."
  }
]
```
