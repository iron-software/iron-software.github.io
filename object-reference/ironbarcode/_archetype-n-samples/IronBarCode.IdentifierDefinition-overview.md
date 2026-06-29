<!--
N-Full (override; structured-data identifier definition). Frame C. IronBarcode.
Members verified 2026-06-23: Description, Format, Identifier, IsVariableLength, Length, MaxLength, Validator (Func<string, ValidationResult>). ValidationResult cross-ref verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.IdentifierDefinition.html
-->

## Injected overview (Markdown)

When a structured barcode payload such as a GS1 string needs to be split into named fields, `IdentifierDefinition` is the rule that describes one of those fields. Structured formats prefix each value with an identifier code that says what the value is and how long it runs, and a definition captures that contract for a single identifier so the parser knows where one field ends and the next begins. A developer works with these definitions when reading or validating application-identifier data rather than treating a barcode as one opaque string.

A definition states the shape of its field. `Identifier` is the code that introduces the field, `Description` is a human-readable label for it, and `Format` describes the expected content. Length is expressed by `Length` for fixed-width fields, with `IsVariableLength` flagging fields that can vary and `MaxLength` capping how far a variable field may run. These together let the parser carve a payload into the right pieces without guessing.

Validation rides on `Validator`, a `Func<string, ValidationResult>` that checks a candidate value and returns a `ValidationResult` reporting whether it is well formed. A developer reads these properties to understand how a field is recognized and constrained, and the resulting `ParsedElement` objects carry the data each definition extracted. Treat the definition as the read-only description of a field's rules. The [checksum and format validation how-to](https://ironsoftware.com/csharp/barcode/how-to/checksum-and-format-validation/) walks through validating structured values, and the [output data formats how-to](https://ironsoftware.com/csharp/barcode/how-to/output-data-formats/) shows how parsed fields are surfaced.

```csharp
using IronBarCode;

Console.WriteLine($"{definition.Identifier}: {definition.Description}");
ValidationResult check = definition.Validator(candidate);
Console.WriteLine(check.IsValid);
```

The [reading barcodes tutorial](https://ironsoftware.com/csharp/barcode/tutorials/reading-barcodes/) covers the wider read and parse workflow.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IdentifierDefinition - IronBarcode C# API`
- v2 (human): `IdentifierDefinition: Parse Fields in C#`
- v3 (balanced): `IdentifierDefinition | IronBarcode .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define a structured-data field in C# with IronBarcode IdentifierDefinition: Identifier, Format, Length, MaxLength, IsVariableLength, and Validator.`
- v2 (human): `Describe how a GS1 or structured barcode field is recognized in C# with IronBarcode IdentifierDefinition: its code, format, length, and validator.`
- v3 (balanced): `Reference for the IronBarcode IdentifierDefinition class in C#: the Identifier, Format, length rules, and Validator that define one parsed field.`

---

## Structured data

**TechArticle abstract**

> IdentifierDefinition describes one field of a structured barcode payload such as GS1 in C# with IronBarcode. Identifier is the field code, Description and Format describe its content, and Length, IsVariableLength, and MaxLength give its size rules. Validator, a Func of string to ValidationResult, checks a candidate value so the parser can recognize and validate each field while building ParsedElement results.

**FAQPage entries**

```json
[
  {
    "question": "Where does IdentifierDefinition live in the IronBarcode API?",
    "answer": "IdentifierDefinition is a class in the IronBarCode namespace, shipped in IronBarCode.dll, with base type Object. It supports parsing structured payloads by describing the rules for a single identifier field."
  },
  {
    "question": "How does IdentifierDefinition describe the size of a field in C#?",
    "answer": "Length gives the fixed width of the field, IsVariableLength flags fields whose length can vary, and MaxLength caps how far a variable field may run. Identifier holds the code that introduces the field and Format describes its expected content."
  },
  {
    "question": "How do you validate a field value with IdentifierDefinition?",
    "answer": "Call the Validator property, a Func of string to ValidationResult, with the candidate value. It returns a ValidationResult that reports whether the value is well formed, which the parser uses while turning a payload into ParsedElement objects."
  }
]
```
