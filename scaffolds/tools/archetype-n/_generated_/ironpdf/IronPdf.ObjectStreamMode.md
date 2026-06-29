<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.ObjectStreamMode.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `ObjectStreamMode` enumeration in IronPDF declares how indirect PDF objects are packed when a document is serialised.

Part of the `IronPdf` namespace, members are `Disable`, `Generate`, and `Preserve` (3 total). `AdvancedCompressionOptions` exposes the value: `Generate` minimises file size by bundling objects, `Preserve` retains the source layout for incremental saves, and `Disable` produces a flat structure that older readers parse reliably.

See [PDF compression](https://ironpdf.com/how-to/pdf-compression/) for tuning details.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ObjectStreamMode Enum - IronPDF C# API Reference`
- v2 (human): `ObjectStreamMode: IronPDF Object Streams in C#`
- v3 (balanced): `ObjectStreamMode Enum | IronPDF C# Object Streams`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ObjectStreamMode is the IronPDF enumeration that packs indirect PDF objects (Disable, Generate, Preserve) when serialising a document in C#.`
- v2 (human): `IronPDF ObjectStreamMode for C#: Generate minimises file size by bundling objects, Preserve retains source layout, Disable keeps a flat structure.`
- v3 (balanced): `ObjectStreamMode in IronPDF for C# selects how AdvancedCompressionOptions packs indirect objects (Disable, Generate, Preserve) during PDF write.`

---

## Structured data

**TechArticle abstract**

> The ObjectStreamMode enumeration in IronPDF lives in the IronPdf namespace, derived from Enum, representing the object-stream mode applied when writing a compressed PDF. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
