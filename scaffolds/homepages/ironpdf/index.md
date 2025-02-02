# IronPDF

IronPDF is a .NET library allowing the generation, reading, editing & saving PDF files in .NET projects.

IronPDF features HTML to PDF for .NET Core, Standard, & Framework with full HTML to PDF support including CSS3 and JS.

There is a quick-start guide at <https://ironpdf.com/docs/>

## Compatibility

Welcome the the cutting edge of .NET PDF rendering and manipulation technology with IronPDF now featuring Chrome identical HTML rendering with full support for:

- Generate PDFs in C# with HTML, MVC, ASPX, & images.
- Supports .NET Core 2, 3 & .NET 5, 6, 7, 8 for Windows, Linux, macOs and Azure.
- Supports applications and websites developed in .NET FrameWork 4+ for Windows and Azure
- HTML5
- Bootstrap and Responsive CSS3
- JavaScript including Angular and React
- SVG and all common image assets

## To Install

```shell
PM> Install-Package IronPdf
```

Remove any reference to IronPdf.Threading which is now legacy software. The IronPdf main package is threading and async compatible!

### Try out the new 2021 API

We haven't broken the IronPDF API you are using, it will remain!

However, the old style is being superseded by a better one to give you more control. For examples you now have Print options and Http Login controls specific to your renderer

```cs
using IronPdf;

//...

ChromePdfRenderer Renderer = new ChromePdfRenderer();
Renderer.RenderingOptions.FitToPaperWidth = true;
Renderer.RenderingOptions.CssMediaType = IronPdf.Rendering.PdfCssMediaType.Screen;
Renderer.RenderingOptions.PrintHtmlBackgrounds = true;
Renderer.RenderingOptions.CreatePdfFormsFromHtml = true;
var doc = Renderer.RenderHtmlAsPdf("<h1>Hello world!</h1>");
//var doc = Renderer.RenderUrlAsPdf("https://www.google.com/");
//var doc = Renderer.RenderHtmlFileAsPdf("example.html");
doc.SaveAs("google_chrome.pdf");
```

### Pixel perfect Chrome rendering

This example will give you PDFs which are pixel perfect to the latest chrome desktop browser's "print to pdf" functionality:

```cs
ChromePdfRenderer Renderer = new ChromePdfRenderer();
Renderer.RenderingOptions.CssMediaType = IronPdf.Rendering.PdfCssMediaType.Print;
Renderer.RenderingOptions.PrintHtmlBackgrounds = false;
Renderer.RenderingOptions.CreatePdfFormsFromHtml = false;
var doc = Renderer.RenderUrlAsPdf("https://www.google.com/");
```

### However...we would recommend using improved features such as:

Using screen stylesheets to print PDFs which are less fiddly to develop and more true to existing web assets.

- Responsive layout support
- Creating PDF Forms from your HTML form elements.

```cs
ChromePdfRenderer Renderer = new ChromePdfRenderer();
Renderer.RenderingOptions.CssMediaType = IronPdf.Rendering.PdfCssMediaType.Screen;
Renderer.RenderingOptions.PrintHtmlBackgrounds = true;
Renderer.RenderingOptions.CreatePdfFormsFromHtml = true;
Renderer.RenderingOptions.ViewPortWidth = 1080 ; //px
var doc = Renderer.RenderUrlAsPdf("https://www.google.com/");
```

### Use every CPU core available

Multithreading and Async support for our Chrome rendering engine is in a different league to all previous builds.

For enterprise grade multi-threading use our Chrome in your existing threads and it will work. For web applications this also takes zero setup.

For batch processing for HtmlToPdf we suggest using the built in .NET Parallel.ForEach

We love async and have provided Async variants of methods such as ChromePdfRenderer.RenderHtmlAsPdf

## Documentation Links

- Code Samples : <https://ironpdf.com/examples/using-html-to-create-a-pdf/>
- MSDN Class Reference : [https://ironpdf.com/object-reference/api/](index.html)
- How-To Guides : <https://ironpdf.com/how-to/html-file-to-pdf/>
- Tutorials : <https://ironpdf.com/tutorials/html-to-pdf/>
- Support : <developers@ironsoftware.com>

## MSDN Style Class Reference

Explore the [IronPDF API](xref:IronPdf) in the left navigation of this page.

Popular Links include:

- [IronPdf Namespace](xref:IronPdf) Index of all IronPdf Classes
- [IronPdf.ChromePdfRenderer](xref:IronPdf.ChromePdfRenderer) Html to PDF generator
- [IronPdf.ChromePdfRenderOptions](xref:IronPdf.ChromePdfRenderOptions) Html to PDF generation settings
- [IronPdf.AspxToPdf](xref:IronPdf.AspxToPdf) ASPX to PDF generator
- [IronPdf.ImageToPdfConverter](xref:IronPdf.ImageToPdfConverter) Image to PDF generator
- [IronPdf.PdfDocument](xref:IronPdf.PdfDocument) A class to open, manipulate, extract data and save PDF files
