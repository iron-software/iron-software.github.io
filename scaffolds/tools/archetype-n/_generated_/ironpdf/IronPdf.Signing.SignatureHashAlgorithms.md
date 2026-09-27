<!--
N-Lite/enum. Members verified 2026-06-22: SHA1, SHA256, SHA384, SHA512, value__.
Target: IronPdf.Signing.SignatureHashAlgorithms
-->

## Injected overview (Markdown)

`SignatureHashAlgorithms` controls the digest algorithm recorded in the PKCS#7/CMS signature block, visible in Adobe Reader under Signature Details. `SHA256` is the modern default and the right choice for new documents. `SHA384` and `SHA512` provide stronger digests for high-assurance workflows. `SHA1` is available only for compatibility with legacy validators and is cryptographically weak. See the [PDF digital signing guide](https://ironpdf.com/how-to/signing/) for usage context.

```csharp
signature.HashAlgorithm = SignatureHashAlgorithms.SHA256;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SignatureHashAlgorithms Enum - IronPDF C# API`
- v2 (human): `SignatureHashAlgorithms: PDF Digest Algorithm in C#`
- v3 (balanced): `SignatureHashAlgorithms Enum | IronPDF C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the PKCS#7 digest algorithm in C# with IronPDF SignatureHashAlgorithms: SHA256 (default), SHA384, SHA512, or legacy SHA1 for PDF signing.`
- v2 (human): `Set the hash algorithm for PDF digital signatures in C# using IronPDF's SignatureHashAlgorithms enum. SHA256 is recommended; SHA1 is for legacy use only.`
- v3 (balanced): `Reference for IronPDF SignatureHashAlgorithms in C#: select SHA256, SHA384, SHA512, or SHA1 for the PKCS#7 signature digest in signed PDFs.`

---

## Structured data

**TechArticle abstract**

> Use SignatureHashAlgorithms in IronPDF to select the digest algorithm embedded in a PKCS#7/CMS PDF signature. SHA256 is the modern default, SHA384 and SHA512 suit high-assurance requirements, and SHA1 is retained only for compatibility with legacy validators.