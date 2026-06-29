<!--
N-Full. Frame E (feature-fronted) lead; abstract frame C. IronXL. Members verified 2026-06-23 against IronXL.RangeAddress.html:
FirstColumn, FirstRow, LastColumn, LastRow, ColumnsCount, RowsCount, Includes, Extend, GetIntersection, IsEqual, Location, ToString.
Range.RangeAddress cross-ref verified on IronXL.Range.html.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.RangeAddress.html
-->

## Injected overview (Markdown)

The location and size of a cell block in C#, the bounds behind a selection like `A1:C10`, are what `RangeAddress` describes. It captures the first and last rows and columns of a range as a structured value, so code can ask where a range sits, how big it is, and whether two ranges overlap without re-parsing address strings. A developer reaches for it when a range's position matters as data, not just its cells.

Every `Range` exposes its bounds through the `RangeAddress` property, which is the usual way to obtain one. From there `FirstRow`, `FirstColumn`, `LastRow`, and `LastColumn` give the four corners as numbers, and `RowsCount` and `ColumnsCount` report the dimensions. `Location` returns the address in a string form, and `ToString` does the same for display or logging.

The comparison members answer the geometry questions that come up when ranges interact. `Includes` tests whether a given row and column fall inside the address, `IsEqual` checks whether two addresses cover the same cells, and `GetIntersection` returns the overlapping region of two ranges as a new `RangeAddress`. `Extend` grows an address to also cover another one, which is useful when merging adjacent selections. Reading these bounds does not change the underlying cells, since a `RangeAddress` describes a region rather than holding the data inside it, so it pairs with the `Range` it came from rather than replacing it.

```csharp
using IronXL;

WorkBook workBook = WorkBook.Load("sample.xlsx");
WorkSheet workSheet = workBook.GetWorkSheet("Sheet1");
RangeAddress address = workSheet["A1:C10"].RangeAddress;
Console.WriteLine(address.RowsCount);
Console.WriteLine(address.ColumnsCount);
```

The [select range how-to](https://ironsoftware.com/csharp/excel/how-to/select-range/) covers building ranges, the [combine ranges example](https://ironsoftware.com/csharp/excel/examples/combine-excel-ranges/) joins selections, and the [trim cell range how-to](https://ironsoftware.com/csharp/excel/how-to/trim-cell-range/) narrows one.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RangeAddress Class - IronXL C# API`
- v2 (human): `RangeAddress: Excel Range Bounds in C#`
- v3 (balanced): `RangeAddress Class | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Describe the bounds of an Excel range in C# with the IronXL RangeAddress: FirstRow, LastColumn, RowsCount, plus Includes, GetIntersection, and Extend.`
- v2 (human): `Read where a cell block sits in C# through the IronXL RangeAddress class: its first and last rows and columns, its size, and how it overlaps others.`
- v3 (balanced): `Reference for the IronXL RangeAddress class in C#: a range's first and last rows and columns, RowsCount, and overlap tests like Includes and GetIntersection.`

---

## Structured data

**TechArticle abstract**

> When a range's position and size matter as data in C#, the IronXL RangeAddress describes them. A Range exposes its bounds through the RangeAddress property, which reports FirstRow, FirstColumn, LastRow, LastColumn, RowsCount, and ColumnsCount. Includes tests whether a cell falls inside, IsEqual compares two addresses, GetIntersection returns the overlap, and Extend grows an address to cover another.

**FAQPage entries**

```json
[
  {
    "question": "Where does RangeAddress live in the IronXL API?",
    "answer": "RangeAddress is a class in the IronXL namespace, shipped in IronXL.dll, and derives from Object. A Range exposes its own bounds through the RangeAddress property."
  },
  {
    "question": "How do you get the size of a range in C#?",
    "answer": "Read RowsCount and ColumnsCount on the Range.RangeAddress. FirstRow, FirstColumn, LastRow, and LastColumn give the four corners of the block as numbers."
  },
  {
    "question": "How do you find where two ranges overlap with IronXL?",
    "answer": "Call GetIntersection on one RangeAddress, passing another, to get the overlapping region as a new RangeAddress. Includes checks whether a single row and column fall inside, and IsEqual tests whether two addresses match."
  }
]
```
