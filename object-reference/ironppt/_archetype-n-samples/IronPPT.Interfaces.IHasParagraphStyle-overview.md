<!--
N-Mid / interface (1 member). Frame F (imperative). No declared base. Implementors: Paragraph, TextBox. IronPPT. Members verified 2026-06-23.
Target: IronPPT.Interfaces.IHasParagraphStyle.html
-->

## Injected overview (Markdown)

Reach for `IHasParagraphStyle` when code needs to read or set paragraph formatting without caring which element carries it. The contract marks an element as owning a paragraph style, so a method that aligns text or sets spacing can accept the contract and work the same on every element that has one. A developer meets it while applying consistent paragraph formatting across a presentation.

An element that has a paragraph style is obtained from the slide content it lives in, so the contract is usually reached through an existing paragraph or text box and then read or assigned. It carries a single member: `Style`, an `IParagraphStyle` holding the alignment, indentation, spacing, and related paragraph settings. Set `Style` to apply a prepared style, or read it to inspect the current formatting. Concrete implementors in IronPPT include `Paragraph` and `TextBox`, so the same style assignment works whether the target is a single paragraph or the box that contains it.

```csharp
element.Style = paragraphStyle;
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets paragraph formatting, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) adds the text it applies to.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IHasParagraphStyle - IronPPT C# API Reference`
- v2 (human): `IHasParagraphStyle: Owns a Paragraph Style (C#)`
- v3 (balanced): `IHasParagraphStyle Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT IHasParagraphStyle interface in C#: a Style property of type IParagraphStyle marking an element that owns paragraph formatting.`
- v2 (human): `Read or set paragraph formatting in C# through the IronPPT IHasParagraphStyle contract, implemented by Paragraph and TextBox.`
- v3 (balanced): `Reference for the IronPPT IHasParagraphStyle interface in C#: the Style contract for paragraph formatting, implemented by Paragraph and TextBox.`

---

## Structured data

**TechArticle abstract**

> Read or set paragraph formatting in C# through the IronPPT IHasParagraphStyle contract. It carries a single Style member, an IParagraphStyle holding alignment, indentation, and spacing. Concrete implementors include Paragraph and TextBox, so the same assignment applies a style to a single paragraph or to the box that contains it.

**FAQPage entries**

```json
[
  {
    "question": "Where does IHasParagraphStyle live in the IronPPT API?",
    "answer": "IHasParagraphStyle is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It declares no base interface and is implemented by classes such as Paragraph and TextBox that own a paragraph style."
  }
]
```
