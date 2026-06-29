<!--
N-Full (class, 23 members, enumeration-style). Frame B (identity-by-role).
FontTypes members verified from PAGE FACTS 2026-06-22.
Target: IronSoftware.Drawing.FontTypes
-->

## Injected overview (Markdown)

Selecting a standard PDF font in C# is a matter of picking the right `FontTypes` value and passing it wherever a font parameter is expected. `FontTypes` is the catalog of PDF-standard typefaces available across IronSoftware rendering pipelines, covering the 14 fonts guaranteed by the PDF specification plus extended variants, all exposed as static properties on the class.

The 23 members fall into four functional families:

**Arial variants:** `Arial`, `ArialBold`, `ArialItalic`, `ArialBoldItalic` cover the sans-serif workhorse in its four standard styles.

**Courier and Courier New variants:** `Courier`, `CourierBold`, `CourierOblique`, `CourierBoldOblique`, `CourierNew`, `CourierNewBold`, `CourierNewItalic`, `CourierNewBoldItalic` provide monospaced options useful for code listings, receipts, and tabular data where character-width consistency matters.

**Helvetica variants:** `Helvetica`, `HelveticaBold`, `HelveticaOblique`, `HelveticaBoldOblique` deliver the classic neutral sans-serif in upright and oblique weights.

**Serif and symbol fonts:** `TimesNewRoman`, `TimesNewRomanBold`, `TimesNewRomanItalic`, `TimesNewRomanBoldItalic` handle body text that benefits from serifs, while `Symbol` and `ZapfDingbats` supply mathematical symbols and decorative glyphs that are embedded in the PDF specification itself.

Beyond the static properties, `FromString` accepts a font name as a plain string and returns the matching `FontTypes` value, which is useful when a font choice arrives from configuration, a database column, or user input rather than being fixed at compile time.

Because every member is a static property, no constructor call is needed. Reference the font directly by name, or resolve it at runtime with `FromString`.

```csharp
using IronSoftware.Drawing;

// Resolve a font from a config value at runtime
string configuredFont = "TimesNewRomanBold";
FontTypes font = FontTypes.FromString(configuredFont);

// Or reference a font directly by its static property
FontTypes heading = FontTypes.HelveticaBold;
FontTypes body    = FontTypes.TimesNewRoman;
FontTypes mono    = FontTypes.CourierNew;
```

Explore the [IronDrawing get-started guide](https://ironsoftware.com/open-source/csharp/drawing/get-started/) for setup, the [font rendering how-to](https://ironsoftware.com/open-source/csharp/drawing/how-to/font-rendering/) for practical usage patterns, the [PDF font examples](https://ironsoftware.com/open-source/csharp/drawing/examples/pdf-fonts/), and the [full API docs](https://ironsoftware.com/open-source/csharp/drawing/docs/) for related drawing types.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontTypes Class - IronDrawing C# API Reference`
- v2 (human): `FontTypes: PDF Font Selection in C#`
- v3 (balanced): `FontTypes Class | IronDrawing C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Select PDF-standard fonts in C# with IronSoftware.Drawing.FontTypes. Choose from 23 static properties or resolve by name with FromString at runtime.`
- v2 (human): `Pick any of 23 PDF-standard fonts in C# using IronDrawing FontTypes: Arial, Helvetica, Courier, Times, Symbol, ZapfDingbats, and more.`
- v3 (balanced): `Reference for IronDrawing FontTypes in C#: 23 static PDF font properties covering Arial, Helvetica, Courier, Times, and symbol sets, plus FromString.`

---

## Structured data

**TechArticle abstract**

> Selecting a standard PDF font in C# is a matter of picking the right FontTypes value from IronSoftware.Drawing. The class catalogs all 23 PDF-standard typefaces as static properties, grouped into Arial, Courier and Courier New, Helvetica, Times New Roman, Symbol, and ZapfDingbats families. The FromString method resolves a font by name at runtime, covering cases where the font choice comes from configuration or user input rather than being fixed in code.

**FAQPage entries**

```json
[
  {
    "question": "Where does FontTypes live in the IronDrawing API?",
    "answer": "FontTypes is a class in the IronSoftware.Drawing namespace, shipped in IronSoftware.Drawing.dll. It acts as an enumeration of PDF-standard font values, all exposed as static properties, with no base type beyond the root object. No constructor is needed; reference members directly, such as FontTypes.Helvetica, or call FontTypes.FromString with a name string."
  },
  {
    "question": "How do you select a PDF font at runtime in C#?",
    "answer": "Call FontTypes.FromString with the font name as a string. It returns the matching FontTypes value, which is useful when the font choice comes from a configuration file, database, or user input. For compile-time selection, reference the static property directly, for example FontTypes.TimesNewRomanBold."
  },
  {
    "question": "Which font families does FontTypes cover?",
    "answer": "FontTypes covers Arial (four styles), Courier and Courier New (eight variants), Helvetica (four styles), Times New Roman (four styles), Symbol, and ZapfDingbats, totaling 23 members. These correspond to the 14 fonts guaranteed by the PDF specification plus extended variants."
  },
  {
    "question": "Do you need to install fonts to use FontTypes?",
    "answer": "No. The fonts represented by FontTypes are part of the PDF specification and are embedded or referenced by compliant PDF viewers without requiring separate font installation on the host machine. Simply reference the desired static property or use FromString to resolve by name."
  }
]
```