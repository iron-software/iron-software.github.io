<!--
N-Lite/enum. Members verified 2026-06-22: Auto, OnlyBasicScan, OnlyDetectionModel.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Enum.QrScanMode.html
-->

## Injected overview (Markdown)

`QrScanMode` sets how `IronQR` detects QR codes in an image, assigned to `QrImageInput.QrScanMode` or the `IQrInput` it implements. `Auto`, the default, runs a machine-learning detection model and falls back to a basic scan, which handles awkward angles and noisy photos. `OnlyDetectionModel` forces the ML model alone, and `OnlyBasicScan` uses the fast classic scan for clean, straight-on images where the model's overhead is unnecessary. The [scan modes how-to](https://ironsoftware.com/csharp/qr/how-to/read-qr-codes-with-scan-modes/) compares them, and the [machine-learning read example](https://ironsoftware.com/csharp/qr/examples/read-qr-with-machine-learning/) shows the model in use.

```csharp
var input = new QrImageInput(bitmap, QrScanMode.Auto);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrScanMode Enum - IronQR C# API Reference`
- v2 (human): `QrScanMode: Tune QR Detection in C#`
- v3 (balanced): `QrScanMode Enum | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set how IronQR detects QR codes in C# with the QrScanMode enum: Auto, OnlyDetectionModel, or OnlyBasicScan, on QrImageInput.QrScanMode.`
- v2 (human): `Tune QR detection in C# with the IronQR QrScanMode enum: ML-based Auto for tough images, or OnlyBasicScan for fast, clean reads.`
- v3 (balanced): `Reference for the IronQR QrScanMode enum in C#: Auto, OnlyDetectionModel, and OnlyBasicScan detection strategies for reading QR codes.`

---

## Structured data

**TechArticle abstract**

> Use QrScanMode in IronQR to set how QR codes are detected in an image, on QrImageInput.QrScanMode. Auto runs an ML detection model with a basic-scan fallback for difficult images, OnlyDetectionModel forces the model, and OnlyBasicScan uses the fast classic scan for clean images.
