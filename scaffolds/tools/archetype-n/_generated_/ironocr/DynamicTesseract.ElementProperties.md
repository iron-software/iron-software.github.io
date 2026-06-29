<!--
N-Mid (value-type struct, 4 props + ctor). Frame C (when-fronted). IronOCR / DynamicTesseract.
Verified 2026-06-23: sealed class : ValueType (struct); ctor(Orientation, TextLineOrder, WritingDirection, Single);
DeskewAngle (Single), Orientation, TextLineOrder, WritingDirection. Namespace DynamicTesseract;
assembly IronOcr.dll; base ValueType.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.ElementProperties.html
-->

## Injected overview (Markdown)

When low-level code needs the layout orientation of a recognized page element, `ElementProperties` carries it. The value groups the geometric facts Tesseract reports about a region, the rotation it sits at, the order its text lines run in, and the direction the script is written, into one struct the interop layer hands back during analysis.

Four members describe the element. `Orientation` gives the rotation of the region as an `Orientation` value, `TextLineOrder` reports how its lines are stacked as a `TextLineOrder` value, and `WritingDirection` reports left-to-right or right-to-left as a `WritingDirection` value. `DeskewAngle` is a `Single` holding the fine skew angle, the small tilt to correct after the coarse orientation is known. The constructor takes all four in that order. Being a value type, an `ElementProperties` is copied by value and read after layout analysis to decide how to deskew or reorder a region. This sits in the `DynamicTesseract` interop layer; for ordinary page-rotation handling, IronOCR's high-level orientation features are the simpler path.

The [detect page rotation how-to](https://ironsoftware.com/csharp/ocr/how-to/detect-page-rotation/) reads orientation at the IronOCR level, and the [orientation correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-orientation-correction/) straightens a skewed image.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `ElementProperties - IronOCR C# API Reference`
- v2 (human): `ElementProperties: Element Orientation in C#`
- v3 (balanced): `ElementProperties Struct | IronOCR C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Read element layout in C# with the IronOCR ElementProperties struct: Orientation, TextLineOrder, WritingDirection, and DeskewAngle for a region.`
- v2 (human): `Get the orientation, line order, writing direction, and skew of a page region in C# with the IronOCR ElementProperties value type.`
- v3 (balanced): `Reference for the IronOCR ElementProperties struct in C#: Orientation, TextLineOrder, WritingDirection, and DeskewAngle of a recognized region.`

---

## Structured data

**TechArticle abstract**

> ElementProperties carries the layout orientation of a recognized page region in IronOCR for C#. Returned by the DynamicTesseract interop layer during analysis, this value type exposes Orientation, TextLineOrder, WritingDirection, and a DeskewAngle Single. Read it to decide how to deskew or reorder a region; for ordinary page-rotation handling, IronOCR's high-level features are simpler.

**FAQPage entries**

```json
[
  {
    "question": "Where does ElementProperties live in the IronOCR API?",
    "answer": "ElementProperties is a value-type struct in the DynamicTesseract namespace, shipped in IronOcr.dll. It derives from ValueType and is returned by the interop layer's layout analysis rather than constructed in everyday code."
  },
  {
    "question": "What does ElementProperties tell you about a page element in C#?",
    "answer": "It reports the region's Orientation, its TextLineOrder, its WritingDirection, and a DeskewAngle Single for the fine tilt. Together these describe how the element is rotated and laid out so code can deskew or reorder it correctly."
  }
]
```
