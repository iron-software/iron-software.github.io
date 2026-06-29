<!--
N-Mid / interface. Frame D. Implementors: Text, TextContentElement (abstract base). IronPPT. Members verified 2026-06-23.
ITextContentElement : IHasTextStyle. Own: Text, Find, Replace, ToString. Target: IronPPT.Interfaces.ITextContentElement.html
-->

## Injected overview (Markdown)

Reading and rewriting the words of a text element in C# runs through `ITextContentElement`. It is the contract for an element whose content is editable text, giving a developer the find-and-replace surface that turns a placeholder deck into a finished one without rebuilding it.

A developer reaches this contract through a concrete element: `Text` implements it (a single run of text), and `TextContentElement` is the abstract base that text-bearing elements share. Code that searches or substitutes text usually works against this contract so the same routine handles any text element. The members are the editing toolkit: the `Text` property holds the current string, `Find` returns a `List<int>` of match positions for a search string (with optional regex, whole-word, and case-sensitivity flags), `Replace` swaps matched text and returns the updated `ITextContentElement` for chaining, and `ToString` yields the plain text. The `TextStyle` inherited from `IHasTextStyle` carries the formatting that travels with that text.

```csharp
ITextContentElement element = run;
element.Replace("2024", "2025");
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) places editable text, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds text content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ITextContentElement - IronPPT C# API`
- v2 (human): `ITextContentElement: Find & Replace Text in C#`
- v3 (balanced): `ITextContentElement Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `ITextContentElement is the IronPPT editable-text contract in C#: read the Text property and call Find and Replace to edit element content.`
- v2 (human): `Find and replace text on a slide in C# through the IronPPT ITextContentElement contract: search by string or regex and rewrite matched text.`
- v3 (balanced): `Reference for the IronPPT ITextContentElement interface in C#: the editable-text contract behind Text, with Text, Find, and Replace.`

---

## Structured data

**TechArticle abstract**

> Editing the words of a slide element in C# runs through the IronPPT ITextContentElement contract. The Text property holds the string, Find returns a List<int> of match positions with optional regex and case flags, Replace swaps matched text and returns the element, and ToString yields plain text. Text implements it, with TextContentElement as the shared abstract base.

**FAQPage entries**

```json
[
  {
    "question": "Where does ITextContentElement live in the IronPPT API?",
    "answer": "ITextContentElement is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IHasTextStyle. Text implements it directly, and TextContentElement is the abstract base text-bearing elements share."
  }
]
```
