<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.SchemaPrefix.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `SchemaPrefix` enumeration in IronPDF declares the short XMP prefix paired with `SchemaNamespace` when an XML payload is embedded into a PDF/A-3 file for e-invoicing.

It belongs to the `IronPdf` namespace and exposes three values: `fx` (default, used with Factur-X), `zf` (ZUGFeRD), and `rsm`. The prefix should match the schema chosen for the embedded XML.

See [Export PDF/A Format Docs in C#](https://ironpdf.com/how-to/pdfa/) for a full PdfAOptions example.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SchemaPrefix Enum - IronPDF C# API Reference`
- v2 (human): `SchemaPrefix: IronPDF XMP Schema Prefix in C#`
- v3 (balanced): `SchemaPrefix Enum | IronPDF C# PDF/A Prefix`

**Meta-description (120-160 chars)**
- v1 (algorithm): `SchemaPrefix is the IronPDF enumeration for XMP schema prefixes in C#. Members: fx (Factur-X), zf (ZUGFeRD), rsm.`
- v2 (human): `IronPDF SchemaPrefix enumeration for C#: declares the short XMP prefix paired with SchemaNamespace for PDF/A-3 e-invoicing payloads.`
- v3 (balanced): `SchemaPrefix (PDF/A XMP) in IronPDF for C#: picks the fx, zf, or rsm prefix for embedded XML metadata. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The SchemaPrefix enumeration in IronPDF lives in the IronPdf namespace, derived from Enum, declaring the short XMP prefix paired with SchemaNamespace when an XML payload is embedded into a PDF/A-3 file. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
