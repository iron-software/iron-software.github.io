<!--
N-Full / interface. Frame E. Implementor: TextStyle. IronPPT. Members verified 2026-06-23.
ITextStyle : IDocumentStyle. Buckets used (>10 props). Target: IronPPT.Interfaces.ITextStyle.html
-->

## Injected overview (Markdown)

Character-level formatting, the bold, italic, color, font, and underline of a run, lives behind `ITextStyle`. It is the contract a developer sets to control how a stretch of text looks, the place to reach when text on a slide needs the right weight, color, or typeface.

A developer rarely constructs this contract: it arrives as the `TextStyle` property of a run or a named `IStyle`, and `TextStyle` is the concrete implementor. Editing those properties restyles the text that carries the style, so the same contract serves both a one-off tweak to a single run and the shared look defined inside a reusable style. Because the properties read and write the live element, a change takes effect the moment it is set. The members group by what they control. The weight-and-emphasis members are booleans: `IsBold`, `IsItalic`, and `Outline`. The font-and-color members carry richer types: `TextFont` is an `IFont`, `Color` is an `IColor`, `Underline` is an `IUnderline`, and `Strike` is a `Nullable<StrikValue>`. The spacing-and-language members cover the rest: `Spacing` is a `DocUnit` for character spacing, `Languages` sets the proofing language, and `NoProof` and `SpecVanish` are display flags. Two methods round out the surface: `Clone` copies the style and `Reset` returns it to defaults, both returning an `ITextStyle` so a developer can stamp one run's look onto another or wipe a run back to a clean baseline before restyling. The contract also carries `StyleId` and `Status` inherited from `IDocumentStyle`, which track the style's identity within the document.

```csharp
ITextStyle style = run.TextStyle;
style.IsBold = true;
style.Color = redColor;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places styled text, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) formats text, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers slide elements.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITextStyle Interface - IronPPT C# API`
- v2 (human): `ITextStyle: Format Text Runs in C#`
- v3 (balanced): `ITextStyle Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITextStyle is the IronPPT run-formatting contract in C#: IsBold, IsItalic, Color, TextFont, Underline, Strike, and Spacing for slide text.`
- v2 (human): `Format a run of slide text in C# through the IronPPT ITextStyle contract: set bold, italic, color, font, underline, and spacing, then clone it.`
- v3 (balanced): `Reference for the IronPPT ITextStyle interface in C#: the run-formatting contract implemented by TextStyle, with weight, color, and font members.`

---

## Structured data

**TechArticle abstract**

> ITextStyle is the contract for character-level formatting of a text run in IronPPT in C#. Weight members (IsBold, IsItalic, Outline), font and color members (TextFont, Color, Underline, Strike), and spacing and language members (Spacing, Languages, NoProof, SpecVanish) control the look, while Clone and Reset copy or default the style. It is exposed as the TextStyle of a run or IStyle; TextStyle implements it.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITextStyle live in the IronPPT API?",
    "answer": "ITextStyle is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IDocumentStyle. The concrete implementor is TextStyle, reached as the TextStyle property of a run or a named IStyle."
  },
  {
    "question": "What implements ITextStyle in IronPPT?",
    "answer": "TextStyle implements ITextStyle. You usually edit it through the TextStyle property of an IText run or an IStyle, rather than constructing it directly."
  },
  {
    "question": "How do you make text bold in C#?",
    "answer": "Set IsBold to true on the ITextStyle exposed by the run's TextStyle property. Set Color, TextFont, and Underline on the same style to change appearance, and call Clone to copy the look to another run."
  }
]
```
