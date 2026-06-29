<!--
N-Full / interface. Frame C. Implementor: TextBox. IronPPT. Members verified 2026-06-23.
ITextBox : IContentElement, IHasParagraphStyle. Target: IronPPT.Interfaces.ITextBox.html
-->

## Injected overview (Markdown)

When a slide needs a box that holds words and other content, `ITextBox` is the contract for it. It represents a text box placed on a slide and gives a developer one surface for filling that box with text, paragraphs, images, and shapes, then reading those contents back, so building a captioned panel or a bulleted callout goes through a single object.

A developer receives an `ITextBox` rather than constructing it directly: `ISlide.TextBoxes` is a `List<ITextBox>`, and `TextBox` is the concrete implementor, a `Shape` that also carries text. Because a text box is a kind of shape, it brings the shape contract along with the text-box members, so the same object can be moved and recolored as a shape and filled with content as a text box. That dual nature is why a caption panel and the box behind it are one object, not two.

The add methods build the box up: `AddText` accepts a `string` or an `IText`, `AddParagraph` takes an `IParagraph`, `AddImage` has overloads for a path, a `Stream`, an `AnyBitmap`, or an `IImage`, `AddShape` adds an `IShape`, and `AddChild` attaches several `IContentElement` items at once. The two collections read the box back: `Texts` is a `List<IText>` and `Paragraphs` is a `List<IParagraph>`. The default paragraph formatting for the box comes through the `Style` member inherited from `IHasParagraphStyle`, so text added to the box picks up a consistent look.

```csharp
ITextBox box = slide.TextBoxes[0];
box.AddText("Caption");
box.AddParagraph(paragraph);
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places text on a slide, the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds paragraphs, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) covers slide elements.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITextBox Interface - IronPPT C# API Reference`
- v2 (human): `ITextBox: Fill a Slide Text Box in C#`
- v3 (balanced): `ITextBox Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITextBox is the IronPPT text-box contract in C#: AddText, AddParagraph, AddImage, and AddShape, and read the Texts and Paragraphs collections.`
- v2 (human): `Fill a slide text box in C# through the IronPPT ITextBox contract: add text, paragraphs, images, and shapes, then read the box contents back.`
- v3 (balanced): `Reference for the IronPPT ITextBox interface in C#: the text-box contract implemented by TextBox, with add methods and content collections.`

---

## Structured data

**TechArticle abstract**

> ITextBox is the contract for a text box on an IronPPT slide in C#. Add methods (AddText, AddParagraph, AddImage, AddShape, AddChild) fill the box, the Texts and Paragraphs collections read it back, and the inherited Style member sets default paragraph formatting. TextBox implements ITextBox and is itself a Shape, reached through ISlide.TextBoxes.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITextBox live in the IronPPT API?",
    "answer": "ITextBox is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IContentElement and IHasParagraphStyle. The concrete implementor is TextBox, which is itself a Shape."
  },
  {
    "question": "What implements ITextBox in IronPPT?",
    "answer": "TextBox implements ITextBox, and because TextBox derives from Shape it is also an IShape. You obtain text boxes through ISlide.TextBoxes, a List<ITextBox>, rather than constructing the interface directly."
  },
  {
    "question": "How do you add text to a text box in C#?",
    "answer": "Call AddText on the ITextBox with a string or an IText, and AddParagraph with an IParagraph for multi-line content. Read the result back through the Texts and Paragraphs collections."
  }
]
```
