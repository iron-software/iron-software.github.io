<!--
N-Full (abstract base, holds children; large member surface -> bucketed). Frame E. IronWord. Verified 2026-06-23.
Members verified: Children, Tables, Texts, AddChild, Clone, ExtractElements<T>, GetChildByIndex<T>, InsertChildToIndex, LogObjectTree, Remove, RemoveAllChildren, RemoveChildren.
Derived: TableElement, TableElements, TextContainer, Container, DocumentSection, ListItem, MultiLevelTextList, Paragraph, Run. Target: IronWord.Models.Abstract.ParentElement.html
-->

## Injected overview (Markdown)

Holding and arranging child content in a Word document in C# is what `ParentElement` provides. It is the base for every node that contains other nodes, so a `Paragraph` holding runs, a `DocumentSection` holding paragraphs, a `ListItem`, and a `Container` all draw their child-management behavior from one place. Where the plain `ContentElement` base gives a node its identity, `ParentElement` adds the ability to own a subtree.

Concrete and intermediate types that extend it include `Paragraph`, `Run`, `Container`, `DocumentSection`, `ListItem`, `MultiLevelTextList`, and the table-side bases `TableElement` and `TableElements`. A developer obtains one of these by building a document or by reading nodes out of an existing one, then works through the inherited surface to read and reshape its children. Because the behavior lives on this base, the same operations apply no matter which parent you hold.

The member surface groups into clear functions. **Reading children:** `Children` returns the full child collection, while `Tables` and `Texts` give typed lists of the `Table` and `TextContent` nodes inside. **Mutating children:** `AddChild` appends nodes, `InsertChildToIndex` places one at a position, and `RemoveChildren`, `RemoveAllChildren`, and `Remove` detach them. **Locating and copying:** `GetChildByIndex<T>` fetches a typed child by position, `ExtractElements<T>` collects every descendant of a type, and `Clone` deep-copies the element. **Diagnostics:** `LogObjectTree` prints the subtree as readable text, which is useful when verifying the structure of a node during development before you save.

```csharp
using IronWord;
using IronWord.Models;

WordDocument doc = new WordDocument("input.docx");
Paragraph paragraph = doc.Paragraphs[0];
paragraph.AddChild(new Text("appended"));
Console.WriteLine(paragraph.LogObjectTree());
```

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) appends child content, the [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) builds nested structures, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the parent-child tree.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParentElement Class - IronWord C# API`
- v2 (human): `ParentElement: Hold Child Word Nodes in C#`
- v3 (balanced): `ParentElement Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ParentElement is the IronWord base for Word nodes that hold children in C#: Children, Tables, Texts, AddChild, InsertChildToIndex, ExtractElements, and more.`
- v2 (human): `Manage child content in a Word document in C# with IronWord's ParentElement base: read Children, add and remove nodes, and extract elements by type.`
- v3 (balanced): `Reference for the IronWord ParentElement class in C#: the abstract base behind Paragraph, Run, and Container, with child read, mutate, and copy members.`

---

## Structured data

**TechArticle abstract**

> Holding and arranging child content in a Word document in C# is what the IronWord ParentElement base class provides. Paragraph, Run, Container, DocumentSection, ListItem, and the table bases extend it. It exposes Children, Tables, and Texts for reading, AddChild, InsertChildToIndex, and the Remove members for mutation, GetChildByIndex and ExtractElements for lookup, and LogObjectTree for inspecting a subtree.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParentElement live in the IronWord API?",
    "answer": "ParentElement is an abstract class in the IronWord.Models.Abstract namespace, shipped in IronWord.dll. It derives from ContentElement and is the base for child-holding nodes such as Paragraph, Run, Container, DocumentSection, and ListItem."
  },
  {
    "question": "How do you add or remove child nodes in a Word document in C#?",
    "answer": "Call AddChild to append nodes or InsertChildToIndex to place one at a position. Detach nodes with RemoveChildren, RemoveAllChildren, or Remove. Read the current children through the Children collection, or the typed Tables and Texts lists."
  },
  {
    "question": "How do you find all elements of a type inside a ParentElement?",
    "answer": "Call ExtractElements with the type you want; it returns a List of every matching descendant. Use GetChildByIndex with a type and position for a single typed child, and LogObjectTree to print the subtree while debugging."
  }
]
```
