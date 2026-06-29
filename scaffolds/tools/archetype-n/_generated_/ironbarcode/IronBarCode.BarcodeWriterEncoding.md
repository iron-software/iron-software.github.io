<!--
N-Lite/enum. Members verified 2026-06-23 (salient subset named): QRCode, Code128, Code39, EAN13, DataMatrix, PDF417. Full set: Aztec, Codabar, Code93, DataBar, DataBarExpanded, EAN8, ITF, MaxiCode, MicroQRCode, MSI, Plessey, RMQRCode, UPCA, UPCE, Code128GS1, IntelligentMail.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeWriterEncoding.html
Consumer (write): BarcodeWriter.CreateBarcode(value, BarcodeWriterEncoding). Disambiguate from BarcodeEncoding (read-side, has All/None aggregates).
-->

## Injected overview (Markdown)

`BarcodeWriterEncoding` names the symbology IronBarcode generates when writing a barcode, passed to `BarcodeWriter.CreateBarcode`. Common choices include `QRCode`, `Code128`, `Code39`, `EAN13`, `DataMatrix`, and `PDF417`, with retail and postal formats such as `UPCA`, `EAN8`, and `IntelligentMail` also available. Unlike the read-side [BarcodeEncoding](https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeEncoding.html) enum, it has no `All` or `None` aggregates, since a generated code is one concrete type. The [create 2D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-2d-barcodes/) walks through writing.

```csharp
var barcode = BarcodeWriter.CreateBarcode("12345", BarcodeWriterEncoding.QRCode);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeWriterEncoding Enum - IronBarcode C#`
- v2 (human): `BarcodeWriterEncoding: Pick a Format to Write in C#`
- v3 (balanced): `BarcodeWriterEncoding | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the format IronBarcode writes in C# with the BarcodeWriterEncoding enum: QRCode, Code128, EAN13, DataMatrix, PDF417, and more, on CreateBarcode.`
- v2 (human): `Choose which barcode IronBarcode generates in C# with the BarcodeWriterEncoding enum, from QRCode and Code128 to EAN13 retail codes.`
- v3 (balanced): `Reference for the IronBarcode BarcodeWriterEncoding enum in C#: QRCode, Code128, DataMatrix, and PDF417 formats for writing barcodes.`

---

## Structured data

**TechArticle abstract**

> Use BarcodeWriterEncoding in IronBarcode to name the symbology generated when writing, passed to BarcodeWriter.CreateBarcode. Common choices include QRCode, Code128, Code39, EAN13, DataMatrix, and PDF417. It has no All or None aggregates, since each generated code is one concrete type; use BarcodeEncoding for reading.
