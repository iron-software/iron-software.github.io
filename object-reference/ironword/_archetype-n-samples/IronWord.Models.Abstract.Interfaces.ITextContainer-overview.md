<!--
N-Mid / interface. Frame D lead, Frame A abstract. IronWord. Verified 2026-06-23.
Members: AddText(TextContent), AddText(string), ExtractText(), FindText(string), Remove(TextContent), ReplaceText(string, string).
Implementors verified: DocumentSection, Paragraph, Run (all declare ITextContainer).
Standalone interface (no extends).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Abstract.Interfaces.ITextContainer.html
-->

## Injected overview (Markdown)

Adding, finding, and replacing words inside a document part runs through `ITextContainer`, the IronWord contract for text-bearing elements. It lets the same string-handling calls work on a section, a paragraph, or a run, so editing logic stays the same regardless of which element holds the words. It is the text-only counterpart to `IDrawContainer`, which handles images and shapes instead.

You obtain a text container by holding a concrete element that implements it: `DocumentSection`, `Paragraph`, and `Run` all satisfy `ITextContainer`. Coding against the interface keeps a find-and-replace routine reusable across those element types and easy to unit test.

The key methods are `AddText`, which appends a `string` or a `TextContent` and returns the created `TextContent`, `ExtractText`, which returns the container's text as a `string`, `FindText`, which locates a substring and returns the matching `TextContent`, `ReplaceText`, which swaps one `string` for another in place, and `Remove`, which deletes a `TextContent` and returns a `bool` for whether it was found.

```csharp
ITextContainer container = paragraph;
container.AddText("Quarterly summary");
container.ReplaceText("draft", "final");
```

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers inserting content and the [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) handles substitutions.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITextContainer Interface - IronWord C# API`
- v2 (human): `ITextContainer: Add & Replace Text in C#`
- v3 (balanced): `ITextContainer Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITextContainer is the IronWord C# text contract: AddText, ExtractText, FindText, ReplaceText, and Remove, implemented by DocumentSection, Paragraph, and Run.`
- v2 (human): `Add, find, and replace words in a Word document in C# through IronWord's ITextContainer contract, satisfied by DocumentSection, Paragraph, and Run.`
- v3 (balanced): `Reference for the IronWord ITextContainer interface in C#: the text contract with AddText and ReplaceText, implemented by Paragraph and Run.`

---

## Structured data

**TechArticle abstract**

> ITextContainer carries the text-editing members of an IronWord document element in C#. AddText appends a string or TextContent, ExtractText returns the text, FindText locates a substring, ReplaceText swaps one string for another, and Remove deletes a TextContent. DocumentSection, Paragraph, and Run implement it.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITextContainer live in the IronWord API?",
    "answer": "ITextContainer is an interface in the IronWord.Models.Abstract.Interfaces namespace, shipped in IronWord.dll. It is a standalone contract that declares AddText, ExtractText, FindText, ReplaceText, and Remove, and it is implemented by DocumentSection, Paragraph, and Run."
  }
]
```
