<!--
N-Full (result type for custom data validation). Frame D. IronBarCode.
Members verified 2026-06-23: IsValid(bool), Errors/Warnings(List<string>),
static Valid()/Invalid(string)/Warning(string) returning ValidationResult.
Produced by IdentifierDefinition.Validator (Func<string, ValidationResult>). Base Object.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.ValidationResult.html
-->

## Injected overview (Markdown)

Reporting whether scanned barcode data passed a custom rule runs through `ValidationResult`. It represents the outcome of validating a decoded value, carrying a pass or fail flag along with any error and warning messages collected during the check. A developer meets this type when wiring custom validation into barcode reading, where a rule decides whether a decoded payload, such as a SKU or serial format, is acceptable.

A `ValidationResult` is produced rather than configured. The validation function supplied to an `IdentifierDefinition`, a `Func<string, ValidationResult>`, returns one for each value it inspects, and IronBarcode reads it to decide whether the data is valid. Code writes a `ValidationResult` from inside a validator and reads it where the validation outcome is consumed, so the same type bridges the rule and the caller that acts on it.

Three static factory methods build the common outcomes without manual construction. `Valid()` returns a passing result, `Invalid(string)` returns a failing result carrying the error message supplied, and `Warning(string)` returns a result that flags a concern without failing outright. On the returned object, `IsValid` reports the boolean verdict, `Errors` lists the failure messages as a `List<string>`, and `Warnings` lists the non-fatal notes the same way. A validator typically returns `ValidationResult.Valid()` when a value matches its expected format and `ValidationResult.Invalid("reason")` when it does not, and the consuming code then checks `IsValid` and surfaces `Errors` to the user. Use the factory methods to produce results and the properties to inspect them.

```csharp
using IronBarCode;

ValidationResult result =
    value.Length == 8 ? ValidationResult.Valid() : ValidationResult.Invalid("Expected 8 digits");
if (!result.IsValid)
    Console.WriteLine(string.Join(", ", result.Errors));
```

The [checksum and format validation how-to](https://ironsoftware.com/csharp/barcode/how-to/checksum-and-format-validation/) covers validating decoded data, the [detailed error messages how-to](https://ironsoftware.com/csharp/barcode/how-to/detailed-error-messages/) surfaces validation output, and the [read barcodes from images how-to](https://ironsoftware.com/csharp/barcode/how-to/read-barcodes-from-images/) shows the read these rules check.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ValidationResult Class - IronBarcode C# API`
- v2 (human): `ValidationResult: Validate Barcode Data in C#`
- v3 (balanced): `ValidationResult Class | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Report barcode validation in C# with the IronBarcode ValidationResult class: IsValid, Errors, Warnings, and the Valid, Invalid, Warning factories.`
- v2 (human): `Validate decoded barcode data in C# with the IronBarcode ValidationResult class: return Valid, Invalid, or Warning and read IsValid and Errors.`
- v3 (balanced): `Reference for the IronBarcode ValidationResult class in C#: the pass or fail outcome of validating barcode data, with errors and warnings.`

---

## Structured data

**TechArticle abstract**

> Reporting whether scanned barcode data passed a custom rule runs through the IronBarcode ValidationResult class in C#. A validation function returns one per value: build it with the static Valid, Invalid, or Warning factory methods. Read IsValid for the verdict, and Errors and Warnings for the messages, each a List of strings. It is produced by the validator on an IdentifierDefinition.

**FAQPage entries**

```json
[
  {
    "question": "Where does ValidationResult live in the IronBarcode API?",
    "answer": "ValidationResult is a class in the IronBarCode namespace, shipped in IronBarCode.dll, deriving from Object. A validation function returns one, built with the static Valid, Invalid, and Warning factory methods."
  },
  {
    "question": "How do I report a barcode validation outcome in C#?",
    "answer": "Return ValidationResult.Valid() when the decoded value passes, ValidationResult.Invalid(message) when it fails, or ValidationResult.Warning(message) for a non-fatal concern. The caller reads IsValid and the Errors and Warnings lists."
  },
  {
    "question": "What is the difference between Errors and Warnings on a ValidationResult?",
    "answer": "Errors is a List of strings describing failures that make IsValid false, returned by ValidationResult.Invalid. Warnings is a List of strings flagging concerns that do not fail the result, returned by ValidationResult.Warning."
  }
]
```
