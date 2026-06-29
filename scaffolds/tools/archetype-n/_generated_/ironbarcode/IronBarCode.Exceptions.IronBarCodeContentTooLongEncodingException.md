<!--
N-Lite/exception. Declared: public class IronBarCodeContentTooLongEncodingException : IronBarCodeEncodingException.
Namespace IronBarCode.Exceptions; assembly IronBarCode.dll.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Exceptions.IronBarCodeContentTooLongEncodingException.html
-->

## Injected overview (Markdown)

`IronBarCodeContentTooLongEncodingException` signals that the value passed to IronBarcode exceeds the data capacity of the selected barcode symbology. Each format has a maximum number of characters, and longer payloads cannot be represented. To resolve it, trim the content, switch to a symbology with greater capacity such as a 2D code, or split the data across several barcodes, then encode again. It derives from `IronBarCodeEncodingException`, itself an `IronBarCodeException`, so either base type also catches it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ContentTooLongEncodingException - IronBarcode`
- v2 (human): `IronBarcode: Barcode Content Too Long Error`
- v3 (balanced): `ContentTooLongEncodingException | IronBarcode C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IronBarCodeContentTooLongEncodingException is raised in C# when a value exceeds the data capacity of the chosen barcode symbology.`
- v2 (human): `Handle over-long payloads in C# with IronBarCodeContentTooLongEncodingException: trim the data or pick a higher-capacity barcode format.`
- v3 (balanced): `Reference for IronBarCodeContentTooLongEncodingException in C#: raised when content exceeds the selected symbology's character limit.`

---

## Structured data

**TechArticle abstract**

> IronBarCodeContentTooLongEncodingException is raised in C# when a value exceeds the data capacity of the selected barcode symbology. Trim the content, choose a higher-capacity format such as a 2D code, or split the data across barcodes, then encode again. It derives from IronBarCodeEncodingException, itself an IronBarCodeException.
