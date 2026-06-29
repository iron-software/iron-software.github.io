<!--
N-Lite/enum. Members verified 2026-06-23: Clear, Solid, HorzStripe, DiagStripe, DiagCross, Percent_50 (and the Percent_* family). Base: Enum.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.ShadingPatternValues.html
-->

## Injected overview (Markdown)

Fill a background or cell with a hatch or tint pattern using `ShadingPatternValues` in IronPPT. `Clear` leaves no pattern and `Solid` fills completely, while the stripe and cross values such as `HorzStripe`, `DiagStripe`, and `DiagCross` lay down hatching. The large `Percent_*` family (for example `Percent_25`, `Percent_50`, `Percent_75`) applies a tint at a set density between clear and solid. Choose the value when you shade a shape, table cell, or paragraph background. The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows filled shapes on a slide.

```csharp
var pattern = ShadingPatternValues.Percent_50;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ShadingPatternValues Enum - IronPPT C# API`
- v2 (human): `ShadingPatternValues: Fill Patterns in C#`
- v3 (balanced): `ShadingPatternValues Enum | IronPPT .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set a background fill pattern in C# with the IronPPT ShadingPatternValues enum: Clear, Solid, stripe and cross hatches, and Percent tints.`
- v2 (human): `Shade a shape, cell, or paragraph in C# with the IronPPT ShadingPatternValues enum: Clear, Solid, stripes, crosses, and percent tints.`
- v3 (balanced): `Reference for the IronPPT ShadingPatternValues enum in C#: hatch and percent-tint fill patterns for backgrounds.`

---

## Structured data

**TechArticle abstract**

> Fill a background or cell with a hatch or tint pattern in IronPPT with ShadingPatternValues. Clear leaves no pattern and Solid fills completely, the stripe and cross values lay down hatching, and the Percent family applies a tint at a set density between clear and solid.
