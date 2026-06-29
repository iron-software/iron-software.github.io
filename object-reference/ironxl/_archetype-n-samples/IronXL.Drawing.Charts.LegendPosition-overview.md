<!--
N-Lite/enum. Members verified 2026-06-23: Right, Bottom, Top, Left, TopRight, None.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Drawing.Charts.LegendPosition.html
-->

## Injected overview (Markdown)

`LegendPosition` places the legend on a chart relative to the plot area, passed to `IChart.SetLegendPosition`. `Right` and `Bottom` are the conventional placements, with `Top` and `Left` as the other edges and `TopRight` for the upper corner. `None` hides the legend entirely, which suits a single-series chart that needs no key. The [create Excel chart how-to](https://ironsoftware.com/csharp/excel/how-to/csharp-create-excel-chart-programmatically/) covers styling a chart and its legend.

```csharp
chart.SetLegendPosition(LegendPosition.Right);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LegendPosition Enum - IronXL C# API Reference`
- v2 (human): `LegendPosition: Place Chart Legends in C#`
- v3 (balanced): `LegendPosition Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Place a chart legend in C# with the IronXL LegendPosition enum: Right, Bottom, Top, Left, TopRight, or None, via IChart.SetLegendPosition.`
- v2 (human): `Position an Excel chart legend in C# with the IronXL LegendPosition enum: Right or Bottom by convention, or None to hide the key.`
- v3 (balanced): `Reference for the IronXL LegendPosition enum in C#: Right, Bottom, Top, Left, TopRight, and None placements via SetLegendPosition.`

---

## Structured data

**TechArticle abstract**

> Use LegendPosition in IronXL to place the legend on a chart relative to the plot area, passed to IChart.SetLegendPosition. Right and Bottom are the conventional placements, with Top, Left, and TopRight as further options, while None hides the legend for a chart that needs no key.
