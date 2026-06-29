<!--
N-Mid / interface (1 own member: BaseStyle -> IBaseStyle). Frame B. IronWord.
Implementors verified 2026-06-23: ParagraphStyle, TableCellStyle, TableRowStyle, TableStyle, TextStyle.
Extends IStyle, IWordDocumentObjectProperty, IDocumentObjectProperty (self-ref in docfx decl ignored).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IDerivedStyle.html
-->

## Injected overview (Markdown)

Treating the different Word style kinds through one common type runs through `IDerivedStyle`, the contract every concrete style in IronWord works through. It is what you hold when code handles paragraph, run, and table styles uniformly, reading each one's shared base and then applying overrides on the concrete type.

The concrete styles that implement it are `ParagraphStyle`, `TextStyle`, `TableStyle`, `TableCellStyle`, and `TableRowStyle`, so the interface is the common type across paragraph, run, and table styling. Its own member is `BaseStyle`, a get-only property typed as `IBaseStyle` that exposes the shared base a derived style reads its inherited values from. Because the property is read-only on the interface, you obtain the base through it rather than reassigning it; to apply a concrete style, work with the implementing type directly, such as setting a `ParagraphStyle` on a paragraph or a `TableCellStyle` on a cell.

The [styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) applies a style to text, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where styles sit in the model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IDerivedStyle Interface - IronWord C# API`
- v2 (human): `IDerivedStyle: The Inherited Style Contract in C#`
- v3 (balanced): `IDerivedStyle Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IDerivedStyle is the IronWord contract in C# for an inherited Word style: its BaseStyle exposes IBaseStyle, implemented by ParagraphStyle and TextStyle.`
- v2 (human): `Work uniformly with Word styles in C# through the IronWord IDerivedStyle contract: ParagraphStyle, TextStyle, and the table styles all implement it.`
- v3 (balanced): `Reference for the IronWord IDerivedStyle interface in C#: the inherited-style contract with a BaseStyle property, implemented by the concrete styles.`

---

## Structured data

**TechArticle abstract**

> ParagraphStyle, TextStyle, TableStyle, TableCellStyle, and TableRowStyle in IronWord all implement the IDerivedStyle contract, so C# code can handle the style kinds through one type. Its BaseStyle property is a get-only IBaseStyle that exposes the shared base a derived style reads its defaults from. Apply styling through the concrete implementing type rather than the interface.

**FAQPage entries**

```json
[
  {
    "question": "Where does IDerivedStyle live in the IronWord API?",
    "answer": "IDerivedStyle is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IStyle, IWordDocumentObjectProperty, and IDocumentObjectProperty, and its BaseStyle property returns an IBaseStyle."
  },
  {
    "question": "What implements IDerivedStyle in IronWord?",
    "answer": "ParagraphStyle, TextStyle, TableStyle, TableCellStyle, and TableRowStyle all implement IDerivedStyle. Use the concrete type that matches what you are styling, such as ParagraphStyle for a paragraph or TableCellStyle for a table cell."
  }
]
```
