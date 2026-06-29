<!--
N-Lite/exception. Declared: public class IronQrPdfPasswordException : IronQrException.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Exceptions.IronQrPdfPasswordException.html
-->

## Injected overview (Markdown)

`IronQrPdfPasswordException` is raised when IronQR processes a password-protected PDF and the supplied password is wrong or missing. It surfaces while reading QR codes from a secured PDF or stamping a code onto one. Supply the correct owner or user password for the document and try the operation again. The exception derives from `IronQrException`, so code that catches the base type also catches this case while still allowing a targeted catch for a clearer prompt.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronQrPdfPasswordException - IronQR C# API`
- v2 (human): `IronQrPdfPasswordException: PDF Password Error`
- v3 (balanced): `IronQrPdfPasswordException | IronQR API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronQrPdfPasswordException is raised in C# when a protected PDF's password is wrong or missing while IronQR reads or stamps QR codes.`
- v2 (human): `Handle protected-PDF failures in C# with IronQrPdfPasswordException: supply the correct password when IronQR reads from or stamps a secured PDF.`
- v3 (balanced): `Reference for IronQrPdfPasswordException in C#: raised when a password-protected PDF's password is incorrect or missing during IronQR processing.`

---

## Structured data

**TechArticle abstract**

> IronQrPdfPasswordException is raised in C# when IronQR processes a password-protected PDF and the password is wrong or missing, while reading QR codes from a secured PDF or stamping a code onto one. Supply the correct owner or user password and retry. It derives from IronQrException.
