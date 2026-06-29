<!--
N-Full (override; 1 ctor + 4 properties). Frame E. IronBarcode.
Members verified 2026-06-23. QRCodeWriter.CreateQrCodeWithLogo + AnyBitmap cross-refs verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.QRCodeLogo.html
-->

## Injected overview (Markdown)

An image embedded in the center of a QR code, with control over its size and corner rounding, is described by `QRCodeLogo`. It is passed to `QRCodeWriter.CreateQrCodeWithLogo`, so a brand mark is placed on the code at the moment it is generated. Build one from the logo image and the dimensions it should occupy, then hand it to the writer alongside the value being encoded.

The constructor is overloaded across the ways a developer might supply the artwork: an `AnyBitmap`, a `byte[]`, a `Stream`, a file path `string`, or a `Uri`. Each form takes either a single `size` or an explicit `width` and `height`, plus an optional `roundedCornerRadius`. The same values are readable and settable afterward through the `Logo`, `LogoWidth`, `LogoHeight`, and `RoundedCornerRadius` properties, so a logo built one way can be adjusted before the code is written.

`LogoWidth` and `LogoHeight` size the mark within the symbol, and `RoundedCornerRadius` softens its corners for a more finished placement. The `Logo` property holds the `AnyBitmap` source itself, which lets a developer swap the artwork without rebuilding the object. Keep the mark modest relative to the overall code: a logo covers part of the pattern, so a small, centered image leaves enough of the symbol intact to scan.

Because the covered modules cannot be read directly, pair a logo with a high error-correction level. `CreateQrCodeWithLogo` builds in headroom for this, but a logo that fills too much of the code will still defeat recovery, so size it conservatively and test a scan before shipping. For QR codes without a logo, or for non-QR symbologies, use `QRCodeWriter.CreateQrCode` or `BarcodeWriter.CreateBarcode` instead.

```csharp
using IronBarCode;
using IronSoftware.Drawing;

var logo = new QRCodeLogo(AnyBitmap.FromFile("logo.png"), 100, 100, 5);
QRCodeWriter.CreateQrCodeWithLogo("https://ironsoftware.com", logo).SaveAsPng("branded-qr.png");
```

The [customize QR code style how-to](https://ironsoftware.com/csharp/barcode/how-to/customize-qr-code-style/) embeds and sizes a logo, the [custom QR code example](https://ironsoftware.com/csharp/barcode/examples/csharp-custom-qr-code/) shows it within a styled code, and the [QR code generator tutorial](https://ironsoftware.com/csharp/barcode/tutorials/csharp-qr-code-generator/) builds a complete branded generator.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QRCodeLogo Class - IronBarcode C# API`
- v2 (human): `QRCodeLogo: Add a Logo to a QR Code in C#`
- v3 (balanced): `QRCodeLogo | IronBarcode C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Embed a logo in a QR code in C# with the IronBarcode QRCodeLogo class: set the bitmap, width, height, and corner radius for CreateQrCodeWithLogo.`
- v2 (human): `Add a brand mark to a QR code in C# with the IronBarcode QRCodeLogo class: size and round a center logo, then pass it to QRCodeWriter.`
- v3 (balanced): `Reference for the IronBarcode QRCodeLogo class in C#: a center logo with bitmap, width, height, and corner radius for CreateQrCodeWithLogo.`

---

## Structured data

**TechArticle abstract**

> QRCodeLogo describes an image embedded in the center of a QR code in C#, passed to IronBarcode's QRCodeWriter.CreateQrCodeWithLogo. Build it from an AnyBitmap, byte array, stream, file path, or Uri with a size or explicit width and height plus an optional roundedCornerRadius, all exposed through the Logo, LogoWidth, LogoHeight, and RoundedCornerRadius properties. Keep the mark small so the code still scans.

**FAQPage entries**

```json
[
  {
    "question": "Where does QRCodeLogo live in the IronBarcode API?",
    "answer": "QRCodeLogo is a class in the IronBarCode namespace, shipped in IronBarCode.dll. Build a QRCodeLogo and pass it to QRCodeWriter.CreateQrCodeWithLogo to embed an image in the center of a generated QR code."
  },
  {
    "question": "How do you add a logo to a QR code in C#?",
    "answer": "Construct a QRCodeLogo from your image with a width and height, then pass it to QRCodeWriter.CreateQrCodeWithLogo along with the value to encode. Set RoundedCornerRadius for softer corners, and keep the logo small so the covered modules can still be recovered."
  },
  {
    "question": "How do you stop a logo from breaking a QR code in C#?",
    "answer": "Size the QRCodeLogo conservatively with LogoWidth and LogoHeight so it covers little of the symbol, and rely on the high error correction CreateQrCodeWithLogo applies. Test a scan before shipping, since a logo that fills too much of the code defeats recovery."
  }
]
```
