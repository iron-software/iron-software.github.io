<!--
N-Mid (1 own member + inherited). Frame B. IronPPT. Value (byte) verified; base BaseColorField (Modulation/Offset) verified 2026-06-23.
Color.R/G/B return ColorField verified on Color page.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.ColorField.html
-->

## Injected overview (Markdown)

`ColorField` holds a single color channel in IronPPT, the red, green, blue, or alpha component you read or set when working with a `Color`. A `Color` exposes its `R`, `G`, and `B` channels as `ColorField` objects, so this is the type you touch to inspect or change one component without rebuilding the whole color.

The own property is `Value`, a `byte` from 0 to 255 that holds the channel intensity. From its base `BaseColorField`, a `ColorField` also carries `Modulation` and `Offset`, both `IPercentage`, for scaling or shifting the channel relatively rather than setting an absolute number. For most code, assign `Value` directly; reach for the inherited modulation and offset only when a theme color needs a proportional tweak. Construct one with `new ColorField()` or, more commonly, read it back from a `Color`'s channel properties.

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) applies colored styling, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers text formatting.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ColorField Class - IronPPT C# API Reference`
- v2 (human): `ColorField: A Color Channel in C#`
- v3 (balanced): `ColorField Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ColorField is a single color channel in IronPPT for C#: its byte Value holds R, G, B, or alpha, with inherited Modulation and Offset percentages.`
- v2 (human): `Read or set one color channel in C# with IronPPT's ColorField: a byte Value for R, G, B, or alpha, plus inherited relative adjustments.`
- v3 (balanced): `Reference for the IronPPT ColorField class in C#: the per-channel value (byte Value) exposed by a Color's R, G, and B properties.`

---

## Structured data

**TechArticle abstract**

> Working with one color channel in IronPPT for C# runs through ColorField, the red, green, blue, or alpha component of a Color. Its Value property is a byte from 0 to 255, and from BaseColorField it inherits Modulation and Offset for relative adjustment. A Color exposes its R, G, and B properties as ColorField objects.

**FAQPage entries**

```json
[
  {
    "question": "Where does ColorField live in the IronPPT API?",
    "answer": "ColorField is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from BaseColorField and implements IColorField and IBaseColorField."
  },
  {
    "question": "How do you set a single color channel in C# with IronPPT?",
    "answer": "Assign the Value property of a ColorField, a byte from 0 to 255. A Color exposes its R, G, and B channels as ColorField objects, so read or set Value on those to change one component."
  }
]
```
