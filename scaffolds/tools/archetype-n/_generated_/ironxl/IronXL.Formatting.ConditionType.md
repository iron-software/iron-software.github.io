<!--
N-Full (type-safe enum-style class; requested treatment=full). Frame A. IronXL.
Members verified 2026-06-23: fields CellValueIs, ColorScale, DataBar, Filter, Formula, IconSet;
properties Id, Type; methods ForId(Byte)/ForId(Int32), Equals, GetHashCode, ToString.
Cross-ref: ConditionalFormattingRule.ConditionType property is typed ConditionType (verified).
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.ConditionType.html
-->

## Injected overview (Markdown)

`ConditionType` names the kind of test a conditional formatting rule runs, so a developer chooses whether a rule compares a cell value, paints a color scale, draws a data bar, or evaluates a formula. It is the type-safe set of condition categories that sits behind a `ConditionalFormattingRule`, and it answers the "what triggers this rule" question a developer faces when styling a spreadsheet by criteria.

A `ConditionType` reaches a rule through the `ConditionType` property on `ConditionalFormattingRule`. When a rule is created through `CreateConditionalFormattingRule`, IronXL sets the appropriate condition category for that rule; reading the property tells a developer which test the rule performs. The value belongs to the rule that conditional formatting on a worksheet applies to a cell range.

The members cover the conditional formatting categories Excel supports. `CellValueIs` compares the cell against a constant with a comparison operator, the everyday case for "less than 8" or "greater than 100". `Formula` evaluates a custom expression. `ColorScale`, `DataBar`, and `IconSet` drive the graphical condition types that shade cells, draw in-cell bars, or place status icons. `Filter` covers top/bottom and similar filter conditions. Each value exposes a numeric `Id` and a `Type`, and the static `ForId` method resolves a `ConditionType` from its byte or integer id when a rule is read back from a loaded file. Most code does not name `ConditionType` directly, because `CreateConditionalFormattingRule` selects it, so reach for it when inspecting or branching on a rule's category.

```csharp
using IronXL;
using IronXL.Formatting;

WorkBook book = WorkBook.Load("report.xlsx");
WorkSheet sheet = book.DefaultWorkSheet;
ConditionalFormattingRule rule =
    sheet.ConditionalFormatting.CreateConditionalFormattingRule(ComparisonOperator.LessThan, "8");
Console.WriteLine(rule.ConditionType.Type);
```

The [conditional formatting how-to](https://ironsoftware.com/csharp/excel/how-to/conditional-formatting/) walks through building rules, the [conditional formatting example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows a working rule applied to a range, and the [style cells example](https://ironsoftware.com/csharp/excel/examples/excel-style-cells-borders-fonts/) covers the styles a rule can apply.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ConditionType Class - IronXL C# API Reference`
- v2 (human): `ConditionType: Excel Rule Categories in C#`
- v3 (balanced): `ConditionType Class | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose a conditional formatting category in C# with the IronXL ConditionType class: CellValueIs, Formula, ColorScale, DataBar, IconSet, Filter.`
- v2 (human): `Set what triggers an Excel rule in C# with the IronXL ConditionType class: compare a cell value, run a formula, or draw a color scale or icon set.`
- v3 (balanced): `Reference for the IronXL ConditionType class in C#: the condition categories behind a ConditionalFormattingRule, read via its ConditionType property.`

---

## Structured data

**TechArticle abstract**

> ConditionType names the kind of test a conditional formatting rule runs in IronXL for C#, exposed through the ConditionType property on ConditionalFormattingRule. CellValueIs compares a cell against a constant, Formula evaluates an expression, and ColorScale, DataBar, IconSet, and Filter drive the graphical condition categories. Each value carries a numeric Id and Type, and the static ForId method resolves a ConditionType from its id.

**FAQPage entries**

```json
[
  {
    "question": "Where does ConditionType live in the IronXL API?",
    "answer": "ConditionType is a class in the IronXL.Formatting namespace, shipped in IronXL.dll. It is the type-safe set of conditional formatting categories exposed by the ConditionType property on ConditionalFormattingRule."
  },
  {
    "question": "What condition categories does ConditionType support in C#?",
    "answer": "CellValueIs compares a cell value against a constant, Formula evaluates a custom expression, and ColorScale, DataBar, and IconSet are the graphical categories. Filter covers top and bottom filter conditions."
  },
  {
    "question": "Do you set ConditionType directly when adding a rule?",
    "answer": "Usually not. CreateConditionalFormattingRule sets the category for the rule it returns, so most code reads the ConditionType property to inspect or branch on a rule rather than assigning it. The static ForId method resolves a value from its id when reading rules from a loaded file."
  }
]
```
