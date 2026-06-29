<!--
N-Mid (6 members). Frame C. IronOcr.
Members verified 2026-06-23: DataTable, GetLocation, Width, Height, X, Y. Obtained via OcrResult.Page.Tables.
Base OcrResult.OcrResultTextElement. Namespace IronOcr.OcrResult.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Table.html
-->

## Injected overview (Markdown)

When OCR detects a grid of cells on a page, `OcrResult.Table` is how you read it back as structured data rather than loose text. Each table is a grouping of lines the engine recognized as tabular, exposed in a form you can load straight into a `System.Data.DataTable`.

Tables come from a page: `OcrResult.Page.Tables` returns an array of `Table`, one per detected grid. Each table derives from `OcrResult.OcrResultTextElement`, so the shared `Text`, `Confidence`, and `BoundingBox` members describe the table region as a whole, while the table-specific members give you the cell contents and geometry.

The headline member is `DataTable`, the recognized contents as a `System.Data.DataTable` ready to bind, export, or query. For placement, `GetLocation` returns the bounding `Rectangle` on the page, and `X`, `Y`, `Width`, and `Height` give the same box as individual pixel values for the top-left corner and size. Read `DataTable` when you want the data and the location members when you need to crop, highlight, or position the table on the original image.

The [read tables in a document how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) works a detected table into a `DataTable`, and the [read table example](https://ironsoftware.com/csharp/ocr/examples/read-table-in-document/) shows the full read.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Table Class - IronOCR C# API`
- v2 (human): `OcrResult.Table: Read OCR Tables in C#`
- v3 (balanced): `OcrResult.Table Class | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR OcrResult.Table class in C# exposes a detected table as a DataTable, with GetLocation, X, Y, Width, and Height for its position.`
- v2 (human): `Read a detected table as structured data in C# with the IronOCR OcrResult.Table class: get a DataTable plus the table's location and size.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Table class in C#: the DataTable of a recognized grid and its bounding box on the OCR page.`

---

## Structured data

**TechArticle abstract**

> An IronOCR OcrResult.Table in C# is a recognized grid of cells, obtained from OcrResult.Page.Tables. DataTable returns the contents as a System.Data.DataTable, GetLocation gives the bounding Rectangle, and X, Y, Width, and Height give the same box as pixel values. It derives from OcrResultTextElement, so Text and Confidence describe the table region.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Table live in the IronOCR API?",
    "answer": "OcrResult.Table is a class in the IronOcr.OcrResult namespace, shipped in IronOcr.dll. It derives from OcrResult.OcrResultTextElement, and you obtain tables from the OcrResult.Page.Tables array."
  },
  {
    "question": "How do you read a detected table as a DataTable in C#?",
    "answer": "Iterate OcrResult.Page.Tables and read each table's DataTable property, a System.Data.DataTable you can bind or export. Use GetLocation, or X, Y, Width, and Height, when you need the table's position on the page."
  }
]
```
