<!--
N-Mid / abstract class (5 members). Frame D. IronPPT. Namespace IronPPT.Models.Abstract. Base ContentElement.
Documented derived type: Text (verified: IronPPT.Models.Text : TextContentElement).
Members verified 2026-06-23: Text (string), TextStyle (ITextStyle), Find, Replace, ToString.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Abstract.TextContentElement.html
-->

## Injected overview (Markdown)

Searching and editing the text on a single styled element runs through `TextContentElement`. It is the abstract base for a stylable piece of text, exposing the string itself plus the find-and-replace operations a developer uses to update wording inside a presentation without rebuilding the element.

The concrete element that extends it in IronPPT is `Text`, so most code works with a `Text` instance and inherits this surface. The `Text` property is the `string` the element carries, and `TextStyle` is the `ITextStyle` that formats it. `Find` searches the text for a term and returns the matching index positions as a `List<int>`, with optional `RegexOptions`, whole-word, and case-sensitive flags. `Replace` swaps one term for another using the same options and returns the updated `ITextContentElement`, so a replace can be chained. `ToString` returns the element's text for quick inspection. Because the base is abstract, you reach these members through the derived `Text` element rather than constructing the base directly.

```csharp
Text element = new Text();
element.Text = "Draft report";
element.Replace("Draft", "Final");
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing text on a slide, and the [slide element tutorial](https://ironsoftware.com/csharp/ppt/tutorials/slide-element/) puts text elements in the wider slide model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextContentElement - IronPPT C# API Reference`
- v2 (human): `TextContentElement: Find & Replace Slide Text C#`
- v3 (balanced): `TextContentElement Class | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Find and replace text on a slide element in C# with the IronPPT TextContentElement base: Find returns match indices, Replace swaps terms, TextStyle formats.`
- v2 (human): `Search and edit slide text in C# through the IronPPT TextContentElement base, inherited by the Text element: use Find, Replace, and TextStyle.`
- v3 (balanced): `Reference for the IronPPT TextContentElement base in C#: the Text property, Find and Replace operations, and TextStyle, inherited by the Text element.`

---

## Structured data

**TechArticle abstract**

> Finding and replacing the text on a single styled element runs through the IronPPT TextContentElement abstract base in C#. The Text property holds the string and TextStyle formats it, while Find returns the index positions of matches as a List and Replace swaps one term for another with optional regex, whole-word, and case flags. The concrete Text element extends it, so code works through Text.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextContentElement live in the IronPPT API?",
    "answer": "TextContentElement is an abstract class in the IronPPT.Models.Abstract namespace, shipped in IronPPT.dll. It derives from ContentElement and implements ITextContentElement and IHasTextStyle. The concrete Text element extends it."
  },
  {
    "question": "How do you find and replace text on a slide element in C#?",
    "answer": "Work through a Text element, which inherits this base. Call Find with a search term to get the matching index positions as a List of int, or call Replace with a search term and replacement to update the wording. Both accept optional regex, whole-word, and case-sensitive flags."
  }
]
```
