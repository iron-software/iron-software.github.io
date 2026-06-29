<!--
N-Mid (abstract text-leaf base). Frame D. IronWord. Verified 2026-06-23.
Members verified: Style, Text, Find(...), Replace(...), ToString(). Extends ContentElement; implements ITextContentElement. Garbage 'lyduza' NOT named. Derived: Text. Target: IronWord.Models.Abstract.TextContentElement.html
-->

## Injected overview (Markdown)

Carrying a styled run of words as a single document node in C# is what `TextContentElement` defines. It is the base for the leaf node that holds text directly, pairing the string content with its formatting and the search-and-replace operations that act on it. The concrete type that extends it is `Text`, the node a developer normally creates and edits.

A `TextContentElement` is obtained as the base of a `Text` node built or read from a document, not constructed on its own, since the type is abstract; it also satisfies the `ITextContentElement` contract. `Text` is the literal string the node holds, and `Style` is the `TextStyle` that formats it, covering font, color, and emphasis. `Find` returns the character positions where a search string occurs, with optional regex, whole-word, and case-sensitive switches. `Replace` swaps one substring for another using the same options and returns the updated `ITextContentElement`. `ToString` yields the node's text for quick inspection.

```csharp
using IronWord.Models;

Text run = new Text("Quarterly Report");
run.Replace("Quarterly", "Annual");
```

The [edit text how-to](https://ironsoftware.com/csharp/word/how-to/edit-text/) changes run content, the [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) covers find-and-replace, and the [add style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) applies a TextStyle.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextContentElement - IronWord C# API`
- v2 (human): `TextContentElement: Styled Word Text in C#`
- v3 (balanced): `TextContentElement Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `TextContentElement is the IronWord base for a styled Word text node in C#: it pairs Text and Style with Find and Replace for search-and-replace edits.`
- v2 (human): `Hold and edit a styled run of Word text in C# with IronWord's TextContentElement base: read its Text and Style, then Find and Replace its content.`
- v3 (balanced): `Reference for the IronWord TextContentElement class in C#: the abstract base behind Text, with Text, Style, Find, and Replace members.`

---

## Structured data

**TechArticle abstract**

> Carrying a styled run of words as a single Word document node in C# is what the IronWord TextContentElement base class defines. The concrete Text node extends it. It pairs the Text string with a TextStyle through the Style property, and exposes Find to locate positions of a search string and Replace to swap substrings, both with optional regex, whole-word, and case-sensitivity switches.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextContentElement live in the IronWord API?",
    "answer": "TextContentElement is an abstract class in the IronWord.Models.Abstract namespace, shipped in IronWord.dll. It derives from ContentElement and implements the ITextContentElement interface; the concrete Text node extends it."
  },
  {
    "question": "How do you find and replace text in a run in C#?",
    "answer": "Call Find with a search string to get the positions where it occurs, or Replace with the search and replacement strings to swap content; both accept optional regex, whole-word, and case-sensitive arguments. Read Text for the literal content and Style for its TextStyle."
  }
]
```
