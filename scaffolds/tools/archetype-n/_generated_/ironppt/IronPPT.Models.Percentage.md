<!--
N-Mid (Value, ToString, two implicit operators). Frame D. IronPPT.
Value (Nullable<double>), ToString(), implicit operator Percentage(double)/(int) verified 2026-06-23.
Base Object; implements IPercentage. NS IronPPT.Models, IronPPT.dll.
Target: IronPPT.Models.Percentage.html
-->

## Injected overview (Markdown)

Expressing a proportional amount in a presentation, such as a luminance shift or a gradient stop position, runs through `Percentage`. It wraps a single proportion value so the API can take a percentage in one consistent shape wherever a fraction of a whole is meant, rather than mixing raw doubles with no unit signal.

The proportion is stored in the `Value` property, a nullable `double`, which leaves a percentage unset until it is assigned. Two implicit conversions make assignment terse: a `double` and an `int` both convert straight to a `Percentage`, so `0.75` or `50` can be passed where one is expected. `ToString` renders the stored value for logging or display. `Percentage` implements `IPercentage`, the contract color-component fields like `Luminance`, `Saturation`, and `Hue` accept, so the same value type flows through every place a presentation needs a proportion.

```csharp
Percentage opacity = 0.75;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) builds the shapes whose color and fill take these proportions, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets the styling values they feed into.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Percentage Class - IronPPT C# API Reference`
- v2 (human): `Percentage: Proportional Values in C#`
- v3 (balanced): `Percentage Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Hold a proportional amount in C# with the IronPPT Percentage class: set the Value double, with implicit conversion from double and int.`
- v2 (human): `Pass a proportion through IronPPT in C# with the Percentage class: assign a double or int directly and feed it to color and style fields.`
- v3 (balanced): `Reference for the IronPPT Percentage class in C#: an IPercentage value type with a Value property and implicit double and int conversions.`

---

## Structured data

**TechArticle abstract**

> Holding a proportional amount in a presentation runs through the IronPPT Percentage class in C#. Its Value property is a nullable double, and implicit conversions from double and int let a plain number assign directly. ToString renders the value. Percentage implements IPercentage, the contract that color-component fields such as Luminance, Saturation, and Hue accept.

**FAQPage entries**

```json
[
  {
    "question": "Where does Percentage live in the IronPPT API?",
    "answer": "Percentage is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and implements IPercentage, the contract color-component fields accept for a proportional amount."
  },
  {
    "question": "How do you assign a percentage value in C#?",
    "answer": "Set the Value property, a nullable double, or use the implicit conversion from double or int and assign a plain number where a Percentage is expected. Color fields such as Luminance and Saturation accept it through the IPercentage contract."
  }
]
```
