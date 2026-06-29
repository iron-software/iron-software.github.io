<!--
N-Full. Frame F (imperative). IronWord. >20 props -> functional buckets (composition / alignment & spacing / pagination & flow / direction & wrapping).
Members verified 2026-06-23: props BaseStyle, Borders, Indentation, Justification, LineSpacing, TextAlignment, ContextualSpacing,
KeepLinesOnPage, KeepWithNextParagraph, PageBreakBefore, OutlineLevel, RightToLeft, WordWrap, MirrorIndents, AdjustRightIndent, Status, ...
Base Object; implements IParagraphStyle, IDerivedStyle, IStyle. Cross-ref verified: Paragraph.Style / Paragraph.SetStyle(ParagraphStyle); ParagraphBorders; ParagraphIndentation.
Target: IronWord.Models.ParagraphStyle.html
-->

## Injected overview (Markdown)

Reach for `ParagraphStyle` to define the look of a paragraph once and reuse it across a document, the spacing, alignment, borders, indentation, and pagination behavior that travel together as a named style. It gathers paragraph-level formatting into a single object so a developer sets it up once and applies it wherever that look is needed.

A style attaches to a paragraph through `Paragraph.Style`, or the shortcut `SetStyle`, and a paragraph with no explicit style inherits the document's default. Building one style on top of another is supported through `BaseStyle`, which records the style a derived style is based on, so a heading style can extend a body style and override only what differs.

Its properties fall into groups. Composition: `Borders` holds a `ParagraphBorders` for the edges, and `Indentation` holds a `ParagraphIndentation` for the indents, each its own configurable object. Alignment and spacing: `Justification`, `TextAlignment`, and `LineSpacing` control horizontal placement and line height, while `ContextualSpacing` suppresses extra space between same-styled paragraphs. Pagination and flow: `KeepLinesOnPage` prevents a paragraph splitting across pages, `KeepWithNextParagraph` ties it to the following one, `PageBreakBefore` forces a break ahead of it, and `OutlineLevel` sets its rank for navigation and tables of contents. Direction and wrapping: `RightToLeft`, `WordWrap`, `MirrorIndents`, and `AdjustRightIndent` handle bidirectional text and edge behavior, which matters for documents that mix scripts or print double-sided. `Status` reports the style's state. Setting these properties once on a shared style and reusing it keeps a document consistent and makes a global change a single edit, rather than touching every paragraph in turn.

```csharp
var style = new ParagraphStyle();
style.KeepWithNextParagraph = true;
paragraph.SetStyle(style);
```

The [add style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) walks through styling paragraphs, the [add style text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) shows the result, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) covers how styles fit the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParagraphStyle - IronWord C# API Reference`
- v2 (human): `ParagraphStyle: Style Word Paragraphs in C#`
- v3 (balanced): `ParagraphStyle Class | IronWord .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Style Word paragraphs in C# with the IronWord ParagraphStyle class: Borders, Indentation, Justification, LineSpacing, and pagination control.`
- v2 (human): `Define reusable paragraph formatting in C# with the IronWord ParagraphStyle class: alignment, spacing, borders, indentation, and page flow.`
- v3 (balanced): `Reference for the IronWord ParagraphStyle class in C#: gather alignment, spacing, borders, indentation, and pagination into a reusable style.`

---

## Structured data

**TechArticle abstract**

> Defining reusable paragraph formatting in a Word document in C# runs through the IronWord ParagraphStyle class. It gathers Borders and Indentation, alignment and LineSpacing, and pagination settings such as KeepLinesOnPage and PageBreakBefore into one object. Attach it through Paragraph.Style or SetStyle, and extend an existing style through BaseStyle to override only what differs.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParagraphStyle live in the IronWord API?",
    "answer": "ParagraphStyle is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements IParagraphStyle, IDerivedStyle, and IStyle, and it attaches to a paragraph through Paragraph.Style."
  },
  {
    "question": "How do you apply a style to a paragraph in IronWord?",
    "answer": "Create a ParagraphStyle, set the properties you need such as Justification, LineSpacing, Borders, or Indentation, then assign it through Paragraph.Style or call SetStyle on the paragraph. A paragraph with no style inherits the document default."
  },
  {
    "question": "Can one ParagraphStyle build on another in IronWord?",
    "answer": "Yes. The BaseStyle property records the style a derived style is based on, so a heading style can extend a body style and override only the properties that differ rather than redefining every setting."
  }
]
```
