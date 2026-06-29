<!--
N-Full (class, implements IFont; 6 properties + ctor). Frame B (identity-by-role). IronPPT.
Members verified 2026-06-23: LatinFont, EastAsia, ComplexScript, SymbolFont (string), FontFamily (string), FontSize (FontSize). Base Object, implements IFont.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Models.Font.html
-->

## Injected overview (Markdown)

`Font` is the record you set on a run or paragraph style to control which typeface and size text is drawn in. It collects the font choices that PowerPoint tracks separately for different scripts, so a single object describes how Latin, East Asian, and complex-script text should each appear, plus the point size they share.

A `Font` is built with `new Font()` and assigned to the text style that owns it, where it travels with the run or paragraph it styles. `LatinFont` names the typeface for ordinary Latin characters, `EastAsia` names the one for East Asian characters, and `ComplexScript` covers complex scripts such as Arabic or Hebrew. `SymbolFont` selects a symbol typeface, and `FontFamily` carries the family name when a single name applies. Each of these is a plain `string`, the font name as PowerPoint would list it, so spelling and casing should match an installed or embedded face.

`FontSize` holds the size as a `FontSize` object rather than a raw number, which keeps the point value and its unit handling in one place; assign one and the run renders at that size. Set only the script slots a deck actually uses, a Latin-only presentation needs `LatinFont` alone, while a multilingual deck benefits from filling `EastAsia` and `ComplexScript` so each script keeps its intended face. Because `Font` is consumed by the text styling layer rather than created in isolation, configure it as part of styling a run or paragraph. The text and paragraph styling workflow is the place to apply it.

```csharp
using IronPPT.Models;

var font = new Font();
font.LatinFont = "Calibri";
font.FontSize = 18;
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) adds text to a slide, the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) styles a paragraph, and the [add paragraph example](https://ironsoftware.com/csharp/ppt/examples/add-paragraph/) builds the run a font applies to.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Font Class - IronPPT C# API Reference`
- v2 (human): `Font: Set Typeface & Size in C#`
- v3 (balanced): `Font Class | IronPPT C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set typeface and size for slide text in C# with the IronPPT Font class: LatinFont, EastAsia, ComplexScript, SymbolFont, FontFamily, and FontSize.`
- v2 (human): `Control which typeface and size your PowerPoint text uses in C# with the IronPPT Font class, including separate fonts for Latin and East Asian text.`
- v3 (balanced): `Reference for the IronPPT Font class in C#: choose Latin, East Asian, and complex-script typefaces and set the point size through FontSize.`

---

## Structured data

**TechArticle abstract**

> Choosing the typeface and size for slide text in C# runs through IronPPT's Font class. It carries the font names PowerPoint tracks per script, LatinFont, EastAsia, ComplexScript, and SymbolFont, plus FontFamily, each a string, and a FontSize object for the point size. Assign a Font to a text style so the run or paragraph renders in the chosen faces and size.

**FAQPage entries**

```json
[
  {
    "question": "Where does Font live in the IronPPT API?",
    "answer": "Font is a class in the IronPPT.Models namespace, shipped in IronPPT.dll. It derives from Object and implements IFont, and it is assigned to a text style to control the typeface and size of a run or paragraph."
  },
  {
    "question": "How do you set the typeface and size of text in C# with IronPPT?",
    "answer": "Create a Font, set LatinFont (and EastAsia or ComplexScript for other scripts) to the typeface name, and assign a FontSize for the point size. Then attach the Font to the text style that owns the run or paragraph."
  },
  {
    "question": "Why does Font have separate LatinFont, EastAsia, and ComplexScript properties?",
    "answer": "PowerPoint tracks fonts per script, so Latin, East Asian, and complex-script text can use different typefaces. Font mirrors that: set only the slots a deck uses, or fill several for a multilingual presentation."
  }
]
```
