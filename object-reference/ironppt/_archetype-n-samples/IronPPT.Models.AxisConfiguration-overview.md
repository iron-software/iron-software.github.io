<!--
N-Mid / class. Frame E. IronPPT. Only a default ctor is documented on the page (verified 2026-06-23).
AxisConfiguration : Object. No public properties/methods declared. Target: IronPPT.Models.AxisConfiguration.html
-->

## Injected overview (Markdown)

Chart-axis settings in a PowerPoint chart are carried by `AxisConfiguration`. A developer creates one to hold the configuration for an axis of a chart, keeping those axis choices in a single object that can be passed around and reused rather than scattered through chart-building code.

The object is created with its parameterless constructor, `new AxisConfiguration()`, which is the only member the reference page documents. It is a plain configuration holder: a developer constructs it, sets it up as part of preparing a chart, and hands it to the chart-building step that consumes it. Because it is a standalone object rather than something returned from another type, a developer instantiates it directly. Treat it as the per-axis container in chart setup, build one per axis where a chart needs distinct configuration for its categories and values, and keep the instance for as long as the chart it describes is being assembled.

```csharp
var axis = new AxisConfiguration();
```

The [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) covers building slide content, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through working with elements on a slide.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `AxisConfiguration - IronPPT C# API Reference`
- v2 (human): `AxisConfiguration: Chart Axis Setup in C#`
- v3 (balanced): `AxisConfiguration Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `AxisConfiguration is the IronPPT chart-axis settings object in C#: construct one with new AxisConfiguration() to hold an axis's configuration.`
- v2 (human): `Hold the settings for a chart axis in C# with the IronPPT AxisConfiguration class: build one per axis while assembling a presentation chart.`
- v3 (balanced): `Reference for the IronPPT AxisConfiguration class in C#: a constructed configuration object that carries the settings for a chart axis.`

---

## Structured data

**TechArticle abstract**

> Chart-axis settings in an IronPPT presentation are held by the AxisConfiguration object in C#. Construct one with its parameterless constructor, new AxisConfiguration(), the only documented member, and use it as the per-axis configuration container while assembling a chart, building one instance for each axis a chart needs to configure.

**FAQPage entries**

```json
[
  {
    "question": "Where does AxisConfiguration live in the IronPPT API?",
    "answer": "AxisConfiguration is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and is constructed directly with new AxisConfiguration() to hold the configuration for a chart axis."
  }
]
```
