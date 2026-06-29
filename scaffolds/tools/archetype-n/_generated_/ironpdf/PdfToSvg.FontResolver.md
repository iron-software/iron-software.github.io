<!--
N-Full (class, 7 members). Frame B (identity-by-role). PdfToSvg.FontResolver.
Default/EmbedOpenType/EmbedWoff/LocalFonts/ResolveFont/ResolveFontAsync/protected ctor verified.
Target: PdfToSvg.FontResolver API reference page.
-->

## Injected overview (Markdown)

Font handling during PDF-to-SVG conversion is governed by a `FontResolver`, the policy object that decides how each typeface embedded in a source PDF is represented in the output SVG. Choosing the right resolver controls file size, offline rendering fidelity, and cross-platform text accuracy without touching any other part of the conversion pipeline.

Four built-in resolvers cover the most common scenarios. `FontResolver.Default` applies a balanced strategy suited to general-purpose conversion. `FontResolver.EmbedOpenType` encodes each font as a base64 OpenType data URI inside the SVG, making the file self-contained and portable at the cost of a larger payload. `FontResolver.EmbedWoff` does the same with WOFF encoding, which compresses better and is the preferred choice when the SVG will be displayed in a browser. `FontResolver.LocalFonts` emits CSS `local()` references instead of embedding data, keeping the SVG compact but requiring that the same fonts are installed on every machine that renders the file.

Pass a resolver to the conversion options when converting a PDF with IronPDF. The resolver is consulted once per distinct `SourceFont` encountered in the document. `ResolveFont` returns a synchronous `Font` decision, while `ResolveFontAsync` is the awaitable overload for pipelines that must stay non-blocking, both accepting a `CancellationToken` for cooperative cancellation.

Custom font strategies are possible by subclassing `FontResolver` (the constructor is `protected`) and overriding `ResolveFont` or `ResolveFontAsync`. A custom resolver can, for example, substitute a licensed typeface, strip a font entirely, or fetch a font from a remote asset store.

```csharp
using PdfToSvg;

// Embed fonts as WOFF for browser-friendly, self-contained SVG output
var options = new ConversionOptions
{
    FontResolver = FontResolver.EmbedWoff
};

using var pdf = PdfDocument.FromFile("report.pdf");
string svg = pdf.Pages[0].ToSvgString(options);
File.WriteAllText("report.svg", svg);
```

The [IronPDF get-started guide](https://ironpdf.com/get-started/) covers initial setup, the [PDF-to-SVG how-to](https://ironpdf.com/how-to/pdf-to-svg/) explains the full conversion workflow, and the [font handling example](https://ironpdf.com/examples/pdf-to-svg-font-options/) demonstrates each resolver side by side.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontResolver Class - IronPDF C# API Reference`
- v2 (human): `FontResolver: Control SVG Fonts in C#`
- v3 (balanced): `FontResolver Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control font embedding in PDF-to-SVG conversion with the IronPDF FontResolver class. Choose Default, EmbedWoff, EmbedOpenType, or LocalFonts in C#.`
- v2 (human): `Pick how fonts appear in exported SVGs with IronPDF's FontResolver: embed as WOFF or OpenType, reference local fonts, or write a custom resolver.`
- v3 (balanced): `Reference for PdfToSvg.FontResolver in C#: select EmbedWoff, EmbedOpenType, LocalFonts, or Default to control font strategy in SVG output.`

---

## Structured data

**TechArticle abstract**

> Font handling during PDF-to-SVG conversion is governed by the PdfToSvg.FontResolver policy object in IronPDF. Four static properties, Default, EmbedOpenType, EmbedWoff, and LocalFonts, cover the most common embedding strategies. ResolveFont and ResolveFontAsync are called once per distinct SourceFont in the document and return a Font decision, with cancellation support. Subclass FontResolver and override those methods to implement a custom font strategy.

**FAQPage entries**

```json
[
  {
    "question": "Where does FontResolver live in the IronPDF API?",
    "answer": "FontResolver is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from System.Object. Obtain an instance through the static properties Default, EmbedOpenType, EmbedWoff, or LocalFonts, or subclass it using the protected constructor to create a custom resolver."
  },
  {
    "question": "How do you choose a font embedding strategy for SVG export in C#?",
    "answer": "Assign one of the built-in FontResolver static properties to the FontResolver option on your conversion settings before converting. Use EmbedWoff for browser-friendly self-contained SVGs, EmbedOpenType for maximum compatibility, LocalFonts to keep file size small when fonts are installed on the target machine, or Default for a general-purpose balance."
  },
  {
    "question": "How do you implement a custom font resolver with IronPDF?",
    "answer": "Subclass FontResolver (its constructor is protected) and override ResolveFont or ResolveFontAsync. Both methods receive a SourceFont describing the typeface found in the PDF and a CancellationToken, and must return a Font that tells the converter how to represent that typeface in the SVG output."
  },
  {
    "question": "What is the difference between ResolveFont and ResolveFontAsync on FontResolver?",
    "answer": "ResolveFont is the synchronous overload that returns a Font directly. ResolveFontAsync is the awaitable Task<Font> overload for use in async pipelines where blocking the calling thread is undesirable. Both accept a CancellationToken for cooperative cancellation."
  }
]
```