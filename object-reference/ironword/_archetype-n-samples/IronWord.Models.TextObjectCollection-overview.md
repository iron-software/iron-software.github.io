<!--
N-Mid (TextObjectCollection : ObservableCollection<TextContent>; own members IsReadOnly, Items, ToJson, 2 ctors). Frame E (feature-fronted). IronWord.
Members verified 2026-06-23: TextObjectCollection(), TextObjectCollection(IList<TextContent>), IsReadOnly, Items, ToJson(). Implements IWordTextObjectCollection, IList<TextContent>.
Element type TextContent verified in IronWord.Models.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TextObjectCollection.html
-->

## Injected overview (Markdown)

A group of text runs that belong together, the words and their formatting collected as one list, is held by `TextObjectCollection`. It is an observable list of `TextContent`, so it gives you ordinary list access to a passage's runs while signalling changes as items are added or removed.

The collection derives from `ObservableCollection<TextContent>` and implements `IList<TextContent>`, so you index it, iterate it, and add or remove runs with the standard list operations. Construct an empty one with the default constructor, or pass an existing `IList<TextContent>` to seed it with runs you already have. The `Items` property exposes the backing list and `IsReadOnly` reports whether the collection accepts changes, while `ToJson` serializes the whole set of runs for logging or inspection. Because each entry is a `TextContent`, you reach a run's `Text` and its `Style` directly from the collection, editing words and formatting without unpacking them into a separate structure. Iterate the collection when you need to walk every run in order, and add to it as you assemble a passage from individual `TextContent` pieces.

```csharp
using IronWord.Models;

var runs = new TextObjectCollection();
runs.Add(new TextContent("First "));
runs.Add(new TextContent("second"));
```

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers building text in a document, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where text runs sit in the model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextObjectCollection - IronWord C# API Reference`
- v2 (human): `TextObjectCollection: Text Runs in C# Word`
- v3 (balanced): `TextObjectCollection | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Manage a list of text runs in C# Word docs with the IronWord TextObjectCollection class, an observable IList of TextContent with Items and ToJson.`
- v2 (human): `Collect Word text runs in C# with the IronWord TextObjectCollection class: an observable list of TextContent you can index, iterate, and serialize.`
- v3 (balanced): `Reference for the IronWord TextObjectCollection class in C#: an observable collection of TextContent runs with list access, Items, and ToJson.`

---

## Structured data

**TechArticle abstract**

> Holding a list of text runs in a C# Word document goes through the IronWord TextObjectCollection class. It is an observable collection of TextContent that implements IList, so you index, iterate, and add or remove runs with standard list operations. Construct it empty or from an existing IList of TextContent, read the backing list through Items and the IsReadOnly flag, and serialize the whole set with ToJson.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextObjectCollection live in the IronWord API?",
    "answer": "TextObjectCollection is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ObservableCollection of TextContent and implements IWordTextObjectCollection and IList of TextContent, so it offers standard list access to a document's text runs."
  }
]
```
