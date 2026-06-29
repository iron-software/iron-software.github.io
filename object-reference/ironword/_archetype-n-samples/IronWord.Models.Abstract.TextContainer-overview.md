<!--
N-Full (abstract base, text-bearing parent). Frame C. IronWord. Verified 2026-06-23.
Members verified: AddChild(IWordDocumentObject[]), AddText(TextContent), AddText(String), ExtractText(), FindText(String), Remove(TextContent), ReplaceText(String, String).
Extends ParentElement; implements ITextContainer. Target: IronWord.Models.Abstract.TextContainer.html
-->

## Injected overview (Markdown)

When a document node needs to carry and edit running text in C#, `TextContainer` supplies that behavior. It is the base for parent nodes whose job is to hold text content, layering text-specific operations on top of the general child management it inherits from `ParentElement`. A developer reaches its members whenever the task is reading, searching, or rewriting the words inside a container rather than rearranging arbitrary nodes.

A `TextContainer` is obtained as the base of a concrete text-bearing node built or read from a document, not constructed on its own, since the type is abstract. From there the work is direct: add text, find it, and replace it. The container also satisfies the `ITextContainer` contract, so code that only needs the text surface can depend on that interface instead of the concrete node.

The everyday members read in plain terms. `AddText` appends content, accepting either a ready `TextContent` node or a raw `string` that the container wraps for you. `ExtractText` returns the container's text as a single string, handy for inspection or export. `FindText` locates a `TextContent` matching a search string, and `ReplaceText` swaps one substring for another across the container. `Remove` detaches a specific `TextContent`, and `AddChild` is overridden here so added nodes integrate with the text model. Together these cover the common edit-in-place tasks without dropping to the lower-level child API.

```csharp
using IronWord;
using IronWord.Models;

WordDocument doc = new WordDocument("input.docx");
Paragraph paragraph = doc.Paragraphs[0];
paragraph.ReplaceText("draft", "final");
Console.WriteLine(paragraph.ExtractText());
```

The [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) changes content in place, the [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) covers find-and-replace, and the [extract text how-to](https://ironsoftware.com/csharp/word/how-to/extract-text/) reads it back out.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextContainer Class - IronWord C# API`
- v2 (human): `TextContainer: Edit Word Text Nodes in C#`
- v3 (balanced): `TextContainer Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `TextContainer is the IronWord base for text-bearing Word nodes in C#: AddText, ExtractText, FindText, ReplaceText, and Remove work the text inside.`
- v2 (human): `Add, find, and replace running text in a Word document in C# with IronWord's TextContainer base: edit the words in a node without low-level child code.`
- v3 (balanced): `Reference for the IronWord TextContainer class in C#: the abstract text-bearing base with AddText, ExtractText, FindText, and ReplaceText members.`

---

## Structured data

**TechArticle abstract**

> When a Word document node needs to carry and edit running text in C#, the IronWord TextContainer base class supplies that behavior. It extends ParentElement and satisfies ITextContainer, adding AddText for appending content, ExtractText for reading it back, FindText for locating a TextContent, ReplaceText for find-and-replace, and Remove for detaching a specific text node.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextContainer live in the IronWord API?",
    "answer": "TextContainer is an abstract class in the IronWord.Models.Abstract namespace, shipped in IronWord.dll. It derives from ParentElement and implements the ITextContainer interface, so it is both a child-holding node and a text-bearing one."
  },
  {
    "question": "How do you replace text inside a Word document node in C#?",
    "answer": "Call ReplaceText with the search and replacement strings to swap text across the container, or FindText to locate a matching TextContent first. Use AddText to append content and ExtractText to read the container's text as a single string."
  },
  {
    "question": "Can you depend on the text surface without the concrete node type?",
    "answer": "Yes. TextContainer implements ITextContainer, so code that only needs to add, find, or replace text can take an ITextContainer instead of a concrete node. The Remove overload detaches a specific TextContent from the container."
  }
]
```
