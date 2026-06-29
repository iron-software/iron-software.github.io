<!--
N-Lite/enum. Members verified 2026-06-23: Auto, Top, Center, Bottom, Baseline.
Base: System.Object (public sealed class VerticalTextAlignmentValues : Enum). Namespace IronWord.Models.Enums, assembly IronWord.dll.
Sibling of VerticalAlign/VerticalAlignment — opener kept distinct.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.VerticalTextAlignmentValues.html
-->

## Injected overview (Markdown)

Vertical text alignment within a region is expressed through `VerticalTextAlignmentValues`. `Auto` lets the layout decide, `Top`, `Center`, and `Bottom` pin text to the upper edge, middle, or lower edge, and `Baseline` aligns to the text baseline. The extra `Auto` and `Baseline` members are what set this apart from the plain `VerticalAlignment` enum. The [add a table](https://ironsoftware.com/csharp/word/how-to/add-table/) walkthrough positions text inside cells.

```csharp
var valign = VerticalTextAlignmentValues.Center;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `VerticalTextAlignmentValues Enum - IronWord C#`
- v2 (human): `VerticalTextAlignmentValues: V-Align in C#`
- v3 (balanced): `VerticalTextAlignmentValues | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set vertical text alignment in C# with the IronWord VerticalTextAlignmentValues enum: Auto, Top, Center, Bottom, or Baseline.`
- v2 (human): `Align Word text vertically in C# with VerticalTextAlignmentValues: let layout Auto-decide, or pin Top, Center, Bottom, or Baseline.`
- v3 (balanced): `Reference for the IronWord VerticalTextAlignmentValues enum in C#: Auto, Top, Center, Bottom, and Baseline alignment.`

---

## Structured data

**TechArticle abstract**

> Set vertical text alignment within a region in IronWord with VerticalTextAlignmentValues. Auto lets the layout decide, Top, Center, and Bottom pin text to the upper edge, middle, or lower edge, and Baseline aligns to the text baseline.
