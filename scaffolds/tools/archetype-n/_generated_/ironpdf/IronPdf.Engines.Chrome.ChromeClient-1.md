<!--
N-Full (class, 16 members). Frame B (identity-by-role). IronPdf.
ChromeClient<T> verified members: RenderPDFFromHTML, RenderPDFFromURI, RenderPDFFromFile, RenderPDFFromZIP, RenderPDFFromImages, AddHtmlHeadersAndFooters, AddStamp, AddStamps, ApplyCookies, ClearCookies, MeasureHTML, ExtractImagesFromMultiFrameImageFormats, Dispose, Initialize, Finalize, ctor.
Target: IronPdf.Engines.Chrome namespace, IronPdf.dll
-->

## Injected overview (Markdown)

Rendering HTML, URIs, files, ZIP archives, and images into PDF documents is the central job of `ChromeClient<T>`, the native-interop handle that bridges managed C# code to IronPDF's Chromium rendering engine. Every render call is queued through an internal job manager so that concurrent requests are serialized safely without blocking the calling thread longer than necessary.

Construct the client by passing an `IPdfClient` to `ChromeClient(IPdfClient pdfClient)`. From that point the client exposes five distinct rendering paths, plus annotation, stamping, cookie management, and measurement utilities. The generic constraint `where T : ChromeDeploymentBase` lets the runtime select the correct native deployment without any additional configuration from the caller.

**Rendering paths**

- `RenderPDFFromHTML`: converts an HTML string with a base `Uri`, optional proxy, `ChromePdfRenderOptions`, and `ChromeHttpLoginCredentials` into a document ID and a metadata string.
- `RenderPDFFromURI`: fetches and renders a live URL, accepting `ChromePdfRenderOptions` and `ChromeHttpLoginCredentials`.
- `RenderPDFFromFile`: renders a local file path, returning the same `(IDocumentId, string)` tuple.
- `RenderPDFFromZIP`: accepts a ZIP archive as a `byte[]` together with the name of the entry point file, useful for self-contained HTML bundles with embedded assets.
- `RenderPDFFromImages`: converts a list of image paths or raw `(byte[], string)` pairs into a PDF, with `ImageBehavior` controlling layout.

**Post-render operations**

- `AddHtmlHeadersAndFooters`: stamps HTML-based headers and footers onto specified pages, respecting owner and user passwords.
- `AddStamp` / `AddStamps`: applies one or multiple `Stamper` objects to a set of `IPdfPage` instances.
- `MeasureHTML`: returns a `Size` for an HTML fragment without producing a PDF, useful for layout pre-checks.

**Session utilities**

- `ApplyCookies`: associates a `Dictionary<string, string>` of cookies with a URL before a render call.
- `ClearCookies`: removes all cookies from the current session.
- `ExtractImagesFromMultiFrameImageFormats`: a static helper that expands multi-frame image files (such as animated GIFs or multi-page TIFFs) into individual frame paths before passing them to `RenderPDFFromImages`.

Call `Dispose` when the client is no longer needed; the protected `Finalize` override provides a safety net, but explicit disposal is preferred.

```csharp
using IronPdf.Engines.Chrome;
using IronPdf.Rendering;

// Obtain an IPdfClient from the IronPDF infrastructure, then:
using var client = new ChromeClient<ChromeDeploymentBase>(pdfClient);

var renderOptions = new ChromePdfRenderOptions { MarginTop = 10 };
var credentials   = new ChromeHttpLoginCredentials();

var (docId, meta) = client.RenderPDFFromHTML(
    "<h1>Hello, IronPDF</h1>",
    baseUrl: new Uri("https://example.com"),
    proxy: null,
    renderOptions,
    credentials);

Console.WriteLine($"Document ID: {docId}  |  Meta: {meta}");
```

For broader context on PDF generation options, see the [IronPDF documentation hub](https://ironpdf.com/docs/), the [HTML-to-PDF how-to](https://ironpdf.com/how-to/html-to-pdf/), the [stamping how-to](https://ironpdf.com/how-to/stamp-text-image-pdf/), and the [getting-started guide](https://ironpdf.com/get-started/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChromeClient Class - IronPDF C# API Reference`
- v2 (human): `ChromeClient: Render PDFs via Chromium in C#`
- v3 (balanced): `ChromeClient<T> Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use IronPDF ChromeClient<T> in C# to render PDFs from HTML, URIs, files, ZIPs, and images via native Chromium interop with queued job management.`
- v2 (human): `ChromeClient<T> is IronPDF's Chromium render handle: convert HTML, URLs, files, and images to PDF, add stamps, manage cookies, and measure layouts.`
- v3 (balanced): `Reference for IronPDF ChromeClient<T>: render PDFs from HTML, URIs, ZIPs, and images in C# using native Chromium interop and job-queue management.`

---

## Structured data

**TechArticle abstract**

> Rendering HTML strings, live URIs, local files, ZIP bundles, and image collections into PDF documents is the primary role of ChromeClient<T> in the IronPdf.Engines.Chrome namespace (IronPdf.dll). Constructed with an IPdfClient, the client queues every render request through an internal job manager and exposes five rendering methods: RenderPDFFromHTML, RenderPDFFromURI, RenderPDFFromFile, RenderPDFFromZIP, and RenderPDFFromImages. Post-render operations include AddHtmlHeadersAndFooters, AddStamp, AddStamps, and MeasureHTML. Cookie state is managed with ApplyCookies and ClearCookies. The generic constraint requires T to derive from ChromeDeploymentBase.

**FAQPage entries**

```json
[
  {
    "question": "Where does ChromeClient<T> live in the IronPDF API?",
    "answer": "ChromeClient<T> is a class in the IronPdf.Engines.Chrome namespace, shipped in IronPdf.dll. Its base type is Object, with the generic constraint requiring T to derive from ChromeDeploymentBase. Construct it by passing an IPdfClient to the ChromeClient(IPdfClient) constructor."
  },
  {
    "question": "How do you render an HTML string to PDF using ChromeClient<T>?",
    "answer": "Construct a ChromeClient<T> with an IPdfClient, then call RenderPDFFromHTML, passing the HTML string, a base Uri, an optional proxy string, a ChromePdfRenderOptions instance, and ChromeHttpLoginCredentials. The method returns a tuple of (IDocumentId, string) representing the document handle and associated metadata."
  },
  {
    "question": "What rendering sources does ChromeClient<T> support?",
    "answer": "ChromeClient<T> supports five rendering sources: HTML strings via RenderPDFFromHTML, live URLs via RenderPDFFromURI, local file paths via RenderPDFFromFile, ZIP archives via RenderPDFFromZIP, and image collections via RenderPDFFromImages. The static ExtractImagesFromMultiFrameImageFormats helper expands multi-frame images before passing them to RenderPDFFromImages."
  },
  {
    "question": "How do you add stamps or headers to a PDF with ChromeClient<T>?",
    "answer": "After rendering, call AddStamp or AddStamps with the IDocumentId, owner and user passwords, one or more Stamper objects, and the target IPdfPage collection. For HTML-based headers and footers, use AddHtmlHeadersAndFooters, which accepts ChromePdfRenderOptions and a list of page numbers."
  }
]
```