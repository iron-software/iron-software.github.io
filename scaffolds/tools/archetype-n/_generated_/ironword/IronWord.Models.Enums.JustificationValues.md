<!--
N-Lite/enum. Members verified 2026-06-23 (12 values; salient subset named): Left, Center, Right, Both, Start, End, Distribute, plus Kashida and Thai variants. Base Enum.
Target: IronWord.Models.Enums.JustificationValues.html
-->

## Injected overview (Markdown)

Control how a paragraph distributes text across its width with `JustificationValues`. `Left` is the common default, `Center` and `Right` align to the middle and right edge, and `Both` justifies text to fill the full line. `Start` and `End` align to the leading and trailing edges (respecting text direction), while `Distribute` spreads every character evenly. The remaining values cover script-specific spacing such as the Kashida levels and `ThaiDistribute`. The [add styled text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) shows paragraph formatting in context.

```csharp
var justification = JustificationValues.Both;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `JustificationValues Enum - IronWord C# API`
- v2 (human): `JustificationValues: Justify Text in C#`
- v3 (balanced): `JustificationValues Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set paragraph justification in C# with the IronWord JustificationValues enum: Left, Center, Right, Both, Start, End, or Distribute.`
- v2 (human): `Justify Word paragraphs in C# with the IronWord JustificationValues enum: Left, Center, Right, or Both to fill the line.`
- v3 (balanced): `Reference for the IronWord JustificationValues enum in C#: Left default, Center, Right, Both, plus Start, End, and Distribute.`

---

## Structured data

**TechArticle abstract**

> Control how a paragraph distributes text across its width with IronWord JustificationValues in C#. Left is the common default, Center and Right align to the middle and right, Both fills the line, and Distribute spreads characters evenly.
