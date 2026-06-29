<!--
N-Mid / interface (6 props). Frame D. IronXL.
Implementor not documented in api/: framed via returner ConditionalFormattingRule.FontFormatting (returns IFontFormatting, verified 2026-06-23).
Members: IsBold, IsItalic, FontColor (string), FontHeight (int), UnderlineType (FontUnderlineType), EscapementType (FontScript). Verified.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Formatting.IFontFormatting.html
-->

## Injected overview (Markdown)

Changing the font of cells that match a conditional rule in C# runs through `IFontFormatting`. It defines how text looks when a conditional formatting rule fires, bold, color, size, and decoration, so a rule can make flagged values jump out by their type and not only by their background. It is the font side of conditional formatting, separate from the always-on font of `IStyle`.

A developer obtains it from `ConditionalFormattingRule.FontFormatting`, a get-only property on a rule built through a worksheet's conditional formatting surface. The settings here apply only when the rule's condition is met, so they are configured on the rule before it is added to a region.

`IsBold` and `IsItalic` set the weight and slant, `FontColor` takes an RGB string, and `FontHeight` sets the point size as an integer. `UnderlineType` takes a `FontUnderlineType` for the underline style, and `EscapementType` takes a `FontScript` for superscript or subscript. Set only the members a rule needs; the rest leave the matched cell's existing font unchanged.

```csharp
using IronXL;
using IronXL.Formatting;

WorkSheet sheet = WorkBook.Load("report.xlsx").DefaultWorkSheet;
ConditionalFormattingRule rule = sheet.ConditionalFormatting
    .CreateConditionalFormattingRule(ComparisonOperator.LessThan, "0");
rule.FontFormatting.IsBold = true;
rule.FontFormatting.FontColor = "#C00000";
```

The [conditional formatting how-to](https://ironsoftware.com/csharp/excel/how-to/conditional-formatting/) walks through building rules, and the [conditional formatting example](https://ironsoftware.com/csharp/excel/examples/excel-conditional-formatting/) shows a worked rule.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IFontFormatting - IronXL C# API Reference`
- v2 (human): `IFontFormatting: Conditional Fonts in C#`
- v3 (balanced): `IFontFormatting | IronXL C# .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set conditional fonts in C# with the IronXL IFontFormatting interface from ConditionalFormattingRule: IsBold, IsItalic, FontColor, and FontHeight.`
- v2 (human): `Restyle text when a conditional rule fires in C# with IronXL IFontFormatting: set bold, italic, color, size, underline, and escapement.`
- v3 (balanced): `Reference for the IronXL IFontFormatting interface in C#: the font contract from ConditionalFormattingRule.FontFormatting for matched cells.`

---

## Structured data

**TechArticle abstract**

> ConditionalFormattingRule.FontFormatting returns IronXL's IFontFormatting interface in C#, the font contract for a conditional formatting rule. IsBold and IsItalic set weight and slant, FontColor takes an RGB string, FontHeight sets the point size, UnderlineType takes a FontUnderlineType, and EscapementType takes a FontScript. The font applies only when the rule's condition is met.

**FAQPage entries**

```json
[
  {
    "question": "Where does IFontFormatting live in the IronXL API?",
    "answer": "IFontFormatting is an interface in the IronXL.Formatting namespace, shipped in IronXL.dll. It is returned by the FontFormatting property of ConditionalFormattingRule and defines the font a conditional rule applies."
  },
  {
    "question": "What returns IFontFormatting in IronXL?",
    "answer": "ConditionalFormattingRule.FontFormatting returns an IFontFormatting. IronXL exposes it through that get-only property on a rule rather than letting you construct one, so the font is configured on the rule before it is added to a sheet."
  }
]
```
