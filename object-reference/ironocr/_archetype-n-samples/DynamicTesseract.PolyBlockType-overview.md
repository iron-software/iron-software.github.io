<!--
N-Lite/enum. DynamicTesseract. Members verified 2026-06-23 (salient subset of 16; value__ ignored).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.PolyBlockType.html
-->

## Injected overview (Markdown)

Read what kind of region the layout analyzer found with `PolyBlockType`, returned from a `PageIterator` through its `BlockType` property. `FlowingText` marks ordinary body text and `HeadingText` a heading, while `CaptionText` and `PullOutText` flag captions and call-outs. `FlowingImage`, `HeadingImage`, and `PullOutImage` mark picture regions, `Table` a tabular region, and `Equation` or `InlineEquation` mathematical content. `HorizontalLine`, `VerticalLine`, `Noise`, and `Unknown` cover separators and unclassified areas. Use the value to keep, skip, or route a block by its role.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PolyBlockType Enum - IronOCR C# API Reference`
- v2 (human): `PolyBlockType: OCR Region Types in C#`
- v3 (balanced): `PolyBlockType Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Identify OCR region types in C# with the IronOCR PolyBlockType enum: FlowingText, HeadingText, Table, Equation, image, and line blocks.`
- v2 (human): `Tell what a layout block contains in C# with PolyBlockType: body text, headings, captions, tables, equations, images, or separators.`
- v3 (balanced): `Reference for the IronOCR PolyBlockType enum in C#: FlowingText, HeadingText, CaptionText, Table, Equation, and image block types.`

---

## Structured data

**TechArticle abstract**

> Identify the kind of region a layout analyzer found with PolyBlockType in IronOCR for C#, read from a PageIterator's BlockType property. FlowingText marks body text, HeadingText a heading, CaptionText and PullOutText call-outs, Table a tabular region, and Equation mathematical content, while image, line, Noise, and Unknown values cover pictures, separators, and unclassified areas.
