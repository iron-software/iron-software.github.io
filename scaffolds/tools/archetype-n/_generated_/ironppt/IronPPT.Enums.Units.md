<!--
N-Lite/enum. Members verified 2026-06-23: EMU, pt, cm, mm, inch, Twips.
Used as the measurementUnit parameter on Bevel/Effect3D/Glow/Reflection/Shadow/TextOutlineEffect (verified). Namespace IronPPT.Enums, IronPPT.dll.
Target: IronPPT.Enums.Units.html
-->

## Injected overview (Markdown)

Declaring which measurement a size or offset is expressed in uses `Units`, supplied as the `measurementUnit` argument on effect types such as `Bevel` and `Shadow`. `pt` (points) is the typographic unit common to slide measurements, `inch`, `cm`, and `mm` are the familiar page units, and `Twips` is the twentieth-of-a-point unit. `EMU`, the English Metric Unit, is the high-precision base unit the underlying presentation format stores internally. The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places sized shapes on a slide.

```csharp
bevel.SetWidth(5, Units.pt);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Units Enum - IronPPT C# API Reference`
- v2 (human): `Units: Measurement Units in C#`
- v3 (balanced): `Units Enum | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Specify the measurement unit in C# with the IronPPT Units enum: pt, inch, cm, mm, Twips, or the high-precision EMU base unit, passed as measurementUnit.`
- v2 (human): `Tell IronPPT which unit a slide measurement uses in C# with the Units enum: points, inches, centimeters, millimeters, twips, or EMUs.`
- v3 (balanced): `Reference for the IronPPT Units enum in C#: measurement units pt, inch, cm, mm, Twips, and EMU for sizing slide effects and shapes.`

---

## Structured data

**TechArticle abstract**

> Declare the measurement a slide size or offset uses in IronPPT with Units, passed as the measurementUnit argument on effect types such as Bevel and Shadow. pt is the typographic unit, inch, cm, and mm are the familiar page units, Twips is the twentieth-of-a-point unit, and EMU is the high-precision base unit the format stores.
