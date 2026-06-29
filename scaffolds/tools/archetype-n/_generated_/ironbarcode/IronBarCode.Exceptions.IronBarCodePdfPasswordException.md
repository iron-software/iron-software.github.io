<!--
N-Lite/exception. Declared: public class IronBarCodePdfPasswordException : Exception (direct from Exception, not IronBarCodeException).
Namespace IronBarCode.Exceptions; assembly IronBarCode.dll.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Exceptions.IronBarCodePdfPasswordException.html
-->

## Injected overview (Markdown)

`IronBarCodePdfPasswordException` is thrown when IronBarcode opens a password-protected PDF and the supplied password is wrong or missing. It surfaces while reading barcodes from a secured document or writing a barcode into one. Provide the correct owner or user password for the file and run the operation again. The exception derives directly from `Exception` rather than the IronBarcode base type, so catch it on its own when a protected PDF needs a clearer prompt or a retry path.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronBarCodePdfPasswordException - IronBarcode`
- v2 (human): `IronBarcode: PDF Password Error in C#`
- v3 (balanced): `PdfPasswordException | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronBarCodePdfPasswordException is raised in C# when a protected PDF's password is wrong or missing while IronBarcode reads or writes barcodes.`
- v2 (human): `Handle protected-PDF errors in C# with IronBarCodePdfPasswordException: supply the correct password when IronBarcode opens a secured PDF.`
- v3 (balanced): `Reference for IronBarCodePdfPasswordException in C#: raised when a password-protected PDF's password is incorrect or missing.`

---

## Structured data

**TechArticle abstract**

> IronBarCodePdfPasswordException is raised in C# when IronBarcode opens a password-protected PDF and the password is wrong or missing, while reading barcodes from a secured document or writing one into it. Supply the correct owner or user password and retry. It derives directly from Exception.
