<!--
N-Mid / interface. Frame D (task-gerund). Implementor: Run. Disambiguate vs IParagraph. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IRun.html
-->

## Injected overview (Markdown)

Styling a stretch of text that differs from the rest of its paragraph runs through `IRun`. A run is a contiguous span of characters that share one look, so it is what a developer works with to make a single phrase bold, recolor a word, or change the font of part of a line without splitting the paragraph. The FAQ places it against `IParagraph`, the larger line a run lives inside.

A developer receives an `IRun` from the text element that holds it rather than constructing one. The concrete implementor in IronPPT is `Run`, and the run carries its own `TextStyle` of type `ITextStyle`, which is where the font, weight, and color of the span are set. `Texts` lists the `IText` items the run holds and `Index` reports its position among sibling runs. `AddText` appends an `IText` or a plain string and returns the added text, and `Clone` copies the run.

```csharp
IRun run = new Run();
run.AddText("Important");
run.TextStyle.IsBold = true;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing text, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) shows runs inside a paragraph.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IRun Interface - IronPPT C# API`
- v2 (human): `IRun: Styled Text Runs in C#`
- v3 (balanced): `IRun Interface | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IRun is the IronPPT text-run contract in C#: a span of uniformly styled text with a TextStyle, Texts, and AddText, implemented by Run.`
- v2 (human): `Style a span of slide text in C# through IronPPT's IRun contract: a run of uniform characters carrying its own TextStyle, implemented by Run.`
- v3 (balanced): `Reference for the IronPPT IRun interface in C#: the styled-text-run contract with TextStyle and AddText, implemented by Run.`

---

## Structured data

**TechArticle abstract**

> Style a contiguous span of slide text in C# through IronPPT's IRun contract. A run is a stretch of characters that share one look, carrying its own ITextStyle through the TextStyle property where font, weight, and color are set. Texts lists the IText items, AddText appends text, and Index reports position. The concrete implementor is Run, received from the text element that holds it.

**FAQPage entries**

```json
[
  {
    "question": "Where does IRun live in the IronPPT API?",
    "answer": "IRun is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface; it carries a TextStyle of type ITextStyle, a Texts list, and an Index, and is implemented by the Run class."
  },
  {
    "question": "What is the difference between IRun and IParagraph?",
    "answer": "IParagraph is the whole line of text and owns alignment and paragraph style; IRun is a smaller span inside it that carries its own ITextStyle. Use a run to style part of a paragraph, such as one bold phrase, without changing the rest of the line."
  }
]
```
