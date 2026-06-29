<!--
N-Full / interface (1 prop + 12 methods). Frame A. IronXL.
Implementor not documented in api/: framed via returner WorkSheet.ConditionalFormatting (returns ISheetConditionalFormatting, verified 2026-06-23).
Members: CreateConditionalFormattingRule / AddConditionalFormatting / GetConditionalFormattingAt / RemoveConditionalFormatting / ConditionalFormattingsCount. ComparisonOperator/ConditionalFormattingRule cross-verified.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.ISheetConditionalFormatting.html
-->

## Injected overview (Markdown)

`ISheetConditionalFormatting` manages the conditional formatting rules attached to a worksheet. It creates rules, adds them to cell regions, reads them back, and removes them, so all of a sheet's "color this cell when its value crosses a threshold" logic is reached through one object. A developer building a dashboard or a flagged report works through it to make the spreadsheet react to its own data.

A worksheet exposes it as `WorkSheet.ConditionalFormatting`, a get-only property, so there is no construction step. The usual sequence is two stages: build a rule, then apply it to one or more cell regions. `CreateConditionalFormattingRule` produces a `ConditionalFormattingRule`, taking either a single formula, a `ComparisonOperator` with one formula, or a `ComparisonOperator` with two formulas for between-style conditions. The returned rule carries its own font, fill, and border formatting before it is applied.

Applying and managing rules covers the rest of the surface. The `AddConditionalFormatting` overloads attach a rule, a pair of rules, or a `List` of rules to a region given as a single range string or an `IEnumerable` of ranges, and each returns the `ConditionalFormatting` that was added. The overloads that take two rules let a sheet stack a pair of conditions on the same region in one call. For inspection and cleanup, `ConditionalFormattingsCount` reports how many are present, `GetConditionalFormattingAt` fetches one by index, and `RemoveConditionalFormatting` deletes one by index. Create and configure the rule first, then add it to the regions it should govern, and use the count and index members afterward to audit or revise what a sheet already carries.

```csharp
using IronXL;
using IronXL.Formatting;

WorkSheet sheet = WorkBook.Load("report.xlsx").DefaultWorkSheet;
ISheetConditionalFormatting formatting = sheet.ConditionalFormatting;
ConditionalFormattingRule rule =
    formatting.CreateConditionalFormattingRule(ComparisonOperator.GreaterThan, "100");
rule.FontFormatting.IsBold = true;
formatting.AddConditionalFormatting("A1:A20", rule);
```

The [conditional formatting how-to](https://ironsoftware.com/csharp/excel/how-to/conditional-formatting/) walks through creating and applying rules, the [conditional formatting example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows a worked rule end to end, and the [background pattern color how-to](https://ironsoftware.com/csharp/excel/how-to/background-pattern-color/) covers the fills a rule can apply.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ISheetConditionalFormatting - IronXL C# API`
- v2 (human): `Conditional Formatting Rules in C# with IronXL`
- v3 (balanced): `ISheetConditionalFormatting | IronXL C# .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Manage Excel conditional formatting in C# via IronXL ISheetConditionalFormatting: CreateConditionalFormattingRule, AddConditionalFormatting, and remove.`
- v2 (human): `Make an Excel sheet react to its data in C# with IronXL: create conditional rules, apply them to ranges, count them, and remove them by index.`
- v3 (balanced): `Reference for IronXL ISheetConditionalFormatting in C#: the worksheet contract from WorkSheet.ConditionalFormatting for creating and applying rules.`

---

## Structured data

**TechArticle abstract**

> WorkSheet.ConditionalFormatting returns IronXL's ISheetConditionalFormatting interface in C#, which manages a sheet's conditional formatting rules. CreateConditionalFormattingRule builds a ConditionalFormattingRule from a formula or a ComparisonOperator, the AddConditionalFormatting overloads apply rules to range strings, and ConditionalFormattingsCount, GetConditionalFormattingAt, and RemoveConditionalFormatting inspect and clean up the rules in place.

**FAQPage entries**

```json
[
  {
    "question": "Where does ISheetConditionalFormatting live in the IronXL API?",
    "answer": "ISheetConditionalFormatting is an interface in the IronXL.Formatting namespace, shipped in IronXL.dll. It is returned by WorkSheet.ConditionalFormatting and manages the conditional formatting rules on that sheet."
  },
  {
    "question": "What returns ISheetConditionalFormatting in IronXL?",
    "answer": "WorkSheet.ConditionalFormatting returns an ISheetConditionalFormatting. IronXL exposes it through that get-only property rather than letting you construct one, so all rule creation and application happens through the worksheet's property."
  },
  {
    "question": "How do you add a conditional formatting rule in C# with IronXL?",
    "answer": "Get WorkSheet.ConditionalFormatting, call CreateConditionalFormattingRule with a ComparisonOperator and formula, configure the rule's font, fill, or border formatting, then call AddConditionalFormatting with the target range and the rule."
  }
]
```
