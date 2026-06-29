<!--
N-Lite/exception (base). Declared: public class IronBarCodeException : Exception.
Namespace IronBarCode.Exceptions; assembly IronBarCode.dll.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Exceptions.IronBarCodeException.html
-->

## Injected overview (Markdown)

`IronBarCodeException` is the base type for errors that IronBarCode raises while reading or writing barcodes. A single catch on it handles any library-specific failure, while the narrower subtypes such as `IronBarCodeEncodingException`, `IronBarCodeFileException`, and `IronBarCodeParsingException` let code respond to a particular cause. When one is thrown, read the message and inner exception to learn what the call was attempting, then check the input image, file path, or writer settings before trying again.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IronBarCodeException - IronBarcode C# API`
- v2 (human): `IronBarCodeException: Base IronBarcode Error`
- v3 (balanced): `IronBarCodeException | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronBarCodeException is the base exception for IronBarcode errors in C#. Catch it to handle any failure, or its subtypes for a specific cause.`
- v2 (human): `Handle IronBarcode errors in C# with IronBarCodeException, the base type for the library's exceptions. Catch it broadly or its subtypes.`
- v3 (balanced): `Reference for IronBarCodeException in C#: the base IronBarcode exception, parent of the file, encoding, and parsing exception types.`

---

## Structured data

**TechArticle abstract**

> IronBarCodeException is the base exception for errors raised by IronBarcode in C#. Catch it to handle any library-specific failure, or catch subtypes such as IronBarCodeEncodingException, IronBarCodeFileException, and IronBarCodeParsingException to react to a particular cause. Inspect the message and inner exception to diagnose what failed.
