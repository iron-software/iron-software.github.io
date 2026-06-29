<!--
N-Full / interface. Frame E (feature-fronted). Implementor: ParagraphIndention. 12 IDocUnit props -> functional buckets. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IParagraphIndention.html
-->

## Injected overview (Markdown)

Margin offsets for a paragraph, the left and right insets plus the special first-line and hanging measurements, are set through `IParagraphIndention`. Reach for it when a bulleted list needs its text pulled in from the bullet, when a quotation needs to sit further from the slide edge, or when the opening line of a paragraph should start at a different position than the rest. Every measurement is an `IDocUnit`, so the values carry their own unit rather than a bare number, which is the disambiguation the FAQ also resolves against the simpler character-count members.

The contract is reached through a paragraph's style rather than created on its own. The concrete implementor in IronPPT is `ParagraphIndention`, and the indention object is read and written as part of the paragraph styling you apply when laying out text. Coding against the interface keeps the layout logic independent of how the paragraph acquired its indention.

The twelve properties group into a few jobs. The edge insets are `Left` and `Right`, the distance the whole paragraph sits from each margin. The first-line controls are `FirstLine` (extra indent on the opening line only) and `Hanging` (the opposite, where every line after the first is indented). Each of those has a character-counted twin for fixed-width contexts: `LeftChars`, `RightChars`, `FirstLineChars`, and `HangingChars`. Finally `Start`, `End`, `StartCharacters`, and `EndCharacters` express the same offsets in logical writing-direction terms, which matters for right-to-left layouts where start and end are not left and right.

```csharp
IParagraphIndention indention = new ParagraphIndention();
indention.Left = new DocUnit { Point = 36 };
indention.Hanging = new DocUnit { Point = 18 };
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) shows indentation alongside spacing, the [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) pairs hanging indents with bullets, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing the text those indents apply to.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IParagraphIndention Interface - IronPPT C#`
- v2 (human): `IParagraphIndention: Paragraph Indents in C#`
- v3 (balanced): `IParagraphIndention | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IParagraphIndention is the IronPPT indent contract in C#: Left, Right, FirstLine, and Hanging offsets as IDocUnit values, implemented by ParagraphIndention.`
- v2 (human): `Set paragraph indents in C# through IronPPT's IParagraphIndention contract: left and right insets, first-line indents, and hanging offsets as unit values.`
- v3 (balanced): `Reference for the IronPPT IParagraphIndention interface in C#: left, right, first-line, and hanging indent offsets, implemented by ParagraphIndention.`

---

## Structured data

**TechArticle abstract**

> Set the margin offsets of a paragraph in C# through IronPPT's IParagraphIndention contract. Left and Right control the edge insets, FirstLine and Hanging control the opening line, each measurement is an IDocUnit that carries its own unit, and character-counted and writing-direction twins handle fixed-width and right-to-left layouts. The concrete implementor is ParagraphIndention, reached through a paragraph's style.

**FAQPage entries**

```json
[
  {
    "question": "Where does IParagraphIndention live in the IronPPT API?",
    "answer": "IParagraphIndention is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface; its members are IDocUnit measurements reached through a paragraph's style."
  },
  {
    "question": "What implements IParagraphIndention in IronPPT?",
    "answer": "The ParagraphIndention class in IronPPT.Models implements IParagraphIndention. You reach the indention object through paragraph styling rather than constructing it, then set Left, Right, FirstLine, or Hanging."
  },
  {
    "question": "What is the difference between Left and LeftChars on IParagraphIndention?",
    "answer": "Left is the inset expressed as an IDocUnit measurement, while LeftChars expresses the same offset as a character count for fixed-width contexts. Start and End express the offsets in writing-direction terms for right-to-left layouts."
  }
]
```
