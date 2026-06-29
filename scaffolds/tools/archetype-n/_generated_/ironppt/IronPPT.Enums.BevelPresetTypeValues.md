<!--
N-Lite/enum (IronPPT.Enums, base Enum). Members verified: Angle, ArtDeco, Circle, Convex, CoolSlant, Cross, Divot, HardEdge, RelaxedInset, Riblet, Slope, SoftRound. Salience: Circle/Convex/Angle common; named subset of 12.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.BevelPresetTypeValues.html
-->

## Injected overview (Markdown)

Choosing the 3D bevel shape applied to a shape's edge runs through `BevelPresetTypeValues`. It names the PowerPoint bevel presets: `Circle` and `Convex` give the common rounded, raised edge, `Angle` and `Slope` cut a flat chamfer, `SoftRound` and `CoolSlant` soften the effect, and `ArtDeco`, `Cross`, `Divot`, `HardEdge`, `RelaxedInset`, and `Riblet` cover the decorative presets. Pick the value that matches the look you want on a shape's 3D formatting.

```csharp
var bevel = BevelPresetTypeValues.Circle;
```

The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) places a shape you can format.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BevelPresetTypeValues Enum - IronPPT C# API`
- v2 (human): `BevelPresetTypeValues: 3D Bevel Shapes in C#`
- v3 (balanced): `BevelPresetTypeValues | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select a 3D bevel shape in C# with the IronPPT BevelPresetTypeValues enum: Circle, Convex, Angle, Slope, SoftRound, and more presets.`
- v2 (human): `Pick the bevel edge for a shape in C# with the IronPPT BevelPresetTypeValues enum: rounded Circle and Convex or flat Angle and Slope.`
- v3 (balanced): `Reference for the IronPPT BevelPresetTypeValues enum in C#: the PowerPoint 3D bevel presets like Circle, Convex, Angle, and Slope.`

---

## Structured data

**TechArticle abstract**

> BevelPresetTypeValues selects the 3D bevel shape applied to a shape edge in IronPPT for C#. Circle and Convex give a rounded raised edge, Angle and Slope cut a flat chamfer, SoftRound and CoolSlant soften the effect, and ArtDeco, Cross, Divot, HardEdge, RelaxedInset, and Riblet provide decorative presets.
