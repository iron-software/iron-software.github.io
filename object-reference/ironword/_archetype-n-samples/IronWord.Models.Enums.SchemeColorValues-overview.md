<!--
N-Lite/enum. Members verified 2026-06-23: AutoColor, TextColor, BackgroundColor, MainDarkColor1, MainLightColor1, MainDarkColor2, MainLightColor2, HyperlinkColor, FollowedHyperlinkColor, plus AdditionalTextColor/AdditionalBackgroundColor/ExtraSchemeColor1-6.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.SchemeColorValues.html
-->

## Injected overview (Markdown)

Reference a slot in the document theme palette instead of a fixed RGB value by choosing a `SchemeColorValues` member, so colors track the active theme. `AutoColor` resolves automatically, `TextColor` and `BackgroundColor` map to the body text and page background, the `MainDarkColor1`/`MainLightColor1`/`MainDarkColor2`/`MainLightColor2` slots cover the primary dark and light pairs, and `HyperlinkColor` with `FollowedHyperlinkColor` style links. The [style text guide](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers applying color to content.

```csharp
var slot = SchemeColorValues.TextColor;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SchemeColorValues - IronWord C# API Reference`
- v2 (human): `SchemeColorValues: Theme Color Slots in C#`
- v3 (balanced): `SchemeColorValues | IronWord C# Word API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Reference theme palette slots in C# with the IronWord SchemeColorValues enum: AutoColor, TextColor, BackgroundColor, and more.`
- v2 (human): `Pick a theme color slot in C# with the IronWord SchemeColorValues enum so document colors track the active Word theme.`
- v3 (balanced): `Reference for the IronWord SchemeColorValues enum in C#: AutoColor, TextColor, BackgroundColor, and theme color slots.`

---

## Structured data

**TechArticle abstract**

> Reference a slot in the document theme palette in IronWord with the SchemeColorValues enum so colors track the active theme. AutoColor resolves automatically, TextColor and BackgroundColor map to body text and page background, and the main dark and light slots cover the primary pairs.
