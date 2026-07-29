<!--
N-Full (class, 9 members). Frame B (identity-by-role lead / when-fronted abstract).
SvgConversionOptions members verified from PAGE FACTS 2026-06-22.
Target: PdfToSvg.SvgConversionOptions
-->

## Injected overview (Markdown)

Fine-grained control over every PDF-to-SVG conversion in C# lives in `SvgConversionOptions`. Construct one with `new SvgConversionOptions()`, set the properties that matter for the job, and pass the object to IronPDF's SVG export call to govern fonts, images, annotations, links, hidden text, stroke rendering, and whitespace collapsing in a single, reusable configuration record.

**Font and whitespace control**

Two properties manage how adjacent glyphs are merged into text runs. `CollapseSpaceEmbeddedFont` sets the threshold (as a fraction of the font size) below which gaps between characters rendered with an embedded font are collapsed into a single run rather than emitted as separate SVG text elements. `CollapseSpaceLocalFont` applies the same logic when the page uses a locally resolved font. Tighter values preserve more spacing fidelity; looser values produce smaller, cleaner SVG files. The `FontResolver` property accepts a `FontResolver` delegate or object that maps font references in the PDF to local font resources, which is essential when the source document references fonts that are not embedded.

**Image and link handling**

`ImageResolver` accepts an `ImageResolver` that determines how raster images embedded in the PDF are encoded or referenced in the output SVG. Keeping images inline produces a self-contained file; resolving them to external paths keeps the SVG compact. Set `IncludeLinks` to `true` to carry PDF hyperlink annotations through to the SVG as `<a>` elements, so the exported graphic remains navigable in a browser.

**Annotation, hidden text, and stroke options**

`IncludeAnnotations` controls whether PDF annotation layers appear in the SVG output. `IncludeHiddenText` surfaces text that is present in the PDF content stream but not visible to the reader, which is useful for accessibility tooling or text-extraction pipelines that consume the SVG. `MinStrokeWidth` sets a floor (in SVG user units) for rendered strokes, preventing hairline paths from disappearing at normal viewing scales.

```csharp
using PdfToSvg;
using IronPdf;

var options = new SvgConversionOptions
{
    CollapseSpaceEmbeddedFont = 0.3,
    CollapseSpaceLocalFont    = 0.4,
    IncludeAnnotations        = true,
    IncludeLinks              = true,
    IncludeHiddenText         = false,
    MinStrokeWidth            = 0.5
};

var pdf = PdfDocument.FromFile("report.pdf");
// Pass options to the SVG conversion method on your chosen export API.
```

Explore more in the [IronPDF documentation](https://ironpdf.com/docs/), the [PDF conversion how-to guides](https://ironpdf.com/how-to/), and the [SVG export examples](https://ironpdf.com/examples/pdf-to-svg/). For setup, see the [getting-started page](https://ironpdf.com/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SvgConversionOptions Class - IronPDF C# API`
- v2 (human): `SvgConversionOptions: Control PDF-to-SVG in C#`
- v3 (balanced): `SvgConversionOptions Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure PDF-to-SVG export in C# with IronPDF SvgConversionOptions: control fonts, images, links, annotations, hidden text, and stroke width.`
- v2 (human): `Use SvgConversionOptions in IronPDF to tune every aspect of PDF-to-SVG conversion: fonts, images, links, annotations, and stroke rendering in C#.`
- v3 (balanced): `Reference for IronPDF SvgConversionOptions in C#: set font resolvers, image resolvers, annotations, links, hidden text, and MinStrokeWidth for SVG export.`

---

## Structured data

**TechArticle abstract**

> When converting a PDF to SVG in C#, SvgConversionOptions is the configuration record that governs every aspect of the output. Construct one with new SvgConversionOptions(), then set CollapseSpaceEmbeddedFont and CollapseSpaceLocalFont to control text-run merging, supply a FontResolver or ImageResolver for resource mapping, toggle IncludeAnnotations, IncludeLinks, and IncludeHiddenText to shape content fidelity, and set MinStrokeWidth to prevent hairline strokes from vanishing. The configured object is passed to IronPDF's SVG export call. SvgConversionOptions lives in the PdfToSvg namespace, shipped in IronPdf.dll, and derives from Object.

**FAQPage entries**

```json
[
  {
    "question": "Where does SvgConversionOptions live in the IronPDF API?",
    "answer": "SvgConversionOptions is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from Object and is constructed with new SvgConversionOptions() before being passed to IronPDF's SVG export method."
  },
  {
    "question": "How do you control font rendering during PDF-to-SVG conversion in C#?",
    "answer": "Set CollapseSpaceEmbeddedFont and CollapseSpaceLocalFont on a SvgConversionOptions instance to define the gap threshold (as a fraction of font size) below which adjacent glyphs are merged into a single text run. Supply a FontResolver to map PDF font references to local resources."
  },
  {
    "question": "How do you include hyperlinks and annotations in an exported SVG?",
    "answer": "Set IncludeLinks to true on SvgConversionOptions to emit PDF hyperlinks as SVG anchor elements, and set IncludeAnnotations to true to carry annotation layers into the output. Both properties default to false."
  },
  {
    "question": "What does MinStrokeWidth do in SvgConversionOptions?",
    "answer": "MinStrokeWidth sets a minimum stroke width in SVG user units for all rendered paths. This prevents very thin hairline strokes from being lost or invisible at normal viewing scales in the exported SVG file."
  }
]
```