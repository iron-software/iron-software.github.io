<!--
N-Lite/exception. Declared: public class InvalidCredentialException : PdfException.
Target: PdfToSvg.InvalidCredentialException in IronPdf.dll
-->

## Injected overview (Markdown)

`InvalidCredentialException` is thrown when IronPDF cannot authenticate against a password-protected PDF during SVG conversion. Check that the password supplied to the conversion call is correct and that the document is not restricted to owner-only access. The base-type chain is `InvalidCredentialException` : `PdfException` : `Exception`. See [IronPDF PDF password guidance](https://ironpdf.com/how-to/pdf-password/) for credential handling details.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `InvalidCredentialException - IronPDF C# API`
- v2 (human): `InvalidCredentialException: Bad PDF Password in C#`
- v3 (balanced): `InvalidCredentialException | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `InvalidCredentialException is thrown by IronPDF in C# when PDF credentials are wrong during SVG conversion. Check the password and access rights.`
- v2 (human): `Diagnose bad PDF passwords in C# with InvalidCredentialException from IronPDF. Raised when credentials fail during PDF-to-SVG conversion.`
- v3 (balanced): `Reference for InvalidCredentialException in IronPDF C#: raised on failed PDF authentication in SVG conversion. Inherits from PdfException.`

---

## Structured data

**TechArticle abstract**

> InvalidCredentialException is raised by IronPDF when the credentials provided for a password-protected PDF cannot be verified during PDF-to-SVG conversion. Confirm the supplied password is correct and that the document permits the requested access level. The exception inherits from PdfException, which in turn inherits from Exception, in the PdfToSvg namespace of IronPdf.dll.