<!--
N-Mid (small class). Frame D. IronWord. Members verified 2026-06-23 against IronWord.Models.Text.html. Base: TextContentElement.
Members: ctors Text()/Text(String); Append(Text); Split(String).
S9 pair: TextContent (IronWord.Models) is the richer sibling — disambiguated in FAQ. Verified TextContent ctor/Append/Split on its page.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Text.html
-->

## Injected overview (Markdown)

Holding a plain run of text in IronWord's content model is what `Text` does. It is a lightweight text element a developer constructs from a string and combines with others, sitting alongside the richer `TextContent` that adds styling. Reach for `Text` when the job is the text itself rather than its formatting.

Construct one empty (`new Text()`) or from a string (`new Text("Quarterly report")`). Two methods shape it: `Append` joins another `Text` to this one and returns the combined `Text`, and `Split` divides the text on a delimiter and returns a `List<Text>`, which is useful for breaking a source string into separate pieces. Both keep the work at the text level without involving paragraph or run styling.

Because `Text` derives from `TextContentElement`, it participates in the same content hierarchy as other elements, while `TextContent` is the type to choose when the text also needs a font, color, or weight applied. Build a `Text`, append or split as the source requires, and pass the result on through the content model.

```csharp
using IronWord.Models;

Text text = new Text("Quarterly");
text.Append(new Text(" report"));
```

The [add style to text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers the styled text path, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where text elements sit in the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Text Class - IronWord C# API Reference`
- v2 (human): `Text: Plain Text Elements in C#`
- v3 (balanced): `Text Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Work with plain text elements in C# with the IronWord Text class: construct from a string, Append another Text, and Split on a delimiter into a list.`
- v2 (human): `Handle plain runs of text with the IronWord Text class in C#: build from a string, join with Append, and break apart with Split when formatting is not needed.`
- v3 (balanced): `Reference for the IronWord Text class in C#: a lightweight text element built from a string, with Append and Split, alongside the richer TextContent.`

---

## Structured data

**TechArticle abstract**

> Holding a plain run of text in IronWord's content model in C# runs through the Text class. Construct it empty or from a string, join another with Append, and break it apart with Split, which returns a list of Text. It is the lightweight counterpart to TextContent, the type to choose when the text also needs font, color, or weight.

**FAQPage entries**

```json
[
  {
    "question": "Where does Text live in the IronWord API?",
    "answer": "Text is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from TextContentElement and represents a plain text element built from a string."
  },
  {
    "question": "What is the difference between Text and TextContent in IronWord?",
    "answer": "Text is a lightweight plain text element with Append and Split, both in IronWord.Models. TextContent is the richer sibling that also carries a Style for font, color, and weight, so choose TextContent when the text needs formatting."
  }
]
```
