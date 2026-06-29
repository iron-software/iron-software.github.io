<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Signing.TimestampHashAlgorithms.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `TimestampHashAlgorithms` enumeration in IronPDF selects the digest used when requesting a trusted RFC 3161 timestamp during signing.

Part of the `IronPdf.Signing` namespace, the 3 members are `SHA256`, `SHA512`, and `SHA1`, with `SHA256` recommended for most timestamp authorities and `SHA1` retained for legacy TSA compatibility. Assign the chosen member to `PdfSignature.TimeStampHashAlgorithm` alongside the TSA URL.

See [Signing PDFs](https://ironpdf.com/how-to/signing/) for C# signing code.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TimestampHashAlgorithms Enum - IronPDF C# API Reference`
- v2 (human): `TimestampHashAlgorithms: IronPDF PDF Signing in C#`
- v3 (balanced): `TimestampHashAlgorithms Enum | IronPDF C# PDF Signing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `TimestampHashAlgorithms is the IronPDF enumeration for PDF signing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF TimestampHashAlgorithms enumeration reference for C#: timestamp hashing algorithms.`
- v3 (balanced): `TimestampHashAlgorithms (PDF Signing) in IronPDF for C#: timestamp hashing algorithms. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The TimestampHashAlgorithms enumeration in IronPDF lives in the IronPdf.Signing namespace, derived from Enum, representing timestamp hashing algorithms. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.