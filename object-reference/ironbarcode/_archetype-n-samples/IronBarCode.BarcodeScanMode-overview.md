<!--
N-Lite/enum. Members verified 2026-06-23: Auto, MachineLearningScan, OnlyDetectionModel, OnlyBasicScan.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeScanMode.html
Consumer: BarcodeReaderOptions.ScanMode.
-->

## Injected overview (Markdown)

`BarcodeScanMode` selects how IronBarcode locates barcodes in an image, assigned to `BarcodeReaderOptions.ScanMode`. `Auto`, the default, applies the most effective reader configuration automatically and suits most photos and scans. `MachineLearningScan` runs the machine-learning detection model to find codes in difficult images, and `OnlyDetectionModel` returns only the detected positions. `OnlyBasicScan` skips machine learning and pre-processing for fast reads of clean, straight-on images. The [barcode reading how-to](https://ironsoftware.com/csharp/barcode/how-to/image-orientation-correction/) covers preprocessing options.

```csharp
var options = new BarcodeReaderOptions { ScanMode = BarcodeScanMode.Auto };
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeScanMode Enum - IronBarcode C# API`
- v2 (human): `BarcodeScanMode: Tune Barcode Reading in C#`
- v3 (balanced): `BarcodeScanMode Enum | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set how IronBarcode reads in C# with the BarcodeScanMode enum: Auto, MachineLearningScan, OnlyDetectionModel, or OnlyBasicScan, on BarcodeReaderOptions.`
- v2 (human): `Tune barcode detection in C# with the IronBarcode BarcodeScanMode enum: Auto for most images or OnlyBasicScan for fast, clean reads.`
- v3 (balanced): `Reference for the IronBarcode BarcodeScanMode enum in C#: Auto, MachineLearningScan, OnlyDetectionModel, and OnlyBasicScan reading strategies.`

---

## Structured data

**TechArticle abstract**

> Use BarcodeScanMode in IronBarcode to select how barcodes are located in an image, set on BarcodeReaderOptions.ScanMode. Auto applies the optimal configuration automatically, MachineLearningScan and OnlyDetectionModel use the ML model for hard images, and OnlyBasicScan reads clean images fast.
