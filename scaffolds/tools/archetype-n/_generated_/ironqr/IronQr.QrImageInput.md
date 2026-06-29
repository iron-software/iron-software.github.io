<!--
N-Mid (class implementing IQrInput, 4 members). Frame B. IronQr. Members verified 2026-06-22.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrImageInput.html
-->

## Injected overview (Markdown)

`QrImageInput` is the image wrapper handed to `QrReader.Read`. It adapts an image into the `IQrInput` contract the reader consumes, pairing the picture with the scan strategy used to detect codes in it.

Construct one from an `AnyBitmap` and a `QrScanMode`, where the bitmap can be loaded from a file, stream, or byte array, and the mode selects machine-learning or basic detection. The `Image` property exposes the wrapped bitmap and `QrScanMode` the chosen strategy. Because it holds an image and implements `IDisposable`, wrap it in a `using` statement so the bitmap is released after the read. The wrapped `AnyBitmap` is the bridge to the rest of the imaging stack, so a frame captured from a camera, a region cropped from a screenshot, or a page rendered from a PDF can all be read once they sit in a bitmap. The scan mode set here applies only to this input, so different inputs in the same run can use different strategies.

```csharp
using var input = new QrImageInput(AnyBitmap.FromFile("qr.png"), QrScanMode.Auto);
IEnumerable<QrResult> results = reader.Read(input);
```

The [read QR code example](https://ironsoftware.com/csharp/qr/examples/read-qr-code/) wraps an image for reading, and the [scan modes how-to](https://ironsoftware.com/csharp/qr/how-to/read-qr-codes-with-scan-modes/) selects the detection strategy.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrImageInput Class - IronQR C# API`
- v2 (human): `QrImageInput: Wrap an Image for QR Reading`
- v3 (balanced): `QrImageInput Class | IronQR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Wrap an image for QR reading in C# with the IronQR QrImageInput class: pair an AnyBitmap with a QrScanMode and pass it to QrReader.Read.`
- v2 (human): `Prepare an image for QR detection in C# with the IronQR QrImageInput class: load an AnyBitmap, choose a scan mode, and read it with QrReader.`
- v3 (balanced): `Reference for the IronQR QrImageInput class in C#: an IQrInput that pairs an AnyBitmap with a QrScanMode for QrReader.Read.`

---

## Structured data

**TechArticle abstract**

> QrImageInput wraps an image for reading in C#, implementing the IQrInput contract that IronQR's QrReader consumes. Construct it from an AnyBitmap and a QrScanMode, read the Image and QrScanMode properties, and dispose it after use since it holds the bitmap. Pass it to QrReader.Read to detect the codes in the image.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrImageInput live in the IronQR API?",
    "answer": "QrImageInput is a class in the IronQr namespace, shipped in IronQr.dll. It implements IQrInput and IDisposable, and is the standard input passed to QrReader.Read."
  },
  {
    "question": "How do you read a QR code from a bitmap or file in C#?",
    "answer": "Load the image into an AnyBitmap, wrap it in a QrImageInput with a QrScanMode, and pass it to QrReader.Read. Wrap the input in a using statement so the bitmap is released afterward."
  }
]
```
