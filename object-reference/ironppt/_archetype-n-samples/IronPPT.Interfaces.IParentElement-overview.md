<!--
N-Full / interface. Frame A (subject-verb). Implementors: Slide, Shape, TextBox, Container, Paragraph, Run. Generic members ExtractElements<T>, GetChildByIndex<T>. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IParentElement.html
-->

## Injected overview (Markdown)

`IParentElement` lets a developer add, find, reorder, and remove the child elements nested inside a slide object. It is the contract every container in the presentation tree shares, so the same calls that add a shape to a slide also add a run to a paragraph or a paragraph to a text box. Reach for it when code walks or edits the document hierarchy generically rather than against one specific container type.

A developer receives an `IParentElement` from the element being built rather than constructing one. The concrete implementors in IronPPT include `Slide`, `Shape`, `TextBox`, and `Container`, along with text-bearing elements such as `Paragraph` and `Run`; each is something that can hold children. Because `IParentElement` extends `IContentElement`, a parent is also a positioned element that can itself be nested inside another parent, which is what makes the tree recursive.

The members group into three jobs. For mutation, `AddChild` appends one or more children, `InsertChildToIndex` places them at a position, `RemoveChildren` removes specific children, `RemoveAllChildren` clears them, and `Remove` detaches the parent itself; `Clone` copies it. For iteration and lookup, `Children` lists the contained `IContentElement` items, `GetChildByIndex<T>` returns the child at a position, and `ExtractElements<T>` collects every descendant of a given element type across the subtree. For observability, `LogObjectTree` prints the hierarchy as text, which is useful when debugging a layout or confirming that children landed where the code intended.

```csharp
slide.AddChild(textBox);
List<IText> texts = slide.ExtractElements<IText>();
slide.LogObjectTree();
```

The [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) covers building slide content, the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through the element tree these calls traverse, and the [add shape example](https://ironsoftware.com/csharp/ppt/examples/add-shape/) shows a child element being attached to a parent.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IParentElement Interface - IronPPT C# API`
- v2 (human): `IParentElement: Slide Element Tree in C#`
- v3 (balanced): `IParentElement | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IParentElement is the IronPPT container contract in C#: AddChild, Children, ExtractElements, and Remove, implemented by Slide, Shape, and TextBox.`
- v2 (human): `Add, find, and remove nested slide elements in C# through IronPPT's IParentElement contract, the shared container interface for slides, shapes, and text boxes.`
- v3 (balanced): `Reference for the IronPPT IParentElement interface in C#: the container contract for adding and removing child elements, implemented by Slide and Shape.`

---

## Structured data

**TechArticle abstract**

> Add, find, reorder, and remove nested slide elements in C# through IronPPT's IParentElement contract. It is the shared container interface for slides, shapes, text boxes, paragraphs, and runs. AddChild and InsertChildToIndex mutate the tree, Children and ExtractElements iterate it, and LogObjectTree prints it. Because it extends IContentElement, a parent can itself be nested, making the document tree recursive.

**FAQPage entries**

```json
[
  {
    "question": "Where does IParentElement live in the IronPPT API?",
    "answer": "IParentElement is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IContentElement, so a parent is also a positioned element that can itself be nested inside another parent."
  },
  {
    "question": "What implements IParentElement in IronPPT?",
    "answer": "Slide, Shape, TextBox, and Container implement IParentElement, as do Paragraph and Run. The abstract ParentElement class in IronPPT.Models.Abstract provides the shared base. You receive a parent from the element being built rather than constructing the interface."
  },
  {
    "question": "How do you find every element of a type inside a parent?",
    "answer": "Call ExtractElements<T> on the parent to collect all descendants of type T across the subtree, or GetChildByIndex<T> to fetch a single child at a position. Children lists the direct child IContentElement items, and LogObjectTree prints the whole hierarchy for debugging."
  }
]
```
