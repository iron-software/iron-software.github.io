<!--
N-Mid. Frame D. IronOCR. Verified 2026-06-23: BlockNumber, BlockType, Characters, Lines, Paragraphs, Words; base OcrResult.OcrResultTextElement (Text, Confidence inherited).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.OcrResult.Block.html
-->

## Injected overview (Markdown)

Grouping recognized text into the largest layout regions on a page runs through `OcrResult.Block`, a block holding zero or more paragraphs. It is the coarsest text element below the page itself, so it is where you start when you want output organized by column or region before drilling into paragraphs, lines, and words.

You obtain blocks by walking an `OcrResult` from `IronTesseract.Read`: read the `Blocks` on a page, then move down through each block's structure. The block carries the inherited `Text` and `Confidence` from `OcrResult.OcrResultTextElement`, plus `BlockNumber`, a unique one-based ID within the result, and `BlockType`, a string naming the kind of region the engine detected.

To descend the tree, a block exposes four arrays in order of appearance: `Paragraphs`, `Lines`, `Words`, and `Characters`. Read `Paragraphs` when you want the next structural level, or jump straight to `Words` or `Characters` when you only need the flattened content of the block. The inherited geometry locates the block on the page when you need to crop or draw it.

The [working with OCR results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) walks the result tree from blocks down to words, and the [results objects example](https://ironsoftware.com/csharp/ocr/examples/results-objects/) reads block-level structure from a scan.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `OcrResult.Block Class - IronOCR C# API`
- v2 (human): `Block: Read OCR Text by Region in C#`
- v3 (balanced): `OcrResult.Block | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read an OCR text block in C# with the IronOCR Block class: inherited Text and Confidence, BlockNumber, BlockType, Paragraphs, Lines, Words, Characters.`
- v2 (human): `Group OCR output by layout region in C# with the IronOCR Block class: block text, type, and arrays of paragraphs, lines, words, and characters.`
- v3 (balanced): `Reference for the IronOCR OcrResult.Block class in C#: BlockNumber, BlockType, and the Paragraphs, Lines, Words, and Characters arrays.`

---

## Structured data

**TechArticle abstract**

> Grouping OCR output into page regions in C# uses the IronOCR OcrResult.Block element, a block of zero or more paragraphs. Obtain blocks from a page's Blocks after IronTesseract.Read. Each exposes inherited Text and Confidence, a one-based BlockNumber, a BlockType string, and Paragraphs, Lines, Words, and Characters arrays for descending the result tree.

**FAQPage entries**

```json
[
  {
    "question": "Where does OcrResult.Block live in the IronOCR API?",
    "answer": "OcrResult.Block is a class in the IronOcr namespace, shipped in IronOcr.dll, deriving from OcrResult.OcrResultTextElement. You receive instances from the Blocks on an OcrResult page."
  },
  {
    "question": "How do you read OCR output grouped by region in C#?",
    "answer": "Run IronTesseract.Read to get an OcrResult, enumerate a page's Blocks, and read each block's Text or descend through its Paragraphs, Lines, Words, and Characters arrays. BlockType names the kind of region detected."
  }
]
```
