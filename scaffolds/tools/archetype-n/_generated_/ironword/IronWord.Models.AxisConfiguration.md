<!--
N-Mid (marker/config type; only public ctor exposed). Frame F (imperative). IronWord.Models.
Member verified 2026-06-23: public AxisConfiguration() only. Base Object. No code (marker type).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.AxisConfiguration.html
-->

## Injected overview (Markdown)

Use `AxisConfiguration` to describe how a chart axis is set up when building charts in a Word document. It is the configuration object that carries axis settings into the charting model, so a developer placing a data chart in a report works with it to control the axis rather than leaving the default. It pairs with the other chart model types and is supplied while assembling a chart's appearance.

Construct one with `new AxisConfiguration()` and attach it where the chart model expects an axis configuration. The type is a plain configuration holder, so you build it up and hand it off as part of defining the chart rather than calling behavior on it directly. Because chart construction touches several related model types, treat this one as the axis-specific piece of that larger setup.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) walks the document object model, and the [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) shows the kind of structured data presentation charts complement.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AxisConfiguration Class - IronWord C# API`
- v2 (human): `AxisConfiguration: Chart Axis Setup in C#`
- v3 (balanced): `AxisConfiguration Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Configure a chart axis in a Word document in C# with the IronWord AxisConfiguration class, the axis settings holder used while building a chart.`
- v2 (human): `Set up a chart axis in a Word document in C# with the IronWord AxisConfiguration class: construct it and attach it as you assemble the chart.`
- v3 (balanced): `Reference for the IronWord AxisConfiguration class in C#: the configuration object that carries chart axis settings into the document chart model.`

---

## Structured data

**TechArticle abstract**

> Configuring a chart axis in a Word document in C# runs through the IronWord AxisConfiguration class. Construct one and attach it while assembling a chart so the axis follows your settings rather than the default. It is a plain configuration holder that pairs with the other IronWord chart model types as the axis-specific piece of chart setup.

**FAQPage entries**

```json
[
  {
    "question": "Where does AxisConfiguration live in the IronWord API?",
    "answer": "AxisConfiguration is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and is the configuration object that carries chart axis settings into the document's chart model."
  }
]
```
