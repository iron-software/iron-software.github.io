<!--
N-Lite/enum. Members verified: Aes_128, Aes_256, Rc4_128, value__.
Target: IronPdf.Security.PdfEncryptionType
-->

## Injected overview (Markdown)

`PdfEncryptionType` controls which cipher secures a password-protected PDF, passed to IronPDF's encryption API. `Aes_256` is the strongest and recommended choice for new documents. `Aes_128` offers broad compatibility with older readers, and `Rc4_128` is a legacy algorithm retained for interoperability with systems that cannot accept AES. See [PDF security how-to](https://ironpdf.com/how-to/pdf-security-encryption/) for usage details.

```csharp
pdfDocument.SecuritySettings.OwnerPassword = "secret";
pdfDocument.SecuritySettings.EncryptionType = PdfEncryptionType.Aes_256;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfEncryptionType Enum - IronPDF C# API Reference`
- v2 (human): `PdfEncryptionType: Choose PDF Encryption in C#`
- v3 (balanced): `PdfEncryptionType Enum | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select a PDF encryption algorithm in C# with IronPDF's PdfEncryptionType enum: Aes_256, Aes_128, or Rc4_128 for password-protected documents.`
- v2 (human): `Pick the right PDF cipher in C# using IronPDF's PdfEncryptionType enum: AES-256 for strength, AES-128 for compatibility, or RC4-128 for legacy use.`
- v3 (balanced): `Reference for IronPDF's PdfEncryptionType enum in C#: Aes_256, Aes_128, and Rc4_128 encryption algorithms for secured PDF documents.`

---

## Structured data

**TechArticle abstract**

> Use PdfEncryptionType in IronPDF to select the cipher applied when a password secures a PDF document. Aes_256 is the strongest and recommended option for new documents, Aes_128 provides compatibility with older PDF readers, and Rc4_128 is a legacy algorithm for systems that do not support AES.