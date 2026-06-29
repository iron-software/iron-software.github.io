<!--
N-Mid (default ctor only; base Object). Frame B (role noun). IronWord.
Verified 2026-06-23: ChartDataSource(); base Object; consumed by Chart.DataSource. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ChartDataSource.html
-->

## Injected overview (Markdown)

`ChartDataSource` is the object that supplies the values a chart plots in a Word document. A developer hands it to a `Chart` so the chart has data to render, whether those values come from an in-memory collection, a database connection, or another provider that feeds the series.

Create one with `new ChartDataSource()` and assign it to the `DataSource` property of a `Chart`. The `Chart` reads its values from whatever the data source provides, which keeps the data concern separate from the chart's `Type`, `Style`, and `AxisConfig`. Because the source is set on the chart rather than constructed inside it, the same data can be prepared once and attached when the chart is built, then swapped for a different source without rebuilding the chart itself.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how elements like charts assemble into a document, and the [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers placing structured content nearby.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChartDataSource - IronWord C# API Reference`
- v2 (human): `ChartDataSource: Feed Chart Data in C#`
- v3 (balanced): `ChartDataSource Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Supply chart data in C# Word documents with the IronWord ChartDataSource class. Construct it and assign it to the Chart DataSource property.`
- v2 (human): `Feed a Word chart its values in C# using the IronWord ChartDataSource class: prepare a source and attach it to a Chart through DataSource.`
- v3 (balanced): `Reference for the IronWord ChartDataSource class in C#: build a data source and assign it to a Chart through its DataSource property.`

---

## Structured data

**TechArticle abstract**

> Supplying the values a chart plots in a C# Word document runs through IronWord's ChartDataSource. Construct one with new ChartDataSource() and assign it to the DataSource property of a Chart, which then reads its series from the provided data. The source can come from a collection, a database connection, or another provider, keeping data separate from the chart's Type, Style, and AxisConfig.

**FAQPage entries**

```json
[
  {
    "question": "Where does ChartDataSource live in the IronWord API?",
    "answer": "ChartDataSource is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and is assigned to the DataSource property of a Chart."
  },
  {
    "question": "How do you give a Word chart its data in C#?",
    "answer": "Create a ChartDataSource and assign it to the DataSource property of a Chart. The chart reads the values to plot from the source, so the data can be prepared separately and attached when the chart is built."
  }
]
```
