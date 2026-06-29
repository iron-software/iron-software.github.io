<!--
N-Full / interface. Frame D. Implementor: TextStyle. IronWord.
Members verified: Color, TextFont, Underline, Strike, Emphasis, TextEffect, Shading, VerticalTextAlignment, DefaultStyle, Reset(); inherited BaseStyle (IDerivedStyle). Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ITextStyle.html
-->

## Injected overview (Markdown)

Formatting the characters in a Word document, the font, color, underline, and effects, runs through `ITextStyle` in C#. The contract gathers every text-level styling option into one place, so code that styles a run can set appearance through a single object and apply the same style to many runs. It is the text counterpart to the table styling contract `ITableStyle`, and it is most often used through the concrete `TextStyle` class.

The concrete implementor in IronWord is `TextStyle`, the type a developer constructs, fills with the appearance settings, and assigns to the text being written or edited. Code usually names `TextStyle` directly; the interface matters when a routine accepts or returns a style by contract, or inspects `DefaultStyle` to read the baseline appearance. `ITextStyle` extends `IDerivedStyle`, which contributes the inherited `BaseStyle` member, so a text style participates in the same derived-style chain as the other styling contracts and can fall back to a base style for any value it does not set.

The everyday members are `Color` (the text color, an IronWord `Color`), `TextFont` (the `Font` family), and the toggles `Underline`, `Strike`, and `Emphasis` that mark a run. Richer presentation comes from `TextEffect`, `Shading` for background fill, and `VerticalTextAlignment` for superscript or subscript positioning. `Reset()` returns a `TextStyle` with every property back at its default, which is the clean starting point for building a fresh style.

```csharp
ITextStyle style = new TextStyle
{
    Color = Color.Blue,
    TextFont = new Font { FontFamily = "Calibri" },
    Underline = new Underline()
};
```

The [style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) walks through applying styles, the [style text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) has a worked listing, and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) shows where styled runs are written.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITextStyle Interface - IronWord C# API`
- v2 (human): `ITextStyle: Style Word Text in C#`
- v3 (balanced): `ITextStyle Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITextStyle is IronWord's C# text styling contract: set Color, TextFont, Underline, and effects through it, implemented by the TextStyle class.`
- v2 (human): `Style text in a Word document in C# through IronWord's ITextStyle contract: control color, font, underline, and effects via the TextStyle class.`
- v3 (balanced): `Reference for the IronWord ITextStyle interface in C#: the text styling contract for color, font, and effects, implemented by TextStyle.`

---

## Structured data

**TechArticle abstract**

> Styling the characters in a Word document in C# runs through IronWord's ITextStyle contract, which gathers the text-level options, color, font, underline, and effects, into one object. The concrete implementor is TextStyle, constructed and assigned to a run. Everyday members are Color, TextFont, Underline, Strike, and TextEffect; Reset returns a default TextStyle. ITextStyle extends IDerivedStyle, contributing the inherited BaseStyle member.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITextStyle live in the IronWord API?",
    "answer": "ITextStyle is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IDerivedStyle, which contributes the BaseStyle member, and is implemented by the TextStyle class."
  },
  {
    "question": "What implements ITextStyle in IronWord?",
    "answer": "The TextStyle class implements ITextStyle. Construct a TextStyle, set members such as Color, TextFont, and Underline, and assign it to the text you are writing. Code accepts ITextStyle by contract when a routine should work with any text style."
  },
  {
    "question": "How do you set the font and color of text in C# with IronWord?",
    "answer": "Use an ITextStyle (the TextStyle class): set its TextFont to a Font and its Color to an IronWord Color, then apply the style to the run. Add Underline, Strike, or TextEffect for further presentation, and call Reset to return every property to its default."
  }
]
```
