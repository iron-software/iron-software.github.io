<!--
N-Mid / interface (1 member). Frame C (when-fronted). No declared base. Implementors: Run, Text, Paragraph. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IHasTextStyle.html
-->

## Injected overview (Markdown)

When formatting needs to apply to characters rather than whole paragraphs, `IHasTextStyle` is the contract that exposes it. It marks an element as owning a text style, the font, size, color, and emphasis that decorate a run of characters, so code can set that formatting uniformly across any element that carries text. A developer works through it while styling the words inside a slide, separate from how the paragraphs are laid out.

A text-styled element is reached through the slide content that holds the text, so the contract is normally obtained from an existing run or text element and then read or assigned. It declares one member: `TextStyle`, an `ITextStyle` carrying the character-level formatting. Assign a prepared `ITextStyle` to restyle the text, or read it to check the current font and emphasis. Concrete implementors in IronPPT include `Run`, `Text`, and `Paragraph`, so the same style applies whether the target is a single run of characters or a larger text element.

```csharp
element.TextStyle = textStyle;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) adds the text to style, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) shows the surrounding content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IHasTextStyle - IronPPT C# API Reference`
- v2 (human): `IHasTextStyle: Owns a Text Style in C#`
- v3 (balanced): `IHasTextStyle Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IHasTextStyle interface in C#: a TextStyle property of type ITextStyle marking an element that owns character-level formatting.`
- v2 (human): `Read or set character formatting in C# through the IronPPT IHasTextStyle contract, implemented by Run, Text, and Paragraph.`
- v3 (balanced): `Reference for the IronPPT IHasTextStyle interface in C#: the TextStyle contract for character formatting, implemented by Run and Text.`

---

## Structured data

**TechArticle abstract**

> Apply character-level formatting in C# through the IronPPT IHasTextStyle contract. It carries one TextStyle member, an ITextStyle holding font, size, color, and emphasis. Concrete implementors include Run, Text, and Paragraph, so the same assignment styles a single run of characters or a larger text element.

**FAQPage entries**

```json
[
  {
    "question": "Where does IHasTextStyle live in the IronPPT API?",
    "answer": "IHasTextStyle is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It declares no base interface and is implemented by text-carrying classes such as Run, Text, and Paragraph."
  }
]
```
