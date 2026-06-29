<!--
N-Mid (5 members). Frame B. IronOcr.
Members verified 2026-06-23: Lines, Words, Characters, Block, ParagraphNumber. Obtained via OcrResult.Page.Paragraphs.
Base OcrResult.OcrResultTextElement. Namespace IronOcr.OcrResult.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Paragraph.html
-->

## Injected overview (Markdown)

`OcrResult.Paragraph` is one recognized paragraph of text, the layout level between a block and the individual lines. It groups the lines, words, and characters that belong together so you can read or process a document by paragraph instead of stitching loose words back into prose.

You receive paragraphs from a page: `OcrResult.Page.Paragraphs` returns an array of `Paragraph` in reading order. Each paragraph derives from `OcrResult.OcrResultTextElement`, so it also exposes the shared `Text`, `Confidence`, and `BoundingBox` members for the whole paragraph.

The members let you drill in or step out. `Lines`, `Words`, and `Characters` are arrays of the finer elements within the paragraph, each in reading order, so you can walk down from a paragraph to its words without re-querying the page. `Block` points back up to the `OcrResult.Block` that contains this paragraph, and `ParagraphNumber` is a 1 based identifier within the document. Read `Text` from the base for the joined-up paragraph string, then use these members when you need its structure.

The [OCR results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) walks the paragraph hierarchy, and the [reading results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) shows how to pull structured text from a page.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Paragraph - IronOCR C# API`
- v2 (human): `OcrResult.Paragraph: OCR Paragraphs in C#`
- v3 (balanced): `OcrResult.Paragraph Class | IronOCR .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronOCR OcrResult.Paragraph class in C# groups a paragraph's Lines, Words, and Characters, with Block and ParagraphNumber for navigation.`
- v2 (human): `Process OCR output by paragraph in C# with the IronOCR OcrResult.Paragraph class: read its lines, words, characters, and joined-up text.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Paragraph class in C#: the layout level between a block and its lines, with Text from the shared base.`

---

## Structured data

**TechArticle abstract**

> An IronOCR OcrResult.Paragraph in C# is one recognized paragraph, obtained from OcrResult.Page.Paragraphs. Lines, Words, and Characters return the finer elements within it in reading order, Block points to the containing OcrResult.Block, and ParagraphNumber is a 1 based identifier. It derives from OcrResultTextElement, so Text, Confidence, and BoundingBox apply to the whole paragraph.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Paragraph live in the IronOCR API?",
    "answer": "OcrResult.Paragraph is a class in the IronOcr.OcrResult namespace, shipped in IronOcr.dll. It derives from OcrResult.OcrResultTextElement, and you obtain paragraphs from the OcrResult.Page.Paragraphs array."
  },
  {
    "question": "How do you read text paragraph by paragraph in C#?",
    "answer": "Iterate OcrResult.Page.Paragraphs and read each paragraph's Text from the shared base. Drill into Lines, Words, or Characters for finer structure, or use ParagraphNumber to identify a paragraph within the document."
  }
]
```
