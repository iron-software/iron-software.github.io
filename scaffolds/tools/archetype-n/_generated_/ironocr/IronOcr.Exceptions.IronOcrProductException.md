<!--
N-Lite/exception (base). Declared: public class IronOcrProductException : Exception.
Parent of IronOcrDictionaryException and IronOcrLicensingException (verified on page).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/IronOcr.Exceptions.IronOcrProductException.html
-->

## Injected overview (Markdown)

Catch `IronOcrProductException` to handle any error IronOCR raises during normal execution in one place. It is the base type for the library's product exceptions, including `IronOcrDictionaryException` and `IronOcrLicensingException`, so a single catch on it covers those more specific causes too. It derives from `System.Exception`. When one is thrown, read the message and inner exception, then confirm your input, configuration, and license before retrying.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronOcrProductException - IronOCR C# API Reference`
- v2 (human): `IronOcrProductException: Base IronOCR Error in C#`
- v3 (balanced): `IronOcrProductException | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronOcrProductException is the base exception for IronOCR errors in C#. Catch it to handle any product failure, or its subtypes for specific causes.`
- v2 (human): `Handle IronOCR errors in C# with IronOcrProductException, the base type for the library's product exceptions. Catch it broadly or its subtypes.`
- v3 (balanced): `Reference for IronOcrProductException in C#: the base IronOCR exception, parent of the dictionary and licensing exception types.`

---

## Structured data

**TechArticle abstract**

> Catch IronOcrProductException to handle any error IronOCR raises during normal execution in C#. It is the base type for the library's product exceptions, including IronOcrDictionaryException and IronOcrLicensingException, and derives from System.Exception. Inspect the message and inner exception, then check input, configuration, and license before retrying.
