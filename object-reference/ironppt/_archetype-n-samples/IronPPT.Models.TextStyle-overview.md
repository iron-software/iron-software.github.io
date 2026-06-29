<!--
N-Full class. Frame E (feature-fronted). IronPPT. Base DocumentStyle; implements ITextStyle, IDocumentStyle.
Members verified 2026-06-23 against IronPPT.Models.TextStyle.html:
ctor, Color (IColor), IsBold, IsItalic, Languages, NoProof, Outline, Spacing (DocUnit),
SpecVanish, Strike (Nullable<StrikValue>), TextFont (IFont), Underline (IUnderline), Clone, Reset.
Inherited from DocumentStyle: Status, StyleId.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.TextStyle.html
-->

## Injected overview (Markdown)

Character-level formatting on a run of slide text, the weight, slant, color, font, and underline a reader actually sees, is held by `TextStyle`. It is the concrete style a developer configures to make text bold, italic, colored, or underlined, and it is what a run carries when its appearance differs from the slide default. Reach for it when a single word or phrase needs its own look rather than inheriting the surrounding style.

A `TextStyle` is built and then applied to the text run it formats, so the workflow is to set the properties that should change and leave the rest at their defaults. As a `DocumentStyle` it also carries a `StyleId` and a `Status`, which tie it into the document's wider style system. `Clone` produces an independent copy when one run's look should seed another, and `Reset` returns the style to its baseline.

The everyday properties are `IsBold`, `IsItalic`, `Color`, `TextFont`, and `Underline`: the first two are simple flags, `Color` takes an `IColor`, `TextFont` an `IFont`, and `Underline` an `IUnderline` describing the underline stroke. `Strike` is a nullable `StrikValue` for strikethrough, `Spacing` a `DocUnit` for character spacing, and `Outline` toggles an outlined glyph. `Languages`, `NoProof`, and `SpecVanish` cover proofing language, spell-check suppression, and the spec-vanish flag. Set only what differs from the inherited style so a run stays in step with the rest of the text.

```csharp
var style = new TextStyle();
style.IsBold = true;
style.Color = new Color("#1A1A1A");
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing and formatting text, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) applies run styling in a worked slide, and the [Underline reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Underline.html) details the underline stroke this style exposes.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextStyle Class - IronPPT C# API Reference`
- v2 (human): `TextStyle: Format Slide Text Runs in C#`
- v3 (balanced): `TextStyle Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Format slide text in C# with the IronPPT TextStyle class: set IsBold, IsItalic, Color, TextFont, Underline, Strike, and Spacing on a run.`
- v2 (human): `Style a run of slide text in C# with the IronPPT TextStyle class: bold, italic, color, font, underline, strikethrough, and spacing.`
- v3 (balanced): `Reference for the IronPPT TextStyle class in C#: control bold, italic, Color, TextFont, Underline, and more on a slide text run.`

---

## Structured data

**TechArticle abstract**

> Configure the appearance of a slide text run in C# with the IronPPT TextStyle class. IsBold and IsItalic toggle weight and slant, Color takes an IColor, TextFont an IFont, and Underline an IUnderline. Strike, Spacing, Outline, Languages, NoProof, and SpecVanish cover the remaining run formatting, while Clone and Reset copy and clear a style. Set only what differs from the inherited style.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextStyle live in the IronPPT API?",
    "answer": "TextStyle is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from DocumentStyle and implements ITextStyle and IDocumentStyle, so it carries a StyleId and Status alongside its run formatting."
  },
  {
    "question": "How do you make slide text bold in C#?",
    "answer": "Create a TextStyle, set IsBold to true, and apply it to the run you want bold. Combine it with IsItalic, Color, TextFont, and Underline to control the rest of the run's appearance. Use Reset to clear the style back to its baseline."
  },
  {
    "question": "What is the difference between TextStyle and ITextStyle?",
    "answer": "ITextStyle is the contract that describes run formatting; TextStyle is the concrete class that implements it. Code that holds a run's style as ITextStyle is working through the interface, while new TextStyle() creates the implementation you configure."
  }
]
```
