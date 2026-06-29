<!--
N-Mid (1 property: Type; two ctors). Frame D. IronWord.
Verified 2026-06-23: Break(), Break(BreakValue), Type (BreakValue, get-only). Base ContentElement. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Break.html
-->

## Injected overview (Markdown)

Forcing the text after a point onto a new line, column, or page is what `Break` puts into a Word document. It is the content element a developer adds between runs or paragraphs to control where the flow stops and resumes, so a heading starts on a fresh page or a column wraps where intended.

Construct one with `new Break()` for a default break, or pass a `BreakValue` to `new Break(BreakValue)` when a specific kind is needed, such as a page or column break. The read-only `Type` property reports which `BreakValue` the break carries. A `Break` is added to the document the same way as any other content element, so it slots into a paragraph or section alongside text runs and images. Because `Break` derives from the shared content-element base, it also inherits `Remove`, `Clone`, and `Replace`, which let a developer take a break out or swap it without rebuilding the surrounding content.

```csharp
var pageBreak = new Break(BreakValue.Page);
```

The [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how content elements assemble, and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) walks through placing runs around a break.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Break Class - IronWord C# API Reference`
- v2 (human): `Break: Page & Column Breaks in C# Word`
- v3 (balanced): `Break Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add a page or column break in C# Word documents with the IronWord Break class. Construct it with a BreakValue and read the kind from the Type property.`
- v2 (human): `Control where text continues in a C# Word document using the IronWord Break class: insert page and column breaks between runs and paragraphs.`
- v3 (balanced): `Reference for the IronWord Break class in C#: insert a page or column break with a BreakValue and check its kind through the Type property.`

---

## Structured data

**TechArticle abstract**

> Break inserts a page or column break into a Word document in C# with IronWord. Construct it with new Break() for a default break or new Break(BreakValue) for a specific kind, then add it between runs or paragraphs. The read-only Type property reports the BreakValue the break carries, and Break inherits Remove, Clone, and Replace from its content-element base.

**FAQPage entries**

```json
[
  {
    "question": "Where does Break live in the IronWord API?",
    "answer": "Break is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ContentElement, so it is added to a document like any other content element and inherits Remove, Clone, and Replace."
  },
  {
    "question": "How do you add a page break to a Word document in C#?",
    "answer": "Construct a Break with the page BreakValue, for example new Break(BreakValue.Page), and add it to a paragraph or section where the text should continue on the next page. The Type property reports which kind of break it holds."
  }
]
```
