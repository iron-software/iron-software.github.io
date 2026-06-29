<!--
N-Lite/enum. Members verified 2026-06-23: InLineWithText, Square, Tight, Through, TopAndBottom, BehindText, InFrontOfText, None.
Consumer: Image.WrapText / Shape.WrapText (public WrapText WrapText).
Base: System.Object (public sealed class WrapText : Enum). Namespace IronWord.Models.Enums, assembly IronWord.dll.
Sibling of TextWrapStyle (image-side wrapping) — opener and framing kept distinct.
Target: https://ironsoftware.com/csharp/word/object-reference/api/IronWord.Models.Enums.WrapText.html
-->

## Injected overview (Markdown)

Image text-wrapping behavior on a picture or shape is what `WrapText` sets, assigned to `Image.WrapText` and `Shape.WrapText`. `InLineWithText` keeps the image on the text line, `Square` and `Tight` wrap surrounding text in a rectangle or along the contours, and `Through` lets text flow into gaps. `TopAndBottom` reserves whole lines above and below, `BehindText` and `InFrontOfText` layer the image under or over the text, and `None` leaves the flow untouched. The [add image to Word document](https://ironsoftware.com/csharp/word/how-to/add-image/) walkthrough places a picture.

```csharp
image.WrapText = WrapText.Square;
```

---

## Recommended metadata

**Meta-title (≤ 60 chars)**
- v1 (algorithm): `WrapText Enum - IronWord C# API Reference`
- v2 (human): `WrapText: Image Text Wrapping in C# Word`
- v3 (balanced): `WrapText Enum | IronWord C# API Reference`

**Meta-description (120–160 chars)**
- v1 (algorithm): `Set image text wrapping in C# with the IronWord WrapText enum: InLineWithText, Square, Tight, Through, TopAndBottom, and more.`
- v2 (human): `Control how Word text wraps a picture in C# with WrapText: keep it inline, wrap Square or Tight, flow Through, or layer it behind text.`
- v3 (balanced): `Reference for the IronWord WrapText enum in C#: InLineWithText, Square, Tight, Through, TopAndBottom, BehindText, and InFrontOfText.`

---

## Structured data

**TechArticle abstract**

> Set how text wraps a picture in IronWord with WrapText, assigned to Image.WrapText and Shape.WrapText. InLineWithText keeps the image on the line, Square and Tight wrap text around it, Through fills gaps, and BehindText layers the image under the text.
