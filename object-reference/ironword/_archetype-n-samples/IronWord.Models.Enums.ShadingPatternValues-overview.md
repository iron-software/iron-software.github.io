<!--
N-Lite/enum. Members verified 2026-06-23: Clear, Solid, plus Percent_* fill levels, DiagStripe/HorzStripe/VertStripe and DiagCross/ThinDiagCross hatch families.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.ShadingPatternValues.html
-->

## Injected overview (Markdown)

Fill a table cell or paragraph background with a shading pattern by selecting a `ShadingPatternValues` member. `Clear` applies no fill and `Solid` fills the whole area, while the `Percent_*` members (such as `Percent_25` or `Percent_50`) apply a graduated tint and the striped and cross-hatch families (`DiagStripe`, `HorzStripe`, `VertStripe`, `DiagCross`, `ThinDiagCross`) lay down a textured pattern. The [add table guide](https://ironsoftware.com/csharp/word/how-to/add-table/) covers cell formatting in a document.

```csharp
shading.Pattern = ShadingPatternValues.Solid;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ShadingPatternValues - IronWord C# API`
- v2 (human): `ShadingPatternValues: Cell Shading in C#`
- v3 (balanced): `ShadingPatternValues | IronWord C# Word API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set a background fill in C# with the IronWord ShadingPatternValues enum: Clear, Solid, percentage tints, and hatch patterns.`
- v2 (human): `Shade table cells and paragraphs in C# with the IronWord ShadingPatternValues enum: Clear, Solid, percent tints, and stripes.`
- v3 (balanced): `Reference for the IronWord ShadingPatternValues enum in C#: Clear, Solid, percentage tints, and striped or cross-hatch fills.`

---

## Structured data

**TechArticle abstract**

> Fill a table cell or paragraph background with a shading pattern in IronWord using the ShadingPatternValues enum. Clear applies no fill and Solid fills the whole area, while the percentage members apply graduated tints and the striped and cross-hatch families lay down a textured pattern.
