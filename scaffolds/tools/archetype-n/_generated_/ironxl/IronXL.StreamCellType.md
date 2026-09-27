<!--
N-Lite/enum. Members verified: Blank, Boolean, Date, Error, Number, String.
Target: IronXL.StreamCellType enum reference page.
-->

## Injected overview (Markdown)

`StreamCellType` identifies the kind of value held by a `StreamCell` when reading an XLSX worksheet in forward-only streaming mode. `Blank` is the default for empty cells. `Number`, `String`, and `Boolean` cover the most common data types, `Date` handles date-serial values, and `Error` flags formula errors. Check `StreamCell.CellType` against these members to branch your parsing logic safely. See the [streaming how-to](https://ironsoftware.com/csharp/excel/how-to/stream-excel-file/) for a complete walkthrough.

```csharp
if (cell.CellType == StreamCellType.Number) Console.WriteLine(cell.NumericValue);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `StreamCellType Enum - IronXL C# API Reference`
- v2 (human): `StreamCellType: Identify Cell Value Types in C#`
- v3 (balanced): `StreamCellType Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Reference for the IronXL StreamCellType enum in C#: Blank, Number, String, Boolean, Date, and Error values for forward-only XLSX streaming.`
- v2 (human): `Use the IronXL StreamCellType enum in C# to identify cell value kinds while streaming XLSX files: Number, String, Boolean, Date, Error, or Blank.`
- v3 (balanced): `IronXL StreamCellType enum reference for C#: detect Blank, Number, String, Boolean, Date, and Error cells during forward-only XLSX streaming.`

---

## Structured data

**TechArticle abstract**

> StreamCellType identifies the value kind held by a StreamCell during forward-only XLSX streaming in IronXL. Blank covers empty cells, Number, String, and Boolean handle the most common data types, Date represents date-serial values, and Error flags formula errors. Check StreamCell.CellType against these members to branch parsing logic by type.