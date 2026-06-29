<!--
N-Mid / interface (5 members, extends IParentElement, IContentElement). Frame C lead. Implementor: Container. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IContainer.html
-->

## Injected overview (Markdown)

When a part of a presentation holds other elements and supplies default styling for them, `IContainer` is the contract that describes it. It gathers the child `Slides` it owns, the `BuiltInStyles` available to its content, and the `ParagraphsDefaultStyle` and `TextsDefaultStyle` that new paragraphs and runs inherit. The `AddChild` method accepts a params array of `IContentElement`, so several children can be attached in one call. Coding against the contract lets layout logic treat any container the same way.

The concrete implementor in IronPPT is `Container`, the document-level holder that exposes the slide collection and the default styles a presentation applies. Because `IContainer` extends both `IParentElement` and `IContentElement`, an implementor is also a parent that can own children and a content element that can be cloned, removed, or replaced. A developer typically reads `Slides` to enumerate slides and sets `ParagraphsDefaultStyle` or `TextsDefaultStyle` to establish the baseline formatting, then calls `AddChild` to attach content.

```csharp
List<ISlide> slides = container.Slides;
container.AddChild(newElement);
```

The [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) covers adding slides to a presentation, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through the elements a container holds.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IContainer - IronPPT C# API`
- v2 (human): `IContainer: The Presentation Holder Contract in C#`
- v3 (balanced): `IContainer Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IContainer is IronPPT's holder contract in C#: it exposes Slides, default styles, and AddChild. Implemented by Container, extends IParentElement.`
- v2 (human): `Hold slides and set default styles in C# through IronPPT's IContainer contract: read Slides, set default paragraph and text styles, add children.`
- v3 (balanced): `Reference for the IronPPT IContainer interface in C#: the holder contract Container implements, exposing Slides and default styles.`

---

## Structured data

**TechArticle abstract**

> Holding slides and supplying their default styling in IronPPT is described by the IContainer contract in C#. It exposes the Slides it owns, BuiltInStyles, and the ParagraphsDefaultStyle and TextsDefaultStyle new content inherits, plus an AddChild method. The concrete implementor is Container; because IContainer extends IParentElement and IContentElement, an implementor is also a parent and a content element.

**FAQPage entries**

```json
[
  {
    "question": "Where does IContainer live in the IronPPT API?",
    "answer": "IContainer is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IParentElement and IContentElement, so an implementor is both a parent that owns children and a content element."
  },
  {
    "question": "What implements IContainer in IronPPT?",
    "answer": "The Container class in IronPPT.Models implements IContainer. Read its Slides collection to enumerate slides, set ParagraphsDefaultStyle or TextsDefaultStyle for baseline formatting, and call AddChild to attach content elements."
  }
]
```
