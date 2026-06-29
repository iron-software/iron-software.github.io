<!--
N-Lite/enum. Members verified 2026-06-23: None, Matte, Plastic, Metal, Flat, Powder, Clear, SoftEdge. Base: Enum.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Enums.PresetMaterialTypeValues.html
-->

## Injected overview (Markdown)

Give a 3D shape surface a finish, how light reflects off it, with `PresetMaterialTypeValues` in IronPPT. `None` leaves the surface unstyled, while `Matte`, `Plastic`, and `Metal` are the everyday finishes from soft and diffuse through to bright and reflective. Further presets such as `Flat`, `Powder`, `Clear`, and `SoftEdge` cover specialized looks, and the legacy variants (`LegacyMatte`, `LegacyMetal`, `LegacyPlastic`) preserve older finishes for compatibility. Pick the value when applying a 3D effect to a shape. The [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows shapes placed on a slide.

```csharp
var material = PresetMaterialTypeValues.Matte;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PresetMaterialTypeValues Enum - IronPPT C#`
- v2 (human): `PresetMaterialTypeValues: 3D Finishes in C#`
- v3 (balanced): `PresetMaterialTypeValues | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set a 3D shape surface finish in C# with the IronPPT PresetMaterialTypeValues enum: None, Matte, Plastic, Metal, Flat, Powder, and Clear.`
- v2 (human): `Choose how light reflects off a 3D shape in C# with the IronPPT PresetMaterialTypeValues enum: Matte, Plastic, Metal, and more finishes.`
- v3 (balanced): `Reference for the IronPPT PresetMaterialTypeValues enum in C#: surface finishes for 3D shape effects.`

---

## Structured data

**TechArticle abstract**

> Give a 3D shape surface a finish in IronPPT with PresetMaterialTypeValues, controlling how light reflects off it. None leaves it unstyled, while Matte, Plastic, and Metal are the everyday finishes from soft and diffuse to bright and reflective; further presets cover specialized and legacy looks.
