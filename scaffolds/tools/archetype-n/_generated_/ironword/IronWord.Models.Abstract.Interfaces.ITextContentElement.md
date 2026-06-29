<!--
N-Mid / interface. Frame B lead, Frame E abstract. IronWord. Verified 2026-06-23.
Members: Style (get), Text (get/set) props; Find(string, Nullable<RegexOptions>, bool, bool), Replace(string, string, Nullable<RegexOptions>, bool, bool), ToString().
Implementors verified: Text, TextContent (both declare ITextContentElement).
Standalone interface (no extends).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Abstract.Interfaces.ITextContentElement.html
-->

## Injected overview (Markdown)

`ITextContentElement` is the contract you work through when a piece of document text needs to be read, searched, restyled, or rewritten on its own. It represents a single styled run of text and exposes the operations that act on that run, so editing code can treat any text element the same way. It differs from the container contracts: a text container holds and arranges text, while a text content element is the styled text itself.

You receive one from the concrete implementors `TextContent` and `Text`. Holding either gives you an `ITextContentElement`, which a search-and-edit method can accept without depending on the exact type.

The two properties are `Text`, the readable and writable `string` content, and `Style`, the read-only `TextStyle` applied to it. The `Find` method searches the content with optional `RegexOptions`, whole-word, and case-sensitive flags and returns a `List<int>` of match positions. `Replace` performs the substitution with the same options and returns the updated `ITextContentElement`, and `ToString` returns the plain text.

```csharp
ITextContentElement element = textContent;
element.Replace("draft", "final");
string body = element.Text;
```

The [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) and the [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) cover searching and rewriting content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITextContentElement Interface - IronWord C# API`
- v2 (human): `ITextContentElement: Find & Replace Text in C#`
- v3 (balanced): `ITextContentElement Interface | IronWord API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITextContentElement is the IronWord C# styled-text contract: Text, Style, Find, and Replace, implemented by TextContent and Text.`
- v2 (human): `Search, restyle, and rewrite a styled run of text in C# through IronWord's ITextContentElement contract, implemented by TextContent and Text.`
- v3 (balanced): `Reference for the IronWord ITextContentElement interface in C#: the styled-text contract with Find and Replace, implemented by TextContent and Text.`

---

## Structured data

**TechArticle abstract**

> A single styled run of text in IronWord is reached through ITextContentElement in C#. Text is the readable and writable string, Style is the applied TextStyle, Find returns match positions with optional regex and case flags, Replace rewrites the content, and ToString returns the plain text. TextContent and Text implement it.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITextContentElement live in the IronWord API?",
    "answer": "ITextContentElement is an interface in the IronWord.Models.Abstract.Interfaces namespace, shipped in IronWord.dll. It is a standalone contract declaring the Text and Style properties and the Find, Replace, and ToString methods, and it is implemented by TextContent and Text."
  }
]
```
