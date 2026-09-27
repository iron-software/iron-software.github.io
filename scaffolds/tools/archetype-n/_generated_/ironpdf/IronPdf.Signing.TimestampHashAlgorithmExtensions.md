<!--
N-Mid (1 member). Frame C. IronPDF. Members verified 2026-06-22.
Target: IronPdf.Signing.TimestampHashAlgorithmExtensions
-->

## Injected overview (Markdown)

Converting a `TimestampHashAlgorithms` enum value into its corresponding OID string is the job `TimestampHashAlgorithmExtensions` handles. The single extension method it exposes, `ToDigestAlgorithmOid`, translates a hash algorithm selection into the dotted-decimal Object Identifier that RFC 3161 timestamp authorities expect when a PDF signature is being countersigned with a trusted timestamp.

When IronPDF applies a digital signature that includes a timestamp, the timestamp request must specify the digest algorithm as an OID rather than a human-readable name. `ToDigestAlgorithmOid` performs that translation cleanly, so calling code never has to hard-code strings like `"2.16.840.1.101.3.4.2.1"` for SHA-256. Instead, the algorithm is expressed as a `TimestampHashAlgorithms` enum value, and the extension method resolves the correct OID at the point of use.

Because `ToDigestAlgorithmOid` is a static extension method on `TimestampHashAlgorithms`, it reads as a natural call on the enum value itself:

```csharp
using IronPdf.Signing;

string oid = TimestampHashAlgorithms.SHA256.ToDigestAlgorithmOid();
// oid now holds the OID string passed to the timestamp authority
```

This pattern keeps signing configuration readable and avoids magic strings scattered across a codebase. The class lives entirely in the `IronPdf.Signing` namespace alongside the signing and certificate types it supports, so no additional import is needed when working with PDF signature workflows.

For a broader look at PDF signing with timestamps, see the [digital signature how-to](https://ironpdf.com/how-to/digital-signature/) and the [PDF signing examples](https://ironpdf.com/examples/digitally-sign-pdf/) on the IronPDF site.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TimestampHashAlgorithmExtensions Class - IronPDF C#`
- v2 (human): `Convert Hash Algorithms to OIDs in C# | IronPDF`
- v3 (balanced): `TimestampHashAlgorithmExtensions | IronPDF C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use TimestampHashAlgorithmExtensions.ToDigestAlgorithmOid in C# to convert a TimestampHashAlgorithms value to its OID string for PDF timestamp signing.`
- v2 (human): `Translate a hash algorithm enum to an OID string for RFC 3161 PDF timestamps in C# with IronPDF's ToDigestAlgorithmOid extension method.`
- v3 (balanced): `Reference for IronPDF's TimestampHashAlgorithmExtensions in C#: ToDigestAlgorithmOid converts a hash algorithm enum to its OID for timestamp signing.`

---

## Structured data

**TechArticle abstract**

> TimestampHashAlgorithmExtensions provides the ToDigestAlgorithmOid extension method in IronPDF's C# signing API, converting a TimestampHashAlgorithms enum value into the dotted-decimal OID string required by RFC 3161 timestamp authorities when countersigning a PDF digital signature.

**FAQPage entries**

```json
[
  {
    "question": "Where does TimestampHashAlgorithmExtensions live in the IronPDF API?",
    "answer": "TimestampHashAlgorithmExtensions is a class in the IronPdf.Signing namespace, shipped in IronPdf.dll. It extends the TimestampHashAlgorithms enum and derives from System.Object."
  },
  {
    "question": "How do you get the OID string for a hash algorithm when signing a PDF in C#?",
    "answer": "Call ToDigestAlgorithmOid on any TimestampHashAlgorithms enum value, for example TimestampHashAlgorithms.SHA256.ToDigestAlgorithmOid(). The method returns the dotted-decimal OID string that a timestamp authority requires in an RFC 3161 request."
  }
]
```