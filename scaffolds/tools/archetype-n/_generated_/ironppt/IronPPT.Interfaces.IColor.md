<!--
N-Full / interface. Frame B lead, Frame E abstract. Implementor: Color. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IColor.html
-->

## Injected overview (Markdown)

`IColor` is the color contract you work through when a shape, run, or border in a presentation needs a fill or outline color. It exposes a color from several angles at once: the RGB channels (`R`, `G`, `B`, plus alpha `A`), preset and theme lookups (`PresetColorValue`, `ThemeColorValue`, `SchemaColorValue`, `SystemColorValue`), and the perceptual adjustments (`Hue`, `Saturation`, `Luminance`, `Tint`, `Shade`) that PowerPoint applies on top of a base value. Coding against the contract means a styling helper does not care whether the color came from a hex string, a scheme slot, or a system value.

A developer rarely constructs the contract directly. The concrete implementor in IronPPT is `Color`, which is what you assign or read when setting an element's appearance. `ColorType` reports which representation is active so a reader can branch on RGB versus a preset, and the read-only `ColorValue` returns the resolved value. The RGB channels `R`, `G`, and `B` are each a `ColorField`, so a channel carries its own value and modifiers rather than a bare byte.

Beyond the properties, the contract carries conversion helpers that save a manual computation: `ToArgb` packs the channels into a single integer, `ToHtmlCssColorCode` produces a CSS-ready string, and `GetBrightness` and `GetLuminance` return computed measures useful for contrast checks. Use those when exporting or comparing colors rather than re-deriving the math. The fine-tuning properties `Tint` and `Shade` each take a `Percentage`, while `Complement`, `Inverse`, and `Gamma` are nullable flags that toggle the corresponding transform only when set, so leaving them unset keeps the base color untouched.

```csharp
IColor color = new Color();
color.R = new ColorField { Value = 0x1F };
color.G = new ColorField { Value = 0x6F };
color.B = new ColorField { Value = 0xC0 };
string css = color.ToHtmlCssColorCode();
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) applies color while styling text, the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) sets fill colors on shapes, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) walks through formatting runs where color is set.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IColor Interface - IronPPT C# API`
- v2 (human): `IColor: The Presentation Color Contract in C#`
- v3 (balanced): `IColor Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IColor is IronPPT's color contract in C#: it exposes RGB channels, theme and preset lookups, and converters, implemented by the Color class.`
- v2 (human): `Set fill and outline colors in C# through IronPPT's IColor contract: read RGB, theme, and preset values, or convert to ARGB and CSS.`
- v3 (balanced): `Reference for the IronPPT IColor interface in C#: the color contract Color implements, with RGB channels, theme lookups, and converters.`

---

## Structured data

**TechArticle abstract**

> Fill and outline colors in IronPPT presentations are described through the IColor contract in C#. It exposes RGB channels (R, G, B, A), theme and preset lookups, and perceptual adjustments such as Hue, Saturation, and Luminance, plus converters like ToArgb and ToHtmlCssColorCode. The concrete implementor is the Color class, which you assign when styling shapes, runs, and borders.

**FAQPage entries**

```json
[
  {
    "question": "Where does IColor live in the IronPPT API?",
    "answer": "IColor is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and is implemented by the Color class, which you assign when setting element colors."
  },
  {
    "question": "What implements IColor in IronPPT?",
    "answer": "The Color class in IronPPT.Models implements IColor. Most code uses Color directly to set RGB channels, theme colors, or preset values, then reads ColorValue or calls ToHtmlCssColorCode to export the resolved color."
  },
  {
    "question": "How do you convert an IColor to a CSS or ARGB value?",
    "answer": "Call ToHtmlCssColorCode for a CSS-ready string or ToArgb for a packed 32-bit integer. GetBrightness and GetLuminance return computed measures useful for contrast checks, so you do not have to re-derive the math from the channels."
  }
]
```
