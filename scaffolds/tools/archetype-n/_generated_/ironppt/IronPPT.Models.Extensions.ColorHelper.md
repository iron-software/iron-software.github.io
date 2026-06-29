<!--
N-Mid / static class (1 member). Frame E. IronPPT. Namespace IronPPT.Models.Extensions. Base Object.
Member verified 2026-06-23: ToHex(this Color c) -> string. Color = IronSoftware.Drawing.Color (cross-ref, WARN ok).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Extensions.ColorHelper.html
-->

## Injected overview (Markdown)

A hex string for a color, ready to drop into a style or markup attribute, comes from `ColorHelper`. The static helper adds an extension method to `Color` so any color value in a presentation can be expressed in the `#RRGGBB` form a developer needs when serializing a fill, a font color, or a border.

The single method is `ToHex`, called as an extension on a `Color` instance, returning the hex `string` for that color. Because it is an extension method, you call it directly on the color (`myColor.ToHex()`) rather than reaching for the helper type by name, which keeps color conversion inline where the color is already in hand. Use it whenever a slide style value needs a textual color rather than the structured `Color` object, for example when writing out a theme value or comparing two colors as strings.

```csharp
string hex = someColor.ToHex();
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows color applied to text, and the [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) styles a bullet, where a hex color is often handy.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ColorHelper - IronPPT C# API Reference`
- v2 (human): `ColorHelper: Convert a Color to Hex in C#`
- v3 (balanced): `ColorHelper Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Convert a color to a hex string in C# with the IronPPT ColorHelper static class: the ToHex extension method returns #RRGGBB for any Color value.`
- v2 (human): `Turn a color into hex in C# with IronPPT's ColorHelper: call the ToHex extension on any Color to get the #RRGGBB string for a style value.`
- v3 (balanced): `Reference for the IronPPT ColorHelper static class in C#: the ToHex extension method that converts a Color to its hex string form.`

---

## Structured data

**TechArticle abstract**

> Converting a presentation color to a hex string in C# runs through the IronPPT ColorHelper static class. Its single ToHex method is an extension on Color, returning the #RRGGBB string for that color. Call it inline on any color value when a style or markup attribute needs a textual color rather than the structured Color object.

**FAQPage entries**

```json
[
  {
    "question": "Where does ColorHelper live in the IronPPT API?",
    "answer": "ColorHelper is a static class in the IronPPT.Models.Extensions namespace, shipped in IronPPT.dll. It derives from System.Object and adds the ToHex extension method to Color."
  },
  {
    "question": "How do you convert a color to a hex string in C#?",
    "answer": "Call ToHex directly on a Color value, for example someColor.ToHex(). Because ColorHelper exposes it as an extension method, you do not name the helper type; the method returns the #RRGGBB hex string."
  }
]
```
