<!--
GENERATED SAMPLE — Archetype N-Full (full/class)
Target page: https://ironpdf.com/object-reference/api/IronPdf.Signing.Inspection.SignerCertificateInfo.html

GENERATION NOTES
- Produced by api-overview-seo/work/generate_samples.py from live docfx HTML.
- All API names referenced are pulled directly from the live reference page.
- Prose patterns are templated; expect to need human polish on framing,
  example specificity, and (for full variants) FAQ shape against the page's
  actual class-name long-tail.
- Generated full/class — prose is templated; polish before publishing if you want CTR wins.
-->

## Injected overview (Markdown)

`SignerCertificateInfo` is the object IronPDF C# code works with for signature inspection. It contains the X.509 certificate details of the signer of a digitally signed PDF document.

`SignerCertificateInfo` matters when an application needs to configure or invoke signature inspection from C# code. The class encapsulates the related options and behavior in a single object that is set up once and reused across render or processing calls. Typical scenarios include batch generation pipelines, templated document workflows, and integration with existing C# document services.

To use `SignerCertificateInfo`, instantiate or obtain it from the relevant entry point in the IronPDF C# API. Key properties include `CertificateSerialNumber`, `CommonName`, `Country`, `Email`. Assign options or invoke methods on the instance to configure or perform the operation. The [create accessible pdfs 508 c sharp](https://ironpdf.com/how-to/create-accessible-pdfs-508-c-sharp/) covers typical usage in C# end to end.

```csharp
using IronPdf;

// Obtain SignerCertificateInfo from the relevant entry point in the IronPDF API
void Configure(SignerCertificateInfo instance)
{
    var current = instance.CertificateSerialNumber;
    instance.GetIssuerField();
}
```

For the broader workflow, see the [metadata](https://ironpdf.com/how-to/metadata/) guide in the IronPDF C# documentation. For broader context, the signature inspection portion of the IronPDF C# API contains related types that work with `SignerCertificateInfo` directly. `SignerCertificateInfo` exposes additional members beyond those highlighted above; the reference tables on this page list the full set. In application code, treat `SignerCertificateInfo` as a configured object that is constructed once and reused across operations rather than instantiated per call. Configuration is generally idempotent: assigning the same property value twice has the same effect as assigning it once. For diagnostic purposes, inspect the relevant `SignerCertificateInfo` property after each operation to confirm the configured state. See the constructors, properties, and methods tables below for the complete API surface of `SignerCertificateInfo`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SignerCertificateInfo Class - IronPDF C# API Reference`
- v2 (human): `SignerCertificateInfo: IronPDF Signature Inspection in C#`
- v3 (balanced): `SignerCertificateInfo Class | IronPDF C# Signature...`

**Meta-description (120-160 chars)**
- v1 (algorithm): `SignerCertificateInfo is the IronPDF class for signature inspection in C#. Reference its members, declared values, and usage in PDF generation.`
- v2 (human): `IronPDF SignerCertificateInfo class reference for C#: contains the X.509 certificate details of the signer of a digitally signed...`
- v3 (balanced): `SignerCertificateInfo (Signature Inspection) in IronPDF for C#: contains the X.509 certificate details of the signer of a digitally signed... See members...`

---

## Structured data

**TechArticle abstract**

> Use SignerCertificateInfo in IronPDF to work with signature inspection from C# and contains the X.509 certificate details of the signer of a digitally signed PDF document. SignerCertificateInfo is in the IronPdf.Signing.Inspection namespace. Reference for the public surface and its role in the IronPDF C# API.

**FAQPage entries**

```json
[
  {
    "question": "Which namespace and assembly contain SignerCertificateInfo?",
    "answer": "SignerCertificateInfo is in the IronPdf.Signing.Inspection namespace, shipped in IronPdf.dll."
  },
  {
    "question": "What is the SignerCertificateInfo class used for in C#?",
    "answer": "SignerCertificateInfo is the IronPDF class that contains the X.509 certificate details of the signer of a digitally signed PDF document. It is part of the IronPdf.Signing.Inspection namespace and is used through the IronPDF C# API."
  },
  {
    "question": "What are the key properties of SignerCertificateInfo?",
    "answer": "Properties commonly used on SignerCertificateInfo include CertificateSerialNumber, CommonName, Country, Email. Each property configures one aspect of the signature inspection surface exposed by the class."
  },
  {
    "question": "What methods are available on SignerCertificateInfo?",
    "answer": "Common methods include GetIssuerField, GetSubjectField, IsValidAt, ToString. Use these on an instance to perform the corresponding IronPDF operation in C#."
  }
]
```

**Schema notes**
- Page type: `TechArticle` (full/class).