<!--
N-Full / interface (10 props, all border color/type). Frame C. IronXL.
Implementor not documented in api/: framed via returner ConditionalFormattingRule.BorderFormatting (returns IBorderFormatting, verified 2026-06-23).
Members: Top/Bottom/Left/Right/Diagonal BorderColor (string) + BorderType (BorderType). Bucketed by side.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.IBorderFormatting.html
-->

## Injected overview (Markdown)

When a conditional formatting rule needs to draw borders around the cells it matches, `IBorderFormatting` is the contract that defines those borders. A rule that highlights overdue rows or out-of-range values uses it to outline the affected cells, so the emphasis is a visible box and not only a fill or font change. It is the border side of conditional formatting, distinct from the static `IBorder` that styles a cell directly.

A developer obtains `IBorderFormatting` from `ConditionalFormattingRule.BorderFormatting`, the get-only property on a rule created through a worksheet's conditional formatting surface. The borders set here apply only when the rule's condition is met, which is what separates conditional borders from the always-on borders of `IStyle`. Configure the property's members on the rule before the rule is added to the sheet.

The members are organized by cell edge, each edge carrying a color and a line type. The four sides expose `TopBorderColor`, `BottomBorderColor`, `LeftBorderColor`, and `RightBorderColor` as RGB strings, paired with `TopBorderType`, `BottomBorderType`, `LeftBorderType`, and `RightBorderType` as `BorderType` values for the line weight and style. The diagonal pair, `DiagonalBorderColor` and `DiagonalBorderType`, draws a line across the cell for the cases that call for it. Set only the edges a rule needs; an untouched side stays as the cell already renders it, so a rule that only wants a bottom rule leaves the other three sides alone. Pairing a color with a visible `BorderType` is what makes the edge render, since a color on its own does not produce a line.

```csharp
using IronXL;
using IronXL.Formatting;
using IronXL.Styles;

WorkSheet sheet = WorkBook.Load("report.xlsx").DefaultWorkSheet;
ConditionalFormattingRule rule = sheet.ConditionalFormatting
    .CreateConditionalFormattingRule(ComparisonOperator.LessThan, "0");
rule.BorderFormatting.BottomBorderColor = "#C00000";
rule.BorderFormatting.BottomBorderType = BorderType.Thick;
```

The [conditional formatting how-to](https://ironsoftware.com/csharp/excel/how-to/conditional-formatting/) walks through building rules, the [conditional formatting example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows a worked rule, and the [border and alignment how-to](https://ironsoftware.com/csharp/excel/how-to/border-alignment/) covers static cell borders for comparison.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IBorderFormatting - IronXL C# API Reference`
- v2 (human): `IBorderFormatting: Conditional Borders in C#`
- v3 (balanced): `IBorderFormatting | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Draw conditional borders in C# with the IronXL IBorderFormatting interface from ConditionalFormattingRule: set per-side BorderColor and BorderType.`
- v2 (human): `Outline cells that match a conditional rule in C# with IronXL IBorderFormatting: set top, bottom, left, right, and diagonal border color and type.`
- v3 (balanced): `Reference for the IronXL IBorderFormatting interface in C#: the per-side border contract from ConditionalFormattingRule.BorderFormatting.`

---

## Structured data

**TechArticle abstract**

> ConditionalFormattingRule.BorderFormatting returns IronXL's IBorderFormatting interface in C#, the border contract for a conditional formatting rule. Each cell edge carries a color and a line type: TopBorderColor and TopBorderType, BottomBorderColor and BottomBorderType, LeftBorderColor and LeftBorderType, RightBorderColor and RightBorderType, plus DiagonalBorderColor and DiagonalBorderType. The borders apply only when the rule's condition is met.

**FAQPage entries**

```json
[
  {
    "question": "Where does IBorderFormatting live in the IronXL API?",
    "answer": "IBorderFormatting is an interface in the IronXL.Formatting namespace, shipped in IronXL.dll. It is returned by the BorderFormatting property of ConditionalFormattingRule and defines the borders a conditional rule draws."
  },
  {
    "question": "What returns IBorderFormatting in IronXL?",
    "answer": "ConditionalFormattingRule.BorderFormatting returns an IBorderFormatting. IronXL exposes it through that get-only property on a rule rather than letting you construct one, so you configure borders on the rule before adding it to a sheet."
  },
  {
    "question": "How is IBorderFormatting different from IBorder in IronXL?",
    "answer": "IBorderFormatting sets borders that appear only when a conditional formatting rule matches, and lives on ConditionalFormattingRule. IBorder in IronXL.Styles sets always-on borders directly on a cell through IStyle."
  }
]
```
