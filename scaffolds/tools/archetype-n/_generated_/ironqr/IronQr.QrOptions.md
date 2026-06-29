<!--
N-Mid (value struct, 6 members). Frame E. IronQr. Members verified 2026-06-22. QrWriter.Write cross-ref verified.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.QrOptions.html
-->

## Injected overview (Markdown)

The encoding settings for a generated QR code, its symbol type, recovery level, version, and character set, are carried by `QrOptions`. It is passed to a `QrWriter.Write` overload, so the choices that shape the symbol are made at generation time rather than after.

`Encoding` selects the `QrEncoding` family, `ErrorCorrectionLevel` sets the `QrErrorCorrectionLevel` redundancy, `Version` is a `Nullable<int>` that fixes the symbol version and therefore its capacity (left null, the writer picks the smallest that fits), and `CharacterEncoding` names the text encoding, such as UTF-8, for non-ASCII payloads. The two constructors let a developer pass the error-correction level alone or the full set. The character encoding matters for payloads outside ASCII, such as accented text or non-Latin scripts, where UTF-8 keeps the decoded value intact. Matching the write options when reading a code is not required, since detection is format-driven rather than configured.

```csharp
var options = new QrOptions(QrEncoding.QRCode, QrErrorCorrectionLevel.High);
QrCode qr = QrWriter.Write("https://ironsoftware.com", options);
```

The [generate QR code example](https://ironsoftware.com/csharp/qr/examples/generate-qr-code/) writes with options, and the [error correction how-to](https://ironsoftware.com/csharp/qr/how-to/error-correction-qr-code/) covers the recovery setting.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `QrOptions Struct - IronQR C# API Reference`
- v2 (human): `QrOptions: Configure QR Generation in C#`
- v3 (balanced): `QrOptions | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure QR generation in C# with the IronQR QrOptions: set Encoding, ErrorCorrectionLevel, Version, and CharacterEncoding, passed to QrWriter.`
- v2 (human): `Control how a QR code is encoded in C# with the IronQR QrOptions: symbol type, error correction, version, and character set, with code examples.`
- v3 (balanced): `Reference for the IronQR QrOptions value in C#: set Encoding, ErrorCorrectionLevel, Version, and CharacterEncoding for QrWriter.Write.`

---

## Structured data

**TechArticle abstract**

> QrOptions carries the encoding settings for a generated QR code in C#, passed to a QrWriter.Write overload. Encoding selects the QrEncoding family, ErrorCorrectionLevel sets recovery, Version (a Nullable<int>) fixes the symbol size and capacity, and CharacterEncoding names the text encoding for non-ASCII payloads.

**FAQPage entries**

```json
[
  {
    "question": "Where does QrOptions live in the IronQR API?",
    "answer": "QrOptions is a value type in the IronQr namespace, shipped in IronQr.dll. Build one and pass it to a QrWriter.Write overload to control how the code is encoded."
  },
  {
    "question": "How do you set the error correction or encoding when generating a QR code in C#?",
    "answer": "Construct a QrOptions with the QrErrorCorrectionLevel and QrEncoding you want, optionally a Version and CharacterEncoding, then pass it to QrWriter.Write. Leaving Version null lets the writer choose the smallest symbol that fits."
  }
]
```
