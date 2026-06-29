<!--
N-Mid. Frame C. IronOCR. Verified 2026-06-23: BarcodeNumber, Format (OcrResult.BarcodeEncoding), Text, Value, ToString(); base OcrResult.OcrResultElement. Cross-ref IronTesseract.Configuration.ReadBarCodes noted (must be true).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Barcode.html
-->

## Injected overview (Markdown)

When OCR is also asked to pick up barcodes, each one it finds is reported as an `OcrResult.Barcode`. It is the item you read to get a barcode's decoded value and its type alongside the recognized text on the same page, so a document scan can yield both its words and its codes in one pass.

Barcode reading is off by default. Set `ReadBarCodes` to `true` on the engine configuration before reading, then enumerate the `Barcodes` on the returned `OcrResult` to get these items. Each barcode reports `Value` for the decoded content and `Text`, a synonym of `Value`; `ToString` returns the same text. `Format` returns an `OcrResult.BarcodeEncoding` identifying the symbology, such as `QRCode` or `Code128`, and `BarcodeNumber` gives the one-based index within the document.

Because the type derives from `OcrResult.OcrResultElement`, every barcode also carries the inherited geometry, `X`, `Y`, `Width`, `Height`, and `Location`, so you can place the code on the page or crop it. Read `Value` for the payload and `Format` to branch on the barcode kind.

The [OCR barcodes how-to](https://ironsoftware.com/csharp/ocr/how-to/barcodes/) covers enabling and reading codes, and the [OCR barcodes example](https://ironsoftware.com/csharp/ocr/examples/csharp-ocr-barcodes/) shows reading a barcode value from a scan.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Barcode Class - IronOCR C# API`
- v2 (human): `Barcode: Read Barcodes During OCR in C#`
- v3 (balanced): `OcrResult.Barcode | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read a barcode found during OCR in C# with the IronOCR Barcode class: Value, Text, Format (BarcodeEncoding), BarcodeNumber, and inherited geometry.`
- v2 (human): `Get a barcode's value and type alongside OCR text in C# with the IronOCR Barcode class: decoded Value, Format, and on-page position.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Barcode class in C#: Value, Format, and BarcodeNumber once ReadBarCodes is enabled on a read.`

---

## Structured data

**TechArticle abstract**

> Reading a barcode discovered during OCR in C# uses the IronOCR OcrResult.Barcode element. Enable ReadBarCodes on the configuration, then enumerate an OcrResult's Barcodes. Each exposes Value and its synonym Text for the decoded content, Format as a BarcodeEncoding for the symbology, BarcodeNumber for the one-based index, and inherited geometry from OcrResult.OcrResultElement.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Barcode live in the IronOCR API?",
    "answer": "OcrResult.Barcode is a class in the IronOcr namespace, shipped in IronOcr.dll, deriving from OcrResult.OcrResultElement. You receive instances from the Barcodes on an OcrResult once barcode reading is enabled."
  },
  {
    "question": "How do you read barcodes during OCR in C#?",
    "answer": "Set ReadBarCodes to true on the engine configuration, run the read, then enumerate the OcrResult's Barcodes. Read each barcode's Value for the decoded content and Format for the symbology such as QRCode or Code128."
  }
]
```
