<!--
N-Full (config class, derives from BarcodeReaderOptions; own members DPI, PageNumbers, Password, Scale).
Frame E. IronBarCode. Members verified 2026-06-23. Base BarcodeReaderOptions verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.PdfBarcodeReaderOptions.html
-->

## Injected overview (Markdown)

Page selection, rendering resolution, and password handling for reading barcodes out of a PDF live on `PdfBarcodeReaderOptions`. It is the argument a developer passes to `BarcodeReader.ReadPdf`, `ReadPdfs`, and `ReadPdfsAsync` to point the reader at the right pages of a document and to open a protected file. This is the type behind a search like "read barcode from PDF C#" or "scan barcode in PDF page", and it answers the questions a plain image read cannot.

`PdfBarcodeReaderOptions` derives from `BarcodeReaderOptions`, so it carries every base setting, the symbology, scan mode, speed, and image handling, and adds the PDF-only properties on top. A developer constructs one, sets the PDF-specific properties a job needs, and passes it to a `ReadPdf` overload that takes a path, byte array, or stream. Constructor overloads let a single page number or a sequence of page numbers be supplied up front.

The PDF-specific properties are few and purposeful. `PageNumbers` is an `IEnumerable<int>` that restricts the read to chosen pages instead of scanning the whole document, which matters for large files. `DPI` sets the resolution each page is rendered at before scanning, and `Scale` adjusts the rendered page size; raising either helps small or dense codes resolve at the cost of speed. `Password` opens an encrypted PDF so its pages can be rendered and read. Because the base properties still apply, a PDF read can also set `ExpectBarcodeTypes`, `Speed`, and the rest exactly as an image read would. Leave the PDF properties at their defaults to scan every page at the standard resolution.

```csharp
using IronBarCode;

var options = new PdfBarcodeReaderOptions
{
    PageNumbers = new[] { 1, 2 },
    DPI = 150,
    Password = "secret"
};
BarcodeResults results = BarcodeReader.ReadPdf("invoice.pdf", options);
```

The [read barcodes from PDF how-to](https://ironsoftware.com/csharp/barcode/how-to/read-barcodes-from-pdf/) walks through a document read, the [PDF barcode reader settings example](https://ironsoftware.com/csharp/barcode/examples/pdf-barcode-reader-settings-csharp/) shows the configured options, and the [reading barcodes tutorial](https://ironsoftware.com/csharp/barcode/tutorials/reading-barcodes/) covers the wider workflow.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfBarcodeReaderOptions - IronBarcode C# API`
- v2 (human): `PdfBarcodeReaderOptions: Read PDFs in C#`
- v3 (balanced): `PdfBarcodeReaderOptions | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read barcodes from PDFs in C# with the IronBarcode PdfBarcodeReaderOptions class: set PageNumbers, DPI, Scale, and Password for ReadPdf.`
- v2 (human): `Control PDF barcode reads in C# with IronBarcode PdfBarcodeReaderOptions: choose pages, set render DPI and scale, and open password-protected files.`
- v3 (balanced): `Reference for the IronBarcode PdfBarcodeReaderOptions class in C#: page selection, DPI, scale, and password settings for ReadPdf.`

---

## Structured data

**TechArticle abstract**

> Reading barcodes out of a PDF in C# is configured through the IronBarcode PdfBarcodeReaderOptions class, the argument BarcodeReader.ReadPdf and ReadPdfs accept. It derives from BarcodeReaderOptions and adds PDF-only properties: PageNumbers to restrict the read, DPI and Scale to control page rendering, and Password to open an encrypted file. The inherited symbology and speed settings still apply.

**FAQPage entries**

```json
[
  {
    "question": "Where does PdfBarcodeReaderOptions live in the IronBarcode API?",
    "answer": "PdfBarcodeReaderOptions is a class in the IronBarCode namespace, shipped in IronBarCode.dll, deriving from BarcodeReaderOptions. Construct one and pass it to BarcodeReader.ReadPdf, ReadPdfs, or ReadPdfsAsync."
  },
  {
    "question": "How do I read a barcode from specific PDF pages in C#?",
    "answer": "Set the PageNumbers property to an IEnumerable of the page numbers you want, then pass the PdfBarcodeReaderOptions to BarcodeReader.ReadPdf. The reader scans only those pages instead of the whole document."
  },
  {
    "question": "Can IronBarcode read a barcode from a password-protected PDF?",
    "answer": "Yes. Set the Password property on PdfBarcodeReaderOptions to the document password before calling ReadPdf. Raising DPI or Scale also helps small or dense codes resolve before scanning."
  }
]
```
