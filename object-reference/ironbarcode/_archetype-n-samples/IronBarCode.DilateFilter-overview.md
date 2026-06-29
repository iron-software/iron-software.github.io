<!--
N-Mid (KernelSize; ctors (), (Int32)). Frame A (subject-verb).
Members verified 2026-06-23: KernelSize default 3; morphological dilation. ImageFilters path verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.DilateFilter.html
-->

## Injected overview (Markdown)

`DilateFilter` thickens the dark regions of a barcode image so thin or broken bars join into a solid, readable shape. Dilation is a morphological operation that grows the foreground pixels, which closes small gaps and reconnects a pattern that printing, faxing, or low-resolution scanning has eroded into fragments. Reach for it when a code reads as a scatter of disconnected marks rather than continuous bars; for the opposite problem, where bars have bled together, the erosion filter shrinks them back.

The filter implements `IImageFilter` and is added to the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, where filters run in collection order before the read. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. The parameterless constructor uses a `KernelSize` of 3, the length of one side of the square kernel that controls how aggressively the bars are grown. The `DilateFilter(int kernelSize)` overload or the `KernelSize` property raises that value for heavier dilation when the gaps are wide.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new DilateFilter() }
};
var results = BarcodeReader.Read("faded.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) walks through filter selection on a sample barcode, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image through a filter pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DilateFilter - IronBarcode C# API`
- v2 (human): `DilateFilter: Rejoin Broken Barcode Bars in C#`
- v3 (balanced): `DilateFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Rejoin broken barcode bars in C# with IronBarcode DilateFilter: a morphological dilation with a KernelSize setting, added to ImageFilters before reading.`
- v2 (human): `Reconnect thin or fragmented barcode bars in C# with IronBarcode DilateFilter, growing the dark regions so a broken pattern reads as one shape.`
- v3 (balanced): `Reference for the IronBarcode DilateFilter class in C#: apply morphological dilation with KernelSize to thicken bars before reading a barcode.`

---

## Structured data

**TechArticle abstract**

> DilateFilter thickens the dark regions of a barcode image in C# with IronBarcode, a morphological dilation that grows foreground pixels to close gaps and rejoin broken bars. It implements IImageFilter and is added to the ImageFilterCollection on BarcodeReaderOptions.ImageFilters. The KernelSize property, default 3, sets how aggressively the bars are grown.

**FAQPage entries**

```json
[
  {
    "question": "Where does DilateFilter live in the IronBarcode API?",
    "answer": "DilateFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "How do you make DilateFilter grow the bars more aggressively?",
    "answer": "Raise KernelSize above its default of 3, either through the DilateFilter(int kernelSize) constructor or by setting the KernelSize property. A larger kernel grows the dark regions further, closing wider gaps in a fragmented barcode."
  }
]
```
