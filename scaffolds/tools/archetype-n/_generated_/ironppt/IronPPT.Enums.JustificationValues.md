<!--
N-Lite/enum (12 members; salient subset named). IronPPT. Members verified 2026-06-23:
Left, Center, Right, Both, Start, End, Distribute, plus kashida/Thai variants.
Target: IronPPT.Enums.JustificationValues.html
-->

## Injected overview (Markdown)

Justifying a paragraph on a slide runs through `JustificationValues`, which sets how lines spread across the text width. `Left`, `Center`, and `Right` align to one side or the middle, `Both` justifies to both margins, and `Start` and `End` align to the reading direction. `Distribute` spreads every line edge to edge, and the remaining values (`HighKashida`, `LowKashida`, `MediumKashida`, `NumTab`, `ThaiDistribute`) cover script-specific spacing. The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers adding and styling paragraphs.

```csharp
var justify = JustificationValues.Both;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `JustificationValues Enum - IronPPT C# Reference`
- v2 (human): `JustificationValues: Justify Paragraphs in C#`
- v3 (balanced): `JustificationValues Enum | IronPPT .NET Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set paragraph justification in C# with the IronPPT JustificationValues enum: Left, Center, Right, Both, Start, End, or Distribute.`
- v2 (human): `Justify slide paragraphs in C# with IronPPT's JustificationValues enum: align Left, Center, Right, or justify to Both margins and Distribute.`
- v3 (balanced): `Reference for the IronPPT JustificationValues enum in C#: Left, Center, Right, Both, Start, End, and Distribute paragraph justification.`

---

## Structured data

**TechArticle abstract**

> Set how a paragraph justifies on a slide in IronPPT with JustificationValues. Left, Center, and Right align to one side or the middle, Both justifies to both margins, Start and End align to reading direction, and Distribute spreads every line edge to edge.
