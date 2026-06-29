<!--
N-Mid (Rectangle; ctors (), (Rectangle)). Frame D (task-gerund-fronted).
Members verified 2026-06-23: Rectangle property (IronSoftware.Drawing.Rectangle); inverts colors, optional region. ImageFilters path verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.InvertFilter.html
-->

## Injected overview (Markdown)

Reading a barcode printed light-on-dark runs through `InvertFilter`, which flips the colors of an image so a white code on a black background becomes the dark-on-light pattern a decoder expects. Most scanners and most reader pipelines assume dark bars on a light field, and a negative image, a reversed photo, or a screen capture with an inverted theme reads as noise until the polarity is corrected. This filter swaps light and dark across the whole image, or across a single region when only part of the frame is reversed.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, where filters run in collection order before the read. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. The parameterless constructor inverts the entire image. The `InvertFilter(Rectangle rectangle)` overload, or the `Rectangle` property, confines the inversion to a region described by an `IronSoftware.Drawing.Rectangle`, useful when one labeled area is reversed but the rest of the page is normal.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new InvertFilter() }
};
var results = BarcodeReader.Read("negative.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) shows the correction filters on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image through a filter pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `InvertFilter - IronBarcode C# API`
- v2 (human): `InvertFilter: Read Light-on-Dark Barcodes in C#`
- v3 (balanced): `InvertFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read negative barcode images in C# with IronBarcode InvertFilter: flip image colors, whole image or a Rectangle region, added to ImageFilters before reading.`
- v2 (human): `Decode a white-on-black or negative barcode in C# with IronBarcode InvertFilter, flipping image colors so the pattern reads dark on light.`
- v3 (balanced): `Reference for the IronBarcode InvertFilter class in C#: invert image colors over the whole image or a Rectangle region before reading a barcode.`

---

## Structured data

**TechArticle abstract**

> InvertFilter flips the colors of a barcode image in C# with IronBarcode so a light-on-dark or negative code becomes the dark-on-light pattern a decoder expects. It implements IImageFilter and is added to the ImageFilterCollection on BarcodeReaderOptions.ImageFilters. The Rectangle property confines the inversion to a region when only part of the frame is reversed.

**FAQPage entries**

```json
[
  {
    "question": "Where does InvertFilter live in the IronBarcode API?",
    "answer": "InvertFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "How do you invert only part of an image with InvertFilter?",
    "answer": "Use the InvertFilter(Rectangle rectangle) constructor or set the Rectangle property to an IronSoftware.Drawing.Rectangle. The inversion then applies only to that region, leaving the rest of the image unchanged."
  }
]
```
