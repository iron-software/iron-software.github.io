<!--
N-Full (class; large field surface bucketed by salience; ctors RGB/ARGB/hex; FromArgb, ToHtmlCssColorCode, ToArgb, GetBrightness, SetAlpha; A/R/G/B/ColorType props; implicit casts). Frame A lead / Frame E abstract. IronWord.
Verified 2026-06-23: Color(int red,int green,int blue), Color(int alpha,int red,int green,int blue), Color(string); fields Black/White/Red/Transparent/Empty etc.; A,R,G,B,ColorType,ColorValue; FromArgb(int), ToArgb(), ToHtmlCssColorCode(), GetBrightness(), SetAlpha(int). Base Object, implements IColor. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Color.html
-->

## Injected overview (Markdown)

`Color` represents a single color value that IronWord applies to text, shading, borders, and shape fills across a Word document. A developer reaches for it wherever a document element exposes a color, and its broad set of named colors, RGB and hex constructors, and implicit casts make it easy to express a color however the surrounding code already holds one.

There are three ways to construct a color directly. `new Color(int, int, int)` takes red, green, and blue components from 0 to 255, the four-argument `new Color(int, int, int, int)` adds an alpha component for transparency, and `new Color(string)` parses a hex string in rgb, argb, rrggbb, or aarrggbb web syntax. For convenience the type also exposes a large bank of static, predefined colors so a developer rarely needs to remember component values.

Those predefined colors fall into clear groups. The web color names (`Black`, `White`, `Red`, `Blue`, and the rest of the standard palette) cover everyday choices, the document-theme colors (`Background1`, `Text1`, `Accent1` through `Accent6`, `Hyperlink`) map onto a Word theme, and the markers `Transparent`, `None`, and `Empty` handle the absence of color. Once a color exists, read its components through the `A`, `R`, `G`, and `B` properties, inspect or set its kind with `ColorType`, and convert it with `ToHtmlCssColorCode` for a `#RRGGBB` string, `ToArgb` for a 32-bit value, or `GetBrightness` for a 0-to-1 measure. `SetAlpha` adjusts transparency in place, and `FromArgb` builds a color from an ARGB integer. Implicit casts to and from `System.Drawing.Color` and the ImageSharp color types mean a color obtained elsewhere drops straight into IronWord without manual conversion.

```csharp
var heading = new Color(0, 51, 153);
var fromHex = new Color("#FF8800");
```

The [add style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) applies color to text, the [add style text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) shows a worked styling pass, and the [shadow text effect how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-shadow-effect/) uses color in effects.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Color Class - IronWord C# API Reference`
- v2 (human): `Color: Set Colors in C# Word Documents`
- v3 (balanced): `Color Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set colors in C# Word documents with the IronWord Color class. Use RGB, ARGB, or hex constructors, named colors, and casts to System.Drawing.`
- v2 (human): `Express any color in a C# Word document with the IronWord Color class: RGB and hex constructors, theme and web colors, and ARGB conversions.`
- v3 (balanced): `Reference for the IronWord Color class in C#: build colors from RGB, ARGB, or hex, use predefined web and theme colors, and read A, R, G, B.`

---

## Structured data

**TechArticle abstract**

> Color values for text, shading, borders, and shape fills in a C# Word document are expressed through IronWord's Color. Construct one from RGB or ARGB components or a hex string, or pick from predefined web, theme, and marker colors such as Black, Accent1, and Transparent. Read components with A, R, G, and B, convert with ToHtmlCssColorCode and ToArgb, and rely on implicit casts to and from System.Drawing.Color and ImageSharp color types.

**FAQPage entries**

```json
[
  {
    "question": "Where does Color live in the IronWord API?",
    "answer": "Color is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object, implements IColor, and casts implicitly to and from System.Drawing.Color and ImageSharp color types."
  },
  {
    "question": "How do you create a color in C# with IronWord?",
    "answer": "Use new Color(red, green, blue) for RGB, the four-argument constructor to add alpha, or new Color(hex) to parse a web hex string. You can also use a predefined color such as Color.Red or a theme color such as Color.Accent1."
  },
  {
    "question": "How do you convert an IronWord Color to a hex code?",
    "answer": "Call ToHtmlCssColorCode to get a #RRGGBB string, or ToArgb for the 32-bit ARGB integer. Read the individual channels through the A, R, G, and B properties when you need the raw components."
  }
]
```
