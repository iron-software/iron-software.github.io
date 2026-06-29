<!--
N-Mid (0 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: IronPdf.ChromeClientAccessor class reference page.
-->

## Injected overview (Markdown)

Reaching the underlying Chrome rendering engine in IronPDF goes through `ChromeClientAccessor`, a gateway object that surfaces the Chrome client implementations IronPDF uses when converting HTML to PDF or rendering web content. Rather than constructing a renderer from scratch, you interact with `ChromeClientAccessor` to obtain and configure the Chrome client layer that powers `HtmlToPdf`, `ChromePdfRenderer`, and related rendering pipelines.

Because IronPDF delegates all HTML rendering to a managed Chromium process, `ChromeClientAccessor` sits at the boundary between the managed .NET API and that process. It exists so that advanced scenarios, such as tuning connection behavior, inspecting the active client state, or integrating custom rendering hooks, have a stable, typed entry point rather than relying on internal implementation details. For the majority of PDF generation tasks, the renderer classes handle everything automatically, and `ChromeClientAccessor` operates silently in the background. When precise control over the Chrome client layer is required, this object provides the access point.

`ChromeClientAccessor` inherits directly from `System.Object` and carries no public members of its own; its role is structural, acting as a typed handle that the IronPDF runtime resolves to the correct Chrome client implementation at runtime. This design keeps the public API stable even as the underlying Chromium integration evolves across IronPDF releases.

For typical HTML-to-PDF work, the [IronPDF getting-started guide](https://ironpdf.com/get-started/) and the [HTML to PDF how-to](https://ironpdf.com/how-to/html-file-to-pdf/) cover everything needed without touching `ChromeClientAccessor` directly.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChromeClientAccessor Class - IronPDF C# API`
- v2 (human): `ChromeClientAccessor: Chrome Client Access in C#`
- v3 (balanced): `ChromeClientAccessor Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ChromeClientAccessor in IronPDF provides access to Chrome client implementations used by the C# HTML-to-PDF rendering pipeline in IronPdf.dll.`
- v2 (human): `Use ChromeClientAccessor to reach the Chrome client layer powering IronPDF's HTML-to-PDF rendering in C#. Reference for IronPdf.dll.`
- v3 (balanced): `Reference for the IronPDF ChromeClientAccessor class in C#: a typed gateway to the Chrome client implementations behind HTML-to-PDF rendering.`

---

## Structured data

**TechArticle abstract**

> ChromeClientAccessor provides access to the Chrome client implementations that power IronPDF's HTML-to-PDF rendering pipeline in C#. Declared in the IronPdf namespace and shipped in IronPdf.dll, it acts as a typed handle between the managed .NET API and the underlying Chromium process, giving advanced scenarios a stable entry point for inspecting or configuring the Chrome client layer.

**FAQPage entries**

```json
[
  {
    "question": "Where does ChromeClientAccessor live in the IronPDF API?",
    "answer": "ChromeClientAccessor is a class in the IronPdf namespace, shipped in IronPdf.dll. It derives directly from System.Object and serves as the typed gateway to Chrome client implementations used by IronPDF's rendering pipeline."
  },
  {
    "question": "When do you need to use ChromeClientAccessor directly?",
    "answer": "For standard HTML-to-PDF generation, ChromeClientAccessor operates automatically in the background through classes like ChromePdfRenderer. Direct interaction is relevant only in advanced scenarios that require inspecting or configuring the Chrome client layer at runtime."
  }
]
```