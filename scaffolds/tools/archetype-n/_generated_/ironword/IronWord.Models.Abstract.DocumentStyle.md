<!--
N-Mid (abstract base, thin). Frame E. IronWord. Verified 2026-06-23.
Members verified: StyleId, Status, Clone(), SetNoChangeStatusAsUpdated(). Derived: Style. Target: IronWord.Models.Abstract.DocumentStyle.html
-->

## Injected overview (Markdown)

Sharing common style identity across a document in C# is what `DocumentStyle` underpins. It is the base that a defined style descends from, giving any style a stable identifier and a change-tracking flag so IronWord can apply, copy, and persist it consistently. The concrete style type that extends it in the library is `Style`, which a developer normally works with directly.

A `DocumentStyle` is obtained as the base of a `Style` you build or read from a document, not created on its own, since the type is abstract. `StyleId` is the name that ties content to its style definition, and `Status` records whether the style is new, updated, or unchanged so the save pipeline writes the right state. `Clone` returns a deep copy when you want to derive a variant without altering the original. `SetNoChangeStatusAsUpdated` marks an otherwise-unchanged style as updated, which forces it to be re-emitted on save.

```csharp
using IronWord.Models;

Style style = new Style();
style.StyleId = "Heading1";
```

The [add style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) applies styling to content, and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) shows where styled runs fit.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `DocumentStyle Class - IronWord C# API`
- v2 (human): `DocumentStyle: The Word Style Base in C#`
- v3 (balanced): `DocumentStyle Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `DocumentStyle is the IronWord base for Word styles in C#: it carries a StyleId and Status, with Clone and SetNoChangeStatusAsUpdated for copy and save.`
- v2 (human): `Give a Word style stable identity in C# with IronWord's DocumentStyle base: read its StyleId, track its Status, and clone it to derive variants.`
- v3 (balanced): `Reference for the IronWord DocumentStyle class in C#: the abstract style base behind Style, with StyleId, Status, and Clone members.`

---

## Structured data

**TechArticle abstract**

> Sharing common style identity across a Word document in C# is what the IronWord DocumentStyle base class underpins. The concrete Style type extends it. It exposes StyleId as the style's identifier, Status for change tracking, Clone for deep copies, and SetNoChangeStatusAsUpdated to force an unchanged style to be re-emitted when the document is saved.

**FAQPage entries**

```json
[
  {
    "question": "Where does DocumentStyle live in the IronWord API?",
    "answer": "DocumentStyle is an abstract class in the IronWord.Models.Abstract namespace, shipped in IronWord.dll. It derives from System.Object and is the base for the concrete Style type."
  },
  {
    "question": "What does StyleId do on a DocumentStyle in C#?",
    "answer": "StyleId is the identifier that ties content to its style definition. Status tracks whether the style is new or updated, Clone makes a deep copy for deriving a variant, and SetNoChangeStatusAsUpdated forces the style to be re-written on save."
  }
]
```
