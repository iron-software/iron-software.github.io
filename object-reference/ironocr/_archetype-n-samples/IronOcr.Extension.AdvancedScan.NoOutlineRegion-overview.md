<!--
N-Mid (struct, value-type). Declared: public sealed class NoOutlineRegion : ValueType, IEquatable<NoOutlineRegion>.
Ctor NoOutlineRegion(Rectangle RegionRect, string RegionText, int Page). Properties: Page, RegionRect, RegionText. Methods: Deconstruct, Equals.
Frame C (when-fronted). IronOcr.Extension.AdvancedScan.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Extension.AdvancedScan.NoOutlineRegion.html
-->

## Injected overview (Markdown)

When an advanced scan finds text that sits outside any ruled table, IronOCR records it as a `NoOutlineRegion`. Each one captures a block of recognized text that has no cell borders around it, so content between or beside tables is not lost during structured extraction.

`RegionRect` gives the region's rectangle on the page, `RegionText` holds the recognized text inside it, and `Page` reports which page it came from. The value type also offers a `Deconstruct` method, so `var (rect, text, page) = region;` reads all three at once, and `Equals` compares two regions for equality by their stored values. Pair these regions with the table results when you reconstruct a document and need both the gridded cells and the surrounding free text in their correct positions, since labels, captions, and notes often sit just outside the ruled grid.

The [advanced reading how-to](https://ironsoftware.com/csharp/ocr/how-to/read-document-advanced/) covers the advanced scan, and the [read table in a document how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) shows the structured results alongside it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `NoOutlineRegion - IronOCR C# API Reference`
- v2 (human): `NoOutlineRegion: Borderless Text in C#`
- v3 (balanced): `NoOutlineRegion | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `NoOutlineRegion holds borderless scanned text in C# from IronOCR: RegionRect, RegionText, and Page, with Deconstruct to read all three at once.`
- v2 (human): `Capture text outside tables in C# with the IronOCR NoOutlineRegion value type: its RegionRect, RegionText, and Page from an advanced scan.`
- v3 (balanced): `Reference for the IronOCR NoOutlineRegion class in C#: a recognized text block without cell borders, with RegionRect, RegionText, and Page.`

---

## Structured data

**TechArticle abstract**

> When an advanced scan finds text outside any ruled table, IronOCR records it as a NoOutlineRegion in C#. RegionRect gives the region's rectangle, RegionText holds the recognized text, and Page reports the page number. The value type offers a Deconstruct method to read all three at once, so borderless content can be placed correctly alongside extracted tables.

**FAQPage entries**

```json
[
  {
    "question": "Where does NoOutlineRegion live in the IronOCR API?",
    "answer": "NoOutlineRegion is a struct in the IronOcr.Extension.AdvancedScan namespace, shipped in IronOcr.dll. docfx renders it as a sealed class deriving from ValueType, and it implements IEquatable<NoOutlineRegion>."
  },
  {
    "question": "How do you read text found outside a table in C#?",
    "answer": "Read RegionText for the recognized text and RegionRect for its rectangle, with Page giving the page number. NoOutlineRegion is a value type with a Deconstruct method, so var (rect, text, page) = region; reads all three fields at once."
  }
]
```
