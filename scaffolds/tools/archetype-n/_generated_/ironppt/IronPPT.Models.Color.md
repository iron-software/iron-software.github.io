<!--
N-Full (rich: 4 ctors, many static Color fields, ~19 properties, static FromArgb factories + conversion methods). Frame A. IronPPT. Implements IColor.
Verified 2026-06-23: ctors Color()/Color(int,int,int)/Color(int,int,int,int)/Color(string); fields Red/Green/Blue/White/Black/Transparent/Accent1..6/Background1/Text1/None etc (static readonly Color); properties R/G/B (ColorField), A (ColorField), ColorType (ColorTypeValues), ColorValue (string get), Hue/Saturation/Luminance, Tint/Shade (Percentage), ThemeColorValue/SchemaColorValue/SystemColorValue/PresetColorValue; methods FromArgb overloads (static), ToArgb, ToHtmlCssColorCode, GetBrightness, GetLuminance, Equals, ToString. Bucketed: standard colors / theme+scheme colors / channels / factories+conversion.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Color.html
-->

## Injected overview (Markdown)

`Color` represents a single color in IronPPT, the value you assign whenever text, a shape fill, a border, or a background needs a specific shade. It covers both literal RGB colors and the theme-aware colors a presentation template defines, so the same type serves a hard-coded hex value and a slot like "Accent 1" that follows the deck's theme.

A `Color` is created directly and then assigned to whatever property takes one, so it sits at the styling step of building a slide. Construct it from components or a string, or take one of the many predefined colors exposed as static fields, then pass it to a fill, border, or text style.

Four constructors cover the common cases: `new Color()`, `new Color(int red, int green, int blue)`, `new Color(int alpha, int red, int green, int blue)`, and `new Color(string color)` for a hex or named string. The static fields fall into two groups. The **standard web colors** (`Red`, `Green`, `Blue`, `Black`, `White`, `Transparent`, and the full named-color set) give you a literal color in one reference, while the **theme and scheme colors** (`Accent1` through `Accent6`, `Background1`, `Background2`, `Text1`, `Text2`, `None`) resolve against the presentation theme. For reading or tweaking a color, the **channel properties** `R`, `G`, `B`, and `A` are `ColorField` objects, `Tint` and `Shade` are `Percentage` lightening and darkening, and `Hue`, `Saturation`, and `Luminance` expose the HSL view; `ColorType` reports the kind via `ColorTypeValues` and `ColorValue` returns the resolved string. The **factory and conversion methods** round it out: the static `FromArgb` overloads build a color from packed or separate ARGB integers, while `ToArgb`, `ToHtmlCssColorCode`, `GetBrightness`, and `GetLuminance` read it back.

```csharp
using IronPPT.Models;

Color brand = new Color("#1B6AC9");
Color accent = Color.Accent1;
string css = brand.ToHtmlCssColorCode();
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) applies color to styled text, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers formatting runs that carry a color.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Color Class - IronPPT C# API Reference`
- v2 (human): `Color: Set Colors in C# Presentations`
- v3 (balanced): `Color Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Color represents a presentation color in IronPPT for C#: build from RGB or a string, use predefined and theme colors, and convert with FromArgb.`
- v2 (human): `Set any color in C# with IronPPT's Color class: literal RGB, hex strings, named web colors, or theme slots like Accent1, plus tint and shade.`
- v3 (balanced): `Reference for the IronPPT Color class in C#: construct from RGB or a string, use named and theme colors, and read R, G, B, Tint, and Shade.`

---

## Structured data

**TechArticle abstract**

> Setting a color in IronPPT for C# runs through the Color class. Build one from RGB components, an ARGB integer, or a hex or named string, or take a predefined static color such as Red or the theme slot Accent1. The R, G, B, and A channels are ColorField objects, Tint and Shade are Percentage adjustments, and FromArgb, ToArgb, and ToHtmlCssColorCode convert it.

**FAQPage entries**

```json
[
  {
    "question": "Where does Color live in the IronPPT API?",
    "answer": "Color is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from System.Object, implements IColor, and is assigned to fill, border, and text styling properties."
  },
  {
    "question": "How do you create a color in C# with IronPPT?",
    "answer": "Use a constructor such as new Color(red, green, blue) or new Color(\"#1B6AC9\"), take a predefined static color like Color.Red, or call the static FromArgb overloads. Theme slots like Color.Accent1 follow the presentation theme."
  },
  {
    "question": "What is the difference between a standard color and a theme color in IronPPT?",
    "answer": "Standard colors such as Red, Blue, and Black are literal values. Theme and scheme colors like Accent1, Background1, and Text1 resolve against the presentation's theme, so they change when the template changes. ColorType reports which kind a Color is."
  }
]
```
