<!--
N-Full / interface. Frame C (when-fronted). Implementor: ParagraphStyle. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IParagraphStyle.html
-->

## Injected overview (Markdown)

When a paragraph needs consistent spacing, indentation, alignment, or a bullet, `IParagraphStyle` is the contract that carries those settings. It is the paragraph-level styling object a developer reads from or assigns when shaping a list, a heading, or a body block, and it is distinct from `ITextStyle`, which controls the look of the characters themselves rather than the paragraph that holds them. The FAQ below resolves that pairing.

A developer attaches the style to a paragraph rather than building a freestanding one. The concrete implementor in IronPPT is `ParagraphStyle`, and a paragraph applies it through `SetStyle` (on `IParagraph`). Because the implementor is built on the document-style hierarchy, the same style shape carries across the elements that accept paragraph styling, so layout rules stay uniform from one paragraph to the next. Reading the style back from a paragraph lets editing code adjust one setting without rebuilding the whole style.

The members fall into spacing, indentation, and bullet groups. For spacing, `SpaceBefore` and `SpaceAfter` set the gaps above and below the paragraph as `DocUnit` values, `LineSpacing` sets the inter-line distance, and `ContextualSpacing` suppresses spacing between same-style paragraphs so a tight list does not gain extra gaps. For layout, `Alignment` sets the horizontal `TextAlignmentTypeValues`, `Indent` sets the leading inset as a `DocUnit`, and `RightToLeft` flips the reading direction for languages that need it. For lists, `Bullet` assigns an `IBullet` that defines the marker while `NoBullet` removes any marker entirely. `ContextualSpacing`, `NoBullet`, and `RightToLeft` are nullable, so an unset value can inherit from the document defaults rather than forcing a choice.

```csharp
IParagraphStyle style = new ParagraphStyle();
style.Alignment = TextAlignmentTypeValues.Center;
style.SpaceAfter = new DocUnit { Point = 12 };
paragraph.SetStyle(style);
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) builds a style end to end, the [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) walks through the bullet members, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers the text the style applies to.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IParagraphStyle Interface - IronPPT C# API`
- v2 (human): `IParagraphStyle: Paragraph Styling in C#`
- v3 (balanced): `IParagraphStyle | IronPPT .NET API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IParagraphStyle is the IronPPT paragraph-style contract in C#: spacing, indent, alignment, and bullet members, implemented by ParagraphStyle.`
- v2 (human): `Style a slide paragraph in C# through IronPPT's IParagraphStyle contract: set spacing, indentation, alignment, and bullets, then apply it with SetStyle.`
- v3 (balanced): `Reference for the IronPPT IParagraphStyle interface in C#: the paragraph styling contract for spacing, indents, and bullets, implemented by ParagraphStyle.`

---

## Structured data

**TechArticle abstract**

> Style a slide paragraph in C# through IronPPT's IParagraphStyle contract. It carries the paragraph-level settings: SpaceBefore, SpaceAfter, LineSpacing, and ContextualSpacing for spacing, Alignment, Indent, and RightToLeft for layout, and Bullet and NoBullet for lists. The concrete implementor is ParagraphStyle, applied to a paragraph through SetStyle rather than built as a freestanding object.

**FAQPage entries**

```json
[
  {
    "question": "Where does IParagraphStyle live in the IronPPT API?",
    "answer": "IParagraphStyle is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. The concrete implementor ParagraphStyle is built on the document-style hierarchy, so paragraph styling stays consistent across elements that accept it."
  },
  {
    "question": "What implements IParagraphStyle in IronPPT?",
    "answer": "The ParagraphStyle class in IronPPT.Models implements IParagraphStyle. You assign a style to a paragraph with SetStyle on IParagraph rather than constructing a standalone style, then set members such as Alignment, SpaceAfter, and Bullet."
  },
  {
    "question": "What is the difference between IParagraphStyle and ITextStyle?",
    "answer": "IParagraphStyle controls the paragraph: spacing, indentation, alignment, and bullets. ITextStyle controls the characters inside it, such as TextFont, IsBold, and Color. A paragraph carries a paragraph style while its text runs carry text styles."
  }
]
```
