<!--
N-Full (config class, 13 members > 10 so functional buckets per P7). Frame C. IronBarCode.
Members verified 2026-06-23: AutoRotate, ConfidenceThreshold, CropArea, ExpectBarcodeTypes,
ExpectMultipleBarcodes, ImageFilters, MaxParallelThreads, MinScanLines, Multithreaded,
RemoveFalsePositive, ScanMode, Speed, UseCode39ExtendedMode. ScanMode=BarcodeScanMode, Speed=ReadingSpeed.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeReaderOptions.html
-->

## Injected overview (Markdown)

When a read needs tuning for accuracy or speed, `BarcodeReaderOptions` carries the settings that steer it. Every `BarcodeReader.Read` and `ReadAsync` overload accepts one, so the same options object decides which symbologies to scan for, how hard to look, and how to handle awkward source images. Reaching for it is the answer to "barcode reading too slow in C#" or "IronBarcode not detecting barcode", since the defaults favor accuracy and most tuning happens here.

A reader receives the options as an argument; construct one with `new BarcodeReaderOptions()`, set the properties a job needs, and pass it to a read call. `PdfBarcodeReaderOptions` derives from this class and adds the PDF-specific page, DPI, and password settings, so a PDF read configures the same base properties plus those extras. Leaving the argument out applies the defaults, which scan for all supported types at balanced speed.

The properties group by purpose. Symbology selection is `ExpectBarcodeTypes`, a `BarcodeEncoding` value that limits the scan to the formats a job expects, and `ExpectMultipleBarcodes`, which keeps scanning after the first code is found instead of stopping early. Detection strategy is `ScanMode`, a `BarcodeScanMode` that chooses a basic pass or a machine-learning model, `Speed`, a `ReadingSpeed` that runs from `Faster` to `ExtremeDetail` and defaults to `Balanced`, and `ConfidenceThreshold`, the minimum machine-learning confidence in the range zero to one with a default of 0.7. Image handling is `AutoRotate`, `ImageFilters`, `CropArea`, and `MinScanLines`, which correct, filter, and bound the region scanned. Throughput is `Multithreaded`, `MaxParallelThreads`, and `RemoveFalsePositive`. The Code 39 specific `UseCode39ExtendedMode` enables the extended character set. Set only the properties a job needs and leave the rest at their defaults.

```csharp
using IronBarCode;

var options = new BarcodeReaderOptions
{
    ExpectBarcodeTypes = BarcodeEncoding.QRCode,
    Speed = ReadingSpeed.Faster,
    ExpectMultipleBarcodes = true
};
BarcodeResults results = BarcodeReader.Read("barcode.png", options);
```

The [reading speed options how-to](https://ironsoftware.com/csharp/barcode/how-to/reading-speed-options/) tunes accuracy against throughput, the [barcode reader settings example](https://ironsoftware.com/csharp/barcode/examples/barcode-reader-settings-csharp/) shows a configured read, and the [read multiple barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/read-multiple-barcodes/) sets the multi-code option.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeReaderOptions - IronBarcode C# API`
- v2 (human): `BarcodeReaderOptions: Tune Reads in C#`
- v3 (balanced): `BarcodeReaderOptions Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Tune barcode reading in C# with the IronBarcode BarcodeReaderOptions class: set ExpectBarcodeTypes, ScanMode, Speed, and ConfidenceThreshold.`
- v2 (human): `Control how IronBarcode reads in C# with BarcodeReaderOptions: pick symbologies, scan mode, and speed, and handle multiple or imperfect codes.`
- v3 (balanced): `Reference for the IronBarcode BarcodeReaderOptions class in C#: configure symbology, scan mode, speed, and image handling for a read.`

---

## Structured data

**TechArticle abstract**

> Tuning a read in C# runs through the IronBarcode BarcodeReaderOptions class, which every BarcodeReader.Read overload accepts. Set ExpectBarcodeTypes and ExpectMultipleBarcodes for symbology, ScanMode, Speed, and ConfidenceThreshold for detection strategy, and AutoRotate, ImageFilters, and CropArea for image handling. PdfBarcodeReaderOptions derives from it and adds PDF page, DPI, and password settings.

**FAQPage entries**

```json
[
  {
    "question": "Where does BarcodeReaderOptions live in the IronBarcode API?",
    "answer": "BarcodeReaderOptions is a class in the IronBarCode namespace, shipped in IronBarCode.dll, deriving from Object. Construct one with new BarcodeReaderOptions() and pass it to a BarcodeReader.Read call."
  },
  {
    "question": "How do I make IronBarcode read barcodes faster in C#?",
    "answer": "Set the Speed property to ReadingSpeed.Faster and use ExpectBarcodeTypes to limit the scan to the symbologies you expect. Set ExpectMultipleBarcodes to false so the reader stops after the first code when only one is present."
  },
  {
    "question": "What is the difference between BarcodeReaderOptions and PdfBarcodeReaderOptions?",
    "answer": "PdfBarcodeReaderOptions derives from BarcodeReaderOptions and adds PDF-specific settings such as PageNumbers, DPI, Scale, and Password. Use BarcodeReaderOptions for images and streams, and PdfBarcodeReaderOptions for ReadPdf calls."
  }
]
```
