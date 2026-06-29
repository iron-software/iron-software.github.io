<!--
N-Mid / interface (1 member, extends IDocUnit). Frame D lead. Implementor: FontSize. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IFontSize.html
-->

## Injected overview (Markdown)

Expressing the size of text in the unit PowerPoint stores it in runs through `IFontSize`. The contract adds a `HalfPoint` property, a nullable integer holding the size in half-point units (the native font-size unit, where 24 means 12 points), on top of the multi-unit measurement contract it extends. Coding against the contract lets text-sizing logic set or read a size in half-points without rebuilding the conversion that font sizing needs.

The concrete implementor in IronPPT is `FontSize`, which is what a `Font` returns from its `FontSize` property. Because the type also satisfies the broader unit contract it extends, a developer can read the same size in inches, points, or other units, while `HalfPoint` is the value that maps directly to how PowerPoint records font size. A developer usually receives a `FontSize` from a font rather than constructing it, then sets `HalfPoint` to apply an exact size.

```csharp
fontSize.HalfPoint = 24;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers adding and sizing text, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets font sizes while styling content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IFontSize - IronPPT C# API`
- v2 (human): `IFontSize: Half-Point Text Sizing in C#`
- v3 (balanced): `IFontSize Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IFontSize is IronPPT's font-size contract in C#: it adds a nullable HalfPoint over IDocUnit. Implemented by FontSize, returned by Font.FontSize.`
- v2 (human): `Set text size in C# through IronPPT's IFontSize contract: assign HalfPoint, the native unit where 24 means 12 points, on the FontSize object.`
- v3 (balanced): `Reference for the IronPPT IFontSize interface in C#: the half-point sizing contract extending IDocUnit, implemented by FontSize.`

---

## Structured data

**TechArticle abstract**

> Sizing text in the unit PowerPoint stores it in is handled by the IFontSize contract in IronPPT for C#. It adds a nullable HalfPoint integer, the native font-size unit where 24 means 12 points, on top of the IDocUnit contract it extends. The concrete implementor is FontSize, returned by a Font's FontSize property, so the same size also reads in inches or points.

**FAQPage entries**

```json
[
  {
    "question": "Where does IFontSize live in the IronPPT API?",
    "answer": "IFontSize is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IDocUnit and adds a nullable HalfPoint integer for the native font-size unit."
  },
  {
    "question": "What implements IFontSize in IronPPT?",
    "answer": "The FontSize class in IronPPT.Models implements IFontSize. You receive it from a Font's FontSize property, then set HalfPoint to apply an exact size, where 24 half-points equals 12 points."
  }
]
```
