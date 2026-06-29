<!--
N-Full / class. Frame F (imperative). Base: ContentElement. IronWord.
Verified: ctors Image()/Image(AnyBitmap)/Image(Stream)/Image(String); props Width,Height,Name,Type(ImageType),Position(ElementPosition),WrapText,Id,Index,ImageData,DistanceFrom*; methods Clone(),LoadFromFile,LoadFromStream,Get/SetWidth/Height/DistanceFrom*(Units). Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Image.html
-->

## Injected overview (Markdown)

Reach for `Image` to place a picture into a Word document and control how it sits on the page in C#. It is the element a developer builds from a file, a stream, or an in-memory bitmap and then adds to the document body, carrying its own size, position, and text-wrap settings. It is the close sibling of `ImageContent`, the image element the document model exposes when you read pictures back out; `Image` is the one you reach for when authoring.

Create one with a path through `new Image("logo.png")`, with a `Stream`, or from an `IronSoftware.Drawing.AnyBitmap`; a parameterless `Image()` is available when properties are set afterward. The element then attaches to the document content where pictures are inserted, alongside the paragraphs and tables that make up the body. As a `ContentElement`, it shares the common `Clone()`, `Index`, and `Parent` behavior of every element in the document tree.

Size the picture with `Width` and `Height`, name it with `Name`, and set its placement with `Position` (an `ElementPosition`) and `WrapText`. Because those values are in points by default, the `GetWidth(Units)` and `SetWidth(double, Units)` pairs, along with their distance equivalents like `SetDistanceFromTop(double, Units)`, convert to and from other measurement units. `Type` reports the `ImageType`, `ImageData` exposes the encoded bytes, and `LoadFromFile(String)` or `LoadFromStream(Stream)` swap in new image data after construction. `Clone()` returns a copy as a `ContentElement` for reuse elsewhere in the document.

```csharp
var image = new Image("logo.png");
image.Width = 120;
image.Height = 80;
image.SetDistanceFromTop(1, Units.inch);
```

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) walks through inserting a picture, the [add image example](https://ironsoftware.com/csharp/word/examples/add-image/) has a worked listing, and the [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) reads pictures back out.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Image Class - IronWord C# API Reference`
- v2 (human): `Image: Add a Picture to a Word Doc in C#`
- v3 (balanced): `Image Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a picture to a Word document in C# with the IronWord Image class: build from a file, stream, or AnyBitmap and set Width, Height, and Position.`
- v2 (human): `Place an image in a Word document in C# with the IronWord Image class: load from a file, stream, or bitmap and control its size and position.`
- v3 (balanced): `Reference for the IronWord Image class in C#: add a picture to a Word document from a file, stream, or AnyBitmap, with size and placement.`

---

## Structured data

**TechArticle abstract**

> Placing a picture into a Word document in C# uses the IronWord Image class. Build one from a file path, a Stream, or an AnyBitmap, then set Width, Height, Position, and WrapText before adding it to the document. The GetWidth and SetWidth pairs convert between measurement units, and LoadFromFile or LoadFromStream swap in new data. Image is the authoring sibling of ImageContent, the element exposed when reading pictures back.

**FAQPage entries**

```json
[
  {
    "question": "Where does Image live in the IronWord API?",
    "answer": "Image is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ContentElement, so it shares Clone, Index, and Parent with the other document elements, and is added to the document body where pictures are inserted."
  },
  {
    "question": "How do you add an image to a Word document in C#?",
    "answer": "Create an Image from a file path, a Stream, or an AnyBitmap, set Width, Height, and Position, and add it to the document content. Use SetDistanceFromTop and the other Set methods with a Units value to position it in inches or another unit."
  },
  {
    "question": "What is the difference between Image and ImageContent in IronWord?",
    "answer": "Image is the element you build to author a picture into a document. ImageContent is the image element the document model exposes when you read pictures back, and it implements IWordImageObject. Use Image when adding pictures and ImageContent when inspecting existing ones."
  }
]
```
