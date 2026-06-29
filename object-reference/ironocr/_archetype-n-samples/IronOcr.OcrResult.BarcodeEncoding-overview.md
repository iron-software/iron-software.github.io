<!--
N-Lite/enum (enum-pattern: sealed class : Enum). IronOCR. Members verified 2026-06-23: Code128, Code39, QRCode, DataMatrix, EAN13, UPCA, Aztec, PDF417, ITF, MaxiCode, Codabar, Code93, Databar, EAN8, UPCE, MSI, Plessey, PharmaCode, IntelligentMail, Rss14, Other. Cross-ref OcrResult.Barcode.Format.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.BarcodeEncoding.html
-->

## Injected overview (Markdown)

`OcrResult.BarcodeEncoding` names the barcode symbology IronOCR detected, reported by the `Format` property of an `OcrResult.Barcode` so you can branch on the kind of code found. Common 1D formats include `Code128`, `Code39`, `Code93`, `Codabar`, `EAN13`, `EAN8`, `UPCA`, and `UPCE`; the 2D formats include `QRCode`, `DataMatrix`, `Aztec`, `PDF417`, and `MaxiCode`. Further values cover postal and retail symbologies such as `ITF`, `IntelligentMail`, `MSI`, `Plessey`, `PharmaCode`, `Databar`, and `Rss14`, with `Other` for anything unmatched. Read `Format` after enabling barcode reading; the [OCR barcodes how-to](https://ironsoftware.com/csharp/ocr/how-to/barcodes/) covers detection.

```csharp
if (barcode.Format == OcrResult.BarcodeEncoding.QRCode) { /* ... */ }
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeEncoding Enum - IronOCR C# API`
- v2 (human): `BarcodeEncoding: OCR Barcode Types in C#`
- v3 (balanced): `BarcodeEncoding | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Identify a barcode symbology in C# with the IronOCR BarcodeEncoding enum: Code128, Code39, QRCode, DataMatrix, EAN13, UPCA, PDF417, and more.`
- v2 (human): `Tell which barcode type IronOCR found in C# with the BarcodeEncoding enum: QR, DataMatrix, Code128, EAN, UPC, PDF417, and other formats.`
- v3 (balanced): `Reference for the IronOCR BarcodeEncoding enum in C#: the barcode formats reported by a Barcode's Format, from Code128 to QRCode.`

---

## Structured data

**TechArticle abstract**

> Identifying which barcode symbology IronOCR detected in C# uses the BarcodeEncoding enumeration, read from a Barcode's Format. It covers common 1D formats such as Code128, Code39, EAN13, and UPCA, 2D formats such as QRCode, DataMatrix, Aztec, and PDF417, and postal and retail symbologies including ITF, IntelligentMail, and Databar, with Other for unmatched codes.
