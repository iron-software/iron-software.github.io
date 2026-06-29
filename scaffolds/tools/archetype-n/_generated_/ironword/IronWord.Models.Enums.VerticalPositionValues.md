<!--
N-Lite/enum. Members verified 2026-06-23: Baseline, Subscript, Superscript.
Consumer: TextStyle.VerticalTextAlignment (Nullable<VerticalPositionValues>); also on ITextStyle.
Base: System.Object (public sealed class VerticalPositionValues : Enum). Namespace IronWord.Models.Enums, assembly IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.VerticalPositionValues.html
-->

## Injected overview (Markdown)

Raise or lower text relative to the baseline by setting a `VerticalPositionValues` member on `TextStyle.VerticalTextAlignment`. `Baseline` is normal on-the-line text, `Superscript` lifts characters above the baseline for exponents and ordinals, and `Subscript` drops them below for chemical formulas and footnote marks. The [styling text in Word](https://ironsoftware.com/csharp/word/how-to/add-style-text/) walkthrough applies run-level formatting like this.

```csharp
textStyle.VerticalTextAlignment = VerticalPositionValues.Superscript;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `VerticalPositionValues Enum - IronWord C# API`
- v2 (human): `VerticalPositionValues: Super/Subscript in C#`
- v3 (balanced): `VerticalPositionValues Enum | IronWord C#`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Raise or lower text in C# with the IronWord VerticalPositionValues enum: Baseline, Superscript, or Subscript on TextStyle.`
- v2 (human): `Set superscript or subscript text in C# Word docs with VerticalPositionValues: Baseline for normal, Superscript up, Subscript down.`
- v3 (balanced): `Reference for the IronWord VerticalPositionValues enum in C#: Baseline, Superscript, and Subscript text positions.`

---

## Structured data

**TechArticle abstract**

> Raise or lower text relative to the baseline in IronWord with VerticalPositionValues, set on TextStyle.VerticalTextAlignment. Baseline is normal text, Superscript lifts characters above the line, and Subscript drops them below it.
