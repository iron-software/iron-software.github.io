<!--
N-Full. Frame B (identity-by-role). IronWord. Rich surface; methods bucketed (compose / find-replace / style).
Members verified 2026-06-23: props Alignment, Index, LineSpacing, Runs, SpacingAfter, SpacingBefore, SpacingBetweenLines, Style, TextStyle, ...;
methods AddText(string)/AddText(TextContent), AddRun(Run), AddImage(...), AddShape(ShapeContent), FindText(string), ReplaceText(string,string), ExtractText, ExtractImages, SetStyle(ParagraphStyle), SetAlignment(TextAlignment).
Base ParentElement. Cross-ref verified: WordDocument.AddParagraph(Paragraph), WordDocument.Paragraphs; Run; ParagraphStyle.
Target: IronWord.Models.Paragraph.html
-->

## Injected overview (Markdown)

A `Paragraph` is the block of text you hold whenever you write a line, a heading, or a body passage into a Word document. It owns the runs of styled text on that line and the paragraph-level formatting (alignment, spacing, and style) applied to them, making it the everyday building block of document content.

You create one and fill it, then add it to a `WordDocument` with `AddParagraph`; the document's `Paragraphs` property holds the paragraphs already placed, and a table cell or section can hold paragraphs too. A paragraph reads as the unit between line breaks, so a developer building a document from text spends most of their time assembling and styling paragraphs.

Composing content is the first job: `AddText` appends text (a string or a `TextContent`), `AddRun` adds a prepared `Run` of styled characters, and `AddImage` and `AddShape` place a picture or drawing inline. The `Runs` property exposes the styled spans the paragraph already contains. Editing within a paragraph uses `FindText` to locate a string, `ReplaceText` to swap one for another, and `ExtractText` to read the plain text back. Formatting is applied through `Style` (a `ParagraphStyle`) or the shortcut `SetStyle`, with `Alignment` and `SetAlignment` for justification and `SpacingBefore`, `SpacingAfter`, and `LineSpacing` for vertical rhythm; `TextStyle` sets the default run style for the line, and `Index` reports the paragraph's position among its siblings. A paragraph with no explicit style inherits the document's current default, so set a style only where a line should differ from the body.

```csharp
var paragraph = new Paragraph();
paragraph.AddText("Quarterly summary");
paragraph.SetAlignment(TextAlignment.Center);
document.AddParagraph(paragraph);
```

The [add paragraph example](https://ironsoftware.com/csharp/word/examples/add-paragraph/) builds one from scratch, the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers writing content, and the [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) demonstrates find and replace.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Paragraph Class - IronWord C# API Reference`
- v2 (human): `Paragraph: Write Text in Word with C#`
- v3 (balanced): `Paragraph Class | IronWord .NET API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add and style text blocks in a Word document in C# with the IronWord Paragraph class: AddText, AddRun, SetStyle, SetAlignment, and FindText.`
- v2 (human): `Build the lines of a Word document in C# with the IronWord Paragraph class: add text and runs, set alignment and spacing, and find or replace text.`
- v3 (balanced): `Reference for the IronWord Paragraph class in C#: compose text with AddText and AddRun, apply a ParagraphStyle, and edit with FindText and ReplaceText.`

---

## Structured data

**TechArticle abstract**

> Writing and styling a block of text in a Word document in C# runs through the IronWord Paragraph class. AddText and AddRun compose its content, AddImage and AddShape place inline objects, and FindText and ReplaceText edit it. Apply a ParagraphStyle through Style or SetStyle, set justification with SetAlignment, and add the finished paragraph to a WordDocument with AddParagraph.

**FAQPage entries**

```json
[
  {
    "question": "Where does Paragraph live in the IronWord API?",
    "answer": "Paragraph is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ParentElement, and a WordDocument exposes the paragraphs added to it through its Paragraphs property."
  },
  {
    "question": "How do you add a paragraph of text in IronWord?",
    "answer": "Create a Paragraph, call AddText to append a string or AddRun to add a styled Run, then call AddParagraph on the WordDocument. Use SetAlignment and SetStyle to control justification and formatting before adding it."
  },
  {
    "question": "How do you find and replace text within a paragraph in IronWord?",
    "answer": "Call FindText to locate a string in the paragraph and ReplaceText to swap one string for another. ExtractText reads the paragraph's plain text back when you need to inspect its content."
  }
]
```
