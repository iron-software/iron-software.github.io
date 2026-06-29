<!--
N-Full / interface. Frame B. Implementor: Underline. IronPPT. Members verified 2026-06-23.
IUnderline (no base interfaces). Reached via ITextStyle.Underline. Target: IronPPT.Interfaces.IUnderline.html
-->

## Injected overview (Markdown)

`IUnderline` is the contract for the underline applied to a run of text, the surface a developer sets when an underline needs a specific style, color, or dash pattern rather than a plain line. It controls how the underline is drawn, not whether the text is underlined in passing, so it is where finer underline choices are made.

A developer reaches it as the `Underline` property of an `ITextStyle`; `Underline` is the concrete implementor. Editing this contract on a run's text style changes how that run's underline renders, and because the underline lives inside the text style it travels with the run wherever that style is applied. Keeping the underline as its own object is what lets a dashed, colored, or gradient line be configured fully and then copied to other runs. The members describe the line. `LineValue` is a `Nullable<UnderlineValues>` choosing the underline kind (single, double, and so on), `PresetDash` is a `Nullable<PresetLineDashValues>` for the dash pattern, and `LineJoinBevel` is a flag for bevelled joins. Color is handled by three members that work together: `Color` is an `IColor` for an explicit color, `FillColorFollowText` makes the underline track the text color, and `NoFill` leaves it unpainted. For a gradient line, `GradientFill` is an `IGradient`. `Clone` copies the whole configuration, returning an `IUnderline`, so one styled underline can be reused on another run.

```csharp
IUnderline underline = run.TextStyle.Underline;
underline.LineValue = UnderlineValues.Double;
underline.FillColorFollowText = true;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places styled text, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) formats text, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers slide elements.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IUnderline Interface - IronPPT C# API`
- v2 (human): `IUnderline: Style Text Underlines in C#`
- v3 (balanced): `IUnderline Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IUnderline is the IronPPT underline contract in C#: set LineValue, PresetDash, Color, GradientFill, and FillColorFollowText on a run.`
- v2 (human): `Style a text underline in C# through the IronPPT IUnderline contract: pick the line type, dash, and color, or follow the text color, then clone it.`
- v3 (balanced): `Reference for the IronPPT IUnderline interface in C#: the underline contract implemented by Underline, with line type, dash, and color members.`

---

## Structured data

**TechArticle abstract**

> IUnderline is the contract for the underline on a run of text in IronPPT in C#. LineValue picks the underline kind, PresetDash sets the dash, and LineJoinBevel controls joins, while Color, FillColorFollowText, NoFill, and GradientFill handle color. Clone copies the configuration. It is reached as the Underline property of an ITextStyle; Underline implements it.

**FAQPage entries**

```json
[
  {
    "question": "Where does IUnderline live in the IronPPT API?",
    "answer": "IUnderline is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface. The concrete implementor is Underline, reached as the Underline property of an ITextStyle."
  },
  {
    "question": "What implements IUnderline in IronPPT?",
    "answer": "Underline implements IUnderline. You edit it through the Underline property of a run's TextStyle rather than constructing it directly."
  },
  {
    "question": "How do you set a double underline in C#?",
    "answer": "Set LineValue to the double value of UnderlineValues on the IUnderline exposed by the run's TextStyle.Underline property. Use PresetDash for a dash pattern and Color, or FillColorFollowText, for the underline color."
  }
]
```
