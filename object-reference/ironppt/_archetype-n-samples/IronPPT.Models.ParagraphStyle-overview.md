<!--
N-Full (class). Frame A. IronPPT.
Members verified 2026-06-23: Alignment(TextAlignmentTypeValues), Bullet(IBullet), ContextualSpacing(Nullable<bool>),
Indent(DocUnit), LineSpacing(DocUnit), NoBullet(Nullable<bool>), RightToLeft(Nullable<bool>), SpaceAfter(DocUnit), SpaceBefore(DocUnit).
ctor(). Base DocumentStyle; implements IDocumentStyle, IParagraphStyle. Cross-class: Paragraph.Style verified.
Example uses TextAlignmentTypeValues.Center, Bullet = new Bullet(). NS IronPPT.Models, IronPPT.dll.
Target: IronPPT.Models.ParagraphStyle.html
-->

## Injected overview (Markdown)

`ParagraphStyle` collects the formatting that applies to a whole paragraph, the bullets, spacing, indentation, and alignment a developer sets once and reuses across slides. It is the object assigned to a `Paragraph` through its `Style` property, so the look of a block of text is configured in one place instead of scattered across individual settings. It is the paragraph-level counterpart to the run and text styles that format inline content.

Build one with `new ParagraphStyle()` and set its properties, usually with an object initializer, then assign it to `paragraph.Style`. Because the style is a separate object, the same `ParagraphStyle` can be applied to several paragraphs to keep a list or a body of slides consistent, which is the usual reason to define it on its own rather than inline. It derives from the shared `DocumentStyle` base, so it carries the common styling behavior the presentation's style objects share while adding the paragraph-specific settings.

The bullet and spacing properties carry the everyday settings. `Bullet`, an `IBullet`, defines a custom bullet such as a picture or colored mark, while `NoBullet` turns bullets off. `Alignment` takes a `TextAlignmentTypeValues` for horizontal alignment, and `Indent`, `LineSpacing`, `SpaceBefore`, and `SpaceAfter` are `DocUnit` measurements that control the paragraph's spacing and indentation. `ContextualSpacing` and `RightToLeft` are nullable flags for contextual spacing and right-to-left layout, left unset until a paragraph needs them.

```csharp
using IronPPT.Models;

var style = new ParagraphStyle
{
    Alignment = TextAlignmentTypeValues.Center,
    NoBullet = true,
    SpaceAfter = 15,
};
```

The [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets these properties end to end, the [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) configures the bullet, and the [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers the surrounding text.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ParagraphStyle Class - IronPPT C# API`
- v2 (human): `ParagraphStyle: Format Slide Paragraphs in C#`
- v3 (balanced): `ParagraphStyle Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Format a slide paragraph in C# with the IronPPT ParagraphStyle class: set Bullet, Alignment, Indent, LineSpacing, and assign to Style.`
- v2 (human): `Style a slide paragraph in C# with the IronPPT ParagraphStyle class: set bullets, alignment, indentation, and spacing, then reuse it.`
- v3 (balanced): `Reference for the IronPPT ParagraphStyle class in C#: bullets, Alignment, Indent, LineSpacing, and spacing, assigned to Paragraph.Style.`

---

## Structured data

**TechArticle abstract**

> The IronPPT ParagraphStyle class in C# collects the formatting that applies to a whole paragraph: bullets, alignment, indentation, and spacing. Build one with new ParagraphStyle, set Bullet, Alignment (a TextAlignmentTypeValues), Indent, LineSpacing, SpaceBefore, and SpaceAfter, then assign it to a Paragraph through its Style property. The same style can be reused across paragraphs for a consistent look.

**FAQPage entries**

```json
[
  {
    "question": "Where does ParagraphStyle live in the IronPPT API?",
    "answer": "ParagraphStyle is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from DocumentStyle and implements IDocumentStyle and IParagraphStyle, the contract a Paragraph's Style property accepts."
  },
  {
    "question": "How do you apply a ParagraphStyle to a paragraph in C#?",
    "answer": "Create a ParagraphStyle, set its properties with an object initializer, then assign it to the Style property of a Paragraph. Because the style is a separate object, the same instance can be applied to several paragraphs."
  },
  {
    "question": "How do you set a custom bullet on a paragraph in IronPPT?",
    "answer": "Assign the Bullet property, an IBullet, with a Bullet that defines a picture or colored mark, or set NoBullet to true to turn bullets off. Alignment, Indent, LineSpacing, SpaceBefore, and SpaceAfter control the rest of the layout."
  }
]
```
