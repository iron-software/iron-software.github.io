<!--
N-Full (class, 7 members). Frame: feature-fronted prose lead, when-fronted abstract. IronPdf.
HtmlHeaderFooter, base TextHeaderFooter, namespace IronPdf, assembly IronPdf.dll.
Members verified: HtmlHeaderFooter(), FragmentHeight, BaseUrl, HtmlFragment, LoadStylesAndCSSFromMainHtmlDocument, MaxHeight, Clone().
Target: IronPdf.HtmlHeaderFooter API reference page.
-->

## Injected overview (Markdown)

Full HTML rendering in PDF headers and footers becomes available through `HtmlHeaderFooter`. Assign any HTML snippet to `HtmlFragment` and IronPDF stamps it across every page of the output document, giving you pixel-accurate control over fonts, images, tables, and brand colours that plain-text headers cannot achieve. The class extends `TextHeaderFooter`, so it slots directly into the same `HtmlToPdf` and `PdfDocument` rendering pipeline.

`HtmlFragment` is the central property. Set it to a self-contained HTML string and use the built-in placeholder tokens to inject live values at render time: `{page}` for the current page number, `{total-pages}` for the document length, `{date}` and `{time}` for the render timestamp, `{url}` for the source URL, `{html-title}` for the page title, and `{pdf-title}` for the PDF document title. These tokens are resolved per-page, so a footer reading "Page {page} of {total-pages}" always reflects the correct values without any extra code.

When the header or footer references external stylesheets, web fonts, or images hosted relative to the source document, set `BaseUrl` to the root URL or local directory path so that the renderer can resolve those resources correctly. If the main HTML document already loads a stylesheet you want to reuse in the header, set `LoadStylesAndCSSFromMainHtmlDocument` to `true` and IronPDF will carry those styles across automatically, keeping the visual language consistent without duplicating CSS.

`MaxHeight` accepts a nullable integer (in millimetres) that caps how tall the header or footer region can grow. Leave it `null` to let the content determine the height. The constant `FragmentHeight` exposes the internal sentinel value used when no explicit cap is set. `Clone()` produces a deep copy of the configured object, which is useful when you need slightly different headers for different rendering passes without rebuilding from scratch.

```csharp
using IronPdf;

var renderer = new ChromePdfRenderer();
renderer.RenderingOptions.HtmlFooter = new HtmlHeaderFooter
{
    MaxHeight = 15,
    HtmlFragment = "<div style='font-family:Arial;font-size:10px;text-align:right'>" +
                   "Page {page} of {total-pages} &nbsp;|&nbsp; {date}</div>",
    LoadStylesAndCSSFromMainHtmlDocument = false
};

using PdfDocument pdf = renderer.RenderHtmlAsPdf("<h1>Annual Report</h1><p>Content here.</p>");
pdf.SaveAs("report.pdf");
```

For a broader introduction to PDF generation, visit the [IronPDF documentation hub](https://ironpdf.com/docs/). Step-by-step guidance on stamping headers and footers is covered in the [HTML header and footer how-to](https://ironpdf.com/how-to/html-header-footer/), and runnable snippets are available on the [header and footer examples page](https://ironpdf.com/examples/html-headers-and-footers/). Licensing and trial options are on the [get-started page](https://ironpdf.com/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `HtmlHeaderFooter Class - IronPDF C# API Reference`
- v2 (human): `HtmlHeaderFooter: HTML Headers & Footers in C#`
- v3 (balanced): `HtmlHeaderFooter Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add HTML headers and footers to PDFs in C# with IronPDF HtmlHeaderFooter. Set HtmlFragment with page, date, and title placeholders for every page.`
- v2 (human): `Stamp rich HTML headers and footers on every PDF page in C# using IronPDF's HtmlHeaderFooter class, with live placeholders for page numbers and dates.`
- v3 (balanced): `Reference for IronPDF HtmlHeaderFooter in C#: set HtmlFragment with placeholders like {page} and {date} to render HTML headers and footers on every page.`

---

## Structured data

**TechArticle abstract**

> When a PDF needs rich, branded headers or footers in C#, HtmlHeaderFooter in the IronPdf namespace (IronPdf.dll) delivers full HTML rendering on every page. Assign an HTML string to HtmlFragment, embed placeholder tokens such as {page}, {total-pages}, {date}, and {time} for per-page values, and attach the object to the rendering options of a ChromePdfRenderer. Set BaseUrl to resolve relative assets, enable LoadStylesAndCSSFromMainHtmlDocument to inherit the main document's CSS, and use MaxHeight to constrain the footer region height in millimetres. The class extends TextHeaderFooter and supports Clone() for reuse across multiple rendering passes.

**FAQPage entries**

```json
[
  {
    "question": "Where does HtmlHeaderFooter live in the IronPDF API?",
    "answer": "HtmlHeaderFooter is a class in the IronPdf namespace, shipped in IronPdf.dll. It extends TextHeaderFooter and is constructed with new HtmlHeaderFooter(), then assigned to the HtmlHeader or HtmlFooter property of ChromePdfRenderer.RenderingOptions."
  },
  {
    "question": "Which placeholder tokens does HtmlHeaderFooter support?",
    "answer": "HtmlHeaderFooter resolves six tokens inside HtmlFragment at render time: {page} for the current page number, {total-pages} for the document page count, {date} and {time} for the render timestamp, {url} for the source URL, {html-title} for the HTML page title, and {pdf-title} for the PDF document title."
  },
  {
    "question": "How do you load external styles into an HtmlHeaderFooter in C#?",
    "answer": "Set BaseUrl to the root URL or directory path so the renderer can fetch linked stylesheets, fonts, and images. Alternatively, set LoadStylesAndCSSFromMainHtmlDocument to true to inherit CSS already loaded by the main HTML document, avoiding duplication."
  },
  {
    "question": "How do you control the height of an HtmlHeaderFooter?",
    "answer": "Set the MaxHeight property to an integer value in millimetres to cap the header or footer region. Leave it null to let the HTML content determine the height automatically. The FragmentHeight constant holds the internal sentinel used when no explicit maximum is applied."
  }
]
```