<!--
N-Lite/enum. Members verified 2026-06-23: Solid, Dash, Dot, DashDot, LargeDash, SystemDash. Base: Enum.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.PresetLineDashValues.html
-->

## Injected overview (Markdown)

Set the dash pattern a line or shape outline draws with using `PresetLineDashValues` in IronPPT. `Solid` is the unbroken default look, `Dash` and `Dot` give the two simple repeating patterns, and `DashDot` alternates the two. Heavier variants like `LargeDash` and the `System` family (`SystemDash`, `SystemDot`, `SystemDashDot`) cover the wider OOXML preset set. Choose the value when styling a border so the stroke reads the way the design calls for. The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows outlined shapes on a slide.

```csharp
var dash = PresetLineDashValues.Dash;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PresetLineDashValues Enum - IronPPT C# API`
- v2 (human): `PresetLineDashValues: Dash Patterns in C#`
- v3 (balanced): `PresetLineDashValues Enum | IronPPT .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set line dash patterns in C# with the IronPPT PresetLineDashValues enum: Solid, Dash, Dot, DashDot, LargeDash, and the System variants.`
- v2 (human): `Choose how a line or outline is drawn in C# with the IronPPT PresetLineDashValues enum: Solid, Dash, Dot, DashDot, and heavier presets.`
- v3 (balanced): `Reference for the IronPPT PresetLineDashValues enum in C#: dash patterns for line and shape-outline styling.`

---

## Structured data

**TechArticle abstract**

> Set the dash pattern for a line or shape outline in IronPPT with PresetLineDashValues. Solid is the unbroken look, Dash and Dot give the two simple repeating patterns, DashDot alternates them, and heavier variants like LargeDash and the System family cover the wider preset set.
