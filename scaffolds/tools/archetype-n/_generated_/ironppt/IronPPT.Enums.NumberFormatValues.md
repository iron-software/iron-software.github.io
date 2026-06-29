<!--
N-Lite/enum (63 members; salient subset named). IronPPT. Members verified 2026-06-23:
Decimal, LowerLetter, UpperLetter, LowerRoman, UpperRoman, Bullet, None, Ordinal,
plus many script-specific numbering systems.
Target: IronPPT.Enums.NumberFormatValues.html
-->

## Injected overview (Markdown)

`NumberFormatValues` is the numbering style a list level uses for its markers. `Decimal` produces 1, 2, 3, the common ordered-list choice, while `LowerLetter` and `UpperLetter` give a, b, c and A, B, C, and `LowerRoman` and `UpperRoman` give i, ii, iii and I, II, III. `Bullet` marks an unordered list and `None` removes the marker entirely. The long tail covers script-specific systems (Hebrew, Thai, Japanese, Korean, Chinese, and more) for localized numbering. The [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) styles list markers on a slide.

```csharp
var numbering = NumberFormatValues.Decimal;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `NumberFormatValues Enum - IronPPT C# Reference`
- v2 (human): `NumberFormatValues: List Numbering in C#`
- v3 (balanced): `NumberFormatValues | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set list numbering style in C# with the IronPPT NumberFormatValues enum: Decimal, LowerLetter, UpperRoman, Bullet, None, and script-specific systems.`
- v2 (human): `Choose how list markers number in C# with IronPPT's NumberFormatValues enum: Decimal, letters, Roman numerals, Bullet, or None.`
- v3 (balanced): `Reference for the IronPPT NumberFormatValues enum in C#: Decimal, LowerLetter, UpperLetter, LowerRoman, UpperRoman, Bullet, and None.`

---

## Structured data

**TechArticle abstract**

> Set the numbering style a list level uses for its markers in IronPPT with NumberFormatValues. Decimal produces 1, 2, 3, LowerLetter and UpperLetter give letters, LowerRoman and UpperRoman give Roman numerals, Bullet marks an unordered list, and None removes the marker.
