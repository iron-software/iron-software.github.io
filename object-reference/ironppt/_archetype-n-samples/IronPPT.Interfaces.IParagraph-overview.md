<!--
N-Full / interface. Frame B (identity-by-role). Implementor: Paragraph. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IParagraph.html
-->

## Injected overview (Markdown)

`IParagraph` is the line of text you work through when adding or restyling a block of writing inside a slide. It models a single paragraph: the runs of text it holds, the horizontal alignment of those runs, and the paragraph style that controls spacing, indentation, and bullets. Reach for it whenever a slide needs a new sentence, a re-aligned heading, or a styled list item, and lean on the FAQ below to tell it apart from `IRun`, which is the smaller text fragment a paragraph contains.

A developer rarely constructs a paragraph directly. The concrete implementor in IronPPT is `Paragraph`, which you obtain from a text-bearing element (a text box or shape) and then populate. Because `IParagraph` extends `IContentElement` and `IHasParagraphStyle`, a paragraph also behaves as a positioned element in the slide tree and exposes the paragraph style other shaping calls read from. Coding against the interface keeps editing code decoupled from how the paragraph was created.

Working with it centers on a few everyday members. `AddText` appends an `IText` (or a plain string) and returns the added text so you can style it; `Texts` lists the `IText` items already present; `Alignment` reads and writes the `TextAlignment` for the line; `SetAlignment` and `SetStyle` apply alignment and an `IParagraphStyle` in a chainable form and return the same `IParagraph`. `Index` reports the paragraph's position among its siblings, and `Clone` copies it.

```csharp
IParagraph paragraph = textBox.AddParagraph();
paragraph.AddText("Quarterly results");
paragraph.SetAlignment(TextAlignment.Center);
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) walks through placing text on a slide, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows how alignment and spacing come together, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) demonstrates building one from scratch.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IParagraph Interface - IronPPT C# API`
- v2 (human): `IParagraph: Slide Text Paragraphs in C#`
- v3 (balanced): `IParagraph Interface | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IParagraph is the IronPPT paragraph contract in C#: it holds IText runs, sets TextAlignment, and applies an IParagraphStyle, implemented by Paragraph.`
- v2 (human): `Add and style a line of slide text in C# through IronPPT's IParagraph contract: append IText runs, set alignment, and apply a paragraph style.`
- v3 (balanced): `Reference for the IronPPT IParagraph interface in C#: the paragraph contract that carries text runs, alignment, and style, implemented by Paragraph.`

---

## Structured data

**TechArticle abstract**

> Add or restyle a line of slide text in C# through IronPPT's IParagraph contract. A paragraph holds its IText runs, exposes a TextAlignment, and carries an IParagraphStyle for spacing, indentation, and bullets. AddText appends text, SetAlignment and SetStyle apply formatting chainably, and the concrete implementor is Paragraph, obtained from a text-bearing element rather than constructed directly.

**FAQPage entries**

```json
[
  {
    "question": "Where does IParagraph live in the IronPPT API?",
    "answer": "IParagraph is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It extends IContentElement and IHasParagraphStyle, so a paragraph is also a positioned slide element that exposes a paragraph style."
  },
  {
    "question": "What implements IParagraph in IronPPT?",
    "answer": "The Paragraph class in IronPPT.Models implements IParagraph. You obtain a paragraph from a text-bearing element such as a text box or shape rather than constructing it, then call AddText and SetAlignment to fill and format it."
  },
  {
    "question": "What is the difference between IParagraph and IRun?",
    "answer": "IParagraph is the whole line of text and owns alignment and paragraph style; IRun is a smaller text fragment inside a paragraph that carries its own ITextStyle. A paragraph's Texts property lists the IText items the runs hold."
  }
]
```
