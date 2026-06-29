<!--
N-Lite/enum (large). Salient members named, verified 2026-06-23: Text1, Text2, Background1, Background2, Accent1-Accent6, Hyperlink, FollowedHyperlink. Full set has 18 members.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.ThemeColorValues.html
-->

## Injected overview (Markdown)

Tie a slide color to a slot in the presentation theme with `ThemeColorValues` in IronPPT, so the element recolors automatically when the theme changes. The core slots are `Text1` and `Text2` for body text, `Background1` and `Background2` for surfaces, and `Accent1` through `Accent6` for the theme's highlight palette, with `Hyperlink` and `FollowedHyperlink` covering links. Pick the slot that matches the element's role rather than a fixed RGB value.

```csharp
var themeColor = ThemeColorValues.Accent1;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ThemeColorValues Enum - IronPPT C# API`
- v2 (human): `ThemeColorValues: Theme Color Slots in C#`
- v3 (balanced): `ThemeColorValues | IronPPT C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Bind colors to theme slots in C# with the IronPPT ThemeColorValues enum: Text1, Background1, Accent1 to Accent6, and Hyperlink.`
- v2 (human): `Tie a slide color to the presentation theme in C# with the IronPPT ThemeColorValues enum: Text, Background, Accent, and link slots.`
- v3 (balanced): `Reference for the IronPPT ThemeColorValues enum in C#: Text, Background, Accent1 to Accent6, and Hyperlink theme color slots.`

---

## Structured data

**TechArticle abstract**

> Tie a slide color to a slot in the presentation theme with IronPPT ThemeColorValues so elements recolor when the theme changes. Text and Background slots cover content and surfaces, Accent1 through Accent6 cover highlights, and link slots cover hyperlinks in C#.
