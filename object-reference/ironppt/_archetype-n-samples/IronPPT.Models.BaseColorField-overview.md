<!--
N-Mid (abstract base, 2 members). Frame B. IronPPT. Members Modulation/Offset verified 2026-06-23.
Subclass ColorField verified; IBaseColorField interface verified.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.BaseColorField.html
-->

## Injected overview (Markdown)

Scaling or shifting one color channel in IronPPT runs through the shape `BaseColorField` defines. It gives a channel value the modulation and offset that let a color be adjusted relatively instead of set to a flat number. You rarely name it directly: a concrete `ColorField` (the red, green, or blue channel of a `Color`) is the type you handle, and the adjustment members live on this shared base.

Two properties live here. `Modulation` is an `IPercentage` that scales the channel value, and `Offset` is an `IPercentage` that shifts it, both expressed as percentages so a theme color can be lightened or darkened consistently. Because `BaseColorField` is `abstract`, you work through a derived type such as `ColorField`, reading or assigning these properties when a color needs a relative adjustment instead of an absolute value. For straightforward solid colors, set the channel value on `ColorField` and leave modulation and offset alone.

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows where styled color is applied, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers formatting text runs.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BaseColorField Class - IronPPT C# API`
- v2 (human): `BaseColorField: Color Channel Base in C#`
- v3 (balanced): `BaseColorField Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `BaseColorField is the abstract color-channel base in IronPPT for C#: it carries Modulation and Offset percentages and is derived by ColorField.`
- v2 (human): `Adjust a color channel relatively in C# through IronPPT's BaseColorField: the Modulation and Offset percentages that ColorField inherits.`
- v3 (balanced): `Reference for the IronPPT BaseColorField class in C#: the abstract channel base supplying Modulation and Offset, derived by ColorField.`

---

## Structured data

**TechArticle abstract**

> Adjusting a color channel relatively in IronPPT for C# means working through the shape BaseColorField defines. It carries Modulation, an IPercentage that scales the channel, and Offset, an IPercentage that shifts it, so a theme color can be lightened or darkened consistently. The concrete ColorField is the type you handle; the adjustment members live on this shared base.

**FAQPage entries**

```json
[
  {
    "question": "Where does BaseColorField live in the IronPPT API?",
    "answer": "BaseColorField is an abstract class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from System.Object, implements IBaseColorField, and is the base type for ColorField."
  },
  {
    "question": "How do you adjust a color channel in C# with IronPPT?",
    "answer": "Use a concrete ColorField, which inherits BaseColorField's Modulation and Offset properties. Set Modulation to scale the channel and Offset to shift it, both as IPercentage values, when a color needs a relative adjustment."
  }
]
```
