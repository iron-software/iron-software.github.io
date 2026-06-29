<!--
N-Mid / interface (6 members). Frame B. No concrete implementor in api dir; returned by WorkSheet.CreateChart. Members Position/AddSeries(string)/AddSeries(string,string)/Plot/SetLegendPosition(LegendPosition)/SetTitle(string) verified. WorkSheet.CreateChart + Charts cross-ref verified 2026-06-23.
Target: https://ironsoftware.com/csharp/excel/object-reference/api/IronXL.Drawing.Charts.IChart.html
-->

## Injected overview (Markdown)

`IChart` is the chart a worksheet builds from its cell data, ready to title, populate with series, and draw onto the sheet. A developer works through this contract to turn a range of values into a column, line, or pie chart embedded in the spreadsheet, the same visual Excel produces from the Insert Chart menu. It represents one chart anchored to a worksheet, and its members configure that chart before it is rendered.

A developer obtains an `IChart` from the worksheet rather than constructing one: `WorkSheet.CreateChart` returns a new chart for a chosen `ChartType` and cell-range bounds, and `WorkSheet.Charts` (a `List<IChart>`) holds every chart already on the sheet. `AddSeries(string values)` and `AddSeries(string xRange, string yRange)` attach the data, each returning an `IChartSeries` for further configuration. `SetTitle(string title)` names the chart, `SetLegendPosition(LegendPosition position)` places the legend, and `Position` reports where the chart is anchored. Once the series and labels are set, `Plot()` draws the chart onto the worksheet, and saving the workbook persists it.

```csharp
IChart chart = sheet.CreateChart(ChartType.Line, 5, 5, 20, 10);
chart.AddSeries("A1:A10");
chart.SetTitle("Revenue");
chart.Plot();
```

The [create a line chart example](https://ironsoftware.com/csharp/excel/examples/create-a-excel-line-chart/) builds a chart from cell data, and the [create a chart programmatically how-to](https://ironsoftware.com/csharp/excel/how-to/csharp-create-excel-chart-programmatically/) walks through the full setup.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IChart Interface - IronXL C# API Reference`
- v2 (human): `IChart: Build Excel Charts in C#`
- v3 (balanced): `IChart Interface | IronXL C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IChart is the IronXL contract for Excel charts in C#: AddSeries to supply data, SetTitle and SetLegendPosition to label, then Plot to draw.`
- v2 (human): `Turn spreadsheet data into a chart in C# with IronXL's IChart: add series from cell ranges, set the title and legend, then plot it on the sheet.`
- v3 (balanced): `Reference for the IronXL IChart interface in C#: the contract WorkSheet.CreateChart returns for adding series, titles, legends, and plotting.`

---

## Structured data

**TechArticle abstract**

> IChart is the IronXL contract for a chart built from worksheet data in C#. WorkSheet.CreateChart returns one and WorkSheet.Charts holds them. AddSeries attaches data from cell ranges and returns an IChartSeries, SetTitle and SetLegendPosition label the chart, Position reports its anchor, and Plot draws it onto the sheet.

**FAQPage entries**

```json
[
  {
    "question": "Where does IChart live in the IronXL API?",
    "answer": "IChart is an interface in the IronXL.Drawing.Charts namespace, shipped in IronXL.dll. WorkSheet.CreateChart returns an IChart, and WorkSheet.Charts holds them as a List<IChart>."
  },
  {
    "question": "What returns an IChart in IronXL?",
    "answer": "WorkSheet.CreateChart returns an IChart for a given ChartType and cell-range bounds. There is no public constructor; charts are created from the worksheet and tracked in its Charts collection."
  }
]
```
