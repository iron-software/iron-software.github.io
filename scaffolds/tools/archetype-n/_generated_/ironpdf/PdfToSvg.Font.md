<!--
N-Mid (3 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: PdfToSvg.Font class in IronPdf.dll
-->

## Injected overview (Markdown)

Font records the typeface identity of text extracted during a PDF-to-SVG conversion, giving downstream code a reliable way to inspect which font family was active for a given piece of content. As an abstract base, it surfaces through the conversion pipeline rather than through direct construction, and its `FontFamily` property carries the name that matters most for layout fidelity.

`FontFamily` is the primary member: it returns the font-family string as it appears in the source PDF, which you can use to decide whether to substitute, embed, or flag a typeface during SVG post-processing. `ToString` returns a human-readable representation of the font record, convenient for logging or debugging conversion output. `GetHashCode` provides a consistent hash so Font instances can be stored in dictionaries or hash sets when building font-inventory maps across a document.

Because Font is abstract, you encounter it as a typed reference returned by the conversion layer rather than instantiating it directly. A typical use is collecting distinct `FontFamily` values across converted pages to audit which typefaces a PDF relies on, then cross-referencing that list against an approved set before publishing the SVG output.

Explore the broader PDF rendering and extraction capabilities at [IronPDF documentation](https://ironpdf.com/docs/) and see practical conversion patterns in the [PDF to SVG how-to](https://ironpdf.com/how-to/pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Font Class - PdfToSvg C# API | IronPDF`
- v2 (human): `Font: Inspect PDF Typefaces in C# with IronPDF`
- v3 (balanced): `Font Class | PdfToSvg C# IronPDF Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use the IronPDF PdfToSvg.Font class in C# to access FontFamily, ToString, and GetHashCode when inspecting typefaces during PDF-to-SVG conversion.`
- v2 (human): `Inspect font families from PDF-to-SVG conversion in C# with IronPDF's Font class: read FontFamily, log with ToString, and map fonts with GetHashCode.`
- v3 (balanced): `Reference for IronPDF's PdfToSvg.Font class in C#: read FontFamily to audit typefaces during PDF-to-SVG conversion, with ToString and GetHashCode support.`

---

## Structured data

**TechArticle abstract**

> Auditing typefaces during PDF-to-SVG conversion in C# is handled through the PdfToSvg.Font class in IronPDF. The abstract FontFamily property exposes the font-family name from the source PDF, ToString produces a readable representation for logging, and GetHashCode enables Font instances to be used as dictionary keys when building font-inventory maps across converted pages.

**FAQPage entries**

```json
[
  {
    "question": "Where does Font live in the IronPDF API?",
    "answer": "Font is an abstract class in the PdfToSvg namespace, shipped in IronPdf.dll, and derives from System.Object. It surfaces as a typed reference returned by the PDF-to-SVG conversion layer rather than being instantiated directly."
  },
  {
    "question": "How do you retrieve the font family name from a converted PDF in C#?",
    "answer": "Read the FontFamily property on a Font instance obtained during PDF-to-SVG conversion. It returns the font-family string as recorded in the source PDF, which you can use for typeface auditing, substitution decisions, or SVG post-processing."
  }
]
```