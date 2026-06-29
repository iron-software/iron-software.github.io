<!--
N-Lite/enum. Members verified 2026-06-23: Between, Equal, GreaterThan, GreaterThanOrEqual,
LessThan, LessThanOrEqual, NoComparison, NotBetween, NotEqual. (value__ omitted.)
Distinct from IronXL.DataValidations.ComparisonOperator: this one HAS NoComparison; namespace differs.
Cross-ref: consumed by CreateConditionalFormattingRule and ConditionalFormattingRule.ComparisonOperation (verified).
Namespace from URL: IronXL.Formatting.Enums.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.Enums.ComparisonOperator.html
-->

## Injected overview (Markdown)

`ComparisonOperator` chooses the test a conditional formatting rule applies to a cell, passed to `CreateConditionalFormattingRule` and read from `ConditionalFormattingRule.ComparisonOperation`. `LessThan`, `GreaterThan`, `Equal`, `NotEqual`, and the `OrEqual` variants test a single value, while `Between` and `NotBetween` check a low and high bound. `NoComparison` marks a category rule such as a color scale. This is the conditional formatting operator in `IronXL.Formatting.Enums`, separate from the same-named type in `IronXL.DataValidations`, which has no `NoComparison` value. The [conditional formatting how-to](https://ironsoftware.com/csharp/excel/how-to/conditional-formatting/) shows operator-driven rules.

```csharp
var rule = sheet.ConditionalFormatting.CreateConditionalFormattingRule(ComparisonOperator.LessThan, "8");
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ComparisonOperator Enum - IronXL C# API`
- v2 (human): `ComparisonOperator: Formatting Tests in C#`
- v3 (balanced): `ComparisonOperator Enum | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Pick a conditional formatting test in C# with IronXL's ComparisonOperator enum: LessThan, GreaterThan, Between, NotBetween, Equal, and NoComparison.`
- v2 (human): `Choose how an IronXL conditional formatting rule tests a cell in C# with the ComparisonOperator enum: single-value comparisons or bounded ranges.`
- v3 (balanced): `Reference for the IronXL.Formatting.Enums ComparisonOperator enum in C#: the tests passed to CreateConditionalFormattingRule, plus NoComparison.`

---

## Structured data

**TechArticle abstract**

> ComparisonOperator chooses the test a conditional formatting rule applies to a cell in IronXL for C#, passed to CreateConditionalFormattingRule and read from ConditionalFormattingRule.ComparisonOperation. LessThan, GreaterThan, Equal, NotEqual, and the OrEqual variants test a single value, Between and NotBetween check a low and high bound, and NoComparison marks a category rule. It is the IronXL.Formatting.Enums operator set, separate from the data validation enum.
