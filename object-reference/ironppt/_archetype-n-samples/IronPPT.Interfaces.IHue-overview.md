<!--
N-Mid / interface (1 own member). Frame A (subject-verb). Extends IBaseColorField. Implementor: Hue. Sibling of ILuminance/ISaturation - differ. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IHue.html
-->

## Injected overview (Markdown)

`IHue` shifts the hue component of a color in a presentation. The contract represents the hue adjustment applied to a color field, the rotation around the color wheel that changes a color's tint while leaving its brightness and intensity alone. A developer works with it while fine-tuning theme colors or matching a shape's fill to a brand palette without picking a new color outright.

A hue adjustment is reached through the color it modifies rather than created on its own, so an `IHue` reference is usually obtained from a color and then set. Its own member is `Angle`, an `IRotation` giving the degrees of hue rotation. Because the contract extends `IBaseColorField`, it also carries the inherited `Modulation` and `Offset` percentages that scale and shift the adjustment. The concrete implementor in IronPPT is the `Hue` class, alongside its sibling adjustments `Luminance` and `Saturation`, so most code sets the hue angle through `Hue` directly.

```csharp
hue.Angle = rotation;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) styles a shape fill, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) covers related color work.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IHue Interface - IronPPT C# API Reference`
- v2 (human): `IHue: Adjust Color Hue in C#`
- v3 (balanced): `IHue Interface | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IHue interface in C#: an Angle (IRotation) hue adjustment over IBaseColorField, with inherited Modulation and Offset.`
- v2 (human): `Shift a color's hue in C# through the IronPPT IHue contract: set the Angle of rotation, implemented by the Hue class.`
- v3 (balanced): `Reference for the IronPPT IHue interface in C#: the hue adjustment carrying an Angle, extending IBaseColorField, implemented by Hue.`

---

## Structured data

**TechArticle abstract**

> Shift the hue of a presentation color in C# through the IronPPT IHue contract. Its own member is Angle, an IRotation giving the degrees of rotation around the color wheel; inherited Modulation and Offset percentages scale and shift the adjustment. The concrete implementor is the Hue class, alongside the sibling Luminance and Saturation adjustments.

**FAQPage entries**

```json
[
  {
    "question": "Where does IHue live in the IronPPT API?",
    "answer": "IHue is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IBaseColorField and is implemented by the Hue class in IronPPT.Models."
  }
]
```
