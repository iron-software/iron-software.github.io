<!--
N-Full (class, 12 same-kind IDocUnit properties -> functional buckets per P7). Frame E. IronPPT.
Members verified 2026-06-23: Left, Right, Start, End, FirstLine, Hanging (each IDocUnit) plus
LeftChars, RightChars, StartCharacters, EndCharacters, FirstLineChars, HangingChars (each IDocUnit).
ctor(). Base Object; implements IParagraphIndention. NS IronPPT.Models, IronPPT.dll.
Target: IronPPT.Models.ParagraphIndention.html
-->

## Injected overview (Markdown)

Indentation for a slide paragraph, the left and right insets, the first-line offset, and the hanging indent, lives on `ParagraphIndention`. It gathers every indent measurement a paragraph can carry into one object, so margins and first-line behavior are configured together instead of as loose values. A developer reaches for it when a bulleted list, a quotation block, or an outline needs precise horizontal spacing.

A `ParagraphIndention` is created with its parameterless constructor and its properties are set as indentation values, then it is applied through the paragraph's style. Each property is an `IDocUnit`, a measurement that can be read or written in document units, which keeps the indents expressed the same way as the rest of a paragraph's spacing.

The properties fall into three functional groups. The **edge indents** set the side margins of the whole paragraph: `Left` and `Right` push the block in from each side, while `Start` and `End` are their writing-direction-aware equivalents that follow left-to-right or right-to-left text. The **first-line indents** control the opening line independently: `FirstLine` offsets it forward, and `Hanging` pulls it back to produce the hanging indent a bulleted or numbered list uses. The **character-count variants** mirror each of those in character units rather than absolute measurements, `LeftChars`, `RightChars`, `StartCharacters`, `EndCharacters`, `FirstLineChars`, and `HangingChars`, for layouts that prefer to indent by a number of characters.

```csharp
using IronPPT.Models;

var indention = new ParagraphIndention();
indention.Left = 15;
indention.Hanging = 5;
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets spacing and indentation on a paragraph, the [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) builds a list whose items use hanging indents, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers slide text.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParagraphIndention Class - IronPPT C# API`
- v2 (human): `ParagraphIndention: Indent Slide Text in C#`
- v3 (balanced): `ParagraphIndention | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Indent a slide paragraph in C# with the IronPPT ParagraphIndention class: set Left, Right, FirstLine, and Hanging as IDocUnit values.`
- v2 (human): `Control paragraph indentation in C# with the IronPPT ParagraphIndention class: set side margins, first-line offset, and hanging indent.`
- v3 (balanced): `Reference for the IronPPT ParagraphIndention class in C#: Left, Right, Start, End, FirstLine, and Hanging indents, plus character variants.`

---

## Structured data

**TechArticle abstract**

> Indentation for a slide paragraph lives on the IronPPT ParagraphIndention class in C#. It gathers the edge indents (Left, Right, Start, End), the first-line indents (FirstLine and Hanging), and character-count variants of each into one object. Every property is an IDocUnit measurement. Create one with its constructor, set the indents, and apply it through the paragraph's style for a list, quotation, or outline.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParagraphIndention live in the IronPPT API?",
    "answer": "ParagraphIndention is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and implements IParagraphIndention, holding a paragraph's indent measurements as IDocUnit values."
  },
  {
    "question": "How do you create a hanging indent in IronPPT?",
    "answer": "Set the Hanging property to pull the first line back from the rest of the paragraph, which produces the hanging indent a bulleted or numbered list uses. Pair it with Left to set the block's overall inset, or use the character variant HangingChars to indent by character count."
  },
  {
    "question": "What is the difference between Left and Start on ParagraphIndention?",
    "answer": "Left and Right set fixed side margins, while Start and End are their writing-direction-aware equivalents that follow left-to-right or right-to-left text. Each also has a character-count variant such as LeftChars or StartCharacters for indenting by a number of characters."
  }
]
```
