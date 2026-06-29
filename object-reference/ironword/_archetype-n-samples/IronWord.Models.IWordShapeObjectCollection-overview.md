<!--
N-Mid / interface (marker; extends IList<ShapeContent>, IJsonSerializable). Frame E. Implementor: ShapeObjectCollection. IronWord. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IWordShapeObjectCollection.html
-->

## Injected overview (Markdown)

Every drawn path in a Word document, gathered as one indexable group in C#, is exposed through `IWordShapeObjectCollection`. The contract extends `IList<ShapeContent>`, so the shapes behave like a standard list: index them, count them, add and remove entries, and iterate them with `foreach`. Working against the contract keeps document code independent of the concrete collection while preserving full list semantics over the shapes.

The concrete implementor in IronWord is `ShapeObjectCollection`, which derives from `ObservableCollection<ShapeContent>` and is what code receives when it reaches a document's shapes. Each element is a `ShapeContent`, so every entry carries the geometry, color, and placement of a shape; the collection layer adds the list operations on top. The contract also extends the serialization abstraction, so the shape set round-trips with the document model. Iterate it to inspect each drawn object, or mutate it to add and reorder shapes before saving.

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the element model these shapes sit inside.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IWordShapeObjectCollection - IronWord C# API`
- v2 (human): `IWordShapeObjectCollection in C# | IronWord`
- v3 (balanced): `IWordShapeObjectCollection | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IWordShapeObjectCollection is IronWord's C# list contract for document shapes, an IList of ShapeContent implemented by ShapeObjectCollection.`
- v2 (human): `Index and iterate every shape in a Word document in C# through IronWord's IWordShapeObjectCollection, implemented by ShapeObjectCollection.`
- v3 (balanced): `Reference for the IronWord IWordShapeObjectCollection interface in C#: an IList of ShapeContent implemented by ShapeObjectCollection.`

---

## Structured data

**TechArticle abstract**

> Gathering every drawn path in a Word document as one indexable group in C# runs through IronWord's IWordShapeObjectCollection. It extends IList of ShapeContent, so the shapes index, count, add, remove, and iterate like a standard list. The concrete implementor is ShapeObjectCollection, which derives from ObservableCollection of ShapeContent.

**FAQPage entries**

```json
[
  {
    "question": "Where does IWordShapeObjectCollection live in the IronWord API?",
    "answer": "IWordShapeObjectCollection is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IList of ShapeContent and the serialization abstraction, and is implemented by the ShapeObjectCollection class."
  }
]
```
