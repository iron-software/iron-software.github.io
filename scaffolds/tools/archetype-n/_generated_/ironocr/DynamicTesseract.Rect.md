<!--
N-Full / value-struct. DynamicTesseract. Frame C (when-fronted). Decl: public sealed class Rect : ValueType, IEquatable<Rect>.
Members verified 2026-06-23: ctor(Int32,Int32,Int32,Int32); Empty (field); X1, Y1, X2, Y2, Width, Height (props); FromCoords(Int32,Int32,Int32,Int32), Equals, GetHashCode, ToString; operators Equality, Inequality.
Cross-ref: PageIterator.TryGetBoundingBox(out Rect), TryGetBaseline(out Rect) (same dir).
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.Rect.html
-->

## Injected overview (Markdown)

When OCR reports where something sits on a page, the answer comes back as a `Rect`. It is the rectangle in pixel coordinates that locates a recognized region, the box a `PageIterator` fills through `TryGetBoundingBox` and `TryGetBaseline` for the current block, line, word, or symbol. Reading it tells code exactly where a result lives on the page image, which is what drawing, cropping, and region work all start from.

A `Rect` is created from its two corner points with `new Rect(x1, y1, x2, y2)`, or through the static `FromCoords` factory that takes the same four coordinates. The static `Empty` field gives a zero rectangle to start from or to test against. It is a value type, so each copy is independent and two rectangles compare by value through `Equals` and the `==` and `!=` operators, which is convenient when checking whether a returned box is empty.

The corner properties `X1`, `Y1`, `X2`, and `Y2` give the top-left and bottom-right coordinates, while `Width` and `Height` give the derived size, so code can read either the bounds or the dimensions without computing them. Because the struct is immutable in practice, construct a new value when a different box is needed rather than editing one in place. A `Rect` returned by an iterator is in the page image's pixel space, so align it with the same image when cropping or drawing.

```csharp
using DynamicTesseract;

if (iterator.TryGetBoundingBox(PageIteratorLevel.Word, out Rect box))
    Console.WriteLine($"{box.Width} x {box.Height} at ({box.X1}, {box.Y1})");
```

The [region of an image how-to](https://ironsoftware.com/csharp/ocr/how-to/ocr-region-of-an-image/) reads a specific area, the [content area crop example](https://ironsoftware.com/csharp/ocr/examples/net-tesseract-content-area-rectangle-crop/) crops by rectangle, and the [read table how-to](https://ironsoftware.com/csharp/ocr/how-to/read-table-in-document/) works with positioned cells.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `Rect Struct - IronOCR C# API Reference`
- v2 (human): `Rect: OCR Bounding Boxes in C#`
- v3 (balanced): `Rect Struct | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Locate OCR regions in C# with the IronOCR Rect struct: X1, Y1, X2, Y2, Width, Height, the FromCoords factory, and the Empty value.`
- v2 (human): `Read where a recognized region sits in C# with Rect: the pixel rectangle PageIterator returns, with corner coordinates and size.`
- v3 (balanced): `Reference for the IronOCR Rect struct in C#: corner coordinates, Width and Height, FromCoords, and the Empty rectangle for OCR boxes.`

---

## Structured data

**TechArticle abstract**

> Locate a recognized region on a page with Rect in IronOCR for C#, the pixel-coordinate rectangle a PageIterator fills through TryGetBoundingBox and TryGetBaseline. Construct it from two corner points or the FromCoords factory, read X1, Y1, X2, Y2 for the bounds and Width and Height for the size, and use the static Empty value to start from or test against. It is a value type that compares by value.

**FAQPage entries**

```json
[
  {
    "question": "Where does Rect live in the IronOCR API?",
    "answer": "Rect is a value-type struct in the DynamicTesseract namespace, shipped in IronOcr.dll. It is declared as a struct (sealed class : ValueType in docfx) and implements IEquatable<Rect>, so it compares by value. It holds a pixel-coordinate rectangle for OCR regions."
  },
  {
    "question": "How do you get the bounding box of a recognized region in C#?",
    "answer": "Call TryGetBoundingBox on a PageIterator with a PageIteratorLevel; it fills an out Rect with the region's pixel coordinates and returns false when none is available. Read X1, Y1, X2, and Y2 for the corners, or Width and Height for the size."
  },
  {
    "question": "How do you create a Rect in C#?",
    "answer": "Use the constructor with the two corner coordinates, new Rect(x1, y1, x2, y2), or the static FromCoords factory with the same four values. The static Empty field provides a zero rectangle to use as a default or to compare against."
  }
]
```
