<!--
N-Full / interface. Frame D (task-gerund). Implementor: Shading. ShadingPattern -> ShadingPatternValues enum, Color/Fill -> IColor. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IShading.html
-->

## Injected overview (Markdown)

Filling a paragraph or text region with a background color or pattern runs through `IShading`. It is the contract that holds the foreground color, the fill color, and the pattern that blends them, so a developer can shade a block of text the way a highlight or banded background would. Reach for it when a slide element needs a colored or patterned backdrop rather than a flat single color, and lean on the theme members when the shading should track the presentation's color scheme.

A developer reads or assigns the shading on the element that supports it rather than building a freestanding object. The concrete implementor in IronPPT is `Shading`, and its color members are typed as `IColor`, the same color contract the rest of the API uses, so a shading color is built and reused exactly like any other color.

The members split into direct colors, theme colors, and the pattern. The direct pair is `Color` (the pattern foreground) and `Fill` (the background behind it), both `IColor`. The theme set lets shading follow the presentation palette: `ThemeColor` and `ThemeFill` pick scheme colors, while `ThemeFillShade`, `ThemeFillTint`, and `ThemeTint` adjust them lighter or darker (`ThemeFillShade` is an `IColor`; `ThemeTint` and `ThemeFillTint` are string adjustments). `ShadingPattern` is a nullable `ShadingPatternValues` that selects the pattern blending the two colors; leaving it null gives a solid fill.

```csharp
IShading shading = new Shading();
shading.Fill = new Color("#FFF2CC");
shading.ShadingPattern = ShadingPatternValues.Solid;
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles a paragraph block, the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing the text a shading sits behind, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) shows building the block that carries it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IShading Interface - IronPPT C# API`
- v2 (human): `IShading: Paragraph Shading Colors in C#`
- v3 (balanced): `IShading Interface | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IShading is the IronPPT shading contract in C#: Color, Fill, theme colors, and a ShadingPatternValues pattern, implemented by Shading.`
- v2 (human): `Shade a slide text block in C# through IronPPT's IShading contract: set a foreground Color, a Fill, theme colors, and a shading pattern, implemented by Shading.`
- v3 (balanced): `Reference for the IronPPT IShading interface in C#: the background-shading contract for color, fill, theme colors, and pattern, implemented by Shading.`

---

## Structured data

**TechArticle abstract**

> Fill a slide text block with a background color or pattern in C# through IronPPT's IShading contract. Color and Fill set the foreground and background as IColor values, the ThemeColor and ThemeFill members track the presentation palette, and ShadingPattern selects a ShadingPatternValues blend. The concrete implementor is Shading, read or assigned on the element that supports shading rather than built standalone.

**FAQPage entries**

```json
[
  {
    "question": "Where does IShading live in the IronPPT API?",
    "answer": "IShading is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface; its color members are typed as IColor and its pattern is a ShadingPatternValues value."
  },
  {
    "question": "What implements IShading in IronPPT?",
    "answer": "The Shading class in IronPPT.Models implements IShading. You read or assign the shading on the element that supports it rather than constructing a standalone object, then set Color, Fill, and ShadingPattern."
  },
  {
    "question": "How do you make shading follow the presentation theme?",
    "answer": "Set the theme members instead of the direct colors. ThemeColor and ThemeFill pick scheme colors, and ThemeFillShade, ThemeTint, and ThemeFillTint shift them lighter or darker so the shading tracks the presentation palette."
  }
]
```
