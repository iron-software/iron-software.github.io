<!--
N-Mid (4 members). Frame C. IronPDF. Members verified 2026-06-22.
Target: IronPdf.CssDeclaration class reference page.
-->

## Injected overview (Markdown)

Parsed CSS declarations become inspectable, editable records through `CssDeclaration`, giving you direct access to the property name, value, and importance flag that make up a single CSS rule component. When IronPDF parses a stylesheet, each declaration is surfaced as a `CssDeclaration` instance so that code can read or rewrite styles before rendering a PDF.

Three properties carry the declaration's data. `Property` holds the CSS property name as a string, for example `"font-size"` or `"color"`. `Value` holds the corresponding value string, such as `"14pt"` or `"#333333"`. `IsImportant` is a `bool` that reflects whether the declaration carries the `!important` annotation, letting you detect or enforce priority rules programmatically. The default constructor `CssDeclaration()` creates a blank record that you can populate before passing it into a rendering pipeline.

A typical use is inspecting or patching declarations that a CSS parser has already produced. You read `Property` to identify the rule, check `IsImportant` to decide whether to override it, and write a new string to `Value` to apply the change before the PDF renderer consumes the stylesheet.

```csharp
var decl = new CssDeclaration
{
    Property = "font-size",
    Value    = "12pt",
    IsImportant = false
};
```

For broader context on controlling PDF appearance through stylesheets, see the [IronPDF HTML-to-PDF how-to](https://ironpdf.com/how-to/html-to-pdf/) and the [CSS styling examples](https://ironpdf.com/examples/css-to-pdf/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `CssDeclaration Class - IronPDF C# API Reference`
- v2 (human): `CssDeclaration: Read & Edit CSS Rules in C#`
- v3 (balanced): `CssDeclaration Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Inspect and modify parsed CSS declarations in C# with IronPDF's CssDeclaration class: Property, Value, and IsImportant for PDF stylesheet control.`
- v2 (human): `Use IronPDF's CssDeclaration class in C# to read and rewrite CSS property names, values, and importance flags before rendering a PDF.`
- v3 (balanced): `Reference for IronPDF's CssDeclaration class in C#: access Property, Value, and IsImportant to inspect or patch CSS rules before PDF rendering.`

---

## Structured data

**TechArticle abstract**

> Parsed CSS declarations become inspectable records in IronPDF through CssDeclaration. The Property string names the CSS property, Value holds its string value, and IsImportant signals whether the declaration carries the !important annotation. The default constructor creates a blank record ready to populate and pass into a PDF rendering pipeline.

**FAQPage entries**

```json
[
  {
    "question": "Where does CssDeclaration live in the IronPDF API?",
    "answer": "CssDeclaration is a class in the IronPdf namespace, shipped in IronPdf.dll. It derives from Object and holds the Property, Value, and IsImportant components of a single parsed CSS declaration."
  },
  {
    "question": "How do you use CssDeclaration to modify a CSS rule before rendering a PDF?",
    "answer": "Construct a CssDeclaration with the default constructor, then set Property to the CSS property name, Value to the desired value string, and IsImportant to true or false. Pass the populated record into the rendering pipeline before generating the PDF."
  }
]
```