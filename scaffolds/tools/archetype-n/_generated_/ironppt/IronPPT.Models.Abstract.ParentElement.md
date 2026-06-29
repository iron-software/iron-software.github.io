<!--
N-Full abstract class. Frame A (subject-verb). IronPPT.Models.Abstract namespace.
Base ContentElement; implements ICloneableElement, IParentElement, IContentElement.
Public members verified 2026-06-23 against IronPPT.Models.Abstract.ParentElement.html:
ParentElement(params IContentElement[]), Children (List<IContentElement>),
AddChild(params IContentElement[]), Clone (override IContentElement),
ExtractElements<T>, GetChildByIndex<T>(int), InsertChildToIndex(int, params IContentElement[]),
LogObjectTree (string), Remove (override void), RemoveAllChildren, RemoveChildren(params IContentElement[]).
Derived verified: Container, Paragraph, Run, Slide, BaseGraphicContainer, TextContainer.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Abstract.ParentElement.html
-->

## Injected overview (Markdown)

`ParentElement` holds and arranges the child content nested inside it. It is the base every container in the slide model inherits, the type that knows how to add, find, reorder, and remove the elements it contains. A developer works with the concrete containers that derive from it, `Slide`, `Paragraph`, `Run`, and `Container` among them, and uses the members below to build their content. It extends `ContentElement`, so a container is itself an element inside its own parent.

Because the class is abstract, a container is created as one of its derived types and its children are managed through the inherited members. Code that edits a document tree often holds a container as `IParentElement`, the contract this class implements, so it can rearrange children without naming the exact container type.

`Children` is the `List<IContentElement>` of contained elements. `AddChild` appends one or more children and `InsertChildToIndex` places them at a given position, while `RemoveChildren`, `RemoveAllChildren`, and the overridden `Remove` take elements out. `GetChildByIndex<T>` fetches a typed child by position and `ExtractElements<T>` pulls every child of a given type from the subtree, which is how a developer collects, say, every run in a paragraph. `Clone` copies the container and its content, and `LogObjectTree` returns a text view of the nested structure that is useful while debugging a layout. Build a container's content by adding children, then reorder or extract them through these calls rather than rebuilding the tree.

```csharp
void Fill(ParentElement container, params IContentElement[] children)
{
    container.AddChild(children);
}
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers adding content to a slide, the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through the nested element model, and the [ContentElement reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Abstract.ContentElement.html) documents the element side of the same tree.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParentElement Class - IronPPT C# API`
- v2 (human): `ParentElement: Manage Nested Slide Content in C#`
- v3 (balanced): `ParentElement Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT ParentElement base in C# manages nested slide content: Children, AddChild, InsertChildToIndex, GetChildByIndex, and remove.`
- v2 (human): `ParentElement is the IronPPT container base in C#: add, find, reorder, and remove the child elements nested inside a slide container.`
- v3 (balanced): `Reference for the IronPPT ParentElement class in C#: the container base behind Slide and Paragraph, with Children, AddChild, and more.`

---

## Structured data

**TechArticle abstract**

> Manage the child content nested inside a slide container in C# through the IronPPT ParentElement base. Children is the List of contained elements; AddChild and InsertChildToIndex add them, RemoveChildren, RemoveAllChildren, and Remove take them out, and GetChildByIndex and ExtractElements fetch them by position or type. ParentElement is abstract; concrete containers such as Slide, Paragraph, and Run derive from it.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParentElement live in the IronPPT API?",
    "answer": "ParentElement is an abstract class in the IronPPT.Models.Abstract namespace, shipped in IronPPT.dll. It derives from ContentElement and implements ICloneableElement, IParentElement, and IContentElement, defining how a container holds child elements."
  },
  {
    "question": "What derives from ParentElement in IronPPT?",
    "answer": "Slide, Paragraph, Run, Container, BaseGraphicContainer, and TextContainer derive from ParentElement, inheriting Children, AddChild, GetChildByIndex, and the remove members. Because the base is abstract you work with these concrete containers."
  },
  {
    "question": "How do you add or extract child elements in C#?",
    "answer": "Call AddChild to append elements or InsertChildToIndex to place them at a position, and use GetChildByIndex to fetch a typed child or ExtractElements to pull every child of a type from the subtree. RemoveChildren and RemoveAllChildren take elements back out."
  }
]
```
