<!--
N-Lite/enum. Members verified 2026-06-22: High, Highest, Low, Medium. Salience: Low->Medium->High->Highest (ascending redundancy).
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrErrorCorrectionLevel.html
-->

## Injected overview (Markdown)

`QrErrorCorrectionLevel` sets how much redundancy a QR code carries so it still scans when damaged or partly obscured, assigned to `QrOptions.ErrorCorrectionLevel`. `Low` adds the least overhead and keeps the symbol simple, `Medium` is a common balance, and `High` and `Highest` add the most recovery data, which is what lets a logo sit over the center of a code. The [error correction example](https://ironsoftware.com/csharp/qr/examples/error-correction-qr-code/) shows the trade-off, and the [fault-tolerance how-to](https://ironsoftware.com/csharp/qr/how-to/checksum-and-fault-tolerance/) explains recovery.

```csharp
var options = new QrOptions(QrEncoding.QRCode, QrErrorCorrectionLevel.Highest);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrErrorCorrectionLevel Enum - IronQR C# API`
- v2 (human): `QrErrorCorrectionLevel: QR Recovery in C#`
- v3 (balanced): `QrErrorCorrectionLevel | IronQR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set QR error correction in C# with the IronQR QrErrorCorrectionLevel enum: Low, Medium, High, or Highest, on QrOptions.ErrorCorrectionLevel.`
- v2 (human): `Control how much damage a QR code survives in C# with the IronQR QrErrorCorrectionLevel enum, from Low overhead to Highest recovery for logos.`
- v3 (balanced): `Reference for the IronQR QrErrorCorrectionLevel enum in C#: Low, Medium, High, and Highest recovery via QrOptions.ErrorCorrectionLevel.`

---

## Structured data

**TechArticle abstract**

> Use QrErrorCorrectionLevel in IronQR to set how much redundancy a QR code carries so it scans when damaged, on QrOptions.ErrorCorrectionLevel. Low adds the least overhead, Medium balances, and High and Highest add the most recovery data, enough to place a logo over the code.
