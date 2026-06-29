<!--
N-Mid / interface (1 member). Frame B. No concrete implementor in api dir; returned by IChart.AddSeries. Member Title (string, get/set) verified. IChart.AddSeries cross-ref verified 2026-06-23.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Drawing.Charts.IChartSeries.html
-->

## Injected overview (Markdown)

`IChartSeries` is the single data series a developer gets back after attaching a range of cells to an Excel chart. Each series represents one plotted line, bar set, or pie slice group inside an `IChart`, and the contract lets code name that series so it reads clearly in the chart legend. A chart with several series, such as revenue against cost, holds one `IChartSeries` per data set, each labeled independently.

A developer never constructs an `IChartSeries` directly. `IChart.AddSeries` returns one each time a cell range is added to a chart, whether through `AddSeries(string values)` for a single range or `AddSeries(string xRange, string yRange)` for paired ranges. The contract exposes a `Title` property, readable and writable, which sets the label shown for that series in the legend. Reading it reports the current label, and assigning it renames the series in place. Set the `Title` after adding the series and before calling `Plot` on the parent chart, so the rendered chart carries meaningful series names rather than the default range references.

```csharp
IChartSeries series = chart.AddSeries("B1:B10");
series.Title = "Revenue";
```

The [create a line chart example](https://ironsoftware.com/csharp/excel/examples/create-a-excel-line-chart/) plots series from cell data, and the [create and edit a chart how-to](https://ironsoftware.com/csharp/excel/how-to/csharp-excel-chart-create-edit-tutorial/) walks through naming and styling them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IChartSeries Interface - IronXL C# API`
- v2 (human): `IChartSeries: Name Excel Chart Series in C#`
- v3 (balanced): `IChartSeries Interface | IronXL C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IChartSeries is the IronXL contract for a chart data series in C#: set its Title for the legend. IChart.AddSeries returns one per cell range.`
- v2 (human): `Label a chart's data series in C# with IronXL's IChartSeries: each range added to an IChart returns a series whose Title shows in the legend.`
- v3 (balanced): `Reference for the IronXL IChartSeries interface in C#: the contract IChart.AddSeries returns, with a Title property for the chart legend.`

---

## Structured data

**TechArticle abstract**

> IChartSeries is the IronXL contract for one data series on an Excel chart in C#. IChart.AddSeries returns an IChartSeries each time a cell range is attached, and its writable Title property sets the label shown in the chart legend. Set the Title before plotting the parent chart.

**FAQPage entries**

```json
[
  {
    "question": "Where does IChartSeries live in the IronXL API?",
    "answer": "IChartSeries is an interface in the IronXL.Drawing.Charts namespace, shipped in IronXL.dll. IChart.AddSeries returns an IChartSeries for each cell range added to a chart."
  },
  {
    "question": "What returns an IChartSeries in IronXL?",
    "answer": "IChart.AddSeries returns an IChartSeries when a range is added to a chart, using either AddSeries(values) or AddSeries(xRange, yRange). There is no public constructor; series come from the chart and are labeled through the Title property."
  }
]
```
