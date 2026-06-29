<!--
N-Mid (own member Value + implicit operator; inherits Modulation/Offset). Frame E. IronPPT.
Verified 2026-06-23: class Saturation : BaseColorField, ISaturation, IBaseColorField; Value (IPercentage); static implicit operator Saturation(double); inherited Modulation, Offset (IPercentage) from BaseColorField.
Target: IronPPT.Models.Saturation.html
-->

## Injected overview (Markdown)

Adjusting how vivid a theme color appears on a slide runs through `Saturation`. It holds the saturation component of a color transform, so a developer who wants a brand color to read richer or more muted sets it once and lets IronPPT apply the shift wherever that color is used.

A `Saturation` is assigned wherever a color field expects a saturation adjustment, and it reads naturally from a plain number because a `static implicit operator Saturation(double value)` converts a `double` straight into one. Its `Value` property is an `IPercentage` that expresses the saturation level, while the inherited `Modulation` and `Offset` properties (also `IPercentage`, from `BaseColorField`) scale and shift that level for finer control. Because the implicit conversion exists, assigning `0.8` is equivalent to building the object by hand, which keeps color-tuning code short.

```csharp
Saturation saturation = 0.8;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) sets shape colors, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles text color.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Saturation Class - IronPPT C# API Reference`
- v2 (human): `Saturation: Tune Color Vividness in C#`
- v3 (balanced): `Saturation Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Adjust color vividness in C# with the IronPPT Saturation class: set Value as an IPercentage, with inherited Modulation and Offset, or assign a double.`
- v2 (human): `Make a slide color richer or more muted in C# with the IronPPT Saturation class: set its Value, or assign a plain double via implicit conversion.`
- v3 (balanced): `Reference for the IronPPT Saturation class in C#: the saturation component of a color transform, with a Value percentage and inherited Modulation.`

---

## Structured data

**TechArticle abstract**

> Adjusting how vivid a theme color appears in C# runs through IronPPT's Saturation class. Its Value is an IPercentage holding the saturation level, and inherited Modulation and Offset scale and shift it. A static implicit operator converts a double into a Saturation, so assigning 0.8 is the same as constructing one by hand.

**FAQPage entries**

```json
[
  {
    "question": "Where does Saturation live in the IronPPT API?",
    "answer": "Saturation is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from BaseColorField and implements ISaturation and IBaseColorField, and a double converts to it implicitly."
  },
  {
    "question": "How do you set saturation from a plain number in C#?",
    "answer": "Assign a double directly, such as Saturation saturation = 0.8, because a static implicit operator converts the double into a Saturation. Set the Value property as an IPercentage when you need the object form."
  }
]
```
