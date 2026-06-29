<!--
N-Full (class : Object, IShading; 8 props). Frame C (lead), Frame A (abstract). IronPPT.
Verified 2026-06-23: Color, Fill (IColor), ShadingPattern (Nullable<ShadingPatternValues>), ThemeColor, ThemeFill, ThemeFillShade (IColor), ThemeFillTint, ThemeTint (string).
Target: IronPPT.Models.Shading.html
-->

## Injected overview (Markdown)

When a paragraph or shape needs a filled background rather than a flat single color, `Shading` describes that fill. It captures the foreground color, the background fill, and the pattern that weaves between them, so a developer can give a block of slide content a tinted or hatched backdrop instead of a plain block of color.

A `Shading` is built and attached wherever an element accepts background shading, and its properties divide into two groups. The direct-color group is `Color` (the foreground), `Fill` (the background), and `ShadingPattern`, a `Nullable<ShadingPatternValues>` that selects the weave (solid, a percentage screen, or a hatch) between the two. The theme group lets the fill follow the presentation's theme rather than fixed values: `ThemeColor`, `ThemeFill`, and `ThemeFillShade` are `IColor` slots resolved against the active theme, while `ThemeFillTint` and `ThemeTint` are `string` adjustments that lighten or darken those theme colors.

Set `Color` and `Fill` to `IColor` values for a hard-coded look, or set the theme slots when the shading should track a corporate template so a re-themed deck restyles automatically. Because `ShadingPattern` is nullable, leaving it unset means no pattern is applied and the fill reads as a plain color, while assigning a member of `ShadingPatternValues` turns on the weave. Combining a `ShadingPattern` with contrasting `Color` and `Fill` is what produces the classic hatched or screened background. The `ThemeFillShade` slot is worth noting separately from `ThemeFill`: it holds the shaded variant of the theme fill, so a darker accent can be derived from the same theme color rather than picked by hand. Mixing the direct-color group and the theme group on one `Shading` is allowed, but a deck meant to survive re-theming should lean on the theme slots throughout.

```csharp
var shading = new Shading();
shading.Color = someColor;
shading.Fill = backgroundColor;
shading.ShadingPattern = ShadingPatternValues.Solid;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) sets shape fill and outline colors, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles paragraph appearance, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds the content a fill sits behind.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Shading Class - IronPPT C# API Reference`
- v2 (human): `Shading: Background Fills & Patterns in C#`
- v3 (balanced): `Shading Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Describe a background fill in C# with the IronPPT Shading class: set Color, Fill, and a ShadingPattern, or use the ThemeColor and ThemeFill slots.`
- v2 (human): `Give slide content a tinted or hatched backdrop in C# with the IronPPT Shading class: pick a foreground, a fill, and a shading pattern.`
- v3 (balanced): `Reference for the IronPPT Shading class in C#: a background fill with Color, Fill, a ShadingPattern, and theme-aware ThemeColor and ThemeFill.`

---

## Structured data

**TechArticle abstract**

> Shading describes a filled background in IronPPT for C# slide content. Color sets the foreground, Fill the background, and ShadingPattern, a nullable ShadingPatternValues, the weave between them. Theme slots ThemeColor, ThemeFill, and ThemeFillShade follow the active theme, with ThemeFillTint and ThemeTint as string adjustments.

**FAQPage entries**

```json
[
  {
    "question": "Where does Shading live in the IronPPT API?",
    "answer": "Shading is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and implements IShading, and it is attached to elements that accept a background fill."
  },
  {
    "question": "How do you apply a shading pattern in C#?",
    "answer": "Create a Shading, set Color and Fill to IColor values, and set ShadingPattern to a ShadingPatternValues member such as Solid. Leaving ShadingPattern null applies no pattern, so the fill reads as a plain color."
  },
  {
    "question": "How do theme colors work on Shading?",
    "answer": "ThemeColor, ThemeFill, and ThemeFillShade are IColor slots resolved against the presentation theme, and ThemeFillTint and ThemeTint are string adjustments that lighten or darken them, so a re-themed deck restyles the shading automatically."
  }
]
```
