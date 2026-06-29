<!--
N-Mid / static class (1 generic member). Frame D. IronPPT. Namespace IronPPT.Models.Extensions. Base Object.
Member verified 2026-06-23: ToRange<T>(this T value, double min, double max) -> double.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Extensions.RangeExtension.html
-->

## Injected overview (Markdown)

Clamping a numeric value into a fixed band runs through `RangeExtension`. The static helper adds one extension method that takes a value and a lower and upper bound, returning a `double` constrained to that span, which is handy for keeping a size, opacity, or percentage within the limits a slide property accepts.

The method is `ToRange<T>`, a generic extension called on the value itself, taking a `double` minimum and a `double` maximum. It returns the value as a `double` brought inside `[min, max]`, so a figure below the floor comes back as the floor and a figure above the ceiling comes back as the ceiling. Because the receiver is generic, it works across the numeric types a presentation model uses without a separate overload per type. Reach for it when assigning a computed measurement to a property that has a valid range, rather than writing the same min and max guard inline each time.

```csharp
double opacity = rawValue.ToRange(0, 1);
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets sized style values, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) positions and sizes a shape where bounded values apply.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `RangeExtension - IronPPT C# API Reference`
- v2 (human): `RangeExtension: Clamp a Value to a Range in C#`
- v3 (balanced): `RangeExtension Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Clamp a numeric value to a range in C# with the IronPPT RangeExtension static class: the ToRange extension constrains a value between a min and max double.`
- v2 (human): `Keep a value within bounds in C# with IronPPT's RangeExtension: call ToRange with a min and max to clamp a size, opacity, or percentage.`
- v3 (balanced): `Reference for the IronPPT RangeExtension static class in C#: the generic ToRange extension that clamps a value between a min and max.`

---

## Structured data

**TechArticle abstract**

> Clamping a numeric value to a band in C# runs through the IronPPT RangeExtension static class. Its generic ToRange method is an extension that takes a double minimum and maximum and returns the value constrained inside that span. Use it to keep a size, opacity, or percentage within the limits a slide property accepts without repeating min and max guards.

**FAQPage entries**

```json
[
  {
    "question": "Where does RangeExtension live in the IronPPT API?",
    "answer": "RangeExtension is a static class in the IronPPT.Models.Extensions namespace, shipped in IronPPT.dll. It derives from System.Object and adds the generic ToRange extension method."
  },
  {
    "question": "How do you clamp a value to a range in C#?",
    "answer": "Call ToRange on the value, passing a minimum and maximum, for example rawValue.ToRange(0, 1). It returns a double constrained to that range, so a value below the floor returns the floor and one above the ceiling returns the ceiling."
  }
]
```
