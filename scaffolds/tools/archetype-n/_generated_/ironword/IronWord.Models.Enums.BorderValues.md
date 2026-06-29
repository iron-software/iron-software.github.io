<!--
N-Lite/enum. Members verified 2026-06-23: None, Nil, Single, Double, Triple, Thick, Dotted, Dashed, DotDash, Wave, and many compound thick/thin variants.
Salient first: None, Single, Double, Thick. Consumed by BorderStyle.BorderValue (verified).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.BorderValues.html
-->

## Injected overview (Markdown)

Choose the line style a border draws with `BorderValues`, set on `BorderStyle.BorderValue`. `None` and `Nil` draw no border, `Single` is the plain solid line most documents use, and `Double`, `Triple`, and `Thick` add weight. Patterned options include `Dotted`, `Dashed`, `DotDash`, and `Wave`, plus a wide range of compound thick-thin variants such as `ThickThinSmallGap` and `ThinThickLargeGap` for finer rules. The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) covers borders on cells and tables.

```csharp
borderStyle.BorderValue = BorderValues.Single;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BorderValues Enum - IronWord C# API Reference`
- v2 (human): `BorderValues: Pick a Border Line Style in C#`
- v3 (balanced): `BorderValues Enum | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the border line style in C# with the IronWord BorderValues enum: None, Single, Double, Thick, Dotted, Dashed, and more, via BorderStyle.BorderValue.`
- v2 (human): `Choose how a border draws in C# with IronWord's BorderValues enum: a plain Single line, Double or Thick weights, or patterns like Dotted and Dashed.`
- v3 (balanced): `Reference for the IronWord BorderValues enum in C#: None, Single, Double, and Thick border line styles set on BorderStyle.BorderValue.`

---

## Structured data

**TechArticle abstract**

> BorderValues sets the line style a border draws in IronWord, applied through BorderStyle.BorderValue. None and Nil draw nothing, Single is the plain solid line, and Double, Triple, and Thick add weight, with patterns such as Dotted, Dashed, and Wave plus compound thick-thin variants for finer rules.
