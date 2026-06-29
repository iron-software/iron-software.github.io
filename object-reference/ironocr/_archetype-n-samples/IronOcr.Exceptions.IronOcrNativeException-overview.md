<!--
N-Lite/exception. Declared: public class IronOcrNativeException : Exception.
Chain: Object -> IronOcrNativeException (direct, verified on page).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Exceptions.IronOcrNativeException.html
-->

## Injected overview (Markdown)

A failure inside IronOCR's native engine code surfaces as `IronOcrNativeException`. It usually points to a runtime or platform problem rather than your calling code, so check that the native dependencies deployed with your application, that the target platform is supported, and that the input reached the engine intact. Read the inner exception for the underlying native detail. It derives directly from `System.Exception`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronOcrNativeException - IronOCR C# Reference`
- v2 (human): `IronOcrNativeException: Native Error in C#`
- v3 (balanced): `IronOcrNativeException | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronOcrNativeException reports errors from IronOCR native engine code in C#. Check native dependencies, platform support, and the inner exception.`
- v2 (human): `Seeing IronOcrNativeException in C#? IronOCR's native code failed. Confirm native dependencies are deployed and your platform is supported.`
- v3 (balanced): `Reference for IronOcrNativeException in C#: raised for failures in IronOCR native code. Derives directly from System.Exception.`

---

## Structured data

**TechArticle abstract**

> A failure inside IronOCR's native engine code surfaces as IronOcrNativeException in C#. It points to a runtime or platform problem rather than calling code, so confirm native dependencies deployed with the application, that the platform is supported, and read the inner exception for detail. It derives directly from System.Exception.
