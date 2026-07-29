<!--
N-Mid (5 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: IronPdf.Engines.Chrome.VirtualPaperLayoutManager1
-->

## Injected overview (Markdown)

Controlling how Chrome's rendering engine maps HTML content onto a virtual page is the job of `VirtualPaperLayoutManager1`. Before IronPDF converts a web page or HTML string to PDF, this object lets you pick the exact layout strategy that matches the content type: fixed-width continuous rolls, responsive breakpoints, scaled zoom, or standard Chrome defaults.

Five mutually exclusive methods define the available strategies. `UseChromeDefaultRendering` applies Chrome's built-in page layout without modification, a reliable baseline for most print-ready HTML. `UseContinuousFeedRendering` targets receipt-style or long-form output, accepting a `width` (default 80) and a `margin` (default 5) to produce a single unbroken column rather than paginated sheets. `UseFitToPageRendering` scales content to fill the page width, with a `MinimumPixelWidth` guard (default 1) that prevents content from collapsing below a usable size. `UseResponsiveCssRendering` sets a viewport width (default 1280 pixels) so that responsive CSS breakpoints fire correctly before the PDF snapshot is taken, which is particularly useful for dashboards and media-query-heavy layouts. `UseScaledRendering` applies a percentage zoom (default 100) to the entire page, giving precise control over content density when the source HTML renders too large or too small at its natural size.

Each call replaces the previous selection, so only the last method called before rendering takes effect. The class lives in `IronPdf.Engines.Chrome` and is part of the Chrome engine pipeline exposed by IronPDF's rendering configuration surface.

```csharp
using IronPdf;

var renderer = new ChromePdfRenderer();
renderer.RenderingOptions.VirtualPaperLayoutManager
    .UseResponsiveCssRendering(ViewPortWidth: 1440);

renderer.RenderHtmlAsPdf("<h1>Report</h1>").SaveAs("report.pdf");
```

For a broader look at rendering options, see the [IronPDF HTML to PDF how-to](https://ironpdf.com/how-to/html-file-to-pdf/) and the [custom paper size examples](https://ironpdf.com/examples/custom-pdf-paper-size/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `VirtualPaperLayoutManager1 Class - IronPDF C# API`
- v2 (human): `VirtualPaperLayoutManager1: PDF Layout Modes in C#`
- v3 (balanced): `VirtualPaperLayoutManager1 | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure Chrome PDF layout in C# with VirtualPaperLayoutManager1: continuous feed, fit-to-page, responsive CSS, scaled, or default rendering.`
- v2 (human): `Pick a PDF layout strategy in C# with IronPDF's VirtualPaperLayoutManager1: responsive CSS, continuous feed, fit-to-page, scaled, or Chrome default.`
- v3 (balanced): `Reference for IronPDF's VirtualPaperLayoutManager1 in C#: set Chrome rendering to continuous feed, responsive CSS, fit-to-page, scaled, or default.`

---

## Structured data

**TechArticle abstract**

> VirtualPaperLayoutManager1 controls how IronPDF's Chrome engine maps HTML onto a virtual page before PDF conversion in C#. Its five methods select a layout strategy: UseChromeDefaultRendering applies Chrome defaults, UseContinuousFeedRendering produces a single-column roll with configurable width and margin, UseFitToPageRendering scales content to page width, UseResponsiveCssRendering sets a viewport width so CSS breakpoints fire correctly, and UseScaledRendering applies a percentage zoom to the entire page.

**FAQPage entries**

```json
[
  {
    "question": "Where does VirtualPaperLayoutManager1 live in the IronPDF API?",
    "answer": "VirtualPaperLayoutManager1 is a class in the IronPdf.Engines.Chrome namespace, shipped in IronPdf.dll. It derives from Object and is accessed through IronPDF's Chrome rendering engine configuration pipeline."
  },
  {
    "question": "How do you apply a responsive CSS layout when rendering HTML to PDF in C#?",
    "answer": "Call UseResponsiveCssRendering on a VirtualPaperLayoutManager1 instance, passing the desired ViewPortWidth in pixels (default 1280). This causes Chrome to evaluate media queries at that viewport width before the PDF snapshot is taken, ensuring responsive layouts render at the correct breakpoint."
  }
]
```