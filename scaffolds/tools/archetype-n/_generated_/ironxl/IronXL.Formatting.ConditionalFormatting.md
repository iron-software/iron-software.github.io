<!--
N-Mid (5 members; requested treatment=mid). Frame B. IronXL.
Members verified 2026-06-23: property NumberOfRules; methods AddRule(ConditionalFormattingRule),
GetFormattingRanges(), GetRule(Int32), SetRule(Int32, ConditionalFormattingRule).
Cross-ref: ISheetConditionalFormatting.AddConditionalFormatting(ConditionalFormatting) verified.
No structural opener; lead is task-led. No `new ConditionalFormatting()` claim (no public ctor on page).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.ConditionalFormatting.html
-->

## Injected overview (Markdown)

`ConditionalFormatting` is the rule set a developer hands to a worksheet to highlight cells by criteria. It bundles one or more `ConditionalFormattingRule` objects together with the ranges they cover, so a group of related rules travels and applies as a single unit rather than rule by rule.

The object is passed to `AddConditionalFormatting` on a worksheet's `ConditionalFormatting` accessor, which attaches its rules to the sheet. Build up the set first, then attach it, and the rules take effect when the workbook is saved or evaluated. `NumberOfRules` reports how many rules the set holds. `AddRule` appends a `ConditionalFormattingRule`, `GetRule` and `SetRule` read and replace a rule by its integer index, and `GetFormattingRanges` returns the ranges the rules apply to. Use it when several rules belong to the same formatting pass and should be managed as one collection. For a single quick rule, the worksheet accessor's `CreateConditionalFormattingRule` and `AddConditionalFormatting` shortcut is usually enough.

```csharp
ConditionalFormattingRule rule =
    sheet.ConditionalFormatting.CreateConditionalFormattingRule(ComparisonOperator.LessThan, "8");
sheet.ConditionalFormatting.AddConditionalFormatting("A1:A10", rule);
```

The [conditional formatting how-to](https://ironsoftware.com/csharp/excel/how-to/conditional-formatting/) shows the add, retrieve, and remove flow, and the [conditional formatting example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) applies a rule to a range.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ConditionalFormatting Class - IronXL C# API`
- v2 (human): `ConditionalFormatting: Excel Rule Sets in C#`
- v3 (balanced): `ConditionalFormatting Class | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Group Excel formatting rules in C# with the IronXL ConditionalFormatting class: hold rules with AddRule, GetRule, SetRule, and GetFormattingRanges.`
- v2 (human): `Manage a set of conditional formatting rules in C# with IronXL's ConditionalFormatting class, then attach them to a worksheet in one pass.`
- v3 (balanced): `Reference for the IronXL ConditionalFormatting class in C#: bundle ConditionalFormattingRule objects and their ranges, then add them to a sheet.`

---

## Structured data

**TechArticle abstract**

> ConditionalFormatting is the rule set a developer hands to a worksheet to highlight cells by criteria in IronXL for C#. It bundles ConditionalFormattingRule objects with the ranges they cover. NumberOfRules reports the count, AddRule appends a rule, GetRule and SetRule read and replace a rule by index, and GetFormattingRanges returns the covered ranges. Pass the set to AddConditionalFormatting on a worksheet's formatting accessor.

**FAQPage entries**

```json
[
  {
    "question": "Where does ConditionalFormatting live in the IronXL API?",
    "answer": "ConditionalFormatting is a class in the IronXL.Formatting namespace, shipped in IronXL.dll. It groups conditional formatting rules and is passed to AddConditionalFormatting on a worksheet's ConditionalFormatting accessor."
  },
  {
    "question": "How do you manage several conditional formatting rules together in C#?",
    "answer": "Use a ConditionalFormatting set: AddRule appends a ConditionalFormattingRule, GetRule and SetRule access a rule by index, and NumberOfRules reports the total. GetFormattingRanges returns the ranges the rules apply to."
  }
]
```
