<!--
N-Mid (value struct, 5 members). Frame E. IronQr. Members verified 2026-06-22. QrStyleOptions.Logo cross-ref verified.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrLogo.html
-->

## Injected overview (Markdown)

An image embedded in the center of a QR code is described by `QrLogo`. It is assigned to `QrStyleOptions.Logo`, so a brand mark is placed on the code at the moment it is saved. Build one from the logo image and its target size.

The constructor takes an `AnyBitmap` plus a `width`, `height`, and `cornerRadius`, and the `Bitmap`, `Width`, `Height`, and `CornerRadius` properties expose the same values. `Width` and `Height` size the logo within the code, and `CornerRadius` rounds its corners for a softer placement. Because a logo covers part of the symbol, raise the `QrErrorCorrectionLevel` on the `QrOptions` used to write the code so it still scans reliably, and keep the logo small relative to the code's `Dimensions`. A rounded, modestly sized mark reads as deliberate branding while leaving enough of the pattern intact for dependable scanning.

```csharp
style.Logo = new QrLogo(logoBitmap, 80, 80);
```

The [custom logo how-to](https://ironsoftware.com/csharp/qr/how-to/add-custom-logo-qr-code/) embeds a logo, and the [styled QR example](https://ironsoftware.com/csharp/qr/examples/generate-styled-qr/) shows it within a full style.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrLogo Struct - IronQR C# API Reference`
- v2 (human): `QrLogo: Embed a Logo in a QR Code in C#`
- v3 (balanced): `QrLogo | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Embed a logo in a QR code in C# with the IronQR QrLogo: set the bitmap, width, height, and corner radius, assigned to QrStyleOptions.Logo.`
- v2 (human): `Add a brand mark to a QR code in C# with the IronQR QrLogo: size and round a logo for the center of the code, applied via QrStyleOptions.`
- v3 (balanced): `Reference for the IronQR QrLogo value in C#: an embedded center logo with bitmap, width, height, and corner radius for QrStyleOptions.Logo.`

---

## Structured data

**TechArticle abstract**

> QrLogo describes an image embedded in the center of a QR code in C#, assigned to QrStyleOptions.Logo. Build it from an AnyBitmap with a width, height, and cornerRadius, exposed through the Bitmap, Width, Height, and CornerRadius properties. Because a logo covers part of the symbol, raise the QrErrorCorrectionLevel so the code still scans.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrLogo live in the IronQR API?",
    "answer": "QrLogo is a value type in the IronQr namespace, shipped in IronQr.dll. Assign a QrLogo to QrStyleOptions.Logo to embed an image in the center of a generated code."
  },
  {
    "question": "How do you add a logo to a QR code without breaking it in C#?",
    "answer": "Build a QrLogo from your image with a modest width and height, assign it to QrStyleOptions.Logo, and raise the QrErrorCorrectionLevel on the QrOptions used to write the code so the covered modules can still be recovered."
  }
]
```
