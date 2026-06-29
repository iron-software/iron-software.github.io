<!--
N-Lite/enum. Members verified 2026-06-23: Line, Column, Bar, Area, Pie, Scatter.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Drawing.Charts.ChartType.html
-->

## Injected overview (Markdown)

`ChartType` selects the kind of chart `IronXL` draws when one is added to a worksheet, passed as the first argument to `WorkSheet.CreateChart`. `Line` and `Column` cover the common trend and category comparisons, `Bar` is the horizontal counterpart to `Column`, `Area` fills beneath a line, `Pie` shows parts of a whole, and `Scatter` plots paired values. The [create Excel chart how-to](https://ironsoftware.com/csharp/excel/how-to/csharp-create-excel-chart-programmatically/) builds a chart end to end.

```csharp
IChart chart = workSheet.CreateChart(ChartType.Line, 5, 5, 20, 10);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChartType Enum - IronXL C# API Reference`
- v2 (human): `ChartType: Pick an Excel Chart in C#`
- v3 (balanced): `ChartType Enum | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Choose the chart kind in C# with the IronXL ChartType enum: Line, Column, Bar, Area, Pie, or Scatter, passed to WorkSheet.CreateChart.`
- v2 (human): `Select which chart IronXL draws in C# with the ChartType enum: Line and Column for trends, Pie for shares, or Scatter for paired values.`
- v3 (balanced): `Reference for the IronXL ChartType enum in C#: Line, Column, Bar, Area, Pie, and Scatter charts added with WorkSheet.CreateChart.`

---

## Structured data

**TechArticle abstract**

> Use ChartType in IronXL to select the kind of chart drawn on a worksheet, passed to WorkSheet.CreateChart. Line and Column cover common trend and category comparisons, Bar is the horizontal counterpart to Column, Area fills beneath a line, Pie shows parts of a whole, and Scatter plots paired values.
