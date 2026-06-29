<!--
N-Mid (6 static methods). Frame C. IronBarcode. Members verified 2026-06-23.
Return types ParseResult / Code128EncodingInfo / List<ParsedElement> verified on page.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Code128GS1Parser.html
-->

## Injected overview (Markdown)

When a GS1 Code 128 string needs validating, formatting, or breaking into its application identifiers, `Code128GS1Parser` does the work. Every member is static, so call the methods directly without constructing an instance. GS1 encodes structured data, such as a GTIN, batch, and expiry, into one Code 128 string using application identifiers, and this parser reads that structure back out.

`Parse` takes a GS1 input string and returns a `ParseResult` describing the parsed content, while `ParseWithEncoding` does the same and can include encoding detail through its `includeEncoding` flag. `IsValid` returns a `bool` for a quick conformance check before encoding or storing a value, and `Format` returns a normalized `string` form of the input. `ExtractElements` returns a `List<ParsedElement>`, one entry per application identifier and its value, which is the method to reach for when an application needs each field separately. `GetEncodingInfo` returns a `Code128EncodingInfo` for the input, with an `isGS1` flag to indicate GS1 handling. To generate a GS1 Code 128 code rather than parse one, use `BarcodeWriter.CreateBarcode` with `BarcodeEncoding.Code128GS1`.

```csharp
using IronBarCode;

if (Code128GS1Parser.IsValid(input))
{
    ParseResult result = Code128GS1Parser.Parse(input);
}
```

The [create 1D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-1d-barcodes/) generates Code 128 codes, and the [checksum and format validation how-to](https://ironsoftware.com/csharp/barcode/how-to/checksum-and-format-validation/) covers validating encoded values.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Code128GS1Parser - IronBarcode C# API`
- v2 (human): `Code128GS1Parser: Parse GS1 Codes in C#`
- v3 (balanced): `Code128GS1Parser | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Parse GS1 Code 128 strings in C# with the IronBarcode Code128GS1Parser class: static Parse, IsValid, Format, and ExtractElements for application identifiers.`
- v2 (human): `Validate and break apart GS1 Code 128 data in C# with the IronBarcode Code128GS1Parser class: parse, check validity, format, and extract fields.`
- v3 (balanced): `Reference for the IronBarcode Code128GS1Parser class in C#: static methods to parse, validate, format, and extract GS1 Code 128 elements.`

---

## Structured data

**TechArticle abstract**

> Parsing GS1 Code 128 strings in C# runs through the IronBarcode Code128GS1Parser class. Its static methods read structured GS1 data back out: Parse and ParseWithEncoding return a ParseResult, IsValid checks conformance, Format normalizes the string, ExtractElements returns a List of ParsedElement for each application identifier, and GetEncodingInfo returns a Code128EncodingInfo.

**FAQPage entries**

```json
[
  {
    "question": "Where does Code128GS1Parser live in the IronBarcode API?",
    "answer": "Code128GS1Parser is a static class in the IronBarCode namespace, shipped in IronBarCode.dll. Call its methods such as Parse and IsValid directly, with no instance to construct."
  },
  {
    "question": "How do you extract the fields from a GS1 Code 128 string in C#?",
    "answer": "Call Code128GS1Parser.ExtractElements to get a List of ParsedElement, one per application identifier and value. Parse returns a ParseResult for the whole string, and IsValid checks conformance first."
  }
]
```
