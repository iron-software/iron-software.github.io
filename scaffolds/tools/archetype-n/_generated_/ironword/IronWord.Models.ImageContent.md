<!--
N-Full / class. Frame E (feature-fronted). Base: ContentElement. Implements IWordImageObject. IronWord.
Verified: ctors ImageContent()/(AnyBitmap)/(Stream)/(String); props Image(IAnyImage),BoundingBox(RectangleF),Width,Height,Name,Id,Type(ImageType),Position(ElementPosition),ImageData,Index,DistanceFrom*,TextWrapBehavior,ZOrder,ZPosition; methods GetWidth/Height(MeasurementUnit),GetDistanceFrom*(MeasurementUnit),LoadFromFile,LoadFromStream. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.ImageContent.html
-->

## Injected overview (Markdown)

A picture inside a Word document, its bytes, size, and placement, lives on `ImageContent` in C#. It is the image element the document model exposes when you read a document's pictures back, and it carries everything needed to inspect or reposition that picture. It implements `IWordImageObject`, so code that walks document content can handle it through that contract. It is the read-side counterpart of `Image`, the element a developer builds when authoring a new picture.

Reach an `ImageContent` by enumerating the images in an already-loaded document, or construct one from a file path, a `Stream`, or an `IronSoftware.Drawing.AnyBitmap` to insert a picture. Like every other element it derives from `ContentElement`, so it shares the common `Index`, `Parent`, and removal behavior of the document tree, and its `Image` property holds the underlying `IAnyImage` that backs it.

Size and place the picture with `Width`, `Height`, and `Position` (an `ElementPosition`), and read `BoundingBox` (a `RectangleF`) for its absolute rectangle on the page. The `GetWidth(MeasurementUnit)` and `GetDistanceFromTop(MeasurementUnit)` family return those measurements in inches, centimeters, or points. `Type` reports the `ImageType`, `Name` and `Id` identify the picture, `ImageData` exposes the Base64 bytes, and `TextWrapBehavior`, `ZOrder`, and `ZPosition` govern how it layers against the surrounding text. `LoadFromFile(String)` and `LoadFromStream(Stream)` replace the image data after construction, which lets the same element point at a different picture without rebuilding the surrounding content. Adjusting `DistanceFromTop`, `DistanceFromLeft`, and their siblings sets the gap the picture keeps from nearby text, so a caption or paragraph does not crowd the image once the document is saved.

```csharp
var doc = new WordDocument("report.docx");
foreach (ImageContent picture in doc.ExtractImages())
{
    double widthInches = picture.GetWidth(MeasurementUnit.Inch);
    Console.WriteLine($"{picture.Name}: {widthInches} in");
}
```

The [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) reads each picture, the [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) inserts one, and the [add image example](https://ironsoftware.com/csharp/word/examples/add-image/) has a worked listing.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ImageContent Class - IronWord C# API`
- v2 (human): `ImageContent: Read Word Doc Images in C#`
- v3 (balanced): `ImageContent Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ImageContent is IronWord's C# image element in a Word document: read BoundingBox, Width, and Type, or build one from a file, stream, or AnyBitmap.`
- v2 (human): `Inspect and reposition a picture in a Word document in C# with the IronWord ImageContent class: read its size, type, and bounding box.`
- v3 (balanced): `Reference for the IronWord ImageContent class in C#: the document image element with size, type, and bounding box, implementing IWordImageObject.`

---

## Structured data

**TechArticle abstract**

> A picture inside a Word document in C# is represented by the IronWord ImageContent class, which carries its bytes, size, and placement. Reach one by enumerating a document's images or construct it from a file, Stream, or AnyBitmap. Read Width, Height, BoundingBox, and Type, convert measurements with GetWidth and the MeasurementUnit overloads, and layer it with ZOrder. ImageContent derives from ContentElement and implements IWordImageObject.

**FAQPage entries**

```json
[
  {
    "question": "Where does ImageContent live in the IronWord API?",
    "answer": "ImageContent is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ContentElement and implements IWordImageObject, so the document model exposes a document's pictures through it."
  },
  {
    "question": "How do you read an image from a Word document in C#?",
    "answer": "Enumerate the images in a loaded document to get ImageContent elements, then read Width, Height, and BoundingBox, or call GetWidth with a MeasurementUnit value for a specific unit. Type reports the ImageType and ImageData exposes the Base64 bytes."
  },
  {
    "question": "What is the difference between ImageContent and Image in IronWord?",
    "answer": "ImageContent is the image element the document model exposes when reading pictures back, and it implements IWordImageObject. Image is the element you build when authoring a new picture. Use ImageContent for inspection and Image for insertion."
  }
]
```
