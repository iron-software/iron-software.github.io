<!--
N-Lite/enum. Members verified 2026-06-23: Faster, Balanced, Detailed, ExtremeDetail. Salience: Faster (default) -> ascending processing.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.ReadingSpeed.html
Consumer: BarcodeReaderOptions.Speed.
-->

## Injected overview (Markdown)

`ReadingSpeed` sets how much image pre-processing IronBarcode applies before reading, trading raw speed against accuracy on awkward inputs, assigned to `BarcodeReaderOptions.Speed`. `Faster`, the default, does no pre-processing and reads clean images quickly. `Balanced` adds light processing to clarify the barcode area, `Detailed` applies medium processing, and `ExtremeDetail` applies heavy processing for faint, skewed, or low-quality scans. The [reading speed options how-to](https://ironsoftware.com/csharp/barcode/how-to/reading-speed-options/) compares the levels.

```csharp
var options = new BarcodeReaderOptions { Speed = ReadingSpeed.Balanced };
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ReadingSpeed Enum - IronBarcode C# API Reference`
- v2 (human): `ReadingSpeed: Balance Speed and Accuracy in C#`
- v3 (balanced): `ReadingSpeed Enum | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set barcode pre-processing in C# with the IronBarcode ReadingSpeed enum: Faster, Balanced, Detailed, or ExtremeDetail, on BarcodeReaderOptions.Speed.`
- v2 (human): `Balance read speed against accuracy in C# with the IronBarcode ReadingSpeed enum, from Faster for clean images to ExtremeDetail for poor scans.`
- v3 (balanced): `Reference for the IronBarcode ReadingSpeed enum in C#: Faster, Balanced, Detailed, and ExtremeDetail pre-processing levels for reading barcodes.`

---

## Structured data

**TechArticle abstract**

> Use ReadingSpeed in IronBarcode to set how much pre-processing is applied before reading, on BarcodeReaderOptions.Speed. Faster does none and reads clean images quickly, while Balanced, Detailed, and ExtremeDetail apply increasing processing to recover barcodes from faint or skewed scans.
