<!--
N-Full (central class, 19 members). Frame B. IronPPT. Base Object.
Verified: ctors (), (params IContentElement[]), (string filePath); Slides/Shapes/TextBoxes/Texts/Paragraphs/Images (List<T> get); AddSlide(Slide=null)->Slide; AddText(string)->Text; AddImage(string,int)->IImage; AddTextBox(Shape)->Shape; AddParagraph(Paragraph)->Paragraph; Save(string); LogObjectTree()->string.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.PresentationDocument.html
-->

## Injected overview (Markdown)

`PresentationDocument` is the object you hold whenever you create, open, edit, or save a PowerPoint file with IronPPT. It models one `.pptx` presentation in memory: construct an empty one, load an existing file by path, or assemble a deck from content elements, then add slides and shapes to it and write it back out. This is the entry point a developer lands on from a search like "C# create PowerPoint" or "edit PPTX in .NET".

A developer obtains one in three ways. The parameterless constructor starts a fresh, empty presentation; the `PresentationDocument(string filePath)` constructor opens an existing `.pptx` from disk; and `PresentationDocument(params IContentElement[] children)` builds a document directly from content elements. From there the document exposes typed collections that mirror the deck's contents: `Slides`, `Shapes`, `TextBoxes`, `Texts`, `Paragraphs`, and `Images`, each a `List<T>` you can read or iterate.

Editing happens through the add methods, grouped by what they place. For slide structure, `AddSlide` appends a `Slide` (passing none adds a blank slide) and returns it. For text, `AddText` takes either a `Text` element or a plain `string` and returns the created `Text`, while `AddParagraph` adds a `Paragraph`. For visual content, `AddTextBox` places a `Shape` and `AddImage` inserts a picture onto a given slide index from an `Image`, an `AnyBitmap`, a `Stream`, or a file path, returning the resulting `IImage`. When the deck is ready, `Save(string filePath)` writes the `.pptx` to disk, and `LogObjectTree` dumps the document structure as a string for debugging.

```csharp
using IronPPT;

var ppt = new PresentationDocument();
ppt.AddSlide();
ppt.AddText("Quarterly Report");
ppt.Save("report.pptx");
```

The [create empty presentation example](https://ironsoftware.com/csharp/ppt/examples/create-empty-presentation/) starts a new deck, the [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) walks through slide structure, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers writing content onto a slide.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PresentationDocument - IronPPT C# API`
- v2 (human): `PresentationDocument: Edit PPTX in C#`
- v3 (balanced): `PresentationDocument Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Create, open, edit, and save PowerPoint files in C# with the IronPPT PresentationDocument class: add slides, text, shapes, and images, then Save.`
- v2 (human): `Build and edit PPTX files in C# with the IronPPT PresentationDocument class: open a deck, add slides and text, insert images, and save.`
- v3 (balanced): `Reference for the IronPPT PresentationDocument class in C#: construct or open a .pptx, add slides, text, and images, then Save to disk.`

---

## Structured data

**TechArticle abstract**

> Creating, opening, editing, and saving a PowerPoint file in C# runs through the IronPPT PresentationDocument class. Construct an empty deck, open an existing .pptx by file path, or build one from content elements, then read its Slides, Shapes, TextBoxes, Texts, Paragraphs, and Images collections. AddSlide, AddText, AddParagraph, AddTextBox, and AddImage place content, and Save writes the presentation back to disk.

**FAQPage entries**

```json
[
  {
    "question": "Where does PresentationDocument live in the IronPPT API?",
    "answer": "PresentationDocument is a class in the IronPPT namespace, shipped in IronPPT.dll, deriving from Object. It is the top-level object representing a single .pptx presentation."
  },
  {
    "question": "How do you create a PowerPoint file in C# with IronPPT?",
    "answer": "Construct a PresentationDocument, call AddSlide to add slides and AddText or AddTextBox to place content, then call Save with a file path to write the .pptx to disk. Pass an existing path to the constructor to open and edit a deck instead."
  },
  {
    "question": "How do you add an image to a slide with IronPPT?",
    "answer": "Call AddImage on the PresentationDocument, passing the picture and the target slide index. AddImage accepts an Image, an AnyBitmap, a Stream, or a file path string, and returns the inserted IImage."
  }
]
```
