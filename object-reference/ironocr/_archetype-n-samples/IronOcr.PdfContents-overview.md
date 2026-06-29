<!--
N-Lite/enum. Declared: public sealed class PdfContents : Enum. Members verified 2026-06-23: OnlyImages, TextAndImages.
Cross-ref: IronTesseract.Read(IDocumentId, PdfContents) verified.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.PdfContents.html
-->

## Injected overview (Markdown)

Telling IronOCR what to pull out of a PDF runs through `PdfContents`, passed to `IronTesseract.Read` when the source is a PDF document. `TextAndImages` reads both the embedded text layer and any rasterized images on the page, which suits a mixed PDF that contains scanned pictures alongside selectable text. `OnlyImages` restricts OCR to the rasterized images and skips the existing text layer, useful when a PDF already has reliable text and only its pictures need recognition. The [PDF OCR example](https://ironsoftware.com/csharp/ocr/examples/csharp-pdf-ocr/) shows a PDF read end to end.

```csharp
var result = ocr.Read(document, PdfContents.TextAndImages);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfContents Enum - IronOCR C# API Reference`
- v2 (human): `PdfContents: Choose What to OCR in a PDF (C#)`
- v3 (balanced): `PdfContents Enum | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose what IronOCR reads from a PDF in C# with the PdfContents enum: TextAndImages for the full page or OnlyImages for rasterized pictures.`
- v2 (human): `Control what IronOCR extracts from a PDF in C# with the PdfContents enum: read both text and images, or limit OCR to embedded images only.`
- v3 (balanced): `Reference for the IronOCR PdfContents enum in C#: TextAndImages and OnlyImages, passed to IronTesseract.Read for PDF input.`

---

## Structured data

**TechArticle abstract**

> Choose what IronOCR reads from a PDF in C# with the PdfContents enum, passed to IronTesseract.Read. TextAndImages recognizes both the embedded text layer and rasterized images, while OnlyImages restricts OCR to the pictures and skips existing text.
