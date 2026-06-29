<!--
N-Lite/enum. DynamicTesseract. Members verified 2026-06-23: TEXT, HOCR, PDF, BOX, UNLV (value__ ignored).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.RenderedFormat.html
-->

## Injected overview (Markdown)

Select the output a Tesseract result renderer produces with `RenderedFormat`. `TEXT` emits plain recognized text and `PDF` builds a searchable PDF with an invisible text layer over the page image. `HOCR` produces hOCR XHTML that carries word positions and confidence, `BOX` writes Tesseract box-file coordinates for training, and `UNLV` emits the legacy UNLV zone format. Pick `PDF` for a searchable document or `HOCR` when downstream code needs per-word geometry. The [searchable PDF how-to](https://ironsoftware.com/csharp/ocr/how-to/searchable-pdf/) covers the PDF output path.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RenderedFormat Enum - IronOCR C# API`
- v2 (human): `RenderedFormat: OCR Output Types in C#`
- v3 (balanced): `RenderedFormat Enum | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose OCR output in C# with the IronOCR RenderedFormat enum: TEXT, PDF, HOCR, BOX, or UNLV from a Tesseract result renderer.`
- v2 (human): `Pick what Tesseract renders in C# with RenderedFormat: plain text, a searchable PDF, hOCR with positions, box files, or UNLV.`
- v3 (balanced): `Reference for the IronOCR RenderedFormat enum in C#: TEXT, PDF, HOCR, BOX, and UNLV output formats for result rendering.`

---

## Structured data

**TechArticle abstract**

> Select the output a Tesseract result renderer produces with RenderedFormat in IronOCR for C#. TEXT emits plain recognized text, PDF builds a searchable PDF with an invisible text layer, HOCR produces hOCR XHTML with word positions and confidence, BOX writes box-file training coordinates, and UNLV emits the legacy zone format.
