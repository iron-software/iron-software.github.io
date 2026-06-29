<!--
N-Mid (1 property + implicit operator). Frame E. IronPPT.
Value (IPercentage), implicit operator Luminance(double) verified 2026-06-23.
Base BaseColorField; implements ILuminance, IBaseColorField. NS IronPPT.Models, IronPPT.dll.
Target: IronPPT.Models.Luminance.html
-->

## Injected overview (Markdown)

Brightness adjustment on a slide color runs through `Luminance`. It holds a single lightness amount, expressed as a percentage, that shifts a theme or scheme color lighter or darker without picking a brand-new color value. Reach for it when a shape, text, or fill should track a base color but sit a step brighter or dimmer than the original.

The amount lives in the `Value` property, an `IPercentage`, so a luminance of fifty percent reads as a half-bright variation of the source color. Because `Luminance` defines an implicit conversion from `double`, a plain numeric value assigns directly where a `Luminance` is expected, which keeps color-tweak code short. `Luminance` derives from `BaseColorField` and sits alongside `Hue` and `Saturation` as the three color-component adjustments IronPPT exposes, so a color is tuned one axis at a time rather than recomputed by hand.

```csharp
Luminance luminance = 0.5;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) creates the shapes whose color these adjustments tune, and the [manage image how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-image/) works with visual content on a slide.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Luminance Class - IronPPT C# API Reference`
- v2 (human): `Luminance: Adjust Color Brightness in C#`
- v3 (balanced): `Luminance Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Adjust slide color brightness in C# with the IronPPT Luminance class: set the Value percentage to shift a theme or scheme color lighter or darker.`
- v2 (human): `Tune the lightness of a slide color in C# with the IronPPT Luminance class: hold one percentage amount and brighten or dim a base color.`
- v3 (balanced): `Reference for the IronPPT Luminance class in C#: a color-component field that holds a Value percentage to brighten or dim a slide color.`

---

## Structured data

**TechArticle abstract**

> Brightness adjustment on a slide color runs through the IronPPT Luminance class in C#. It holds one lightness amount in its Value property, an IPercentage, that shifts a theme or scheme color lighter or darker. An implicit conversion from double lets a plain number assign directly. Luminance derives from BaseColorField and pairs with Hue and Saturation as the color-component adjustments.

**FAQPage entries**

```json
[
  {
    "question": "Where does Luminance live in the IronPPT API?",
    "answer": "Luminance is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from BaseColorField and implements ILuminance and IBaseColorField, holding one Value percentage."
  },
  {
    "question": "How do you set a luminance value in C#?",
    "answer": "Assign the Value property, an IPercentage, or rely on the implicit conversion from double and assign a plain number where a Luminance is expected. The amount brightens or dims the source color rather than replacing it."
  }
]
```
