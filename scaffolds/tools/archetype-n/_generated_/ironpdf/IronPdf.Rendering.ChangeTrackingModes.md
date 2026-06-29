<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Rendering.ChangeTrackingModes.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `ChangeTrackingModes` enumeration in IronPDF controls whether object hashes are generated when a document is opened, which underpins reliable revision history and incremental save workflows.

Part of the `IronPdf.Rendering` namespace, declared values are `EnableChangeTracking`, `DisableChangeTracking`, and `AutoChangeTracking` (3 total). The mode is passed to `PdfDocument` constructors that accept a `TrackChanges` parameter alongside `SaveAsRevision`.

See [revision history](https://ironpdf.com/how-to/revision-history/) for end-to-end C# usage.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChangeTrackingModes Enum - IronPDF C# API Reference`
- v2 (human): `ChangeTrackingModes: IronPDF PDF Rendering in C#`
- v3 (balanced): `ChangeTrackingModes Enum | IronPDF C# PDF Rendering`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ChangeTrackingModes is the IronPDF enumeration for PDF rendering in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF ChangeTrackingModes enumeration reference for C#: determines if hashes are generated of all objects upon opening a document.`
- v3 (balanced): `ChangeTrackingModes (PDF Rendering) in IronPDF for C#: determines if hashes are generated of all objects upon opening a document. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The ChangeTrackingModes enumeration in IronPDF lives in the IronPdf.Rendering namespace, derived from Enum and determines if hashes are generated of all objects upon opening a document. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.