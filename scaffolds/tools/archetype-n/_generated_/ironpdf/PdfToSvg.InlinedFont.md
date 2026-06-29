<!--
N-Mid (2 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: PdfToSvg.InlinedFont class page.
-->

## Injected overview (Markdown)

When converting a PDF page to SVG, `InlinedFont` embeds the full font data directly into the SVG output so that text renders correctly on any viewer without relying on system fonts. Constructed from a `SourceFont`, it extends the base `Font` type and exposes a `FontFamily` property that returns the CSS-compatible family name used in the generated SVG markup.

`InlinedFont(SourceFont font)` is the single constructor: pass a `SourceFont` extracted during PDF-to-SVG conversion and the object takes responsibility for serializing that font's data inline. The `FontFamily` property (an override of the base `Font` member) returns the string name that appears in the SVG `font-family` attribute, keeping the rendered glyphs tied to the correct typeface even when the SVG is viewed in isolation.

Choosing `InlinedFont` over a referenced font trades a slightly larger SVG file for complete portability: the SVG carries everything it needs to display text faithfully. This matters for archival output, email attachments, or any context where external font hosting is unavailable. The `PdfToSvg` namespace handles the conversion pipeline, and `InlinedFont` sits at the point where font fidelity is locked in before the SVG bytes are written.

```csharp
using PdfToSvg;

// SourceFont is supplied by the conversion pipeline; InlinedFont wraps it.
var inlined = new InlinedFont(sourceFont);
string family = inlined.FontFamily; // e.g. "Arial" - used in SVG font-family
```

For broader PDF-to-SVG conversion options, see the [IronPDF documentation](https://ironpdf.com/docs/) and the [PDF to SVG how-to guide](https://ironpdf.com/how-to/pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `InlinedFont Class - IronPDF C# API Reference`
- v2 (human): `InlinedFont: Embed Fonts in SVG Output with C#`
- v3 (balanced): `InlinedFont Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use InlinedFont in IronPDF's PdfToSvg namespace to embed font data directly into SVG output in C#, ensuring portable text rendering via FontFamily.`
- v2 (human): `InlinedFont wraps a SourceFont to embed font data in SVG files during PDF conversion in C#, guaranteeing correct text display without system fonts.`
- v3 (balanced): `Reference for IronPDF's InlinedFont class in C#: embed SourceFont data into SVG output and expose the CSS font-family name for portable rendering.`

---

## Structured data

**TechArticle abstract**

> InlinedFont embeds a SourceFont's full data into SVG output during PDF-to-SVG conversion in IronPDF, ensuring text renders correctly without relying on system fonts. It extends the Font base type in the PdfToSvg namespace, ships in IronPdf.dll, and exposes a FontFamily property that returns the CSS-compatible family name written into the SVG font-family attribute.

**FAQPage entries**

```json
[
  {
    "question": "Where does InlinedFont live in the IronPDF API?",
    "answer": "InlinedFont is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It extends the Font base type and is constructed with a SourceFont supplied by the PDF-to-SVG conversion pipeline."
  },
  {
    "question": "How do you use InlinedFont to ensure portable SVG text rendering in C#?",
    "answer": "Construct an InlinedFont by passing a SourceFont to its constructor. The object serializes the font data inline into the SVG, and the FontFamily property returns the CSS family name used in the SVG font-family attribute, so text displays correctly without any external font dependency."
  }
]
```