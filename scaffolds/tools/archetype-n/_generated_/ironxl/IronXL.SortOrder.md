<!--
N-Lite/enum. Members verified 2026-06-23: Ascending, Descending.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.SortOrder.html
-->

## Injected overview (Markdown)

`SortOrder` sets the direction `IronXL` orders cells when a range, row, or column is sorted, passed to `Range.SortByColumn` and the related sort methods. `Ascending` arranges values from lowest to highest or A to Z, and `Descending` reverses that to highest first or Z to A. The [sort Excel range example](https://ironsoftware.com/csharp/excel/examples/sort-excel-range-csharp/) shows both directions applied to a worksheet.

```csharp
range.SortByColumn(0, SortOrder.Ascending);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SortOrder Enum - IronXL C# API Reference`
- v2 (human): `SortOrder: Sort Excel Cells in C#`
- v3 (balanced): `SortOrder Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the sort direction in C# with the IronXL SortOrder enum: Ascending or Descending, passed to Range.SortByColumn and related methods.`
- v2 (human): `Order Excel cells in C# with the IronXL SortOrder enum: Ascending for lowest-to-highest or Descending to reverse the sort.`
- v3 (balanced): `Reference for the IronXL SortOrder enum in C#: Ascending and Descending directions for sorting a range, row, or column.`

---

## Structured data

**TechArticle abstract**

> Use SortOrder in IronXL to set the direction cells are ordered when a range, row, or column is sorted, passed to Range.SortByColumn and related methods. Ascending arranges values from lowest to highest or A to Z, and Descending reverses that to highest first or Z to A.
