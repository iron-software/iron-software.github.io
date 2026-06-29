<!--
N-Full (class). Frame E. IronWord. Members verified 2026-06-23 against IronWord.Models.Style.html. Base: DocumentStyle.
Members: BasedOn, IsPrimaryStyle, NextParagraphStyle, ParagraphStyle, StyleName, StyleType, TextStyle.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Style.html
-->

## Injected overview (Markdown)

A reusable, named formatting definition that paragraphs and runs can point at, rather than repeating the same font and spacing settings everywhere, is what `Style` records. Use it when a document needs a consistent look applied by name, like a "Heading 1" or a "Body" style that several paragraphs share. One instance describes a single named style and the formatting it carries.

A style is identified by its `StyleName` and categorized by `StyleType`, a `StyleValues` enumeration that says whether it is a paragraph, character, or table style. `BasedOn` names a parent style this one inherits from, and `NextParagraphStyle` names the style applied to the paragraph that follows, which is how a heading style can flow into a body style automatically. `IsPrimaryStyle` flags whether the style is one of the document's built-in defaults.

The formatting itself is held on two properties: `ParagraphStyle` carries paragraph-level settings (a `ParagraphStyle` object covering alignment, indentation, and spacing), and `TextStyle` carries character-level settings (a `TextStyle` object covering font, size, color, and weight). Set the name and type, point `BasedOn` and `NextParagraphStyle` at the related styles, then populate `ParagraphStyle` and `TextStyle` with the appearance you want the named style to apply. Defining a style once and referring to it by name keeps a long document consistent, since changing the style updates every paragraph that uses it rather than forcing edits in many places. The `BasedOn` chain also lets a family of related styles share common formatting while each varies only the parts that differ.

```csharp
using IronWord.Models;

Style heading = new Style();
heading.StyleName = "Heading 1";
heading.TextStyle = new TextStyle();
heading.ParagraphStyle = new ParagraphStyle();
```

The [add style to text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) walks through the character formatting a style carries, the [add style to text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) shows it applied, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where styles sit in the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Style Class - IronWord C# API Reference`
- v2 (human): `Style: Named Document Styles in C#`
- v3 (balanced): `Style Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define named Word styles in C# with the IronWord Style class: set StyleName and StyleType, chain BasedOn and NextParagraphStyle, and carry paragraph and text formatting.`
- v2 (human): `Create reusable named styles for Word documents with the IronWord Style class in C#: name a style, base it on another, and set its paragraph and text formatting.`
- v3 (balanced): `Reference for the IronWord Style class in C#: a named style holding StyleName, StyleType, ParagraphStyle, and TextStyle, with BasedOn inheritance.`

---

## Structured data

**TechArticle abstract**

> Defining a reusable named style for a Word document in C# runs through the IronWord Style class. It is identified by StyleName and categorized by StyleType, can inherit from a parent through BasedOn, and flows into a following paragraph through NextParagraphStyle. The formatting it applies is held on the ParagraphStyle and TextStyle properties.

**FAQPage entries**

```json
[
  {
    "question": "Where does Style live in the IronWord API?",
    "answer": "Style is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from DocumentStyle and holds a named formatting definition through its ParagraphStyle and TextStyle properties."
  },
  {
    "question": "How do you define a named style in C# with IronWord?",
    "answer": "Create a Style, set StyleName and StyleType, then populate the ParagraphStyle and TextStyle properties with the paragraph and character formatting the style should apply. Use BasedOn to inherit from a parent style."
  },
  {
    "question": "What is the difference between Style.ParagraphStyle and Style.TextStyle?",
    "answer": "ParagraphStyle carries paragraph-level settings such as alignment, indentation, and spacing, while TextStyle carries character-level settings such as font, size, and color. A single Style can hold both."
  }
]
```
