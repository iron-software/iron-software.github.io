<!--
N-Full (override; segment detail class). Frame E. IronBarcode.
Members verified 2026-06-23: CharacterSet (Code128CharacterSet), CharacterSetName, CharacterSetShort, Data, Length, StartPosition, SymbolCount, ToString. Code128CharacterSet + Code128EncodingInfo cross-ref verified.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Code128EncodingSegment.html
-->

## Injected overview (Markdown)

One contiguous run of Code 128 data encoded under a single character set is described by `Code128EncodingSegment`. A Code 128 barcode rarely stays in one set: the encoder shifts between sets A, B, and C to pack control codes, mixed text, and digit pairs efficiently, and each shift starts a new segment. A developer reaches for this object when the goal is to understand, run by run, exactly how a payload was laid out inside the symbol.

A segment sits inside the `Segments` list on `Code128EncodingInfo`, so a developer obtains it by inspecting an encoding report rather than constructing it directly. The object pins the run to its place and set. `CharacterSet` returns the `Code128CharacterSet` value that encoded the run, with `CharacterSetName` and `CharacterSetShort` giving readable and abbreviated labels for that set. `Data` holds the characters this run carried.

The position and size fields locate and measure the run. `StartPosition` is the run's offset within the original data, `Length` is how many source characters it covers, and `SymbolCount` is how many barcode symbols it consumed once encoded. Reading these together shows where a costly set switch happened and how many symbols it added, which is the practical way to explain why one input produced a wider barcode than another. The segment is read-only detail describing a finished encoding, so treat it as a measurement rather than a setting. The [output data formats how-to](https://ironsoftware.com/csharp/barcode/how-to/output-data-formats/) shows how to surface these results, and the [reading barcodes tutorial](https://ironsoftware.com/csharp/barcode/tutorials/reading-barcodes/) covers the surrounding read workflow.

```csharp
using IronBarCode;

foreach (Code128EncodingSegment segment in info.Segments)
    Console.WriteLine(
        $"{segment.CharacterSetName} @ {segment.StartPosition}: {segment.Data} ({segment.SymbolCount} symbols)");
```

The [checksum and format validation how-to](https://ironsoftware.com/csharp/barcode/how-to/checksum-and-format-validation/) walks through validating encoded data.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Code128EncodingSegment - IronBarcode C# API`
- v2 (human): `Code128EncodingSegment: Read Runs in C#`
- v3 (balanced): `Code128EncodingSegment | IronBarcode .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Inspect a Code 128 encoding run in C# with IronBarcode Code128EncodingSegment: CharacterSet, Data, StartPosition, Length, and SymbolCount.`
- v2 (human): `See how each run of a Code 128 barcode was encoded in C# with IronBarcode Code128EncodingSegment: its character set, data, position, and symbols.`
- v3 (balanced): `Reference for the IronBarcode Code128EncodingSegment class in C#: read the character set, data, position, and symbol count of one Code 128 run.`

---

## Structured data

**TechArticle abstract**

> Code128EncodingSegment describes one run of Code 128 data encoded under a single character set in C# with IronBarcode. Found in the Segments list of Code128EncodingInfo, each segment exposes CharacterSet, CharacterSetName, and CharacterSetShort for the set used, Data for the characters carried, and StartPosition, Length, and SymbolCount to locate and measure the run within the barcode.

**FAQPage entries**

```json
[
  {
    "question": "Where does Code128EncodingSegment live in the IronBarcode API?",
    "answer": "Code128EncodingSegment is a class in the IronBarCode namespace, shipped in IronBarCode.dll, with base type Object. Instances arrive in the Segments list of Code128EncodingInfo rather than being constructed directly."
  },
  {
    "question": "How do you tell which Code 128 character set encoded a run in C#?",
    "answer": "Read the CharacterSet property of Code128EncodingSegment, which returns a Code128CharacterSet value, or use CharacterSetName and CharacterSetShort for readable labels. The Data property holds the characters that run encoded."
  },
  {
    "question": "What do StartPosition, Length, and SymbolCount mean on a segment?",
    "answer": "StartPosition is the run's offset in the original data, Length is how many source characters it covers, and SymbolCount is how many barcode symbols it used. Together they show where a character-set switch happened and how many symbols it cost."
  }
]
```
