<!--
N-Full / interface. Frame D. Implementor: Slide. IronPPT. Members verified 2026-06-23.
ISlide : IGraphic, IContentElement. Reached via PresentationDocument.Slides (List<Slide>). Buckets used.
Target: IronPPT.Interfaces.ISlide.html
-->

## Injected overview (Markdown)

Building up a single page of a presentation in C# runs through `ISlide`. It is the contract for one slide and gives a developer everything needed to add content to that slide and to read back what is already there, so a report generator can append shapes, text, and images to a page through one consistent surface.

A developer receives an `ISlide` rather than constructing it: `PresentationDocument.Slides` is a `List<Slide>`, and `Slide` (the concrete implementor) is what those entries are, while `AddSlide` returns a fresh one to fill. From there the slide is the parent every other element attaches to, and editing the deck means walking its slides and adding to or reading from each in turn.

The members fall into clear functional groups. The add methods grow the slide: `AddShape` takes an `IShape`, `AddText` accepts a `string` or an `IText`, `AddParagraph` takes an `IParagraph`, `AddImage` has overloads for a file path, a `Stream`, an `AnyBitmap`, or an `IImage`, and `AddChild` attaches several `IContentElement` items at once. The read-back collections expose what the slide holds: `Shapes` (a `List<IShape>`), `Texts`, `TextBoxes`, `Paragraphs`, and `Images`. The slide-state members cover the rest: `ID` and `Index` identify and order the slide, `IsMasterSlide` flags a master, and `ShowMasterPlaceholderAnimations` toggles inherited animations. Geometry such as `Height`, `Width`, `Angle`, and `Position` is inherited from `IGraphic`, so the same slide object answers both content questions and layout questions through one surface.

```csharp
ISlide slide = document.Slides[0];
slide.AddText("Quarterly Summary");
slide.AddImage("chart.png");
```

The [add slide example](https://ironsoftware.com/csharp/ppt/examples/add-slide/) creates a slide, the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) walks through editing one, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing text on a slide.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ISlide Interface - IronPPT C# API Reference`
- v2 (human): `ISlide: Build a Slide in C#`
- v3 (balanced): `ISlide Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ISlide is the IronPPT slide contract in C#: AddShape, AddText, AddImage, and AddParagraph, and read Shapes, Texts, TextBoxes, and Images.`
- v2 (human): `Build a slide in C# through the IronPPT ISlide contract: add shapes, text, paragraphs, and images, and read back the slide's content collections.`
- v3 (balanced): `Reference for the IronPPT ISlide interface in C#: the slide contract implemented by Slide, with add methods and content collections.`

---

## Structured data

**TechArticle abstract**

> ISlide is the contract for one slide in an IronPPT presentation in C#. Add methods (AddShape, AddText, AddParagraph, AddImage, AddChild) grow the slide, content collections (Shapes, Texts, TextBoxes, Paragraphs, Images) read it back, and state members (ID, Index, IsMasterSlide) describe it. Slide implements ISlide, reached through PresentationDocument.Slides.

**FAQPage entries**

```json
[
  {
    "question": "Where does ISlide live in the IronPPT API?",
    "answer": "ISlide is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IGraphic and IContentElement, so a slide carries inherited geometry alongside its own content members."
  },
  {
    "question": "What implements ISlide in IronPPT?",
    "answer": "Slide implements ISlide. You obtain slides through PresentationDocument.Slides, a List<Slide>, or add one with AddSlide rather than constructing the interface directly."
  },
  {
    "question": "How do you add content to a slide in C#?",
    "answer": "Call AddText with a string, AddShape with an IShape, AddImage with a path, Stream, AnyBitmap, or IImage, and AddParagraph with an IParagraph. Read existing content back through the Shapes, Texts, TextBoxes, and Images collections."
  }
]
```
