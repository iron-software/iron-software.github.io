<!--
N-Full (class; 6 properties, 2 ctors, salient members). Frame C lead / Frame A abstract. IronWord. Family lead for ChartDataSource + ChartStyle.
Verified 2026-06-23: Chart(), Chart(ChartType, string title=null); AxisConfig, DataSource, HasLegend, Style, Title, Type. Base ContentElement. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Chart.html
-->

## Injected overview (Markdown)

When a Word document needs to present figures visually, `Chart` is the content element that draws them. It represents one chart, such as a bar, line, or pie chart, that a developer builds in code and adds to the document alongside paragraphs, tables, and images.

A chart is created with `new Chart()` for a blank chart, or with `new Chart(ChartType, string)` to set the chart kind and an optional title in one step. From there it is added to the document the same way as any other content element, so it sits inside a section or container with the rest of the content. The chart's kind can also be changed afterward through the `Type` property, which takes a `ChartType` value.

The values a chart plots come from its `DataSource`, a `ChartDataSource` assigned to the chart, while `Style` (a `ChartStyle`) controls themes and colors and `AxisConfig` (an `AxisConfiguration`) tunes the axes. Set `Title` for a heading above the plot, and toggle the boolean `HasLegend` to show or hide the legend that labels each series. Because data, styling, and axis configuration each live on their own property, a developer can prepare them independently and attach them as the chart is assembled, then adjust one without disturbing the others. A blank chart created with `new Chart()` can have its `Type` and these properties filled in step by step, which suits code that decides the chart kind at runtime, while the two-argument constructor is the shorter path when the kind and title are known up front.

```csharp
var chart = new Chart(ChartType.Bar, "Quarterly Revenue");
chart.HasLegend = true;
```

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how content elements assemble into a document, the [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) handles structured data nearby, and the [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) covers other visual content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Chart Class - IronWord C# API Reference`
- v2 (human): `Chart: Add Charts to C# Word Documents`
- v3 (balanced): `Chart Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a bar, line, or pie chart in C# Word documents with the IronWord Chart class. Set the Type, DataSource, Style, Title, and legend.`
- v2 (human): `Build charts for a C# Word document with the IronWord Chart class: choose a chart type, attach a data source, style it, and show a legend.`
- v3 (balanced): `Reference for the IronWord Chart class in C#: create a chart, set its Type and DataSource, apply a Style, and control the Title and legend.`

---

## Structured data

**TechArticle abstract**

> Chart draws figures visually in a C# Word document with IronWord, as a bar, line, or pie chart added alongside paragraphs and tables. Construct it with new Chart() or new Chart(ChartType, string) to set the kind and title, then add it to a section. Its DataSource supplies the values, Style controls themes and colors, AxisConfig tunes the axes, Title sets a heading, and HasLegend toggles the legend.

**FAQPage entries**

```json
[
  {
    "question": "Where does Chart live in the IronWord API?",
    "answer": "Chart is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ContentElement, so it is added to a document like any other content element."
  },
  {
    "question": "How do you add a chart to a Word document in C#?",
    "answer": "Construct a Chart with a ChartType and optional title, assign a ChartDataSource to its DataSource property, then add it to a document section. Set Style for themes and colors and HasLegend to show the legend."
  },
  {
    "question": "How do you set the data and appearance of an IronWord chart?",
    "answer": "Assign a ChartDataSource to the chart's DataSource property for the values, a ChartStyle to the Style property for themes and colors, and an AxisConfiguration to AxisConfig for the axes. Each is set independently, so one can change without affecting the others."
  }
]
```
