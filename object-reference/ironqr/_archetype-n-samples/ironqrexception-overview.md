<!--
N-Lite/exception (base). Declared: public class IronQrException : Exception.
Target: https://ironsoftware.com/csharp/qr/object-reference/api/IronQr.Exceptions.IronQrException.html
-->

## Injected overview (Markdown)

`IronQrException` is the base exception for errors raised by IronQR. Catching it handles any IronQR-specific failure in one place, while its more specific subtypes (`IronQrFileException`, `IronQrEncodingException`, `IronQrPdfPasswordException`) let code react to a particular cause. When one is thrown, read its message and inner exception to see what the library was doing, and confirm the input image, file path, or encoding settings before retrying.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronQrException - IronQR C# API Reference`
- v2 (human): `IronQrException: Base IronQR Error in C#`
- v3 (balanced): `IronQrException | IronQR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronQrException is the base exception for IronQR errors in C#. Catch it to handle any IronQR failure, or its subtypes for specific causes.`
- v2 (human): `Handle IronQR errors in C# with IronQrException, the base type for the library's exceptions. Catch it broadly or its subtypes for detail.`
- v3 (balanced): `Reference for IronQrException in C#: the base IronQR exception, parent of the file, encoding, and PDF-password exception types.`

---

## Structured data

**TechArticle abstract**

> IronQrException is the base exception for errors raised by IronQR in C#. Catch it to handle any IronQR-specific failure, or catch its subtypes such as IronQrFileException, IronQrEncodingException, and IronQrPdfPasswordException to react to a particular cause. Inspect the message and inner exception to diagnose the failure.
