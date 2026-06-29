<!--
N-Full (class : ContentElement, implements IWordDocumentObject/IDocumentObject/ICloneable). 12 string properties, bucketed.
Frame B (identity-by-role) lead; abstract frame C (when-fronted). public class ListLevel : ContentElement.
Verified 2026-06-23: ctor ListLevel(); properties (all string) LevelText, NumberingFormat, LevelJustification,
StartNumberingValue, LevelSuffix, LevelRestart, IsLegalNumberingStyle, LegacyNumbering, LevelPictureBulletId,
NumberingSymbolRunProperties, ParagraphStyleIdInLevel, PreviousParagraphProperties.
Inherited (ContentElement): Replace, Remove, GetIndex<T>, Clone, CloneObject, Parent, Status.
Namespace IronWord.Models.List, IronWord.dll. Funnel: add-list, add-bullet-list examples, document-element tutorial.
Target: IronWord.Models.List.ListLevel.html
-->

## Injected overview (Markdown)

A `ListLevel` is the formatting definition for one level of a numbered or bulleted list, the rules that decide how that tier of the list looks and counts. A document outline that nests several tiers has one of these per level, each describing the symbol or number shown, how it is formatted, and how its counter behaves. It is the per-level detail behind the lists a `MultiLevelTextList` assembles, separate from the `ListItem` entries that carry the actual content.

Create a level with `new ListLevel()` and set the string properties that shape it. Its members group into a few concerns. **Appearance and counting**: `LevelText` is the displayed pattern for the level, `NumberingFormat` selects the numbering style, `StartNumberingValue` sets where the count begins, and `LevelRestart` controls when it restarts. **Layout**: `LevelJustification` aligns the marker and `LevelSuffix` sets what follows it. **Bullets and styles**: `LevelPictureBulletId` points at a picture bullet, `NumberingSymbolRunProperties` styles the symbol's run, and `ParagraphStyleIdInLevel` links a paragraph style to the level. **Compatibility**: `IsLegalNumberingStyle`, `LegacyNumbering`, and `PreviousParagraphProperties` preserve older numbering behaviour. Because the type derives from `ContentElement`, it also carries the shared `Clone`, `Replace`, `Remove`, and `Parent` members.

Set only the properties the level needs and leave the rest at their defaults. Define the levels first, then build the list and its items around them so the numbering and indentation render as intended.

```csharp
var level = new ListLevel
{
    NumberingFormat = "decimal",
    LevelText = "%1.",
    StartNumberingValue = "1"
};
```

The [add list example](https://ironsoftware.com/csharp/word/examples/add-list/) builds a multi-level list, the [add bullet list example](https://ironsoftware.com/csharp/word/examples/add-bullet-list/) shows a bulleted variant, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains how elements like this fit together.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ListLevel Class - IronWord C# API Reference`
- v2 (human): `ListLevel: Format Word List Levels in C#`
- v3 (balanced): `ListLevel Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Define one level of a Word list in C# with the IronWord ListLevel class: set LevelText, NumberingFormat, StartNumberingValue, and justification.`
- v2 (human): `Format a single tier of a numbered or bulleted Word list in C# with IronWord ListLevel: the number style, start value, suffix, and bullet.`
- v3 (balanced): `Reference for the IronWord ListLevel class in C#: the per-level numbering, text, justification, and bullet settings for a multi-level list.`

---

## Structured data

**TechArticle abstract**

> When a Word outline needs different formatting at each tier, ListLevel defines one level of a numbered or bulleted list in IronWord for C#. Created with new ListLevel(), it sets the level's displayed text, numbering format, start value, justification, suffix, and bullet, supplying the per-level detail behind a MultiLevelTextList. It derives from ContentElement.

**FAQPage entries**

```json
[
  {
    "question": "Where does ListLevel live in the IronWord API?",
    "answer": "ListLevel is a class in the IronWord.Models.List namespace, shipped in IronWord.dll. It derives from ContentElement and implements IWordDocumentObject, IDocumentObject, and ICloneable, so it shares members such as Clone, Replace, Remove, and Parent."
  },
  {
    "question": "How do you set the numbering format of a list level in C#?",
    "answer": "Create a ListLevel and set NumberingFormat for the number style, LevelText for the displayed pattern, and StartNumberingValue for the starting count. LevelJustification aligns the marker and LevelRestart controls when the counter restarts."
  },
  {
    "question": "What is the difference between ListLevel and MultiLevelTextList in IronWord?",
    "answer": "ListLevel formats a single tier of a list, its numbering, text, and bullet. MultiLevelTextList is the list itself, which gathers ListItem entries across levels. Define the levels, then assemble the items and the list around them."
  }
]
```
