<!--
N-Lite/enum (large surface — name salient members). Members verified 2026-06-23:
None, Matte, Plastic, Metal, Flat, Clear, Powder, Clear, WarmMatte, SoftEdge, DarkEdge, Legacy* variants.
Consumer verified: Effect3D.PresetMaterialType.
Target: IronWord.Models.Enums.PresetMaterialTypeValues.html — base type Enum.
-->

## Injected overview (Markdown)

Choose the surface finish a 3D effect simulates by setting `PresetMaterialTypeValues` on `Effect3D.PresetMaterialType`. `None` leaves the shape unshaded, `Matte` gives a soft non-reflective finish, `Plastic` and `Metal` add the characteristic sheen of those materials, and `Flat` keeps the surface even. Further finishes such as `Clear`, `Powder`, `WarmMatte`, `SoftEdge`, and `DarkEdge` cover specialized looks, and the `Legacy` variants reproduce the older material set for compatibility.

```csharp
var effect = new Effect3D { PresetMaterialType = PresetMaterialTypeValues.Matte };
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PresetMaterialTypeValues - IronWord C# Enum`
- v2 (human): `PresetMaterialTypeValues: 3D Finish in C#`
- v3 (balanced): `PresetMaterialTypeValues Enum | IronWord .NET`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the 3D surface finish in C# with the IronWord PresetMaterialTypeValues enum: None, Matte, Plastic, Metal, Flat, and more, via Effect3D.`
- v2 (human): `Choose the material an IronWord 3D effect simulates in C# with PresetMaterialTypeValues: Matte, Plastic, Metal, Flat, or specialty finishes.`
- v3 (balanced): `Reference for the IronWord PresetMaterialTypeValues enum in C#: None, Matte, Plastic, Metal, and Flat finishes for Effect3D.`

---

## Structured data

**TechArticle abstract**

> Choose the surface finish a 3D effect simulates with PresetMaterialTypeValues in IronWord, set on Effect3D.PresetMaterialType. None leaves the shape unshaded, Matte gives a soft finish, Plastic and Metal add sheen, Flat keeps the surface even, and Legacy variants reproduce the older material set.
