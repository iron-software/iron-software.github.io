<!--
N-Mid / interface. Frame B. Implementor: Text. IronPPT. Members verified 2026-06-23.
IText : IContentElement, ITextContentElement, IHasTextStyle. Own: Append, Split. Target: IronPPT.Interfaces.IText.html
-->

## Injected overview (Markdown)

`IText` is the contract for one styled run of text inside a slide or text box, the unit a developer reads, rewrites, or restyles when editing words on a slide. It is what `ISlide.Texts` and `ITextBox.Texts` hand back, so iterating a slide's text works against this contract rather than a concrete class.

The concrete implementor in IronPPT is `Text`. A developer usually receives an `IText` from a slide's `Texts` collection, or adds one with `AddText`, then edits it in place. Its own members are `Append`, which joins another `IText` to this run and returns the result, and `Split`, which divides the run on a delimiter into a `List<IText>`. The everyday read-and-edit members come from the inherited `ITextContentElement` contract: the `Text` property holds the actual string, `Find` locates substrings, and `Replace` swaps text. Per-run formatting (font, bold, color) is reached through the `TextStyle` inherited from `IHasTextStyle`.

```csharp
foreach (IText run in slide.Texts)
    run.Replace("DRAFT", "FINAL");
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places text on a slide, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds runs of text.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IText Interface - IronPPT C# API Reference`
- v2 (human): `IText: Edit a Text Run in C#`
- v3 (balanced): `IText Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IText is the IronPPT text-run contract in C#: Append and Split runs, and edit the inherited Text, Find, and Replace members on each run.`
- v2 (human): `Edit a run of slide text in C# through the IronPPT IText contract: append, split, find, and replace text, with per-run TextStyle formatting.`
- v3 (balanced): `Reference for the IronPPT IText interface in C#: the text-run contract implemented by Text, with Append, Split, and inherited text members.`

---

## Structured data

**TechArticle abstract**

> Editing a run of text on a slide in C# runs through the IronPPT IText contract. Append joins another run and Split divides one on a delimiter, while the inherited ITextContentElement members (the Text property, Find, and Replace) handle the words themselves and TextStyle handles formatting. Text implements IText, reached through ISlide.Texts and ITextBox.Texts.

**FAQPage entries**

```json
[
  {
    "question": "Where does IText live in the IronPPT API?",
    "answer": "IText is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IContentElement, ITextContentElement, and IHasTextStyle, so a run carries text, formatting, and content-element behavior together. The concrete implementor is Text."
  }
]
```
