<!--
N-Lite/enum. Members verified 2026-06-23: Angle, ArtDeco, Circle, Convex, CoolSlant, Cross, Divot, HardEdge, RelaxedInset, Riblet, Slope, SoftRound.
Salient first: Circle, Convex, Slope, Angle. Consumed by Bevel.PresetProfileType (verified).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.BevelPresetTypeValues.html
-->

## Injected overview (Markdown)

Pick the 3D bevel profile a shape edge takes with `BevelPresetTypeValues`, set on `Bevel.PresetProfileType`. `Circle` rounds the edge and `Convex` bulges it outward for a raised look, while `Slope` and `Angle` cut a flat chamfer. The set also offers decorative profiles such as `ArtDeco`, `Divot`, `Riblet`, `SoftRound`, `CoolSlant`, `RelaxedInset`, `Cross`, and `HardEdge` for finer styling. The [3D text outline how-to](https://ironsoftware.com/csharp/word/how-to/text-effect-text-outline-effect/) covers shape edge effects.

```csharp
bevel.PresetProfileType = BevelPresetTypeValues.Circle;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BevelPresetTypeValues Enum - IronWord C# API`
- v2 (human): `BevelPresetTypeValues: 3D Edge Profiles in C#`
- v3 (balanced): `BevelPresetTypeValues Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose a 3D bevel profile in C# with the IronWord BevelPresetTypeValues enum: Circle, Convex, Slope, Angle, and more, set on Bevel.PresetProfileType.`
- v2 (human): `Set the 3D edge profile of a shape in C# with IronWord's BevelPresetTypeValues enum: round it with Circle, raise it with Convex, or chamfer with Slope.`
- v3 (balanced): `Reference for the IronWord BevelPresetTypeValues enum in C#: Circle, Convex, Slope, and Angle bevel profiles via Bevel.PresetProfileType.`

---

## Structured data

**TechArticle abstract**

> BevelPresetTypeValues selects the 3D bevel profile of a shape edge in IronWord, set on Bevel.PresetProfileType. Circle rounds the edge, Convex raises it, and Slope and Angle cut a flat chamfer, with decorative options such as ArtDeco, Divot, Riblet, and SoftRound for finer styling.
