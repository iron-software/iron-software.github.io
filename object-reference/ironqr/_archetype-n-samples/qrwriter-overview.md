<!--
N-Full (7 members, static Write overloads). Frame A. IronQr.
Write overloads + QrCode return verified 2026-06-22.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrWriter.html
-->

## Injected overview (Markdown)

`QrWriter` generates QR codes from text, bytes, or a stream in C#. Every member is a static `Write` overload, so there is nothing to construct: call `QrWriter.Write(...)` and a `QrCode` comes back, ready to save as an image, stamp onto a PDF, or export as a data URL.

The overloads cover the common inputs. `Write(string)` encodes text or a URL, `Write(byte[])` encodes raw bytes, and `Write(Stream)` encodes a stream's contents. Each has a second form that also takes a `QrOptions`, which sets the `QrEncoding`, the `QrErrorCorrectionLevel`, the version, and the character encoding. Without options, the writer picks sensible defaults for a standard `QRCode`.

Encoding a `byte[]` or `Stream` suits a binary payload such as a serialized token or a small file, while `Write(string)` covers the common URL and text cases. Because every overload returns the same `QrCode`, the choice of output, an image, a PDF stamp, a data URL, or an HTML tag, is made afterward and is independent of how the code was encoded.

The result is a `QrCode`. From there, `Save` writes an image and accepts a `QrStyleOptions` to control size, color, margins, and an embedded logo, while `StampToExistingPdfPage` and `StampToExistingPdfPages` place the code onto a PDF, and `ToDataUrl` and `ToHtmlTag` produce web-ready output. Raise the error-correction level when the code must survive print wear or a logo overlay.

```csharp
using IronQr;

QrCode qr = QrWriter.Write("https://ironsoftware.com");
qr.Save("qr.png");
```

The [generate QR code example](https://ironsoftware.com/csharp/qr/examples/generate-qr-code/) writes a basic code, the [styled QR example](https://ironsoftware.com/csharp/qr/examples/generate-styled-qr/) applies styling, and the [QR writing tutorial](https://ironsoftware.com/csharp/qr/tutorials/csharp-qr-writing/) covers the options.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrWriter Class - IronQR C# API Reference`
- v2 (human): `QrWriter: Generate QR Codes in C#`
- v3 (balanced): `QrWriter Class | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Generate QR codes in C# with the IronQR QrWriter class. Call the static Write with text, bytes, or a stream and an optional QrOptions to get a QrCode.`
- v2 (human): `Create QR codes in C# with the IronQR QrWriter class: encode text, bytes, or a stream, set options, and get a QrCode to save or stamp, with examples.`
- v3 (balanced): `Reference for the IronQR QrWriter class in C#: static Write overloads that encode text, bytes, or a stream into a QrCode, with QrOptions.`

---

## Structured data

**TechArticle abstract**

> Generating QR codes in C# runs through the IronQR QrWriter class. Its static Write overloads encode a string, byte array, or stream, with an optional QrOptions for encoding, error correction, version, and character set, and return a QrCode. From the QrCode, Save writes a styled image, StampToExistingPdfPage places it on a PDF, and ToDataUrl and ToHtmlTag produce web output.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrWriter live in the IronQR API?",
    "answer": "QrWriter is a class in the IronQr namespace, shipped in IronQr.dll. Its members are static Write overloads, so call QrWriter.Write directly without constructing an instance."
  },
  {
    "question": "How do you generate a QR code in C#?",
    "answer": "Call the static QrWriter.Write with a string, byte array, or stream to get a QrCode, then call Save on it to write an image. Pass a QrStyleOptions to Save to control size, color, and logo."
  },
  {
    "question": "How do you set the encoding or error correction of a generated QR code?",
    "answer": "Pass a QrOptions to the Write overload, setting QrEncoding, QrErrorCorrectionLevel, version, and character encoding. Without it, QrWriter uses defaults for a standard QRCode."
  }
]
```
