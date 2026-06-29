<!--
N-Lite/enum. Members verified 2026-06-23: None, Single, Double, Thick, Dash, DashLong, DotDash, DotDotDash, Wave, WavyHeavy, WavyDouble, Words, Dotted, DottedHeavy, DashedHeavy, DashLongHeavy, DashDotHeavy, DashDotDotHeavy.
Consumed by IUnderline.LineValue (verified). Namespace IronPPT.Enums, IronPPT.dll.
Target: IronPPT.Enums.UnderlineValues.html
-->

## Injected overview (Markdown)

Choosing the underline style for run text uses `UnderlineValues`, the value set on `IUnderline.LineValue`. `None` removes the underline and `Single` is the everyday solid line, while `Double`, `Thick`, and the `Dash`, `Dotted`, and `Wave` families give heavier or decorative strokes. `Words` underlines words but skips the spaces between them, and heavy variants such as `DashLongHeavy` and `DashDotDotHeavy` thicken the matching pattern. The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) styles run text on a slide.

```csharp
underline.LineValue = UnderlineValues.Single;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `UnderlineValues Enum - IronPPT C# API`
- v2 (human): `UnderlineValues: Underline Styles in C#`
- v3 (balanced): `UnderlineValues Enum | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the underline style in C# with the IronPPT UnderlineValues enum on IUnderline.LineValue: None, Single, Double, Thick, and dash, dotted, and wave forms.`
- v2 (human): `Underline run text in C# with UnderlineValues: pick None, a plain Single line, Double, Thick, or a dashed, dotted, or wavy stroke for IronPPT slides.`
- v3 (balanced): `Reference for the IronPPT UnderlineValues enum in C#: underline styles for IUnderline.LineValue, from Single and Double to dash, dotted, and wave forms.`

---

## Structured data

**TechArticle abstract**

> Set the underline style of run text in IronPPT with UnderlineValues, assigned to IUnderline.LineValue. None clears the underline and Single is the plain solid line, with Double, Thick, and the Dash, Dotted, and Wave families supplying heavier and decorative strokes. Words underlines words but not the spaces between them.
