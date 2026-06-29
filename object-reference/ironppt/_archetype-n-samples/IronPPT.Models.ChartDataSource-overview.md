<!--
N-Mid (empty shell: default ctor only, no public properties/methods documented). Frame D. IronPPT.
Verified 2026-06-23: only public member is the default constructor; base System.Object. ChartType enum exists in IronPPT.Enums (sibling page).
No members invented.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.ChartDataSource.html
-->

## Injected overview (Markdown)

Supplying the data behind a chart in an IronPPT presentation runs through `ChartDataSource`, the model that represents the series and values a chart draws from. You construct one to hold the data a chart renders, keeping the numbers that feed the chart separate from how the chart looks.

The type is created with `new ChartDataSource()` and used as the data side of a chart, paired with the visual configuration that a `ChartStyle` carries and a chart kind chosen from the `ChartType` enumeration in `IronPPT.Enums`. Treat it as the bound data carrier for a chart rather than a settings bag: it holds what the chart shows, while presentation choices live elsewhere. Because charting builds on the slide model, populate the data source as part of the same flow that adds and arranges slide content.

The [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) builds the slides a chart sits on, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) covers arranging slide content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChartDataSource Class - IronPPT C# API`
- v2 (human): `ChartDataSource: Chart Data in C#`
- v3 (balanced): `ChartDataSource Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ChartDataSource represents the data behind a chart in IronPPT for C#: the series and values a chart draws from, paired with a ChartStyle.`
- v2 (human): `Supply the data behind a presentation chart in C# with IronPPT's ChartDataSource: the model that holds the values a chart renders.`
- v3 (balanced): `Reference for the IronPPT ChartDataSource class in C#: the data carrier that holds the values a presentation chart draws from.`

---

## Structured data

**TechArticle abstract**

> Supplying the data behind a presentation chart in IronPPT for C# runs through ChartDataSource. It represents the series and values a chart draws from, constructed with new ChartDataSource() and used as the data side of a chart, paired with a ChartStyle for appearance and a kind from the ChartType enumeration.

**FAQPage entries**

```json
[
  {
    "question": "Where does ChartDataSource live in the IronPPT API?",
    "answer": "ChartDataSource is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from System.Object and is constructed with new ChartDataSource()."
  },
  {
    "question": "What does ChartDataSource do in IronPPT?",
    "answer": "ChartDataSource holds the data a chart renders, the series and values it draws from. It pairs with a ChartStyle for the chart's appearance and a kind selected from the ChartType enumeration in IronPPT.Enums."
  }
]
```
