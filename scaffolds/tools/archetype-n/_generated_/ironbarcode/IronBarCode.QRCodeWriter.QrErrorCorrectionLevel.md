<!--
N-Lite/enum (nested in QRCodeWriter; namespace IronBarCode.QRCodeWriter). Members verified 2026-06-23: Low, Medium, High, Highest (ascending recovery).
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.QRCodeWriter.QrErrorCorrectionLevel.html
Consumer: QRCodeWriter.CreateQrCode(value, size, errorCorrection, ...).
-->

## Injected overview (Markdown)

`QrErrorCorrectionLevel` sets how much redundancy a QR code carries so it still scans when damaged or partly covered, passed as the `errorCorrection` argument to `QRCodeWriter.CreateQrCode`. `Low` recovers about 7 percent of the data and keeps the symbol smallest, `Medium` recovers about 15 percent as a common balance, and `High` and `Highest` recover about 25 and 30 percent, enough to let a logo sit over the code. The [create 2D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-2d-barcodes/) covers writing QR codes.

```csharp
var qr = QRCodeWriter.CreateQrCode("12345", 500, QrErrorCorrectionLevel.Highest);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrErrorCorrectionLevel Enum - IronBarcode C#`
- v2 (human): `QrErrorCorrectionLevel: QR Recovery in C#`
- v3 (balanced): `QrErrorCorrectionLevel | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set QR error correction in C# with the IronBarcode QrErrorCorrectionLevel enum: Low, Medium, High, or Highest, on QRCodeWriter.CreateQrCode.`
- v2 (human): `Control how much damage a QR code survives in C# with the IronBarcode QrErrorCorrectionLevel enum, from Low overhead to Highest recovery for logos.`
- v3 (balanced): `Reference for the IronBarcode QrErrorCorrectionLevel enum in C#: Low, Medium, High, and Highest recovery levels for writing QR codes.`

---

## Structured data

**TechArticle abstract**

> Use QrErrorCorrectionLevel in IronBarcode to set how much redundancy a QR code carries so it scans when damaged, passed to QRCodeWriter.CreateQrCode. Low recovers about 7 percent and stays smallest, Medium about 15 percent, and High and Highest about 25 and 30 percent, enough to place a logo over the code.
