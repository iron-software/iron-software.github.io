<!--
N-Lite/enum. Members verified: Millimeters, Pixels, Points, value__.
Target: IronSoftware.Drawing.MeasurementUnits
-->

## Injected overview (Markdown)

`MeasurementUnits` specifies the unit of measurement used when sizing or positioning drawing elements in IronSoftware.Drawing. `Pixels` is the default choice for screen and raster contexts, `Points` suits print and typography workflows (72 points per inch), and `Millimeters` covers metric physical dimensions. Pass a value wherever an API accepts a unit parameter to control how numeric lengths are interpreted.

```csharp
var unit = MeasurementUnits.Pixels;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `MeasurementUnits Enum - IronDrawing C# API`
- v2 (human): `MeasurementUnits: Set Drawing Units in C#`
- v3 (balanced): `MeasurementUnits Enum | IronDrawing C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Control drawing dimensions in C# with the IronDrawing MeasurementUnits enum: choose Pixels, Points, or Millimeters for raster, print, or metric contexts.`
- v2 (human): `Pick the right unit for IronDrawing in C# using MeasurementUnits: Pixels for screens, Points for print, and Millimeters for metric physical sizing.`
- v3 (balanced): `Reference for the IronSoftware.Drawing MeasurementUnits enum in C#: Pixels, Points, and Millimeters for flexible dimension control.`

---

## Structured data

**TechArticle abstract**

> Use MeasurementUnits in IronSoftware.Drawing to specify how numeric dimensions are interpreted. Pixels suits raster and screen contexts, Points targets print and typography at 72 points per inch, and Millimeters covers metric physical measurements. The enum lives in the IronSoftware.Drawing namespace in IronSoftware.Drawing.dll and derives from Enum.