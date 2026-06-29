<!--
N-Full / interface. Frame B lead, Frame C abstract. IronWord. Verified 2026-06-23.
Members: AddImage(AnyBitmap), AddImage(ImageContent), AddImage(Stream), AddImage(string), AddShape(ShapeContent), ExtractImages(), ExtractShapes().
Implementors verified: DocumentSection, Paragraph, Run (all declare IDrawContainer).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Abstract.Interfaces.IDrawContainer.html
-->

## Injected overview (Markdown)

`IDrawContainer` is the contract you reach through whenever a part of a Word document needs to hold pictures and drawn shapes. It is what lets the same drawing calls work on a paragraph, a run, or a whole section, so code that places a logo or a callout box does not care which element it is writing into. Anything that draws is confused with the text-only `ITextContainer`; a draw container handles images and shapes, while a text container handles runs and strings.

A developer rarely names this interface directly. You receive it through the concrete types that implement it: `Paragraph`, `Run`, and `DocumentSection` all satisfy `IDrawContainer`, so you obtain one simply by holding a paragraph or section and calling its drawing methods. The interface belongs to the build-and-edit stage of the render workflow, after the document is open and before it is saved, at the point where visual content is added alongside the words.

The everyday members are `AddImage` and `AddShape`, both of which return the created content so you can position or style it. `AddImage` has four overloads, accepting an `AnyBitmap`, an existing `ImageContent`, a `Stream`, or a file-path `string`, and each returns an `ImageContent`. `AddShape` takes a `ShapeContent` and returns it. To read drawings back out, `ExtractImages` returns a `List<ImageContent>` and `ExtractShapes` returns a `List<ShapeContent>`, which is how you audit or relocate the visuals already in a container.

```csharp
IDrawContainer container = paragraph;
ImageContent logo = container.AddImage("logo.png");
```

The [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) walks through placing a picture, and the [extract images how-to](https://ironsoftware.com/csharp/word/how-to/extract-images/) pulls them back out. The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where containers sit in the object model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IDrawContainer Interface - IronWord C# API`
- v2 (human): `IDrawContainer: Add Images & Shapes in C#`
- v3 (balanced): `IDrawContainer Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IDrawContainer is the IronWord C# contract for adding images and shapes: AddImage, AddShape, ExtractImages, implemented by Paragraph, Run, and DocumentSection.`
- v2 (human): `Add pictures and drawn shapes to a Word document in C# through the IronWord IDrawContainer contract, satisfied by Paragraph, Run, and DocumentSection.`
- v3 (balanced): `Reference for the IronWord IDrawContainer interface in C#: the drawing contract with AddImage and AddShape, implemented by Paragraph and DocumentSection.`

---

## Structured data

**TechArticle abstract**

> When a paragraph, run, or section of a Word document needs pictures or drawn shapes, IDrawContainer is the IronWord contract that supplies them in C#. AddImage takes an AnyBitmap, ImageContent, Stream, or file path and returns an ImageContent, AddShape adds a ShapeContent, and ExtractImages and ExtractShapes read the drawings back. Paragraph, Run, and DocumentSection implement it.

**FAQPage entries**

```json
[
  {
    "question": "Where does IDrawContainer live in the IronWord API?",
    "answer": "IDrawContainer is an interface in the IronWord.Models.Abstract.Interfaces namespace, shipped in IronWord.dll. It is a standalone contract that does not extend another interface, and it declares the AddImage, AddShape, ExtractImages, and ExtractShapes members."
  },
  {
    "question": "What implements IDrawContainer in IronWord?",
    "answer": "Paragraph, Run, and DocumentSection all implement IDrawContainer, so you get one by holding any of those elements. Code that adds a logo or shape calls AddImage or AddShape on them rather than naming the interface directly."
  },
  {
    "question": "How do you add an image to a Word document in C#?",
    "answer": "Call AddImage on a draw container such as a Paragraph, passing a file path, Stream, AnyBitmap, or existing ImageContent. It returns an ImageContent you can position or style. AddShape works the same way for drawn shapes."
  }
]
```
