<!--
N-Mid (KernelSize; ctors (), (Int32)). Frame C (when-fronted).
Members verified 2026-06-23: KernelSize default 3; morphological erosion. ImageFilters path verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.ErodeFilter.html
-->

## Injected overview (Markdown)

When the bars of a barcode have bled into each other and the decoder can no longer tell where one ends and the next begins, `ErodeFilter` shrinks the dark regions back to separate them. Erosion is a morphological operation that trims the foreground pixels, the inverse of dilation, so over-inked, smudged, or heavily compressed images recover their gaps between bars. Reach for it when a code reads as one merged block; for the opposite defect, where thin bars have broken apart, the dilation filter grows them back together.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, where filters run in collection order before the read. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. The parameterless constructor uses a `KernelSize` of 3, the length of one side of the square kernel that controls how much the bars are trimmed. The `ErodeFilter(int kernelSize)` overload or the `KernelSize` property raises that value for stronger erosion when the bars are badly merged.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new ErodeFilter() }
};
var results = BarcodeReader.Read("smudged.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) demonstrates filter selection on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image through a filter pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ErodeFilter - IronBarcode C# API`
- v2 (human): `ErodeFilter: Separate Merged Barcode Bars in C#`
- v3 (balanced): `ErodeFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Separate merged barcode bars in C# with IronBarcode ErodeFilter: a morphological erosion with a KernelSize setting, added to ImageFilters before reading.`
- v2 (human): `Recover the gaps in an over-inked or smudged barcode in C# with IronBarcode ErodeFilter, shrinking the dark regions so bled bars read apart.`
- v3 (balanced): `Reference for the IronBarcode ErodeFilter class in C#: apply morphological erosion with KernelSize to trim bars before reading a barcode.`

---

## Structured data

**TechArticle abstract**

> ErodeFilter shrinks the dark regions of a barcode image in C# with IronBarcode, a morphological erosion that trims foreground pixels to separate bars that have bled together. It implements IImageFilter and is added to the ImageFilterCollection on BarcodeReaderOptions.ImageFilters. The KernelSize property, default 3, sets how much the bars are trimmed.

**FAQPage entries**

```json
[
  {
    "question": "Where does ErodeFilter live in the IronBarcode API?",
    "answer": "ErodeFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "How do you increase the erosion strength of ErodeFilter?",
    "answer": "Raise KernelSize above its default of 3, either through the ErodeFilter(int kernelSize) constructor or by setting the KernelSize property. A larger kernel trims the dark regions further, recovering wider gaps in a smudged or over-inked barcode."
  }
]
```
