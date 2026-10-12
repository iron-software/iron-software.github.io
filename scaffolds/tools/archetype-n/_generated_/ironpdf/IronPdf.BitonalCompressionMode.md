<!--
N-Lite/enum. Members verified: Force, Off, value__.
Target: IronPdf.BitonalCompressionMode
-->

## Injected overview (Markdown)

`BitonalCompressionMode` controls how IronPDF's advanced compression pipeline encodes 1-bit black-and-white images in scanned PDF documents. `Force` applies bitonal compression to every eligible image, producing the smallest possible file size for scanned content. `Off` disables bitonal encoding entirely, preserving the original image data without recompression. See [PDF compression options](https://ironpdf.com/how-to/pdf-compression/) for practical guidance.

```csharp
compressOptions.BitonalCompression = BitonalCompressionMode.Force;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BitonalCompressionMode Enum - IronPDF C# API`
- v2 (human): `BitonalCompressionMode: Control Bitonal PDF Compression`
- v3 (balanced): `BitonalCompressionMode Enum | IronPDF C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure 1-bit image encoding in C# with the IronPDF BitonalCompressionMode enum: Force bitonal compression or turn it Off for scanned PDFs.`
- v2 (human): `Use BitonalCompressionMode in IronPDF to force or disable bitonal compression for black-and-white scanned images in C# PDF workflows.`
- v3 (balanced): `Reference for IronPDF's BitonalCompressionMode enum in C#: Force or Off to control bitonal image encoding in compressed PDF documents.`

---

## Structured data

**TechArticle abstract**

> Use BitonalCompressionMode in IronPDF to control how the compression pipeline handles 1-bit black-and-white image encoding for scanned PDF documents. Force applies bitonal compression to every eligible image for maximum size reduction, while Off disables the encoding entirely to preserve original image data.