<!--
N-Full (class). Frame D. IronPPT.
Members verified 2026-06-23: Alignment(TextAlignment), Style(IParagraphStyle), Texts(List<IText>), TextStyle(ITextStyle),
AddText(IText)/(string), AddChild(params IContentElement[]), Clone(), SetAlignment(TextAlignment), SetStyle(IParagraphStyle).
ctor() and ctor(params IContentElement[]). Base ParentElement. Cross-class: Slide.AddParagraph(IParagraph) verified.
NS IronPPT.Models, IronPPT.dll. Target: IronPPT.Models.Paragraph.html
-->

## Injected overview (Markdown)

Adding a block of text to a slide in C# runs through `Paragraph`. It represents one paragraph of content, the unit a developer builds up with text and then drops onto a slide, and it is what holds the words, their alignment, and their styling together as a single addable element. A `Paragraph` is the everyday building block behind any slide that carries written content, distinct from a `Run`, which groups inline content inside richer text.

Create a paragraph with `new Paragraph()`, or pass content straight to the constructor that takes `params IContentElement[]`. Fill it by calling `AddText` with a string or an `IText`, then attach it to a slide with `Slides[index].AddParagraph(paragraph)` on a `PresentationDocument`. That places the paragraph in the render order of the slide, so the sequence of `AddParagraph` calls is the sequence the reader sees.

Styling is set through the `Style` property, an `IParagraphStyle`, which controls bullets, spacing, indentation, and line spacing for the whole paragraph, while `TextStyle` carries the default `ITextStyle` for its text. `Alignment` sets the horizontal `TextAlignment`, and `SetAlignment` and `SetStyle` offer the same in a chainable form that returns the paragraph. `Texts` exposes the contained `IText` items for inspection, `AddChild` appends content elements, and `Clone` copies the whole paragraph when a slide needs a repeated block.

```csharp
using IronPPT;
using IronPPT.Models;

var document = new PresentationDocument();
var paragraph = new Paragraph();
paragraph.AddText("First paragraph.");
document.Slides[0].AddParagraph(paragraph);
document.Save("paragraph.pptx");
```

The [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds and places one, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) applies styling, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) walks through text on a slide.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Paragraph Class - IronPPT C# API Reference`
- v2 (human): `Paragraph: Add Text Blocks to Slides in C#`
- v3 (balanced): `Paragraph Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a text block to a slide in C# with the IronPPT Paragraph class: call AddText, set Style and Alignment, and add it with AddParagraph.`
- v2 (human): `Build a slide paragraph in C# with the IronPPT Paragraph class: add text, set its style and alignment, then drop it onto a slide.`
- v3 (balanced): `Reference for the IronPPT Paragraph class in C#: hold text with AddText, set Style and Alignment, and place it with Slides.AddParagraph.`

---

## Structured data

**TechArticle abstract**

> Adding a block of text to a slide in C# runs through the IronPPT Paragraph class. Create one with new Paragraph, fill it with AddText, set its Style (an IParagraphStyle) and Alignment, then attach it with Slides.AddParagraph on a PresentationDocument. Texts exposes the contained IText items, SetAlignment and SetStyle chain, and Clone copies the whole paragraph for a repeated block.

**FAQPage entries**

```json
[
  {
    "question": "Where does Paragraph live in the IronPPT API?",
    "answer": "Paragraph is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from ParentElement and implements IParagraph along with the content and text-container contracts a slide element uses."
  },
  {
    "question": "How do you add a paragraph to a slide in C#?",
    "answer": "Create a Paragraph, call AddText to fill it, then call AddParagraph on a slide through Slides[index] of a PresentationDocument. The order of AddParagraph calls is the order the paragraphs appear on the slide."
  },
  {
    "question": "How do you style a paragraph in IronPPT?",
    "answer": "Assign the Style property, an IParagraphStyle, to control bullets, spacing, indentation, and line spacing, and set Alignment for horizontal alignment. SetStyle and SetAlignment apply the same settings in a chainable form that returns the paragraph."
  }
]
```
