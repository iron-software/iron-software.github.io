<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Engines.Chrome.VirtualPaperLayoutManager.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Chrome engine in IronPDF is handled through `VirtualPaperLayoutManager`. It is part of the IronPDF Chrome engine API.

`VirtualPaperLayoutManager` matters when an application needs to configure or invoke Chrome engine from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `VirtualPaperLayoutManager`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key methods include `UseChromeDefaultRendering`, `UseContinuousFeedRendering`, `UseFitToPageRendering`, `UseResponsiveCssRendering`. Assign options or invoke methods on the instance to configure or perform the operation. The [ironpdf 2021 chrome rendering engine eap](https://ironpdf.com/how-to/ironpdf-2021-chrome-rendering-engine-eap/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain VirtualPaperLayoutManager from the relevant entry point in the IronPDF API
void Configure(VirtualPaperLayoutManager instance)
{
    instance.UseChromeDefaultRendering();
}
```

For the broader workflow, see the [custom paper size](https://ironpdf.com/how-to/custom-paper-size/) guide in the IronPDF C# documentation. For broader context, the Chrome engine portion of the IronPDF C# API contains related types that work with `VirtualPaperLayoutManager` directly. `VirtualPaperLayoutManager` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `VirtualPaperLayoutManager` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `VirtualPaperLayoutManager` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `VirtualPaperLayoutManager`. Application code typically obtains or instantiates a single `VirtualPaperLayoutManager` and shares it across multiple IronPDF operations rather than recreating it per call.

The full declaration uses the `VirtualPaperLayoutManager<T>` generic form; docfx encodes generic arity as a numeric URL suffix, so the URL path reads `VirtualPaperLayoutManager-1.html` even though the class name itself is the bare form with type parameters.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `VirtualPaperLayoutManager Class - IronPDF C# API Reference`
- v2 (human): `VirtualPaperLayoutManager: IronPDF Chrome Engine in C#`
- v3 (balanced): `VirtualPaperLayoutManager Class | IronPDF C# Chrome Engine`

**Meta-description (120-160 chars)**
- v1 (algorithm): `VirtualPaperLayoutManager is the IronPDF class for Chrome engine in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF VirtualPaperLayoutManager class reference for C#: the IronPDF class for Chrome engine.`
- v3 (balanced): `VirtualPaperLayoutManager (Chrome Engine) in IronPDF for C#: the IronPDF class for Chrome engine. See members and usage.`

---

## Structured data

**TechArticle abstract**

> VirtualPaperLayoutManager<T> is the IronPDF C# entry point for Chrome engine. VirtualPaperLayoutManager is in the IronPdf.Engines.Chrome namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Where does VirtualPaperLayoutManager live in the IronPDF API?",
    "answer": "VirtualPaperLayoutManager is in the IronPdf.Engines.Chrome namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the VirtualPaperLayoutManager class used for in C#?",
    "answer": "VirtualPaperLayoutManager is the IronPDF class that belongs to the IronPdf.Engines.Chrome namespace. It is part of the IronPdf.Engines.Chrome namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What methods are available on VirtualPaperLayoutManager?",
    "answer": "Common methods include UseChromeDefaultRendering, UseContinuousFeedRendering, UseFitToPageRendering, UseResponsiveCssRendering. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).