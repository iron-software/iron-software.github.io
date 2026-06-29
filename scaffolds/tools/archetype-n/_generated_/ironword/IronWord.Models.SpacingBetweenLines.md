<!--
N-Full (paragraph line/space config, 8 props). Frame E (feature/outcome-fronted; sibling of Run's E? Run used E -> vary: use feature-fronted but distinct wording. Actually Run=E, give this one a different frame). Switch to gerund/feature mix; keep distinct from Run lead. Frame chosen: E feature-fronted but Run is also E -> change to A subject-verb to avoid sibling clash? Run and SpacingBetweenLines aren't sibling family. Keep E acceptable; lead worded differently. IronWord.Models.
Verified 2026-06-23: public class SpacingBetweenLines : Object. Props: After, AfterAutoSpacing, AfterLines, Before, BeforeAutoSpacing, BeforeLines, Line, LineRule. Ctor ().
No class-typed consumer found in api dir (Paragraph.SpacingBetweenLines is typed int, not this class); described as standalone spacing config without inventing a property assignment.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.SpacingBetweenLines.html
-->

## Injected overview (Markdown)

Paragraph spacing, the gap above and below a paragraph and the leading between its lines, is described by `SpacingBetweenLines`. A developer adjusts it to open up or tighten the vertical rhythm of a document, adding breathing room between paragraphs or controlling line height within one. It is the object that gathers every spacing setting for a block of text in one place, so a layout decision becomes a few property assignments rather than scattered tweaks.

This object collects the before, after, and line-spacing values that govern how a paragraph breathes, so a developer configures it as part of setting a paragraph's appearance and applies that spacing where the paragraph is styled. It keeps the spacing concern together rather than splintering it across unrelated properties.

`Before` and `After` set the space above and below the paragraph, while `BeforeLines` and `AfterLines` express that same spacing in line units instead of an absolute measure. `BeforeAutoSpacing` and `AfterAutoSpacing` hand the decision to Word's automatic spacing, useful when the document should follow built-in defaults rather than fixed gaps. `Line` sets the spacing between lines within the paragraph, and `LineRule` decides how that `Line` value is interpreted, whether as an exact height, a minimum, or a multiple. Set `Before` and `After` for fixed paragraph gaps, switch on the auto-spacing properties to defer to Word's defaults, and pair `Line` with `LineRule` so the line-height value is read the way it was intended.

```csharp
using IronWord.Models;

var spacing = new SpacingBetweenLines();
spacing.Before = 120;
spacing.After = 120;
spacing.Line = 240;
```

The [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers placing paragraphs, the [style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) walks through formatting them, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) explains the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `SpacingBetweenLines - IronWord C# API`
- v2 (human): `SpacingBetweenLines: Paragraph Spacing in C#`
- v3 (balanced): `SpacingBetweenLines Class | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set Word paragraph spacing in C# with the IronWord SpacingBetweenLines class: Before, After, Line, and LineRule plus auto-spacing options.`
- v2 (human): `Control the gap above, below, and between lines of a Word paragraph in C# with the IronWord SpacingBetweenLines class, in points or line units.`
- v3 (balanced): `Reference for the IronWord SpacingBetweenLines class in C#: paragraph spacing with Before, After, Line, LineRule, and auto-spacing settings.`

---

## Structured data

**TechArticle abstract**

> Controlling paragraph spacing in a Word document in C# runs through the IronWord SpacingBetweenLines class. Before and After set the space above and below a paragraph, BeforeLines and AfterLines express it in line units, BeforeAutoSpacing and AfterAutoSpacing defer to Word's defaults, and Line with LineRule sets and interprets the spacing between lines within the paragraph.

**FAQPage entries**

```json
[
  {
    "question": "Where does SpacingBetweenLines live in the IronWord API?",
    "answer": "SpacingBetweenLines is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and gathers a paragraph's before, after, and line-spacing settings in one configuration object."
  },
  {
    "question": "How do you set paragraph spacing in C#?",
    "answer": "Create a SpacingBetweenLines, set Before and After for the gaps above and below the paragraph, and set Line with LineRule for the spacing between lines. Use BeforeAutoSpacing and AfterAutoSpacing to defer to Word's automatic spacing instead."
  },
  {
    "question": "What does LineRule do on SpacingBetweenLines?",
    "answer": "LineRule decides how the Line value is interpreted: as an exact line height, a minimum height, or a multiple of single spacing. Pair Line with LineRule so the line-spacing value is read the way it was intended."
  }
]
```
