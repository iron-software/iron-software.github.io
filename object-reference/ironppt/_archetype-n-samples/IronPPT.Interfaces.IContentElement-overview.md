<!--
N-Mid / interface (5 members). Frame B lead. Implementors: ContentElement, ParentElement, Container, BaseGraphic. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IContentElement.html
-->

## Injected overview (Markdown)

`IContentElement` is the contract every piece of placed content in a presentation satisfies, from a shape to a paragraph to a graphic. It carries the `Parent` that owns the element, a `Status` of type `ElementStatus` that tracks its state, and the lifecycle methods a developer uses to move it around: `Clone` to copy it, `Remove` to detach it, and `Replace` to swap in a different child. Coding against the contract lets editing logic act on any element uniformly.

The implementors in IronPPT are the content classes themselves: the abstract `ContentElement` base supplies the shared behavior, and types such as `ParentElement`, `Container`, and the `BaseGraphic` graphic base build on it. A developer usually receives an `IContentElement` from a parent's children rather than constructing the interface, then reads `Parent` to walk up the tree or calls `Remove` and `Replace` to restructure the slide. `Clone` returns another `IContentElement` so the copy stays usable through the same contract.

```csharp
IContentElement parent = element.Parent;
element.Remove();
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers manipulating elements on a slide, and the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) shows reorganizing slide content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IContentElement - IronPPT C# API`
- v2 (human): `IContentElement: The Slide Content Contract in C#`
- v3 (balanced): `IContentElement Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IContentElement is IronPPT's content contract in C#: it exposes Parent, Status, Clone, Remove, and Replace. Implemented by ContentElement subclasses.`
- v2 (human): `Move and edit slide content in C# through IronPPT's IContentElement contract: read Parent and Status, then Clone, Remove, or Replace the element.`
- v3 (balanced): `Reference for the IronPPT IContentElement interface in C#: the content contract ContentElement, Container, and BaseGraphic implement.`

---

## Structured data

**TechArticle abstract**

> Every placed element in an IronPPT presentation satisfies the IContentElement contract in C#. It carries the owning Parent, an ElementStatus, and the lifecycle methods Clone, Remove, and Replace. The shared behavior comes from the abstract ContentElement base and is built on by ParentElement, Container, and the BaseGraphic graphic base, so editing logic can act on any element uniformly.

**FAQPage entries**

```json
[
  {
    "question": "Where does IContentElement live in the IronPPT API?",
    "answer": "IContentElement is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and declares Parent, Status, Clone, Remove, and Replace."
  },
  {
    "question": "What implements IContentElement in IronPPT?",
    "answer": "The abstract ContentElement base implements the shared behavior, and content classes such as ParentElement, Container, and the BaseGraphic graphic base inherit it. You usually receive an IContentElement from a parent's children rather than constructing it."
  }
]
```
