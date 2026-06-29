<!--
N-Mid / interface (1 member). Frame D lead. Implementors: ContentElement, Container, BaseGraphic. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.ICloneableElement.html
-->

## Injected overview (Markdown)

Duplicating a slide element without re-building it from scratch runs through `ICloneableElement`. The contract declares a single `Clone()` method that returns a new `IContentElement` carrying the same configuration as the original, so a developer can copy a shape, paragraph, or graphic and then re-parent or tweak the copy. Coding against the contract means a helper that duplicates content does not need to know the element's concrete type.

In IronPPT the implementors are content classes rather than a single type: the abstract `ContentElement` base provides the clone behavior, and concrete elements such as `Container` and the `BaseGraphic` graphic base inherit it. Because the duplicated element returns as `IContentElement`, the caller works with it through the same content contract it would use for any element, attaching it where a child is accepted. Use `Clone()` when you want a faithful copy to position separately rather than sharing a reference to the original.

```csharp
IContentElement copy = element.Clone();
```

The [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers working with elements on a slide, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows building the kind of element you might clone.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ICloneableElement - IronPPT C# API`
- v2 (human): `ICloneableElement: Copy Slide Elements in C#`
- v3 (balanced): `ICloneableElement Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ICloneableElement is IronPPT's clone contract in C#: its Clone() method returns a copy as IContentElement. Implemented by ContentElement and Container.`
- v2 (human): `Duplicate a slide element in C# through IronPPT's ICloneableElement contract: call Clone() to copy a shape, paragraph, or graphic faithfully.`
- v3 (balanced): `Reference for the IronPPT ICloneableElement interface in C#: the Clone() contract content classes like Container and BaseGraphic implement.`

---

## Structured data

**TechArticle abstract**

> Copying a slide element faithfully in IronPPT happens through the ICloneableElement contract in C#. Its single Clone() method returns the duplicate as an IContentElement, so callers do not need the concrete type. The clone behavior comes from the ContentElement base and is inherited by elements such as Container and the BaseGraphic graphic base.

**FAQPage entries**

```json
[
  {
    "question": "Where does ICloneableElement live in the IronPPT API?",
    "answer": "ICloneableElement is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and declares a single Clone() method that returns an IContentElement."
  },
  {
    "question": "What implements ICloneableElement in IronPPT?",
    "answer": "The abstract ContentElement base implements the clone behavior, and concrete content classes such as Container and the BaseGraphic graphic base inherit it. Call Clone() on any of these to copy the element as an IContentElement."
  }
]
```
