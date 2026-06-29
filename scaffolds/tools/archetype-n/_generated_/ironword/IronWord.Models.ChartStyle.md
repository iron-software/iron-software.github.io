<!--
N-Mid (default ctor only; base Object). Frame E (feature-fronted). IronWord. Sibling of ChartDataSource — must not share frame.
Verified 2026-06-23: ChartStyle(); base Object; consumed by Chart.Style. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ChartStyle.html
-->

## Injected overview (Markdown)

A chart's visual appearance, its themes, colors, and other aesthetics, is what `ChartStyle` controls in a Word document. A developer attaches it to a `Chart` to shape how the chart looks once rendered, separate from the data it plots and the kind of chart it is.

Create one with `new ChartStyle()` and assign it to the `Style` property of a `Chart`. The chart applies the styling when it renders, while its `DataSource` continues to supply the values and its `Type` decides the chart form. Keeping appearance on its own object means a single look can be defined once and reused across several charts, or adjusted without touching the data or axis configuration. Pair it with the chart's `AxisConfig` when both the axes and the overall theme need tuning together.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) walks through assembling visual elements, and the [add style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) demonstrates applying styling to document content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChartStyle - IronWord C# API Reference`
- v2 (human): `ChartStyle: Theme Word Charts in C#`
- v3 (balanced): `ChartStyle Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style a chart in C# Word documents with the IronWord ChartStyle class. Construct it and assign it to the Chart Style property for themes and colors.`
- v2 (human): `Control how a Word chart looks in C# with the IronWord ChartStyle class: define themes and colors and attach them to a Chart through Style.`
- v3 (balanced): `Reference for the IronWord ChartStyle class in C#: define a chart theme and colors and assign it to a Chart through its Style property.`

---

## Structured data

**TechArticle abstract**

> ChartStyle controls how a chart looks in a C# Word document with IronWord: its themes, colors, and other aesthetics. Construct one with new ChartStyle() and assign it to the Style property of a Chart. The chart applies the styling when it renders, separate from the DataSource that supplies values and the Type that decides the chart form, so a look can be defined once and reused.

**FAQPage entries**

```json
[
  {
    "question": "Where does ChartStyle live in the IronWord API?",
    "answer": "ChartStyle is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and is assigned to the Style property of a Chart."
  },
  {
    "question": "How do you change how a Word chart looks in C#?",
    "answer": "Create a ChartStyle, set its theme and colors, and assign it to the Style property of a Chart. The chart applies the styling when it renders, leaving the DataSource and Type unchanged."
  }
]
```
