<!--
N-Full interface. Frame B. IronWord. Verified 2026-06-23.
No concrete implementor is documented in the api dir; contract framing only, no invented implementor names.
Members verified on the interface itself: Children, Parent, AddChild(ContentElement[]), Clone(), ExtractElements<T>(), GetChildByIndex<T>(Int32), InsertChildToIndex(Int32, ContentElement[]), Remove(), RemoveAllChildren(), RemoveChildren(ContentElement[]), Replace(ContentElement).
Target: IronWord.Models.Abstract.Interfaces.IContentElement.html
-->

## Injected overview (Markdown)

`IContentElement` is the contract that describes a child-holding node in the IronWord content model. It declares the operations a document element exposes when it owns a subtree of other elements, so code can read and reshape that subtree without depending on a concrete node type. The contract mirrors the shape of the `ContentElement` family: it speaks in terms of `ContentElement` children and a `ContentElement` parent.

A developer works through the interface rather than instantiating it, since an interface has no constructor. The everyday members read clearly. `Children` is the list of `ContentElement` nodes the element holds, and `Parent` points back at the `ContentElement` that contains it, so traversal works in both directions. `AddChild` appends nodes, `InsertChildToIndex` places one at a position, and `Clone` returns a `ContentElement` copy. Coding to `IContentElement` keeps editing routines decoupled from any single node class and makes them easy to test with a stand-in.

The rest of the surface fills out tree editing. `Remove` detaches the element, `RemoveChildren` and `RemoveAllChildren` clear nodes, and `Replace` swaps a child in place. `GetChildByIndex<T>` fetches a typed child by position, and `ExtractElements<T>` collects every descendant of a requested type into a list. Because all of these are typed against `ContentElement`, a routine that accepts an `IContentElement` can walk and rewrite a document tree whatever concrete elements it actually contains.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the content tree this contract describes, the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) adds children, and the [remove text how-to](https://ironsoftware.com/csharp/word/how-to/remove-text/) detaches them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IContentElement - IronWord C# API`
- v2 (human): `IContentElement: The Word Node Contract in C#`
- v3 (balanced): `IContentElement Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IContentElement is the IronWord contract for a child-holding Word node in C#: Children, Parent, AddChild, ExtractElements, GetChildByIndex, and Replace.`
- v2 (human): `Walk and edit a Word document tree in C# through IronWord's IContentElement contract: read Children, follow Parent, add, remove, and replace nodes.`
- v3 (balanced): `Reference for the IronWord IContentElement interface in C#: the child-holding node contract with Children, Parent, AddChild, and ExtractElements.`

---

## Structured data

**TechArticle abstract**

> IContentElement is the IronWord contract that describes a child-holding node in the Word content model in C#. It declares Children and Parent for traversing the tree, AddChild and InsertChildToIndex for inserting nodes, Remove, RemoveChildren, and Replace for editing, and the typed ExtractElements and GetChildByIndex members, all expressed in terms of ContentElement so routines stay decoupled from concrete node types.

**FAQPage entries**

```json
[
  {
    "question": "Where does IContentElement live in the IronWord API?",
    "answer": "IContentElement is an interface in the IronWord.Models.Abstract.Interfaces namespace, shipped in IronWord.dll. It is a standalone contract that declares the child-holding members of a Word content node, typed against the ContentElement family."
  },
  {
    "question": "What does IContentElement represent in IronWord?",
    "answer": "It represents a content node that owns a subtree of other nodes. Its Children property is a list of ContentElement, and its Parent points back at the containing ContentElement, so code that takes an IContentElement can walk and rewrite a document tree without naming a concrete node class."
  },
  {
    "question": "How do you edit a node's children through IContentElement in C#?",
    "answer": "Call AddChild or InsertChildToIndex to insert nodes, RemoveChildren or RemoveAllChildren to clear them, and Replace to swap a child in place. Use GetChildByIndex for a typed child by position and ExtractElements to collect every descendant of a type."
  }
]
```
