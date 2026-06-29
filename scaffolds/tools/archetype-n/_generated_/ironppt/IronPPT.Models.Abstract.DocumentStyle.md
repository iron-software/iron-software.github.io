<!--
N-Mid abstract class (2 props). Frame C (when-fronted). IronPPT.Models.Abstract namespace.
Base Object; implements IDocumentStyle.
Public members verified 2026-06-23 against IronPPT.Models.Abstract.DocumentStyle.html:
Status (ElementStatus), StyleId (string).
Derived verified: ParagraphStyle, Style, TextStyle.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Abstract.DocumentStyle.html
-->

## Injected overview (Markdown)

When a style needs an identity and a state in the document's style system, `DocumentStyle` supplies the base. It is the shared parent for the named styling types, holding the two things every style has in common: an identifier and a status. A developer works with the concrete styles that derive from it, `TextStyle`, `ParagraphStyle`, and `Style`, rather than this base on its own.

Because the class is abstract, a style is created as one of those derived types and then carries the members below through inheritance. Code that treats styles uniformly can hold one as `IDocumentStyle`, the contract this class implements, so a style can be referenced without naming its exact kind.

`StyleId` is the string that identifies the style within the document, used to reference and reuse it, and `Status` is an `ElementStatus` describing the style's current state. These let a style be tracked and addressed across the document so the same formatting can be reused rather than redefined. Set `StyleId` to a stable value when a style is meant to be shared so later references resolve to the same definition.

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers styling slide text, and the [TextStyle reference](https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.TextStyle.html) documents a concrete style that derives from this base.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocumentStyle Class - IronPPT C# API`
- v2 (human): `DocumentStyle: The Slide Style Base in C#`
- v3 (balanced): `DocumentStyle Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `The IronPPT DocumentStyle base in C# gives a style its identity and state: StyleId and Status, inherited by TextStyle and ParagraphStyle.`
- v2 (human): `DocumentStyle is the IronPPT base for slide styles in C#: it carries a StyleId and Status shared by TextStyle, ParagraphStyle, and Style.`
- v3 (balanced): `Reference for the IronPPT DocumentStyle class in C#: the style base behind TextStyle and ParagraphStyle, with StyleId and Status.`

---

## Structured data

**TechArticle abstract**

> Identify and track a slide style in C# through the IronPPT DocumentStyle base. StyleId is the string that names a style within the document so it can be reused, and Status is an ElementStatus describing its state. DocumentStyle is abstract and implements IDocumentStyle; the concrete styles that derive from it are TextStyle, ParagraphStyle, and Style.

**FAQPage entries**

```json
[
  {
    "question": "Where does DocumentStyle live in the IronPPT API?",
    "answer": "DocumentStyle is an abstract class in the IronPPT.Models.Abstract namespace, shipped in IronPPT.dll, deriving from Object and implementing IDocumentStyle. It is the base that gives a style its StyleId and Status."
  },
  {
    "question": "What derives from DocumentStyle in IronPPT?",
    "answer": "TextStyle, ParagraphStyle, and Style derive from DocumentStyle, inheriting its StyleId and Status. Because the base is abstract you create one of these concrete styles and use the inherited identity and state members."
  }
]
```
