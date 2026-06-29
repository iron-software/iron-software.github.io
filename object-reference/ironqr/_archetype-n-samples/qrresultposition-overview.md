<!--
N-Mid (value struct, 2 members). Frame E. IronQr. Members verified 2026-06-22.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrResultPosition.html
-->

## Injected overview (Markdown)

The location of a detected QR code within an image is given by `QrResultPosition` through its corner `Points`. When a read needs to do more than decode, for example draw a box around each code in a scanner UI or crop the region for review, the position tells the application where the code sits in the source pixels.

The `Points` property is a read-only `PointF[]` holding the corner coordinates of the detected symbol, and the constructor takes the same array. Map those points onto the displayed image to highlight or overlay the code. For the decoded text and type, read the `QrResult` itself, whose own `Points` property covers the common case; `QrResultPosition` is the focused value when position is passed or stored on its own.

```csharp
PointF[] corners = position.Points;
```

The [advanced read example](https://ironsoftware.com/csharp/qr/examples/read-qr-code-advanced/) works with detection detail, and the [Blazor scanner example](https://ironsoftware.com/csharp/qr/examples/blazor-qr-code-scanner/) overlays results on a live view.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrResultPosition Struct - IronQR C# API`
- v2 (human): `QrResultPosition: Locate a QR Code in C#`
- v3 (balanced): `QrResultPosition | IronQR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Locate a detected QR code in an image in C# with the IronQR QrResultPosition: read its corner Points as a PointF array to highlight or crop.`
- v2 (human): `Find where a QR code sits in an image in C# with the IronQR QrResultPosition: its corner Points drive overlays and crops in a scanner UI.`
- v3 (balanced): `Reference for the IronQR QrResultPosition value in C#: the corner Points that locate a detected QR code within the source image.`

---

## Structured data

**TechArticle abstract**

> QrResultPosition gives the location of a detected QR code within an image in C# through its read-only Points property, a PointF array of corner coordinates. Map those points onto the displayed image to draw a highlight or crop the region. For the decoded value and type, read the QrResult, whose own Points covers the common case.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrResultPosition live in the IronQR API?",
    "answer": "QrResultPosition is a value type in the IronQr namespace, shipped in IronQr.dll. It holds the corner Points of a detected QR code as a PointF array."
  },
  {
    "question": "How do you find where a QR code is located in an image in C#?",
    "answer": "Read the Points property, a PointF array of the code's corners, and map it onto the displayed image to draw a box or crop the region. QrResult also exposes Points for the common case."
  }
]
```
