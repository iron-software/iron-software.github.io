<!--
N-Lite/enum. Members verified 2026-06-23: salient subset of None, Single, Double, Thick, Dotted, Dash, Wave, Words (full set is large).
Consumer: Underline.LineValue (Nullable<UnderlineValues>); Underline ctor takes UnderlineValues.
Base: System.Object (public sealed class UnderlineValues : Enum). Namespace IronWord.Models.Enums, assembly IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.UnderlineValues.html
-->

## Injected overview (Markdown)

Pick the underline line style applied beneath a run of text by setting an `UnderlineValues` member, assigned to `Underline.LineValue` or passed to the `Underline` constructor. `Single` is the everyday single rule and `None` removes underlining. `Double` and `Thick` add weight, `Dotted` and `Dash` give broken lines, `Wave` draws a wavy rule, and `Words` underlines words but not the spaces between them. The [styling text in Word](https://ironsoftware.com/csharp/word/how-to/add-style-text/) walkthrough covers run formatting.

```csharp
var underline = new Underline(UnderlineValues.Single);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `UnderlineValues Enum - IronWord C# API Reference`
- v2 (human): `UnderlineValues: Underline Styles in C# Word`
- v3 (balanced): `UnderlineValues Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the underline style in C# with the IronWord UnderlineValues enum: Single, Double, Thick, Dotted, Dash, Wave, Words, or None.`
- v2 (human): `Set how text is underlined in C# Word docs with UnderlineValues: a single rule, double or thick lines, dotted, dashed, or wavy styles.`
- v3 (balanced): `Reference for the IronWord UnderlineValues enum in C#: Single, Double, Thick, Dotted, Dash, Wave, and Words underline styles.`

---

## Structured data

**TechArticle abstract**

> Set the underline style beneath text in IronWord with UnderlineValues, assigned to Underline.LineValue. Single is the standard rule and None removes it, while Double, Thick, Dotted, Dash, and Wave provide heavier or broken line styles.
