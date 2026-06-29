<!--
N-Lite/enum. Members verified 2026-06-23: MajorAscii, MinorAscii, MajorHighAnsi, MinorHighAnsi, MajorEastAsia, MinorEastAsia, MajorBidi, MinorBidi.
Consumer: Font.AsciiTheme / HighAnsiTheme / EastAsiaTheme / ComplexScriptTheme (Nullable<ThemeFontValues>).
Base: System.Object (public sealed class ThemeFontValues : Enum). Namespace IronWord.Models.Enums, assembly IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.ThemeFontValues.html
-->

## Injected overview (Markdown)

Bind a font to a theme heading or body slot rather than a fixed typeface by assigning a `ThemeFontValues` member, used on the `Font` theme properties such as `AsciiTheme` and `HighAnsiTheme`. `MajorAscii` and `MinorAscii` are the heading and body fonts for Latin text, `MajorHighAnsi` and `MinorHighAnsi` cover high-ANSI characters, `MajorEastAsia` and `MinorEastAsia` handle East Asian scripts, and `MajorBidi` and `MinorBidi` handle bidirectional scripts. The [styling text](https://ironsoftware.com/csharp/word/how-to/add-style-text/) guide covers font setup.

```csharp
var headingFont = ThemeFontValues.MajorAscii;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ThemeFontValues Enum - IronWord C# API Reference`
- v2 (human): `ThemeFontValues: Theme Fonts in C# Word Docs`
- v3 (balanced): `ThemeFontValues Enum | IronWord C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Bind a font to a theme slot in C# with the IronWord ThemeFontValues enum: MajorAscii, MinorAscii, MajorEastAsia, MinorBidi, and more.`
- v2 (human): `Assign heading and body theme fonts in C# Word docs with ThemeFontValues: Major and Minor slots for Latin, East Asian, and bidi text.`
- v3 (balanced): `Reference for the IronWord ThemeFontValues enum in C#: Major and Minor Ascii, HighAnsi, EastAsia, and Bidi theme font slots.`

---

## Structured data

**TechArticle abstract**

> Assign a theme font slot in IronWord with ThemeFontValues on Font theme properties like AsciiTheme. MajorAscii and MinorAscii are the heading and body Latin fonts, while the EastAsia and Bidi members cover East Asian and bidirectional scripts.
