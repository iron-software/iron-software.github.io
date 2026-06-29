<!--
N-Full (override; central read class, 3 members). Frame D. IronQr.
Read/ReadAsync verified; QrImageInput(AnyBitmap, QrScanMode), QrResult.Value/Url/QrType/Points verified 2026-06-22.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrReader.html
-->

## Injected overview (Markdown)

Reading QR codes from an image in C# runs through `QrReader`. A single reader detects and decodes every QR code in a supplied image, so one call handles a photo or scan that contains one code or several. It is the entry point a developer reaches for behind a search like "C# QR code reader".

Create one with `new QrReader()` and call `Read`, passing an `IQrInput`. The usual input is a `QrImageInput` wrapping an `AnyBitmap` loaded from a file, stream, or bytes, with a `QrScanMode` that selects the detection strategy. `Read` returns an `IEnumerable<QrResult>`, one entry per code found, and `ReadAsync` is the awaitable form for keeping the call off the UI or request thread.

Each `QrResult` carries the decoded `Value`, a parsed `Url` when the value is a link, the detected `QrType` as a `QrEncoding`, and the corner `Points` that locate the code in the image. Because a single image can hold multiple codes, iterate the results rather than assuming one. Set `QrScanMode.Auto` on the input for difficult photos, where the machine-learning model improves detection, and a basic mode for clean, generated images. IronQR reads from photos, screenshots, and scanned documents, not only crisp generated images, which is why the default mode favors detection accuracy, and the same reader handles a QR code on a PDF page once that page is rendered to a bitmap.

```csharp
using IronQr;
using IronSoftware.Drawing;

var reader = new QrReader();
using var input = new QrImageInput(AnyBitmap.FromFile("qr.png"), QrScanMode.Auto);
foreach (QrResult result in reader.Read(input))
    Console.WriteLine(result.Value);
```

The [read QR code example](https://ironsoftware.com/csharp/qr/examples/read-qr-code/) covers a basic read, the [read from image how-to](https://ironsoftware.com/csharp/qr/how-to/read-qr-codes-from-image/) handles real images, and the [scan modes how-to](https://ironsoftware.com/csharp/qr/how-to/read-qr-codes-with-scan-modes/) tunes detection.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrReader Class - IronQR C# API Reference`
- v2 (human): `QrReader: Read QR Codes in C#`
- v3 (balanced): `QrReader Class | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read QR codes in C# with the IronQR QrReader class. Pass a QrImageInput to Read or ReadAsync and get a QrResult for each code, with its value and type.`
- v2 (human): `Detect and decode QR codes in C# with the IronQR QrReader class: read every code in an image, sync or async, with value, URL, and position.`
- v3 (balanced): `Reference for the IronQR QrReader class in C#: read QR codes from an image with Read and ReadAsync, returning a QrResult per detected code.`

---

## Structured data

**TechArticle abstract**

> Reading QR codes from an image in C# runs through the IronQR QrReader class. Construct one, pass a QrImageInput (an AnyBitmap plus a QrScanMode) to Read or the awaitable ReadAsync, and receive an IEnumerable<QrResult>, one per code found. Each result exposes the decoded Value, a parsed Url, the QrType, and the corner Points. A single image can hold several codes, so iterate the results.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrReader live in the IronQR API?",
    "answer": "QrReader is a class in the IronQr namespace, shipped in IronQr.dll. Construct it with new QrReader() and call Read or ReadAsync with an IQrInput such as QrImageInput."
  },
  {
    "question": "How do you read a QR code from an image in C#?",
    "answer": "Create a QrReader, wrap the image in a QrImageInput with a QrScanMode, and call Read to get an IEnumerable<QrResult>. Read each result's Value for the decoded text. Use ReadAsync for the non-blocking form."
  },
  {
    "question": "Can IronQR read multiple QR codes from one image?",
    "answer": "Yes. QrReader.Read returns an IEnumerable<QrResult> with one entry per code detected in the image, so iterate the results. Each QrResult also reports its position through the Points property."
  }
]
```
