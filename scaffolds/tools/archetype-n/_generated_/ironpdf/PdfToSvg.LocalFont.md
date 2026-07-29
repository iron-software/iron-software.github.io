<!--
N-Full (class, 7 members). Frame: task-gerund lead / feature-fronted abstract. IronPDF.
LocalFont(string, FontWeight, FontStyle), FontFamily, FontStyle, FontWeight, Equals, GetHashCode, ToString verified.
Base type: Font. Namespace: PdfToSvg. Assembly: IronPdf.dll.
Target: PdfToSvg.LocalFont API reference page.
-->

## Injected overview (Markdown)

Specifying a system-installed typeface for SVG output during PDF conversion is the job `LocalFont` handles. When IronPDF renders a PDF page to SVG, text elements need a font reference; `LocalFont` lets you name a font that is already present on the host machine, avoiding any embedded-font extraction and giving you precise control over which typeface, weight, and style the SVG consumer will use.

`LocalFont` extends `Font` and is constructed directly: pass the font family name as a string, a `FontWeight` value such as `FontWeight.Bold`, and a `FontStyle` value such as `FontStyle.Italic`. The three properties `FontFamily`, `FontWeight`, and `FontStyle` then expose those choices back to the rendering pipeline and to any code that inspects the font object after construction. Because `LocalFont` overrides `Equals` and `GetHashCode`, instances can be compared by value and stored safely in dictionaries or hash sets, which matters when you are building a mapping of source PDF fonts to local substitutes. `ToString` returns a human-readable description useful for logging or diagnostics.

A typical use case is font substitution: a PDF references a proprietary typeface that the SVG viewer does not have, so you map it to a locally available alternative before conversion. The font object is consumed by the PDF-to-SVG conversion configuration rather than constructed in isolation.

```csharp
using PdfToSvg;

// Substitute a PDF font with a locally installed typeface.
var localFont = new LocalFont("Arial", FontWeight.Bold, FontStyle.Normal);

Console.WriteLine(localFont.FontFamily); // Arial
Console.WriteLine(localFont.ToString());
```

Because `LocalFont` derives from `Font`, it fits anywhere the conversion API accepts a `Font` reference, keeping substitution logic consistent across different font source types. The `FontWeight` and `FontStyle` properties let downstream code branch on style without parsing the family name string, which simplifies conditional rendering logic.

For broader context on PDF-to-SVG conversion in IronPDF, see the [IronPDF documentation hub](https://ironpdf.com/docs/), the [PDF conversion how-to guides](https://ironpdf.com/how-to/pdf-to-svg/), and the [getting-started guide](https://ironpdf.com/get-started/). Font substitution examples are covered in the [PDF rendering examples](https://ironpdf.com/examples/pdf-to-svg/).

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `LocalFont Class - IronPDF C# API Reference`
- v2 (human): `LocalFont: SVG Font Substitution in C#`
- v3 (balanced): `LocalFont Class | IronPDF C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Use LocalFont in IronPDF to specify a system font by family, weight, and style for PDF-to-SVG conversion in C#. Extends Font with value equality support.`
- v2 (human): `Control SVG text rendering in C# with IronPDF's LocalFont: name a system typeface, set weight and style, and substitute fonts during PDF-to-SVG conversion.`
- v3 (balanced): `Reference for IronPDF's LocalFont class in C#: specify a local system font by family, FontWeight, and FontStyle for accurate PDF-to-SVG text output.`

---

## Structured data

**TechArticle abstract**

> Specifying a system-installed typeface for SVG output during PDF conversion is the role the IronPDF LocalFont object fills. Constructed with a font family string, a FontWeight, and a FontStyle, it exposes those values through the FontFamily, FontWeight, and FontStyle properties and plugs into the PDF-to-SVG rendering pipeline wherever a Font reference is accepted. Overrides of Equals and GetHashCode make instances safe for use in dictionaries and hash sets, supporting font-substitution mapping scenarios.

**FAQPage entries**

```json
[
  {
    "question": "Where does LocalFont live in the IronPDF API?",
    "answer": "LocalFont is a class in the PdfToSvg namespace, shipped in IronPdf.dll. It extends the Font base type and is constructed with new LocalFont(string fontFamily, FontWeight fontWeight, FontStyle fontStyle)."
  },
  {
    "question": "How do you specify a system font for PDF-to-SVG conversion in C#?",
    "answer": "Construct a LocalFont with the family name, a FontWeight value, and a FontStyle value. The resulting object can be passed to the IronPDF PDF-to-SVG conversion configuration wherever a Font reference is accepted."
  },
  {
    "question": "Can LocalFont instances be used as dictionary keys or in hash sets?",
    "answer": "Yes. LocalFont overrides both Equals and GetHashCode, so instances compare by value and behave correctly as dictionary keys or hash-set members, which is useful when building font-substitution maps."
  },
  {
    "question": "How do you inspect the typeface details stored in a LocalFont?",
    "answer": "Read the FontFamily, FontWeight, and FontStyle properties after construction. Call ToString for a human-readable summary suitable for logging or diagnostics."
  }
]
```