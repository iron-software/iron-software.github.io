<!--
N-Lite/enum. Members verified 2026-06-23: Round, Miter, Bevel.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.StrokeJoinStyleValues.html
-->

## Injected overview (Markdown)

Decide how two connecting line segments meet at a corner with `StrokeJoinStyleValues` in IronPPT. `Round` softens the join with a curved corner, `Miter` extends both edges to a sharp point, and `Bevel` flattens the corner with a clipped edge. Choose one of these joins when styling the outline of a shape so the saved PowerPoint draws its borders with the intended corner treatment.

```csharp
var join = StrokeJoinStyleValues.Round;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `StrokeJoinStyleValues Enum - IronPPT C# API`
- v2 (human): `StrokeJoinStyleValues: Line Corners in C#`
- v3 (balanced): `StrokeJoinStyleValues | IronPPT C# Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set how line segments join in C# with the IronPPT StrokeJoinStyleValues enum: Round, Miter, or Bevel corners on shape outlines.`
- v2 (human): `Choose how shape outline corners meet in C# with the IronPPT StrokeJoinStyleValues enum: rounded, sharp Miter, or clipped Bevel.`
- v3 (balanced): `Reference for the IronPPT StrokeJoinStyleValues enum in C#: Round, Miter, and Bevel line-join styles for shape borders.`

---

## Structured data

**TechArticle abstract**

> Set how connecting line segments meet at a corner with IronPPT StrokeJoinStyleValues. Round gives a curved join, Miter extends edges to a sharp point, and Bevel clips the corner flat when styling shape outlines in C#.
