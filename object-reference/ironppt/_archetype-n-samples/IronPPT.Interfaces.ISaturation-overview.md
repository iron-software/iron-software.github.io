<!--
N-Mid / interface (extends IBaseColorField). Frame A (subject-verb). Implementor: Saturation. Value is IPercentage. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.ISaturation.html
-->

## Injected overview (Markdown)

`ISaturation` adjusts how vivid or muted a color appears on a slide, the intensity dimension a developer changes to make a fill richer or more washed out without altering its hue. It sits in the color-field family alongside the hue and luminance contracts, so a project that tunes one aspect of a color tunes the others through the same shape. Reach for it when a theme color needs to be dialed up or down rather than replaced.

A developer obtains an `ISaturation` from the color it belongs to rather than constructing it in isolation. The concrete implementor in IronPPT is `Saturation`, which builds on the shared `BaseColorField` base, so it inherits the common color-field behavior while exposing saturation specifically. Its `Value` is an `IPercentage`, the proportional contract, because saturation is a proportion rather than an absolute figure: read `Value.Value` for the current level and assign a new `IPercentage` to change it.

```csharp
ISaturation saturation = new Saturation();
saturation.Value = new Percentage { Value = 60.0 };
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) show colors that saturation can tune.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ISaturation Interface - IronPPT C# API`
- v2 (human): `ISaturation: Color Saturation in C#`
- v3 (balanced): `ISaturation Interface | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ISaturation is the IronPPT color-saturation contract in C#: an IPercentage Value extending IBaseColorField, implemented by Saturation.`
- v2 (human): `Tune how vivid a slide color is in C# through IronPPT's ISaturation contract: set an IPercentage Value to raise or lower saturation, implemented by Saturation.`
- v3 (balanced): `Reference for the IronPPT ISaturation interface in C#: the color-saturation contract carrying an IPercentage Value, implemented by Saturation.`

---

## Structured data

**TechArticle abstract**

> Tune how vivid or muted a slide color appears in C# through IronPPT's ISaturation contract, the intensity dimension of a color that leaves the hue unchanged. Its Value is an IPercentage because saturation is a proportion. ISaturation extends IBaseColorField, so it shares the color-field shape with hue and luminance. The concrete implementor is Saturation, obtained from the color it belongs to.

**FAQPage entries**

```json
[
  {
    "question": "Where does ISaturation live in the IronPPT API?",
    "answer": "ISaturation is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IBaseColorField and carries a Value of type IPercentage. The implementor Saturation builds on the BaseColorField base class."
  },
  {
    "question": "Why is the ISaturation Value an IPercentage?",
    "answer": "Saturation is a proportion of color intensity rather than an absolute measurement, so Value is typed as IPercentage. Read Value.Value for the current level and assign a new Percentage to raise or lower how vivid the color is."
  }
]
```
