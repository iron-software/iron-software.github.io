<!--
N-Lite/enum. Members verified 2026-06-23: CodeA, CodeB, CodeC.
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.Code128CharacterSet.html
Consumer: Code128EncodingSegment.CharacterSet.
-->

## Injected overview (Markdown)

`Code128CharacterSet` selects which Code 128 character set a segment encodes, set on `Code128EncodingSegment.CharacterSet` to pack data efficiently. `CodeA` covers control characters, uppercase letters, and special characters, `CodeB` covers uppercase and lowercase letters, numbers, and special characters, and `CodeC` encodes numeric pairs from 00 to 99, the most compact option for digit-heavy data. The [create 1D barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/create-1d-barcodes/) covers writing Code 128.

```csharp
var segment = new Code128EncodingSegment { CharacterSet = Code128CharacterSet.CodeC };
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Code128CharacterSet Enum - IronBarcode C#`
- v2 (human): `Code128CharacterSet: Code 128 Sets in C#`
- v3 (balanced): `Code128CharacterSet | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select a Code 128 set in C# with the IronBarcode Code128CharacterSet enum: CodeA, CodeB, or CodeC, on Code128EncodingSegment.CharacterSet.`
- v2 (human): `Pick a Code 128 character set in C# with the IronBarcode Code128CharacterSet enum: CodeA, CodeB, or compact-digit CodeC.`
- v3 (balanced): `Reference for the IronBarcode Code128CharacterSet enum in C#: CodeA, CodeB, and CodeC sets for encoding Code 128 barcodes.`

---

## Structured data

**TechArticle abstract**

> Use Code128CharacterSet in IronBarcode to select which Code 128 character set a segment encodes, set on Code128EncodingSegment.CharacterSet. CodeA covers control and uppercase characters, CodeB adds lowercase and numbers, and CodeC encodes numeric pairs for the most compact digit data.
