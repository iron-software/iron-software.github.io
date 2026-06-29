<!--
N-Full (collection class). Frame D. IronWord. Verified 2026-06-23.
Members verified: Count, Item[Int32], First(), GetEnumerator(), IndexOf(IWordDocumentObject), Last(); ctors.
Target: IronWord.Models.Abstract.ContentElementCollection.html
-->

## Injected overview (Markdown)

Holding an ordered group of document nodes in C# is the job of `ContentElementCollection`. It is the list type IronWord uses to gather the content elements that belong together, exposing them through an indexer and standard iteration so you can walk, count, and address each item the same way you would any .NET collection. Where a single `ContentElement` is one node, this is the sequence of them.

A collection is created empty with `new ContentElementCollection()` or seeded from an existing `IList<IWordDocumentObject>` through the second constructor, which copies the supplied items in. From there a developer reads `Count` for the size, indexes into it with the `[int index]` indexer to fetch the item at a position, and iterates it with `foreach` because `GetEnumerator` returns an enumerator over `IWordDocumentObject`. Each entry is typed as `IWordDocumentObject`, the shared document-object contract, so the same collection can carry mixed content.

The lookup helpers cover the common positions: `First` and `Last` return the ends of the collection, and `IndexOf` reports where a given object sits, returning its zero-based position. Reach for these rather than re-implementing them when you need the leading or trailing element or want to confirm membership before editing. Because the collection enumerates `IWordDocumentObject`, it composes cleanly with LINQ when a richer query is needed, and the indexer makes a positional edit a one-line lookup. Treat the collection as the read side of a document region: walk it to inspect what is there, then act on the individual nodes through their own members.

```csharp
using IronWord.Models.Abstract;

var collection = new ContentElementCollection();
Console.WriteLine(collection.Count);
foreach (var item in collection)
    Console.WriteLine(item);
```

The [extract text how-to](https://ironsoftware.com/csharp/word/how-to/extract-text/) reads content out of a document, the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) adds nodes to it, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how nodes are grouped and traversed.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ContentElementCollection - IronWord C# API`
- v2 (human): `ContentElementCollection: Iterate Word Nodes in C#`
- v3 (balanced): `ContentElementCollection | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ContentElementCollection groups IronWord document nodes in C#: read Count, index items, iterate with GetEnumerator, and find positions with First, Last, IndexOf.`
- v2 (human): `Walk an ordered set of Word document nodes in C# with IronWord's ContentElementCollection: count, index, iterate, and locate items by position.`
- v3 (balanced): `Reference for the IronWord ContentElementCollection class in C#: an indexed, enumerable list of IWordDocumentObject items with First, Last, and IndexOf.`

---

## Structured data

**TechArticle abstract**

> Holding an ordered group of IronWord document nodes in C# is the job of the ContentElementCollection class. Construct it empty or from an IList of IWordDocumentObject, then read Count, index items with the [int] indexer, and iterate with GetEnumerator. First, Last, and IndexOf locate items by position, and every entry is typed as the shared IWordDocumentObject contract.

**FAQPage entries**

```json
[
  {
    "question": "Where does ContentElementCollection live in the IronWord API?",
    "answer": "ContentElementCollection is a class in the IronWord.Models.Abstract namespace, shipped in IronWord.dll. It derives from System.Object and implements IWordDocumentObjectCollection along with the generic IEnumerable of IWordDocumentObject."
  },
  {
    "question": "How do you iterate the items in a ContentElementCollection in C#?",
    "answer": "Use a foreach loop, since GetEnumerator returns an enumerator over IWordDocumentObject. Read Count for the size, index a position with the [int] indexer, and call First or Last for the ends of the collection."
  },
  {
    "question": "How do you find the position of an item in a ContentElementCollection?",
    "answer": "Call IndexOf with the IWordDocumentObject you are looking for; it returns the item's zero-based position in the collection. Because the collection enumerates IWordDocumentObject, you can also query it with LINQ."
  }
]
```
