<!--
N-Full (own props Slides/BuiltInStyles/Paragraphs+TextsDefaultStyle, AddChild/Remove; inherited from ParentElement: Children, AddChild, ExtractElements<T>, GetChildByIndex<T>, InsertChildToIndex, RemoveAllChildren). Frame B. IronPPT.
Verified 2026-06-23: implements IContainer/IParentElement/IContentElement/ICloneableElement; extends ParentElement -> ContentElement. Container.Slides returns List<ISlide>; BuiltInStyles List<IStyle>; ParagraphsDefaultStyle IParagraphStyle; TextsDefaultStyle ITextStyle. Inherited members verified on ParentElement page. No direct PresentationDocument.Container property found -> framed as IContainer implementation, no acquisition path invented.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Container.html
-->

## Injected overview (Markdown)

`Container` is the body of a presentation in IronPPT, the element that holds the slides and the default styles applied across them. It implements the `IContainer` contract, so when you work with the slide collection and the deck-wide style defaults, this is the concrete type behind that interface.

A `Container` sits at the root of the content tree: it is a parent element whose children are the slides and the elements they hold, which is why it carries both a slide collection and the tree-management methods every parent element shares. You reach the slides and styles through its properties and shape the tree through its child methods.

The everyday members are the collections and defaults. `Slides` is a read-only `List<ISlide>` of the deck's slides, `BuiltInStyles` is a `List<IStyle>` of the styles the presentation defines, and `ParagraphsDefaultStyle` (`IParagraphStyle`) and `TextsDefaultStyle` (`ITextStyle`) hold the defaults new text inherits. Because `Container` extends `ParentElement`, it also exposes the tree operations: `AddChild` adds content elements, `Remove` detaches the container, and the inherited `Children`, `ExtractElements<T>`, `GetChildByIndex<T>`, `InsertChildToIndex`, and `RemoveAllChildren` walk and edit the element tree. `ExtractElements<T>` is especially useful for pulling every element of one kind, such as each shape or text box, out of the whole deck in a single call. Set the default styles once so new paragraphs and runs pick them up automatically rather than restyling each one.

```csharp
using IronPPT.Interfaces;

foreach (ISlide slide in container.Slides)
{
    // work with each slide in the presentation body
}
```

The [create empty presentation example](https://ironsoftware.com/csharp/ppt/examples/create-empty-presentation/) starts a deck, the [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) populates it, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) reorders and removes slides.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Container Class - IronPPT C# API Reference`
- v2 (human): `Container: The Presentation Body in C#`
- v3 (balanced): `Container Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Container is the presentation body in IronPPT for C#: it holds Slides, BuiltInStyles, and default paragraph and text styles, and manages the tree.`
- v2 (human): `Work with the presentation body in C# through IronPPT's Container: reach the Slides, the built-in styles, and the deck-wide style defaults.`
- v3 (balanced): `Reference for the IronPPT Container class in C#: the IContainer implementation exposing Slides, BuiltInStyles, and default styles.`

---

## Structured data

**TechArticle abstract**

> Working with the body of a presentation in IronPPT for C# runs through Container, the concrete IContainer that holds the deck's content. Slides is a List of ISlide, BuiltInStyles a List of IStyle, and ParagraphsDefaultStyle and TextsDefaultStyle hold the defaults new text inherits. As a ParentElement, it also exposes AddChild, Children, and ExtractElements for editing the element tree.

**FAQPage entries**

```json
[
  {
    "question": "Where does Container live in the IronPPT API?",
    "answer": "Container is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It extends ParentElement and implements IContainer, IParentElement, IContentElement, and ICloneableElement."
  },
  {
    "question": "How do you get the slides from a Container in C#?",
    "answer": "Read the Slides property, a read-only List of ISlide holding the presentation's slides. Iterate it to work with each slide, and use the inherited child methods such as AddChild and ExtractElements to edit the element tree."
  },
  {
    "question": "What is the difference between Container and IContainer in IronPPT?",
    "answer": "IContainer is the interface that defines the slide collection and default styles; Container is the concrete class that implements it. Code typed against IContainer is fulfilled by a Container instance at runtime."
  }
]
```
