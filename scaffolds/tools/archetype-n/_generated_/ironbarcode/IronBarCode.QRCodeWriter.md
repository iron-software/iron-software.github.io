<!--
N-Mid (2 static methods). Frame A. IronBarcode. Members verified 2026-06-23.
GeneratedBarcode + QRCodeLogo + QrErrorCorrectionLevel cross-refs verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.QRCodeWriter.html
-->

## Injected overview (Markdown)

`QRCodeWriter` generates QR codes with QR-specific options in C#, including version, error correction, and an embedded logo. Both members are static, so call `QRCodeWriter.CreateQrCode(...)` and a `GeneratedBarcode` comes back, ready to save as an image, stamp onto a PDF, or export as a data URL.

`CreateQrCode` encodes a `string`, `byte[]`, or `Stream` and accepts a `size`, a `QRCodeWriter.QrErrorCorrectionLevel`, and a `qrVersion`. The error-correction argument is what lets a code survive print wear or a partial cover, so raise it for labels that take physical handling. `CreateQrCodeWithLogo` does the same but also takes a `QRCodeLogo`, placing a brand mark in the center of the symbol and building in the extra correction a logo needs. For non-QR symbologies, or for a plain QR code without these options, use `BarcodeWriter.CreateBarcode` with `BarcodeEncoding.QRCode` instead. Because both methods return the same `GeneratedBarcode`, the choice of output format is made afterward and is independent of how the code was encoded.

```csharp
using IronBarCode;

QRCodeWriter.CreateQrCode("https://ironsoftware.com", 500, QRCodeWriter.QrErrorCorrectionLevel.High)
    .SaveAsPng("qr.png");
```

The [create 2D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-2d-barcodes/) generates a QR code, and the [custom QR code example](https://ironsoftware.com/csharp/barcode/examples/csharp-custom-qr-code/) applies version, error correction, and a logo.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QRCodeWriter Class - IronBarcode C# API`
- v2 (human): `QRCodeWriter: Generate QR Codes in C#`
- v3 (balanced): `QRCodeWriter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Generate QR codes in C# with the IronBarcode QRCodeWriter class. Call static CreateQrCode with a value, size, and error correction to get a GeneratedBarcode.`
- v2 (human): `Create QR codes in C# with the IronBarcode QRCodeWriter class: set size, version, error correction, and an embedded logo, then save the result.`
- v3 (balanced): `Reference for the IronBarcode QRCodeWriter class in C#: static CreateQrCode and CreateQrCodeWithLogo for QR codes with error correction.`

---

## Structured data

**TechArticle abstract**

> Generating QR codes with version, error correction, and a logo in C# runs through the IronBarcode QRCodeWriter class. Its static CreateQrCode encodes a string, byte array, or stream with a size, QrErrorCorrectionLevel, and qrVersion, and CreateQrCodeWithLogo adds a QRCodeLogo in the center. Both return a GeneratedBarcode to save, stamp, or export.

**FAQPage entries**

```json
[
  {
    "question": "Where does QRCodeWriter live in the IronBarcode API?",
    "answer": "QRCodeWriter is a static class in the IronBarCode namespace, shipped in IronBarCode.dll. Call QRCodeWriter.CreateQrCode or CreateQrCodeWithLogo directly to get a GeneratedBarcode, with no instance to construct."
  },
  {
    "question": "How do you set the error correction of a QR code in C#?",
    "answer": "Pass a QRCodeWriter.QrErrorCorrectionLevel to CreateQrCode. Raise it for codes that face print wear or a logo overlay, since higher correction lets a scanner recover the value from a partly damaged or covered symbol."
  }
]
```
