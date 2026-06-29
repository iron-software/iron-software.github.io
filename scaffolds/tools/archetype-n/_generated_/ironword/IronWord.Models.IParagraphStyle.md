<!--
N-Mid / interface (3 own members: Borders, DefaultStyle, Indentation). Frame C. IronWord.
Single concrete implementor: ParagraphStyle (verified). Returned by ParagraphStyle.DefaultStyle (IParagraphStyle) and Style.ParagraphStyle (ParagraphStyle concrete).
Extends IDerivedStyle, IStyle, IWordDocumentObjectProperty, IDocumentObjectProperty.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IParagraphStyle.html
-->

## Injected overview (Markdown)

When code works with paragraph-level styling through a contract rather than a concrete type, `IParagraphStyle` is that contract. It describes the paragraph aspects of a Word style, the borders, indentation, and inherited defaults that apply to a block of text, so a paragraph's formatting can be read or carried without binding to the implementing class.

The concrete implementor in IronWord is `ParagraphStyle`, and you usually obtain the interface from it: `ParagraphStyle` exposes a `DefaultStyle` property typed as `IParagraphStyle` that returns the fallback paragraph style. The contract surfaces three members. `Borders` is a `ParagraphBorders` for the lines around the block, `Indentation` is a `ParagraphIndentation` for the left, right, and special indents, and `DefaultStyle` points to the inherited paragraph defaults. Read these to inspect a paragraph's formatting, and apply changes through the concrete `ParagraphStyle` you set on a paragraph.

The [styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) formats paragraph text, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how paragraphs and styles compose.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IParagraphStyle Interface - IronWord C# API`
- v2 (human): `IParagraphStyle: The Paragraph Style Contract in C#`
- v3 (balanced): `IParagraphStyle Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IParagraphStyle is the IronWord contract in C# for paragraph styling: Borders, Indentation, and DefaultStyle, implemented by ParagraphStyle.`
- v2 (human): `Work with Word paragraph styling in C# through the IronWord IParagraphStyle contract: read Borders, Indentation, and the inherited DefaultStyle.`
- v3 (balanced): `Reference for the IronWord IParagraphStyle interface in C#: the paragraph-style contract with Borders, Indentation, and DefaultStyle, from ParagraphStyle.`

---

## Structured data

**TechArticle abstract**

> Working with Word paragraph styling through a contract in C# runs through the IronWord IParagraphStyle interface, implemented by ParagraphStyle. It surfaces Borders as a ParagraphBorders, Indentation as a ParagraphIndentation, and DefaultStyle as the inherited paragraph fallback. Obtain it from a ParagraphStyle, whose DefaultStyle property returns an IParagraphStyle, and apply changes through the concrete type.

**FAQPage entries**

```json
[
  {
    "question": "Where does IParagraphStyle live in the IronWord API?",
    "answer": "IParagraphStyle is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IDerivedStyle, IStyle, IWordDocumentObjectProperty, and IDocumentObjectProperty, and is implemented by ParagraphStyle."
  },
  {
    "question": "What implements IParagraphStyle in IronWord?",
    "answer": "ParagraphStyle implements IParagraphStyle. You typically obtain the interface from a ParagraphStyle, whose DefaultStyle property is typed as IParagraphStyle, and apply paragraph formatting through the concrete ParagraphStyle."
  }
]
```
