<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Engines.Chrome.ChromeGpuModes.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `ChromeGpuModes` enumeration in IronPDF controls how the embedded Chromium engine uses GPU hardware when rendering HTML to PDF, and is assigned via `Installation.ChromeGpuMode`.

It belongs to the `IronPdf.Engines.Chrome` namespace and exposes four values: `Disabled`, `Software`, `Hardware`, and `HardwareFull`. Most servers stay on `Disabled` or `Software`; `Hardware` unlocks WebGL and shader-based content.

See [Render WebGL Sites](https://ironpdf.com/how-to/render-webgl/) for a complete Hardware-mode setup.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChromeGpuModes Enum - IronPDF C# API Reference`
- v2 (human): `ChromeGpuModes: IronPDF Chromium GPU Modes in C#`
- v3 (balanced): `ChromeGpuModes Enum | IronPDF C# Chrome GPU`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ChromeGpuModes is the IronPDF enumeration for Chromium GPU acceleration in C#. Members: Disabled, Software, Hardware, HardwareFull.`
- v2 (human): `IronPDF ChromeGpuModes enumeration for C#: controls how the embedded Chromium engine uses GPU hardware when rendering HTML to PDF.`
- v3 (balanced): `ChromeGpuModes (Chrome Engine) in IronPDF for C#: selects GPU acceleration for the embedded Chromium renderer. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The ChromeGpuModes enumeration in IronPDF lives in the IronPdf.Engines.Chrome namespace, derived from Enum, controlling how the embedded Chromium engine uses GPU hardware when rendering HTML to PDF. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
