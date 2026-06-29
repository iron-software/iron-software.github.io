<!--
N-Full (class). Frame B. IronPPT.
Members verified 2026-06-23: Shapes(List<IShape>), Texts(List<IText>), TextStyle(ITextStyle),
AddText(IText)/(string), Clone(). ctor() and ctor(params IText[]). Base ParentElement; implements IRun.
Sibling of Paragraph (different frame). NS IronPPT.Models, IronPPT.dll. Target: IronPPT.Models.Run.html
-->

## Injected overview (Markdown)

`Run` is the content element you hold when a stretch of text on a slide needs to share one set of formatting. It groups inline text, and the shapes attached to it, under a single text style, so a phrase rendered in one font, weight, and color is built and managed as one unit rather than character by character. It is the inline counterpart to a `Paragraph`: a paragraph lays out a block of content, while a run carries the styled text inside it.

A `Run` is created with `new Run()`, or with the constructor that takes `params IText[]` to seed it with text right away. Fill it by calling `AddText` with a string or an `IText`, and the run becomes a content element that a paragraph or other parent element holds. Because a run keeps its own formatting, splitting a paragraph into several runs is how a single line mixes styles, one run per formatting change.

Formatting for the whole run is set through `TextStyle`, an `ITextStyle` that carries font, size, color, and emphasis. `Texts` exposes the contained `IText` items for inspection or further editing, and `Shapes` lists any `IShape` content the run holds. `Clone` copies the run when the same styled text is reused, which keeps a repeated label or heading consistent without rebuilding its style.

```csharp
using IronPPT.Models;

var run = new Run();
run.AddText("Highlighted phrase.");
```

The [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds the paragraphs that hold runs, the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing text on a slide, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles surrounding content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Run Class - IronPPT C# API Reference`
- v2 (human): `Run: Styled Inline Text on Slides in C#`
- v3 (balanced): `Run Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Group styled inline text in C# with the IronPPT Run class: call AddText, set TextStyle, and hold the text inside a slide paragraph.`
- v2 (human): `Carry a run of consistently styled text in C# with the IronPPT Run class: add text, set one TextStyle, and place it inside a paragraph.`
- v3 (balanced): `Reference for the IronPPT Run class in C#: an inline text element with AddText, a shared TextStyle, Texts, Shapes, and Clone.`

---

## Structured data

**TechArticle abstract**

> The IronPPT Run class in C# is the content element you hold when a stretch of slide text shares one set of formatting. Create one with new Run, call AddText, and set TextStyle for font, size, color, and emphasis across the whole run. Texts exposes the contained IText items, Shapes lists any IShape content, and Clone copies the run for reuse. A Run is the inline counterpart to a Paragraph.

**FAQPage entries**

```json
[
  {
    "question": "Where does Run live in the IronPPT API?",
    "answer": "Run is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from ParentElement and implements IRun along with the content and text-container contracts a slide element uses."
  },
  {
    "question": "What is the difference between a Run and a Paragraph in IronPPT?",
    "answer": "A Paragraph lays out a block of content on a slide, while a Run carries styled inline text inside it. Splitting a line into several runs is how one paragraph mixes fonts, sizes, or colors, with one run per formatting change."
  },
  {
    "question": "How do you set the formatting of a run in C#?",
    "answer": "Assign the TextStyle property, an ITextStyle that carries font, size, color, and emphasis for the whole run. Add the run's text with AddText, and use Clone to copy a styled run when the same text is reused."
  }
]
```
