<!--
N-Mid (3 members). Frame C. IronPdf. Members verified 2023-10-14.
Target: https://ironpdf.com/
-->

## Injected overview (Markdown)

`BlockSearchResult` provides the outcome of a block search operation within CSS parsing, indicating whether a specific block was found and where its opening brace is located. This class is essential when analyzing or manipulating CSS within a PDF document, as it helps pinpoint the exact location of style definitions.

The `Found` property confirms the presence of the searched block, while `OpenBraceIndex` gives the position of the opening brace, allowing developers to modify or extract specific CSS blocks efficiently. This functionality is particularly useful in scenarios where precise CSS manipulations are needed, such as adjusting styles dynamically or extracting specific style rules for further processing.

For a practical implementation, consider a scenario where a PDF document's CSS needs to be parsed to adjust styles based on user input. By leveraging `BlockSearchResult`, developers can quickly locate and modify the necessary CSS blocks without parsing the entire document manually.

To learn more about working with CSS in PDFs, visit the [IronPDF documentation](https://ironpdf.com/docs/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BlockSearchResult Class - IronPDF C# API Reference`
- v2 (human): `BlockSearchResult: CSS Block Search in IronPDF`
- v3 (balanced): `BlockSearchResult | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronPDF BlockSearchResult class in C#: find CSS blocks in PDFs, check Found, get OpenBraceIndex for precise style manipulation.`
- v2 (human): `Use BlockSearchResult in IronPDF to locate and manipulate CSS blocks in PDFs. Check Found and OpenBraceIndex for targeted style changes.`
- v3 (balanced): `IronPDF's BlockSearchResult class helps locate CSS blocks in PDFs with Found and OpenBraceIndex, enabling precise style adjustments.`

---

## Structured data

**TechArticle abstract**

> BlockSearchResult provides results for CSS block searches in IronPDF, indicating if a block is found and its opening brace index. This aids in precise CSS manipulations within PDF documents.

**FAQPage entries**

```json
[
  {
    "question": "Where does BlockSearchResult live in the IronPDF API?",
    "answer": "BlockSearchResult is a class in the IronPdf namespace, part of the IronPdf.dll assembly. It provides results for CSS block search operations."
  }
]
```