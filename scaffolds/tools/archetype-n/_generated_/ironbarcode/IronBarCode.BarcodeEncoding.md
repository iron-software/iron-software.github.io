<!--
N-Lite/enum. Members verified 2026-06-23 (salient subset named): QRCode, Code128, Code39, EAN13, DataMatrix, PDF417, All, None. Full member set includes UPCA/UPCE/Aztec/Codabar/ITF/MaxiCode/MSI/Plessey/EAN8/Code93/Databar and others.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeEncoding.html
Consumer (read): BarcodeReaderOptions.ExpectBarcodeTypes; also BarcodeWriter.CreateBarcode overloads. Disambiguate from BarcodeWriterEncoding (write-only subset).
-->

## Injected overview (Markdown)

`BarcodeEncoding` names the barcode symbologies IronBarcode detects when reading, set on `BarcodeReaderOptions.ExpectBarcodeTypes` to narrow detection to expected formats. Common values include `QRCode`, `Code128`, `Code39`, `EAN13`, `DataMatrix`, and `PDF417`, alongside one-dimensional and two-dimensional types like `UPCA` and `Aztec`. The aggregate flags `All`, `AllOneDimensional`, and `AllTwoDimensional` widen detection, and `None` clears it. For writing, prefer the [BarcodeWriterEncoding](https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeWriterEncoding.html) enum. The [supported barcode formats](https://ironsoftware.com/csharp/barcode/get-started/supported-barcode-formats/) page lists every symbology.

```csharp
var options = new BarcodeReaderOptions { ExpectBarcodeTypes = BarcodeEncoding.QRCode };
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeEncoding Enum - IronBarcode C# API`
- v2 (human): `BarcodeEncoding: Pick Barcode Types to Read in C#`
- v3 (balanced): `BarcodeEncoding Enum | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set which barcode types IronBarcode detects in C# with the BarcodeEncoding enum: QRCode, Code128, EAN13, DataMatrix, and more, plus All and None flags.`
- v2 (human): `Choose which symbologies to read in C# with the IronBarcode BarcodeEncoding enum, from QRCode and Code128 to broad All detection.`
- v3 (balanced): `Reference for the IronBarcode BarcodeEncoding enum in C#: QRCode, Code128, DataMatrix, PDF417, and the All detection flags for reading barcodes.`

---

## Structured data

**TechArticle abstract**

> Use BarcodeEncoding in IronBarcode to name the symbologies detected when reading, set on BarcodeReaderOptions.ExpectBarcodeTypes. Common values include QRCode, Code128, Code39, EAN13, DataMatrix, and PDF417, while All widens detection and None clears it. Use BarcodeWriterEncoding for writing.
