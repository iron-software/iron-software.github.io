<!--
N-Full (class, 7 members). Frame B (identity-by-role). IronPDF / PdfToSvg.
SourceFont members verified: CanBeExtracted, CanBeInlined, IsStandardFont, Name, ToOpenType(), ToWoff(), protected ctor.
Target: PdfToSvg.SourceFont class reference page.
-->

## Injected overview (Markdown)

A font resource extracted from a PDF during SVG conversion is represented as a `SourceFont` object. When IronPDF renders a PDF page to SVG, every typeface encountered in that page is surfaced through a `SourceFont` so that downstream code can decide how to handle it: embed the raw bytes, inline the data as a web font, or skip fonts that belong to the PDF standard set.

`SourceFont` is an abstract base class in the `PdfToSvg` namespace. Concrete subtypes are produced internally by the conversion pipeline; you do not construct them directly (the constructor is `protected`). Instead, you receive instances through the SVG conversion API and interrogate them through the properties and methods declared here.

Three boolean properties describe what a given font supports. `CanBeExtracted` reports whether the underlying font data can be retrieved at all; some fonts in a PDF are partially embedded or restricted, making extraction impossible. `CanBeInlined` indicates whether the font can be encoded directly into the SVG output as a data URI, which is useful for fully self-contained SVG files. `IsStandardFont` identifies the 14 PDF standard fonts (Times, Helvetica, Courier, and their variants) that do not carry embedded data because PDF viewers are expected to supply them natively.

The `Name` property returns the PostScript name of the font as it appears in the PDF. Two conversion methods cover the most common web-font formats: `ToOpenType()` returns the font bytes as an OpenType (`.otf`) binary, and `ToWoff()` returns the same data repackaged as a WOFF file ready for a CSS `@font-face` rule. Both methods return a `byte[]`, so you can write the result to disk, embed it in a stream, or encode it to Base64 for inlining.

A typical workflow checks `CanBeExtracted` before calling either conversion method, then branches on `IsStandardFont` to decide whether embedding is necessary at all.

```csharp
using PdfToSvg;
using System.IO;

// svgConversion supplies SourceFont instances during PDF-to-SVG rendering
void HandleFont(SourceFont font, string outputDir)
{
    if (font.IsStandardFont || !font.CanBeExtracted)
        return;

    string path = Path.Combine(outputDir, font.Name + ".woff");
    File.WriteAllBytes(path, font.ToWoff());
}
```

For background on PDF-to-SVG conversion in IronPDF, see the [PDF to SVG how-to](https://ironpdf.com/how-to/pdf-to-svg/), the [IronPDF get-started guide](https://ironpdf.com/get-started/), and the [font handling examples](https://ironpdf.com/examples/pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SourceFont Class - IronPDF PdfToSvg C# API`
- v2 (human): `SourceFont: PDF Font Data in C# SVG Conversion`
- v3 (balanced): `SourceFont Class | IronPDF PdfToSvg C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use the IronPDF SourceFont class in C# to access PDF font data during SVG conversion. Check CanBeExtracted, then call ToOpenType or ToWoff to retrieve bytes.`
- v2 (human): `Inspect and export PDF fonts in C# with IronPDF's SourceFont: check extraction support, detect standard fonts, and export to OpenType or WOFF format.`
- v3 (balanced): `Reference for the IronPDF PdfToSvg SourceFont class in C#: query CanBeExtracted, IsStandardFont, and export font bytes with ToOpenType or ToWoff.`

---

## Structured data

**TechArticle abstract**

> Font resources encountered during PDF-to-SVG conversion in IronPDF are surfaced as SourceFont objects. Each instance exposes CanBeExtracted, CanBeInlined, and IsStandardFont to describe what the font supports, a Name property for its PostScript identifier, and two conversion methods: ToOpenType returns the font as an OpenType byte array, and ToWoff returns it as a WOFF byte array. Check CanBeExtracted before calling either method, and use IsStandardFont to skip fonts that PDF viewers supply natively. SourceFont is an abstract class in the PdfToSvg namespace, shipped in IronPdf.dll.

**FAQPage entries**

```json
[
  {
    "question": "Where does SourceFont live in the IronPDF API?",
    "answer": "SourceFont is an abstract class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from System.Object. Instances are produced internally by the IronPDF PDF-to-SVG conversion pipeline; you receive them through conversion callbacks rather than constructing them directly."
  },
  {
    "question": "How do you export a PDF font to a WOFF file in C#?",
    "answer": "Receive a SourceFont from the SVG conversion API, check that CanBeExtracted is true, then call ToWoff() to get a byte array. Write that array to a file with File.WriteAllBytes, or encode it to Base64 for embedding in a CSS @font-face data URI."
  },
  {
    "question": "What is the difference between ToOpenType and ToWoff on SourceFont?",
    "answer": "Both methods return the same underlying font data as a byte array. ToOpenType packages it as an OpenType (.otf) binary suitable for desktop use or further processing, while ToWoff packages it as a WOFF file optimized for web delivery in a CSS @font-face rule."
  },
  {
    "question": "How do you tell whether a SourceFont needs to be embedded in an SVG?",
    "answer": "Check IsStandardFont first. The 14 PDF standard fonts do not carry embedded data and are expected to be available in every PDF viewer, so embedding them is usually unnecessary. For all other fonts, check CanBeExtracted to confirm the data is available before calling ToOpenType or ToWoff."
  }
]
```