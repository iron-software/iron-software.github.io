<!--
N-Lite/enum (large surface — name only salient members). Members verified 2026-06-23.
Salient: Decimal, LowerLetter, UpperLetter, LowerRoman, UpperRoman, Bullet, None, Custom.
Consumer verified: MultiLevelTextList.ListType.
Target: IronWord.Models.Enums.NumberFormatValues.html — base type Enum.
-->

## Injected overview (Markdown)

Pick how each level of a list is numbered by assigning a `NumberFormatValues` value to `MultiLevelTextList.ListType`. The everyday choices are `Decimal` for plain 1, 2, 3 numbering, `LowerLetter` and `UpperLetter` for a, b, c or A, B, C, `LowerRoman` and `UpperRoman` for i, ii, iii style figures, and `Bullet` for an unnumbered list. Use `None` to suppress a level marker and `Custom` for your own format. Many locale-specific numbering styles (Chinese, Japanese, Korean, Hebrew, Thai) are also available.

```csharp
var list = new MultiLevelTextList { ListType = NumberFormatValues.Decimal };
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `NumberFormatValues Enum - IronWord C# Reference`
- v2 (human): `NumberFormatValues: List Numbering in C#`
- v3 (balanced): `NumberFormatValues Enum | IronWord .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set list numbering in C# with the IronWord NumberFormatValues enum: Decimal, LowerLetter, UpperRoman, Bullet, and more, via MultiLevelTextList.ListType.`
- v2 (human): `Choose how IronWord numbers a list in C# with NumberFormatValues: Decimal, letters, Roman numerals, bullets, or locale-specific styles.`
- v3 (balanced): `Reference for the IronWord NumberFormatValues enum in C#: Decimal, LowerLetter, UpperRoman, Bullet, and locale numbering for MultiLevelTextList.`

---

## Structured data

**TechArticle abstract**

> Choose how each level of a list is numbered with NumberFormatValues in IronWord, assigned to MultiLevelTextList.ListType. Decimal gives 1, 2, 3, LowerLetter and UpperLetter give alphabetic markers, LowerRoman and UpperRoman give Roman numerals, Bullet gives an unnumbered list, and many locale-specific styles are available.
