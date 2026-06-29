<!--
N-Full (class, 7 props). Frame B (identity-by-role). IronOCR / DynamicTesseract.
Verified 2026-06-23: class : Object; properties Id (Int32), IsBold, IsFixedPitch, IsFraktur, IsItalic,
IsSerif (Boolean), Name (String). Sibling FontAttributes verified (exposes a FontInfo). Namespace
DynamicTesseract; assembly IronOcr.dll; base Object.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.FontInfo.html
-->

## Injected overview (Markdown)

`FontInfo` is the record of a single font that Tesseract identified while recognizing a page. It names the font family and the fixed typographic traits that family carries, so interop code that needs to know what a piece of text was set in, rather than merely what it said, reads its properties. The nearest type it is paired with is `FontAttributes`, which describes how a font was used at one position; `FontInfo` is the shared family description those per-span attributes point back to.

A `FontInfo` is produced by the engine during recognition, not constructed by hand, and turns up wherever the result surface exposes font detail. The everyday properties split into two groups. Identity is `Name`, the font family name as a `String`, and `Id`, an `Int32` index the engine assigns to that font within a read. Style traits are the `Boolean` flags `IsBold`, `IsItalic`, `IsSerif`, `IsFixedPitch`, and `IsFraktur`, reporting weight, slant, whether the family is serif or sans, whether it is monospaced, and whether it is a blackletter Fraktur face. Reading those flags lets code rebuild approximate formatting, distinguish a heading font from body text, or flag unusual faces that may need a different language model.

Because the values come straight from the recognizer, treat them as the engine's best estimate rather than ground truth, and read them after a successful recognition pass. For ordinary text extraction the high-level IronOCR result objects are the simpler surface; reach for `FontInfo` through the `DynamicTesseract` layer when font-level detail is what the task needs.

```csharp
Console.WriteLine($"{font.Name} bold={font.IsBold} serif={font.IsSerif}");
```

The [read results how-to](https://ironsoftware.com/csharp/ocr/how-to/read-results/) walks through the result model, and the [result confidence how-to](https://ironsoftware.com/csharp/ocr/how-to/tesseract-result-confidence/) explains how reliable a recognition pass is before trusting its font detail.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `FontInfo Class - IronOCR C# API Reference`
- v2 (human): `FontInfo: Detected Font Details in C#`
- v3 (balanced): `FontInfo Class | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read detected font details in C# with the IronOCR FontInfo class: Name, Id, and the IsBold, IsItalic, IsSerif, IsFixedPitch, and IsFraktur flags.`
- v2 (human): `Find out what font recognized text was set in with the IronOCR FontInfo class in C#: the family name plus bold, italic, serif, and monospace flags.`
- v3 (balanced): `Reference for the IronOCR FontInfo class in C#: the family Name and Id with IsBold, IsItalic, IsSerif, IsFixedPitch, and IsFraktur traits.`

---

## Structured data

**TechArticle abstract**

> FontInfo records a single font that Tesseract identified during recognition in IronOCR for C#. Produced by the engine in the DynamicTesseract layer, it exposes the family Name and an Id, plus the IsBold, IsItalic, IsSerif, IsFixedPitch, and IsFraktur style flags. Read it alongside FontAttributes to rebuild formatting; for ordinary extraction, IronOCR's high-level results are simpler.

**FAQPage entries**

```json
[
  {
    "question": "Where does FontInfo live in the IronOCR API?",
    "answer": "FontInfo is a class in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from Object and is produced by the engine during recognition rather than constructed in everyday code."
  },
  {
    "question": "What font details does FontInfo report in C#?",
    "answer": "It reports the family Name and an Id, plus the style flags IsBold, IsItalic, IsSerif, IsFixedPitch, and IsFraktur, covering weight, slant, serif versus sans, monospacing, and blackletter Fraktur faces."
  },
  {
    "question": "How does FontInfo relate to FontAttributes in IronOCR?",
    "answer": "FontInfo describes a font family and its fixed traits; FontAttributes describes how that font was used at one position, holding a FontInfo along with the detected point size, small caps, and underline. Read FontInfo for the family and FontAttributes for the per-span styling."
  }
]
```
