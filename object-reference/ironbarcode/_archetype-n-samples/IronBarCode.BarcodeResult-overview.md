<!--
N-Full (result class). Frame B. IronBarCode. Members verified 2026-06-23:
Value(string), Text(string), Url(Uri), BinaryValue(byte[]), BarcodeType(BarcodeEncoding),
Points(PointF[]), PageNumber(int), PageOrientation(PageOrientation), Rotation(Nullable<int>),
Width/Height(Nullable<int>), BarcodeImage. Returned inside BarcodeResults from BarcodeReader.Read.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeResult.html
-->

## Injected overview (Markdown)

`BarcodeResult` is the record a developer reads after a scan succeeds: one decoded barcode, with its text, its symbology, and where it sat in the source. A `BarcodeReader.Read` call returns a `BarcodeResults` collection of these, one per code found, so this is the type whose properties a developer actually consumes once the read is done. It answers "how do I get the value of a scanned barcode in C#" and the follow-ups about type and position.

A developer does not construct `BarcodeResult` for a normal read; the reader produces it. After calling `Read` or `ReadAsync`, iterate the returned `BarcodeResults` and inspect each `BarcodeResult` in turn. Because one image or PDF page can hold several codes, treat the result as one entry among possibly many rather than assuming a single hit.

The decoded payload is the first thing to read. `Value` and `Text` give the decoded string, `BinaryValue` exposes the raw bytes for non-text payloads, and `Url` parses the value as a `Uri` when the code holds a link. The symbology is `BarcodeType`, a `BarcodeEncoding` that names the format detected, such as QR, Code 128, or Code 39. The location and geometry are `Points`, the corner coordinates as a `PointF` array, plus `Rotation`, `Width`, and `Height`, which describe how the symbol was oriented and sized in the image. For multi-page sources, `PageNumber` and `PageOrientation` report which page the code came from and how that page was turned. `BarcodeImage` exposes the cropped image of the detected code itself. Read `Value` for the common case, and reach for the geometry and page properties when a job needs to locate or annotate the code.

```csharp
using IronBarCode;

foreach (BarcodeResult result in BarcodeReader.Read("barcode.png"))
    Console.WriteLine($"{result.BarcodeType}: {result.Value}");
```

The [read barcodes from images how-to](https://ironsoftware.com/csharp/barcode/how-to/read-barcodes-from-images/) reads codes and consumes the results, the [read multiple barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/read-multiple-barcodes/) iterates several results, and the [reading barcodes tutorial](https://ironsoftware.com/csharp/barcode/tutorials/reading-barcodes/) covers the end-to-end read.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeResult Class - IronBarcode C# API`
- v2 (human): `BarcodeResult: Read Scan Output in C#`
- v3 (balanced): `BarcodeResult Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read a decoded barcode in C# with the IronBarcode BarcodeResult class: Value, Text, BarcodeType, Url, Points, and per-page properties.`
- v2 (human): `Consume scan output in C# with the IronBarcode BarcodeResult class: the decoded value, the barcode type, and the position of each code found.`
- v3 (balanced): `Reference for the IronBarcode BarcodeResult class in C#: the decoded Value, BarcodeType, Url, and Points of a scanned barcode.`

---

## Structured data

**TechArticle abstract**

> BarcodeResult is the decoded record IronBarcode returns for one scanned barcode in C#. A BarcodeReader.Read call returns a BarcodeResults collection of them. Read Value or Text for the decoded string, BinaryValue for raw bytes, Url for a parsed link, and BarcodeType for the symbology. Points, Rotation, Width, Height, PageNumber, and PageOrientation describe where and how the code appeared.

**FAQPage entries**

```json
[
  {
    "question": "Where does BarcodeResult live in the IronBarcode API?",
    "answer": "BarcodeResult is a class in the IronBarCode namespace, shipped in IronBarCode.dll, deriving from Object. BarcodeReader.Read returns a BarcodeResults collection of BarcodeResult entries, one per code found."
  },
  {
    "question": "How do you get the value of a scanned barcode in C#?",
    "answer": "Read the Value property of the BarcodeResult, which holds the decoded string; Text returns the same content. Use BinaryValue for raw bytes and Url to read the value as a parsed link."
  },
  {
    "question": "How do I find the position of a barcode in an image with IronBarcode?",
    "answer": "Read the Points property of the BarcodeResult, a PointF array of the symbol's corner coordinates. Rotation, Width, and Height describe its orientation and size, and PageNumber reports the page for multi-page sources."
  }
]
```
