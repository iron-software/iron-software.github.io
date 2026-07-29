<!--
N-Lite/exception. Declared: public class PermissionException : PdfException.
Target: PdfToSvg.PermissionException in IronPdf.dll
-->

## Injected overview (Markdown)

`PermissionException` is thrown when a PDF's security settings block the SVG conversion operation. It inherits from `PdfException` and signals that the source document restricts the action being attempted, such as content extraction. To resolve it, check whether the PDF is password-protected or has content-copying disabled, and supply the appropriate owner credentials before retrying. See [IronPDF PDF security guidance](https://ironpdf.com/how-to/pdf-permissions-passwords/) for details.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PermissionException - IronPDF C# API Reference`
- v2 (human): `PermissionException: PDF Permission Error in C#`
- v3 (balanced): `PermissionException | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `PermissionException is thrown by IronPDF in C# when PDF security settings block SVG conversion. Check permissions and credentials to resolve it.`
- v2 (human): `Handle PDF permission errors in C# with PermissionException, raised when a restricted PDF blocks IronPDF's SVG conversion process.`
- v3 (balanced): `Reference for PermissionException in IronPDF C#: thrown when PDF security restrictions prevent SVG conversion. Inherits from PdfException.`

---

## Structured data

**TechArticle abstract**

> PermissionException is thrown by IronPDF when a PDF's security or permission settings prevent the requested SVG conversion. It inherits from PdfException and carries a message describing the restriction encountered. To fix it, verify whether the source PDF has content-extraction permissions disabled or requires an owner password, and provide the correct credentials before retrying the operation.