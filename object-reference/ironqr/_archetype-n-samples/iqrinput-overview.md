<!--
N-Mid / interface (1 member). Frame B. Named implementor: QrImageInput. IronQr. Verified 2026-06-22.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.IQrInput.html
-->

## Injected overview (Markdown)

`IQrInput` is the input contract a `QrReader` reads from. `QrReader.Read` and `ReadAsync` accept any `IQrInput`, so the reader is decoupled from where the image actually comes from. The contract carries a `QrScanMode` property, the detection strategy applied to that input, and extends `IDisposable` so an implementation can release the image it holds.

The concrete implementor in IronQR is `QrImageInput`, which wraps an `AnyBitmap` loaded from a file, stream, or bytes. Most code uses `QrImageInput` directly and never names the interface, but a project with an unusual source (a custom frame grabber or a pooled buffer) can implement `IQrInput` to feed the reader without first materializing a standard bitmap. Either way, dispose the input after the read. Coding against the interface rather than the concrete type also keeps a reader easy to test, since a unit test can supply a stub `IQrInput` instead of a real image.

```csharp
using IQrInput input = new QrImageInput(AnyBitmap.FromFile("qr.png"), QrScanMode.Auto);
```

The [read QR code example](https://ironsoftware.com/csharp/qr/examples/read-qr-code/) reads through an input, and the [scan modes how-to](https://ironsoftware.com/csharp/qr/how-to/read-qr-codes-with-scan-modes/) sets the strategy.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IQrInput Interface - IronQR C# API`
- v2 (human): `IQrInput: The QR Reader Input Contract in C#`
- v3 (balanced): `IQrInput Interface | IronQR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IQrInput is the input contract for IronQR's QrReader in C#: it carries a QrScanMode and is implemented by QrImageInput for image sources.`
- v2 (human): `Feed an IronQR reader in C# through the IQrInput contract: use the built-in QrImageInput, or implement it for a custom QR image source.`
- v3 (balanced): `Reference for the IronQR IQrInput interface in C#: the disposable input contract QrReader.Read accepts, implemented by QrImageInput.`

---

## Structured data

**TechArticle abstract**

> IQrInput is the input contract IronQR's QrReader reads from in C#. It carries a QrScanMode and extends IDisposable. The concrete implementor is QrImageInput, which wraps an AnyBitmap; most code uses it directly, but a custom image source can implement IQrInput to feed QrReader.Read without a standard bitmap.

**FAQPage entries**

```json
[
  {
    "question": "Where does IQrInput live in the IronQR API?",
    "answer": "IQrInput is an interface in the IronQr namespace, shipped in IronQr.dll. It extends IDisposable and is the input type accepted by QrReader.Read and ReadAsync."
  },
  {
    "question": "What implements IQrInput in IronQR?",
    "answer": "QrImageInput implements IQrInput, wrapping an AnyBitmap for reading. Implement IQrInput yourself only for an unusual image source; for files, streams, and bitmaps, use QrImageInput."
  }
]
```
