<!--
N-Lite/enum. Members verified 2026-06-23: Between, Equal, GreaterThan, GreaterThanOrEqual,
LessThan, LessThanOrEqual, NotBetween, NotEqual. (value__ is the internal backing field, omitted.)
Distinct from IronXL.Formatting.Enums.ComparisonOperator: this one has no NoComparison member.
Cross-ref: consumed by DataValidationsCollection.AddIntegerRule and DataValidation.ComparisonOperator (verified).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.DataValidations.ComparisonOperator.html
-->

## Injected overview (Markdown)

`ComparisonOperator` chooses the test a data validation rule applies to a cell entry, passed to the `AddIntegerRule`, `AddDecimalRule`, `AddDateRule`, and `AddTextLengthRule` methods on a worksheet's `DataValidations`. `Between` and `NotBetween` check a value against a low and high bound. `Equal`, `NotEqual`, `GreaterThan`, `GreaterThanOrEqual`, `LessThan`, and `LessThanOrEqual` test a single value. This is the data validation operator set, separate from the same-named type in `IronXL.Formatting.Enums`. The [data validation example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows a bounded rule.

```csharp
sheet.DataValidations.AddIntegerRule("A1:A10", ComparisonOperator.Between, 1, 100);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ComparisonOperator Enum - IronXL C# API`
- v2 (human): `ComparisonOperator: Validation Tests in C#`
- v3 (balanced): `ComparisonOperator Enum | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Pick a data validation test in C# with IronXL's ComparisonOperator enum: Between, NotBetween, Equal, GreaterThan, LessThan, and the OrEqual variants.`
- v2 (human): `Choose how IronXL validates Excel cell input in C# with the ComparisonOperator enum: bounded Between rules or single-value comparisons.`
- v3 (balanced): `Reference for the IronXL.DataValidations ComparisonOperator enum in C#: the comparison tests passed to data validation Add rule methods.`

---

## Structured data

**TechArticle abstract**

> ComparisonOperator chooses the test a data validation rule applies to a cell entry in IronXL for C#, passed to the AddIntegerRule, AddDecimalRule, AddDateRule, and AddTextLengthRule methods. Between and NotBetween check a low and high bound, while Equal, NotEqual, GreaterThan, GreaterThanOrEqual, LessThan, and LessThanOrEqual test a single value. It is the IronXL.DataValidations operator set, separate from the conditional formatting enum.
