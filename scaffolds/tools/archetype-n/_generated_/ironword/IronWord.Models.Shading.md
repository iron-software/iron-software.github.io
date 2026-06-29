<!--
N-Full (fill/shading, 8 props). Frame D (task-gerund). IronWord.Models.
Verified 2026-06-23: public class Shading : Object, IShading, IWordDocumentObjectProperty, IDocumentObjectProperty.
Props: Color, Fill, ShadingPattern, ThemeColor, ThemeFill, ThemeFillShade, ThemeFillTint, ThemeTint.
Cross-ref verified: Table.Shading and TextStyle.Shading both return Shading.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Shading.html
-->

## Injected overview (Markdown)

Filling the background of a table or a span of text with color in a Word document runs through `Shading`. It describes the fill that sits behind content, the colored backdrop that highlights a table cell, banded row, or run of text. A developer reaches for it when plain white behind text is not enough and a region should stand out with a solid color, a theme color, or a patterned fill.

Shading attaches to the thing it colors: a `Table` exposes a `Shading` property and a `TextStyle` exposes one too, so a developer obtains a shading object from the element being styled rather than constructing it in isolation. That places it in the styling step of building a table or a text style, where the background is decided alongside borders and fonts.

`Color` and `Fill` set the foreground and background of the fill directly, while `ShadingPattern` selects a patterned fill instead of a flat color. The theme-based properties let the fill track the document's theme rather than a fixed value: `ThemeColor` and `ThemeFill` bind the foreground and background to theme slots, and `ThemeTint`, `ThemeFillTint`, and `ThemeFillShade` lighten or darken those theme colors by a tint or shade. Choose the explicit `Color` and `Fill` for a fixed look that does not change with the theme, or the theme properties when the shading should stay consistent with a document that may be re-themed. For a simple solid background, set `Fill`; reach for `ShadingPattern` only when a textured or banded effect is wanted.

```csharp
using IronWord.Models;

var shading = new Shading();
shading.Fill = Color.LightGray;
shading.ShadingPattern = ShadingPatternValues.Clear;
```

The [add table how-to](https://ironsoftware.com/csharp/word/how-to/add-table/) places shaded tables, the [style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) covers text styling, and the [document element tutorial](https://ironsoftware.com/csharp/word/tutorials/document-element/) shows how styling fits the document model.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Shading Class - IronWord C# API`
- v2 (human): `Shading: Background Fills in Word with C#`
- v3 (balanced): `Shading Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Fill a Word table cell or text background in C# with the IronWord Shading class: set Color, Fill, ShadingPattern, or theme-bound fill colors.`
- v2 (human): `Add a colored background behind a table cell or text in C# with the IronWord Shading class: pick a fixed fill or a theme color with a tint.`
- v3 (balanced): `Reference for the IronWord Shading class in C#: the background fill obtained from a Table or TextStyle, with Color, Fill, and theme properties.`

---

## Structured data

**TechArticle abstract**

> Filling a table cell or text background with color in a Word document in C# runs through the IronWord Shading class. Color and Fill set a fixed foreground and background, ShadingPattern selects a patterned fill, and the theme properties bind the fill to the document theme with a shade or tint. A Table or TextStyle exposes a Shading property to attach it.

**FAQPage entries**

```json
[
  {
    "question": "Where does Shading live in the IronWord API?",
    "answer": "Shading is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements IShading. A Table and a TextStyle each expose a Shading property to set the background fill behind content."
  },
  {
    "question": "How do you set a background fill color in C#?",
    "answer": "Create a Shading, set its Fill to a color, and assign it to the Shading property of a Table or TextStyle. Use ShadingPattern for a patterned fill, or the theme properties to bind the color to the document theme."
  },
  {
    "question": "What is the difference between Color and theme colors on Shading?",
    "answer": "Color and Fill set fixed foreground and background colors that do not change. ThemeColor and ThemeFill bind the fill to a document theme slot, and ThemeTint and ThemeFillTint adjust the shade, so the fill stays consistent if the document is re-themed."
  }
]
```
