<!--
N-Mid (observable collection, 5 declared members). Frame D (task-gerund; sibling PathSegmentCollection uses A). IronWord.Models.
Verified 2026-06-23: public class ShapeObjectCollection : ObservableCollection<ShapeContent>, IWordShapeObjectCollection, IList<ShapeContent>, ICollection<ShapeContent>, IEnumerable<ShapeContent>, IEnumerable, IJsonSerializable.
Ctors: (), (IList<ShapeContent>). Props: IsReadOnly, Items. Methods: ToJson().
Base ObservableCollection<ShapeContent>; Add/index inherited from base.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ShapeObjectCollection.html
-->

## Injected overview (Markdown)

Holding the inline shapes that belong together in a Word document runs through `ShapeObjectCollection`. It gathers a group of `ShapeContent` items, the figures embedded in the document's content, into one observable list a developer can build up, iterate, and serialize. It is the container a developer works through when several shapes are managed as a set rather than one at a time.

Because it derives from `ObservableCollection<ShapeContent>`, the collection notifies on change and supports the usual list operations inherited from that base, so a developer adds, indexes, and enumerates shapes through the standard collection surface. A developer either starts an empty collection or seeds one from an existing `IList<ShapeContent>` passed to the constructor, which fits the collection into the shape-building flow alongside the runs and content that carry those shapes.

Construct a `ShapeObjectCollection` with its parameterless constructor or from an `IList<ShapeContent>`, then add and iterate `ShapeContent` items using the inherited list operations. `Items` exposes the underlying list and `IsReadOnly` reports whether the collection can be modified, while `ToJson` serializes the whole set to JSON for storage or transport. Treat it as a typed, observable group of inline shapes: build the set, enumerate it to read each `ShapeContent`, and serialize when the collection needs to be persisted.

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) covers placing visual content, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how shapes fit the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ShapeObjectCollection - IronWord C# API`
- v2 (human): `ShapeObjectCollection: Manage Word Shapes in C#`
- v3 (balanced): `ShapeObjectCollection Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Manage a group of inline Word shapes in C# with the IronWord ShapeObjectCollection class: an observable list of ShapeContent with ToJson.`
- v2 (human): `Hold and iterate a set of inline shapes in a Word document in C# with the IronWord ShapeObjectCollection class, then serialize with ToJson.`
- v3 (balanced): `Reference for the IronWord ShapeObjectCollection class in C#: an observable collection of ShapeContent with Items, IsReadOnly, and ToJson.`

---

## Structured data

**TechArticle abstract**

> Managing a group of inline shapes in a Word document in C# runs through the IronWord ShapeObjectCollection class. It is an observable collection of ShapeContent: construct it empty or from an IList of ShapeContent, add and iterate items through the inherited list operations, read the underlying list through Items, and serialize the set with ToJson.

**FAQPage entries**

```json
[
  {
    "question": "Where does ShapeObjectCollection live in the IronWord API?",
    "answer": "ShapeObjectCollection is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ObservableCollection of ShapeContent and implements IWordShapeObjectCollection, so it holds a group of inline shapes as an observable list."
  }
]
```
