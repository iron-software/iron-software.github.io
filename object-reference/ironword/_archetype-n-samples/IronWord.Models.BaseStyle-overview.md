<!--
N-Full. Frame A (subject-verb). IronWord.Models. Members verified 2026-06-23.
StyleId, StyleName, StyleType, IsDefaultStyle, Status, InheritedStyle, NextParagraphStyle,
ParagraphStyle, TextStyle, TableStyle, TableCellStyle verified. >10 members -> functional buckets.
Implements IBaseStyle, IStyle, IWordDocumentObjectProperty, IDocumentObjectProperty (from page).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.BaseStyle.html
-->

## Injected overview (Markdown)

`BaseStyle` collects the formatting a Word document reuses by name, so paragraphs, runs, tables, and cells can share one consistent look instead of carrying inline formatting each. A developer building branded reports or applying a house style defines the appearance once on a `BaseStyle` and points content at it, which keeps a long document uniform and easy to restyle later.

A style is identified and applied through the document's style collection, where `StyleId` and `StyleName` give it the key and display name that content references. From there it nests the per-aspect style objects that actually carry the formatting, so one named style can govern several kinds of element at once.

The members fall into clear groups. For **identity and state**, `StyleId` and `StyleName` name the style, `StyleType` records the kind, `IsDefaultStyle` marks the document default, and `Status` (read-only) reports the change state of the style. For **inheritance**, `InheritedStyle` points at the style this one is based on and `NextParagraphStyle` names the style to apply to the following paragraph, the mechanism behind a heading that flows into body text. For the **formatting payload**, `ParagraphStyle`, `TextStyle`, `TableStyle`, and `TableCellStyle` hold the actual paragraph, run, table, and cell appearance, so a single named style can govern text and table formatting at once.

Set the few aspects a style needs and leave the rest, since a style only overrides what it specifies and inherits everything else from the style named by `InheritedStyle`. A paragraph style typically fills in `ParagraphStyle` and `TextStyle`, while a table style adds `TableStyle` and `TableCellStyle`. Reuse one `BaseStyle` across many paragraphs and cells rather than repeating inline formatting, which keeps a long document consistent and makes a later restyle a single edit.

```csharp
using IronWord.Models;

var style = new BaseStyle();
style.StyleName = "Heading 1";
style.TextStyle = new TextStyle();
```

The [add styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) walks through applying formatting, the [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) shows table and cell styling, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where styles sit in the object model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BaseStyle Class - IronWord C# API`
- v2 (human): `BaseStyle: Reusable Word Styles in C#`
- v3 (balanced): `BaseStyle Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define reusable Word styles in C# with the IronWord BaseStyle class: StyleName, StyleType, InheritedStyle, ParagraphStyle, TextStyle, and TableStyle.`
- v2 (human): `Share one consistent look across a Word document in C# with the IronWord BaseStyle class: name a style and set its paragraph, text, and table formatting.`
- v3 (balanced): `Reference for the IronWord BaseStyle class in C#: name a reusable style and attach ParagraphStyle, TextStyle, TableStyle, and TableCellStyle formatting.`

---

## Structured data

**TechArticle abstract**

> Sharing one reusable look across a Word document in C# runs through the IronWord BaseStyle class. StyleId and StyleName identify the style, InheritedStyle and NextParagraphStyle handle inheritance and paragraph flow, and ParagraphStyle, TextStyle, TableStyle, and TableCellStyle hold the paragraph, run, table, and cell formatting that content applies by name.

**FAQPage entries**

```json
[
  {
    "question": "Where does BaseStyle live in the IronWord API?",
    "answer": "BaseStyle is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements IBaseStyle, IStyle, IWordDocumentObjectProperty, and IDocumentObjectProperty. It holds reusable formatting that content references by name."
  },
  {
    "question": "How do you define a reusable style in a Word document in C#?",
    "answer": "Create a BaseStyle, set StyleName and StyleId, then assign the formatting through TextStyle, ParagraphStyle, TableStyle, or TableCellStyle. Use InheritedStyle to base it on another style and NextParagraphStyle to set what follows."
  },
  {
    "question": "What is the difference between StyleType and StyleName on BaseStyle?",
    "answer": "StyleName is the human-readable name content uses to apply the style, while StyleType records what kind of style it is. IsDefaultStyle marks whether it is the document default, and Status reports the style's change state."
  }
]
```
