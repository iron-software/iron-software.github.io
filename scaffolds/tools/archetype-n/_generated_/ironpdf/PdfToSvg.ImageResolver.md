<!--
N-Mid (4 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: PdfToSvg.ImageResolver class reference page.
-->

## Injected overview (Markdown)

Controlling how embedded images are resolved during PDF-to-SVG conversion is the job `ImageResolver` handles. This abstract base class lets you decide whether raster images inside a PDF are written into the SVG output as inline data URLs or referenced by external paths, giving you precise control over file size and portability.

Two ready-made strategies ship as static properties. `Default` applies the library's standard resolution behavior, which is the right starting point for most conversions. `DataUrl` encodes every image as a Base64 data URL embedded directly in the SVG markup, producing a fully self-contained file that requires no external assets. When neither preset fits, you subclass `ImageResolver` via its `protected` constructor and override `ResolveImageUrl`, which receives an `Image` and a `CancellationToken` and must return the URL string to embed in the SVG element.

The `CancellationToken` parameter in `ResolveImageUrl` means long-running or network-backed resolvers can respond to cancellation cleanly, an important detail when converting large documents in a server context.

```csharp
using IronPdf;
using PdfToSvg;

var pdf = PdfDocument.FromFile("report.pdf");
var options = new PdfToSvgOptions { ImageResolver = ImageResolver.DataUrl };
pdf.SaveAsSvg("report.svg", options);
```

For a broader look at SVG export capabilities, see the [IronPDF documentation](https://ironpdf.com/docs/) and the [PDF conversion how-to guides](https://ironpdf.com/how-to/pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageResolver Class - IronPDF C# API Reference`
- v2 (human): `ImageResolver: Control SVG Image Output in C#`
- v3 (balanced): `ImageResolver Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure image resolution in PDF-to-SVG conversion with IronPDF's ImageResolver class in C#: use DataUrl, Default, or a custom ResolveImageUrl override.`
- v2 (human): `Control how images are embedded in SVG output in C# with IronPDF's ImageResolver: inline data URLs, default behavior, or a custom resolver subclass.`
- v3 (balanced): `Reference for IronPDF's ImageResolver class in C#: choose DataUrl or Default presets, or override ResolveImageUrl for custom PDF-to-SVG image handling.`

---

## Structured data

**TechArticle abstract**

> Subclassing or selecting an ImageResolver in IronPDF determines how raster images are encoded when a PDF is exported to SVG. The static DataUrl property embeds images as Base64 data URLs for a self-contained file, Default applies standard resolution behavior, and the abstract ResolveImageUrl method accepts an Image and a CancellationToken and returns the URL string to write into the SVG element.

**FAQPage entries**

```json
[
  {
    "question": "Where does ImageResolver live in the IronPDF API?",
    "answer": "ImageResolver is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It derives from Object and serves as the abstract base for image resolution strategies used during PDF-to-SVG conversion."
  },
  {
    "question": "How do you embed images as data URLs when converting a PDF to SVG in C#?",
    "answer": "Assign ImageResolver.DataUrl to the ImageResolver property of your conversion options. This encodes every raster image as a Base64 data URL directly inside the SVG markup, producing a fully self-contained output file with no external image references."
  }
]
```