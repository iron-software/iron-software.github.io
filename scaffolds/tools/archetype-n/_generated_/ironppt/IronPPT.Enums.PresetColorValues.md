<!--
N-Lite/enum. Members verified 2026-06-23 (large, 140 named colors): Black, White, Red, Green, Blue, Gray, Transparent, AliceBlue, CornflowerBlue. Base: Enum.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.PresetColorValues.html
-->

## Injected overview (Markdown)

Name a color from the standard OOXML palette with `PresetColorValues` in IronPPT, rather than building one from raw channel numbers. The set holds the familiar named colors, `Black`, `White`, `Red`, `Green`, `Blue`, and `Gray`, alongside the wider CSS-style range such as `CornflowerBlue`, `AliceBlue`, and `Crimson`. Reach for a preset when a design calls for a recognized color by name; use an explicit color object when you need an exact custom value. The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows colored shapes on a slide.

```csharp
var color = PresetColorValues.CornflowerBlue;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PresetColorValues Enum - IronPPT C# Reference`
- v2 (human): `PresetColorValues: Named Colors in C# IronPPT`
- v3 (balanced): `PresetColorValues Enum | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Pick a named OOXML color in C# with the IronPPT PresetColorValues enum: Black, White, Red, Green, Blue, and the wider CSS-style palette.`
- v2 (human): `Choose a standard named color in C# with the IronPPT PresetColorValues enum instead of raw channel numbers, from Black and White to CornflowerBlue.`
- v3 (balanced): `Reference for the IronPPT PresetColorValues enum in C#: the standard named OOXML color palette for shapes and text.`

---

## Structured data

**TechArticle abstract**

> Name a color from the standard OOXML palette in IronPPT with PresetColorValues instead of raw channel numbers. The set holds familiar named colors such as Black, White, Red, Green, Blue, and Gray alongside the wider CSS-style range like CornflowerBlue and Crimson.
