<!--
N-Full (override; central encoding-report class). Frame B. IronBarcode.
Members verified 2026-06-23: CharacterSetSummary, IsGS1, OriginalData, Segments (List<Code128EncodingSegment>), TotalSymbols, ToString. Cross-ref Code128EncodingSegment verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Code128EncodingInfo.html
-->

## Injected overview (Markdown)

`Code128EncodingInfo` is the report a developer reads back to learn how a string was packed into a Code 128 barcode. Code 128 switches between three character sets (A, B, and C) to pack letters, digits, and control codes as compactly as possible, and this object spells out exactly which sets were used and where. It is what you inspect when a Code 128 symbol is wider or narrower than expected and the question is why the encoder made the choices it did.

The object describes a single Code 128 encoding rather than driving the read or write. `OriginalData` holds the source string that was encoded, `TotalSymbols` reports how many symbols the resulting barcode contains, and `IsGS1` flags whether the data follows the GS1 application-identifier convention used on retail and logistics labels. The detail that makes the report useful is `Segments`, a `List<Code128EncodingSegment>` that breaks the data into runs, each tagged with the character set that encoded it.

Read `Segments` to walk the encoding run by run, since that is where the set switches and their symbol costs become visible. `CharacterSetSummary` gives the same breakdown as a short readable string for logging or a quick console check, so a developer can confirm the layout without iterating. Treat the object as read-only output describing one barcode, not a configuration surface. Because the segment list reflects the encoder's real decisions, comparing it across inputs is the practical way to understand why one payload produced a denser symbol than another. The [output data formats how-to](https://ironsoftware.com/csharp/barcode/how-to/output-data-formats/) shows how to surface read results, and the [reading barcodes tutorial](https://ironsoftware.com/csharp/barcode/tutorials/reading-barcodes/) covers the wider read workflow.

```csharp
using IronBarCode;

Code128EncodingInfo info = result.EncodingInfo;
Console.WriteLine(info.CharacterSetSummary);
foreach (Code128EncodingSegment segment in info.Segments)
    Console.WriteLine($"{segment.CharacterSetName}: {segment.Data}");
```

The [checksum and format validation how-to](https://ironsoftware.com/csharp/barcode/how-to/checksum-and-format-validation/) walks through validating encoded payloads end to end.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Code128EncodingInfo - IronBarcode C# API`
- v2 (human): `Code128EncodingInfo: Inspect Encoding in C#`
- v3 (balanced): `Code128EncodingInfo Class | IronBarcode .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Inspect how a Code 128 barcode was encoded in C# with the IronBarcode Code128EncodingInfo class: OriginalData, TotalSymbols, IsGS1, and Segments.`
- v2 (human): `See exactly how a Code 128 string was packed in C# with IronBarcode Code128EncodingInfo: character-set segments, total symbols, and GS1 status.`
- v3 (balanced): `Reference for the IronBarcode Code128EncodingInfo class in C#: read the Segments list, CharacterSetSummary, and TotalSymbols for a Code 128 barcode.`

---

## Structured data

**TechArticle abstract**

> Code128EncodingInfo reports how a string was encoded into a Code 128 barcode in C# with IronBarcode. OriginalData holds the source string, TotalSymbols counts the symbols produced, IsGS1 flags GS1 application-identifier data, and Segments breaks the data into character-set runs as a List of Code128EncodingSegment. CharacterSetSummary renders the same breakdown as a readable string for logging.

**FAQPage entries**

```json
[
  {
    "question": "Where does Code128EncodingInfo live in the IronBarcode API?",
    "answer": "Code128EncodingInfo is a class in the IronBarCode namespace, shipped in IronBarCode.dll, with base type Object. It is read-only output describing one Code 128 encoding; read its Segments list and CharacterSetSummary to inspect how the data was packed."
  },
  {
    "question": "How do you see which Code 128 character sets a barcode used in C#?",
    "answer": "Read the Segments property of Code128EncodingInfo, a List of Code128EncodingSegment. Each segment names the character set that encoded its run of data. CharacterSetSummary gives the same breakdown as a short string for quick logging."
  },
  {
    "question": "What does the IsGS1 property on Code128EncodingInfo indicate?",
    "answer": "IsGS1 returns true when the encoded data follows the GS1 application-identifier convention used on retail and logistics labels. TotalSymbols reports how many symbols the resulting Code 128 barcode contains, and OriginalData holds the source string that was encoded."
  }
]
```
