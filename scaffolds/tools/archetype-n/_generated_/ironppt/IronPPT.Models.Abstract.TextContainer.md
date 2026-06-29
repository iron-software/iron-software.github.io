<!--
N-Mid (5 members). Frame B. IronPPT. Namespace IronPPT.Models.Abstract. Base ParentElement.
Members verified 2026-06-23: Texts (List<IText>), TextStyle (ITextStyle), AddChild, AddText(IText), AddText(string).
No documented subclass extends TextContainer directly; framed as the text-holding base in the abstract layer.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Abstract.TextContainer.html
-->

## Injected overview (Markdown)

`TextContainer` is the element you build on when a slide part needs to hold and style runs of text. It collects one or more `IText` items and applies a single text style across them, so the text inside a shape, cell, or other container behaves as one stylable unit rather than a loose set of strings.

Read or add text through its members. The `Texts` property exposes the contained `IText` items as a `List<IText>`, and `TextStyle` is an `ITextStyle` that governs font, color, and the other run-level formatting applied to the container. `AddText` has two forms: pass an existing `IText` to append it, or pass a plain `string` to add text directly. `AddChild` accepts `IContentElement` items, since a `TextContainer` is also a parent element in the document tree. Each call returns or mutates the same container, so building a block of styled text is a sequence of `AddText` calls followed by one `TextStyle` assignment.

```csharp
var container = new TextContainer();
container.AddText("Quarterly summary");
container.TextStyle.Bold = true;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) walks through placing text on a slide, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows text formatting applied in practice.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextContainer Class - IronPPT C# API Reference`
- v2 (human): `TextContainer: Hold & Style Slide Text in C#`
- v3 (balanced): `TextContainer Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Hold and style slide text in C# with the IronPPT TextContainer class: add IText through AddText, read the Texts list, and set formatting via TextStyle.`
- v2 (human): `Group runs of styled text in C# with the IronPPT TextContainer class: append text with AddText, then format the whole block through TextStyle.`
- v3 (balanced): `Reference for the IronPPT TextContainer class in C#: collect IText items with AddText, expose them via Texts, and style them through TextStyle.`

---

## Structured data

**TechArticle abstract**

> Holding and styling runs of text in a slide part runs through the IronPPT TextContainer class in C#. Its Texts property exposes the contained IText items as a List, TextStyle applies one ITextStyle across them, and AddText appends either an existing IText or a plain string. AddChild adds content elements, since TextContainer is also a parent element in the document tree.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextContainer live in the IronPPT API?",
    "answer": "TextContainer is a class in the IronPPT.Models.Abstract namespace, shipped in IronPPT.dll. It derives from ParentElement and implements ITextContainer and IHasTextStyle, giving it both a child-element tree and a shared text style."
  },
  {
    "question": "How do you add text to a TextContainer in C#?",
    "answer": "Call AddText with a plain string to add text directly, or pass an existing IText to append it. Read the contained items back through the Texts property, and set font and color for the whole container through the TextStyle property."
  }
]
```
