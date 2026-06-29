<!--
N-Mid (1 method, static class). Frame E (feature-fronted). public static class ColorHelper.
Verified 2026-06-23: ToHex(this Color c) extension -> string hex including alpha. Color is IronWord.Models.Color.
Namespace IronWord.Models.Extensions, IronWord.dll.
Target: IronWord.Models.Extensions.ColorHelper.html
-->

## Injected overview (Markdown)

A hexadecimal string for any IronWord `Color` comes from `ColorHelper`. The single method, `ToHex`, is an extension on `Color`, so any color value in a document, a font color, a shading fill, a border, converts to its hex code with one call. The returned string includes the alpha channel, and the conversion accounts for the color's opacity by adjusting the RGB values, which is what produces a correct code for a semi-transparent color rather than a flat opaque one.

Because `ToHex` is declared as an extension method, it reads as a method on the color itself once the `IronWord.Models.Extensions` namespace is in scope. Use it whenever a color needs to leave the object model as text, when logging the color applied to a run, exporting a style to CSS or another format, or comparing two fills by their string value. The input is the same `Color` you set elsewhere in the API, so no separate conversion type is involved. The [styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers applying color and other formatting to text.

```csharp
string hex = new Color("#FF0000").ToHex();
```

The [gradient text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-gradient-effect/) works with color stops in a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ColorHelper Class - IronWord C# API Reference`
- v2 (human): `ColorHelper: Convert a Word Color to Hex in C#`
- v3 (balanced): `ColorHelper Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Convert an IronWord Color to a hex string in C# with the ColorHelper class: ToHex returns the hex code including the alpha channel for opacity.`
- v2 (human): `Turn a Word document Color into a hex string in C# with IronWord ColorHelper: ToHex includes alpha and adjusts RGB for semi-transparent colors.`
- v3 (balanced): `Reference for the IronWord ColorHelper class in C#: the ToHex extension converts a Color to its hexadecimal representation with alpha.`

---

## Structured data

**TechArticle abstract**

> ColorHelper converts an IronWord Color to a hexadecimal string in C#. Its single extension method, ToHex, returns the hex code including the alpha channel and adjusts the RGB values for the color's opacity, so a semi-transparent color produces a correct code. Use it to export, log, or compare a document color as text.

**FAQPage entries**

```json
[
  {
    "question": "Where does ColorHelper live in the IronWord API?",
    "answer": "ColorHelper is a static class in the IronWord.Models.Extensions namespace, shipped in IronWord.dll, with base type System.Object. Its ToHex method is an extension on Color, available once the namespace is in scope."
  },
  {
    "question": "How do you convert a Word color to a hex string in C#?",
    "answer": "Call ToHex on a Color value, for example new Color(\"#FF0000\").ToHex(). The result includes the alpha channel, and the conversion adjusts the RGB values for the color's opacity so semi-transparent colors return a correct code."
  }
]
```
