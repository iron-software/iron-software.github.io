<!--
N-Mid (1 static method, overloaded). Frame D. IronBarcode. Members verified 2026-06-23.
GeneratedBarcode + DataMatrixShape cross-refs verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.DataMatrixWriter.html
-->

## Injected overview (Markdown)

Generating a Data Matrix code in C# runs through `DataMatrixWriter`, the dedicated writer for that 2D symbology. Its one static method returns a `GeneratedBarcode`, so there is nothing to construct: call `DataMatrixWriter.CreateDataMatrix(...)` and save, stamp, or export the result.

`CreateDataMatrix` is overloaded across input and shape. It encodes a `string`, `byte[]`, or `Stream`, and each input has two forms. The simpler form takes a single `size` for a square code, while the second takes a `DataMatrixWriter.DataMatrixShape` along with an explicit `width` and `height`, which lets a developer request a rectangular Data Matrix where a layout calls for one. Data Matrix packs data densely into a small footprint, which suits marking small parts and components where a QR code would be too large. For QR codes or linear symbologies instead, use `QRCodeWriter` or `BarcodeWriter`. Because the call returns a `GeneratedBarcode`, the output format is chosen afterward, independent of how the value was encoded.

```csharp
using IronBarCode;

DataMatrixWriter.CreateDataMatrix("SN-48291", 200).SaveAsPng("datamatrix.png");
```

The [create 2D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-2d-barcodes/) generates a Data Matrix, and the [create barcode images how-to](https://ironsoftware.com/csharp/barcode/how-to/create-barcode-images/) covers the save formats.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DataMatrixWriter Class - IronBarcode C# API`
- v2 (human): `DataMatrixWriter: Data Matrix Codes in C#`
- v3 (balanced): `DataMatrixWriter | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Generate Data Matrix codes in C# with the IronBarcode DataMatrixWriter class. Call static CreateDataMatrix with a value and size to get a GeneratedBarcode.`
- v2 (human): `Create Data Matrix codes in C# with the IronBarcode DataMatrixWriter class: encode text, bytes, or a stream as a square or rectangular code.`
- v3 (balanced): `Reference for the IronBarcode DataMatrixWriter class in C#: static CreateDataMatrix overloads for square or rectangular Data Matrix codes.`

---

## Structured data

**TechArticle abstract**

> Generating a Data Matrix code in C# runs through the IronBarcode DataMatrixWriter class. Its static CreateDataMatrix overloads encode a string, byte array, or stream, taking either a single size for a square code or a DataMatrixShape with an explicit width and height for a rectangular one, and return a GeneratedBarcode to save, stamp, or export.

**FAQPage entries**

```json
[
  {
    "question": "Where does DataMatrixWriter live in the IronBarcode API?",
    "answer": "DataMatrixWriter is a static class in the IronBarCode namespace, shipped in IronBarCode.dll. Call DataMatrixWriter.CreateDataMatrix directly to get a GeneratedBarcode, with no instance to construct."
  },
  {
    "question": "How do you make a rectangular Data Matrix code in C#?",
    "answer": "Call CreateDataMatrix with a DataMatrixWriter.DataMatrixShape and an explicit width and height. The simpler overload takes a single size instead and produces a square code."
  }
]
```
