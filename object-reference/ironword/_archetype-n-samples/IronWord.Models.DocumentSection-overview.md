<!--
N-Full (class; >10 methods bucketed: add/extract/find-replace; margin + dimension props; PageSetup, Paragraphs, Runs). Frame D lead / Frame A abstract. IronWord.
Verified 2026-06-23: DocumentSection(params ContentElement[]); AddImage(AnyBitmap/ImageContent/Stream/string)->ImageContent, AddParagraph(Paragraph), AddRun(Run), AddShape(ShapeContent), AddTable(Table), AddText(TextContent/string), AddMultiLevelTextList; ExtractImages, ExtractShapes, ExtractText, FindText(string)->TextContent, ReplaceText(string,string), Remove(TextContent)->bool; props BottomMargin/TopMargin/LeftMargin/RightMargin/Height/Width (float, get), Index (int), PageSetup (PageSetup), Paragraphs/Runs/MultiLevelTextLists (List). Base ParentElement. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.DocumentSection.html
-->

## Injected overview (Markdown)

Grouping content under one page layout in a Word document runs through `DocumentSection`. It holds the paragraphs, runs, tables, and images that share a section's margins and page setup, and gives a developer the methods to add, extract, and edit that content in place.

A section is created with `new DocumentSection(params ContentElement[])`, passing the child elements it should start with. Content methods fall into a few functional groups. The `Add` family puts content in: `AddParagraph`, `AddRun`, `AddText`, `AddTable`, `AddShape`, `AddMultiLevelTextList`, and the overloaded `AddImage` (from an `AnyBitmap`, an `ImageContent`, a `Stream`, or a file path), each returning the element it added. The `Extract` family reads content back out: `ExtractText` returns the section's text, `ExtractImages` returns its `ImageContent` items, and `ExtractShapes` returns its shapes. For targeted edits, `FindText` locates the first `TextContent` matching a string, `ReplaceText` swaps every occurrence of one string for another, and `Remove` takes out a given text element.

Layout and content read-back live on the section's properties. `PageSetup` carries the headers, footers, and page configuration, while `BottomMargin`, `TopMargin`, `LeftMargin`, and `RightMargin`, along with `Height` and `Width`, report the section's measurements in points. The `Paragraphs`, `Runs`, and `MultiLevelTextLists` lists expose the section's content by element type, and `Index` gives its position among the document's sections. Because adding, extracting, and editing all operate on the same section object, a developer can build a section, read its current state, and revise it without leaving that object.

```csharp
var section = new DocumentSection();
section.AddParagraph(new Paragraph());
section.AddText("Quarterly summary");
```

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers placing text, the [add image how-to](https://ironsoftware.com/csharp/word/how-to/add-image/) handles images, and the [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) builds tables within a section.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocumentSection - IronWord C# API Reference`
- v2 (human): `DocumentSection: Word Sections in C#`
- v3 (balanced): `DocumentSection | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Group content under one page layout in C# Word with the IronWord DocumentSection class. Add, extract, and replace text, images, and tables.`
- v2 (human): `Manage a section of a C# Word document with the IronWord DocumentSection class: add paragraphs, images, and tables, then extract or edit them.`
- v3 (balanced): `Reference for the IronWord DocumentSection class in C#: add content with AddParagraph and AddImage, set PageSetup and margins, and extract text.`

---

## Structured data

**TechArticle abstract**

> DocumentSection groups content under one page layout in a C# Word document with IronWord, holding the paragraphs, runs, tables, and images that share a section's margins and page setup. Add content with AddParagraph, AddText, AddTable, AddShape, and the overloaded AddImage; read it back with ExtractText, ExtractImages, and ExtractShapes; and edit it with FindText, ReplaceText, and Remove. PageSetup, the margin properties, and the Paragraphs and Runs lists round out the section.

**FAQPage entries**

```json
[
  {
    "question": "Where does DocumentSection live in the IronWord API?",
    "answer": "DocumentSection is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ParentElement and implements the section interfaces such as IDocumentSection."
  },
  {
    "question": "How do you add content to a section of a Word document in C#?",
    "answer": "Use the Add methods on DocumentSection: AddParagraph, AddRun, AddText, AddTable, AddShape, AddMultiLevelTextList, or one of the AddImage overloads. Each returns the element it added so you can keep configuring it."
  },
  {
    "question": "How do you find and replace text in a Word section in C#?",
    "answer": "Call FindText to locate the first TextContent matching a string, or ReplaceText to swap every occurrence of one string for another. ExtractText returns all the section's text, and Remove takes out a specific text element."
  }
]
```
