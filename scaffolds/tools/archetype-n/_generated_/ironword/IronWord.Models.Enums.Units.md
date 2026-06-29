<!--
N-Lite/enum. Members verified 2026-06-23: inch, cm, mm, pt, Twips, EMU.
Consumer: measurement-unit parameter on Image/Shape Get*/Set* sizing methods (GetWidth(Units), SetHeight(double, Units), etc.).
Base: System.Object (public sealed class Units : Enum). Namespace IronWord.Models.Enums, assembly IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.Units.html
-->

## Injected overview (Markdown)

State which measurement unit a size or distance is expressed in by passing a `Units` member to the `Image` and `Shape` sizing methods such as `GetWidth` and `SetHeight`. `inch`, `cm`, and `mm` are the familiar print units, `pt` is points (1/72 of an inch), and `Twips` are twentieths of a point. `EMU` (English Metric Units) is the high-precision unit Office uses internally. The [add image to Word document](https://ironsoftware.com/csharp/word/how-to/add-image/) walkthrough sizes a picture.

```csharp
double widthInInches = image.GetWidth(Units.inch);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Units Enum - IronWord C# API Reference`
- v2 (human): `Units: Measurement Units in C# Word Sizing`
- v3 (balanced): `Units Enum | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the measurement unit in C# with the IronWord Units enum: inch, cm, mm, pt, Twips, or EMU for image and shape sizing.`
- v2 (human): `Express Word image and shape sizes in C# with the Units enum: inches, centimeters, millimeters, points, twips, or EMU.`
- v3 (balanced): `Reference for the IronWord Units enum in C#: inch, cm, mm, pt, Twips, and EMU measurement units for sizing.`

---

## Structured data

**TechArticle abstract**

> Pass a Units member to IronWord image and shape sizing methods like GetWidth and SetHeight to state the measurement unit. The inch, cm, and mm members are print units, pt is points, Twips are twentieths of a point, and EMU is Office's internal unit.
