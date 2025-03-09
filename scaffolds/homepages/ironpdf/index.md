# IronPDF

IronPDF is a .NET library that allows you to generate, read, edit, and save PDF files in .NET projects.

IronPDF supports HTML to PDF conversion for .NET Core, .NET Standard, and .NET Framework, with full compatibility for CSS3 and JavaScript.

A quick-start guide is available at <https://ironpdf.com/docs/>

## Compatibility

Welcome the the cutting edge of .NET PDF rendering and manipulation technology with IronPDF now featuring Chrome identical HTML rendering with full support for:

- Generating PDFs from: HTML, URL, JavaScript, CSS and many image formats.
- .NET 9, .NET 8, .NET 7, .NET 6, .NET 5, and .NET Core, Standard, and Framework 4.6.2+
- Windows, macOS, Linux, Docker, Azure, and AWS
- Console, Desktop, and Web Apps. MVC, Blazor, MAUI, Razor Pages, Web Forms
- And many more! Visit our website to see all our code examples and a full list of our 50+ features

## To Install

```shell
PM> Install-Package IronPdf
```

### Pixel Perfect Chrome Rendering!

We haven’t changed the IronPDF API you are using. It will remain the same!

However, the old style is being replaced with a better version to give you more control. For example, you now have access to print options and HTTP login controls specific to your renderer.

```cs
using IronPdf;

// Instantiate Chrome renderer
ChromePdfRenderer renderer = new ChromePdfRenderer();

// Configure rendering engine
renderer.RenderingOptions.PaperFit.UseFitToPageRendering();
renderer.RenderingOptions.CssMediaType = IronPdf.Rendering.PdfCssMediaType.Screen;
renderer.RenderingOptions.PrintHtmlBackgrounds = true;
renderer.RenderingOptions.CreatePdfFormsFromHtml = true;

// Render HTML string to PDF
var pdf = renderer.RenderHtmlAsPdf("<h1>Hello world!</h1>");

// Render URL to PDF
//var pdf = Renderer.RenderUrlAsPdf("https://www.google.com/");

// Render HTML file to PDF
//var pdf = Renderer.RenderHtmlFileAsPdf("example.html");

// Export PDF document
pdf.SaveAs("google_chrome.pdf");
```

### Use Chrome's Default Settings!

This example will generate PDFs that are pixel-perfect, matching the latest Chrome desktop browser’s 'Print to PDF' functionality.

```cs
// Instantiate Chrome renderer
ChromePdfRenderer renderer = new ChromePdfRenderer();

// Use Chrome default setting
renderer.RenderingOptions = ChromePdfRenderOptions.DefaultChrome;

var pdf = renderer.RenderUrlAsPdf("https://www.google.com/");
```

### Use Responsive Layout!

Using screen stylesheets to print PDFs which are less fiddly to develop and more true to existing web assets.

- Responsive layout support
- Creating PDF Forms from your HTML form elements

```cs
// Instantiate Chrome renderer
ChromePdfRenderer renderer = new ChromePdfRenderer();

// Configure rendering engine
renderer.RenderingOptions.CssMediaType = IronPdf.Rendering.PdfCssMediaType.Screen;
renderer.RenderingOptions.PrintHtmlBackgrounds = true;
renderer.RenderingOptions.CreatePdfFormsFromHtml = true;
renderer.RenderingOptions.PaperFit.UseResponsiveCssRendering(1080); //px

// Render URL to PDF
var pdf = renderer.RenderUrlAsPdf("https://www.google.com/");
```

### Use every CPU core available

Multithreading and Async support for our Chrome rendering engine is in a different league to all previous builds.

For enterprise grade multi-threading use our Chrome in your existing threads and it will work. For web applications this also takes zero setup.

For batch processing for HtmlToPdf we suggest using the built in .NET Parallel.ForEach.

We love async and have provided Async variants of methods such as ChromePdfRenderer.RenderHtmlAsPdf.

## Documentation Links

- Code Examples : <https://ironpdf.com/examples/using-html-to-create-a-pdf/>
- How-To Guides : <https://ironpdf.com/how-to/html-file-to-pdf/>
- Tutorials : <https://ironpdf.com/tutorials/html-to-pdf/>
- MSDN Class Reference : [https://ironpdf.com/object-reference/api/](index.html)
- Support : <support@ironsoftware.com>

## MSDN Style Class Reference

Explore the [IronPDF API](xref:IronPdf) in the left navigation of this page.

Popular Links include:

- [IronPdf Namespace](xref:IronPdf) Index of all IronPdf Classes
- [IronPdf.ChromePdfRenderer](xref:IronPdf.ChromePdfRenderer) Html to PDF generator
- [IronPdf.ChromePdfRenderOptions](xref:IronPdf.ChromePdfRenderOptions) Html to PDF generation settings
- [IronPdf.AspxToPdf](xref:IronPdf.AspxToPdf) ASPX to PDF generator
- [IronPdf.ImageToPdfConverter](xref:IronPdf.ImageToPdfConverter) Image to PDF generator
- [IronPdf.PdfDocument](xref:IronPdf.PdfDocument) A class to open, manipulate, extract data and save PDF files