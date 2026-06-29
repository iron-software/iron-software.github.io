<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.LinearizationMode.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `LinearizationMode` enumeration in IronPDF selects the build strategy used when emitting a Fast Web View (linearized) PDF.

Part of the `IronPdf` namespace, members are `Automatic`, `FileBased`, and `InMemory` (3 total). `FileBased` keeps peak memory low for large reports, `InMemory` is faster for short documents, and `Automatic` lets IronPDF pick based on document size.

See [linearize PDFs](https://ironpdf.com/how-to/linearize-pdf/) for the `SaveAsLinearized` workflow.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LinearizationMode Enum - IronPDF C# API Reference`
- v2 (human): `LinearizationMode: IronPDF Fast Web View in C#`
- v3 (balanced): `LinearizationMode Enum | IronPDF C# Linearized PDFs`

**Meta-description (120-160 chars)**
- v1 (algorithm): `LinearizationMode is the IronPDF enumeration that selects the build strategy (Automatic, FileBased, InMemory) for Fast Web View PDFs in C#.`
- v2 (human): `IronPDF LinearizationMode for C#: FileBased keeps memory low for large reports, InMemory is faster for short documents, Automatic picks by size.`
- v3 (balanced): `LinearizationMode in IronPDF for C# selects how SaveAsLinearized emits a Fast Web View PDF (Automatic, FileBased, InMemory) per document size.`

---

## Structured data

**TechArticle abstract**

> The LinearizationMode enumeration in IronPDF lives in the IronPdf namespace, derived from Enum and selects the build strategy used when producing a Fast Web View (linearized) PDF. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
