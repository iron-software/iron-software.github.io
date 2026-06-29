<!--
N-Lite/enum. Members verified 2026-06-23: AnyData, Custom, Date, Decimal, List, TextLength, Time, WholeNumber.
(value__ omitted.) Cross-ref: DataValidation.ConstraintType property typed ConstraintType (verified).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.DataValidations.ConstraintType.html
-->

## Injected overview (Markdown)

`ConstraintType` names the kind of data a validation rule allows in a cell, reported by the `ConstraintType` property on a `DataValidation`. `WholeNumber` and `Decimal` restrict numbers, `Date` and `Time` restrict temporal entries, and `TextLength` constrains character count. `List` limits a cell to a drop-down set, `Custom` validates against a formula, and `AnyData` applies no restriction. The factory methods on a worksheet's `DataValidations` set the matching constraint automatically. The [data validation example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows typed rules.

```csharp
DataValidation rule = sheet.DataValidations.AddDecimalRule("A1:A10", ComparisonOperator.GreaterThan, 0, null);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ConstraintType Enum - IronXL C# API`
- v2 (human): `ConstraintType: Validation Data Kinds in C#`
- v3 (balanced): `ConstraintType Enum | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the allowed data kind for an Excel rule in C# with IronXL's ConstraintType enum: WholeNumber, Decimal, Date, Time, TextLength, List, Custom.`
- v2 (human): `Choose what kind of data a validation rule accepts in C# with IronXL's ConstraintType enum: numbers, dates, text length, lists, or formulas.`
- v3 (balanced): `Reference for the IronXL ConstraintType enum in C#: the data kind a DataValidation rule allows, from WholeNumber and Date to List and Custom.`

---

## Structured data

**TechArticle abstract**

> ConstraintType names the kind of data a validation rule allows in a cell in IronXL for C#, reported by the ConstraintType property on a DataValidation. WholeNumber and Decimal restrict numbers, Date and Time restrict temporal entries, and TextLength constrains character count. List limits a cell to a drop-down set, Custom validates against a formula, and AnyData applies no restriction. The DataValidations factory methods set the matching constraint automatically.
