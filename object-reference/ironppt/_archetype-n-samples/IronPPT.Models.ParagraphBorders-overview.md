<!--
N-Full (class, 6 same-kind BorderStyle properties). Frame C. IronPPT.
Members verified 2026-06-23: TopBorder, BottomBorder, LeftBorder, RightBorder, BarBorder, BetweenBorder (each BorderStyle).
ctor(). Base Object (no documented consumer besides namespace). NS IronPPT.Models, IronPPT.dll.
Target: IronPPT.Models.ParagraphBorders.html
-->

## Injected overview (Markdown)

When a slide paragraph needs ruled lines around or between its text, `ParagraphBorders` defines them. It groups the individual border edges of a paragraph into one object, so a box around a callout or a divider line under a heading is configured in a single place. Each edge is set independently, which lets a developer draw only the lines a layout calls for rather than a full frame every time.

A `ParagraphBorders` is created with its parameterless constructor and its edge properties are assigned the `BorderStyle` values that describe each line's appearance. Setting only the edges that should appear leaves the rest absent, so a single bottom rule or a left bar is as easy to express as a complete border. Because each edge is configured separately, a layout that wants a heavy underline but light side rules sets a different `BorderStyle` on each property rather than sharing one across all four sides.

The six properties name the edges directly. `TopBorder`, `BottomBorder`, `LeftBorder`, and `RightBorder` are the four sides of the paragraph box, each taking a `BorderStyle`. `BarBorder` draws a vertical bar beside the paragraph, the change-bar style used to flag revised text, and `BetweenBorder` draws a line between consecutive paragraphs that share the same border settings, which separates stacked items without boxing each one. Every edge uses the same `BorderStyle` shape, so width, color, and line pattern are described consistently across all six.

```csharp
using IronPPT.Models;

var borders = new ParagraphBorders();
borders.BottomBorder = new BorderStyle();
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) formats a paragraph, the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds the paragraphs borders apply to, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers slide text.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParagraphBorders Class - IronPPT C# API`
- v2 (human): `ParagraphBorders: Border Slide Paragraphs in C#`
- v3 (balanced): `ParagraphBorders | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add borders to a slide paragraph in C# with the IronPPT ParagraphBorders class: set TopBorder, BottomBorder, Left, Right, Bar, Between.`
- v2 (human): `Draw ruled lines around a slide paragraph in C# with the IronPPT ParagraphBorders class: set each edge to a BorderStyle independently.`
- v3 (balanced): `Reference for the IronPPT ParagraphBorders class in C#: Top, Bottom, Left, Right, Bar, and Between edges, each a BorderStyle.`

---

## Structured data

**TechArticle abstract**

> Defining ruled lines around a slide paragraph runs through the IronPPT ParagraphBorders class in C#. It groups the paragraph's edges into one object: TopBorder, BottomBorder, LeftBorder, and RightBorder for the four sides, BarBorder for a vertical change bar, and BetweenBorder for a line between consecutive paragraphs. Each edge takes a BorderStyle that describes its width, color, and pattern, and only the edges that are set appear.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParagraphBorders live in the IronPPT API?",
    "answer": "ParagraphBorders is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and holds a paragraph's six border edges, each typed as a BorderStyle."
  },
  {
    "question": "How do you add a single border line to a paragraph in IronPPT?",
    "answer": "Create a ParagraphBorders and assign a BorderStyle to only the edge you want, such as BottomBorder for an underline rule. Edges left unset do not draw, so a single line is as easy to express as a full box."
  },
  {
    "question": "What do BarBorder and BetweenBorder do on ParagraphBorders?",
    "answer": "BarBorder draws a vertical bar beside the paragraph, the change-bar style used to flag revised text, and BetweenBorder draws a line between consecutive paragraphs that share the same border settings, separating stacked items without boxing each one."
  }
]
```
