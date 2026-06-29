<!--
N-Mid (class, derives DocUnit; implements IFontSize, IDocUnit; HalfPoint + ctor + implicit double operator). Frame E (feature-fronted). IronPPT.
Members verified 2026-06-23: HalfPoint (Nullable<int>), implicit operator FontSize(double). Base DocUnit, implements IFontSize, IDocUnit.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.FontSize.html
-->

## Injected overview (Markdown)

The point size text renders at, expressed the way PowerPoint stores it, is held by `FontSize`. It lets a run or a `Font` carry an exact size while keeping the underlying half-point representation out of everyday code.

`HalfPoint`, a nullable `int`, is the stored value: PowerPoint records font sizes in half-points, so a 12-point size is 24 half-points, and leaving it null means no explicit size is set. Most code never touches `HalfPoint` directly, because `FontSize` defines an implicit conversion from `double`, so assigning a plain point value like `18` produces the right `FontSize` for you. Building on `DocUnit`, it shares the unit-aware behavior of the library's other measurement types, which is why a size reads naturally as a number while the half-point detail stays internal. Assign a `FontSize` wherever a size is expected, typically the `FontSize` property of a `Font`, and the text renders at that size. To put it to work, style the text it applies to. The text styling workflow shows where size fits alongside typeface.

```csharp
using IronPPT.Models;

FontSize size = 18;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) adds and styles text on a slide, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets text styling.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontSize Class - IronPPT C# API Reference`
- v2 (human): `FontSize: Set Text Point Size in C#`
- v3 (balanced): `FontSize Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set text point size in C# with the IronPPT FontSize class: assign a double for the size, or read the stored HalfPoint value as a nullable int.`
- v2 (human): `Control the point size of PowerPoint text in C# with the IronPPT FontSize class: assign a plain number and let it store the half-point value.`
- v3 (balanced): `Reference for the IronPPT FontSize class in C#: hold a font point size, convert implicitly from a double, and store it as HalfPoint.`

---

## Structured data

**TechArticle abstract**

> Setting the point size of slide text in C# runs through IronPPT's FontSize class. HalfPoint, a nullable int, stores the size in PowerPoint's half-point units, while an implicit conversion from double lets code assign a plain point value such as 18. Deriving from DocUnit, FontSize is assigned where a size is expected, typically a Font's FontSize property.

**FAQPage entries**

```json
[
  {
    "question": "Where does FontSize live in the IronPPT API?",
    "answer": "FontSize is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from DocUnit and implements IFontSize and IDocUnit, and it is assigned to a Font's FontSize property to set text size."
  },
  {
    "question": "How do you set a text size in C# with IronPPT?",
    "answer": "Assign a double to a FontSize, for example FontSize size = 18, and the implicit conversion stores it. PowerPoint keeps sizes in half-points, exposed as the nullable HalfPoint property, but everyday code can work in plain points."
  }
]
```
