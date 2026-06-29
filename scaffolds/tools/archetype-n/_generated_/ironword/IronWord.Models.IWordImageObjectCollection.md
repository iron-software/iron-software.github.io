<!--
N-Mid / interface (marker; extends IList<ImageContent>, IJsonSerializable). Frame D. Implementor: ImageObjectCollection. IronWord. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IWordImageObjectCollection.html
-->

## Injected overview (Markdown)

Holding every image in a Word document as one indexable group in C# runs through `IWordImageObjectCollection`. The contract extends `IList<ImageContent>`, so the pictures behave like a standard list: index them, count them, add and remove entries, and iterate with `foreach`. Treating the group through this contract keeps document-traversal code independent of the concrete collection type while still giving full list semantics over the images.

The concrete implementor in IronWord is `ImageObjectCollection`, which derives from `ObservableCollection<ImageContent>` and is what code receives when it reaches a document's images. Because each element is an `ImageContent`, every entry exposes the sizing, placement, and identity members of an image; the collection itself adds the list operations. The contract also extends the serialization abstraction, so the image set round-trips with the document model. Iterate it to extract every picture, or mutate it to add and reorder images before saving.

The [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) reads each picture in turn, and the [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) builds the set up.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IWordImageObjectCollection - IronWord C# API`
- v2 (human): `IWordImageObjectCollection in C# | IronWord`
- v3 (balanced): `IWordImageObjectCollection | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IWordImageObjectCollection is IronWord's C# list contract for document images, an IList of ImageContent implemented by ImageObjectCollection.`
- v2 (human): `Index and iterate every image in a Word document in C# through IronWord's IWordImageObjectCollection, implemented by ImageObjectCollection.`
- v3 (balanced): `Reference for the IronWord IWordImageObjectCollection interface in C#: an IList of ImageContent implemented by ImageObjectCollection.`

---

## Structured data

**TechArticle abstract**

> Holding every image in a Word document as one indexable group in C# runs through IronWord's IWordImageObjectCollection. It extends IList of ImageContent, so the pictures index, count, add, remove, and iterate like a standard list. The concrete implementor is ImageObjectCollection, which derives from ObservableCollection of ImageContent.

**FAQPage entries**

```json
[
  {
    "question": "Where does IWordImageObjectCollection live in the IronWord API?",
    "answer": "IWordImageObjectCollection is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IList of ImageContent and the serialization abstraction, and is implemented by the ImageObjectCollection class."
  }
]
```
