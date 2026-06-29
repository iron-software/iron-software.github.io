<!--
N-Lite/enum (IronPPT.Enums, base Enum). Members verified: HueSaturationLuminance, PresetColor, RgbColorModelHex, SchemaColor, Standard, SystemColor, ThemeColor.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.ColorTypeValues.html
-->

## Injected overview (Markdown)

Identifying how a color is defined runs through `ColorTypeValues`. `RgbColorModelHex` is the explicit hex form a developer reaches for most, `ThemeColor` and `SchemaColor` resolve against the presentation theme, and `PresetColor` and `SystemColor` pull from the named palettes. `HueSaturationLuminance` describes a color in HSL terms and `Standard` marks a standard fixed color. The value records which model a color uses so it round-trips correctly when the slide is written.

```csharp
var colorType = ColorTypeValues.RgbColorModelHex;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ColorTypeValues Enum - IronPPT C# API`
- v2 (human): `ColorTypeValues: How Color Is Set in C#`
- v3 (balanced): `ColorTypeValues Enum | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Identify a color model in C# with the IronPPT ColorTypeValues enum: RgbColorModelHex, ThemeColor, SchemaColor, PresetColor, and more.`
- v2 (human): `Tell IronPPT how a color is defined in C# with the ColorTypeValues enum: explicit hex, theme, schema, preset, or system palette.`
- v3 (balanced): `Reference for the IronPPT ColorTypeValues enum in C#: color models like RgbColorModelHex, ThemeColor, SchemaColor, and SystemColor.`

---

## Structured data

**TechArticle abstract**

> ColorTypeValues identifies how a color is defined in IronPPT for C#. RgbColorModelHex is the explicit hex form, ThemeColor and SchemaColor resolve against the presentation theme, and PresetColor and SystemColor draw from named palettes. HueSaturationLuminance describes a color in HSL terms and Standard marks a standard fixed color.
