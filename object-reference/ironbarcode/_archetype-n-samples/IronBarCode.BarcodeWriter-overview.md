<!--
N-Full (4 members: 3 fields + static CreateBarcode overloads). Frame A. IronBarcode.
Members verified 2026-06-23. CreateBarcode + GeneratedBarcode + BarcodeEncoding cross-refs verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeWriter.html
-->

## Injected overview (Markdown)

`BarcodeWriter` generates a barcode of almost any symbology from a string, a `byte[]`, or a `Stream` in C#. Every member is static, so there is nothing to construct: call `BarcodeWriter.CreateBarcode(...)` with a value and a `BarcodeEncoding`, and a `GeneratedBarcode` comes back ready to save, resize, recolor, annotate, or stamp onto a PDF. The encoding argument is what separates a Code 128 label from a QR code, a Data Matrix, an EAN, or a UPC, so the same call shape produces every format the library supports.

`CreateBarcode` is the single entry method, overloaded across the three input kinds. The `string` form covers the common text and URL cases, while the `byte[]` and `Stream` forms encode a binary payload such as a serialized token. Each overload accepts a `BarcodeEncoding` and an optional `maxWidth` and `maxHeight` pair that bounds the rendered image. Note the second enum parameter type: most overloads take `BarcodeEncoding`, and a parallel set takes the older `BarcodeWriterEncoding`, so pick the current `BarcodeEncoding` for new code.

Three static fields hold the defaults the writer falls back on. `DefaultWidth` and `DefaultHeight` set the rendered size when no bounds are passed, and `DefaultCharacterEncoding` controls how text is interpreted, which matters when encoding Unicode or non-Latin content. Adjust these once and every subsequent `CreateBarcode` call inherits the new defaults. For QR-specific styling, error correction, or an embedded logo, reach for `QRCodeWriter` instead, which exposes those options directly. Because the call always returns a `GeneratedBarcode`, the choice of output format is made afterward and is independent of how the value was encoded.

```csharp
using IronBarCode;

GeneratedBarcode barcode = BarcodeWriter.CreateBarcode("12345678", BarcodeEncoding.Code128);
barcode.SaveAsImage("barcode.png");
```

The [create 1D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-1d-barcodes/) walks through linear symbologies, the [create 2D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-2d-barcodes/) covers QR and Data Matrix, and the [barcode image generator tutorial](https://ironsoftware.com/csharp/barcode/tutorials/csharp-barcode-image-generator/) builds a complete generator.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeWriter Class - IronBarcode C# API`
- v2 (human): `BarcodeWriter: Generate Barcodes in C#`
- v3 (balanced): `BarcodeWriter Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Generate barcodes in C# with the IronBarcode BarcodeWriter class. Call static CreateBarcode with a value and BarcodeEncoding to get a GeneratedBarcode.`
- v2 (human): `Create barcodes in C# with the IronBarcode BarcodeWriter class: encode text, bytes, or a stream with a BarcodeEncoding to get a GeneratedBarcode.`
- v3 (balanced): `Reference for the IronBarcode BarcodeWriter class in C#: static CreateBarcode overloads that encode any symbology into a GeneratedBarcode.`

---

## Structured data

**TechArticle abstract**

> Generating barcodes in C# runs through the IronBarcode BarcodeWriter class. Its static CreateBarcode overloads encode a string, byte array, or stream with a BarcodeEncoding such as Code128, QRCode, or DataMatrix, with an optional maxWidth and maxHeight, and return a GeneratedBarcode. The DefaultWidth, DefaultHeight, and DefaultCharacterEncoding fields set the fallback size and text handling for every call.

**FAQPage entries**

```json
[
  {
    "question": "Where does BarcodeWriter live in the IronBarcode API?",
    "answer": "BarcodeWriter is a static class in the IronBarCode namespace, shipped in IronBarCode.dll. Its members are static, so call BarcodeWriter.CreateBarcode directly without constructing an instance."
  },
  {
    "question": "How do you generate a barcode in C#?",
    "answer": "Call the static BarcodeWriter.CreateBarcode with a value and a BarcodeEncoding to get a GeneratedBarcode, then call SaveAsImage or SaveAsPng on it to write the image. Optional maxWidth and maxHeight bound the rendered size."
  },
  {
    "question": "What is the difference between BarcodeWriter and QRCodeWriter in IronBarcode?",
    "answer": "BarcodeWriter.CreateBarcode generates any symbology when passed BarcodeEncoding.QRCode, while QRCodeWriter adds QR-specific options like error correction and an embedded logo through CreateQrCode and CreateQrCodeWithLogo."
  }
]
```
