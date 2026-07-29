<!--
N-Mid (5 members). Frame C. IronOCR. Members verified 2026-06-22.
Target: DynamicTesseract.FontAttributes class reference page.
-->

## Injected overview (Markdown)

Captured alongside each recognized word during OCR, `FontAttributes` bundles the typographic metadata that Tesseract detects: the underlying `FontInfo` descriptor, whether the text is underlined or set in small caps, and the rendered point size. When fine-grained layout analysis matters, such as reconstructing a document's visual hierarchy or flagging headings versus body copy, this record gives the detail needed without a separate parsing pass.

Construction requires a `FontInfo` value plus the three decoration flags: `isUnderlined`, `isSmallCaps`, and `pointSize`. Once built, all four properties are read-only. `FontInfo` exposes the font family and style data that Tesseract identified. `IsUnderlined` and `IsSmallCaps` are straightforward boolean flags. `PointSize` carries the size in typographic points as Tesseract estimated it from the image geometry, so its accuracy depends on image resolution and scan quality.

A typical use is filtering OCR results to locate large-point or small-caps text that signals section titles:

```csharp
using IronOcr;

var ocr = new IronTesseract();
using var input = new OcrInput();
input.LoadPdf("report.pdf");
var result = ocr.Read(input);

foreach (var word in result.Words)
{
    var attr = word.FontAttributes;
    if (attr is { PointSize: >= 14 } || attr.IsSmallCaps)
        Console.WriteLine($"Heading candidate: {word.Text}");
}
```

For background on reading document structure with IronOCR, see the [IronOCR documentation](https://ironsoftware.com/csharp/ocr/docs/) and the [read PDF how-to](https://ironsoftware.com/csharp/ocr/how-to/read-pdf-ocr/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontAttributes Class - IronOCR C# API Reference`
- v2 (human): `FontAttributes: OCR Font Metadata in C#`
- v3 (balanced): `FontAttributes Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Access OCR font metadata in C# with IronOCR FontAttributes: FontInfo, IsUnderlined, IsSmallCaps, and PointSize for each recognized word.`
- v2 (human): `Use IronOCR FontAttributes in C# to read font family, underline, small caps, and point size from Tesseract OCR results word by word.`
- v3 (balanced): `Reference for IronOCR FontAttributes in C#: retrieve FontInfo, IsUnderlined, IsSmallCaps, and PointSize from Tesseract OCR word results.`

---

## Structured data

**TechArticle abstract**

> FontAttributes captures the typographic metadata Tesseract detects for each recognized word in IronOCR: a FontInfo descriptor, IsUnderlined and IsSmallCaps boolean flags, and a PointSize integer. Constructed from a FontInfo value and three decoration parameters, its four properties are read-only and suit layout analysis tasks such as identifying headings or styled text within OCR output.

**FAQPage entries**

```json
[
  {
    "question": "Where does FontAttributes live in the IronOCR API?",
    "answer": "FontAttributes is a class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from Object and is surfaced on individual word results produced during an IronTesseract read operation."
  },
  {
    "question": "How do you access font size and style from an OCR result in C#?",
    "answer": "Retrieve the FontAttributes record from a recognized word result. Its PointSize property gives the estimated typographic size, IsUnderlined and IsSmallCaps report decoration flags, and FontInfo carries the font family and style data that Tesseract identified."
  }
]
```