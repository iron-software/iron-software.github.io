<!--
N-Full (class; 11 props bucketed: family-names / theme-fonts / embedding; Clone method). Frame A lead / Frame E abstract. IronWord.
Verified 2026-06-23: Font(); FontFamily, Name, HighAnsi, ComplexScript, EastAsia (string); AsciiTheme, HighAnsiTheme, ComplexScriptTheme, EastAsiaTheme (Nullable<ThemeFontValues>); FontData (byte[]), IsEmbedded (bool, get); Clone()->object. Base Object, implements IFont, ICloneable. Namespace IronWord.Models, IronWord.dll.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Font.html
-->

## Injected overview (Markdown)

`Font` describes the typeface a run of text uses in a Word document, covering the font family, the per-script faces, and the embedded font data. A developer sets it on text styling to control which typeface renders, including separate faces for Latin, complex-script, and East Asian text in the same document.

A font is created with `new Font()` and configured through its properties, which group into three concerns. The named faces set the typeface directly: `FontFamily` and `Name` give the primary ASCII font, while `HighAnsi`, `ComplexScript`, and `EastAsia` set the faces for High ANSI, complex-script, and East Asian characters. The theme fonts let those faces follow a document theme instead of a fixed name: `AsciiTheme`, `HighAnsiTheme`, `ComplexScriptTheme`, and `EastAsiaTheme` each take a nullable `ThemeFontValues`, so leaving one null falls back to a named face. The embedding concern is read through `IsEmbedded`, which reports whether the font travels with the document, and `FontData`, which holds the raw font bytes.

Choosing between a named face and a theme font is the main decision when working with this type. A fixed `FontFamily` pins the typeface regardless of theme, while setting a theme font keeps the text in step with the document's theme as it changes. The per-script faces matter for multilingual documents, where Latin, complex-script, and East Asian text often need different typefaces. `Clone` produces an independent copy of a configured font, which is convenient when one base font is varied slightly across several styles without sharing a single mutable instance.

```csharp
var font = new Font();
font.FontFamily = "Calibri";
font.EastAsia = "MS Mincho";
```

The [add style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) applies fonts to text, the [add style text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) shows a worked styling pass, and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) covers placing the text itself.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Font Class - IronWord C# API Reference`
- v2 (human): `Font: Set Typefaces in C# Word Documents`
- v3 (balanced): `Font Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set the typeface in C# Word documents with the IronWord Font class. Choose a FontFamily, per-script faces, or theme fonts, and embed data.`
- v2 (human): `Control the typeface of text in a C# Word document with the IronWord Font class: set a font family, per-script faces, or theme fonts.`
- v3 (balanced): `Reference for the IronWord Font class in C#: set FontFamily and per-script faces, follow a theme with AsciiTheme, and check IsEmbedded.`

---

## Structured data

**TechArticle abstract**

> The typeface a run of text uses in a C# Word document is described by IronWord's Font, covering the font family, per-script faces, and embedded data. Construct one and set FontFamily and Name for the primary face, HighAnsi, ComplexScript, and EastAsia for other scripts, or the nullable theme fonts AsciiTheme, HighAnsiTheme, ComplexScriptTheme, and EastAsiaTheme to follow a document theme. IsEmbedded reports embedding, and Clone copies a configured font.

**FAQPage entries**

```json
[
  {
    "question": "Where does Font live in the IronWord API?",
    "answer": "Font is a class in the IronWord.Models namespace, shipped in IronWord.dll. It derives from Object and implements IFont and ICloneable."
  },
  {
    "question": "How do you set the typeface of text in a Word document in C#?",
    "answer": "Create a Font, set FontFamily to the typeface name, and assign it through text styling. For other scripts, set HighAnsi, ComplexScript, or EastAsia to give those characters their own faces."
  },
  {
    "question": "How do you make a font follow a document theme in IronWord?",
    "answer": "Set one of the theme font properties, AsciiTheme, HighAnsiTheme, ComplexScriptTheme, or EastAsiaTheme, to a ThemeFontValues value. Leaving a theme font null falls back to the named face, and IsEmbedded reports whether the font is embedded."
  }
]
```
