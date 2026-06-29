<!--
N-Mid / interface (marker; extends IList<TextContent>, IJsonSerializable). Frame A. Implementor: TextObjectCollection. IronWord. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IWordTextObjectCollection.html
-->

## Injected overview (Markdown)

`IWordTextObjectCollection` gathers every text element in a Word document into one indexable group for C# code to read or rewrite. The contract extends `IList<TextContent>`, so the text runs behave like a standard list: index them, count them, add and remove entries, and iterate with `foreach`. Working against the contract keeps content-editing code independent of the concrete collection type while keeping full list semantics over the text.

The concrete implementor in IronWord is `TextObjectCollection`, which derives from `ObservableCollection<TextContent>` and is what code receives when it reaches a document's text. Each element is a `TextContent`, so every entry carries the text content and identity of a run; the collection layer adds the list operations. The contract also extends the serialization abstraction, so the text set round-trips with the document model. Iterate it to extract or inspect each run, or mutate it to insert and reorder text before saving.

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) builds the text up, and the [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) revises it.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IWordTextObjectCollection - IronWord C# API`
- v2 (human): `IWordTextObjectCollection in C# | IronWord`
- v3 (balanced): `IWordTextObjectCollection | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IWordTextObjectCollection is IronWord's C# list contract for document text, an IList of TextContent implemented by TextObjectCollection.`
- v2 (human): `Index and iterate every text run in a Word document in C# through IronWord's IWordTextObjectCollection, implemented by TextObjectCollection.`
- v3 (balanced): `Reference for the IronWord IWordTextObjectCollection interface in C#: an IList of TextContent implemented by TextObjectCollection.`

---

## Structured data

**TechArticle abstract**

> Gathering every text element in a Word document into one indexable group in C# runs through IronWord's IWordTextObjectCollection. It extends IList of TextContent, so the runs index, count, add, remove, and iterate like a standard list. The concrete implementor is TextObjectCollection, which derives from ObservableCollection of TextContent.

**FAQPage entries**

```json
[
  {
    "question": "Where does IWordTextObjectCollection live in the IronWord API?",
    "answer": "IWordTextObjectCollection is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IList of TextContent and the serialization abstraction, and is implemented by the TextObjectCollection class."
  }
]
```
