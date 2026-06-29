<!--
N-Full (TextStyle, large surface ~31 props + Reset; functional buckets required >10 members). Frame D (task-gerund). IronWord.
Members verified 2026-06-23: BaseStyle(IBaseStyle), Caps, CharacterScale, Color(Color), DefaultStyle(static ITextStyle), Emboss, Emphasis, FontSize, FontSizeComplexScript, Imprint, IsBold, IsItalic, Kern, Languages, NoProof, Outline, Shading(Shading), Shadow, SmallCaps, SnapToGrid, Spacing, SpecVanish, Status(ElementStatus), Strike, TextEffect(TextEffect), TextFont, Underline(Underline), Vanish, VerticalPosition, VerticalTextAlignment, WebHidden; Reset(). Ctor ().
Cross-class verified: TextContent.Style is of type TextStyle.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.TextStyle.html
-->

## Injected overview (Markdown)

Formatting the characters in a Word run, everything from bold and color to outlines and small caps, runs through `TextStyle`. It is the character-level style object you assign to a run's `Style` property, collecting the typeface, color, weight, and decorations that determine how a stretch of text looks when the document is saved.

A `TextStyle` reaches text through `TextContent`, whose `Style` property is a `TextStyle`. Build a style once and assign it to as many runs as share the look, or start from the static `DefaultStyle` and adjust from there. The `BaseStyle` property links to a named document style, so a run can inherit a base and override only the properties it changes, keeping a document's formatting consistent.

Because the surface is large, it helps to read the properties in functional groups. **Typeface and size**: `TextFont`, `FontSize`, `FontSizeComplexScript`, and `CharacterScale`. **Weight and slant**: `IsBold` and `IsItalic`. **Color and fill**: `Color` and a `Shading`. **Decorations**: `Underline`, `Strike`, `Caps`, `SmallCaps`, `Emboss`, `Imprint`, `Outline`, `Shadow`, and the richer `TextEffect`. **Spacing and position**: `Spacing`, `Kern`, `VerticalPosition`, `VerticalTextAlignment`, and `SnapToGrid`. **Visibility and proofing**: `Vanish`, `SpecVanish`, `WebHidden`, `NoProof`, `Emphasis`, and `Languages`. The `Status` property reports an `ElementStatus`, and `Reset` clears the style back to its defaults. Set only the properties a design needs and leave the rest inherited from the base or default.

```csharp
using IronWord.Models;

var style = new TextStyle();
style.IsBold = true;
style.FontSize = 14;
style.Color = Color.Black;
```

The [style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) applies character formatting, the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) places the runs, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows where styles sit in the model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `TextStyle Class - IronWord C# API Reference`
- v2 (human): `TextStyle: Format Word Text in C#`
- v3 (balanced): `TextStyle Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Format Word text in C# with the IronWord TextStyle class: set TextFont, FontSize, IsBold, Color, Underline, Shading, and apply effects through TextEffect.`
- v2 (human): `Control character formatting in C# Word files with the IronWord TextStyle class: font, size, bold, color, underline, caps, spacing, and visual effects.`
- v3 (balanced): `Reference for the IronWord TextStyle class in C#: set font, size, weight, color, decorations, spacing, and effects, then assign it to a TextContent run.`

---

## Structured data

**TechArticle abstract**

> Formatting characters in a C# Word document goes through the IronWord TextStyle class. It is assigned to a TextContent's Style property and groups typeface and size (TextFont, FontSize), weight (IsBold, IsItalic), color (Color, Shading), decorations (Underline, Strike, Caps, Outline, Shadow, TextEffect), spacing (Spacing, Kern, VerticalPosition), and visibility (Vanish, WebHidden, NoProof). BaseStyle links a named style and Reset clears it.

**FAQPage entries**

```json
[
  {
    "question": "Where does TextStyle live in the IronWord API?",
    "answer": "TextStyle is a class in the IronWord.Models namespace, shipped in IronWord.dll. It implements ITextStyle, IDerivedStyle, and IStyle, and is assigned to the Style property of a TextContent run to format its characters."
  },
  {
    "question": "How do you set bold, font, and color on Word text in C#?",
    "answer": "Create a TextStyle, set IsBold, TextFont, FontSize, and Color, then assign it to a TextContent's Style property. Start from the static DefaultStyle to inherit sensible defaults and override only what changes."
  },
  {
    "question": "What is the difference between TextStyle and TextEffect?",
    "answer": "TextStyle covers character formatting such as font, size, color, and decorations, while TextEffect collects visual treatments like glow, gradient, and outline. TextStyle exposes a TextEffect property, so the effects are applied as part of the style."
  }
]
```
