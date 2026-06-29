<!--
N-Full / interface. Frame E. Implementor: Style. IronPPT. Members verified 2026-06-23.
IStyle (no base interfaces). Bundles ITextStyle + IParagraphStyle. Target: IronPPT.Interfaces.IStyle.html
-->

## Injected overview (Markdown)

Named formatting that several paragraphs and runs can share lives behind `IStyle`. It is the contract for a reusable style definition, the kind a developer applies to many elements so a heading or body look is defined once and reused, rather than setting font, color, and spacing element by element.

A style is reached and edited through this contract: `Style` is the concrete implementor in IronPPT, and a developer works with one to set up the formatting a document reuses. The interface pulls the two halves of a style, its run-level look and its paragraph-level layout, together so they travel as a single named unit. Defining the look in one place means a later change to that style updates every paragraph that points at it, instead of forcing a sweep over each element.

The properties split into identity and content. `StyleName` is the human-readable name, `BasedOn` names a parent style to inherit from, `NextParagraphStyle` names the style applied to the following paragraph, and `IsPrimaryStyle` flags the primary style. `StyleType` is a `Nullable<StyleValues>` recording what kind of style this is. The two content members carry the actual formatting: `TextStyle` is an `ITextStyle` (font, bold, italic, color, underline, and spacing for runs) and `ParagraphStyle` is an `IParagraphStyle` (paragraph-level layout). Setting both on one style and giving it a `StyleName` produces a definition the document can reuse across its paragraphs.

```csharp
IStyle style = document.Styles.First();
style.TextStyle.IsBold = true;
style.StyleName = "Heading";
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets paragraph formatting, the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places styled text, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers slide elements.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IStyle Interface - IronPPT C# API Reference`
- v2 (human): `IStyle: Reusable Slide Styles in C#`
- v3 (balanced): `IStyle Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IStyle is the IronPPT style contract in C#: StyleName, BasedOn, StyleType, plus TextStyle and ParagraphStyle for reusable formatting.`
- v2 (human): `Define a reusable slide style in C# through the IronPPT IStyle contract: name it, base it on another, and bundle its text and paragraph formatting.`
- v3 (balanced): `Reference for the IronPPT IStyle interface in C#: the reusable style contract implemented by Style, bundling TextStyle and ParagraphStyle.`

---

## Structured data

**TechArticle abstract**

> IStyle is the contract for a reusable named style in an IronPPT document in C#. StyleName, BasedOn, NextParagraphStyle, IsPrimaryStyle, and StyleType describe the style, while TextStyle (an ITextStyle) and ParagraphStyle (an IParagraphStyle) carry the run-level and paragraph-level formatting. Style implements IStyle, so formatting is defined once and reused.

**FAQPage entries**

```json
[
  {
    "question": "Where does IStyle live in the IronPPT API?",
    "answer": "IStyle is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface; it bundles an ITextStyle and an IParagraphStyle into a single named style definition."
  },
  {
    "question": "What implements IStyle in IronPPT?",
    "answer": "Style implements IStyle. You edit a Style to define formatting a document reuses, setting its TextStyle and ParagraphStyle and giving it a StyleName."
  },
  {
    "question": "What is the difference between IStyle and ITextStyle?",
    "answer": "IStyle is the whole named style: it has a StyleName, a BasedOn parent, and both a TextStyle and a ParagraphStyle. ITextStyle is only the run-level formatting (font, bold, color, underline) and is exposed as the TextStyle property of an IStyle."
  }
]
```
