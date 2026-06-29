<!--
N-Full (override; parse outcome class). Frame D. IronBarcode.
Members verified 2026-06-23: CharacterSetSummary, Elements (List<ParsedElement>), EncodingInfo (Code128EncodingInfo), Errors (List<string>), FormattedString, HasEncodingInfo, Success, Warnings (List<string>). Cross-refs ParsedElement, Code128EncodingInfo verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.ParseResult.html
-->

## Injected overview (Markdown)

Parsing a structured barcode payload into named fields hands a developer a `ParseResult`. A raw Code 128 or GS1 value carries several application-identifier fields packed together, and parsing breaks that string into typed pieces while recording anything that did not check out. The result object is what a developer reads to decide whether the parse can be trusted and to reach the individual fields it produced.

The headline is `Success`, a flag that says whether parsing completed cleanly, paired with `Errors` and `Warnings`, both `List<string>`, that explain any problems found. A developer checks `Success` first, then surfaces the diagnostics when it is false. The parsed data itself lives in `Elements`, a `List<ParsedElement>` where each entry holds one recognized field with its own validity state.

The remaining members add context. `FormattedString` renders the parsed payload in a readable form suited to logs or a display field, and `CharacterSetSummary` describes the character sets the source data used. `HasEncodingInfo` reports whether encoding detail is available, and when it is, `EncodingInfo` returns the `Code128EncodingInfo` that documents how the symbol was packed. Checking `HasEncodingInfo` before reading `EncodingInfo` avoids a null reference when a parse produced no encoding report. Treat the result as read-only output describing one parse, iterating `Elements` for the data and consulting `Errors` for what went wrong. Because the diagnostics are separated from the data, an application can accept the valid fields and report the failed ones rather than discarding the whole read. The [output data formats how-to](https://ironsoftware.com/csharp/barcode/how-to/output-data-formats/) shows how to present parsed results, and the [checksum and format validation how-to](https://ironsoftware.com/csharp/barcode/how-to/checksum-and-format-validation/) covers validating the underlying values.

```csharp
using IronBarCode;

if (result.Success)
    foreach (ParsedElement element in result.Elements)
        Console.WriteLine($"{element.Identifier}: {element.Data}");
else
    Console.WriteLine(string.Join("; ", result.Errors));
```

The [reading barcodes tutorial](https://ironsoftware.com/csharp/barcode/tutorials/reading-barcodes/) covers the full read and parse workflow.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParseResult - IronBarcode C# API Reference`
- v2 (human): `ParseResult: Read Parsed Fields in C#`
- v3 (balanced): `ParseResult Class | IronBarcode .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read a structured-barcode parse outcome in C# with IronBarcode ParseResult: Success, Elements, Errors, Warnings, and EncodingInfo.`
- v2 (human): `Check whether a structured barcode parsed in C# with IronBarcode ParseResult: read Success, iterate Elements, and surface Errors and Warnings.`
- v3 (balanced): `Reference for the IronBarcode ParseResult class in C#: Success, the Elements list of parsed fields, Errors, Warnings, and EncodingInfo.`

---

## Structured data

**TechArticle abstract**

> ParseResult holds the outcome of parsing a structured barcode payload in C# with IronBarcode. Success reports whether parsing completed cleanly, Errors and Warnings list any problems, and Elements is a List of ParsedElement with one entry per recognized field. FormattedString and CharacterSetSummary add readable context, while HasEncodingInfo and EncodingInfo expose the Code128EncodingInfo when encoding detail is available.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParseResult live in the IronBarcode API?",
    "answer": "ParseResult is a class in the IronBarCode namespace, shipped in IronBarCode.dll, with base type Object. It is read-only output from parsing a structured payload; read Success, then iterate Elements for the recognized fields."
  },
  {
    "question": "How do you check whether a structured barcode parsed correctly in C#?",
    "answer": "Read the Success property of ParseResult. When it is false, Errors and Warnings, both lists of strings, explain what went wrong. When it is true, iterate the Elements list of ParsedElement to read each recognized field."
  },
  {
    "question": "How do you get encoding detail from a ParseResult?",
    "answer": "Check HasEncodingInfo, and when it is true read EncodingInfo, which returns a Code128EncodingInfo describing how the symbol was packed. FormattedString and CharacterSetSummary give a readable rendering and the character sets the source data used."
  }
]
```
