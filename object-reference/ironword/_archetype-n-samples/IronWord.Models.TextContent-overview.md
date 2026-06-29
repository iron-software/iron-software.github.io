<!--
N-Full (TextContent, ~11 members + methods). Frame B. IronWord.
Members verified 2026-06-23: Text, Style(TextStyle), Color, Font(IFont), FontName, FontSize, FontStyle, IsBold, IsItalic; Append, Find, Replace, Split, ToJson, ToString. Ctors () and (string).
Cross-class verified: Paragraph.AddText / Run.AddText / FindText return TextContent; Run(params TextContent[]).
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TextContent.html
-->

## Injected overview (Markdown)

`TextContent` is the run of text you hold whenever you add, find, or restyle words inside a Word document. It carries the characters and the formatting that travel with them, so a single object answers both "what does this say" and "how does it look" when you build a paragraph in C#.

A developer rarely constructs one in isolation. `Paragraph.AddText` and `Run.AddText` return a `TextContent`, `FindText` hands one back when you search, and `Run` accepts a `params TextContent[]` of them. Once you hold the object it slots into the document's element tree, ready to be appended to, split, or styled before the file is saved.

Set the words through the `Text` property and the formatting through `Style`, which is a `TextStyle` covering bold, italic, color, font, and the effect stack. Convenience accessors expose the resolved formatting directly so you can read it without reaching into the style object: `IsBold` and `IsItalic` report the toggles, `Color` gives the fill, and `Font`, `FontName`, `FontSize`, and `FontStyle` describe the typeface. These accessors read the effective look, which is useful when you inspect a run that came back from a search rather than one you just built.

For editing existing copy, the run carries its own methods. `Append` joins another run onto this one and returns the combined run, `Split` breaks a run on a delimiter into a `List<TextContent>`, `Find` returns the offsets where a search string occurs, and `Replace` swaps text in place and hands back the updated element. `ToJson` and `ToString` serialize the run for logging, diffing, or inspection while you debug a document tree.

```csharp
using IronWord.Models;

var run = new TextContent("Quarterly Report");
run.Style = new TextStyle { IsBold = true, FontSize = 18 };
```

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) walks through placing runs in a document, the [style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) applies formatting, and the [replace words how-to](https://ironsoftware.com/csharp/word/how-to/replace-words/) shows find-and-replace on existing copy.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextContent Class - IronWord C# API Reference`
- v2 (human): `TextContent: Add & Style Text in C# Word Docs`
- v3 (balanced): `TextContent Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Add, find, and style text in C# Word documents with the IronWord TextContent class: set Text, assign a TextStyle, and use Append, Split, Find, and Replace.`
- v2 (human): `Work with runs of text in C# Word files using the IronWord TextContent class: hold the words and their formatting, then split, append, or replace them.`
- v3 (balanced): `Reference for the IronWord TextContent class in C#: carry text and its TextStyle, then append, split, find, and replace runs inside a Word document.`

---

## Structured data

**TechArticle abstract**

> Holding a run of text in a C# Word document goes through the IronWord TextContent class. It carries the characters in Text and the formatting in a TextStyle assigned to Style, while IsBold, IsItalic, Color, Font, FontName, FontSize, and FontStyle report the resolved look. Append, Split, Find, and Replace edit the run, and ToJson serializes it. Paragraph.AddText and Run.AddText return TextContent objects.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextContent live in the IronWord API?",
    "answer": "TextContent is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from ContentElement and implements ITextContentElement and IWordTextObject. Paragraph.AddText and Run.AddText return a TextContent that you then style or edit."
  },
  {
    "question": "How do you add and style text in a C# Word document?",
    "answer": "Create a TextContent with the text, then assign a TextStyle to its Style property to set bold, italic, color, font, and size. Add it to a paragraph with Paragraph.AddText, which itself returns the TextContent for further edits."
  },
  {
    "question": "How do you find and replace text in IronWord?",
    "answer": "Call Find on a TextContent to get the match offsets, or Replace to swap one string for another in place. Replace returns the updated element, and Split breaks a run into a List of TextContent on a delimiter."
  }
]
```
