<!--
N-Lite/enum. Members verified 2026-06-23: Standard, ThemeColor, SchemaColor.
Salient: Standard (explicit value) first, then ThemeColor, SchemaColor. Consumed by Color.ColorType (verified).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.ColorTypeValues.html
-->

## Injected overview (Markdown)

Declare how a `Color` is interpreted with `ColorTypeValues`, set on `Color.ColorType`. `Standard` treats the color as an explicit RGB or hex value, the usual choice for a fixed color. `ThemeColor` ties the color to the document theme so it shifts when the theme changes, and `SchemaColor` resolves the color from the document's color scheme. The [add styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers applying color to content.

```csharp
color.ColorType = ColorTypeValues.Standard;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ColorTypeValues Enum - IronWord C# API`
- v2 (human): `ColorTypeValues: How a Color Resolves in C#`
- v3 (balanced): `ColorTypeValues Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set how a color is interpreted in C# with the IronWord ColorTypeValues enum: Standard, ThemeColor, or SchemaColor, applied on Color.ColorType.`
- v2 (human): `Decide how IronWord reads a color in C# with the ColorTypeValues enum: a fixed Standard value, a theme-linked ThemeColor, or a SchemaColor.`
- v3 (balanced): `Reference for the IronWord ColorTypeValues enum in C#: Standard, ThemeColor, and SchemaColor, set on Color.ColorType.`

---

## Structured data

**TechArticle abstract**

> ColorTypeValues declares how an IronWord Color is interpreted in C#, set on Color.ColorType. Standard treats it as an explicit RGB or hex value, ThemeColor ties it to the document theme, and SchemaColor resolves it from the document color scheme.
