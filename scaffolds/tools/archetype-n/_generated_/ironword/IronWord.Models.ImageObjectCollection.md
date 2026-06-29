<!--
N-Mid (3 members). Frame E. IronWord. Members verified 2026-06-23: Items, IsReadOnly, ToJson.
Base ObservableCollection<ImageContent>; implements IWordImageObjectCollection. Cross-ref: ImageContent verified on its own page.
Target: IronWord.Models.ImageObjectCollection.html
-->

## Injected overview (Markdown)

Every image pulled out of a Word document arrives grouped in an `ImageObjectCollection`, so you work with the whole set in one pass rather than chasing individual pictures. The collection holds `ImageContent` entries and behaves as an observable list, which means changes to it are tracked as you add or remove members.

You rarely construct one directly. It is the shape `ExtractImages` hands back when you read pictures from a document, body, or table cell, and you iterate it to inspect or re-save each `ImageContent`. Because it derives from `ObservableCollection<ImageContent>`, the usual list operations (indexing, `foreach`, `Count`) all apply. `Items` exposes the backing entries, `IsReadOnly` reports whether the collection can be modified, and `ToJson` serializes the set when you need a portable record of the images. Pair it with `ImageContent` for per-image detail and with the document extraction call that produces it.

```csharp
foreach (ImageContent image in document.ExtractImages())
    image.SaveAs("logo.png");
```

The [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) walks through pulling pictures from a document, and the [add image example](https://ironsoftware.com/csharp/word/examples/add-image/) shows the matching write path.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageObjectCollection - IronWord C# API`
- v2 (human): `ImageObjectCollection: Word Images in C#`
- v3 (balanced): `ImageObjectCollection Class | IronWord .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Work with extracted Word images in C# using the IronWord ImageObjectCollection class: an observable list of ImageContent returned by ExtractImages.`
- v2 (human): `Handle every image from a Word document at once in C# with the IronWord ImageObjectCollection: iterate, inspect, and re-save each ImageContent.`
- v3 (balanced): `Reference for the IronWord ImageObjectCollection class in C#: an observable collection of ImageContent returned when you extract images.`

---

## Structured data

**TechArticle abstract**

> Working with all of a Word document's extracted images at once in C# runs through the IronWord ImageObjectCollection class. ExtractImages returns this observable collection of ImageContent, which you iterate to inspect or re-save each picture. It derives from ObservableCollection of ImageContent, so indexing, foreach, and Count apply, and ToJson serializes the set.

**FAQPage entries**

```json
[
  {
    "question": "Where does ImageObjectCollection live in the IronWord API?",
    "answer": "ImageObjectCollection is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ObservableCollection of ImageContent and implements IWordImageObjectCollection, and ExtractImages returns it."
  },
  {
    "question": "How do you read every image from a Word document in C#?",
    "answer": "Call ExtractImages to get an ImageObjectCollection, then iterate it with foreach. Each entry is an ImageContent you can inspect or save. Use ToJson on the collection when you need a serialized record of the images."
  }
]
```
