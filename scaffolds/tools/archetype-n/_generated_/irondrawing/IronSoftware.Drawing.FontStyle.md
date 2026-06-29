<!--
N-Lite/enum. Members verified 2026-06-22: Bold, BoldItalic, Italic, Regular, Strikeout, Underline, value__.
Target: IronSoftware.Drawing.FontStyle
-->

## Injected overview (Markdown)

`FontStyle` controls the typographic decoration applied to text in IronDrawing. `Regular` is the baseline choice with no decoration, `Bold` and `Italic` apply weight and slant independently, and `BoldItalic` combines both. `Strikeout` draws a horizontal line through the text and `Underline` draws one beneath it. Pass a value wherever an `IronSoftware.Drawing` API accepts a font style parameter. See the [IronDrawing get-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for setup details.

```csharp
var font = new Font("Arial", 14, FontStyle.BoldItalic);
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontStyle Enum - IronDrawing C# API Reference`
- v2 (human): `FontStyle: Set Text Decoration in C# IronDrawing`
- v3 (balanced): `FontStyle Enum | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Apply font styling in C# with the IronDrawing FontStyle enum: Regular, Bold, Italic, BoldItalic, Underline, and Strikeout for text decoration.`
- v2 (human): `Control text appearance in C# with IronDrawing's FontStyle enum: choose Regular, Bold, Italic, BoldItalic, Underline, or Strikeout.`
- v3 (balanced): `Reference for the IronDrawing FontStyle enum in C#: Regular, Bold, Italic, BoldItalic, Underline, and Strikeout text decoration values.`

---

## Structured data

**TechArticle abstract**

> Apply typographic decoration to text in IronDrawing using FontStyle, found in the IronSoftware.Drawing namespace in IronSoftware.Drawing.dll. Regular is the baseline value, Bold and Italic apply weight and slant independently, BoldItalic combines both, and Strikeout and Underline add line decorations.