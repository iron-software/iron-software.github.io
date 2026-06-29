<!--
N-Lite/exception. Declared: public class IronBarCodeConfidenceThresholdException : ArgumentException.
Namespace IronBarCode.Exceptions; assembly IronBarCode.dll.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Exceptions.IronBarCodeConfidenceThresholdException.html
-->

## Injected overview (Markdown)

A confidence-threshold value outside the range IronBarcode accepts triggers `IronBarCodeConfidenceThresholdException`. It is raised when reader options set a minimum confidence that is invalid, for example a number below zero or above the allowed maximum. Set the threshold to a value within the permitted range so detected barcodes can be filtered by reading confidence, then run the read again. Because it reports a bad argument, it derives from `ArgumentException` rather than the IronBarcode base exception.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ConfidenceThresholdException - IronBarcode C#`
- v2 (human): `IronBarcode: Invalid Confidence Threshold`
- v3 (balanced): `Confidence Threshold Error | IronBarcode C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Raised in C# when an IronBarcode reader's confidence threshold is set outside the accepted range, such as below zero or above the maximum.`
- v2 (human): `Handle invalid confidence settings in C#: this IronBarcode exception fires when the reader's confidence threshold is out of range.`
- v3 (balanced): `Reference for IronBarCodeConfidenceThresholdException in C#: a barcode reader's confidence threshold value is out of range.`

---

## Structured data

**TechArticle abstract**

> IronBarCodeConfidenceThresholdException is raised in C# when an IronBarcode reader is given a confidence threshold outside the accepted range, such as a value below zero or above the maximum. Set the threshold within the permitted range so results can be filtered by reading confidence, then read again. It derives from ArgumentException.
