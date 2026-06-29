<!--
N-Mid (class, 4 props + ctor). Frame A (subject-verb). IronOCR / DynamicTesseract.
Verified 2026-06-23: class : Object; ctor(FontInfo, Boolean, Boolean, Int32); FontInfo (FontInfo),
IsSmallCaps (Boolean), IsUnderlined (Boolean), PointSize (Int32). Cross-ref FontInfo verified (sibling page).
Namespace DynamicTesseract; assembly IronOcr.dll; base Object.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.FontAttributes-overview.html
-->

## Injected overview (Markdown)

`FontAttributes` records the styling Tesseract detected for a span of recognized text, the per-occurrence facts a `FontInfo` does not carry on its own. Where `FontInfo` describes a named font family and its fixed traits, `FontAttributes` captures how that font was used at a specific spot on the page, which is what code reconstructing formatting or building a styled export actually reads.

Four members hold the detail. `FontInfo` is the underlying `FontInfo` instance for the family, `PointSize` is the detected size as an `Int32`, and `IsSmallCaps` and `IsUnderlined` are `Boolean` flags for those two styles. The constructor takes the `FontInfo`, the two flags, and the point size. This sits in the `DynamicTesseract` interop layer and is produced during recognition rather than created by hand, so the usual pattern is to read its members after a read to learn how a word was styled. For routine text extraction, IronOCR's high-level result objects are the simpler surface; reach here when font styling per span genuinely matters.

The [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) walks through the result model that exposes recognized text and its attributes.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontAttributes - IronOCR C# API Reference`
- v2 (human): `FontAttributes: Detected Font Styling in C#`
- v3 (balanced): `FontAttributes Class | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read detected font styling in C# with the IronOCR FontAttributes class: FontInfo, PointSize, IsSmallCaps, and IsUnderlined for a span of text.`
- v2 (human): `Learn how a word was styled in C# with the IronOCR FontAttributes class: the font family, point size, small caps, and underline that Tesseract detected.`
- v3 (balanced): `Reference for the IronOCR FontAttributes class in C#: FontInfo, PointSize, IsSmallCaps, and IsUnderlined for recognized text.`

---

## Structured data

**TechArticle abstract**

> FontAttributes records the font styling Tesseract detected for a span of recognized text in IronOCR for C#. Produced during recognition in the DynamicTesseract layer, it exposes the underlying FontInfo, the PointSize, and the IsSmallCaps and IsUnderlined flags. Read it to reconstruct formatting; for routine extraction, IronOCR's high-level results are simpler.

**FAQPage entries**

```json
[
  {
    "question": "Where does FontAttributes live in the IronOCR API?",
    "answer": "FontAttributes is a class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from Object and is produced during recognition rather than constructed in everyday code."
  },
  {
    "question": "How does FontAttributes differ from FontInfo in IronOCR?",
    "answer": "FontInfo describes a font family and its fixed traits, while FontAttributes records how that font was used at one spot: it holds the FontInfo plus the detected PointSize and the IsSmallCaps and IsUnderlined flags for that span of text."
  }
]
```
