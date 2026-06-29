<!--
N-Full (override; 11-member value struct, rich styling). Frame E. P7 bucketing (size/spacing/color/branding). IronQr.
Members verified 2026-06-22. QrLogo + QrCode.Save cross-refs verified.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrStyleOptions.html
-->

## Injected overview (Markdown)

The visual styling of a generated QR code, covering size, margins, colors, and an embedded logo, is set through `QrStyleOptions`. It is passed to `QrCode.Save`, so a code produced by `QrWriter` is styled at the moment it becomes an image. Construct one with the object initializer or the parameterized constructor that takes dimensions, margins, and colors.

The properties group by concern. Size is `Dimensions`, the pixel width and height of the square image. Spacing is the convenience `Margins`, which sets every side at once, or the per-side `MarginTop`, `MarginRight`, `MarginBottom`, and `MarginLeft` for asymmetric quiet zones. Color is `Color` for the modules and `BackgroundColor` for the field behind them, both `System.Drawing.Color` values. Branding is `Logo`, a `Nullable<QrLogo>` that embeds an image in the center of the code.

The parameterless constructor starts from sensible defaults, a 300-pixel code with a small uniform margin, so only the properties that differ from the default need to be set. The per-side margins are useful when a code sits in a layout that needs a wider quiet zone on one edge, for instance against a page border or next to other content.

Two pairings matter in practice. A logo covers part of the symbol, so raise the `QrErrorCorrectionLevel` on the `QrOptions` used to write the code, which keeps it scannable. Custom colors need enough contrast between `Color` and `BackgroundColor` for scanners to read reliably, so avoid light-on-light combinations.

```csharp
var style = new QrStyleOptions
{
    Dimensions = 400,
    Color = Color.DarkBlue,
    Logo = new QrLogo(logoBitmap, 80, 80)
};
qr.Save(style);
```

The [styled QR example](https://ironsoftware.com/csharp/qr/examples/generate-styled-qr/) applies a full style, the [custom logo how-to](https://ironsoftware.com/csharp/qr/how-to/add-custom-logo-qr-code/) embeds a logo, and the [custom colors how-to](https://ironsoftware.com/csharp/qr/how-to/implement-custom-qr-code-colors/) covers contrast.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrStyleOptions Struct - IronQR C# API`
- v2 (human): `QrStyleOptions: Style QR Codes in C#`
- v3 (balanced): `QrStyleOptions | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style a generated QR code in C# with the IronQR QrStyleOptions: set Dimensions, per-side margins, Color, BackgroundColor, and an embedded Logo.`
- v2 (human): `Control how a QR code looks in C# with IronQR QrStyleOptions: size, margins, colors, and a center logo, passed to QrCode.Save, with examples.`
- v3 (balanced): `Reference for the IronQR QrStyleOptions value in C#: set QR size, margins, colors, and an embedded logo, applied through QrCode.Save.`

---

## Structured data

**TechArticle abstract**

> Styling a generated QR code in C# runs through the IronQR QrStyleOptions value, passed to QrCode.Save. Set Dimensions for size, Margins or the per-side MarginTop through MarginLeft for spacing, Color and BackgroundColor for the palette, and Logo (a Nullable<QrLogo>) to embed a center image. Raise the QrErrorCorrectionLevel when adding a logo, and keep enough color contrast for reliable scanning.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrStyleOptions live in the IronQR API?",
    "answer": "QrStyleOptions is a value type in the IronQr namespace, shipped in IronQr.dll. Build one and pass it to QrCode.Save to style the generated image."
  },
  {
    "question": "How do you add a logo to a QR code in C#?",
    "answer": "Set the Logo property to a QrLogo built from your image, then pass the QrStyleOptions to QrCode.Save. Because a logo covers part of the symbol, raise the QrErrorCorrectionLevel on the QrOptions used to write the code so it still scans."
  },
  {
    "question": "How do you change a QR code's size and colors in C#?",
    "answer": "Set Dimensions for the pixel size, and Color and BackgroundColor for the palette, on a QrStyleOptions passed to QrCode.Save. Keep strong contrast between the two colors so scanners can read the code."
  }
]
```
