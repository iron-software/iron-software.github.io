<!--
N-Mid / interface. Frame B. Implementor: TextContainer (Models.Abstract). IronPPT. Members verified 2026-06-23.
ITextContainer : IHasTextStyle. Own: Texts, AddText x2. Target: IronPPT.Interfaces.ITextContainer.html
-->

## Injected overview (Markdown)

`ITextContainer` is the contract for any element that holds and accepts runs of text, the small surface a developer uses to add words to a container and read them back. It captures the "this thing can contain text" capability shared by the parts of a presentation that carry text, so adding text works the same way wherever the text lives.

The concrete implementor in IronPPT is `TextContainer`, the base that text-holding elements build on. A developer typically works with a more specific element (a text box or a slide) but relies on this contract for the common text behavior underneath. Its own members are small and direct: the `Texts` property is a `List<IText>` exposing the runs the container holds, and `AddText` (overloaded for a plain `string` or an existing `IText`) appends a run and returns it. Default run formatting for the container is reached through the `TextStyle` member inherited from `IHasTextStyle`, so text added through this contract picks up a consistent style.

```csharp
ITextContainer container = textBox;
container.AddText("Subtitle");
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places text on a slide, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds runs of text.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITextContainer - IronPPT C# API Reference`
- v2 (human): `ITextContainer: Hold Text in C#`
- v3 (balanced): `ITextContainer Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITextContainer is the IronPPT text-holding contract in C#: add runs with AddText and read them back through the Texts collection.`
- v2 (human): `Add and read runs of text in C# through the IronPPT ITextContainer contract: the shared text capability behind text-holding slide elements.`
- v3 (balanced): `Reference for the IronPPT ITextContainer interface in C#: the contract implemented by TextContainer, with AddText and a Texts collection.`

---

## Structured data

**TechArticle abstract**

> ITextContainer is the contract for an element that holds runs of text in IronPPT in C#. Its Texts property exposes the held runs as a List<IText>, AddText appends a run from a string or an IText, and the inherited TextStyle sets default run formatting. TextContainer implements it, supplying the shared text behavior behind text-holding slide elements.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITextContainer live in the IronPPT API?",
    "answer": "ITextContainer is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IHasTextStyle. The concrete implementor is TextContainer, the base that text-holding elements build on."
  }
]
```
