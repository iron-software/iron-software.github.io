<!--
N-Mid / interface (5 members: InheritedStyle, ParagraphStyle, TableCellStyle, TableStyle, TextStyle). Frame B. IronWord.
Only concrete implementor: BaseStyle (verified). Returned by BaseStyle.InheritedStyle, ParagraphStyle.BaseStyle, TableCellStyle.BaseStyle, TableStyle.BaseStyle, TextStyle.BaseStyle (verified).
Extends IStyle, IWordDocumentObjectProperty, IDocumentObjectProperty.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IBaseStyle.html
-->

## Injected overview (Markdown)

`IBaseStyle` is the shared base a derived Word style reads its inherited values from, the contract you receive when you ask a concrete style for the base it builds on. A derived style exposes it through its own `BaseStyle` property, so code that walks a style's inheritance reads the base through this interface rather than a concrete type.

The concrete implementor is `BaseStyle`, and you typically obtain an `IBaseStyle` from a derived style rather than constructing one: `ParagraphStyle`, `TableCellStyle`, `TableStyle`, and `TextStyle` each expose a `BaseStyle` property typed as `IBaseStyle`. The interface itself surfaces the style facets of that base. `ParagraphStyle`, `TextStyle`, `TableStyle`, and `TableCellStyle` properties give the paragraph, run, and table aspects, while `InheritedStyle` points one level further up the chain. Read these to discover what a derived style inherits before applying your own overrides on the concrete type.

The [styled text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) sets style values, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how styles compose a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IBaseStyle Interface - IronWord C# API`
- v2 (human): `IBaseStyle: The Shared Style Base in C#`
- v3 (balanced): `IBaseStyle Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IBaseStyle is the IronWord contract in C# for a Word style's shared base, exposing ParagraphStyle, TextStyle, and table facets, implemented by BaseStyle.`
- v2 (human): `Read what a Word style inherits in C# through the IronWord IBaseStyle contract: obtain it from a derived style's BaseStyle property to see its base facets.`
- v3 (balanced): `Reference for the IronWord IBaseStyle interface in C#: the shared style base, with paragraph, text, and table facets, returned by a derived style.`

---

## Structured data

**TechArticle abstract**

> A derived Word style in C# exposes its shared base through the IronWord IBaseStyle contract, implemented by BaseStyle. You obtain an IBaseStyle from a ParagraphStyle, TextStyle, TableStyle, or TableCellStyle through its BaseStyle property rather than constructing one. Its ParagraphStyle, TextStyle, TableStyle, and TableCellStyle facets, together with InheritedStyle, describe the base values a derived style reads.

**FAQPage entries**

```json
[
  {
    "question": "Where does IBaseStyle live in the IronWord API?",
    "answer": "IBaseStyle is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IStyle, IWordDocumentObjectProperty, and IDocumentObjectProperty, and is implemented by BaseStyle."
  },
  {
    "question": "How do you get an IBaseStyle in IronWord?",
    "answer": "Read the BaseStyle property of a derived style such as ParagraphStyle, TextStyle, TableStyle, or TableCellStyle, which is typed as IBaseStyle. The concrete implementor is BaseStyle; you usually obtain the base from a derived style rather than constructing it."
  }
]
```
