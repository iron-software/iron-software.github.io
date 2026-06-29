<!--
N-Full (text run container, rich surface). Frame E (feature/outcome-fronted). IronWord.Models.
Verified 2026-06-23: public class Run : ParentElement, IDrawContainer, ITextContainer, IRun, IWordDocumentObject, IDocumentObject, ICloneable, IParent<IWordDocumentObjectCollection, IWordDocumentObject>.
Props: Color, Font, FontName, FontSize, Index, IsBold, IsItalic, Style.
Methods (buckets): text(AddText, FindText, ReplaceText, ExtractText, Remove), image(AddImage x4, ExtractImages), shape(AddShape, ExtractShapes).
Cross-ref verified: Paragraph.Runs (List<Run>), Paragraph.AddRun(Run). AddImage(AnyBitmap) from IronSoftware.Drawing.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Run.html
-->

## Injected overview (Markdown)

Inline formatting inside a paragraph, a span of text that all shares one font, color, and weight, lives on `Run`. It is the unit a developer edits when part of a line should look different from the rest, such as a bold phrase or a colored term within an otherwise plain sentence. A run holds text, images, and shapes that flow inline, so it is the level at which character-level styling and inline content are applied.

A paragraph owns its runs: a `Paragraph` exposes its `Runs` as a `List<Run>` and grows with `AddRun`, so a developer obtains a run by adding one to a paragraph or by reading the runs already there. This places `Run` one level below the paragraph in the document model, between the paragraph and the individual `TextContent`, `ImageContent`, and `ShapeContent` items it carries.

Character styling sits on the properties: `FontName`, `FontSize`, `Color`, `IsBold`, and `IsItalic` set the look directly, while `Font` and `Style` apply a fuller font or named style, and `Index` reports the run's position. The methods divide into three jobs. For text, `AddText` appends a string or a `TextContent`, `FindText` locates a phrase, `ReplaceText` swaps one string for another, `ExtractText` reads the run's text back, and `Remove` deletes a `TextContent`. For images, the `AddImage` overloads accept a file path, a `Stream`, an `AnyBitmap`, or an `ImageContent`, and `ExtractImages` returns the inline images. For shapes, `AddShape` inserts a `ShapeContent` and `ExtractShapes` reads them back. Set the styling properties before or after adding content; they apply to everything the run carries.

```csharp
using IronWord.Models;

var run = new Run();
run.IsBold = true;
run.FontSize = 14;
run.AddText("Quarterly Report");
```

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers placing text, the [style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) walks through formatting it, and the [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) demonstrates finding and replacing.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Run Class - IronWord C# API`
- v2 (human): `Run: Inline Text Formatting in Word with C#`
- v3 (balanced): `Run Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Format inline text in a Word document in C# with the IronWord Run class: set FontName, FontSize, Color, IsBold, and add text, images, or shapes.`
- v2 (human): `Style a span of text inside a paragraph in C# with the IronWord Run class: set the font, color, and weight, and add inline images or shapes.`
- v3 (balanced): `Reference for the IronWord Run class in C#: the inline span obtained from a Paragraph, carrying text, images, and shapes with character styling.`

---

## Structured data

**TechArticle abstract**

> Formatting an inline span of text in a Word document in C# runs through the IronWord Run class. A Paragraph exposes its Runs and grows with AddRun. FontName, FontSize, Color, IsBold, and IsItalic style the span, while AddText, AddImage, and AddShape add inline content and ExtractText, ExtractImages, and ExtractShapes read it back. FindText and ReplaceText edit the run's text.

**FAQPage entries**

```json
[
  {
    "question": "Where does Run live in the IronWord API?",
    "answer": "Run is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ParentElement and implements ITextContainer and IRun, sitting between a Paragraph and the inline TextContent, ImageContent, and ShapeContent it carries."
  },
  {
    "question": "How do you add a styled run of text in C#?",
    "answer": "Create a Run, set FontName, FontSize, Color, IsBold, or IsItalic, then call AddText with the string. Add the run to a paragraph with Paragraph.AddRun, or read existing runs from the paragraph's Runs list."
  },
  {
    "question": "Can a Run hold images and shapes as well as text?",
    "answer": "Yes. The AddImage overloads accept a file path, a Stream, an AnyBitmap, or an ImageContent, and AddShape inserts a ShapeContent. ExtractImages and ExtractShapes read that inline content back from the run."
  }
]
```
