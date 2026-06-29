<!--
N-Mid. Declared: public class TableInfo : Object.
Properties: BoudingRect (sic - casing preserved), CellInfos (List<CellInfo>), Page.
Frame E (feature-fronted). IronOcr.Extension.AdvancedScan. Sibling of Tables (frame B) - differs.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Extension.AdvancedScan.TableInfo.html
-->

## Injected overview (Markdown)

One recognized table from an IronOCR advanced scan, with its position and contents, lives on `TableInfo`. You receive a `TableInfo` for each table the scan finds in an `OcrInput`, and it holds everything needed to reconstruct that table in your own model.

`BoudingRect` (the property name is spelled this way in the API) gives the table's bounding rectangle on the page, `Page` reports the page number it was found on, and `CellInfos` is a `List<CellInfo>` carrying each cell's border rectangle and text. To rebuild a table, read its cells from `CellInfos`, using each cell's rectangle to infer rows and columns. Use `TableInfo` when you need cell-level structure from a scanned document, not just the recognized text. Tables of these objects are returned through the `Tables` collection.

The [read table in a document how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) covers obtaining these results, and the [advanced reading how-to](https://ironsoftware.com/csharp/ocr/how-to/read-document-advanced/) shows the advanced scan in context.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TableInfo Class - IronOCR C# API Reference`
- v2 (human): `TableInfo: Scanned Table Cells in C#`
- v3 (balanced): `TableInfo Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `TableInfo holds one recognized table in C# from IronOCR: BoudingRect, Page, and CellInfos (a List<CellInfo>) with each cell's rectangle and text.`
- v2 (human): `Read a scanned table's cells in C# with the IronOCR TableInfo class: its CellInfos list, bounding rectangle, and page number per recognized table.`
- v3 (balanced): `Reference for the IronOCR TableInfo class in C#: one recognized table with BoudingRect, Page, and a CellInfos list of cell rectangles and text.`

---

## Structured data

**TechArticle abstract**

> One recognized table from an IronOCR advanced scan, with its position and contents, lives on TableInfo in C#. BoudingRect gives the table's bounding rectangle, Page reports the page number, and CellInfos is a List<CellInfo> carrying each cell's border rectangle and text. You receive a TableInfo for each table the scan finds in an OcrInput.

**FAQPage entries**

```json
[
  {
    "question": "Where does TableInfo live in the IronOCR API?",
    "answer": "TableInfo is a class in the IronOcr.Extension.AdvancedScan namespace, shipped in IronOcr.dll, and derives from System.Object. Its CellInfos property is a List<CellInfo>, and instances are returned through the Tables collection."
  },
  {
    "question": "How do you read the cells of a scanned table in C#?",
    "answer": "Read the CellInfos list on a TableInfo, where each CellInfo exposes a CellRect rectangle and the CellText inside it. BoudingRect gives the whole table's bounds and Page the page number."
  }
]
```
