<!--
N-Mid / interface (marker; extends IText, IWordDocumentObject, ICloneable, ...). Frame D. Implementor: TextContent. IronWord. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.IWordTextObject.html
-->

## Injected overview (Markdown)

Reading or editing a run of text already in a Word document in C# runs through `IWordTextObject`. The contract represents a single text element a document contains, so code that walks or rewrites content can treat every piece of text uniformly rather than binding to one concrete class. It composes the shared text, document-object, cloning, and serialization abstractions, which together expose the text content, its identity in the document, and its ability to be copied and round-tripped.

The concrete implementor in IronWord is `TextContent`, the type code receives when it reaches text while traversing a document. Most code names `TextContent` directly; the interface matters when a method accepts or returns text by contract, which keeps editing routines decoupled from how the text was originally written. Because `IWordTextObject` extends `ICloneable`, an implementation can be duplicated, and because it extends the serialization abstraction, it persists with the document model. Work through the contract when a routine should accept any document text regardless of its source.

The [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) rewrites existing text, and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) writes new content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IWordTextObject Interface - IronWord C# API`
- v2 (human): `IWordTextObject: C# Word Text Contract`
- v3 (balanced): `IWordTextObject Interface | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IWordTextObject is IronWord's C# contract for a text element in a Word document, implemented by the TextContent class for reading and editing.`
- v2 (human): `Read and edit a run of text in a Word document in C# through IronWord's IWordTextObject contract, implemented by the TextContent class.`
- v3 (balanced): `Reference for the IronWord IWordTextObject interface in C#: the document text contract implemented by TextContent for reading and editing.`

---

## Structured data

**TechArticle abstract**

> Reading or editing a run of text in a Word document in C# runs through IronWord's IWordTextObject contract. It represents a single text element a document contains and composes the shared text, document-object, cloning, and serialization abstractions. The concrete implementor is TextContent, received when traversal code reaches text.

**FAQPage entries**

```json
[
  {
    "question": "Where does IWordTextObject live in the IronWord API?",
    "answer": "IWordTextObject is an interface in the IronWord.Models namespace, shipped in IronWord.dll. It extends IText, IWordDocumentObject, ICloneable, and the serialization abstractions, and is implemented by the TextContent class."
  }
]
```
