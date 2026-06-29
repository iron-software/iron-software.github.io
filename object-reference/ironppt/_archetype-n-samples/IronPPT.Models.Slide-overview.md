<!--
N-Full (class : ParentElement, ...ISlide...; large surface, bucketed). Frame B (lead), Frame E (abstract). IronPPT.
Verified 2026-06-23: collections Images, Paragraphs, Shapes, TextBoxes, Texts (List<I...>); geometry Angle (Rotation), Height/Width (DocUnit), Position (ElementPosition); identity ID (string), IsMasterSlide (bool), Show/ShowMasterPlaceholderAnimations (Nullable<bool>), SlideColor (IColor get); AddChild, AddImage (4 overloads), AddParagraph, AddShape, AddText (2 overloads).
Target: IronPPT.Models.Slide.html
-->

## Injected overview (Markdown)

`Slide` is the page object a developer fills with content when building a PowerPoint deck in code. It holds the text, shapes, and images that appear on one slide and exposes the methods that add them, so generating a presentation comes down to creating slides and populating each one.

A slide is reached through the presentation document's slide collection, then content is added through its `Add` methods, which fall into clear groups. Text content uses `AddText` (taking a `string` or an `IText`) and `AddParagraph`; graphics use `AddShape` and the four `AddImage` overloads (a path, a `Stream`, an `AnyBitmap`, or an existing `IImage`); and `AddChild` adds raw content elements. What has been added is read back through the typed collection properties: `Texts`, `Paragraphs`, `Shapes`, `Images`, and `TextBoxes`, each a `List` of the matching interface.

Layout and identity are separate buckets. Geometry is set through `Width`, `Height` (both `DocUnit`), `Position` (an `ElementPosition`), and `Angle` (a `Rotation`), so a slide can be sized and oriented in document units rather than raw pixels. Identity and visibility live on `ID`, `IsMasterSlide`, `Show` and `ShowMasterPlaceholderAnimations` (both `Nullable<bool>`), and the read-only `SlideColor`, which reports the slide's resolved color. Set `IsMasterSlide` when the slide acts as a template for others, and toggle `Show` to control whether it appears in the rendered deck. Build a slide by adding its content first, then adjust geometry and visibility before saving the deck.

```csharp
slide.AddText("Quarterly Report");
slide.AddImage("logo.png");
slide.Width = new DocUnit(960, Units.Point);
```

The [add slide how-to](https://ironsoftware.com/csharp/ppt/how-to/add-slide/) creates slides, the [manage slide how-to](https://ironsoftware.com/csharp/ppt/how-to/manage-slide/) reorders them, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) walks through populating one.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Slide Class - IronPPT C# API Reference`
- v2 (human): `Slide: Build PowerPoint Slides in C#`
- v3 (balanced): `Slide Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Build a PowerPoint slide in C# with the IronPPT Slide class: add text, shapes, and images, read them via typed collections, and set geometry.`
- v2 (human): `Fill a PowerPoint slide in C# with the IronPPT Slide class: AddText, AddShape, and AddImage, then size and position the page before saving.`
- v3 (balanced): `Reference for the IronPPT Slide class in C#: the page object with AddText, AddShape, and AddImage, typed content collections, and layout properties.`

---

## Structured data

**TechArticle abstract**

> The page object a developer fills when building a PowerPoint deck in C# is IronPPT's Slide class. AddText, AddParagraph, AddShape, and the AddImage overloads populate it; the Texts, Shapes, Images, and TextBoxes collections read it back; and Width, Height, Position, and Angle set its layout. IsMasterSlide marks a template slide.

**FAQPage entries**

```json
[
  {
    "question": "Where does Slide live in the IronPPT API?",
    "answer": "Slide is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from ParentElement and implements ISlide, IGraphic, IContentElement, and related interfaces."
  },
  {
    "question": "How do you add content to a slide in C#?",
    "answer": "Call AddText for text (a string or an IText), AddShape for shapes, and one of the AddImage overloads for images. Read what you added through the Texts, Shapes, and Images collection properties."
  },
  {
    "question": "How do you make a slide a master slide?",
    "answer": "Set the IsMasterSlide property to true so the slide acts as a template for others. ShowMasterPlaceholderAnimations and the Show property, both nullable booleans, control its visibility behavior."
  }
]
```
