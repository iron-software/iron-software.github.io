<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Signing.Inspection.VerifiedSignature.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

Use `VerifiedSignature` in IronPDF when a C# application works with signature inspection. It represents that represents a verified digital signature for a PDF document.

`VerifiedSignature` matters when an application needs to configure or invoke signature inspection from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `VerifiedSignature`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CertificateChain`, `Filter`, `SignatureName`, `SignerCertificate`. Assign options or invoke methods on the instance to configure or perform the operation.

```csharp
using IronPdf;

// Obtain VerifiedSignature from the relevant entry point in the IronPDF API
void Configure(VerifiedSignature instance)
{
    var current = instance.CertificateChain;
    instance.ToString();
}
```

For the broader workflow, see the IronPDF C# documentation for related how-to guides and examples. For broader context, the signature inspection portion of the IronPDF C# API contains related types that work with `VerifiedSignature` directly. `VerifiedSignature` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `VerifiedSignature` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `VerifiedSignature` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `VerifiedSignature`. Application code typically obtains or instantiates a single `VerifiedSignature` and shares it across multiple IronPDF operations rather than recreating it per call.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `VerifiedSignature Class - IronPDF C# API Reference`
- v2 (human): `VerifiedSignature: IronPDF Signature Inspection in C#`
- v3 (balanced): `VerifiedSignature Class | IronPDF C# Signature Inspection`

**Meta-description (120-160 chars)**
- v1 (algorithm): `VerifiedSignature is the IronPDF class for signature inspection in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF VerifiedSignature class reference for C#: a class that represents a verified digital signature for a PDF document.`
- v3 (balanced): `VerifiedSignature (Signature Inspection) in IronPDF for C#: a class that represents a verified digital signature for a PDF document. See members and usage.`

---

## Structured data

**TechArticle abstract**

> VerifiedSignature handles signature inspection in IronPDF from C#. VerifiedSignature is in the IronPdf.Signing.Inspection namespace. That represents a verified digital signature for a PDF document. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "What namespace is VerifiedSignature defined in?",
    "answer": "VerifiedSignature is in the IronPdf.Signing.Inspection namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the VerifiedSignature class used for in C#?",
    "answer": "VerifiedSignature is the IronPDF class that that represents a verified digital signature for a PDF document. It is part of the IronPdf.Signing.Inspection namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of VerifiedSignature?",
    "answer": "Properties commonly used on VerifiedSignature include CertificateChain, Filter, SignatureName, SignerCertificate. Each property configures one aspect of the signature inspection surface exposed by the class."
  },
  {
    "question": "What methods are available on VerifiedSignature?",
    "answer": "Common methods include ToString. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).