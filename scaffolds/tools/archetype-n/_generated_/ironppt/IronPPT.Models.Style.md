<!--
N-Full (class : DocumentStyle, IDocumentStyle, IStyle). Frame F (lead), Frame D (abstract). IronPPT.
Verified 2026-06-23: BasedOn, NextParagraphStyle, StyleName (string), IsPrimaryStyle (Nullable<bool>), StyleType (Nullable<StyleValues>), ParagraphStyle (IParagraphStyle), TextStyle (ITextStyle); inherited Status (ElementStatus), StyleId (string) from DocumentStyle.
Target: IronPPT.Models.Style.html
-->

## Injected overview (Markdown)

Reach for `Style` to define a reusable named style that paragraphs and runs in a presentation can share. It bundles paragraph formatting and text formatting under one name, so a developer can change a heading's look in one place and have every element that uses that style update with it.

A `Style` is registered in the presentation's style set and then referenced by other elements. Its formatting lives in two slots: `ParagraphStyle` (an `IParagraphStyle`) holds spacing, indentation, and alignment, while `TextStyle` (an `ITextStyle`) holds bold, italic, color, and size. Identity and behavior come from `StyleName`, the readable name; `StyleType`, a `Nullable<StyleValues>` that marks whether the style applies to paragraphs, characters, or another target; and `IsPrimaryStyle`, a `Nullable<bool>` flagging it as the document's default. The inherited `StyleId` and `Status` (from `DocumentStyle`) carry the underlying identifier and state.

Use `BasedOn` to inherit from another style by name, setting only the properties that differ, and `NextParagraphStyle` to chain the style applied to the following paragraph, the familiar "Heading then Body" sequence. The `StyleType` value matters here because it tells IronPPT what the style targets, so a character style and a paragraph style with the same name stay distinct. Mark the deck's default with `IsPrimaryStyle` so unstyled content falls back to a known look. Build a base style, derive variants with `BasedOn`, and assign `TextStyle` and `ParagraphStyle` for the specifics so a deck's typography stays consistent without repeating formatting on every element.

```csharp
var style = new Style();
style.StyleName = "Heading1";
style.TextStyle.IsBold = true;
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles paragraph formatting, the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds the paragraphs a style applies to, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places the text a text style formats.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Style Class - IronPPT C# API Reference`
- v2 (human): `Style: Reusable Slide Styles in C#`
- v3 (balanced): `Style Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define reusable named styles in C# with the IronPPT Style class: bundle a ParagraphStyle and TextStyle, set StyleType, and inherit with BasedOn.`
- v2 (human): `Share formatting across a deck in C# with the IronPPT Style class: name a style, set its paragraph and text formatting, and derive variants.`
- v3 (balanced): `Reference for the IronPPT Style class in C#: a named style bundling ParagraphStyle and TextStyle, with StyleType, IsPrimaryStyle, and BasedOn.`

---

## Structured data

**TechArticle abstract**

> Defining a reusable named style in C# is the role of IronPPT's Style class. It bundles a ParagraphStyle and a TextStyle under a StyleName, with StyleType marking its target and IsPrimaryStyle the default. BasedOn inherits from another style and NextParagraphStyle chains the following paragraph's style.

**FAQPage entries**

```json
[
  {
    "question": "Where does Style live in the IronPPT API?",
    "answer": "Style is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from the DocumentStyle base and implements IDocumentStyle and IStyle."
  },
  {
    "question": "How do you create a reusable style in C#?",
    "answer": "Create a Style, give it a StyleName, and set its TextStyle and ParagraphStyle for the formatting. Reference the style from elements so changing it once updates everything that uses it."
  },
  {
    "question": "How do you base one style on another in C#?",
    "answer": "Set the BasedOn property to another style's name to inherit its formatting, then override only the properties that differ. Use NextParagraphStyle to set the style applied to the paragraph that follows."
  }
]
```
