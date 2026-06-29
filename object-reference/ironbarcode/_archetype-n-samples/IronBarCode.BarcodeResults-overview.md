<!--
N-Mid (collection class, 3 members; List<BarcodeResult>). Frame B. IronBarCode.
Members verified 2026-06-23: Values(string[]), FilterImages(AnyBitmap[]),
ExportFilterImagesToDisk(string). Returned by BarcodeReader.Read.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeResults.html
-->

## Injected overview (Markdown)

`BarcodeResults` is the collection a `BarcodeReader.Read` call hands back, holding every `BarcodeResult` found in a source. It is a `List<BarcodeResult>`, so a developer iterates it with `foreach` and uses the usual list members directly, while a few extra members make whole-batch work easier. This is what a developer receives from any read, whether the image held one code or several.

Because it derives from `List<BarcodeResult>`, the collection supports indexing, `Count`, and iteration out of the box, so reading each decoded `Value` is a plain loop. On top of that, `Values` returns a `string[]` of every decoded value in one step, handy when only the text is needed and the per-code geometry is not. `FilterImages` exposes the processed images IronBarcode worked from as an `AnyBitmap[]`, and `ExportFilterImagesToDisk` writes those images to a folder, which is useful for inspecting why a difficult scan did or did not detect a code. Iterate the collection for full per-code detail, or read `Values` when a flat list of decoded strings is all a job needs.

```csharp
BarcodeResults results = BarcodeReader.Read("page.png");
string[] values = results.Values;
```

The [read multiple barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/read-multiple-barcodes/) iterates a multi-code result, and the [read barcodes from images how-to](https://ironsoftware.com/csharp/barcode/how-to/read-barcodes-from-images/) consumes the collection from a single read.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeResults Class - IronBarcode C# API`
- v2 (human): `BarcodeResults: The Read Result Set in C#`
- v3 (balanced): `BarcodeResults Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Handle barcode read output in C# with the IronBarcode BarcodeResults class: a List of BarcodeResult with Values and FilterImages helpers.`
- v2 (human): `Work with every code found in a scan in C# using the IronBarcode BarcodeResults collection: iterate the results or read all Values at once.`
- v3 (balanced): `Reference for the IronBarcode BarcodeResults class in C#: the List of BarcodeResult a read returns, with Values and image helpers.`

---

## Structured data

**TechArticle abstract**

> BarcodeResults is the collection IronBarcode returns from a read in C#, a List of BarcodeResult holding every code found. Iterate it for per-code detail, or read the Values property for a string array of all decoded values. FilterImages exposes the processed images as an AnyBitmap array, and ExportFilterImagesToDisk writes them out for inspecting a difficult scan.

**FAQPage entries**

```json
[
  {
    "question": "Where does BarcodeResults live in the IronBarcode API?",
    "answer": "BarcodeResults is a class in the IronBarCode namespace, shipped in IronBarCode.dll, deriving from List of BarcodeResult. BarcodeReader.Read and ReadPdf return one, holding every detected code."
  },
  {
    "question": "How do I get all decoded values from a barcode read in C#?",
    "answer": "Read the Values property of the BarcodeResults, which returns a string array of every decoded value. To inspect each code's type and position instead, iterate the collection and read each BarcodeResult."
  }
]
```
