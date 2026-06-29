<!--
N-Lite/enum. Members verified 2026-06-22: All, MicroQRCode, None, QRCode, RMQRCode.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Enum.QrEncoding.html
-->

## Injected overview (Markdown)

`QrEncoding` selects the QR symbol family a `QrWriter` produces or a `QrReader` looks for, set on `QrOptions.Encoding`. `QRCode` is the standard full-size format and the usual choice, `MicroQRCode` is the compact variant for small payloads and tight spaces, and `RMQRCode` is the rectangular form for narrow labels. `All` lets a reader detect any family, and `None` disables a specific type. The [generate QR code example](https://ironsoftware.com/csharp/qr/examples/generate-qr-code/) writes a standard symbol, and [supported QR formats](https://ironsoftware.com/csharp/qr/get-started/supported-qr-formats/) compares the families.

```csharp
var options = new QrOptions(QrEncoding.QRCode, QrErrorCorrectionLevel.High);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrEncoding Enum - IronQR C# API Reference`
- v2 (human): `QrEncoding: Pick a QR Symbol Type in C#`
- v3 (balanced): `QrEncoding Enum | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the QR symbol family in C# with the IronQR QrEncoding enum: QRCode, MicroQRCode, RMQRCode, All, or None, set on QrOptions.Encoding.`
- v2 (human): `Select which QR format IronQR writes or reads in C# with the QrEncoding enum: standard QRCode, compact MicroQRCode, or rectangular RMQRCode.`
- v3 (balanced): `Reference for the IronQR QrEncoding enum in C#: QRCode, MicroQRCode, and RMQRCode symbol families via QrOptions.Encoding.`

---

## Structured data

**TechArticle abstract**

> Use QrEncoding in IronQR to select the QR symbol family, set on QrOptions.Encoding. QRCode is the standard format, MicroQRCode is the compact variant, and RMQRCode is the rectangular form. All lets a reader detect any family and None disables a type.
