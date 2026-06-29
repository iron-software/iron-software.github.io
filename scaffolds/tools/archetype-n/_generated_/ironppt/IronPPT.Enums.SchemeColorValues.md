<!--
N-Lite/enum. Members verified 2026-06-23: Text1, Text2, Background1, Background2, Accent1..Accent6, Hyperlink, FollowedHyperlink. Base: Enum.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.SchemeColorValues.html
-->

## Injected overview (Markdown)

Reference a color by its slot in the theme rather than a fixed value with `SchemeColorValues` in IronPPT, so styling tracks the active theme. `Text1` and `Text2` map the body and secondary text colors, `Background1` and `Background2` map the page backgrounds, and `Accent1` through `Accent6` map the six theme accents. `Hyperlink` and `FollowedHyperlink` cover link colors. Use a scheme value when content should re-color automatically as the theme changes; use a preset color for a fixed shade. The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows colored shapes on a slide.

```csharp
var color = SchemeColorValues.Accent1;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SchemeColorValues Enum - IronPPT C# API`
- v2 (human): `SchemeColorValues: Theme Color Slots in C#`
- v3 (balanced): `SchemeColorValues Enum | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Reference theme color slots in C# with the IronPPT SchemeColorValues enum: Text1, Background1, Accent1 to Accent6, Hyperlink, and more.`
- v2 (human): `Color content by theme slot in C# with the IronPPT SchemeColorValues enum so it re-colors as the theme changes: Text, Background, Accent.`
- v3 (balanced): `Reference for the IronPPT SchemeColorValues enum in C#: theme color slots for text, background, accents, and hyperlinks.`

---

## Structured data

**TechArticle abstract**

> Reference a color by its theme slot in IronPPT with SchemeColorValues so styling tracks the active theme. Text1 and Text2 map text colors, Background1 and Background2 map the backgrounds, Accent1 through Accent6 map the theme accents, and Hyperlink covers link colors.
