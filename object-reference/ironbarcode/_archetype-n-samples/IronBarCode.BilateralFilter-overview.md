<!--
N-Mid (NeighborhoodDiameter/SigmaColor/SigmaSpace; ctors () and (Int32,Single,Single)). Frame D (task-gerund).
Members verified; purpose from image-correction.md; ImageFilters path verified 2026-06-22.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BilateralFilter.html
-->

## Injected overview (Markdown)

Smoothing noise out of a barcode image without softening the bar edges runs through `BilateralFilter`. A plain blur averages every pixel with its neighbors and blurs the edges along with the grain, but a bilateral pass weighs both color difference and pixel distance, so it flattens speckle and grain while keeping the sharp light-to-dark transitions a decoder relies on. This is the filter for a grainy photo or a noisy scan where edge fidelity has to survive the cleanup.

The filter implements `IImageFilter` and goes into the `ImageFilterCollection` on `BarcodeReaderOptions.ImageFilters`, applied in collection order before the read. A developer constructs it, adds it to the collection, and passes the options to `BarcodeReader.Read`. The parameterless constructor uses tuned defaults; the three-argument overload exposes `NeighborhoodDiameter` for the pixel-neighborhood diameter (default 5), `SigmaColor` for how strongly color difference is weighed (default 75.0), and `SigmaSpace` for how strongly distance is weighed (default 75.0). Raise the sigmas for heavier smoothing when the noise is severe.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ImageFilters = new ImageFilterCollection { new BilateralFilter() }
};
var results = BarcodeReader.Read("grainy.png", options);
```

The [image correction how-to](https://ironsoftware.com/csharp/barcode/how-to/image-correction/) compares the bilateral and Gaussian passes on a sample, and the [imperfect barcode example](https://ironsoftware.com/csharp/barcode/examples/imperfect-barcode-with-image-correction/) reads a degraded image through a pipeline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BilateralFilter - IronBarcode C# API Reference`
- v2 (human): `BilateralFilter: Edge-Safe Smoothing in C#`
- v3 (balanced): `BilateralFilter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Smooth barcode noise while preserving edges in C# with IronBarcode BilateralFilter: NeighborhoodDiameter, SigmaColor, and SigmaSpace control the pass.`
- v2 (human): `Clean a grainy barcode in C# with IronBarcode BilateralFilter, an edge-preserving smooth that flattens noise without blurring the bar edges.`
- v3 (balanced): `Reference for the IronBarcode BilateralFilter class in C#: edge-preserving smoothing added to BarcodeReaderOptions.ImageFilters before reading.`

---

## Structured data

**TechArticle abstract**

> BilateralFilter smooths noise from a barcode image in C# with IronBarcode while preserving edges, weighing both color difference and pixel distance so bar edges survive the cleanup. It implements IImageFilter, goes into the ImageFilterCollection on BarcodeReaderOptions.ImageFilters, and exposes NeighborhoodDiameter, SigmaColor, and SigmaSpace to tune the neighborhood size and smoothing strength.

**FAQPage entries**

```json
[
  {
    "question": "Where does BilateralFilter live in the IronBarcode API?",
    "answer": "BilateralFilter is a class in the IronBarCode namespace, shipped in IronBarCode.dll. It derives from Object and implements IImageFilter, so it can be added to the ImageFilterCollection assigned to BarcodeReaderOptions.ImageFilters."
  },
  {
    "question": "How does BilateralFilter differ from GaussianBlurFilter for barcodes?",
    "answer": "GaussianBlurFilter averages neighboring pixels uniformly, softening edges along with noise. BilateralFilter weighs color difference and distance, so it removes noise while keeping the sharp bar edges a decoder needs. Use it when edge fidelity matters."
  }
]
```
