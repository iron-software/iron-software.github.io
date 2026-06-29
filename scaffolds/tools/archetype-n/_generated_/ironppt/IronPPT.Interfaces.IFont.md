<!--
N-Mid / interface (6 members). Frame E lead. Implementor: Font. IronPPT. Verified 2026-06-23.
Target: https://ironsoftware.com/csharp/ppt/object-reference/api/IronPPT.Interfaces.IFont.html
-->

## Injected overview (Markdown)

Typeface choices for a run of text, the family, the size, and the script-specific variants, sit behind `IFont`. The contract exposes `FontFamily` and `FontSize` for the everyday case, plus the per-script faces PowerPoint tracks separately: `LatinFont`, `EastAsia`, `ComplexScript`, and `SymbolFont`. Setting these lets a document render correctly across mixed-script content rather than forcing one face on every character. Coding against the contract keeps text-styling logic independent of the concrete font type.

The concrete implementor in IronPPT is `Font`, the object a developer assigns or reads when controlling how a run looks. `FontSize` is typed as the concrete `FontSize` measurement object, so a developer sets the size through its unit properties rather than passing a bare number. A developer typically receives a font from a text run's style and adjusts `FontFamily` and `FontSize` for most work, reaching for the script-specific properties only when a presentation mixes Latin, East Asian, complex, and symbol text.

```csharp
font.FontFamily = "Calibri";
font.LatinFont = "Calibri";
```

The [add text how-to](https://ironsoftware.com/csharp/ppt/how-to/add-text/) covers adding and formatting text, and the [paragraph style example](https://ironsoftware.com/csharp/ppt/examples/paragraph-style/) sets fonts while styling content.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `IFont - IronPPT C# API`
- v2 (human): `IFont: Typeface Control for Text in C#`
- v3 (balanced): `IFont Interface | IronPPT C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `IFont is IronPPT's font contract in C#: it exposes FontFamily, FontSize, and per-script faces. Implemented by the Font class for text runs.`
- v2 (human): `Control typeface and size in C# through IronPPT's IFont contract: set FontFamily and FontSize, plus per-script faces for mixed-script text.`
- v3 (balanced): `Reference for the IronPPT IFont interface in C#: the typeface contract Font implements, with FontFamily, FontSize, and per-script faces.`

---

## Structured data

**TechArticle abstract**

> Controlling the typeface of a text run in IronPPT is the job of the IFont contract in C#. It exposes FontFamily and FontSize for everyday styling, plus the per-script faces LatinFont, EastAsia, ComplexScript, and SymbolFont for mixed-script documents. The concrete implementor is the Font class, which you receive from a run's style and adjust to change how text renders.

**FAQPage entries**

```json
[
  {
    "question": "Where does IFont live in the IronPPT API?",
    "answer": "IFont is an interface in the IronPPT.Interfaces namespace, shipped in IronPPT.dll. It does not extend another interface and declares FontFamily, FontSize, and the per-script faces LatinFont, EastAsia, ComplexScript, and SymbolFont."
  },
  {
    "question": "What implements IFont in IronPPT?",
    "answer": "The Font class in IronPPT.Models implements IFont. You usually receive it from a text run's style, set FontFamily and FontSize for most work, and use the script-specific properties only when a presentation mixes Latin, East Asian, complex, and symbol text."
  }
]
```
