<!--
N-Full class. Frame B (identity-by-role). IronPPT. Base Object; implements IUnderline.
Members verified 2026-06-23 against IronPPT.Models.Underline.html:
ctor, Color (IColor), FillColorFollowText (Nullable<bool>), GradientFill (IGradient),
LineJoinBevel (Nullable<bool>), LineValue (Nullable<UnderlineValues>), NoFill (Nullable<bool>),
PresetDash (Nullable<PresetLineDashValues>), Clone.
TextStyle.Underline cross-ref verified on TextStyle.html (IUnderline Underline).
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Underline.html
-->

## Injected overview (Markdown)

`Underline` is the underline stroke a text run carries, the concrete record of how the line beneath the text looks. It describes the line's pattern, fill, and color, so a developer who wants more than a plain solid underline, a colored line, a gradient fill, or a dashed pattern, configures it here. A run reaches its underline through the `Underline` property of its `TextStyle`, which is typed as the `IUnderline` contract this class implements.

The stroke is built and then assigned to the run's style, so a developer sets the properties that matter and leaves the rest unset, since most are nullable and fall back to the rendered default. `Clone` copies an existing underline when one run's line should seed another.

`LineValue` chooses the underline kind from `UnderlineValues` (single, double, and the other documented patterns) as a nullable value, so leaving it unset keeps the inherited line. `Color` takes an `IColor` for the line color, and `GradientFill` supplies an `IGradient` when the line should fade across a range rather than use a flat color. `FillColorFollowText` ties the line color to the text color, `NoFill` suppresses the fill entirely, and `LineJoinBevel` controls how the stroke joins. `PresetDash` selects a dash pattern from `PresetLineDashValues` for a dotted or dashed underline. Because each is nullable, set only the aspects that differ from the default underline.

```csharp
var underline = new Underline();
underline.LineValue = UnderlineValues.Single;
underline.Color = new Color("#0066CC");
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers styling text on a slide, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows run formatting in a worked slide, and the [TextStyle reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.TextStyle.html) shows the style that exposes this underline.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Underline Class - IronPPT C# API Reference`
- v2 (human): `Underline: Style Slide Text Underlines in C#`
- v3 (balanced): `Underline Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style a slide text underline in C# with the IronPPT Underline class: set LineValue, Color, GradientFill, PresetDash, NoFill, and more.`
- v2 (human): `Control the underline beneath slide text in C# with the IronPPT Underline class: pick a line pattern, color, gradient, or dash.`
- v3 (balanced): `Reference for the IronPPT Underline class in C#: configure a text underline with LineValue, Color, GradientFill, and PresetDash.`

---

## Structured data

**TechArticle abstract**

> The IronPPT Underline class records how the underline beneath a slide text run looks in C#. LineValue picks the underline kind from UnderlineValues, Color takes an IColor, and GradientFill takes an IGradient. FillColorFollowText, NoFill, LineJoinBevel, and PresetDash refine the fill, join, and dash pattern. Each is nullable, so set only what differs from the default, and Clone copies an existing underline.

**FAQPage entries**

```json
[
  {
    "question": "Where does Underline live in the IronPPT API?",
    "answer": "Underline is a class in the IronPPT.Models namespace, shipped in IronPPT.dll, deriving from Object and implementing IUnderline. A text run reaches it through the Underline property of its TextStyle."
  },
  {
    "question": "How do you add a colored underline to slide text in C#?",
    "answer": "Create an Underline, set LineValue to a member of UnderlineValues, and set Color to an IColor. Assign it to the Underline property of the run's TextStyle. Use GradientFill for a gradient line or PresetDash for a dashed pattern."
  },
  {
    "question": "What is the difference between Underline and IUnderline?",
    "answer": "IUnderline is the contract for an underline stroke; Underline is the concrete class that implements it. TextStyle.Underline is typed as IUnderline, while new Underline() creates the implementation you configure and assign."
  }
]
```
