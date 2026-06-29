<!--
N-Lite/enum. Members verified 2026-06-23: Bar, Line, Pie.
Salient: Bar, Line, Pie (small set, reading order). Consumed by Chart.Type and Chart(ChartType, title) ctor (verified). No chart doc on disk -> 0 links.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.ChartType.html
-->

## Injected overview (Markdown)

Choose which chart a document draws with `ChartType`, passed to the `Chart` constructor or set on `Chart.Type`. `Bar` compares values across categories with rectangular bars, `Line` traces a trend across a continuous series, and `Pie` shows each value as a slice of a whole. Pick the one that matches the story the data should tell, then supply the chart's series and title.

```csharp
var chart = new Chart(ChartType.Bar, "Quarterly Revenue");
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChartType Enum - IronWord C# API Reference`
- v2 (human): `ChartType: Pick a Chart Style in C#`
- v3 (balanced): `ChartType Enum | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select the chart style in C# with the IronWord ChartType enum: Bar, Line, or Pie, passed to the Chart constructor or set on Chart.Type.`
- v2 (human): `Choose how IronWord draws a chart in C# with the ChartType enum: Bar to compare categories, Line for a trend, or Pie for parts of a whole.`
- v3 (balanced): `Reference for the IronWord ChartType enum in C#: Bar, Line, and Pie chart styles passed to the Chart constructor.`

---

## Structured data

**TechArticle abstract**

> ChartType selects which chart IronWord draws in C#, passed to the Chart constructor or set on Chart.Type. Bar compares values across categories, Line traces a trend across a series, and Pie shows each value as a slice of a whole.
