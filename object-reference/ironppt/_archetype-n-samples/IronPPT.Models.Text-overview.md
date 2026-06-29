<!--
N-Mid (own Append/Split; inherits Text, TextStyle, Find, Replace from TextContentElement). Frame D. IronPPT.
Verified 2026-06-23: class Text : TextContentElement, ICloneableElement, IText, IContentElement, ITextContentElement, IHasTextStyle; Append(IText), Split(string); inherited Text (string), TextStyle (ITextStyle), Find, Replace. Cross-ref: Slide/TextBox AddText returns IText.
Target: IronPPT.Models.Text.html
-->

## Injected overview (Markdown)

Holding a styled run of words on a slide is the job of `Text`. It is the content element a developer works with after calling `AddText` on a slide or text box, and it carries both the characters and the formatting that decide how they appear.

A developer rarely constructs one directly, since `Slide.AddText` and `TextBox.AddText` return an `IText` that a `Text` implements. The inherited `Text` property (a `string`) holds the actual characters, and the inherited `TextStyle` property (an `ITextStyle`) controls bold, italic, color, and size. The own `Append` method joins another `IText` to this one, and `Split` breaks the run into a `List<IText>` at a delimiter, useful when one block needs to become several styled segments. The inherited `Find` and `Replace` methods locate and swap substrings without rebuilding the run, so dynamic content can be patched in place.

```csharp
IText text = slide.AddText("Quarterly Report");
text.TextStyle.IsBold = true;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) inserts text on a slide, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds richer text content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Text Class - IronPPT C# API Reference`
- v2 (human): `Text: Styled Slide Text Runs in C#`
- v3 (balanced): `Text Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Work with styled slide text in C# with the IronPPT Text class: read the Text string, set TextStyle, and call Append, Split, Find, or Replace.`
- v2 (human): `Hold a styled run of words on a slide in C# with the IronPPT Text class, returned by AddText: set its style, then append, split, or replace it.`
- v3 (balanced): `Reference for the IronPPT Text class in C#: the styled text run returned by AddText, with a Text string, a TextStyle, and Append and Split.`

---

## Structured data

**TechArticle abstract**

> Holding a styled run of words on a slide in C# is the job of IronPPT's Text class. Slide.AddText and TextBox.AddText return it as an IText. The inherited Text property holds the characters and TextStyle controls formatting, while Append, Split, Find, and Replace edit the run in place.

**FAQPage entries**

```json
[
  {
    "question": "Where does Text live in the IronPPT API?",
    "answer": "Text is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from TextContentElement and implements IText, and Slide.AddText and TextBox.AddText return it as an IText."
  },
  {
    "question": "How do you add styled text to a slide in C#?",
    "answer": "Call AddText on a slide or text box to get an IText, then set its inherited TextStyle (IsBold, color, size) for formatting. Use Append to join runs and Split to break one run into several."
  }
]
```
