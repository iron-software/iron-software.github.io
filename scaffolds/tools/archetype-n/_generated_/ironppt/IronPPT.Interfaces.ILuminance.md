<!--
N-Mid / interface (1 own member). Frame D (gerund). Extends IBaseColorField. Implementor: Luminance. Sibling of IHue/ISaturation - differ. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.ILuminance.html
-->

## Injected overview (Markdown)

Lightening or darkening a presentation color in C# runs through `ILuminance`. The contract represents the luminance adjustment on a color field, the brightness change that makes a color lighter or darker without altering its hue or intensity. A developer reaches for it while building tints and shades of a base color, for instance generating a lighter variant of a theme color for a hover state or a darker one for a border.

A luminance adjustment is obtained from the color it modifies rather than constructed alone, so an `ILuminance` reference comes from a color and is then set. Its own member is `Value`, an `IPercentage` giving how much brightness to apply. Because the contract extends `IBaseColorField`, it also carries the inherited `Modulation` and `Offset` percentages shared by every color-field adjustment. The concrete implementor in IronPPT is the `Luminance` class, sitting beside `Hue` and `Saturation` as the three components of a color tweak, so most code sets brightness through `Luminance` directly.

```csharp
luminance.Value = percentage;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) applies a styled fill, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows related color styling.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ILuminance - IronPPT C# API Reference`
- v2 (human): `ILuminance: Adjust Color Brightness in C#`
- v3 (balanced): `ILuminance Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT ILuminance interface in C#: a Value (IPercentage) brightness adjustment over IBaseColorField, with inherited Modulation and Offset.`
- v2 (human): `Lighten or darken a color in C# through the IronPPT ILuminance contract: set the Value percentage, implemented by the Luminance class.`
- v3 (balanced): `Reference for the IronPPT ILuminance interface in C#: the brightness adjustment carrying a Value, extending IBaseColorField, implemented by Luminance.`

---

## Structured data

**TechArticle abstract**

> Lighten or darken a presentation color in C# through the IronPPT ILuminance contract. Its own member is Value, an IPercentage giving the brightness to apply without changing hue or intensity; inherited Modulation and Offset percentages refine the adjustment. The concrete implementor is the Luminance class, beside the Hue and Saturation components.

**FAQPage entries**

```json
[
  {
    "question": "Where does ILuminance live in the IronPPT API?",
    "answer": "ILuminance is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IBaseColorField and is implemented by the Luminance class in IronPPT.Models."
  }
]
```
