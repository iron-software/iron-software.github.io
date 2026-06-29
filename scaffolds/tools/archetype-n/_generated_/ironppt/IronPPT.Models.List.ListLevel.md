<!--
N-Full / class. Frame E. IronPPT. Namespace IronPPT.Models.List. Base ContentElement.
Implements ICloneableElement, IContentElement.
12 string properties => functional buckets (P7). Members verified 2026-06-23:
IsLegalNumberingStyle, LegacyNumbering, LevelJustification, LevelPictureBulletId, LevelRestart, LevelSuffix,
LevelText, NumberingFormat, NumberingSymbolRunProperties, ParagraphStyleIdInLevel, PreviousParagraphProperties, StartNumberingValue.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.List.ListLevel.html
-->

## Injected overview (Markdown)

The formatting for one tier of a list, a single level of bullets or numbers, lives on `ListLevel`. Each level in a multi-level list has its own appearance and numbering, and a `ListLevel` carries the settings that decide how that one tier prints: the symbol or number format, where the text restarts, how it aligns, and which paragraph style it borrows.

A `ListLevel` belongs to the list model inside a presentation and represents one indent depth rather than the whole list, so a three-deep outline is described by three levels, each configured independently. Because it is a content element, it sits in the document tree and can be cloned through the inherited `Clone` member when one level should seed another. You set its string properties to control the tier, then let the list apply them to paragraphs at that depth.

The properties group into a few jobs. **Numbering** is set through `NumberingFormat`, `StartNumberingValue`, `LevelRestart`, `LegacyNumbering`, and `IsLegalNumberingStyle`, which together decide the counter style, where it begins, and when it resets. **Text and symbols** come from `LevelText`, `LevelSuffix`, and `LevelPictureBulletId`, covering the displayed marker, the character after it, and a picture bullet. **Layout and inheritance** use `LevelJustification`, `ParagraphStyleIdInLevel`, `NumberingSymbolRunProperties`, and `PreviousParagraphProperties` to align the tier, borrow a paragraph style, and reuse run and paragraph formatting. Set only the properties a level actually needs and leave the rest at their defaults.

```csharp
var level = new ListLevel();
level.NumberingFormat = "decimal";
level.StartNumberingValue = "1";
level.LevelText = "%1.";
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers placing text content, the [customized bullet point example](https://ironsoftware.com/csharp/ppt/examples/customized-bullet-point/) styles list markers, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds the paragraphs a list level applies to.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ListLevel Class - IronPPT C# API Reference`
- v2 (human): `ListLevel: Format a List Tier in C#`
- v3 (balanced): `ListLevel Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Format one tier of a list in C# with the IronPPT ListLevel class: set NumberingFormat, LevelText, LevelRestart, LevelJustification, and more per level.`
- v2 (human): `Control one level of a multi-level list in C# with the IronPPT ListLevel class: set its numbering, marker text, restart, and alignment.`
- v3 (balanced): `Reference for the IronPPT ListLevel class in C#: numbering, marker text, restart, justification, and style settings for a single list tier.`

---

## Structured data

**TechArticle abstract**

> Formatting one tier of a multi-level list in C# runs through the IronPPT ListLevel class. Each level carries its own numbering, marker text, restart behavior, and alignment, so a deep outline is described by several independent levels. Numbering properties set the counter and where it begins, text properties set the marker and suffix, and layout properties handle justification and borrowed paragraph styles.

**FAQPage entries**

```json
[
  {
    "question": "Where does ListLevel live in the IronPPT API?",
    "answer": "ListLevel is a class in the IronPPT.Models.List namespace, shipped in IronPPT.dll. It derives from ContentElement and implements ICloneableElement and IContentElement, so it sits in the document tree and can be cloned."
  },
  {
    "question": "How do you set the numbering for a list level in C#?",
    "answer": "Set the numbering properties on a ListLevel: NumberingFormat chooses the counter style, StartNumberingValue sets where it begins, and LevelRestart controls when it resets. LevelText sets the displayed marker and LevelSuffix the character after it."
  },
  {
    "question": "What is the difference between a list and a ListLevel in IronPPT?",
    "answer": "A ListLevel describes one indent depth, not the whole list. A multi-level outline is made of several ListLevel objects, one per tier, each configured independently with its own numbering, marker text, and alignment."
  }
]
```
