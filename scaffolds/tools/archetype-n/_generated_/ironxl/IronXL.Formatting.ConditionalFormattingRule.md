<!--
N-Full (7 properties; requested treatment=full). Frame D. IronXL.
Members verified 2026-06-23: BorderFormatting, ComparisonOperation, ConditionType, FontFormatting,
Formula1, Formula2, PatternFormatting (all properties).
Disambiguation: ComparisonOperation is typed IronXL.Formatting.Enums.ComparisonOperator (verified by href),
NOT IronXL.DataValidations.ComparisonOperator. ConditionType property typed ConditionType (verified).
Cross-ref: CreateConditionalFormattingRule returns this type (ISheetConditionalFormatting verified).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.ConditionalFormattingRule.html
-->

## Injected overview (Markdown)

Styling cells when they meet a condition runs through `ConditionalFormattingRule`. One rule pairs a test (a comparison against a value or a category) with the formatting applied when the test passes, so a developer expresses "color this cell red when it is below 8" as a single object. It is the rule a developer builds behind a search like "C# Excel conditional formatting rule".

A rule is produced by `CreateConditionalFormattingRule` on a worksheet's conditional formatting accessor, then attached to a cell range with `AddConditionalFormatting`. The factory call sets the rule's `ComparisonOperation` and `Formula1`; the returned object is then configured with the styles to apply and added to the sheet. The rule belongs to the formatting pass that runs when the workbook is saved or evaluated.

Two groups of members do the work. The condition group decides when the rule fires: `ConditionType` reports the category (cell-value comparison, formula, color scale, and similar), `ComparisonOperation` holds the operator from the `IronXL.Formatting.Enums.ComparisonOperator` set such as `LessThan` or `Between`, and `Formula1` and `Formula2` carry the compared values, with `Formula2` used by range operators like `Between`. The styling group decides what the rule does: `FontFormatting` sets font and color, `BorderFormatting` sets borders, and `PatternFormatting` sets the background fill and pattern. Note that `ComparisonOperation` uses the formatting enum, which differs from the same-named operator in `IronXL.DataValidations` used for data validation rules; the two are separate types with separate members.

```csharp
using IronXL;
using IronXL.Formatting;

WorkSheet sheet = WorkBook.Create().DefaultWorkSheet;
ConditionalFormattingRule rule =
    sheet.ConditionalFormatting.CreateConditionalFormattingRule(ComparisonOperator.LessThan, "8");
rule.FontFormatting.IsBold = true;
sheet.ConditionalFormatting.AddConditionalFormatting("A1:A10", rule);
```

The [conditional formatting how-to](https://ironsoftware.com/csharp/excel/how-to/conditional-formatting/) walks through creating and styling a rule, the [conditional formatting example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) applies one to a range, and the [style cells example](https://ironsoftware.com/csharp/excel/examples/excel-style-cells-borders-fonts/) covers the fonts and borders a rule sets.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ConditionalFormattingRule Class - IronXL C# API`
- v2 (human): `ConditionalFormattingRule in C# | IronXL`
- v3 (balanced): `ConditionalFormattingRule | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Build an Excel conditional formatting rule in C# with IronXL: set ComparisonOperation, Formula1, FontFormatting, BorderFormatting, PatternFormatting.`
- v2 (human): `Color cells when a condition is met in C# with IronXL's ConditionalFormattingRule: pair a comparison with the font, border, or fill to apply.`
- v3 (balanced): `Reference for the IronXL ConditionalFormattingRule class in C#: pair a comparison and formulas with font, border, and pattern formatting.`

---

## Structured data

**TechArticle abstract**

> Styling cells when they meet a condition runs through IronXL's ConditionalFormattingRule in C#. One rule pairs a test with the formatting applied when it passes. ConditionType reports the category, ComparisonOperation holds the operator from IronXL.Formatting.Enums.ComparisonOperator, and Formula1 and Formula2 carry the compared values. FontFormatting, BorderFormatting, and PatternFormatting set the styles. Create a rule with CreateConditionalFormattingRule, then add it to a range.

**FAQPage entries**

```json
[
  {
    "question": "Where does ConditionalFormattingRule live in the IronXL API?",
    "answer": "ConditionalFormattingRule is a class in the IronXL.Formatting namespace, shipped in IronXL.dll. CreateConditionalFormattingRule returns one, which you style and then add to a worksheet with AddConditionalFormatting."
  },
  {
    "question": "How do you create a conditional formatting rule in C#?",
    "answer": "Call CreateConditionalFormattingRule on a worksheet's ConditionalFormatting accessor, passing a comparison operator and a value. Configure the returned rule's FontFormatting, BorderFormatting, or PatternFormatting, then add it to a cell range with AddConditionalFormatting."
  },
  {
    "question": "Which ComparisonOperator does ComparisonOperation use?",
    "answer": "The ComparisonOperation property uses the operator from IronXL.Formatting.Enums.ComparisonOperator, such as LessThan or Between. That is a different type from the ComparisonOperator in IronXL.DataValidations, which applies to data validation rules instead."
  }
]
```
