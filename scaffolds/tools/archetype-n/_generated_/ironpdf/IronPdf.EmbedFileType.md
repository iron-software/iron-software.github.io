<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.EmbedFileType.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `EmbedFileType` enumeration in IronPDF declares the MIME class of a payload attached to a PDF/A-3 document.

Part of the `IronPdf` namespace, members are `pdf`, `png`, and `xml` (3 total). `EmbedFileConfiguration` reads the value to tag each attachment correctly, which matters for ZUGFeRD invoices where the embedded XML must be discoverable by archival readers.

See [add and remove attachments](https://ironpdf.com/how-to/add-remove-attachments/) for the embedding workflow.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `EmbedFileType Enum - IronPDF C# API Reference`
- v2 (human): `EmbedFileType: IronPDF PDF/A-3 Attachments in C#`
- v3 (balanced): `EmbedFileType Enum | IronPDF C# PDF/A-3 Attachments`

**Meta-description (120-160 chars)**
- v1 (algorithm): `EmbedFileType is the IronPDF enumeration that tags attachment MIME types (pdf, png, xml) for PDF/A-3 compliant embedded payloads in C#.`
- v2 (human): `IronPDF EmbedFileType enumeration for C#: tags PDF/A-3 attachments as pdf, png, or xml so archival readers can discover embedded payloads.`
- v3 (balanced): `EmbedFileType in IronPDF for C# declares the MIME class (pdf, png, xml) used by EmbedFileConfiguration when attaching files to PDF/A-3 documents.`

---

## Structured data

**TechArticle abstract**

> The EmbedFileType enumeration in IronPDF lives in the IronPdf namespace, derived from Enum, representing the supported MIME classes for files embedded in PDF/A-3 compliant documents. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
