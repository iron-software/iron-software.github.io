<!--
HUMAN-POLISHED (lite/enum) — programmatic baseline by generate_samples.py, then polished by agent.
Target page: https://ironpdf.com/object-reference/api/IronPdf.Signing.Inspection.SignatureStatus.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
-->

## Injected overview (Markdown)

The `SignatureStatus` enumeration in IronPDF reports the verdict of verifying a PDF digital signature.

Part of the `IronPdf.Signing.Inspection` namespace, the 4 members are `Valid`, `ValidWithWarnings`, `Invalid`, and `Indeterminate`, ordered from a clean pass through a chain-of-trust caveat to outright tampering or a missing trust anchor. Inspect `VerifiedSignature.Status` after calling the signature verification API.

See [Verify PDF Signatures](https://ironpdf.com/how-to/verify-pdf-signatures/) for C# inspection code.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SignatureStatus Enum - IronPDF C# API Reference`
- v2 (human): `SignatureStatus: IronPDF Signature Inspection in C#`
- v3 (balanced): `SignatureStatus Enum | IronPDF C# Signature Inspection`

**Meta-description (120-160 chars)**
- v1 (algorithm): `SignatureStatus is the IronPDF enumeration for signature inspection in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF SignatureStatus enumeration reference for C#: represents the outcome of a PDF digital signature verification.`
- v3 (balanced): `SignatureStatus (Signature Inspection) in IronPDF for C#: represents the outcome of a PDF digital signature verification. See members and usage.`

---

## Structured data

**TechArticle abstract**

> The SignatureStatus enumeration in IronPDF lives in the IronPdf.Signing.Inspection namespace, derived from Enum, representing the outcome of a PDF digital signature verification. Members map to discrete settings consumed by the IronPDF C# rendering pipeline.

**Schema notes**
- Page type: `TechArticle` (lite/enum).
- No FAQPage entries for this variant per spec §5.