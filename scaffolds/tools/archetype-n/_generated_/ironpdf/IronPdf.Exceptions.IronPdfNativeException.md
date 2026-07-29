<!--
N-Lite/exception. Declared: public class IronPdfNativeException : Exception.
Target: IronPdf.Exceptions.IronPdfNativeException
-->

## Injected overview (Markdown)

`IronPdfNativeException` surfaces failures that originate in IronPDF's native rendering layer rather than in managed C# code. When this exception is thrown, inspect its `Message` and `InnerException` to identify the low-level operation that failed, then verify the input PDF content, system dependencies, and available memory. It derives directly from `Exception`. See [IronPDF troubleshooting](https://ironpdf.com/troubleshooting/) for common native-layer issues.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronPdfNativeException - IronPDF C# API Reference`
- v2 (human): `IronPdfNativeException: Native Error in IronPDF C#`
- v3 (balanced): `IronPdfNativeException | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronPdfNativeException signals native-layer errors in IronPDF for C#. Inspect message and inner exception to diagnose rendering or processing failures.`
- v2 (human): `Catch IronPdfNativeException in C# to handle low-level IronPDF rendering errors. Check message, inner exception, and system dependencies to resolve.`
- v3 (balanced): `Reference for IronPdfNativeException in C#: thrown when IronPDF's native layer fails. Inspect message and inner exception to diagnose the cause.`

---

## Structured data

**TechArticle abstract**

> IronPdfNativeException signals errors that occur inside IronPDF's native rendering layer in C#. It derives from Exception and is thrown when a low-level operation fails during PDF generation or processing. Inspect the message and inner exception to identify the cause, and verify input content, system dependencies, and available memory before retrying.