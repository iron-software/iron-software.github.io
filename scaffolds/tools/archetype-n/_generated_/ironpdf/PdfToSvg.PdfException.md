<!--
N-Lite/exception. Declared: public class PdfException : Exception.
Target: PdfToSvg.PdfException in IronPdf.dll
-->

## Injected overview (Markdown)

`PdfException` signals a failure during PDF-to-SVG conversion in the `PdfToSvg` namespace (assembly `IronPdf.dll`). It derives directly from `System.Exception`. When caught, inspect its `Message` for a description of the problem and its `InnerException` for the underlying cause. Check that the source PDF is valid, not password-protected, and accessible before retrying. See [IronPDF troubleshooting](https://ironpdf.com/docs/) for common causes.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PdfException - IronPDF C# API Reference`
- v2 (human): `PdfException: PDF-to-SVG Error in C#`
- v3 (balanced): `PdfException | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `PdfException is thrown by IronPDF during PDF-to-SVG conversion in C#. Inspect its message and inner exception to diagnose and resolve the failure.`
- v2 (human): `Catch PdfException in C# to handle IronPDF PDF-to-SVG errors. Check the message and inner exception to find the root cause quickly.`
- v3 (balanced): `Reference for PdfException in C#: the exception raised by IronPDF's PdfToSvg namespace when PDF conversion fails. Derives from System.Exception.`

---

## Structured data

**TechArticle abstract**

> PdfException is raised by IronPDF when a PDF-to-SVG conversion operation fails in the PdfToSvg namespace (assembly IronPdf.dll). It derives from System.Exception and carries a message describing the failure, with an optional inner exception identifying the underlying cause. To resolve it, verify that the source PDF is valid, readable, and not password-protected.