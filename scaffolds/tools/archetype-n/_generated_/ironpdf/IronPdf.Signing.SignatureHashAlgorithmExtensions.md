<!--
N-Mid (1 member). Frame C. IronPDF. Members verified 2026-06-22.
Target: IronPdf.Signing.SignatureHashAlgorithmExtensions
-->

## Injected overview (Markdown)

Converting a `SignatureHashAlgorithms` enum value into the string name that BouncyCastle expects is the job `SignatureHashAlgorithmExtensions` handles. This static extension class lives in `IronPdf.Signing` and adds `ToBouncyCastleHashName` directly onto the `SignatureHashAlgorithms` enum, so the translation reads naturally at the call site without a separate utility call.

`ToBouncyCastleHashName` returns the canonical hash algorithm identifier string (for example `"SHA-256"` or `"SHA-384"`) that the BouncyCastle cryptography library accepts when building or verifying a PDF digital signature. IronPDF uses this mapping internally when applying a `PdfSignature` to a document, but the method is public, making it accessible whenever custom signing pipelines need to bridge the IronPDF enum to a lower-level BouncyCastle API call.

Because the method is an extension, it is invoked on any `SignatureHashAlgorithms` value directly:

```csharp
using IronPdf.Signing;

string hashName = SignatureHashAlgorithms.SHA256.ToBouncyCastleHashName();
// hashName == "SHA-256", ready to pass to a BouncyCastle signer
```

The class itself requires no instantiation and carries no state. Its single responsibility keeps the mapping between IronPDF's signing enum and BouncyCastle's string identifiers in one auditable place, reducing the risk of typos when algorithm names are passed as raw strings across library boundaries.

For broader context on PDF signing in IronPDF, see the [digital signature how-to](https://ironpdf.com/how-to/signing/) and the [PDF signing examples](https://ironpdf.com/examples/digitally-sign-a-pdf/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SignatureHashAlgorithmExtensions Class - IronPDF C#`
- v2 (human): `SignatureHashAlgorithmExtensions: Hash Names in C#`
- v3 (balanced): `SignatureHashAlgorithmExtensions | IronPDF C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use SignatureHashAlgorithmExtensions in IronPDF C# to convert SignatureHashAlgorithms enum values to BouncyCastle hash name strings for PDF signing.`
- v2 (human): `Convert IronPDF signing hash algorithm enums to BouncyCastle string names in C# with SignatureHashAlgorithmExtensions.ToBouncyCastleHashName.`
- v3 (balanced): `Reference for SignatureHashAlgorithmExtensions in IronPDF C#: ToBouncyCastleHashName maps SignatureHashAlgorithms values to BouncyCastle identifiers.`

---

## Structured data

**TechArticle abstract**

> SignatureHashAlgorithmExtensions in IronPDF provides the ToBouncyCastleHashName extension method on the SignatureHashAlgorithms enum, returning the canonical hash algorithm string that BouncyCastle requires when constructing or verifying a PDF digital signature. The class is static, requires no instantiation, and is shipped in IronPdf.dll under the IronPdf.Signing namespace.

**FAQPage entries**

```json
[
  {
    "question": "Where does SignatureHashAlgorithmExtensions live in the IronPDF API?",
    "answer": "SignatureHashAlgorithmExtensions is a static class in the IronPdf.Signing namespace, shipped in IronPdf.dll. It extends System.Object and adds the ToBouncyCastleHashName method directly onto the SignatureHashAlgorithms enum."
  },
  {
    "question": "How do you get a BouncyCastle hash algorithm name from a SignatureHashAlgorithms value in C#?",
    "answer": "Call ToBouncyCastleHashName on any SignatureHashAlgorithms enum value after adding a using directive for IronPdf.Signing. The method returns the string identifier BouncyCastle expects, such as SHA-256, without any additional setup."
  }
]
```