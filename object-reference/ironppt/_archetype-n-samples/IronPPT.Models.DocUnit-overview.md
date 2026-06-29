<!--
N-Full (props CM/EMU/Inch/MM/Point/Twips (Nullable), Percentage (Percentage); ToString(); implements IDocUnit; base System.Object). Frame E. IronPPT.
Verified 2026-06-23: public props CM (double?), EMU (long?), Inch (double?), MM (double?), Point (double?), Twips (double?), Percentage (Percentage); method ToString(). Protected fields _percentage/_value excluded as non-public-facing. No invented members.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.DocUnit.html
-->

## Injected overview (Markdown)

Expressing a measurement in IronPPT, the width of a margin, the offset of a shape, the size of an element, runs through `DocUnit`. A single value can be read or written in whichever unit a project thinks in, so you set a position in centimeters and read it back in points without doing the arithmetic yourself.

A `DocUnit` is the measurement carried by layout and positioning members across the slide model, so it appears wherever a size or offset is set rather than as a standalone step. An `ElementPosition`, for instance, exposes its `X` and `Y` coordinates as `IDocUnit` values, so you place an element in whatever unit suits the source data. You assign the value in one unit and the type exposes the equivalent in the others, no conversion code required.

The unit properties are the same measurement viewed different ways. `CM`, `MM`, and `Inch` give metric and imperial lengths, `Point` gives the typographic point common in document layout, `Twips` gives twentieths of a point, and `EMU` gives English Metric Units, the integer unit the underlying OpenXML format stores. Each is `Nullable`, so an unset measurement reads as null rather than zero. The `Percentage` property holds a `Percentage` for measurements expressed relative to a parent rather than as an absolute length, and `ToString` renders the value for logging or display. Assign whichever unit your source data uses, then read the property that matches the API or format you are targeting.

```csharp
using IronPPT.Models;

var unit = new DocUnit();
unit.CM = 2.5;
double asPoints = unit.Point ?? 0;
```

The [add shape workflow in the add-slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) places elements that take measurements, the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers sizing and positioning slide content, and the [ElementPosition reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.ElementPosition.html) shows where a measurement is consumed.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocUnit Class - IronPPT C# API Reference`
- v2 (human): `DocUnit: Measurement Units in C#`
- v3 (balanced): `DocUnit Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `DocUnit carries a measurement in IronPPT for C#: read or write it as CM, MM, Inch, Point, Twips, or EMU, plus a Percentage for relative sizes.`
- v2 (human): `Express a measurement in any unit in C# with IronPPT's DocUnit: set it in centimeters and read it back in points, twips, or EMU automatically.`
- v3 (balanced): `Reference for the IronPPT DocUnit class in C#: a measurement exposed as CM, MM, Inch, Point, Twips, and EMU, with a Percentage option.`

---

## Structured data

**TechArticle abstract**

> Expressing a measurement in IronPPT for C# runs through DocUnit, which exposes one value as CM, MM, Inch, Point, Twips, and EMU. Each unit property is Nullable, so an unset measurement reads as null. A Percentage property covers relative sizes, and ToString renders the value. Assign the unit your data uses and read the one your target needs.

**FAQPage entries**

```json
[
  {
    "question": "Where does DocUnit live in the IronPPT API?",
    "answer": "DocUnit is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from System.Object and implements IDocUnit, carrying a measurement across the slide model's layout members."
  },
  {
    "question": "How do you convert between units in C# with IronPPT?",
    "answer": "Assign a DocUnit in one unit and read another property for the equivalent, for example set CM and read Point. The CM, MM, Inch, Point, Twips, and EMU properties are all views of the same measurement."
  },
  {
    "question": "What is EMU in IronPPT's DocUnit?",
    "answer": "EMU is English Metric Units, the integer unit the underlying OpenXML presentation format stores. DocUnit.EMU exposes the measurement in that unit, while CM, Inch, and Point give friendlier views of the same value."
  }
]
```
