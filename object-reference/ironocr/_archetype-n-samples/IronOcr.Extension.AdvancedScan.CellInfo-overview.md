<!--
N-Mid (struct, value-type). Declared: public sealed class CellInfo : ValueType, IEquatable<CellInfo>.
Ctor CellInfo(Rectangle CellRect, string CellText). Properties: CellRect, CellText. Methods: Deconstruct, Equals.
Frame D (task-gerund). IronOcr.Extension.AdvancedScan.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Extension.AdvancedScan.CellInfo.html
-->

## Injected overview (Markdown)

Reading a single cell of a scanned table runs through `CellInfo`, the record IronOCR produces for each cell it recognizes. You collect these from the `CellInfos` list on a `TableInfo`, one per cell, after an advanced table scan.

`CellRect` holds the cell's border rectangle on the page, and `CellText` holds the text recognized inside it, which together let you rebuild rows and columns from cell positions. Because `CellInfo` is a value type with a `Deconstruct` method, you can pull both fields out in one line, `var (rect, text) = cell;`, and compare cells with `Equals`. Use it when table layout matters and a flat string of recognized text is not enough; the rectangles tell you where each value sits relative to the others.

The [read table in a document how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) demonstrates working with these cells, and the [read table example](https://ironsoftware.com/csharp/ocr/examples/read-table-in-document/) puts the rectangles and text together.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CellInfo Class - IronOCR C# API Reference`
- v2 (human): `CellInfo: Scanned Table Cell in C#`
- v3 (balanced): `CellInfo Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `CellInfo holds one scanned table cell in C# from IronOCR: CellRect for the cell rectangle and CellText for the recognized text, with Deconstruct.`
- v2 (human): `Read a single table cell in C# with the IronOCR CellInfo value type: its CellRect rectangle and CellText, deconstructable in one line.`
- v3 (balanced): `Reference for the IronOCR CellInfo class in C#: one recognized table cell with a CellRect rectangle and CellText, collected from a TableInfo.`

---

## Structured data

**TechArticle abstract**

> Reading a single cell of a scanned table runs through CellInfo in C#, the record IronOCR produces for each recognized cell. CellRect holds the cell's border rectangle and CellText holds the text inside it, so cell positions can rebuild rows and columns. CellInfo is a value type with a Deconstruct method, and instances are collected from a TableInfo's CellInfos list.

**FAQPage entries**

```json
[
  {
    "question": "Where does CellInfo live in the IronOCR API?",
    "answer": "CellInfo is a struct in the IronOcr.Extension.AdvancedScan namespace, shipped in IronOcr.dll. docfx renders it as a sealed class deriving from ValueType, and it implements IEquatable<CellInfo>. Instances come from the CellInfos list on a TableInfo."
  },
  {
    "question": "How do you read a scanned table cell's text and position in C#?",
    "answer": "Read CellText for the recognized text and CellRect for the cell's bounding rectangle. Because CellInfo is a value type with a Deconstruct method, you can also write var (rect, text) = cell; to get both at once."
  }
]
```
