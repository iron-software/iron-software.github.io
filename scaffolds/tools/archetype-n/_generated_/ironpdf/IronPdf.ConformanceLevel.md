<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.ConformanceLevel.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `ConformanceLevel` enumeration in IronPDF declares the ZUGFeRD or Factur-X profile asserted in the XMP metadata of an embedded e-invoice XML.

Part of the `IronPdf` namespace, it includes `BASIC`, `BASICWL`, `COMFORT`, and 4 others (7 total). The value is written by `PdfMetaData` when a PDF/A-3 hybrid invoice is produced, signalling to downstream readers which structured-data subset to expect.

See the [PDF/A guide](https://ironpdf.com/how-to/pdfa/) for e-invoice workflows.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ConformanceLevel Enum - IronPDF C# API Reference`
- v2 (human): `ConformanceLevel: IronPDF ZUGFeRD e-Invoices in C#`
- v3 (balanced): `ConformanceLevel Enum | IronPDF ZUGFeRD / Factur-X`

**Meta-description (120-160 chars)**
- v1 (algorithm): `ConformanceLevel is the IronPDF enumeration declaring the ZUGFeRD or Factur-X profile written into PDF/A-3 e-invoice XMP metadata in C#.`
- v2 (human): `IronPDF ConformanceLevel enumeration for C#: declares the ZUGFeRD/Factur-X profile (BASIC, COMFORT, and 5 others) for embedded e-invoice XML.`
- v3 (balanced): `ConformanceLevel in IronPDF for C# selects the ZUGFeRD or Factur-X profile asserted in the XMP metadata of a PDF/A-3 hybrid e-invoice.`

---

## Structured data

**TechArticle abstract**

> The ConformanceLevel enumeration in IronPDF lives in the IronPdf namespace, derived from Enum, representing the conformance level of embedded XML applied to XMP metadata for ZUGFeRD and Factur-X e-invoices. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.
