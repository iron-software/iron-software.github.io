<!--
N-Mid / interface (2 props). Frame C. IronXL. Triage optional (<=2 members not required, but 2 named anyway).
Implementor not documented in api/: framed via returner ConditionalFormattingRule.PatternFormatting (returns IPatternFormatting, verified 2026-06-23).
Members: BackgroundColor (string), FillPattern (FillPattern). Verified.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.IPatternFormatting.html
-->

## Injected overview (Markdown)

When a conditional formatting rule needs to fill the cells it matches, `IPatternFormatting` is the contract that sets that fill. It is the classic "color this cell when its value crosses a threshold" effect, the background color and pattern a rule paints over matched data, and the most common way a conditional rule draws attention. It is the fill side of conditional formatting, separate from the always-on fill on `IStyle`.

A developer obtains it from `ConditionalFormattingRule.PatternFormatting`, a get-only property on a rule created through a worksheet's conditional formatting surface. The fill applies only when the rule's condition is met, so it is configured on the rule before the rule is added to a region.

`BackgroundColor` sets the fill color as an RGB string, and `FillPattern` takes a `FillPattern` value for solid or patterned fills. A solid background color is the typical choice for highlighting; the pattern is there for cases that need a textured fill rather than a flat one.

```csharp
using IronXL;
using IronXL.Formatting;

WorkSheet sheet = WorkBook.Load("report.xlsx").DefaultWorkSheet;
ConditionalFormattingRule rule = sheet.ConditionalFormatting
    .CreateConditionalFormattingRule(ComparisonOperator.GreaterThan, "1000");
rule.PatternFormatting.BackgroundColor = "#FFEB9C";
```

The [conditional formatting how-to](https://ironsoftware.com/csharp/excel/how-to/conditional-formatting/) walks through building rules, and the [background pattern color how-to](https://ironsoftware.com/csharp/excel/how-to/background-pattern-color/) covers fills and patterns directly.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IPatternFormatting - IronXL C# API Reference`
- v2 (human): `IPatternFormatting: Conditional Fills in C#`
- v3 (balanced): `IPatternFormatting | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Fill cells that match a conditional rule in C# with the IronXL IPatternFormatting interface: set BackgroundColor and FillPattern on the rule.`
- v2 (human): `Highlight cells when a conditional rule fires in C# with IronXL IPatternFormatting: set the background color and fill pattern for matched cells.`
- v3 (balanced): `Reference for the IronXL IPatternFormatting interface in C#: the fill contract from ConditionalFormattingRule.PatternFormatting for matched cells.`

---

## Structured data

**TechArticle abstract**

> ConditionalFormattingRule.PatternFormatting returns IronXL's IPatternFormatting interface in C#, the fill contract for a conditional formatting rule. BackgroundColor sets the fill color as an RGB string and FillPattern takes a FillPattern value for solid or patterned fills. The fill applies only when the rule's condition is met, so it is configured on the rule before it is added to a region.

**FAQPage entries**

```json
[
  {
    "question": "Where does IPatternFormatting live in the IronXL API?",
    "answer": "IPatternFormatting is an interface in the IronXL.Formatting namespace, shipped in IronXL.dll. It is returned by the PatternFormatting property of ConditionalFormattingRule and defines the fill a conditional rule applies."
  },
  {
    "question": "What returns IPatternFormatting in IronXL?",
    "answer": "ConditionalFormattingRule.PatternFormatting returns an IPatternFormatting. IronXL exposes it through that get-only property on a rule rather than letting you construct one, so the fill is set on the rule before it is added to a sheet."
  }
]
```
