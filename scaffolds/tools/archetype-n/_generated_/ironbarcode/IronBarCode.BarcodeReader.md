<!--
N-Full (static class, primary read entry point). Frame A. IronBarCode.
Read/ReadAsync/ReadPdf/ReadPdfs/ReadPdfsAsync verified; returns BarcodeResults / Task<BarcodeResults>.
BarcodeResult.Value/Text/BarcodeType/Url verified 2026-06-23. Namespace IronBarCode (capital C).
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeReader.html
-->

## Injected overview (Markdown)

`BarcodeReader` decodes barcodes and QR codes from images, byte arrays, streams, and PDF files in C#. A single static call scans a supplied source, locates every symbol it can find, and hands back the decoded text, the symbology, and the position of each code. It is the entry point a developer reaches for behind a search like "C# barcode reader" or "read barcode from image C#", and it covers both one-dimensional barcodes and two-dimensional codes through the same surface.

Because `BarcodeReader` is a static class, there is no object to construct. Call `Read` with a file path, an `AnyBitmap`, a byte array, or a stream, and pass an optional `BarcodeReaderOptions` to tune detection. For PDF input, call `ReadPdf` (or `ReadPdfs` for several documents) with a `PdfBarcodeReaderOptions` that adds page selection, DPI, and a password. Each read returns a `BarcodeResults` collection, and `ReadAsync` and `ReadPdfsAsync` provide awaitable forms that keep the work off a UI or request thread. The collection overloads accept a sequence of sources so a batch of images or documents runs through one call.

The most-used members group by source. The image lane is `Read` and `ReadAsync`, taking a path, `AnyBitmap`, `byte[]`, or `Stream`. The PDF lane is `ReadPdf`, `ReadPdfs`, and `ReadPdfsAsync`, taking the same source shapes plus a `PdfBarcodeReaderOptions`. Detection itself is steered through `BarcodeReaderOptions`: set `ExpectBarcodeTypes` to limit the symbologies scanned, `ExpectMultipleBarcodes` to keep scanning after the first hit, `ScanMode` to pick a basic or machine-learning strategy, and `Speed` to trade thoroughness for throughput. `BarcodeReader` reads from photos, screenshots, and scanned documents, not only crisp generated images, which is why the machine-learning scan modes exist for difficult sources. Iterate the returned `BarcodeResults` rather than assuming a single code, since one image or PDF page can carry several.

```csharp
using IronBarCode;

BarcodeResults results = BarcodeReader.Read("barcode.png");
foreach (BarcodeResult result in results)
    Console.WriteLine(result.Value);
```

The [read barcodes from images how-to](https://ironsoftware.com/csharp/barcode/how-to/read-barcodes-from-images/) walks through image input, the [read barcodes from PDF how-to](https://ironsoftware.com/csharp/barcode/how-to/read-barcodes-from-pdf/) handles documents, and the [reading barcodes tutorial](https://ironsoftware.com/csharp/barcode/tutorials/reading-barcodes/) covers the full workflow.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeReader Class - IronBarcode C# API`
- v2 (human): `BarcodeReader: Read Barcodes in C#`
- v3 (balanced): `BarcodeReader Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read barcodes and QR codes in C# with the IronBarcode BarcodeReader class. Call Read or ReadPdf to get a BarcodeResults collection from any source.`
- v2 (human): `Decode barcodes in C# with the IronBarcode BarcodeReader class: read from images, streams, byte arrays, or PDFs, sync or async, with full results.`
- v3 (balanced): `Reference for the IronBarcode BarcodeReader class in C#: read barcodes from images and PDFs with Read, ReadPdf, and their async forms.`

---

## Structured data

**TechArticle abstract**

> Decoding barcodes and QR codes in C# runs through the IronBarcode BarcodeReader static class. Call Read with an image path, AnyBitmap, byte array, or stream, or ReadPdf and ReadPdfs for PDF files, and receive a BarcodeResults collection. ReadAsync and ReadPdfsAsync are the awaitable forms. Tune detection through BarcodeReaderOptions, and iterate the results because one source can hold several codes.

**FAQPage entries**

```json
[
  {
    "question": "Where does BarcodeReader live in the IronBarcode API?",
    "answer": "BarcodeReader is a static class in the IronBarCode namespace, shipped in IronBarCode.dll. Because it is static there is nothing to construct, so call Read, ReadAsync, ReadPdf, ReadPdfs, or ReadPdfsAsync directly."
  },
  {
    "question": "How do you read a barcode from an image in C#?",
    "answer": "Call BarcodeReader.Read with the image path, an AnyBitmap, a byte array, or a stream, and pass an optional BarcodeReaderOptions. Read returns a BarcodeResults collection; iterate it and read each result's Value for the decoded text."
  },
  {
    "question": "Can BarcodeReader read barcodes from a PDF in C#?",
    "answer": "Yes. Call ReadPdf for one document or ReadPdfs for several, passing a PdfBarcodeReaderOptions to set page numbers, DPI, and a password. Both return BarcodeResults, and ReadPdfsAsync is the awaitable form."
  },
  {
    "question": "Can IronBarcode read multiple barcodes from one image?",
    "answer": "Yes. BarcodeReader returns a BarcodeResults collection with one entry per detected code, so iterate the results. Set BarcodeReaderOptions.ExpectMultipleBarcodes to true to keep scanning after the first symbol is found."
  }
]
```
