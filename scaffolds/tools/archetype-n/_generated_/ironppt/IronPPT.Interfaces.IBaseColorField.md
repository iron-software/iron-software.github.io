<!--
N-Mid / interface (2 members: Modulation, Offset, both IPercentage). Bare interface (extends nothing). Frame B.
Implementors verified 2026-06-23: BaseColorField (abstract base), ColorField, Hue, Luminance, Saturation. Sub-interfaces IColorField/IHue/ILuminance/ISaturation extend it.
Namespace IronPPT.Interfaces, IronPPT.dll.
Target: IronPPT.Interfaces.IBaseColorField.html
-->

## Injected overview (Markdown)

`IBaseColorField` is the shared contract for a single adjustable component of a color, the common shape behind hue, saturation, and luminance fields. It carries two properties, both typed as `IPercentage`: `Modulation` scales the component by a multiplier and `Offset` shifts it by a fixed amount, so a theme color can be nudged without redefining it outright.

The concrete fields that implement the contract are `Hue`, `Saturation`, and `Luminance`, each deriving from the abstract `BaseColorField`; `ColorField` is the general implementation. Most code reaches these through a `Color` rather than naming the interface, but coding against `IBaseColorField` lets a single routine read or set the `Modulation` and `Offset` of any component uniformly. The richer `IColorField` interface extends this base when a field needs more than the two adjustment values.

```csharp
IBaseColorField field = hue;
field.Modulation = new Percentage(75);
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles slide content, and the [IColorField reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IColorField.html) extends this contract.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IBaseColorField Interface - IronPPT C# API`
- v2 (human): `IBaseColorField: Color Component Contract C#`
- v3 (balanced): `IBaseColorField Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IBaseColorField is the IronPPT contract for one color component in C#, with Modulation and Offset percentages, implemented by Hue, Saturation, and Luminance.`
- v2 (human): `Adjust a single color component in C# through the IronPPT IBaseColorField contract: Modulation and Offset percentages on Hue, Saturation, and Luminance.`
- v3 (balanced): `Reference for the IronPPT IBaseColorField interface in C#: the Modulation and Offset color-component contract implemented by Hue, Saturation, and Luminance.`

---

## Structured data

**TechArticle abstract**

> Adjust a single color component in IronPPT through the IBaseColorField contract in C#. It exposes two IPercentage properties, Modulation to scale the component and Offset to shift it. The concrete fields Hue, Saturation, and Luminance implement it through the abstract BaseColorField, with ColorField as the general implementation.

**FAQPage entries**

```json
[
  {
    "question": "Where does IBaseColorField live in the IronPPT API?",
    "answer": "IBaseColorField is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and exposes two IPercentage properties, Modulation and Offset."
  },
  {
    "question": "What implements IBaseColorField in IronPPT?",
    "answer": "Hue, Saturation, and Luminance implement IBaseColorField through the abstract BaseColorField, and ColorField is the general implementation. The IColorField interface extends IBaseColorField for fields that need more than the two adjustment values."
  }
]
```
