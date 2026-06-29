<!--
N-Full (Underline, 5 props + Clone, 2 ctors). Frame C (when-fronted). IronWord.
Members verified 2026-06-23: Color(Color), LineValue(Nullable<UnderlineValues>), ThemeColor, ThemeShade, ThemeTint; Clone(). Ctors () and (UnderlineValues, Color, Color, Int32, Double).
Cross-class verified: TextStyle.Underline is of type Underline.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Underline.html
-->

## Injected overview (Markdown)

When a run of text needs an underline, whether a plain single rule or a styled, colored line, `Underline` describes it. It captures both the line style and its color in one object, so you decide what the underline looks like and let the run's style carry it onto the page.

An `Underline` reaches text through `TextStyle`, which exposes an `Underline` property. Assign a configured instance there and any run formatted with that style gains the underline. You can build one with the default constructor and set properties individually, or use the constructor that takes the line style, the colors, and the theme values together when you have all the details up front.

The line style itself is `LineValue`, a nullable `UnderlineValues` that selects a single, double, dotted, or wavy rule (leave it unset for no explicit underline). `Color` sets a direct color for the line, while `ThemeColor`, `ThemeShade`, and `ThemeTint` tie it to the document theme so the underline tracks theme changes the way themed text does. Use a direct `Color` for a fixed look or the theme properties when the underline should follow the document's palette. `Clone` returns a copy, which is convenient when several runs share an underline that differs only in color, letting you duplicate the base and adjust one property. Configure the line, assign it to a `TextStyle`, and the underline renders when the document is saved.

```csharp
using IronWord.Models;

var underline = new Underline();
underline.LineValue = UnderlineValues.Single;
underline.Color = Color.Black;
```

The [style text how-to](https://ironsoftware.com/csharp/word/how-to/add-style-text/) applies underlines and other formatting, the [styled text example](https://ironsoftware.com/csharp/word/examples/add-style-text/) shows formatting in code, and the [add text how-to](https://ironsoftware.com/csharp/word/how-to/add-text/) places the underlined runs in a document.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Underline Class - IronWord C# API Reference`
- v2 (human): `Underline: Style Underlined Text in C#`
- v3 (balanced): `Underline Class | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Underline text in C# Word docs with the IronWord Underline class: set LineValue, Color, and theme colors, then assign it to a TextStyle.`
- v2 (human): `Add single, double, or wavy underlines to Word text in C# with the IronWord Underline class: choose the line style and color, then apply it.`
- v3 (balanced): `Reference for the IronWord Underline class in C#: set the underline LineValue and Color or theme colors, then apply it through a run's TextStyle.`

---

## Structured data

**TechArticle abstract**

> Underlining text in a C# Word document goes through the IronWord Underline class. LineValue, a nullable UnderlineValues, selects a single, double, dotted, or wavy rule, Color sets a fixed line color, and ThemeColor, ThemeShade, and ThemeTint tie the line to the document theme. Clone copies an underline for reuse. Assign the configured Underline to a TextStyle so the run renders it.

**FAQPage entries**

```json
[
  {
    "question": "Where does Underline live in the IronWord API?",
    "answer": "Underline is a class in the IronWord.Models namespace, shipped in IronWord.dll, with Object as its base type. It is assigned to the Underline property on a TextStyle, which carries the underline onto a formatted text run."
  },
  {
    "question": "How do you underline text in a C# Word document?",
    "answer": "Create an Underline, set LineValue to a value such as UnderlineValues.Single and set Color for the line, then assign the Underline to a TextStyle. Any run formatted with that style is underlined."
  },
  {
    "question": "How do you match an underline to the document theme?",
    "answer": "Use the ThemeColor, ThemeShade, and ThemeTint properties instead of a fixed Color. The underline then follows the document's theme palette, so it updates when the theme changes rather than staying a hard-coded color."
  }
]
```
