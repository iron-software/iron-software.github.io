<!--
N-Mid. Declared: public class Tables : Object, IEnumerable<TableInfo>, IEnumerable.
Member: GetEnumerator(). Frame B (identity-by-role). IronOcr.Extension.AdvancedScan.
Tables is the iterable result of advanced table scanning over OcrInput (verified summary).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Extension.AdvancedScan.Tables.html
-->

## Injected overview (Markdown)

`Tables` is the collection you iterate after IronOCR's advanced scan recognizes tables in an `OcrInput`. Each item it yields is a `TableInfo`, one recognized table with its bounding rectangle, page, and cells, so a single pass over the result gives you every table found across the document.

Because the class implements `IEnumerable<TableInfo>`, you work with it directly in a `foreach` loop or with LINQ, and `GetEnumerator` supplies the sequence behind both. There are no indexers or count properties to learn: enumerate it once, read each `TableInfo` as you go, and project or filter the cells you need. Reach for `Tables` when a scanned invoice, form, or report holds structured rows you want to pull out programmatically rather than as a flat block of text.

The [read table in a document how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) walks through producing this collection, and the [read table example](https://ironsoftware.com/csharp/ocr/examples/read-table-in-document/) shows iterating it end to end.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Tables Class - IronOCR C# API Reference`
- v2 (human): `Tables: Iterate Scanned Tables in C#`
- v3 (balanced): `Tables Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Iterate recognized tables in C# with the IronOCR Tables class: an IEnumerable<TableInfo> from advanced scanning, with GetEnumerator for foreach.`
- v2 (human): `Loop over tables found by IronOCR's advanced scan in C# using the Tables class, an enumerable sequence of TableInfo objects from an OcrInput.`
- v3 (balanced): `Reference for the IronOCR Tables class in C#: an enumerable collection of TableInfo from advanced table scanning over an OcrInput.`

---

## Structured data

**TechArticle abstract**

> Iterate recognized tables in C# with IronOCR's Tables class, the collection returned after advanced table scanning over an OcrInput. It implements IEnumerable<TableInfo>, so a foreach loop or LINQ reads each recognized table, and GetEnumerator supplies the sequence. Each item is a TableInfo carrying a bounding rectangle, page number, and cells.

**FAQPage entries**

```json
[
  {
    "question": "Where does Tables live in the IronOCR API?",
    "answer": "Tables is a class in the IronOcr.Extension.AdvancedScan namespace, shipped in IronOcr.dll. It derives from System.Object and implements IEnumerable<TableInfo> and IEnumerable, so you enumerate it to read each recognized table."
  },
  {
    "question": "How do you iterate the tables found by IronOCR in C#?",
    "answer": "Because Tables implements IEnumerable<TableInfo>, use a foreach loop or LINQ over the collection. Each TableInfo it yields exposes the table's bounding rectangle, page number, and cell list."
  }
]
```
