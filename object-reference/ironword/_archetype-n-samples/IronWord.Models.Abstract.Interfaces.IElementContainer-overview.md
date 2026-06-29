<!--
N-Mid / interface. Frame C lead, Frame B abstract. IronWord. Verified 2026-06-23.
Extends ITextContainer, IDrawContainer. Own members: Paragraphs, MultiLevelTextLists (props); AddParagraph, AddTable, AddMultiLevelTextList (methods).
Implementor verified: DocumentSection (declares IElementContainer).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Abstract.Interfaces.IElementContainer.html
-->

## Injected overview (Markdown)

When a document part has to carry every kind of body content at once, text, drawings, paragraphs, tables, and lists, `IElementContainer` is the IronWord contract that gathers those abilities into one type. It combines the text methods of `ITextContainer` and the drawing methods of `IDrawContainer` and then adds the paragraph, table, and list members on top, so a single object can build a full document region.

The concrete implementor is `DocumentSection`, which is the section you obtain from a document and write the bulk of your content into. Coding against `IElementContainer` rather than the section type keeps a content-building method reusable and easy to test.

The members worth knowing are `AddParagraph`, which appends a `Paragraph` and returns it, `AddTable`, which appends a `Table`, and `AddMultiLevelTextList`, which appends a `MultiLevelTextList`. The `Paragraphs` and `MultiLevelTextLists` properties expose the content already in the container as lists you can read back. Inherited text and drawing calls such as `AddText` and `AddImage` are available on the same object.

```csharp
IElementContainer section = documentSection;
section.AddParagraph(new Paragraph());
section.AddTable(new Table());
```

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) show how a section is assembled.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IElementContainer Interface - IronWord C# API`
- v2 (human): `IElementContainer: Build Section Content in C#`
- v3 (balanced): `IElementContainer Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IElementContainer is the IronWord C# contract combining text, drawing, paragraph, table, and list members, implemented by DocumentSection.`
- v2 (human): `Build a full Word document region in C# through IronWord's IElementContainer contract: add paragraphs, tables, and lists, implemented by DocumentSection.`
- v3 (balanced): `Reference for the IronWord IElementContainer interface in C#: the all-content section contract with AddParagraph and AddTable, implemented by DocumentSection.`

---

## Structured data

**TechArticle abstract**

> IElementContainer is the IronWord contract a document region works through in C# when it must hold text, drawings, paragraphs, tables, and lists together. It extends ITextContainer and IDrawContainer and adds AddParagraph, AddTable, and AddMultiLevelTextList, plus Paragraphs and MultiLevelTextLists. DocumentSection implements it.

**FAQPage entries**

```json
[
  {
    "question": "Where does IElementContainer live in the IronWord API?",
    "answer": "IElementContainer is an interface in the IronWord.Models.Abstract.Interfaces namespace, shipped in IronWord.dll. It extends ITextContainer and IDrawContainer, and adds the AddParagraph, AddTable, and AddMultiLevelTextList members. DocumentSection implements it."
  }
]
```
