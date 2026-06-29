<!--
N-Full (class : Shape, ...ITextBox...; bucketed). Frame C (lead), Frame A (abstract). Sibling of Shape (Shape uses Frame D) -> different frame. IronPPT.
Verified 2026-06-23: Paragraphs, Texts (List<I...> get), Style (IParagraphStyle); AddChild, AddImage (4 overloads), AddParagraph, AddShape, AddText (2 overloads). Extends Shape so inherits FillColor/OutlineColor/Type (cross-ref WARN ok).
Target: IronPPT.Models.TextBox.html
-->

## Injected overview (Markdown)

When a slide needs a bordered container that holds paragraphs of text, `TextBox` provides it. It is a shape that carries text, combining a shape's placement and styling with a text container's ability to hold and format multiple paragraphs, so a developer can lay out body copy, captions, and callouts as discrete blocks.

A `TextBox` is created and added to a slide, then filled through its `Add` methods. Text content uses `AddText` (a `string` or an `IText`) and `AddParagraph`; nested graphics use `AddShape` and the four `AddImage` overloads (a path, a `Stream`, an `AnyBitmap`, or an existing `IImage`); and `AddChild` adds raw content elements. The text it holds is read back through the `Paragraphs` and `Texts` collection properties, each a `List` of the matching interface.

Paragraph-level formatting for the whole box is set through `Style`, an `IParagraphStyle` that applies spacing and alignment across the box's paragraphs in one place rather than per paragraph. Because `TextBox` derives from `Shape`, it also carries the shape members for fill, outline, and geometry, so the same object positions itself on the slide and styles its border. That inheritance is what lets a caption sit in a bordered, filled frame and move as a single unit when the layout changes. Add the paragraphs first, then set `Style` for shared formatting, and reach for `TextBox` over loose text whenever the content should live in one movable, styleable frame.

```csharp
var textBox = new TextBox();
textBox.AddParagraph(paragraph);
textBox.AddText("Caption");
slide.AddShape(textBox);
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places text on a slide, the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds the paragraphs a text box holds, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles them.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextBox Class - IronPPT C# API Reference`
- v2 (human): `TextBox: Text Containers on Slides in C#`
- v3 (balanced): `TextBox Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a text container to a slide in C# with the IronPPT TextBox class: AddParagraph and AddText, read Paragraphs and Texts, and set a Style.`
- v2 (human): `Hold paragraphs in a bordered frame on a slide in C# with the IronPPT TextBox class: a shape that carries and styles multiple paragraphs.`
- v3 (balanced): `Reference for the IronPPT TextBox class in C#: a Shape that holds text, with AddParagraph and AddText, Paragraphs and Texts, and a paragraph Style.`

---

## Structured data

**TechArticle abstract**

> TextBox is a shape that carries text in IronPPT for C#, combining placement and styling with a text container that holds multiple paragraphs. AddText and AddParagraph fill it, the AddImage overloads and AddShape nest graphics, the Paragraphs and Texts collections read it back, and Style applies paragraph formatting across the box.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextBox live in the IronPPT API?",
    "answer": "TextBox is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Shape and implements ITextBox, IShape, IHasParagraphStyle, and related interfaces."
  },
  {
    "question": "How do you add text to a text box in C#?",
    "answer": "Call AddParagraph or AddText on the TextBox, then read the content back through its Paragraphs and Texts collections. Set the Style property to apply paragraph formatting across the whole box."
  },
  {
    "question": "How is TextBox different from Shape in IronPPT?",
    "answer": "TextBox derives from Shape, so it has a shape's fill, outline, and geometry, but it also holds paragraphs of text through AddParagraph and AddText and a paragraph Style. Use Shape for a plain graphic and TextBox when the graphic must contain text."
  }
]
```
