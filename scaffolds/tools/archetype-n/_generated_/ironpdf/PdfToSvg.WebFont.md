<!--
N-Full (class, 10 members). Frame: feature-fronted prose lead, when-fronted abstract. IronPDF.
WebFont(LocalFont, string, string, string, string), FallbackFont, FontFamily, WoffUrl, Woff2Url, TrueTypeUrl, OpenTypeUrl, Equals, GetHashCode, ToString verified from PAGE FACTS.
Base type: Font (PdfToSvg namespace).
Target: PdfToSvg.WebFont API reference page.
-->

## Injected overview (Markdown)

Precise font rendering in SVG output becomes possible when you supply `WebFont`, a configuration record that tells the IronPDF SVG converter where to fetch a web-hosted typeface and which local font to use when those remote URLs are unavailable. Construct one instance per typeface and pass it wherever the conversion pipeline accepts a `Font`-derived object.

`WebFont` extends `Font` and holds up to four URL slots covering every common web-font format: `WoffUrl` for WOFF, `Woff2Url` for the compressed WOFF 2.0 variant, `TrueTypeUrl` for TTF, and `OpenTypeUrl` for OTF. Browsers and SVG renderers pick the first format they support, so supplying multiple URLs maximises compatibility across environments. The `FontFamily` property exposes the CSS font-family name derived from the configuration, ready for injection into the SVG `<style>` block. `FallbackFont` holds the `LocalFont` passed at construction time; when all remote URLs are unreachable or the renderer does not support web fonts, the fallback keeps text legible using a locally installed typeface.

All constructor parameters are optional. Passing only a `woff2Url` is enough for modern browser targets, while adding a `trueTypeUrl` alongside it covers legacy renderers. Passing a `LocalFont` as `fallbackFont` is recommended for any production pipeline where network access cannot be guaranteed. The `Equals` and `GetHashCode` overrides make `WebFont` instances safe to use as dictionary keys or in LINQ distinct operations, and `ToString` returns a human-readable summary useful for logging and diagnostics.

Because `WebFont` derives from `Font`, it slots into any API surface that accepts the base type, keeping font configuration uniform whether you are working with local or remote typefaces. This design means switching between a `LocalFont` and a `WebFont` requires only a constructor change, not a restructuring of the conversion call.

```csharp
using PdfToSvg;

// Serve WOFF 2.0 with a WOFF fallback; use Arial locally when offline.
var webFont = new WebFont(
    fallbackFont : new LocalFont("Arial"),
    woff2Url     : "https://example.com/fonts/opensans.woff2",
    woffUrl      : "https://example.com/fonts/opensans.woff"
);

Console.WriteLine(webFont.FontFamily);   // CSS font-family name
Console.WriteLine(webFont.FallbackFont); // LocalFont("Arial")
```

For a broader look at PDF-to-SVG conversion options, see the [IronPDF documentation hub](https://ironpdf.com/docs/), the [PDF to SVG how-to guide](https://ironpdf.com/how-to/pdf-to-svg/), and the [font handling examples](https://ironpdf.com/examples/pdf-to-svg-fonts/). Getting started quickly is covered on the [IronPDF get-started page](https://ironpdf.com/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WebFont Class - IronPDF C# API Reference`
- v2 (human): `WebFont: SVG Web Font Config in C# IronPDF`
- v3 (balanced): `WebFont Class | IronPDF PdfToSvg C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure web fonts for PDF-to-SVG conversion in C# with the IronPDF WebFont class. Supply WOFF, WOFF2, TTF, or OTF URLs plus a LocalFont fallback.`
- v2 (human): `Use WebFont in IronPDF to embed remote typefaces in SVG output: set WOFF2, WOFF, TTF, and OTF URLs with a local fallback font for offline safety.`
- v3 (balanced): `Reference for IronPDF WebFont in C#: configure WOFF, WOFF2, TTF, and OTF URLs plus a LocalFont fallback for accurate PDF-to-SVG font rendering.`

---

## Structured data

**TechArticle abstract**

> When converting PDFs to SVG in C#, WebFont provides the URL slots and fallback configuration that control how remote typefaces are embedded in the output. Construct a WebFont with up to four format URLs (WoffUrl, Woff2Url, TrueTypeUrl, OpenTypeUrl) and an optional LocalFont fallback, then pass the instance wherever the IronPDF conversion pipeline accepts a Font. The FontFamily property exposes the derived CSS name, and Equals plus GetHashCode make instances safe as dictionary keys.

**FAQPage entries**

```json
[
  {
    "question": "Where does WebFont live in the IronPDF API?",
    "answer": "WebFont is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It extends the Font base type and is constructed with new WebFont(), accepting optional LocalFont and URL parameters for WOFF, WOFF2, TTF, and OTF formats."
  },
  {
    "question": "How do you supply a fallback font when remote URLs are unavailable?",
    "answer": "Pass a LocalFont instance as the fallbackFont parameter of the WebFont constructor. The FallbackFont property then exposes it, and the SVG renderer uses it when all remote font URLs are unreachable or unsupported."
  },
  {
    "question": "How do you maximise browser compatibility when using WebFont?",
    "answer": "Populate multiple URL properties: set Woff2Url for modern browsers, WoffUrl for broader support, and TrueTypeUrl or OpenTypeUrl for legacy renderers. The SVG output includes each supplied format so the renderer picks the first one it supports."
  },
  {
    "question": "Can WebFont instances be compared or used as dictionary keys in C#?",
    "answer": "Yes. WebFont overrides Equals and GetHashCode, so instances can be compared for equality and used safely as keys in Dictionary or HashSet collections, and in LINQ distinct operations."
  }
]
```