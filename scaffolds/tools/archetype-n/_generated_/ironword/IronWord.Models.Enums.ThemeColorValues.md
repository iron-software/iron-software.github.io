<!--
N-Lite/enum. Members verified 2026-06-23: salient subset of Dark1, Light1, Dark2, Light2, Accent1..6, Hyperlink, FollowedHyperlink, Background1/2, Text1/2, None.
Base: System.Object (public sealed class ThemeColorValues : Enum). Namespace IronWord.Models.Enums, assembly IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.ThemeColorValues.html
-->

## Injected overview (Markdown)

Reference a slot in the document theme instead of a fixed RGB value by choosing a `ThemeColorValues` member, so text and shapes recolor automatically when the theme changes. `Dark1` and `Light1` are the primary text and background pair, `Dark2` and `Light2` the secondary pair, and `Accent1` through `Accent6` the six accent slots. `Hyperlink` and `FollowedHyperlink` style links, while `None` applies no theme color. See [styling text in Word](https://ironsoftware.com/csharp/word/how-to/add-style-text/) for related formatting.

```csharp
var themeColor = ThemeColorValues.Accent1;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ThemeColorValues Enum - IronWord C# API Reference`
- v2 (human): `ThemeColorValues: Use Theme Colors in C# Word`
- v3 (balanced): `ThemeColorValues Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Pick a theme color slot in C# with the IronWord ThemeColorValues enum: Dark1, Light1, Accent1 to Accent6, Hyperlink, and more.`
- v2 (human): `Color Word text and shapes from the document theme in C# with ThemeColorValues: primary, secondary, six accents, and hyperlink slots.`
- v3 (balanced): `Reference for the IronWord ThemeColorValues enum in C#: Dark1, Light1, Accent1 to Accent6, Hyperlink, and FollowedHyperlink.`

---

## Structured data

**TechArticle abstract**

> Reference a theme color slot in IronWord with ThemeColorValues so elements recolor when the document theme changes. Dark1 and Light1 are the primary pair, Accent1 through Accent6 are the accent slots, and Hyperlink and FollowedHyperlink style links.
