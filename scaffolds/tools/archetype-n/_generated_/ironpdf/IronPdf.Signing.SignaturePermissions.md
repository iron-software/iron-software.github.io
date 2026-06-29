<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Signing.SignaturePermissions.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `SignaturePermissions` enumeration in IronPDF declares what further modifications a viewer may make to a digitally signed PDF without breaking the signature.

Part of the `IronPdf.Signing` namespace, the 3 members are `NoChangesAllowed`, `AdditionalSignaturesAndFormFillingAllowed`, and `AdditionalSignaturesFormFillingAndAnnotationsAllowed`, ranging from a locked document to one that still accepts countersignatures and annotations. Assign a value to `PdfSignature.SigningPermissions` before signing.

See [Signing PDFs](https://ironpdf.com/how-to/signing/) for full C# usage.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SignaturePermissions Enum - IronPDF C# API Reference`
- v2 (human): `SignaturePermissions: IronPDF PDF Signing in C#`
- v3 (balanced): `SignaturePermissions Enum | IronPDF C# PDF Signing`

**Meta-description (120-160 chars)**
- v1 (algorithm): `SignaturePermissions is the IronPDF enumeration for PDF signing in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF SignaturePermissions enumeration reference for C#: permission options for a PDF document which is digitally signed.`
- v3 (balanced): `SignaturePermissions (PDF Signing) in IronPDF for C#: permission options for a PDF document which is digitally signed. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The SignaturePermissions enumeration in IronPDF lives in the IronPdf.Signing namespace, derived from Enum, representing permission options for a PDF document which is digitally signed. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.