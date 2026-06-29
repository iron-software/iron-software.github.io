<!--
N-Full (6 props + ctor) override per cluster. Frame C (when-fronted). IronWord.
Members verified 2026-06-23: TopBorder, BottomBorder, LeftBorder, RightBorder, BetweenBorder, BarBorder (each a BorderStyle); ctor.
Base Object. Cross-ref verified: ParagraphStyle.Borders property returns ParagraphBorders.
Target: IronWord.Models.ParagraphBorders.html
-->

## Injected overview (Markdown)

When a paragraph needs a box, a rule above or below it, or a side bar, `ParagraphBorders` holds those edge settings. It groups the individual border definitions that surround a paragraph so a style can frame a callout, underline a heading, or set off a quotation from the body.

These borders are reached through a paragraph's style: `ParagraphStyle` exposes a `Borders` property of this type, so a developer configures the edges once on the style and every paragraph carrying that style inherits the framing. That keeps border formatting with the rest of a paragraph's look rather than scattering it across individual lines.

Each edge is a separate property. `TopBorder` and `BottomBorder` set the rules above and below the paragraph, while `LeftBorder` and `RightBorder` set the vertical edges, together forming a full box when all four are present. `BetweenBorder` draws the rule in the space between columns in a multi-column paragraph, and `BarBorder` adds the vertical bar down the left side often used to mark revised or quoted text. Each property takes a `BorderStyle` that defines that edge's appearance, including its width, color, and line pattern, and an edge left unset simply does not draw. Assign only the edges you want, then apply the owning `ParagraphStyle` to the paragraphs that should show them. Because the borders live on the style rather than the paragraph, every paragraph sharing that style picks up the same framing, which keeps a run of callouts or quotations consistent without repeating the configuration on each line.

```csharp
var borders = new ParagraphBorders();
borders.BottomBorder = new BorderStyle();
paragraphStyle.Borders = borders;
```

The [add style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers paragraph styling, the [add style text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) shows styled output, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains how styles attach to paragraphs.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParagraphBorders - IronWord C# API`
- v2 (human): `ParagraphBorders: Word Paragraph Edges in C#`
- v3 (balanced): `ParagraphBorders Class | IronWord .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Frame a Word paragraph in C# with the IronWord ParagraphBorders class: TopBorder, BottomBorder, LeftBorder, RightBorder, BetweenBorder, and BarBorder.`
- v2 (human): `Add a box, rule, or side bar to a Word paragraph in C# with the IronWord ParagraphBorders class, set per edge through a ParagraphStyle.`
- v3 (balanced): `Reference for the IronWord ParagraphBorders class in C#: per-edge BorderStyle settings for a paragraph, applied through ParagraphStyle.Borders.`

---

## Structured data

**TechArticle abstract**

> Framing a Word paragraph with a box, rule, or side bar in C# runs through the IronWord ParagraphBorders class. It groups per-edge settings reached through ParagraphStyle.Borders: TopBorder and BottomBorder for horizontal rules, LeftBorder and RightBorder for vertical edges, BetweenBorder for column rules, and BarBorder for a left-side bar. Each takes a BorderStyle, and unset edges do not draw.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParagraphBorders live in the IronWord API?",
    "answer": "ParagraphBorders is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object, and a ParagraphStyle exposes an instance through its Borders property so the edges travel with the style."
  },
  {
    "question": "How do you add a border to a paragraph in IronWord?",
    "answer": "Create a ParagraphBorders, assign a BorderStyle to the edges you want (such as BottomBorder or all four for a box), and set it on a ParagraphStyle's Borders property. Apply that style to the paragraphs that should show the borders."
  },
  {
    "question": "What does the BarBorder property do in IronWord?",
    "answer": "BarBorder draws a vertical bar down the left side of the paragraph, the marker often used to flag revised or quoted text. It is set with a BorderStyle, independent of the four boxing edges."
  }
]
```
