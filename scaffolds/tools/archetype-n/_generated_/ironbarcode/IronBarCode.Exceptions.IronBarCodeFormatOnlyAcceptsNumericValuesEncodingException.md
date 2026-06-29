<!--
N-Lite/exception. Declared: public class IronBarCodeFormatOnlyAcceptsNumericValuesEncodingException : IronBarCodeEncodingException.
Namespace IronBarCode.Exceptions; assembly IronBarCode.dll.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Exceptions.IronBarCodeFormatOnlyAcceptsNumericValuesEncodingException.html
-->

## Injected overview (Markdown)

When the chosen barcode format accepts digits only and the value contains letters or symbols, IronBarcode throws `IronBarCodeFormatOnlyAcceptsNumericValuesEncodingException`. Numeric symbologies such as EAN, UPC, and ITF reject any non-digit character. Strip the offending characters so the payload is purely numeric, or select a format that supports alphanumeric data such as Code 128 or a QR code, then try the encode once more. It derives from `IronBarCodeEncodingException`, which itself derives from `IronBarCodeException`.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `NumericValuesEncodingException - IronBarcode`
- v2 (human): `IronBarcode: Numeric-Only Format Error in C#`
- v3 (balanced): `Numeric Format Encoding Error | IronBarcode C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Raised in C# when a numeric-only barcode format receives non-digit characters in IronBarcode, such as EAN, UPC, or ITF input.`
- v2 (human): `Handle numeric-format errors in C#: this IronBarcode exception fires when EAN, UPC, or ITF input contains letters or symbols.`
- v3 (balanced): `Reference for IronBarCodeFormatOnlyAcceptsNumericValuesEncodingException in C#: a digit-only barcode received non-numeric data.`

---

## Structured data

**TechArticle abstract**

> IronBarCodeFormatOnlyAcceptsNumericValuesEncodingException is raised in C# when a digit-only barcode format such as EAN, UPC, or ITF receives a value that contains letters or symbols. Remove the non-numeric characters or choose an alphanumeric format such as Code 128, then encode again. It derives from IronBarCodeEncodingException.
