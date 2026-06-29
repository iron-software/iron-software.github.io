<!--
N-Full (class; props BuiltInColors/BuiltInStyles/DefaultParagraphStyle/DefaultTableStyle/DefaultTextStyle; AddChild; inherited Texts/Tables/Children). Frame B lead / Frame C abstract. IronWord. Remark: equivalent to body of Word doc.
Verified 2026-06-23: Container(), Container(params ContentElement[]); BuiltInColors, BuiltInStyles, DefaultParagraphStyle (ParagraphStyle), DefaultTableStyle (TableStyle), DefaultTextStyle (TextStyle); AddChild(params IWordDocumentObject[]); inherited Texts, Tables, Children. Base ParentElement. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Container.html
-->

## Injected overview (Markdown)

`Container` is the object that holds the body of a Word document, the paragraphs, tables, and images that make up its content. A developer works with it as the top-level home for content elements, adding children to it and reading back the text and tables it holds, and it also carries the document-wide defaults that styling falls back to.

A container is created with `new Container()`, or with `new Container(params ContentElement[])` to seed it with an initial set of child elements in one call. Content is added through `AddChild`, which accepts one or more `IWordDocumentObject` items such as paragraphs, runs, images, shapes, and text. As the remarks note, paragraphs and other content added this way are placed into the last section in the document, so the container manages where new content lands.

Beyond holding content, a container owns the document's default styles and color and style banks. `DefaultParagraphStyle`, `DefaultTableStyle`, and `DefaultTextStyle` set the baseline a `ParagraphStyle`, `TableStyle`, or `TextStyle` falls back to when an element does not override it, while `BuiltInColors` and `BuiltInStyles` expose the registered colors and styles available across the document. From its `ParentElement` base it also inherits `Texts`, `Tables`, and `Children` for reading the content back, plus `LogObjectTree` for inspecting the structure during development. Setting the defaults once keeps formatting consistent without repeating style assignments on every element.

```csharp
var body = new Container();
body.DefaultTextStyle = new TextStyle();
body.AddChild(new Paragraph());
```

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) walks through how content elements nest, the [log object tree example](https://ironsoftware.com/csharp/word/examples/log-object-tree/) inspects the structure, and the [add paragraph example](https://ironsoftware.com/csharp/word/examples/add-paragraph/) adds content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Container - IronWord C# API Reference`
- v2 (human): `Container: The Word Document Body in C#`
- v3 (balanced): `Container Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Hold the body of a C# Word document with the IronWord Container class. Add child content with AddChild and set document default styles.`
- v2 (human): `Work with the body of a C# Word document through the IronWord Container class: add paragraphs and tables and set document-wide defaults.`
- v3 (balanced): `Reference for the IronWord Container class in C#: add content with AddChild and set DefaultParagraphStyle, DefaultTableStyle, and DefaultTextStyle.`

---

## Structured data

**TechArticle abstract**

> When a Word document needs a body to hold its content, IronWord's Container is that home for paragraphs, tables, and images. Construct one with new Container() or seed it with child elements, then add content through AddChild. It also owns the document defaults, DefaultParagraphStyle, DefaultTableStyle, and DefaultTextStyle, and the BuiltInColors and BuiltInStyles banks, and inherits Texts, Tables, and Children for reading content back.

**FAQPage entries**

```json
[
  {
    "question": "Where does Container live in the IronWord API?",
    "answer": "Container is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ParentElement and represents the body of a Word document."
  },
  {
    "question": "How do you add content to a Word document body in C#?",
    "answer": "Call AddChild on the Container, passing paragraphs, runs, images, shapes, or text. New content is added to the last section in the document. You can also seed the container with child elements through its constructor."
  },
  {
    "question": "How do you set default styles for a Word document in C#?",
    "answer": "Assign DefaultParagraphStyle, DefaultTableStyle, and DefaultTextStyle on the Container. Elements that do not override their own style fall back to these defaults, keeping formatting consistent across the document."
  }
]
```
