<!--
N-Mid (3 members). Frame C. IronPdf. Members verified 2026-06-22.
Target: https://ironpdf.com/
-->

## Injected overview (Markdown)

`BlockExtractionResult` captures the outcome of a block extraction during CSS parsing in IronPDF, providing developers with essential data from the operation. It is primarily used to access the extracted content and track the position for subsequent operations. The `Content` property holds the extracted string, while `NextIndex` indicates the position in the source for the next extraction attempt, streamlining batch operations.

This class is useful when working with complex PDF documents where CSS-based block extraction is necessary. By utilizing `BlockExtractionResult`, developers can efficiently manage and manipulate extracted data, facilitating tasks such as content analysis, transformation, or reformatting. The ability to access both the content and the next index allows for precise control over the parsing process, ensuring that no data is overlooked.

For practical guidance, visit the [IronPDF documentation](https://ironpdf.com/docs/) and explore examples on [how to extract text from PDFs](https://ironpdf.com/examples/extract-text-from-pdf/). These resources provide insights into leveraging `BlockExtractionResult` effectively within your projects.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BlockExtractionResult Class - IronPDF C# API Reference`
- v2 (human): `BlockExtractionResult: Extract & Track PDF Content in C#`
- v3 (balanced): `BlockExtractionResult Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Capture block extraction results in C# with IronPDF's BlockExtractionResult class: access extracted content and manage parsing indexes efficiently.`
- v2 (human): `Manage PDF block extraction in C# using IronPDF's BlockExtractionResult class: access content and track positions for efficient parsing.`
- v3 (balanced): `Reference for IronPDF's BlockExtractionResult class in C#: extract and manage PDF content with access to extracted data and parsing indexes.`

---

## Structured data

**TechArticle abstract**

> BlockExtractionResult captures the outcome of a block extraction in IronPDF, providing access to extracted content and the next index for continued parsing. It is essential for handling complex PDF documents where CSS-based extraction is required.

**FAQPage entries**

```json
[
  {
    "question": "Where does BlockExtractionResult live in the IronPDF API?",
    "answer": "BlockExtractionResult is a class in the IronPdf namespace, included in the IronPdf.dll assembly. It derives from Object and is used for handling block extraction results."
  }
]
```