<!--
N-Mid (6 members). Frame B. IronQr. Members verified 2026-06-22. QrReader.Read cross-ref verified.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrResult.html
-->

## Injected overview (Markdown)

`QrResult` is one decoded QR code returned by `QrReader.Read`. A read produces an `IEnumerable<QrResult>`, one entry per code found in the image, and each result holds everything detected about that code.

`Value` is the decoded text, the field most reads need. `Url` is the same payload parsed as a `Uri` when the value is a link, saving a manual parse. `QrType` reports the detected `QrEncoding`, distinguishing a standard `QRCode` from a `MicroQRCode` or `RMQRCode`. `Points` gives the corner coordinates that locate the code in the source image, which a scanner UI can use to draw a highlight. The text and type fields are read-only, reflecting a single detection. Reading `Points` lets an application mark exactly where each code was found, which matters when several codes share one frame and the user needs to know which highlighted region maps to which decoded value.

```csharp
foreach (QrResult result in reader.Read(input))
    Console.WriteLine(result.Value);
```

The [read QR value example](https://ironsoftware.com/csharp/qr/examples/read-qr-code-value/) reads the decoded text, and the [read QR type how-to](https://ironsoftware.com/csharp/qr/how-to/read-qr-code-type/) inspects the encoding.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrResult Class - IronQR C# API Reference`
- v2 (human): `QrResult: Read QR Code Results in C#`
- v3 (balanced): `QrResult Class | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read a decoded QR code in C# with the IronQR QrResult class: Value, a parsed Url, the QrType encoding, and the corner Points in the image.`
- v2 (human): `Get the data from a scanned QR code in C# with the IronQR QrResult class: decoded value, URL, code type, and position, returned by QrReader.`
- v3 (balanced): `Reference for the IronQR QrResult class in C#: the decoded Value, parsed Url, QrType, and Points returned by QrReader.Read for each code.`

---

## Structured data

**TechArticle abstract**

> QrResult is one decoded QR code returned by IronQR's QrReader.Read in C#, one per code in the image. Value is the decoded text, Url is the payload parsed as a Uri when it is a link, QrType reports the detected QrEncoding, and Points gives the corner coordinates that locate the code in the source image.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrResult live in the IronQR API?",
    "answer": "QrResult is a class in the IronQr namespace, shipped in IronQr.dll. QrReader.Read returns an IEnumerable<QrResult>, one for each QR code detected in the image."
  },
  {
    "question": "How do you get the decoded text from a scanned QR code in C#?",
    "answer": "Read the Value property of each QrResult returned by QrReader.Read. When the payload is a link, Url exposes it parsed as a Uri, and QrType reports whether it is a QRCode, MicroQRCode, or RMQRCode."
  }
]
```
