<!--
N-Mid (value-type struct, 1 property + ctor). Frame E. IronBarCode.
Members verified 2026-06-23: Points(readonly PointF[]). Struct (sealed class : ValueType).
Target: https://ironsoftware.com/csharp/barcode/object-reference/api/IronBarCode.BarcodeResultPosition.html
-->

## Injected overview (Markdown)

Locating a detected barcode inside its source image runs through `BarcodeResultPosition`. The struct describes where a single code sits, holding the corner coordinates that bound the symbol so a developer can crop, highlight, or overlay a marker on the scanned page. It is the lightweight geometry record a developer reaches for when a read needs to do more than return text, such as drawing a box around each code that was found.

`BarcodeResultPosition` is a value type, so it copies by value and carries no behavior of its own beyond the data it holds. A developer obtains one from a detected code's position rather than constructing it for a normal read, then reads its coordinates to place an annotation. Because it is a struct, passing it around is cheap and it never needs disposal.

The single property is `Points`, a read-only `PointF[]` of the corner coordinates that outline the barcode in the image. Those points are enough to compute a bounding box, draw an outline, or map the symbol back to a region of the original page for cropping. Read `Points` to drive whatever visual or spatial step the job needs.

The [read barcodes from images how-to](https://ironsoftware.com/csharp/barcode/how-to/read-barcodes-from-images/) reads codes whose position this records, and the [read multiple barcodes how-to](https://ironsoftware.com/csharp/barcode/how-to/read-multiple-barcodes/) locates each of several codes.

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `BarcodeResultPosition - IronBarcode C# API`
- v2 (human): `BarcodeResultPosition: Locate Codes in C#`
- v3 (balanced): `BarcodeResultPosition | IronBarcode C# API`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Locate a scanned barcode in C# with the IronBarcode BarcodeResultPosition struct: its Points property holds the corner coordinates of the code.`
- v2 (human): `Find where a barcode sits in an image in C# with the IronBarcode BarcodeResultPosition struct: read its corner Points to crop or highlight.`
- v3 (balanced): `Reference for the IronBarcode BarcodeResultPosition struct in C#: the corner Points that locate a detected barcode in its source image.`

---

## Structured data

**TechArticle abstract**

> Locating a detected barcode in C# runs through the IronBarcode BarcodeResultPosition struct. This value type holds the corner coordinates of one code in its Points property, a read-only PointF array. Use those points to crop, outline, or annotate the symbol in the scanned image. As a struct it copies by value and needs no disposal.

**FAQPage entries**

```json
[
  {
    "question": "Where does BarcodeResultPosition live in the IronBarcode API?",
    "answer": "BarcodeResultPosition is a struct in the IronBarCode namespace, shipped in IronBarCode.dll. As a value type it derives from ValueType and exposes the Points property describing a code's location."
  },
  {
    "question": "How do I find where a barcode is located in an image with IronBarcode?",
    "answer": "Read the Points property of the BarcodeResultPosition, a read-only PointF array of the symbol's corner coordinates. Those points let you compute a bounding box, draw an outline, or crop the code from the page."
  }
]
```
