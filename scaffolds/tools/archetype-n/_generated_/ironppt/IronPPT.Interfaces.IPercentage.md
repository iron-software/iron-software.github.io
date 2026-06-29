<!--
N-Mid / interface. Frame B (identity-by-role). Implementor: Percentage. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IPercentage.html
-->

## Injected overview (Markdown)

`IPercentage` is the value a developer reads or sets when a slide property is expressed as a proportion rather than an absolute measurement, the kind of figure used for a color saturation, a scale factor, or a relative width. Wrapping the number in a contract rather than passing a bare `double` keeps proportion values distinct from point or pixel measurements, so a property typed as `IPercentage` cannot be confused with one typed as a unit. Lean on the FAQ to place it against `IDocUnit`, the absolute-measurement contract it sits beside.

A developer usually receives an `IPercentage` from the property that exposes it rather than constructing one. The concrete implementor in IronPPT is `Percentage`, and the contract carries a single nullable `Value` of type `double` so an unset proportion reads as null instead of zero. `ToString` renders the value for display or logging. Reading `Value` gives the current proportion; assigning it changes the proportion the consuming property applies.

```csharp
IPercentage saturation = new Percentage();
saturation.Value = 75.0;
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) show properties that take proportional values.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IPercentage Interface - IronPPT C# API`
- v2 (human): `IPercentage: Proportional Values in C#`
- v3 (balanced): `IPercentage Interface | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IPercentage is the IronPPT proportion contract in C#: a nullable double Value for saturation, scale, and relative sizes, implemented by Percentage.`
- v2 (human): `Read and set proportional slide values in C# through IronPPT's IPercentage contract: a nullable Value that keeps proportions distinct from unit measurements.`
- v3 (balanced): `Reference for the IronPPT IPercentage interface in C#: the proportion contract carrying a nullable double Value, implemented by Percentage.`

---

## Structured data

**TechArticle abstract**

> Read and set a proportional slide value in C# through IronPPT's IPercentage contract, used where a property is a proportion such as saturation or scale rather than an absolute measurement. It carries a single nullable double Value, so an unset proportion reads as null. The concrete implementor is Percentage, usually received from the property that exposes it rather than constructed directly.

**FAQPage entries**

```json
[
  {
    "question": "Where does IPercentage live in the IronPPT API?",
    "answer": "IPercentage is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface; it carries a nullable double Value and a ToString method, and is implemented by the Percentage class."
  },
  {
    "question": "What is the difference between IPercentage and IDocUnit?",
    "answer": "IPercentage expresses a proportion as a nullable double, while IDocUnit expresses an absolute measurement that carries its own unit such as points or centimeters. A property typed as IPercentage is a relative figure, not a fixed size."
  }
]
```
