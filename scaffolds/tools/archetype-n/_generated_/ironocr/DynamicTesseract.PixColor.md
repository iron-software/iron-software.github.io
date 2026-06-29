<!--
N-Full / value-struct. DynamicTesseract. Frame E (feature-fronted). Decl: public sealed class PixColor : ValueType, IEquatable<PixColor>.
Members verified 2026-06-23: ctor(Byte,Byte,Byte,Byte); Red, Green, Blue, Alpha (props); FromRgb(UInt32), FromRgba(UInt32), ToRGBA(), Equals, GetHashCode, ToString; operators Equality, Inequality, Explicit to/from IronSoftware.Drawing.Color.
Cross-ref: PixColormap (consumes PixColor, same dir), IronSoftware.Drawing.Color.
Target: https://ironsoftware.com/csharp/ocr/object-reference/api/DynamicTesseract.PixColor.html
-->

## Injected overview (Markdown)

A single RGBA color in Leptonica's pixel model is held by `PixColor`. It is the color value used across the low-level image layer, the entries of a `PixColormap`, the channels of a pixel, and the colors compared when selecting or replacing regions of an image. Working with it directly is rarely needed for ordinary text OCR, but it is the type that appears when code inspects or edits the colors of an image before recognition.

A `PixColor` is created from its four channel bytes with `new PixColor(red, green, blue, alpha)`, or built from a packed integer through the static `FromRgb` and `FromRgba` factories. It is a value type, so copies are independent and two colors compare by value through `Equals` and the `==` and `!=` operators. Explicit conversion operators bridge to and from `IronSoftware.Drawing.Color`, so a `PixColor` can be turned into the shared drawing color the rest of the library uses, and back again.

The four channel properties, `Red`, `Green`, `Blue`, and `Alpha`, expose the components for reading or matching, and `ToRGBA` packs them back into a single integer for APIs that expect the combined form. Because the struct is immutable in practice, construct a new value rather than mutating an existing one when a different color is needed. Pass a `PixColor` to a `PixColormap` to add or test palette entries when adjusting an image's colors.

```csharp
using DynamicTesseract;
using IronSoftware.Drawing;

var black = new PixColor(0, 0, 0, 255);
PixColor fromPacked = PixColor.FromRgba(0xFF0000FF);
Color shared = (Color)black;
```

The [replace color example](https://ironsoftware.com/csharp/ocr/examples/replace-color/) edits image colors before OCR, the [select text by color example](https://ironsoftware.com/csharp/ocr/examples/select-text-by-color/) matches colors, and the [image color correction how-to](https://ironsoftware.com/csharp/ocr/how-to/image-color-correction/) covers color cleanup.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `PixColor Struct - IronOCR C# API Reference`
- v2 (human): `PixColor: RGBA Color for OCR in C#`
- v3 (balanced): `PixColor Struct | IronOCR C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Hold an RGBA color in C# with the IronOCR PixColor struct: Red, Green, Blue, Alpha, FromRgb, FromRgba, and conversion to Color.`
- v2 (human): `Work with a single Leptonica color in C# using PixColor: set its RGBA channels, build from a packed value, or convert to a drawing Color.`
- v3 (balanced): `Reference for the IronOCR PixColor struct in C#: RGBA channels, FromRgb and FromRgba factories, and conversion to IronSoftware Color.`

---

## Structured data

**TechArticle abstract**

> Hold a single RGBA color in Leptonica's pixel model with PixColor in IronOCR for C#. Construct it from four channel bytes or the FromRgb and FromRgba factories, read the Red, Green, Blue, and Alpha properties, and pack them back with ToRGBA. Explicit operators convert to and from IronSoftware.Drawing.Color, and a PixColor is passed to a PixColormap when adjusting image colors.

**FAQPage entries**

```json
[
  {
    "question": "Where does PixColor live in the IronOCR API?",
    "answer": "PixColor is a value-type struct in the DynamicTesseract namespace, shipped in IronOcr.dll. It is declared as a struct (sealed class : ValueType in docfx) and implements IEquatable<PixColor>, so it compares by value. It represents one RGBA color in the Leptonica image layer."
  },
  {
    "question": "How do you create a PixColor in C#?",
    "answer": "Call the constructor with red, green, blue, and alpha bytes, as in new PixColor(0, 0, 0, 255), or use the static FromRgb and FromRgba factories to build one from a packed unsigned integer. ToRGBA packs the channels back into a single value."
  },
  {
    "question": "How do you convert a PixColor to a drawing Color?",
    "answer": "PixColor defines explicit conversion operators to and from IronSoftware.Drawing.Color, so cast a PixColor to Color, or a Color to PixColor, to move between the Leptonica color and the shared drawing color the rest of the library uses."
  }
]
```
