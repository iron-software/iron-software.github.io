<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Rendering.RequestContexts.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `RequestContexts` enumeration in IronPDF controls how browser state such as cookies and cache is shared across individual renders.

Part of the `IronPdf.Rendering` namespace, declared values are `Auto`, `Isolated`, and `Global` (3 total). The value is assigned to `ChromePdfRenderOptions.RequestContext` so that `Isolated` renders stay sandboxed, while `Global` lets sessions persist between calls to `RenderHtmlAsPdf` or `RenderUrlAsPdf`.

See [cookies](https://ironpdf.com/how-to/cookies/) for typical C# usage.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RequestContexts Enum - IronPDF C# API Reference`
- v2 (human): `RequestContexts: IronPDF PDF Rendering in C#`
- v3 (balanced): `RequestContexts Enum | IronPDF C# PDF Rendering`

**Meta-description (120-160 chars)**
- v1 (algorithm): `RequestContexts is the IronPDF enumeration for PDF rendering in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF RequestContexts enumeration reference for C#: browser request contexts for defining relationship between the browser...`
- v3 (balanced): `RequestContexts (PDF Rendering) in IronPDF for C#: browser request contexts for defining relationship between the browser... See members and usage.`

---

## Structured data

**TechArticle abstract**

> The RequestContexts enumeration in IronPDF lives in the IronPdf.Rendering namespace, derived from Enum, representing browser request contexts for defining relationship between the browser request contexts of individual renders. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.