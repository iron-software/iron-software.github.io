<!--
N-Mid (empty shell: default ctor only, no public properties/methods documented). Frame B. IronPPT.
Verified 2026-06-23: only public member is the default constructor; base System.Object. ChartType enum (IronPPT.Enums) and ChartDataSource (sibling) cross-referenced.
No members invented.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.ChartStyle.html
-->

## Injected overview (Markdown)

`ChartStyle` is the appearance side of a chart in an IronPPT presentation, the model that captures how a chart looks while a `ChartDataSource` holds what it shows. You construct one to describe a chart's presentation and keep it separate from the data the chart renders.

Create it with `new ChartStyle()` and use it alongside a `ChartDataSource`, which holds the values, and a chart kind selected from the `ChartType` enumeration in `IronPPT.Enums`. Keeping style and data in separate objects means the same data can be presented different ways, and a styling choice can be reused across charts without copying the data. Because charts are placed on slides, apply the style as part of the same flow that builds and arranges slide content, rather than treating it as a standalone step that runs on its own.

The [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) builds the slides a chart sits on, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) covers arranging that content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ChartStyle Class - IronPPT C# API Reference`
- v2 (human): `ChartStyle: Style a Chart in C#`
- v3 (balanced): `ChartStyle Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ChartStyle captures how a chart looks in IronPPT for C#: the appearance model used alongside a ChartDataSource and a ChartType kind.`
- v2 (human): `Control how a presentation chart looks in C# with IronPPT's ChartStyle: the appearance model paired with the data a ChartDataSource holds.`
- v3 (balanced): `Reference for the IronPPT ChartStyle class in C#: the chart-appearance model used with a ChartDataSource and a ChartType selection.`

---

## Structured data

**TechArticle abstract**

> Controlling how a presentation chart looks in IronPPT for C# runs through ChartStyle, the appearance model. A ChartDataSource holds what the chart shows; ChartStyle captures how it is presented. Construct one with new ChartStyle() and use it with a ChartDataSource and a kind from the ChartType enumeration.

**FAQPage entries**

```json
[
  {
    "question": "Where does ChartStyle live in the IronPPT API?",
    "answer": "ChartStyle is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from System.Object and is constructed with new ChartStyle()."
  },
  {
    "question": "What does ChartStyle do in IronPPT?",
    "answer": "ChartStyle captures how a chart is presented, kept separate from the data a ChartDataSource holds. Use it with a ChartDataSource and a kind from the ChartType enumeration so the same data can be styled in different ways."
  }
]
```
