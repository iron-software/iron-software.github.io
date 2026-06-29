<!--
N-Full (rich page model, bucketed). Frame E. IronOcr.
Members verified 2026-06-23: Words, Lines, Paragraphs, Blocks, Characters, Tables, Barcodes, WordCount, PageNumber, Rotation, ContentArea, ObjectModel, Height, Width, ContentAreaToBitmap(OcrInput).
Obtained via OcrResult.Pages (returns OcrResultPagesCollection). Namespace IronOcr.OcrResult.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Page.html
-->

## Injected overview (Markdown)

Everything OCR recognized on a single scanned or rendered page, structured for reading, lives on `OcrResult.Page`. One page object groups its text into words, lines, paragraphs, and blocks, surfaces any tables and barcodes found, and reports the page geometry, so you can extract plain text or navigate the layout from one place.

You get pages from a finished read: `OcrResult.Pages` returns an `OcrResultPagesCollection`, and each entry is a `Page`. A multi-page TIFF or PDF produces one `Page` per source page, ordered by `PageNumber` (1 based), which is why iterating `result.Pages` is the normal way to process a document. Each page derives from `OcrResult.OcrResultTextElement`, so it also carries the shared text, confidence, and bounding members.

The members fall into clear groups. The text-hierarchy properties are `Words`, `Lines`, `Paragraphs`, `Blocks`, and `Characters`, each an array in reading order from coarse to fine; `WordCount` gives a quick total. The structured-content properties are `Tables`, an array of `OcrResult.Table` detected on the page, and `Barcodes`, populated only when barcode reading is enabled on the input. The geometry properties are `Width`, `Height`, `Rotation` (degrees the original was turned to produce this result), and `ContentArea`, the `Rectangle` region OCR was applied to. `ObjectModel` exposes the page as an `IOcrPageObjectModel`, and `ContentAreaToBitmap` returns an `AnyBitmap` crop of the content area for a given `OcrInput`. Pick the level you need rather than reading every array.

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput();
input.LoadPdf("invoice.pdf");
OcrResult result = ocr.Read(input);

foreach (OcrResult.Page page in result.Pages)
    Console.WriteLine($"Page {page.PageNumber}: {page.WordCount} words, {page.Tables.Length} tables");
```

The [OCR results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) walks the page tree, the [read PDFs how-to](https://ironsoftware.com/csharp/ocr/how-to/input-pdfs/) produces a page per PDF page, and the [read tables how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) works through the `Tables` array.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Page Class - IronOCR C# API`
- v2 (human): `OcrResult.Page: Read an OCR Page in C#`
- v3 (balanced): `OcrResult.Page Class | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR OcrResult.Page class in C# groups a page's Words, Lines, Paragraphs, Blocks, Tables, and Barcodes with page geometry and rotation.`
- v2 (human): `Navigate one OCR page in C# with the IronOCR OcrResult.Page class: read its words, lines, paragraphs, tables, barcodes, size, and rotation.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Page class in C#: text hierarchy, detected tables and barcodes, and page geometry from a finished read.`

---

## Structured data

**TechArticle abstract**

> Each page of an IronOCR read in C# is an OcrResult.Page, obtained from the OcrResult.Pages collection. Text-hierarchy properties Words, Lines, Paragraphs, Blocks, and Characters return reading-order arrays, with WordCount as a total. Tables and Barcodes hold structured content, while Width, Height, Rotation, and ContentArea report geometry. The page derives from OcrResultTextElement, so the shared text and confidence members apply too.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Page live in the IronOCR API?",
    "answer": "OcrResult.Page is a class in the IronOcr.OcrResult namespace, shipped in IronOcr.dll. It derives from OcrResult.OcrResultTextElement, and you obtain pages from the OcrResult.Pages collection (an OcrResultPagesCollection)."
  },
  {
    "question": "How do you read text from each page of a document in C#?",
    "answer": "Iterate OcrResult.Pages and, on each Page, read Words, Lines, or Paragraphs depending on the level you need. PageNumber is a 1 based identifier, so a multi-page PDF or TIFF gives one Page per source page in order."
  },
  {
    "question": "How do you get the tables detected on an OCR page?",
    "answer": "Read the Tables property, an array of OcrResult.Table found on that page, each exposing DataTable, location, and size. Barcodes are reported through the Barcodes property only when barcode reading is enabled on the OcrInput."
  }
]
```
